/**
 * Suite: Popup rendering
 * Testa estados do popup com diferentes combinações de dados.
 */

const { openPopup } = require('./helpers');

// Dados de exemplo para testes
const FULL_DATA = {
  claudeUsage: {
    percent:             32,
    resetAt:             new Date(Date.now() + 2 * 3_600_000 + 14 * 60_000).toISOString(),
    weeklyPercent:       31,
    weeklyResetAt:       new Date(Date.now() + 89 * 3_600_000).toISOString(),
    designWeeklyPercent: 48,
    designWeeklyResetAt: new Date(Date.now() + 113 * 3_600_000).toISOString(),
    plan:                'pro',
    ts:                  Date.now()
  }
};

const NO_DESIGN_DATA = {
  claudeUsage: {
    percent:       22,
    resetAt:       new Date(Date.now() + 3_600_000).toISOString(),
    weeklyPercent: 10,
    weeklyResetAt: new Date(Date.now() + 50 * 3_600_000).toISOString(),
    plan:          'pro',
    ts:            Date.now()
  }
};

const WARN_DATA = {
  claudeUsage: {
    percent:  75,
    resetAt:  new Date(Date.now() + 3_600_000).toISOString(),
    plan:     'pro',
    ts:       Date.now()
  }
};

const CRIT_DATA = {
  claudeUsage: {
    percent:  92,
    resetAt:  new Date(Date.now() + 3_600_000).toISOString(),
    plan:     'pro',
    ts:       Date.now()
  }
};

module.exports = async function(describe) {

  // ── 1. Estado vazio ──────────────────────────────────────────────────────
  await describe('Empty state (no data)', async (assert) => {
    const { browser, page } = await openPopup({});
    try {
      const emptyVisible = await page.$eval('#empty-section',
        el => !el.classList.contains('hidden'));
      assert(emptyVisible, 'Empty section is visible');

      const dataHidden = await page.$eval('#data-section',
        el => el.classList.contains('hidden'));
      assert(dataHidden, 'Data section is hidden');
    } finally { await browser.close(); }
  });

  // ── 2. Dados completos ───────────────────────────────────────────────────
  await describe('Full data (session + weekly + design)', async (assert) => {
    const { browser, page } = await openPopup(FULL_DATA);
    try {
      const dataVisible = await page.$eval('#data-section',
        el => !el.classList.contains('hidden'));
      assert(dataVisible, 'Data section is visible');

      const pct = await page.$eval('#pct-text', el => el.textContent);
      assert(pct === '32%', `Session pct shows 32% (got "${pct}")`);

      const plan = await page.$eval('#plan', el => el.textContent);
      assert(plan === 'Pro', `Plan badge shows "Pro" (got "${plan}")`);

      const weeklyVisible = await page.$eval('#weekly-row',
        el => !el.classList.contains('hidden'));
      assert(weeklyVisible, 'Weekly row is visible');

      const weeklyPct = await page.$eval('#weekly-pct-text', el => el.textContent);
      assert(weeklyPct.includes('31%'), `Weekly pct includes 31% (got "${weeklyPct}")`);

      const designVisible = await page.$eval('#design-category',
        el => !el.classList.contains('hidden'));
      assert(designVisible, 'Claude Design category is visible');

      const designPct = await page.$eval('#weekly-design-pct-text', el => el.textContent);
      assert(designPct.includes('48%'), `Design pct includes 48% (got "${designPct}")`);
    } finally { await browser.close(); }
  });

  // ── 3. Sem dados de Design ───────────────────────────────────────────────
  await describe('Weekly data without Claude Design', async (assert) => {
    const { browser, page } = await openPopup(NO_DESIGN_DATA);
    try {
      const weeklyVisible = await page.$eval('#weekly-row',
        el => !el.classList.contains('hidden'));
      assert(weeklyVisible, 'Weekly row is visible');

      const designHidden = await page.$eval('#design-category',
        el => el.classList.contains('hidden'));
      assert(designHidden, 'Claude Design category is hidden when data is absent');
    } finally { await browser.close(); }
  });

  // ── 4. Cor da barra — warn (70–89%) ─────────────────────────────────────
  await describe('Progress bar color — warn (75%)', async (assert) => {
    const { browser, page } = await openPopup(WARN_DATA);
    try {
      const hasWarn = await page.$eval('#bar',
        el => el.classList.contains('warn'));
      assert(hasWarn, 'Bar has "warn" class at 75%');

      const hasCrit = await page.$eval('#bar',
        el => el.classList.contains('crit'));
      assert(!hasCrit, 'Bar does NOT have "crit" class at 75%');
    } finally { await browser.close(); }
  });

  // ── 5. Cor da barra — crit (≥90%) ───────────────────────────────────────
  await describe('Progress bar color — crit (92%)', async (assert) => {
    const { browser, page } = await openPopup(CRIT_DATA);
    try {
      const hasCrit = await page.$eval('#bar',
        el => el.classList.contains('crit'));
      assert(hasCrit, 'Bar has "crit" class at 92%');
    } finally { await browser.close(); }
  });

  // ── 6. i18n strings aplicadas ───────────────────────────────────────────
  await describe('i18n strings', async (assert) => {
    const { browser, page } = await openPopup(FULL_DATA);
    try {
      const sessionLabel = await page.$eval(
        '[data-i18n="session_label"]', el => el.textContent);
      assert(sessionLabel === 'Current session (5h)',
        `session_label translated (got "${sessionLabel}")`);

      const weeklyLabel = await page.$eval(
        '[data-i18n="weekly_label"]', el => el.textContent);
      assert(weeklyLabel === 'Weekly (7 days)',
        `weekly_label translated (got "${weeklyLabel}")`);

      const allModels = await page.$eval(
        '[data-i18n="weekly_all_models"]', el => el.textContent);
      assert(allModels === 'All models',
        `weekly_all_models translated (got "${allModels}")`);

      const designLabel = await page.$eval(
        '[data-i18n="weekly_design"]', el => el.textContent);
      assert(designLabel === 'Claude Design',
        `weekly_design translated (got "${designLabel}")`);
    } finally { await browser.close(); }
  });

};
