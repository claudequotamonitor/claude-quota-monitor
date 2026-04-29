/* ── Supported languages ── */
const OB_LANGS = {
  en:    { name: 'English',          dir: 'ltr', code: 'EN' },
  pt_BR: { name: 'Português (BR)',   dir: 'ltr', code: 'PT' },
  es:    { name: 'Español',          dir: 'ltr', code: 'ES' },
  fr:    { name: 'Français',         dir: 'ltr', code: 'FR' },
  ar:    { name: 'العربية',           dir: 'rtl', code: 'AR' },
  bn:    { name: 'বাংলা',             dir: 'ltr', code: 'BN' },
  hi:    { name: 'हिन्दी',            dir: 'ltr', code: 'HI' },
  id:    { name: 'Bahasa Indonesia', dir: 'ltr', code: 'ID' },
  ru:    { name: 'Русский',          dir: 'ltr', code: 'RU' },
  zh_CN: { name: '中文',             dir: 'ltr', code: 'ZH' },
};

/* ── All onboarding strings per locale ── */
const OB_T = {
  en: {
    onboarding_title:       'Welcome to <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'Track your Claude.ai usage directly in the browser toolbar, so you never get caught off guard mid-conversation.',
    onboarding_steps_title: 'Getting started — 4 steps',
    onboarding_step1_title: 'Open Claude.ai',
    onboarding_step1_desc:  'Visit claude.ai and log in to your account. The extension captures your quota data automatically on page load — no setup required.',
    onboarding_step2_title: 'Check the toolbar badge',
    onboarding_step2_desc:  'A badge will appear on the extension icon showing your current session usage (e.g. 22%). Color changes to orange at 70% and red at 90%.',
    onboarding_step3_title: 'Click for full details',
    onboarding_step3_desc:  'Click the icon to see your session and weekly usage, remaining time until reset, and a manual refresh button. Data updates automatically every 10 minutes.',
    onboarding_step4_title: 'Pin the extension to your toolbar',
    onboarding_cta:         'Open Claude.ai',
    onboarding_donate:      'Enjoying it? Support with a donation',
    onboarding_footer:      'Free & open. No account, no tracking.',
    pill_session:           'Session usage (5h)',
    pill_weekly:            'Weekly usage (7 days)',
    pill_auto_update:       'Auto background updates',
    pill_badge:             'Badge in toolbar',
    pill_free:              'Free',
    visit_website:          'Visit website',
  },
  pt_BR: {
    onboarding_title:       'Bem-vindo ao <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'Acompanhe o uso da sua cota do Claude.ai direto na barra do navegador, sem surpresas no meio de uma conversa.',
    onboarding_steps_title: 'Primeiros passos — 4 etapas',
    onboarding_step1_title: 'Abra o Claude.ai',
    onboarding_step1_desc:  'Acesse claude.ai e faça login. A extensão captura os dados de cota automaticamente ao carregar a página — sem configuração necessária.',
    onboarding_step2_title: 'Veja o badge na barra',
    onboarding_step2_desc:  'Um badge aparece no ícone mostrando o uso da sessão atual (ex: 22%). A cor muda para laranja em 70% e vermelho em 90%.',
    onboarding_step3_title: 'Clique para ver os detalhes',
    onboarding_step3_desc:  'Clique no ícone para ver o uso da sessão e semanal, o tempo até o reset e o botão de atualização manual. Os dados são atualizados automaticamente a cada 10 minutos.',
    onboarding_step4_title: 'Fixe a extensão na barra do navegador',
    onboarding_cta:         'Abrir Claude.ai',
    onboarding_donate:      'Curtiu? Apoie com uma doação',
    onboarding_footer:      'Gratuito e aberto. Sem conta, sem rastreamento.',
    pill_session:           'Uso da sessão (5h)',
    pill_weekly:            'Uso semanal (7 dias)',
    pill_auto_update:       'Atualização automática em segundo plano',
    pill_badge:             'Badge na barra',
    pill_free:              'Gratuito',
    visit_website:          'Visitar site',
  },
  es: {
    onboarding_title:       'Bienvenido a <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'Rastrea tu uso de cuota en Claude.ai directamente en la barra del navegador, sin sorpresas a mitad de conversación.',
    onboarding_steps_title: 'Primeros pasos — 4 pasos',
    onboarding_step1_title: 'Abre Claude.ai',
    onboarding_step1_desc:  'Visita claude.ai e inicia sesión. La extensión captura tus datos de cuota automáticamente al cargar la página — sin configuración.',
    onboarding_step2_title: 'Revisa el badge en la barra',
    onboarding_step2_desc:  'Aparecerá un badge en el ícono mostrando el uso de la sesión actual (ej. 22%). El color cambia a naranja al 70% y rojo al 90%.',
    onboarding_step3_title: 'Haz clic para ver los detalles',
    onboarding_step3_desc:  'Haz clic en el ícono para ver el uso de tu sesión y semanal, el tiempo hasta el reinicio y el botón de actualización manual. Los datos se actualizan automáticamente cada 10 minutos.',
    onboarding_step4_title: 'Fija la extensión en la barra del navegador',
    onboarding_cta:         'Abrir Claude.ai',
    onboarding_donate:      '¿Te gusta? Apóyanos con una donación',
    onboarding_footer:      'Gratis y abierto. Sin cuenta, sin seguimiento.',
    pill_session:           'Uso de sesión (5h)',
    pill_weekly:            'Uso semanal (7 días)',
    pill_auto_update:       'Actualizaciones automáticas en segundo plano',
    pill_badge:             'Badge en la barra',
    pill_free:              'Gratis',
    visit_website:          'Visitar sitio web',
  },
  fr: {
    onboarding_title:       'Bienvenue dans <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    "Suivez votre utilisation du quota Claude.ai directement dans la barre d'outils, sans mauvaises surprises en pleine conversation.",
    onboarding_steps_title: 'Démarrage — 4 étapes',
    onboarding_step1_title: 'Ouvrez Claude.ai',
    onboarding_step1_desc:  "Visitez claude.ai et connectez-vous. L'extension capture vos données de quota automatiquement au chargement de la page — aucune configuration requise.",
    onboarding_step2_title: 'Vérifiez le badge dans la barre',
    onboarding_step2_desc:  "Un badge apparaît sur l'icône indiquant l'utilisation de la session en cours (ex. 22%). La couleur passe à l'orange à 70% et au rouge à 90%.",
    onboarding_step3_title: 'Cliquez pour les détails complets',
    onboarding_step3_desc:  "Cliquez sur l'icône pour voir l'utilisation de votre session et hebdomadaire, le temps restant avant la réinitialisation et un bouton d'actualisation manuelle. Les données se mettent à jour toutes les 10 minutes.",
    onboarding_step4_title: "Épinglez l'extension dans la barre d'outils",
    onboarding_cta:         'Ouvrir Claude.ai',
    onboarding_donate:      'Vous aimez ? Soutenez avec un don',
    onboarding_footer:      'Gratuit et ouvert. Sans compte, sans suivi.',
    pill_session:           'Usage de session (5h)',
    pill_weekly:            'Usage hebdomadaire (7 jours)',
    pill_auto_update:       "Mises à jour automatiques en arrière-plan",
    pill_badge:             'Badge dans la barre',
    pill_free:              'Gratuit',
    visit_website:          'Visiter le site',
  },
  ar: {
    onboarding_title:       'مرحبًا بك في <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'تتبع استخدام حصتك على Claude.ai مباشرةً في شريط أدوات المتصفح، حتى لا تُفاجأ في منتصف المحادثة.',
    onboarding_steps_title: 'البدء — 4 خطوات',
    onboarding_step1_title: 'افتح Claude.ai',
    onboarding_step1_desc:  'زُر claude.ai وسجّل الدخول. تلتقط الإضافة بيانات حصتك تلقائيًا عند تحميل الصفحة — دون أي إعداد.',
    onboarding_step2_title: 'تحقق من شارة شريط الأدوات',
    onboarding_step2_desc:  'ستظهر شارة على أيقونة الإضافة تُظهر استخدام الجلسة الحالية (مثلاً 22%). يتغير اللون إلى البرتقالي عند 70% والأحمر عند 90%.',
    onboarding_step3_title: 'انقر للاطلاع على التفاصيل الكاملة',
    onboarding_step3_desc:  'انقر على الأيقونة لرؤية استخدام جلستك وأسبوعك، والوقت المتبقي حتى إعادة الضبط، وزر التحديث اليدوي. تتحدث البيانات تلقائيًا كل 10 دقائق.',
    onboarding_step4_title: 'ثبّت الإضافة في شريط الأدوات',
    onboarding_cta:         'افتح Claude.ai',
    onboarding_donate:      'أعجبك؟ ادعم بتبرع',
    onboarding_footer:      'مجاني ومفتوح. بدون حساب، بدون تتبع.',
    pill_session:           'استخدام الجلسة (5 ساعات)',
    pill_weekly:            'الاستخدام الأسبوعي (7 أيام)',
    pill_auto_update:       'تحديثات تلقائية في الخلفية',
    pill_badge:             'شارة في شريط الأدوات',
    pill_free:              'مجاني',
    visit_website:          'زيارة الموقع',
  },
  bn: {
    onboarding_title:       '<span>Claude Quota</span> Monitor-এ স্বাগতম',
    onboarding_subtitle:    'সরাসরি ব্রাউজার টুলবারে Claude.ai-এর ব্যবহার ট্র্যাক করুন, কথোপকথনের মাঝে আর চমকে যেতে হবে না।',
    onboarding_steps_title: 'শুরু করুন — ৪টি ধাপ',
    onboarding_step1_title: 'Claude.ai খুলুন',
    onboarding_step1_desc:  'claude.ai-তে যান এবং লগ ইন করুন। এক্সটেনশন পেজ লোডে স্বয়ংক্রিয়ভাবে কোটা ডেটা সংগ্রহ করে — কোনো সেটআপ দরকার নেই।',
    onboarding_step2_title: 'টুলবার ব্যাজ দেখুন',
    onboarding_step2_desc:  'এক্সটেনশন আইকনে একটি ব্যাজ দেখাবে যা বর্তমান সেশনের ব্যবহার দেখাবে (যেমন ২২%)। ৭০%-এ কমলা এবং ৯০%-এ লাল হয়।',
    onboarding_step3_title: 'পূর্ণ বিবরণের জন্য ক্লিক করুন',
    onboarding_step3_desc:  'আইকনে ক্লিক করে সেশন ও সাপ্তাহিক ব্যবহার, রিসেট পর্যন্ত বাকি সময় এবং ম্যানুয়াল রিফ্রেশ বাটন দেখুন। ডেটা প্রতি ১০ মিনিটে স্বয়ংক্রিয়ভাবে আপডেট হয়।',
    onboarding_step4_title: 'টুলবারে এক্সটেনশন পিন করুন',
    onboarding_cta:         'Claude.ai খুলুন',
    onboarding_donate:      'পছন্দ হলো? দান দিয়ে সহায়তা করুন',
    onboarding_footer:      'বিনামূল্যে ও উন্মুক্ত। কোনো অ্যাকাউন্ট নেই, কোনো ট্র্যাকিং নেই।',
    pill_session:           'সেশন ব্যবহার (৫ঘ)',
    pill_weekly:            'সাপ্তাহিক ব্যবহার (৭ দিন)',
    pill_auto_update:       'স্বয়ংক্রিয় ব্যাকগ্রাউন্ড আপডেট',
    pill_badge:             'টুলবারে ব্যাজ',
    pill_free:              'বিনামূল্যে',
    visit_website:          'ওয়েবসাইট দেখুন',
  },
  hi: {
    onboarding_title:       '<span>Claude Quota</span> Monitor में आपका स्वागत है',
    onboarding_subtitle:    'सीधे ब्राउज़र टूलबार में Claude.ai कोटा उपयोग ट्रैक करें, बातचीत के बीच में कोई आश्चर्य नहीं।',
    onboarding_steps_title: 'शुरुआत करें — 4 चरण',
    onboarding_step1_title: 'Claude.ai खोलें',
    onboarding_step1_desc:  'claude.ai पर जाएं और लॉग इन करें। एक्सटेंशन पेज लोड होने पर स्वचालित रूप से कोटा डेटा कैप्चर करता है — कोई सेटअप आवश्यक नहीं।',
    onboarding_step2_title: 'टूलबार बैज देखें',
    onboarding_step2_desc:  'आइकन पर एक बैज दिखाई देगा जो वर्तमान सत्र का उपयोग दिखाता है (जैसे 22%)। 70% पर नारंगी और 90% पर लाल रंग हो जाता है।',
    onboarding_step3_title: 'पूरी जानकारी के लिए क्लिक करें',
    onboarding_step3_desc:  'आइकन पर क्लिक करके सत्र और साप्ताहिक उपयोग, रीसेट तक का समय और मैन्युअल रिफ्रेश बटन देखें। डेटा हर 10 मिनट में स्वचालित रूप से अपडेट होता है।',
    onboarding_step4_title: 'एक्सटेंशन को टूलबार में पिन करें',
    onboarding_cta:         'Claude.ai खोलें',
    onboarding_donate:      'पसंद आया? दान से समर्थन करें',
    onboarding_footer:      'मुफ़्त और खुला। कोई खाता नहीं, कोई ट्रैकिंग नहीं।',
    pill_session:           'सत्र उपयोग (5 घंटे)',
    pill_weekly:            'साप्ताहिक उपयोग (7 दिन)',
    pill_auto_update:       'स्वचालित बैकग्राउंड अपडेट',
    pill_badge:             'टूलबार में बैज',
    pill_free:              'मुफ़्त',
    visit_website:          'वेबसाइट देखें',
  },
  id: {
    onboarding_title:       'Selamat datang di <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'Pantau penggunaan kuota Claude.ai langsung di bilah alat browser, tanpa kejutan di tengah percakapan.',
    onboarding_steps_title: 'Memulai — 4 langkah',
    onboarding_step1_title: 'Buka Claude.ai',
    onboarding_step1_desc:  'Kunjungi claude.ai dan masuk ke akun Anda. Ekstensi menangkap data kuota secara otomatis saat halaman dimuat — tanpa pengaturan.',
    onboarding_step2_title: 'Periksa badge di bilah alat',
    onboarding_step2_desc:  'Badge akan muncul di ikon ekstensi menunjukkan penggunaan sesi saat ini (mis. 22%). Warna berubah menjadi oranye di 70% dan merah di 90%.',
    onboarding_step3_title: 'Klik untuk detail lengkap',
    onboarding_step3_desc:  'Klik ikon untuk melihat penggunaan sesi dan mingguan, waktu tersisa hingga reset, dan tombol refresh manual. Data diperbarui otomatis setiap 10 menit.',
    onboarding_step4_title: 'Sematkan ekstensi ke bilah alat',
    onboarding_cta:         'Buka Claude.ai',
    onboarding_donate:      'Suka? Dukung dengan donasi',
    onboarding_footer:      'Gratis & terbuka. Tanpa akun, tanpa pelacakan.',
    pill_session:           'Penggunaan sesi (5j)',
    pill_weekly:            'Penggunaan mingguan (7 hari)',
    pill_auto_update:       'Pembaruan latar belakang otomatis',
    pill_badge:             'Badge di bilah alat',
    pill_free:              'Gratis',
    visit_website:          'Kunjungi situs web',
  },
  ru: {
    onboarding_title:       'Добро пожаловать в <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    'Отслеживайте использование квоты Claude.ai прямо на панели инструментов браузера — никаких сюрпризов в середине разговора.',
    onboarding_steps_title: 'Начало работы — 4 шага',
    onboarding_step1_title: 'Откройте Claude.ai',
    onboarding_step1_desc:  'Перейдите на claude.ai и войдите в аккаунт. Расширение автоматически захватывает данные о квоте при загрузке страницы — без настройки.',
    onboarding_step2_title: 'Проверьте значок на панели',
    onboarding_step2_desc:  'На иконке расширения появится значок с текущим использованием сессии (например, 22%). Цвет меняется на оранжевый при 70% и красный при 90%.',
    onboarding_step3_title: 'Нажмите для подробностей',
    onboarding_step3_desc:  'Нажмите на иконку, чтобы увидеть использование сессии и за неделю, время до сброса и кнопку ручного обновления. Данные обновляются автоматически каждые 10 минут.',
    onboarding_step4_title: 'Закрепите расширение на панели инструментов',
    onboarding_cta:         'Открыть Claude.ai',
    onboarding_donate:      'Нравится? Поддержите донатом',
    onboarding_footer:      'Бесплатно и открыто. Без аккаунта, без слежки.',
    pill_session:           'Использование сессии (5ч)',
    pill_weekly:            'Еженедельное использование (7 дней)',
    pill_auto_update:       'Автоматические фоновые обновления',
    pill_badge:             'Значок на панели',
    pill_free:              'Бесплатно',
    visit_website:          'Посетить сайт',
  },
  zh_CN: {
    onboarding_title:       '欢迎使用 <span>Claude Quota</span> Monitor',
    onboarding_subtitle:    '直接在浏览器工具栏中追踪您的 Claude.ai 配额使用情况，不再担心对话中途超出限制。',
    onboarding_steps_title: '快速开始 — 4 个步骤',
    onboarding_step1_title: '打开 Claude.ai',
    onboarding_step1_desc:  '访问 claude.ai 并登录您的账户。扩展程序会在页面加载时自动获取配额数据 — 无需任何设置。',
    onboarding_step2_title: '查看工具栏图标徽标',
    onboarding_step2_desc:  '扩展图标上将显示一个徽标，显示当前会话用量（如 22%）。用量达到 70% 时变为橙色，90% 时变为红色。',
    onboarding_step3_title: '点击查看完整详情',
    onboarding_step3_desc:  '点击图标可查看会话和每周用量、距离重置的剩余时间以及手动刷新按钮。数据每 10 分钟自动更新一次。',
    onboarding_step4_title: '将扩展程序固定到工具栏',
    onboarding_cta:         '打开 Claude.ai',
    onboarding_donate:      '喜欢这个扩展？捐款支持',
    onboarding_footer:      '免费开放。无需账户，不追踪数据。',
    pill_session:           '会话用量 (5小时)',
    pill_weekly:            '每周用量 (7天)',
    pill_auto_update:       '自动后台更新',
    pill_badge:             '工具栏徽标',
    pill_free:              '免费',
    visit_website:          '访问网站',
  },
};

/* ── Step 4: browser-specific pin instructions ── */
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
step4Instructions.brave = step4Instructions.chrome;

/* ── State ── */
let currentLang    = 'en';
let currentBrowser = 'chrome';

/* ── Detect language ── */
function detectLang() {
  const saved = localStorage.getItem('cqm_ob_lang');
  if (saved && OB_T[saved]) return saved;
  const ui = chrome.i18n.getUILanguage();
  if (ui.startsWith('pt')) return 'pt_BR';
  if (ui.startsWith('zh')) return 'zh_CN';
  const code = ui.split('-')[0];
  return OB_T[code] ? code : 'en';
}

/* ── Apply language ── */
function applyLang(lang) {
  currentLang = lang;
  const t    = OB_T[lang]    || OB_T.en;
  const meta = OB_LANGS[lang] || OB_LANGS.en;

  document.documentElement.lang = lang.replace('_', '-');
  document.documentElement.dir  = meta.dir;
  document.title = 'Claude Quota Monitor';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (val === undefined) return;
    if (key === 'onboarding_title') el.innerHTML = val;
    else el.textContent = val;
  });

  // Step 4 — browser-specific instructions in selected language
  const step4El = document.getElementById('step4-desc');
  if (step4El) {
    const byBrowser = step4Instructions[currentBrowser] || step4Instructions.chrome;
    step4El.innerHTML = byBrowser[lang] || byBrowser['en'];
  }

  // Update switcher
  localStorage.setItem('cqm_ob_lang', lang);
  const btn = document.getElementById('ob-lang-btn');
  if (btn) btn.querySelector('.ob-lang-label').textContent = meta.name;
  const dd = document.getElementById('ob-lang-dd');
  if (dd) dd.classList.remove('open');
  document.querySelectorAll('.ob-lang-option').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

/* ── Build language switcher ── */
function buildSwitcher() {
  const container = document.getElementById('ob-lang-switcher');
  if (!container) { console.warn('[CQM] ob-lang-switcher not found'); return; }

  if (!document.getElementById('ob-i18n-css')) {
    const style = document.createElement('style');
    style.id = 'ob-i18n-css';
    style.textContent = `
      .ob-switcher { position: relative; display: inline-flex; }
      #ob-lang-btn {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(167,139,250,.08); border: 1px solid rgba(167,139,250,.2);
        border-radius: 8px; padding: 6px 12px; cursor: pointer; color: #a78bfa;
        font-size: 13px; font-weight: 500; font-family: inherit;
        transition: background .2s;
      }
      #ob-lang-btn:hover { background: rgba(167,139,250,.15); }
      #ob-lang-dd {
        display: none; position: absolute; top: calc(100% + 6px); right: 0;
        background: #0f0f1a; border: 1px solid rgba(167,139,250,.2);
        border-radius: 10px; overflow: hidden; z-index: 200;
        box-shadow: 0 8px 24px rgba(0,0,0,.5); min-width: 180px;
      }
      #ob-lang-dd.open { display: block; }
      .ob-lang-option {
        display: block; width: 100%; padding: 9px 14px; text-align: left;
        background: none; border: none; color: #9090b0; font-size: 13px;
        cursor: pointer; font-family: inherit; transition: background .15s, color .15s;
      }
      .ob-lang-option:hover { background: rgba(167,139,250,.1); color: #fff; }
      .ob-lang-option.active { color: #a78bfa; font-weight: 600; }
    `;
    document.head.appendChild(style);
  }

  const current = detectLang();
  container.innerHTML = `
    <div class="ob-switcher">
      <button id="ob-lang-btn" aria-label="Select language">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span class="ob-lang-label">${OB_LANGS[current].name}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div id="ob-lang-dd">
        ${Object.entries(OB_LANGS).map(([code, meta]) =>
          `<button class="ob-lang-option${code === current ? ' active' : ''}" data-lang="${code}">${meta.name}</button>`
        ).join('')}
      </div>
    </div>`;

  document.getElementById('ob-lang-btn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('ob-lang-dd').classList.toggle('open');
  });
  document.addEventListener('click', () => {
    const dd = document.getElementById('ob-lang-dd');
    if (dd) dd.classList.remove('open');
  });
  container.querySelectorAll('.ob-lang-option').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ── Browser detection ── */
async function detectBrowser() {
  if (navigator.brave) {
    try { if (await navigator.brave.isBrave()) return 'brave'; } catch {}
  }
  if (/Edg\//.test(navigator.userAgent)) return 'edge';
  if (/Arc\//.test(navigator.userAgent))  return 'arc';
  return 'chrome';
}

/* ── Init ── */
const initLang = detectLang();
buildSwitcher();
applyLang(initLang);

// Update step 4 instructions after browser detection
detectBrowser().then(browser => {
  currentBrowser = browser;
  const step4El = document.getElementById('step4-desc');
  if (step4El) {
    const byBrowser = step4Instructions[browser] || step4Instructions.chrome;
    step4El.innerHTML = byBrowser[currentLang] || byBrowser['en'];
  }
});
