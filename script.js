/**
 * VidLoop Pro Studio - Interactive Landing Page Logic
 * Features:
 * - Smart Geo/Locale Auto-Detection: Defaults to Indonesian (ID) if visitor is from Indonesia,
 *   otherwise defaults to English (EN) for international visitors.
 * - 100% Comprehensive Translation: Header, Navbar, Hero, Free Trial, Features,
 *   Benchmarks, Pricing, Activation Steps, FAQ, and Footer.
 * - Currency auto-sync: IDR for Indonesian, USD for International.
 * - Interactive copy-to-clipboard with toast feedback.
 * - FAQ accordion toggle.
 * - Smooth scroll & download trackers.
 */

const i18n = {
  id: {
    topTag: "GRATIS 24 JAM",
    topPromo: "🎉 UJI COBA GRATIS 24 JAM PERTAMA: Akses penuh semua fitur studio tanpa kartu kredit & tanpa watermark!",
    topLink: "Download Sekarang →",

    navTrial: "🎁 Uji Coba Gratis",
    navFeatures: "Fitur Utama",
    navPreview: "Tampilan Studio",
    navBenchmark: "Kecepatan",
    navPricing: "Harga & Lisensi",
    navFaq: "FAQ",
    navBtnDownload: "Download Gratis",

    heroPill: "🔥 GRATIS 24 JAM UJI COBA • Windows 7, 8, 10, 11 (64-bit)",
    heroTitlePrefix: "Looping Video & Audio Hingga",
    heroTitleAccent: "24 Jam Nonstop",
    heroTitleSuffix: "Super Cepat",
    heroSubtitle: "Software desktop bertenaga C++ & hardware acceleration untuk membuat looping video tanpa batas serta penggabung video instan dengan tampilan studio profesional ala CapCut & Adobe Premiere Pro.",
    btnDownload: "Download Setup_VidLoopPro.exe",
    btnDownloadSub: "🎁 Uji Coba Gratis 24 Jam Pertama Langsung Aktif",
    btnBuy: "Beli Lisensi Seumur Hidup",

    infoSafe: "🛡️ 100% Bebas Malware",
    infoSize: "⚡ File Setup Tunggal: ~27.7 MB",
    infoControlPanel: "⚙️ Terdaftar di Windows Control Panel",
    infoTrial: "🎁 24 Jam Free Trial Tanpa Syarat",

    trialBoxTitle: "Uji Coba Gratis 24 Jam Penuh Langsung Aktif!",
    trialBoxDesc: "Setelah Anda menginstal VidLoop Pro, masa percobaan 24 jam gratis langsung berjalan otomatis. Anda bebas memakai fitur Looping 24 Jam, Video Merger, dan Render GPU 4K tanpa watermark sama sekali!",
    trialBadgeGlow: "GRATIS 24 JAM AKTIF OTOMATIS",

    windowTitle: "VidLoop Pro Studio v1.0 - [Timeline Monitor & Hardware Acceleration Engine]",
    windowStatus: "ACTIVE TRIAL",
    previewCaption: "Antarmuka VidLoop Pro Studio v1.0 - CapCut & Premiere Pro Dark Studio Style",

    stat1Val: "24 Jam",
    stat1Label: "Durasi Looping Maksimal",
    stat2Val: "100x Lebih Cepat",
    stat2Label: "Percepatan Rendering Lossless",
    stat3Val: "24 Jam Free",
    stat3Label: "Masa Percobaan Gratis Otomatis",
    stat4Val: "Rp 100K / $7",
    stat4Label: "Lisensi Permanen Seumur Hidup",

    featTag: "FITUR UNGGULAN STUDIO",
    featTitle: "Semua yang Anda Butuhkan untuk Looping & Merger Tanpa Ribet",
    featSubtitle: "Dirancang untuk kreator konten, editor video, musisi, streamer live 24/7, dan periklanan digital.",
    feat1Title: "Looping Hingga 24 Jam",
    feat1Desc: "Tentukan durasi looping sesuai kebutuhan dari 1 menit hingga 24 jam nonstop dengan kalkulasi otomatis dan input menit manual yang fleksibel.",
    feat2Title: "Lossless Stream Copy Super Cepat",
    feat2Desc: "Teknologi stream-loop menyalin stream tanpa rendering ulang berjam-jam. Video 10 jam selesai diekspor hanya dalam hitungan detik tanpa menurunkan kualitas gambar!",
    feat3Title: "Penggabung Video (Merger)",
    feat3Desc: "Gabungkan puluhan klip video menjadi satu file utuh dengan transisi mulus dan urutan klip yang dapat Anda atur secara bebas.",
    feat4Title: "Hardware Acceleration",
    feat4Desc: "Mendukung akselerasi GPU NVIDIA NVENC, AMD AMF, dan Intel QuickSync untuk ekspor beresolusi tinggi mulai dari 480p, 720p, 1080p, 2K, hingga 4K.",
    feat5Title: "Preview Monitor 16:9 & Timeline",
    feat5Desc: "Monitor Cinema resolusi tinggi dengan ekstraksi thumbnail frame asli serta visualisasi timeline multi-track V1/A1 ala software NLE profesional.",
    feat6Title: "Terdaftar Resmi di Control Panel",
    feat6Desc: "Aplikasi terintegrasi resmi di Windows Control Panel (Programs and Features) lengkap dengan uninstaller yang bersih, aman dari deteksi antivirus, dan tanpa file residu.",

    benchTag: "PERFORMA EKSPOR",
    benchTitle: "Kecepatan Ekspor Ekstrem",
    benchDesc: "Editor video konvensional memerlukan waktu hingga beberapa jam untuk me-render video looping 10 jam. VidLoop Pro menggunakan direct stream repetition sehingga proses selesai seketika tanpa beban CPU berat!",
    benchSave: "Hemat Waktu",
    benchQuality: "Kualitas Asli (Lossless)",
    benchFastLabel: "⚡ VidLoop Pro (Lossless Stream Copy)",
    benchFastTime: "12 Detik",
    benchSlowLabel: "Editor Konvensional (CPU Full Re-render)",
    benchSlowTime: "1 Jam 45 Menit",
    benchNote: "*Pengujian klip 1080p target durasi looping 10 jam.",

    priceTag: "PAKET LISENSI PERMANEN",
    priceSectionTitle: "Investasi Sekali, Nikmati Selamanya",
    priceSectionSubtitle: "Sekali bayar untuk penggunaan selamanya, termasuk update dan dukungan penuh.",
    pricePopular: "Paling Populer & Hemat",
    pricePlanTitle: "Lisensi Lifetime (1 Komputer)",
    pricePeriod: " / seumur hidup",
    priceTrialBadge: "100% GRATIS UJI COBA 24 JAM PERTAMA!",
    priceTrialDesc: "Tidak perlu langsung bayar! Pasang aplikasinya sekarang dan nikmati seluruh fitur pro selama 24 jam penuh tanpa watermark. Baru beli lisensi jika Anda puas!",
    featItem1: "Akses penuh seluruh fitur Video & Audio Looper tanpa batas",
    featItem2: "Fitur Video Merger (penggabung banyak file tanpa limit)",
    featItem3: "Dukungan ekspor resolusi tinggi hingga 4K Ultra HD",
    featItem4: "Akselerasi hardware penuh (NVENC, AMF, Intel QSV)",
    featItem5: "Lisensi terkunci aman per komputer (Hardware Machine ID)",
    featItem6: "Bebas watermark & bebas biaya langganan bulanan",
    contactHeading: "Hubungi pengembang untuk aktivasi instan:",
    btnWaText: "WhatsApp Chat",
    btnTgText: "Telegram Chat",
    btnPaypalText: "PayPal (Salin)",
    btnEmailText: "Kirim Email",

    step1Title: "Instal Aplikasi",
    step1Desc: "Download dan jalankan Setup_VidLoopPro.exe. Aplikasi langsung aktif 24 jam percobaan gratis.",
    step2Title: "Salin Machine ID",
    step2Desc: "Klik tombol 'Aktivasi Lisensi' di dalam aplikasi untuk menyalin kode Machine ID unik komputer Anda.",
    step3Title: "Terima Kunci Permanen",
    step3Desc: "Kirimkan Machine ID ke WhatsApp/Telegram. Pengembang akan langsung mengirimkan Kunci Lisensi Lifetime Anda.",

    faqTag: "INFORMASI & BANTUAN",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqSubtitle: "Semua hal yang perlu Anda ketahui tentang instalasi dan lisensi VidLoop Pro.",
    faqQ1: "Apakah file installer ini aman dan ramah antivirus?",
    faqA1: "Ya, 100% aman! VidLoop Pro dikompilasi murni dengan arsitektur C++ dan engine FFmpeg resmi. Tidak mengandung adware, malware, atau inject code. Installer juga memiliki uninstaller resmi yang terdaftar di Windows Control Panel sehingga Anda dapat mencopotnya kapan saja dengan bersih.",
    faqQ2: "Bagaimana cara kerja masa percobaan gratis 24 jam?",
    faqA2: "Begitu Anda pertama kali membuka VidLoop Pro setelah instalasi, sistem otomatis mencatat tanggal pemasangan dan memberikan akses penuh tanpa batas selama 24 jam pertama. Anda bisa menguji seluruh fitur looping dan merger sebelum memutuskan untuk membeli lisensi seumur hidup.",
    faqQ3: "Berapa lama waktu yang dibutuhkan untuk membuat video 24 jam?",
    faqA3: "Dengan fitur 'Lossless Stream Copy', pembuatan file looping video 10 hingga 24 jam biasanya hanya membutuhkan waktu 10 hingga 30 detik saja (tergantung kecepatan baca/tulis harddisk atau SSD Anda), karena tidak memerlukan render ulang frame per frame yang melelahkan.",
    faqQ4: "Sistem operasi apa saja yang didukung?",
    faqA4: "Mendukung semua versi Windows 64-bit: Windows 7 SP1, Windows 8, Windows 8.1, Windows 10, dan Windows 11.",
    faqQ5: "Metode pembayaran apa saja yang diterima?",
    faqA5: "Untuk pengguna Indonesia dapat menggunakan Transfer Bank / QRIS via konfirmasi WhatsApp (+6285641184229). Untuk pembeli internasional dapat menggunakan PayPal ke akun zainuelflash9@gmail.com sebesar $7 USD.",

    footerDesc: "Software Video & Audio Looper and Merger Studio kelas profesional bertenaga teknologi C++ modern.",
    footerDevTitle: "Kontak Resmi Pengembang",
    footerDev: "Developer: Zainu El Maarif",
    footerCopy: "© 2026 VidLoop Pro Studio by Zainu El Maarif. All Rights Reserved.",
    footerLinkFeat: "Fitur",
    footerLinkPrice: "Harga",

    toastCopy: "Tersalin ke clipboard!",
    toastDownload: "Memulai unduhan Setup_VidLoopPro.exe (~27.7 MB)..."
  },

  en: {
    topTag: "FREE 24H TRIAL",
    topPromo: "🎉 FREE 24-HOUR TRIAL: Full access to all studio features with zero watermarks & no credit card required!",
    topLink: "Download Now →",

    navTrial: "🎁 Free Trial",
    navFeatures: "Key Features",
    navPreview: "Studio UI",
    navBenchmark: "Speed",
    navPricing: "Pricing & License",
    navFaq: "FAQ",
    navBtnDownload: "Free Download",

    heroPill: "🔥 FREE 24-HOUR TRIAL • Windows 7, 8, 10, 11 (64-bit)",
    heroTitlePrefix: "Loop Video & Audio Up To",
    heroTitleAccent: "24 Hours Nonstop",
    heroTitleSuffix: "Super Fast",
    heroSubtitle: "High-performance desktop software powered by C++ & hardware acceleration for infinite video looping and instant video merging with a sleek CapCut & Adobe Premiere Pro dark studio interface.",
    btnDownload: "Download Setup_VidLoopPro.exe",
    btnDownloadSub: "🎁 Automatic 24-Hour Free Trial Included",
    btnBuy: "Buy Lifetime License",

    infoSafe: "🛡️ 100% Malware-Free",
    infoSize: "⚡ Standalone Setup: ~27.7 MB",
    infoControlPanel: "⚙️ Windows Control Panel Integrated",
    infoTrial: "🎁 24-Hour Free Trial (No Card Needed)",

    trialBoxTitle: "Full 24-Hour Free Trial Starts Automatically!",
    trialBoxDesc: "Once installed, your 24-hour free trial starts immediately. Freely enjoy 24-Hour Looping, Video Merger, and 4K GPU rendering without watermarks or limits!",
    trialBadgeGlow: "24H FREE TRIAL ACTIVATED",

    windowTitle: "VidLoop Pro Studio v1.0 - [Timeline Monitor & Hardware Acceleration Engine]",
    windowStatus: "ACTIVE TRIAL",
    previewCaption: "VidLoop Pro Studio Interface - CapCut & Premiere Pro Dark Studio Style",

    stat1Val: "24 Hours",
    stat1Label: "Maximum Loop Duration",
    stat2Val: "100x Faster",
    stat2Label: "Lossless Stream Acceleration",
    stat3Val: "24h Free",
    stat3Label: "Automatic Free Trial",
    stat4Val: "$7 USD / Rp 100K",
    stat4Label: "Permanent Lifetime License",

    featTag: "STUDIO CORE FEATURES",
    featTitle: "Everything You Need for Effortless Looping & Merging",
    featSubtitle: "Built for content creators, video editors, musicians, 24/7 live streamers, and digital advertisers.",
    feat1Title: "Loop Up to 24 Hours",
    feat1Desc: "Customize your loop target from 1 minute up to 24 hours nonstop with real-time minute calculators and flexible manual minute input.",
    feat2Title: "Super-Fast Lossless Stream Copy",
    feat2Desc: "Stream-loop technology duplicates streams without lengthy re-rendering. A 10-hour video exports in mere seconds without quality loss!",
    feat3Title: "Multi-Clip Video Merger",
    feat3Desc: "Combine dozens of video clips into one continuous sequence seamlessly with custom clip sorting and smooth concatenation.",
    feat4Title: "Hardware GPU Acceleration",
    feat4Desc: "Full support for NVIDIA NVENC, AMD AMF, and Intel QuickSync for ultra-crisp exports from 480p, 720p, 1080p, 2K up to 4K.",
    feat5Title: "16:9 Cinema Monitor & Timeline",
    feat5Desc: "High-definition monitor with live video frame extraction and multi-track V1/A1 timeline blocks inspired by professional NLEs.",
    feat6Title: "Windows Control Panel Integration",
    feat6Desc: "Formally registered in Windows Programs and Features (`appwiz.cpl`) with a clean uninstaller, verified safe, and residue-free.",

    benchTag: "EXPORT PERFORMANCE",
    benchTitle: "Extreme Export Speeds",
    benchDesc: "Standard video editors take hours to re-encode a 10-hour loop. VidLoop Pro utilizes direct stream replication to finish in seconds without straining your CPU!",
    benchSave: "Time Saved",
    benchQuality: "Original Quality (Lossless)",
    benchFastLabel: "⚡ VidLoop Pro (Lossless Stream Copy)",
    benchFastTime: "12 Seconds",
    benchSlowLabel: "Standard Video Editors (Full CPU Re-encode)",
    benchSlowTime: "1 Hour 45 Minutes",
    benchNote: "*Tested on 1080p source clip targeting 10-hour loop output.",

    priceTag: "PERMANENT LIFETIME PLAN",
    priceSectionTitle: "One-Time Investment, Lifetime Value",
    priceSectionSubtitle: "Pay once for permanent use, including future updates and full technical support.",
    pricePopular: "Most Popular & Best Value",
    pricePlanTitle: "Lifetime License (1 PC)",
    pricePeriod: " / lifetime",
    priceTrialBadge: "100% FREE 24-HOUR TRIAL INCLUDED!",
    priceTrialDesc: "No upfront payment needed! Install the app now and test all pro studio features for 24 hours without watermarks. Upgrade only when you're 100% satisfied!",
    featItem1: "Full unlimited access to Video & Audio Looper",
    featItem2: "Video Merger suite (merge unlimited clips without restrictions)",
    featItem3: "High-resolution export support up to 4K Ultra HD",
    featItem4: "Full GPU hardware acceleration (NVENC, AMF, Intel QSV)",
    featItem5: "Locked securely per PC via Hardware Machine ID",
    featItem6: "Zero watermarks & zero recurring monthly fees",
    contactHeading: "Contact the developer for instant activation:",
    btnWaText: "WhatsApp Chat",
    btnTgText: "Telegram Chat",
    btnPaypalText: "PayPal (Copy)",
    btnEmailText: "Send Email",

    step1Title: "Install the App",
    step1Desc: "Download and run Setup_VidLoopPro.exe. Your 24-hour free trial starts immediately.",
    step2Title: "Copy Machine ID",
    step2Desc: "Click 'License Activation' inside the app to copy your PC's unique Machine ID.",
    step3Title: "Receive Lifetime Key",
    step3Desc: "Send your Machine ID via WhatsApp or Telegram to receive your lifetime license key instantly.",

    faqTag: "HELP & SUPPORT",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about VidLoop Pro installation, trial, and licensing.",
    faqQ1: "Is this installer safe and friendly with antivirus software?",
    faqA1: "Yes, 100% safe! VidLoop Pro is natively built in C++ with official FFmpeg binaries. It contains zero adware, malware, or code injections. It includes a native Windows uninstaller formally listed in Control Panel for clean removal at any time.",
    faqQ2: "How does the 24-hour free trial work?",
    faqA2: "Right after you launch VidLoop Pro for the first time, your 24-hour free trial starts automatically. You get full access to all looping and merging features to test thoroughly before purchasing.",
    faqQ3: "How fast can I export a 24-hour looped video?",
    faqA3: "With our 'Lossless Stream Copy' engine, creating a 10 to 24-hour looped file takes as little as 10 to 30 seconds depending on your disk speed, completely eliminating tedious frame-by-frame rendering.",
    faqQ4: "Which Windows versions are supported?",
    faqA4: "Supports all 64-bit Windows editions: Windows 7 SP1, Windows 8, Windows 8.1, Windows 10, and Windows 11.",
    faqQ5: "What payment methods are supported?",
    faqA5: "For Indonesian users, Bank Transfer & QRIS are supported via WhatsApp (+6285641184229). For international buyers, PayPal payments of $7 USD are accepted at zainuelflash9@gmail.com.",

    footerDesc: "Professional Video & Audio Looper and Merger Studio desktop software powered by modern C++ technology.",
    footerDevTitle: "Official Developer Contact",
    footerDev: "Developer: Zainu El Maarif",
    footerCopy: "© 2026 VidLoop Pro Studio by Zainu El Maarif. All Rights Reserved.",
    footerLinkFeat: "Features",
    footerLinkPrice: "Pricing",

    toastCopy: "Copied to clipboard!",
    toastDownload: "Starting download Setup_VidLoopPro.exe (~27.7 MB)..."
  }
};

let currentLang = 'id';
let currentCurrency = 'IDR';

// DOM Elements
const langBtn = document.getElementById('langToggle');
const toastEl = document.getElementById('toastNotification');
const toastMsg = document.getElementById('toastMsg');
const priceAmountEl = document.getElementById('priceAmount');
const currencyIdrBtn = document.getElementById('currencyIdr');
const currencyUsdBtn = document.getElementById('currencyUsd');

/**
 * Smart Language & Geo Detection:
 * 1. Honors explicit user selection saved in localStorage.
 * 2. Checks visitor Timezone (Asia/Jakarta, Asia/Pontianak, Asia/Makassar, Asia/Jayapura).
 * 3. Checks browser navigator.languages.
 * 4. Defaults to 'id' for Indonesia, and 'en' for everyone else.
 */
function detectVisitorLanguage() {
  const saved = localStorage.getItem('vidloop_user_lang');
  if (saved === 'id' || saved === 'en') {
    return saved;
  }

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Jakarta') || tz.includes('Pontianak') || tz.includes('Makassar') || tz.includes('Jayapura')) {
      return 'id';
    }
  } catch (e) {}

  const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
  for (const l of browserLangs) {
    if (l && l.toLowerCase().startsWith('id')) {
      return 'id';
    }
  }

  return 'en';
}

// Set Language & Translate ENTIRE page
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('vidloop_user_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Language Button Text
  if (langBtn) {
    langBtn.innerHTML = lang === 'id' ? '🌐 ID / EN' : '🌐 EN / ID';
  }

  // Translate all [data-i18n] nodes
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Also synchronize default currency
  if (lang === 'id' && currentCurrency !== 'IDR') {
    setCurrency('IDR');
  } else if (lang === 'en' && currentCurrency !== 'USD') {
    setCurrency('USD');
  } else {
    updatePriceDisplay();
  }
}

// Currency Switcher
function setCurrency(curr) {
  currentCurrency = curr;
  updatePriceDisplay();
}

function updatePriceDisplay() {
  if (!priceAmountEl) return;
  const dict = i18n[currentLang];

  if (currentCurrency === 'IDR') {
    priceAmountEl.innerHTML = 'Rp 100.000<span class="pricing-period">' + dict.pricePeriod + '</span>';
    if (currencyIdrBtn) {
      currencyIdrBtn.classList.add('btn-primary');
      currencyIdrBtn.classList.remove('btn-secondary');
    }
    if (currencyUsdBtn) {
      currencyUsdBtn.classList.add('btn-secondary');
      currencyUsdBtn.classList.remove('btn-primary');
    }
  } else {
    priceAmountEl.innerHTML = '$7 USD<span class="pricing-period">' + dict.pricePeriod + '</span>';
    if (currencyUsdBtn) {
      currencyUsdBtn.classList.add('btn-primary');
      currencyUsdBtn.classList.remove('btn-secondary');
    }
    if (currencyIdrBtn) {
      currencyIdrBtn.classList.add('btn-secondary');
      currencyIdrBtn.classList.remove('btn-primary');
    }
  }
}

// Event Listeners for Currency
if (currencyIdrBtn) currencyIdrBtn.addEventListener('click', () => setCurrency('IDR'));
if (currencyUsdBtn) currencyUsdBtn.addEventListener('click', () => setCurrency('USD'));

// Event Listener for Language Toggle
if (langBtn) {
  langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'id' ? 'en' : 'id');
  });
}

// Toast Notification
function showToast(message) {
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3500);
}

// Copy to Clipboard
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label || text} ${i18n[currentLang].toastCopy}`);
  }).catch(() => {
    prompt('Copy to clipboard:', text);
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const isActive = parent.classList.contains('active');
    
    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    // Toggle clicked item
    if (!isActive) {
      parent.classList.add('active');
    }
  });
});

// Download Event Tracker
document.querySelectorAll('.download-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast(i18n[currentLang].toastDownload);
  });
});

// Run smart auto-detection on load
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = detectVisitorLanguage();
  setLanguage(initialLang);
});
