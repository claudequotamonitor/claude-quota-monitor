/* ── i18n helper ── */
const t = (key) => chrome.i18n.getMessage(key) || key;

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  // Hint de estado vazio (contém link, não pode ser só textContent)
  const hint = document.getElementById('no-data-hint');
  if (hint) hint.innerHTML = t('no_data_hint').replace(
    'claude.ai',
    '<a id="open-claude" href="#">claude.ai</a>'
  );
}

/* ── Formatação de tempo ── */
function fmtReset(isoOrMs) {
  if (!isoOrMs) return '—';
  const ts = typeof isoOrMs === 'number'
    ? (isoOrMs > 1e12 ? isoOrMs : isoOrMs * 1000)
    : Date.parse(isoOrMs);
  if (!ts || isNaN(ts)) return String(isoOrMs);
  const diff = ts - Date.now();
  if (diff <= 0) return t('now');
  const totalMin = Math.floor(diff / 60_000);
  const d = Math.floor(totalMin / 1_440);
  const h = Math.floor((totalMin % 1_440) / 60);
  const m = totalMin % 60;
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function fmtAgo(ts) {
  if (!ts) return '';
  const prefix = t('updated_ago');
  const s = Math.round((Date.now() - ts) / 1000);
  if (s < 60)  return `${prefix} ${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60)  return `${prefix} ${m}min`;
  const h = Math.floor(m / 60);
  return `${prefix} ${h}h ${m % 60}min`;
}

let lastTs = null;

function tickLastUpdate() {
  document.getElementById('last-update').textContent = fmtAgo(lastTs);
}

setInterval(tickLastUpdate, 1000);

/* ── Barra de progresso ── */
function setBar(barEl, pct) {
  barEl.style.width = `${pct}%`;
  barEl.className = 'bar' + (barEl.classList.contains('bar--sm') ? ' bar--sm' : '') +
    (pct >= 90 ? ' crit' : pct >= 70 ? ' warn' : '');
}

/* ── Renderização ── */
function render(u) {
  const hasData = u?.percent !== undefined;
  document.getElementById('data-section').classList.toggle('hidden', !hasData);
  document.getElementById('empty-section').classList.toggle('hidden', hasData);
  if (!hasData) return;

  document.getElementById('plan').textContent =
    u.plan ? u.plan.charAt(0).toUpperCase() + u.plan.slice(1).toLowerCase() : 'Pro';

  const pct = Math.min(100, Math.max(0, u.percent));
  setBar(document.getElementById('bar'), pct);
  document.getElementById('pct-text').textContent = `${pct}%`;
  document.getElementById('reset-text').textContent = fmtReset(u.resetAt);

  const weeklyRow = document.getElementById('weekly-row');
  if (u.weeklyPercent !== undefined) {
    weeklyRow.classList.remove('hidden');

    // Todos os modelos
    const wp = Math.min(100, Math.max(0, u.weeklyPercent));
    const barW = document.getElementById('bar-weekly');
    barW.classList.add('bar--sm');
    setBar(barW, wp);
    document.getElementById('weekly-pct-text').textContent = `${wp}% ${t('used_suffix')}`;
    document.getElementById('weekly-reset-text').textContent =
      `${t('resets_in')} ${fmtReset(u.weeklyResetAt)}`;

    // Claude Design
    const designCat = document.getElementById('design-category');
    if (u.designWeeklyPercent !== undefined) {
      designCat.classList.remove('hidden');
      const dp = Math.min(100, Math.max(0, u.designWeeklyPercent));
      const barD = document.getElementById('bar-weekly-design');
      barD.classList.add('bar--sm');
      setBar(barD, dp);
      document.getElementById('weekly-design-pct-text').textContent = `${dp}% ${t('used_suffix')}`;
      document.getElementById('weekly-design-reset-text').textContent =
        `${t('resets_in')} ${fmtReset(u.designWeeklyResetAt)}`;
    } else {
      designCat.classList.add('hidden');
    }
  } else {
    weeklyRow.classList.add('hidden');
  }

  lastTs = u.ts ?? null;
  tickLastUpdate();
}

/* ── Init ── */
applyI18n();
chrome.storage.local.get('claudeUsage', ({ claudeUsage }) => {
  render(claudeUsage ?? null);

  // Sem dados: tenta buscar agora e fica verificando a cada 3s
  if (!claudeUsage?.percent) {
    chrome.runtime.sendMessage({ type: 'FETCH_NOW' });

    const poll = setInterval(() => {
      chrome.storage.local.get('claudeUsage', ({ claudeUsage: u }) => {
        if (u?.percent !== undefined) {
          render(u);
          clearInterval(poll);
        }
      });
    }, 3000);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.claudeUsage) render(changes.claudeUsage.newValue ?? null);
});

/* ── Botões ── */
document.getElementById('refresh-btn').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://claude.ai/settings/usage' });
});

document.getElementById('donate-btn').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://ko-fi.com/claudequotamonitor' });
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'open-claude') {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://claude.ai' });
  }
});

const syncBtn = document.getElementById('sync-btn');
syncBtn.addEventListener('click', () => {
  syncBtn.classList.add('spinning');
  chrome.runtime.sendMessage({ type: 'FETCH_NOW' });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.claudeUsage) syncBtn.classList.remove('spinning');
});
