/**
 * Samsung O'zbekiston - Asosiy Dastur Kodu (app.js)
 * Mahsulotlar katalogi, Savatcha, Qidiruv, Filtrlash, Sevimlilar va Interaktiv modullar
 */

// ==========================================================================
// 1. Mahsulotlar Ma'lumotlar Bazasi (Authentic Samsung CDN URLs)
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Galaxy S24 Ultra",
    category: "phones",
    price: 15499000,
    priceFormatted: "15 499 000 so'm",
    installmentFormatted: "oyiga 1 291 000 so'mdan (0-0-12)",
    badge: "YANGI | GALAXY AI",
    isAI: true,
    rating: 5,
    reviewsCount: 142,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/f2607/home/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg",
    colors: [
      { name: "Titanium Gray", hex: "#7a797b", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/f2607/home/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg" },
      { name: "Titanium Black", hex: "#2b2b2b", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/new/HOME_Feature-Card_Galaxy-S26-FE_560x560.jpg" },
      { name: "Titanium Violet", hex: "#4b4453", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/f2607/home/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg" }
    ],
    storageOptions: ["256 GB", "512 GB", "1 TB"],
    specs: ["200 MP Asosiy Kamera", "Titanium Korpus", "S Pen qalamchasi", "Snapdragon 8 Gen 3 for Galaxy"],
    description: "Galaxy AI bilan jihozlangan eng mukammal Galaxy flagmani. Circle to Search, Live Translate va 200 MP sun'iy intellekt kamerasi bilan ijod va mahsuldorlikning yangi cho'qqisi."
  },
  {
    id: 2,
    name: "Galaxy S24 FE",
    category: "phones",
    price: 7999000,
    priceFormatted: "7 999 000 so'm",
    installmentFormatted: "oyiga 666 000 so'mdan (0-0-12)",
    badge: "TOP SAVDO",
    isAI: true,
    rating: 5,
    reviewsCount: 89,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/new/HOME_Feature-Card_Galaxy-S26-FE_560x560.jpg",
    colors: [
      { name: "Moviy", hex: "#93c5fd", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/new/HOME_Feature-Card_Galaxy-S26-FE_560x560.jpg" },
      { name: "Grafit", hex: "#374151", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/f2607/home/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg" },
      { name: "Yalpiz", hex: "#a7f3d0", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/new/HOME_Feature-Card_Galaxy-S26-FE_560x560.jpg" }
    ],
    storageOptions: ["128 GB", "256 GB"],
    specs: ["Dynamic AMOLED 2X 120Hz", "ProVisual AI Dvigateli", "4700 mA/soat quvvat", "IP68 suvdan himoya"],
    description: "Flagman imkoniyatlari hamyonbop narxda. Galaxy AI yordamida suratlarni mukammallashtiring va cheksiz o'yinlardan zavqlaning."
  },
  {
    id: 3,
    name: "Galaxy A55 5G",
    category: "phones",
    price: 4499000,
    priceFormatted: "4 499 000 so'm",
    installmentFormatted: "oyiga 375 000 so'mdan (0-0-12)",
    badge: "XARIDORGIR",
    isAI: false,
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Umid_Galaxy_A18_300x208_transparent.png",
    colors: [
      { name: "Muzdek Moviy", hex: "#bfdbfe", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Umid_Galaxy_A18_300x208_transparent.png" },
      { name: "To'q Ko'k", hex: "#1e3a8a", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Umid_Galaxy_A18_300x208_transparent.png" },
      { name: "Binafsharang", hex: "#e9d5ff", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Umid_Galaxy_A18_300x208_transparent.png" }
    ],
    storageOptions: ["128 GB", "256 GB"],
    specs: ["Metall hoshiya va shisha korpus", "50 MP OIS Kamera", "Samsung Knox Vault", "Super AMOLED 120Hz"],
    description: "Premium metall korpus va xavfsiz Knox Vault himoyasi bilan Galaxy A seriyasining eng yetakchi modeli."
  },
  {
    id: 4,
    name: "Galaxy Z Fold6",
    category: "phones",
    price: 21990000,
    priceFormatted: "21 990 000 so'm",
    installmentFormatted: "oyiga 1 832 000 so'mdan (0-0-12)",
    badge: "PREMIUM BUKLAMA",
    isAI: true,
    rating: 5,
    reviewsCount: 64,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Phones_Tablets_L1_Product_2-5.png",
    colors: [
      { name: "Kumush Soya", hex: "#cbd5e1", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Phones_Tablets_L1_Product_2-5.png" },
      { name: "Dengiz Ko'ki", hex: "#1e293b", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Phones_Tablets_L1_Product_2-5.png" }
    ],
    storageOptions: ["256 GB", "512 GB", "1 TB"],
    specs: ["7.6\" Katta buklanuvchi ekran", "Yupqaroq va yengilroq", "Dual Screen Tarjima", "S Pen qo'llab-quvvatlashi"],
    description: "Cho'ntagingizdagi to'liq quvvatli kompyuter. Buklanuvchi katta ekranda ko'p vazifalilik va Galaxy AI mo'jizasi."
  },
  {
    id: 5,
    name: "Galaxy Watch Ultra",
    category: "wearables",
    price: 6899000,
    priceFormatted: "6 899 000 so'm",
    installmentFormatted: "oyiga 575 000 so'mdan (0-0-12)",
    badge: "TITANIUM & 100M",
    isAI: true,
    rating: 5,
    reviewsCount: 77,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/HOME_Feature-Card_Galaxy-Watch9_560x560.png",
    colors: [
      { name: "Titanium Gray", hex: "#4b5563", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/HOME_Feature-Card_Galaxy-Watch9_560x560.png" },
      { name: "Titanium White", hex: "#f3f4f6", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-08/HOME_Feature-Card_Galaxy-Watch9_560x560.png" }
    ],
    storageOptions: ["47mm LTE"],
    specs: ["Titanium 4-darajali korpus", "100 m suvga chidamlilik (10ATM)", "100 soatgacha batareya", "AI Yurak tahlili"],
    description: "Ekstremal sharoitlar va professional sportchilar uchun yaratilgan eng baquvvat Galaxy aqlli soati."
  },
  {
    id: 6,
    name: "Galaxy Buds3 Pro",
    category: "wearables",
    price: 2499000,
    priceFormatted: "2 499 000 so'm",
    installmentFormatted: "oyiga 208 000 so'mdan (0-0-12)",
    badge: "HI-RES AUDIO",
    isAI: true,
    rating: 4.9,
    reviewsCount: 153,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-03/HOME_Feature-Card_Galaxy-Buds4-Pro_560x560_black.jpg",
    colors: [
      { name: "Qora (Blade LED)", hex: "#1f2937", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-03/HOME_Feature-Card_Galaxy-Buds4-Pro_560x560_black.jpg" },
      { name: "Kumush Oq", hex: "#f8fafc", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-03/HOME_Feature-Card_Galaxy-Buds4-Pro_560x560_black.jpg" }
    ],
    storageOptions: ["Standart"],
    specs: ["Blade Lights dizayni", "Moslashuvchan AI shovqin so'ndirish", "24-bit 96kHz Hi-Fi ovoz", "Ovozli buyruqlar"],
    description: "Kristalldek tiniq ovoz va Blade Lights yorug'lik effektlari bilan yangi avlod Hi-Fi simsiz quloqchinlari."
  },
  {
    id: 7,
    name: "Galaxy Fit3",
    category: "wearables",
    price: 699000,
    priceFormatted: "699 000 so'm",
    installmentFormatted: "oyiga 58 000 so'mdan (0-0-12)",
    badge: "13 KUN QUVVAT",
    isAI: false,
    rating: 4.7,
    reviewsCount: 310,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Wearables_L1_Product_2-4.png",
    colors: [
      { name: "To'q kulrang", hex: "#374151", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Wearables_L1_Product_2-4.png" },
      { name: "Pushti oltin", hex: "#fbcfe8", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Wearables_L1_Product_2-4.png" },
      { name: "Kumush", hex: "#e2e8f0", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/Wearables_L1_Product_2-4.png" }
    ],
    storageOptions: ["Standart"],
    specs: ["1.6\" Katta AMOLED ekran", "13 kungacha bitta zaryad bilan", "100+ sport mashg'ulotlari", "Yiqilishni aniqlash va SOS"],
    description: "Yengil alyuminiy korpus, uzoq davom etuvchi batareya va har kunlik faollikni qulay kuzatish."
  },
  {
    id: 8,
    name: "Neo QLED 4K QN80D (65\")",
    category: "tv",
    price: 18490000,
    priceFormatted: "18 490 000 so'm",
    installmentFormatted: "oyiga 1 540 000 so'mdan (0-0-12)",
    badge: "NQ4 AI GEN2",
    isAI: true,
    rating: 5,
    reviewsCount: 42,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QN75QN80HAFXZA.jpg",
    colors: [
      { name: "Titanium Black", hex: "#111827", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QN75QN80HAFXZA.jpg" }
    ],
    storageOptions: ["55\"", "65\"", "75\"", "85\""],
    specs: ["NQ4 AI Gen2 Protsessor", "Quantum Matrix Mini LED", "Dolby Atmos va OTS Lite", "PANTONE sertifikatlangan ranglar"],
    description: "Mini LED texnologiyasi bilan aql bovar qilmas darajadagi chuqur qora ranglar va quyoshdek yorqin tasvirlar."
  },
  {
    id: 9,
    name: "OLED 4K S85D (65\")",
    category: "tv",
    price: 22990000,
    priceFormatted: "22 990 000 so'm",
    installmentFormatted: "oyiga 1 915 000 so'mdan (0-0-12)",
    badge: "HAQIQIY QORA OLED",
    isAI: true,
    rating: 5,
    reviewsCount: 29,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QN65S85HAEXZA.jpg",
    colors: [
      { name: "Grafite Black", hex: "#0f172a", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QN65S85HAEXZA.jpg" }
    ],
    storageOptions: ["55\"", "65\"", "77\""],
    specs: ["OLED o'zini yorituvchi piksellar", "Real Depth Enhancer", "LaserSlim minimalist dizayn", "144Hz Gaming Motion"],
    description: "OLED panellarning cheksiz kontrasti va Samsung AI protsessorining ajoyib sinergiyasi."
  },
  {
    id: 10,
    name: "The Frame QLED LS03D (55\")",
    category: "tv",
    price: 14990000,
    priceFormatted: "14 990 000 so'm",
    installmentFormatted: "oyiga 1 249 000 so'mdan (0-0-12)",
    badge: "SAN'AT ASARI TV",
    isAI: false,
    rating: 4.9,
    reviewsCount: 56,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QE65LS03HAUXXU.jpg",
    colors: [
      { name: "Yog'och hoshiyali", hex: "#78350f", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QE65LS03HAUXXU.jpg" },
      { name: "Oq hoshiyali", hex: "#f8fafc", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__QE65LS03HAUXXU.jpg" }
    ],
    storageOptions: ["43\"", "50\"", "55\"", "65\""],
    specs: ["Matli porlamaydigan ekran", "Art Mode rejimida 2500+ suratlar", "Olinuvchi magnit hoshiyalar", "QLED 100% Rang Hajmi"],
    description: "Televizoringiz o'chirilganida uyingizni muzeyga aylantiruvchi dizaynerlik mo'jizasi."
  },
  {
    id: 11,
    name: "Bespoke French Door Sovutgich",
    category: "appliances",
    price: 26490000,
    priceFormatted: "26 490 000 so'm",
    installmentFormatted: "oyiga 2 207 000 so'mdan (0-0-12)",
    badge: "BESPOKE AI",
    isAI: true,
    rating: 5,
    reviewsCount: 38,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__MRN75R95HAFXZA.jpg",
    colors: [
      { name: "Oq shisha", hex: "#f8fafc", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__MRN75R95HAFXZA.jpg" },
      { name: "Navy ko'k", hex: "#1e3a5f", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2026-09/560x560__MRN75R95HAFXZA.jpg" }
    ],
    storageOptions: ["645 Litr"],
    specs: ["AI Inverter motor (20 yillik kafolat)", "Ichki avtomatik suv idishi", "FlexZone harorat moslashuvi", "SmartThings AI Energy"],
    description: "Oshxonangizga mos rangli panellar, keng sig'im va mahsulotlar yangiligini uzoq saqlovchi AI sovutish tizimi."
  },
  {
    id: 12,
    name: "Bespoke AI Kir Yuvish Mashinasi",
    category: "appliances",
    price: 8790000,
    priceFormatted: "8 790 000 so'm",
    installmentFormatted: "oyiga 732 000 so'mdan (0-0-12)",
    badge: "ECOBUBBLE AI",
    isAI: true,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-07/MDDA_Feature_Card1_560X560_2.jpg",
    colors: [
      { name: "Inox Temir", hex: "#4b5563", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-07/MDDA_Feature_Card1_560X560_2.jpg" },
      { name: "Qora kavyar", hex: "#111827", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-07/MDDA_Feature_Card1_560X560_2.jpg" }
    ],
    storageOptions: ["9 kg", "11 kg"],
    specs: ["AI Ecobubble ko'pik texnologiyasi", "AI Wash 4 datchikli tahlil", "Bug' yordamida gigiyena", "Digital Inverter 20 yillik kafolat"],
    description: "Mato turini va kir darajasini o'zi aniqlab, kiyimlarni ehtiyotkor va 70% kam energiya sarflab yuvadi."
  },
  {
    id: 13,
    name: "Bespoke Jet AI Changyutkich",
    category: "appliances",
    price: 6390000,
    priceFormatted: "6 390 000 so'm",
    installmentFormatted: "oyiga 532 000 so'mdan (0-0-12)",
    badge: "280W SO'RISH",
    isAI: true,
    rating: 4.8,
    reviewsCount: 61,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-10/560x560__VC_v2.jpg",
    colors: [
      { name: "Satin Qora", hex: "#1f2937", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-10/560x560__VC_v2.jpg" },
      { name: "O'rmon Yashili", hex: "#14532d", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2025-10/560x560__VC_v2.jpg" }
    ],
    storageOptions: ["Standart"],
    specs: ["280W kuchli so'rish kuchi", "All-in-one tozalash stansiyasi", "AI Tozalash rejimi", "99.999% chang filtratsiyasi"],
    description: "All-in-one tozalash stantsiyasi o'z-o'zidan changni bo'shatadi va batareyani zaryadlaydi."
  },
  {
    id: 14,
    name: "Odyssey OLED G9 Gaming Monitor (49\")",
    category: "monitors",
    price: 19990000,
    priceFormatted: "19 990 000 so'm",
    installmentFormatted: "oyiga 1 665 000 so'mdan (0-0-12)",
    badge: "240HZ 0.03MS",
    isAI: false,
    rating: 5,
    reviewsCount: 33,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/PC_Monitors__L1_Product_Monitor_only_2-9.png",
    colors: [
      { name: "Kumush metall", hex: "#94a3b8", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/PC_Monitors__L1_Product_Monitor_only_2-9.png" }
    ],
    storageOptions: ["49\" Dual QHD"],
    specs: ["49\" 32:9 Super Ultra-Wide", "240Hz chastota va 0.03ms javob vaqti", "Neo Quantum Protsessor Pro", "CoreSync va CoreLighting+"],
    description: "Kiber-sportchilar va geymerlar uchun haqiqiy afsona. 1800R kavisli OLED ekran bilan o'yin ichiga to'liq sho'ng'ing."
  },
  {
    id: 15,
    name: "Smart Monitor M8 (32\")",
    category: "monitors",
    price: 6990000,
    priceFormatted: "6 990 000 so'm",
    installmentFormatted: "oyiga 582 000 so'mdan (0-0-12)",
    badge: "4K SMART HUB",
    isAI: false,
    rating: 4.8,
    reviewsCount: 47,
    image: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/PC_Monitors__L1_Product_2-4.png",
    colors: [
      { name: "Issiq Oq", hex: "#f1f5f9", img: "https://images.samsung.com/is/image/samsung/assets/uz_ru/gnb/2609/PC_Monitors__L1_Product_2-4.png" }
    ],
    storageOptions: ["32\" UHD 4K"],
    specs: ["Kompyutersiz Smart Hub imkoniyati", "Magnitli SlimFit veb-kamera", "SmartThings Hub integratsiyasi", "HDR 10+ va sRGB 99%"],
    description: "Kompyutersiz ishlang va dam oling. Netflix, YouTube, Office 365 va video qo'ng'iroqlarni to'g'ridan-to'g'ri monitordan boshqaring."
  }
];

// ==========================================================================
// 2. Global Holat (State Management)
// ==========================================================================
let state = {
  cart: JSON.parse(localStorage.getItem('samsung_uz_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('samsung_uz_wishlist')) || [],
  currentCategory: 'all',
  currentSort: 'popular',
  appliedPromo: JSON.parse(localStorage.getItem('samsung_uz_promo')) || null,
  activeSlide: 0,
  carouselTimer: null,
  isCarouselPaused: false,
  theme: localStorage.getItem('samsung_uz_theme') || 'light',
  lang: localStorage.getItem('samsung_uz_lang') || 'uz'
};

// ==========================================================================
// 3. Sahifa Yuklanishi va Initsializatsiya
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCarousel();
  initAiTabs();
  initCatalogFilters();
  initCart();
  initWishlist();
  initSearch();
  initMobileDrawer();
  initScrollEvents();
  renderProductsGrid();
});

// ==========================================================================
// 4. Mavzu (Dark / Light Theme)
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('samsung_uz_theme', state.theme);
      updateThemeIcon();
      showToast(state.theme === 'dark' ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi", "fa-moon");
    });
  }
}

function updateThemeIcon() {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = state.theme === 'dark' ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
  }
}

// ==========================================================================
// 5. Til (Language Switcher)
// ==========================================================================
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem('samsung_uz_lang', state.lang);
      langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
      showToast(state.lang === 'uz' ? "Til: O'zbekcha" : "Язык: Русский", "fa-globe");
    });
  });
}

// ==========================================================================
// 6. Hero Carousel Slayder Engine
// ==========================================================================
function initCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const pausePlayBtn = document.getElementById('pausePlayBtn');
  const carousel = document.getElementById('heroCarousel');

  if (!slides.length) return;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    state.activeSlide = index;

    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
  }

  function startAutoPlay() {
    stopAutoPlay();
    state.carouselTimer = setInterval(() => {
      if (!state.isCarouselPaused) {
        showSlide(state.activeSlide + 1);
      }
    }, 6000);
  }

  function stopAutoPlay() {
    if (state.carouselTimer) {
      clearInterval(state.carouselTimer);
      state.carouselTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(state.activeSlide + 1);
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(state.activeSlide - 1);
      startAutoPlay();
    });
  }

  indicators.forEach(ind => {
    ind.addEventListener('click', () => {
      const idx = parseInt(ind.dataset.index, 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  if (pausePlayBtn) {
    pausePlayBtn.addEventListener('click', () => {
      state.isCarouselPaused = !state.isCarouselPaused;
      pausePlayBtn.innerHTML = state.isCarouselPaused 
        ? '<i class="fa-solid fa-play"></i>' 
        : '<i class="fa-solid fa-pause"></i>';
    });
  }

  // Hover to pause
  carousel.addEventListener('mouseenter', () => { state.isCarouselPaused = true; });
  carousel.addEventListener('mouseleave', () => {
    if (pausePlayBtn && pausePlayBtn.innerHTML.includes('pause')) {
      state.isCarouselPaused = false;
    }
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      showSlide(state.activeSlide + 1);
      startAutoPlay();
    } else if (touchEndX - touchStartX > 50) {
      showSlide(state.activeSlide - 1);
      startAutoPlay();
    }
  }, { passive: true });

  startAutoPlay();
}

// ==========================================================================
// 7. Galaxy AI Innovatsiyalari (Tabs)
// ==========================================================================
function initAiTabs() {
  const tabs = document.querySelectorAll('.ai-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetId = `ai-panel-${tab.dataset.target}`;
      document.querySelectorAll('.ai-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
}

// ==========================================================================
// 8. Mahsulotlar Katalogi, Filtrlash va Saralash
// ==========================================================================
function initCatalogFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const sortSelect = document.getElementById('catalogSort');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterCatalog(tab.dataset.filter);
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderProductsGrid();
    });
  }
}

function filterCatalog(category) {
  state.currentCategory = category;

  // Update catalog filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === category);
  });

  // Update quick category pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    const isMatching = (category === 'all' && pill.innerText.includes('Barchasi')) ||
                       pill.getAttribute('onclick')?.includes(`'${category}'`);
    pill.classList.toggle('active', !!isMatching);
  });

  renderProductsGrid();

  // Scroll smoothly to catalog if called from outside
  const catalogSection = document.getElementById('products');
  if (catalogSection && window.scrollY < catalogSection.offsetTop - 200) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderProductsGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Filter products
  let filtered = PRODUCTS_DATA.filter(p => {
    if (state.currentCategory === 'all') return true;
    return p.category === state.currentCategory;
  });

  // Sort products
  if (state.currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // default popular by id order
    filtered.sort((a, b) => a.id - b.id);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3>Ushbu toifada mahsulot topilmadi</h3>
        <p style="color: var(--text-secondary); margin-top: 8px;">Boshqa toifani tanlang yoki barcha mahsulotlarni ko'ring.</p>
        <button class="btn btn-primary" style="margin-top: 16px;" onclick="filterCatalog('all')">Barcha mahsulotlar</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    const colorSwatchesHtml = product.colors.map((c, idx) => `
      <span class="color-dot ${idx === 0 ? 'active' : ''}" 
            style="background-color: ${c.hex};" 
            title="${c.name}"
            onclick="switchProductCardColor(event, ${product.id}, '${c.img}')">
      </span>
    `).join('');

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card-top">
          <span class="product-badge ${product.isAI ? 'badge-ai' : ''}">
            ${product.badge}
          </span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${product.id})" 
                  aria-label="Sevimlilarga qo'shish">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="product-image-box" onclick="openProductModal(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="product-img" id="product-img-${product.id}">
        </div>

        <div class="product-colors">
          ${colorSwatchesHtml}
        </div>

        <div class="product-info">
          <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
          <p class="product-specs">${product.specs.slice(0, 2).join(' • ')}</p>
          
          <div class="product-price-box">
            <span class="product-price">${product.priceFormatted}</span>
            <span class="product-installment">${product.installmentFormatted}</span>
          </div>

          <div class="product-actions">
            <button class="btn-add-cart" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-shopping"></i> Savatga
            </button>
            <button class="btn-quick-view" onclick="openProductModal(${product.id})" title="Tezkor ko'rish" aria-label="Batafsil">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function switchProductCardColor(event, productId, newImgUrl) {
  event.stopPropagation();
  const parent = event.target.closest('.product-colors');
  if (parent) {
    parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    event.target.classList.add('active');
  }
  const imgEl = document.getElementById(`product-img-${productId}`);
  if (imgEl && newImgUrl) {
    imgEl.src = newImgUrl;
  }
}

// ==========================================================================
// 9. Savatcha (Shopping Cart) Boshqaruvi
// ==========================================================================
function initCart() {
  updateCartUI();

  const cartTrigger = document.getElementById('cartTrigger');
  const closeCartBtn = document.getElementById('closeCartDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => {
    closeCart();
    closeMobileMenu();
  });
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function addToCart(productId, selectedColor = null, selectedStorage = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const colorName = selectedColor || product.colors[0].name;
  const storageName = selectedStorage || product.storageOptions[0];
  const itemKey = `${product.id}-${colorName}-${storageName}`;

  const existing = state.cart.find(item => item.key === itemKey);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key: itemKey,
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
      color: colorName,
      storage: storageName,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} savatchaga qo'shildi!`, "fa-cart-shopping");
  openCart();
}

function updateCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  showToast("Mahsulot savatchadan o'chirildi", "fa-trash");
}

function saveCart() {
  localStorage.setItem('samsung_uz_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const headerCount = document.getElementById('cartHeaderCount');
  const cartList = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('emptyCartState');
  const footer = document.getElementById('cartDrawerFooter');

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.innerText = totalQty;
  if (headerCount) headerCount.innerText = `(${totalQty})`;

  if (state.cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (cartList) cartList.innerHTML = '';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (footer) footer.style.display = 'block';

  // Render items
  if (cartList) {
    cartList.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-color">${item.color} • ${item.storage}</div>
          <div class="cart-item-price">${formatNumber(item.price * item.qty)} so'm</div>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty('${item.key}', -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.key}', 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.key}')" title="O'chirish">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Calculate totals
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (state.appliedPromo) {
    discount = Math.round(subtotal * (state.appliedPromo.percent / 100));
  }
  const finalTotal = subtotal - discount;

  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const finalTotalEl = document.getElementById('cartFinalTotal');
  const promoBadge = document.getElementById('promoDiscountBadge');

  if (subtotalEl) subtotalEl.innerText = `${formatNumber(subtotal)} so'm`;
  if (finalTotalEl) finalTotalEl.innerText = `${formatNumber(finalTotal)} so'm`;

  if (discount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.innerText = `-${formatNumber(discount)} so'm`;
    if (promoBadge) promoBadge.style.display = 'flex';
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (promoBadge) promoBadge.style.display = 'none';
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'SAMSUNG10' || code === 'SAMSUNG2026') {
    state.appliedPromo = { code: code, percent: 10 };
    localStorage.setItem('samsung_uz_promo', JSON.stringify(state.appliedPromo));
    input.value = '';
    updateCartUI();
    showToast("10% lik chegirma promokodi muvaffaqiyatli qo'llandi!", "fa-tag");
  } else {
    showToast("Noto'g'ri promokod. 'SAMSUNG10' kodini sinab ko'ring.", "fa-circle-exclamation");
  }
}

function removePromoCode() {
  state.appliedPromo = null;
  localStorage.removeItem('samsung_uz_promo');
  updateCartUI();
  showToast("Promokod bekor qilindi", "fa-xmark");
}

// ==========================================================================
// 10. Sevimlilar (Wishlist)
// ==========================================================================
function initWishlist() {
  updateWishlistBadge();

  const trigger = document.getElementById('wishlistTrigger');
  if (trigger) {
    trigger.addEventListener('click', openWishlistModal);
  }
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast("Sevimlilardan olib tashlandi", "fa-heart-crack");
  } else {
    state.wishlist.push(productId);
    showToast("Sevimlilar ro'yxatiga qo'shildi!", "fa-heart");
  }
  localStorage.setItem('samsung_uz_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderProductsGrid();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.innerText = state.wishlist.length;
}

function openWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  const body = document.getElementById('wishlistModalBody');
  if (!modal || !body) return;

  const wishlistedProducts = PRODUCTS_DATA.filter(p => state.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <i class="fa-regular fa-heart" style="font-size: 3.5rem; color: var(--border-color); margin-bottom: 16px;"></i>
        <h4>Sevimlilar ro'yxatingiz bo'sh</h4>
        <p style="color: var(--text-secondary); margin-top: 8px;">O'zingizga yoqqan mahsulotlardagi yurakchani bosib saqlang.</p>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div class="wishlist-items-grid" style="display: flex; flex-direction: column; gap: 14px; max-height: 400px; overflow-y: auto;">
        ${wishlistedProducts.map(p => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-secondary); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 14px;">
              <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: contain;">
              <div>
                <h4 style="font-size: 0.95rem; font-weight: 700;">${p.name}</h4>
                <span style="font-size: 0.85rem; color: var(--samsung-blue); font-weight: 700;">${p.priceFormatted}</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm btn-primary" onclick="addToCart(${p.id}); closeWishlistModal();">Savatga</button>
              <button class="btn btn-sm" onclick="toggleWishlist(${p.id}); openWishlistModal();" style="color: var(--danger);"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  modal.classList.add('open');
}

function closeWishlistModal() {
  document.getElementById('wishlistModal').classList.remove('open');
}

// ==========================================================================
// 11. Tezkor Ko'rish Modali (Quick View Modal)
// ==========================================================================
let currentModalProduct = null;
let currentModalSelectedColor = null;
let currentModalSelectedStorage = null;

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  currentModalSelectedColor = product.colors[0].name;
  currentModalSelectedStorage = product.storageOptions[0];

  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');

  content.innerHTML = `
    <div class="modal-gallery">
      <img src="${product.image}" alt="${product.name}" class="modal-main-img" id="modalMainImg">
    </div>

    <div class="modal-details">
      <span class="section-badge">${product.badge}</span>
      <h2>${product.name}</h2>
      
      <div class="modal-rating">
        ${'★'.repeat(Math.floor(product.rating))} (${product.reviewsCount} ta sharh)
      </div>

      <div class="modal-price-box">
        <span class="modal-price">${product.priceFormatted}</span>
        <p style="color: var(--samsung-blue); font-size: 0.88rem; font-weight: 600;">${product.installmentFormatted}</p>
      </div>

      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">
        ${product.description}
      </p>

      <div class="modal-section-title">Rangni tanlang: <span id="modalColorLabel" style="color: var(--text-primary); text-transform: none;">${currentModalSelectedColor}</span></div>
      <div class="modal-colors">
        ${product.colors.map((c, i) => `
          <span class="color-dot ${i === 0 ? 'active' : ''}" 
                style="background-color: ${c.hex}; width: 22px; height: 22px;" 
                title="${c.name}"
                onclick="selectModalColor('${c.name}', '${c.img}', this)">
          </span>
        `).join('')}
      </div>

      <div class="modal-section-title">Xotira / O'lcham:</div>
      <div class="modal-storage-options">
        ${product.storageOptions.map((opt, i) => `
          <button class="storage-btn ${i === 0 ? 'active' : ''}" onclick="selectModalStorage('${opt}', this)">
            ${opt}
          </button>
        `).join('')}
      </div>

      <ul class="modal-specs-list">
        ${product.specs.map(s => `<li><i class="fa-solid fa-circle-check text-primary"></i> ${s}</li>`).join('')}
      </ul>

      <div style="display: flex; gap: 12px; margin-top: auto;">
        <button class="btn btn-primary btn-block" onclick="addCurrentModalToCart()">
          <i class="fa-solid fa-cart-shopping"></i> Savatchaga qo'shish
        </button>
        <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})" style="background: var(--bg-secondary); color: var(--text-primary);">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectModalColor(colorName, imgUrl, el) {
  currentModalSelectedColor = colorName;
  document.getElementById('modalColorLabel').innerText = colorName;
  document.querySelectorAll('.modal-colors .color-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  if (imgUrl) {
    document.getElementById('modalMainImg').src = imgUrl;
  }
}

function selectModalStorage(storageName, el) {
  currentModalSelectedStorage = storageName;
  document.querySelectorAll('.modal-storage-options .storage-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function addCurrentModalToCart() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id, currentModalSelectedColor, currentModalSelectedStorage);
  closeProductModal();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// 12. Jonli Qidiruv (Live Search Modal)
// ==========================================================================
function initSearch() {
  const trigger = document.getElementById('searchTrigger');
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('liveSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const mobileInput = document.getElementById('mobileSearchInput');

  if (trigger) trigger.addEventListener('click', openSearchModal);

  if (input) {
    input.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (input) {
        input.value = '';
        input.focus();
        handleLiveSearch('');
      }
    });
  }

  if (mobileInput) {
    mobileInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        closeMobileMenu();
        openSearchModal();
        if (input) {
          input.value = mobileInput.value;
          handleLiveSearch(mobileInput.value);
        }
      }
    });
  }
}

function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('liveSearchInput');
      if (input) input.focus();
    }, 100);
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function setQuickSearch(term) {
  const input = document.getElementById('liveSearchInput');
  if (input) {
    input.value = term;
    handleLiveSearch(term);
  }
}

function handleLiveSearch(query) {
  const resultsArea = document.getElementById('searchResultsArea');
  if (!resultsArea) return;

  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    resultsArea.innerHTML = '<p class="search-hint">Qidiruv natijalarini ko\'rish uchun so\'z kiriting...</p>';
    return;
  }

  const matches = PRODUCTS_DATA.filter(p => {
    return p.name.toLowerCase().includes(cleanQuery) ||
           p.category.toLowerCase().includes(cleanQuery) ||
           p.specs.some(s => s.toLowerCase().includes(cleanQuery));
  });

  if (matches.length === 0) {
    resultsArea.innerHTML = `
      <div style="text-align: center; padding: 30px;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--border-color); margin-bottom: 12px;"></i>
        <h4>"${query}" bo'yicha hech narsa topilmadi</h4>
        <p style="color: var(--text-secondary); font-size: 0.88rem;">Iltimos, so'zni to'g'ri yozganingizni tekshiring.</p>
      </div>
    `;
    return;
  }

  resultsArea.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openProductModal(${p.id}); closeSearchModal();">
      <img src="${p.image}" alt="${p.name}" class="search-result-thumb">
      <div class="search-result-info">
        <h4>${highlightMatch(p.name, cleanQuery)}</h4>
        <span>${p.priceFormatted}</span>
      </div>
      <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 0.85rem;"></i>
    </div>
  `).join('');
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const before = text.substring(0, idx);
  const match = text.substring(idx, idx + query.length);
  const after = text.substring(idx + query.length);
  return `${before}<mark style="background: rgba(33, 137, 255, 0.25); color: inherit; padding: 0 2px; border-radius: 2px;">${match}</mark>${after}`;
}

// ==========================================================================
// 13. Buyurtmani Rasmiylashtirish (Checkout Modal)
// ==========================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Savatchangiz bo'sh!", "fa-circle-exclamation");
    return;
  }

  closeCart();
  const modal = document.getElementById('checkoutModal');
  const totalEl = document.getElementById('checkoutModalTotal');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (state.appliedPromo) {
    discount = Math.round(subtotal * (state.appliedPromo.percent / 100));
  }
  const finalTotal = subtotal - discount;

  if (totalEl) totalEl.innerText = `${formatNumber(finalTotal)} so'm`;
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const city = document.getElementById('orderCity').value;
  const address = document.getElementById('orderAddress').value.trim();
  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'Click';

  const orderId = `#UZ-${Math.floor(100000 + Math.random() * 900000)}`;

  // Summary box
  const detailsBox = document.getElementById('successDetailsBox');
  if (detailsBox) {
    detailsBox.innerHTML = `
      <div style="background: var(--bg-secondary); padding: 18px; border-radius: var(--radius-md); text-align: left; font-size: 0.88rem; margin-bottom: 20px;">
        <p><strong>Xaridor:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Manzil:</strong> ${city}, ${address}</p>
        <p><strong>To'lov usuli:</strong> ${payMethod}</p>
        <p><strong>Mahsulotlar soni:</strong> ${state.cart.reduce((s, i) => s + i.qty, 0)} dona</p>
      </div>
    `;
  }

  const successOrderId = document.getElementById('successOrderId');
  if (successOrderId) successOrderId.innerText = orderId;

  // Clear cart
  state.cart = [];
  state.appliedPromo = null;
  saveCart();
  localStorage.removeItem('samsung_uz_promo');
  updateCartUI();

  closeCheckoutModal();

  // Show Success Modal
  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.add('open');
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// 14. Mobil Menyu Drawer
// ==========================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeMobileDrawer');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.getElementById('mobileDrawer').classList.toggle('open');
      document.getElementById('drawerBackdrop').classList.toggle('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }
}

function closeMobileMenu() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 15. Scroll Hodisalari (Header va Back-to-top)
// ==========================================================================
function initScrollEvents() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 16. Yangiliklarga Obuna (Newsletter)
// ==========================================================================
function handleNewsletter(event) {
  event.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (!input) return;

  const email = input.value.trim();
  if (email) {
    showToast(`Rahmat! ${email} manziliga xabarnomalar yuboriladi.`, "fa-envelope-circle-check");
    input.value = '';
  }
}

// ==========================================================================
// 17. Toast Xabarnomalar Tizimi
// ==========================================================================
function showToast(message, iconClass = "fa-circle-check") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid ${iconClass} toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Yordamchi raqam formatlash (15499000 -> 15 499 000)
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
