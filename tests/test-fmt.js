/**
 * Suite: Utility functions
 * Testa fmtReset diretamente — definida aqui como cópia fiel do popup.js.
 * Isso evita o eval frágil do módulo inteiro e mantém os testes determinísticos.
 */

// ── Cópia fiel de fmtReset de popup.js ──────────────────────────────────────
const t = (key) => key; // retorna a chave como fallback (suficiente para 'now')

function fmtReset(isoOrMs) {
  if (!isoOrMs) return '—';
  const ts = typeof isoOrMs === 'number'
    ? (isoOrMs > 1e12 ? isoOrMs : isoOrMs * 1000)
    : Date.parse(isoOrMs);
  if (!ts || isNaN(ts)) return String(isoOrMs);
  const diff = ts - Date.now();
  if (diff <= 0) return t('now');
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}
// ────────────────────────────────────────────────────────────────────────────

module.exports = async function(describe) {

  await describe('fmtReset — time formatting', async (assert) => {
    // Adiciona 5s de margem para compensar o drift de execução
    const future = (ms) => new Date(Date.now() + ms + 5_000).toISOString();
    const near   = (result, expected) => {
      // Aceita ±1 min de diferença (drift natural do teste)
      const [eh, em] = expected.split(/[h m]+/).map(Number);
      const [rh, rm] = result.split(/[h m]+/).map(Number);
      const expMin = (eh || 0) * 60 + (em || 0);
      const gotMin = (rh || 0) * 60 + (rm || 0);
      return Math.abs(expMin - gotMin) <= 1;
    };

    const r1 = fmtReset(future(2 * 3_600_000 + 30 * 60_000));
    assert(near(r1, '2h 30m'), `2h30m ISO → "${r1}" (expected ~2h 30m)`);

    const r2 = fmtReset(future(45 * 60_000));
    assert(near(r2, '45m'), `45m → "${r2}" (expected ~45m)`);

    const r3 = fmtReset(new Date(Date.now() - 1000).toISOString());
    assert(r3 === 'now', `Past timestamp → "${r3}"`);

    const r4 = fmtReset(null);
    assert(r4 === '—', `null → "—"`);

    const r5 = fmtReset(Date.now() + 3_600_000 + 5_000);
    assert(near(r5, '1h 0m'), `Numeric ms → "${r5}" (expected ~1h 0m)`);

    const r6 = fmtReset(future(10 * 3_600_000 + 5 * 60_000));
    assert(near(r6, '10h 5m'), `10h05m → "${r6}" (expected ~10h 5m)`);

    const r7 = fmtReset(new Date(Date.now() + 30_000).toISOString());
    assert(r7 === '0m', `< 1 min → "${r7}"`);
  });

};
