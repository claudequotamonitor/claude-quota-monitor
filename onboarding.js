// Apply i18n translations to all [data-i18n] elements
document.querySelectorAll('[data-i18n]').forEach(el => {
  const msg = chrome.i18n.getMessage(el.getAttribute('data-i18n'));
  if (msg) el.textContent = msg;
});

document.title = chrome.i18n.getMessage('onboarding_title') || document.title;

// ── Step 4: browser-specific pin instructions ─────────────────────────────

async function detectBrowser() {
  if (navigator.brave) {
    try { if (await navigator.brave.isBrave()) return 'brave'; } catch {}
  }
  if (/Edg\//.test(navigator.userAgent)) return 'edge';
  if (/Arc\//.test(navigator.userAgent))  return 'arc';
  return 'chrome';
}

function getLocale() {
  const lang = chrome.i18n.getUILanguage(); // e.g. "pt-BR", "zh-CN", "en"
  if (lang.startsWith('pt')) return 'pt_BR';
  if (lang.startsWith('zh')) return 'zh_CN';
  return lang.split('-')[0]; // "ar", "bn", "es", "fr", "hi", "id", "ru", "en"
}

const step4Instructions = {
  chrome: {
    en:    `Click the <b>🧩 Extensions</b> icon in the top-right of the toolbar → find <b>Claude Quota Monitor</b> → click the <b>📌 pin</b> icon. The badge will always be visible.`,
    pt_BR: `Clique no ícone <b>🧩 Extensões</b> no canto superior direito da barra → encontre <b>Claude Quota Monitor</b> → clique no ícone <b>📌 fixar</b>. O badge ficará sempre visível.`,
    ar:    `انقر على أيقونة <b>🧩 الإضافات</b> في أعلى يمين الشريط → ابحث عن <b>Claude Quota Monitor</b> → انقر على أيقونة <b>📌 التثبيت</b>. ستظهر الشارة دائمًا.`,
    bn:    `টুলবারের উপরের ডানদিকে <b>🧩 Extensions</b> আইকনে ক্লিক করুন → <b>Claude Quota Monitor</b> খুঁজুন → <b>📌 pin</b> আইকনে ক্লিক করুন। ব্যাজ সবসময় দৃশ্যমান থাকবে।`,
    es:    `Haz clic en el icono <b>🧩 Extensiones</b> en la parte superior derecha de la barra → busca <b>Claude Quota Monitor</b> → haz clic en el icono <b>📌 anclar</b>. El badge siempre será visible.`,
    fr:    `Cliquez sur l'icône <b>🧩 Extensions</b> en haut à droite de la barre → trouvez <b>Claude Quota Monitor</b> → cliquez sur l'icône <b>📌 épingler</b>. Le badge sera toujours visible.`,
    hi:    `टूलबार के ऊपरी दाएं कोने में <b>🧩 Extensions</b> आइकन पर क्लिक करें → <b>Claude Quota Monitor</b> खोजें → <b>📌 pin</b> आइकन पर क्लिक करें। बैज हमेशा दिखाई देगा।`,
    id:    `Klik ikon <b>🧩 Ekstensi</b> di kanan atas bilah alat → cari <b>Claude Quota Monitor</b> → klik ikon <b>📌 sematkan</b>. Badge akan selalu terlihat.`,
    ru:    `Нажмите значок <b>🧩 Расширения</b> в правом верхнем углу панели → найдите <b>Claude Quota Monitor</b> → нажмите значок <b>📌 закрепить</b>. Значок будет всегда виден.`,
    zh_CN: `点击工具栏右上角的 <b>🧩 扩展程序</b> 图标 → 找到 <b>Claude Quota Monitor</b> → 点击 <b>📌 固定</b> 图标。徽标将始终可见。`
  },
  edge: {
    en:    `Click the <b>🧩 Extensions</b> icon in the top-right of the toolbar → find <b>Claude Quota Monitor</b> → click the <b>👁 Show in toolbar</b> toggle. The badge will always be visible.`,
    pt_BR: `Clique no ícone <b>🧩 Extensões</b> no canto superior direito da barra → encontre <b>Claude Quota Monitor</b> → ative o toggle <b>👁 Mostrar na barra de ferramentas</b>. O badge ficará sempre visível.`,
    ar:    `انقر على أيقونة <b>🧩 الإضافات</b> في أعلى يمين الشريط → ابحث عن <b>Claude Quota Monitor</b> → فعّل خيار <b>👁 إظهار في شريط الأدوات</b>. ستظهر الشارة دائمًا.`,
    bn:    `টুলবারের উপরের ডানদিকে <b>🧩 Extensions</b> আইকনে ক্লিক করুন → <b>Claude Quota Monitor</b> খুঁজুন → <b>👁 টুলবারে দেখান</b> টগল চালু করুন। ব্যাজ সবসময় দৃশ্যমান থাকবে।`,
    es:    `Haz clic en el icono <b>🧩 Extensiones</b> en la parte superior derecha → busca <b>Claude Quota Monitor</b> → activa el interruptor <b>👁 Mostrar en barra de herramientas</b>. El badge siempre será visible.`,
    fr:    `Cliquez sur l'icône <b>🧩 Extensions</b> en haut à droite → trouvez <b>Claude Quota Monitor</b> → activez le bouton <b>👁 Afficher dans la barre d'outils</b>. Le badge sera toujours visible.`,
    hi:    `टूलबार के ऊपरी दाएं में <b>🧩 Extensions</b> आइकन पर क्लिक करें → <b>Claude Quota Monitor</b> खोजें → <b>👁 टूलबार में दिखाएं</b> टॉगल चालू करें। बैज हमेशा दिखाई देगा।`,
    id:    `Klik ikon <b>🧩 Ekstensi</b> di kanan atas bilah alat → cari <b>Claude Quota Monitor</b> → aktifkan tombol <b>👁 Tampilkan di bilah alat</b>. Badge akan selalu terlihat.`,
    ru:    `Нажмите значок <b>🧩 Расширения</b> в правом верхнем углу → найдите <b>Claude Quota Monitor</b> → включите переключатель <b>👁 Показать на панели инструментов</b>. Значок будет всегда виден.`,
    zh_CN: `点击工具栏右上角的 <b>🧩 扩展程序</b> 图标 → 找到 <b>Claude Quota Monitor</b> → 打开 <b>👁 在工具栏中显示</b> 开关。徽标将始终可见。`
  },
  arc: {
    en:    `In Arc, click the <b>⚙ extensions</b> button in the command bar → find <b>Claude Quota Monitor</b> → click <b>Pin</b>. The badge will appear in the toolbar.`,
    pt_BR: `No Arc, clique no botão de <b>⚙ extensões</b> na barra de comandos → encontre <b>Claude Quota Monitor</b> → clique em <b>Fixar</b>. O badge aparecerá na barra.`,
    ar:    `في Arc، انقر على زر <b>⚙ الإضافات</b> في شريط الأوامر → ابحث عن <b>Claude Quota Monitor</b> → انقر على <b>تثبيت</b>. ستظهر الشارة في الشريط.`,
    bn:    `Arc-এ, কমান্ড বারে <b>⚙ এক্সটেনশন</b> বোতামে ক্লিক করুন → <b>Claude Quota Monitor</b> খুঁজুন → <b>পিন</b> ক্লিক করুন। ব্যাজ টুলবারে দেখাবে।`,
    es:    `En Arc, haz clic en el botón de <b>⚙ extensiones</b> en la barra de comandos → busca <b>Claude Quota Monitor</b> → haz clic en <b>Anclar</b>. El badge aparecerá en la barra.`,
    fr:    `Dans Arc, cliquez sur le bouton <b>⚙ extensions</b> dans la barre de commandes → trouvez <b>Claude Quota Monitor</b> → cliquez sur <b>Épingler</b>. Le badge apparaîtra dans la barre.`,
    hi:    `Arc में, कमांड बार में <b>⚙ extensions</b> बटन पर क्लिक करें → <b>Claude Quota Monitor</b> खोजें → <b>Pin</b> पर क्लिक करें। बैज टूलबार में दिखाई देगा।`,
    id:    `Di Arc, klik tombol <b>⚙ ekstensi</b> di bilah perintah → cari <b>Claude Quota Monitor</b> → klik <b>Sematkan</b>. Badge akan muncul di bilah alat.`,
    ru:    `В Arc нажмите кнопку <b>⚙ расширений</b> в командной строке → найдите <b>Claude Quota Monitor</b> → нажмите <b>Закрепить</b>. Значок появится на панели.`,
    zh_CN: `在 Arc 中，点击命令栏中的 <b>⚙ 扩展程序</b> 按钮 → 找到 <b>Claude Quota Monitor</b> → 点击 <b>固定</b>。徽标将显示在工具栏中。`
  }
};

// brave uses the same instructions as chrome
step4Instructions.brave = step4Instructions.chrome;

detectBrowser().then(browser => {
  const el = document.getElementById('step4-desc');
  if (!el) return;
  const locale = getLocale();
  const byBrowser = step4Instructions[browser] || step4Instructions.chrome;
  el.innerHTML = byBrowser[locale] || byBrowser['en'];
});
