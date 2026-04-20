/**
 * Service worker
 *
 * - Polling via chrome.alarms a cada 10 min (sem aba aberta necessária)
 * - Restaura o badge ao reiniciar
 * - Atualiza o badge sempre que o storage mudar
 */

const ALARM = 'quota-poll';
const POLL_MINUTES = 10;

/* ── Fetch direto do background (funciona com os cookies do usuário) ── */
async function fetchUsage() {
  const { claudeUsage } = await chrome.storage.local.get('claudeUsage');
  const orgId = claudeUsage?.orgId;
  if (!orgId) return; // ainda não visitou claude.ai após instalar

  try {
    const res = await fetch(
      `https://claude.ai/api/organizations/${orgId}/usage`,
      { credentials: 'include' }
    );
    if (!res.ok) return;
    const data = await res.json();

    const session = data.five_hour;
    if (!session) return;

    // Claude Design weekly quota (internal API field: seven_day_omelette)
    const design = data.seven_day_omelette ?? null;

    chrome.storage.local.set({
      claudeUsage: {
        ...claudeUsage,
        percent:             session.utilization,
        resetAt:             session.resets_at,
        weeklyPercent:       data.seven_day?.utilization,
        weeklyResetAt:       data.seven_day?.resets_at,
        designWeeklyPercent: design?.utilization,
        designWeeklyResetAt: design?.resets_at,
        ts: Date.now()
      }
    });
  } catch { /* sem conexão ou sessão expirada */ }
}

/* ── Alarme periódico ── */
chrome.alarms.create(ALARM, { periodInMinutes: POLL_MINUTES });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM) fetchUsage();
});

/* ── Restaura badge e dispara fetch ao iniciar ── */
function restoreAndRefresh() {
  chrome.storage.local.get('claudeUsage', ({ claudeUsage }) => {
    updateBadge(claudeUsage);
    fetchUsage(); // atualiza logo ao abrir o navegador
  });
}

chrome.runtime.onStartup.addListener(restoreAndRefresh);
chrome.runtime.onInstalled.addListener((details) => {
  restoreAndRefresh();
  chrome.storage.local.remove('claudeUsageRaw'); // limpa resíduo de debug
  if (details.reason === 'install') {
    chrome.tabs.create({ url: chrome.runtime.getURL('onboarding.html') });
  }
});

/* ── Badge ── */
function updateBadge(u) {
  if (!u?.percent === undefined) return;
  const pct = u.percent;
  chrome.action.setBadgeText({ text: `${pct}%` });
  chrome.action.setBadgeBackgroundColor({
    color: pct >= 90 ? '#e53e3e' : pct >= 70 ? '#dd6b20' : '#2f855a'
  });
}

chrome.storage.onChanged.addListener((changes) => {
  if (changes.claudeUsage) updateBadge(changes.claudeUsage.newValue);
});

// Fetch imediato a pedido do popup
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'FETCH_NOW') fetchUsage();
});
