import type { Locale } from "../lib/i18n";

interface Strings {
  brandName: string;
  months: string[];
  missingData: string;
  wordmark: {
    primary: string;
    secondary: string;
    secondaryLine: string;
  };
  skipToContent: string;
  switchLanguage: string;
  languageSwitchAria: string;
  nav: {
    home: string;
    medicines: string;
    pharmacist: string;
    branches: string;
    site: string;
    main: string;
    legal: string;
  };
  search: {
    pageTitle: string;
    pageDescription: string;
    title: string;
    label: string;
    placeholder: string;
    submit: string;
    noJavaScript: string;
    askWhatsApp: string;
    help: string;
    empty: string;
    error: string;
    resultCount: string;
    fallbackName: string;
  };
  home: {
    title: string;
    description: string;
    whoWeAre: string;
    intro: string;
    branches: string;
    allBranches: string;
    contact: string;
    delivery: string;
  };
  branch: {
    pageTitle: string;
    listDescription: string;
    detailTitle: string;
    choose: string;
    information: string;
    address: string;
    hours: string;
    phone: string;
    map: string;
    openMap: string;
    delivery: string;
    areas: string;
    fee: string;
    deliveryHours: string;
    description: string;
    viewDetails: string;
  };
  contact: {
    askWhatsApp: string;
    callBranch: string;
    chooseBranch: string;
    chooseBranchDescription: string;
    close: string;
    pharmacistMessage: string;
    medicineMessage: string;
    missingWhatsApp: string;
    contactHeading: string;
  };
  medicine: {
    searchBack: string;
    priceAndAvailability: string;
    information: string;
    confirmAvailability: string;
    importantNotices: string;
    lastKnownPrice: string;
    asOfList: string;
    knownNotLive: string;
    activeIngredient: string;
    manufacturer: string;
    form: string;
    classification: string;
    noticePrice: string;
    noticeMedical: string;
    noticePrescription: string;
    missingTitle: string;
    missingBody: string;
    title: string;
    description: string;
    missingPageTitle: string;
    missingPageDescription: string;
    currency: string;
  };
  status: {
    check: string;
    confirmed: string;
    unavailable: string;
    info: string;
  };
  about: {
    title: string;
    description: string;
    heading: string;
    first: string;
    second: string;
  };
  terms: {
    title: string;
    description: string;
    heading: string;
    price: string;
    medical: string;
    prescription: string;
  };
  privacy: {
    title: string;
    description: string;
    heading: string;
    first: string;
    second: string;
  };
  notFound: {
    title: string;
    description: string;
    heading: string;
    body: string;
    englishHome: string;
  };
}

const strings: Record<Locale, Strings> = {
  ar: {
    brandName: "صيدليات علي أمين",
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    missingData: "بيانات تتوثّق",
    wordmark: { primary: "علي أمين", secondary: "صيدليات", secondaryLine: "ALI AMIN PHARMACIES" },
    skipToContent: "تخطى للمحتوى",
    switchLanguage: "English",
    languageSwitchAria: "تغيير اللغة إلى الإنجليزية",
    nav: {
      home: "الرئيسية",
      medicines: "بحث",
      pharmacist: "صيدلي",
      branches: "الفروع",
      site: "روابط الموقع",
      main: "التنقل الرئيسي",
      legal: "روابط قانونية",
    },
    search: {
      pageTitle: "البحث عن دواء | صيدليات علي أمين",
      pageDescription: "دوّر على اسم الدواء في صيدليات علي أمين.",
      title: "دوّر على دواء",
      label: "دوّر على دواء",
      placeholder: "دوّر باسم الدواء…",
      submit: "دوّر",
      noJavaScript: "البحث محتاج JavaScript. مش لاقي الدوا؟",
      askWhatsApp: "اسألنا على واتساب",
      help: "اكتب اسم الدواء، مش الوحدة أو التركيز.",
      empty: "مش لاقي الدوا؟",
      error: "البحث مش متاح دلوقتي. جرّب تاني أو اسألنا على واتساب.",
      resultCount: "{{count}} نتيجة",
      fallbackName: "دواء",
    },
    home: {
      title: "صيدليات علي أمين | الرئيسية",
      description: "اعرف آخر معلومة عن الدوا وتواصل مع صيدليات علي أمين في مصر.",
      whoWeAre: "مين إحنا",
      intro: "إحنا صيدليات علي أمين، بنسهّل عليك تعرف آخر معلومة معروفة عن الدوا قبل ما تتحرك. دوّر بالاسم، وبعدها اسأل صيدلي عشان نأكد التوفر من الفرع.",
      branches: "الفروع",
      allBranches: "كل الفروع",
      contact: "اسأل أو اتصل",
      delivery: "فيه توصيل، اطلب على واتساب",
    },
    branch: {
      pageTitle: "الفروع | صيدليات علي أمين",
      listDescription: "عناوين ومعلومات فروع صيدليات علي أمين.",
      detailTitle: "{{name}} | صيدليات علي أمين",
      choose: "اختار الفرع",
      information: "معلومات الفرع",
      address: "العنوان",
      hours: "المواعيد",
      phone: "التليفون",
      map: "الخريطة",
      openMap: "افتح الموقع على الخريطة",
      delivery: "التوصيل",
      areas: "مناطق التوصيل",
      fee: "رسوم التوصيل",
      deliveryHours: "مواعيد التوصيل",
      description: "معلومات {{name}} من صيدليات علي أمين.",
      viewDetails: "اعرف تفاصيل الفرع",
    },
    contact: {
      askWhatsApp: "اسأل على واتساب",
      callBranch: "اتصل بفرع",
      chooseBranch: "اختار الفرع",
      chooseBranchDescription: "اختار الفرع عشان تتصل.",
      close: "إغلاق",
      pharmacistMessage: "عايز أسأل صيدلي",
      medicineMessage: "هل {{name}} متوفر؟",
      missingWhatsApp: "بيانات تتوثّق",
      contactHeading: "تواصل معانا",
    },
    medicine: {
      searchBack: "رجوع للبحث",
      priceAndAvailability: "السعر والتوفر",
      information: "معلومات الدواء",
      confirmAvailability: "اتأكد من التوفر",
      importantNotices: "تنبيهات مهمة",
      lastKnownPrice: "آخر سعر معروف",
      asOfList: "حسب قائمة {{asOf}}",
      knownNotLive: "دي آخر معلومة معروفة، مش مخزون لحظي",
      activeIngredient: "المادة الفعالة",
      manufacturer: "الشركة المصنعة",
      form: "الشكل",
      classification: "التصنيف",
      noticePrice: "الأسعار هي أسعار القوائم وقد تتغير.",
      noticeMedical: "الموقع لا يقدم نصيحة طبية. اسأل صيدلي أو دكتور.",
      noticePrescription: "الأدوية التي تحتاج روشتة لازم لها روشتة عند الاستلام أو التوصيل.",
      missingTitle: "مش لاقيين الدواء ده",
      missingBody: "جرّب تكتب الاسم من جديد، أو ابعت الاسم لصيدلي.",
      title: "سعر {{name}} في مصر | صيدليات علي أمين",
      description: "آخر سعر معروف لـ {{name}}: {{price}} ج.م، حسب قائمة {{asOf}}.",
      missingPageTitle: "الدواء مش موجود | صيدليات علي أمين",
      missingPageDescription: "الدواء مش موجود في قائمة صيدليات علي أمين. جرّب البحث باسم مختلف.",
      currency: "ج.م",
    },
    status: {
      check: "يلزم تأكيد",
      confirmed: "متأكدين",
      unavailable: "مش متاح",
      info: "معلومة",
    },
    about: {
      title: "عن صيدليات علي أمين",
      description: "معلومات مختصرة عن صيدليات علي أمين وطريقة استخدام الموقع.",
      heading: "خدمة واضحة قبل ما تتحرك",
      first: "الموقع بيساعدك تدور على الدوا وتشوف آخر معلومة معروفة عنه، وبعدها تتواصل معانا عشان نأكد التوفر.",
      second: "بيانات الفروع والتوصيل بتظهر بعد ما تتوثق. لو محتاج مساعدة، اسأل صيدلي مباشرة.",
    },
    terms: {
      title: "الشروط والتنبيهات | صيدليات علي أمين",
      description: "تنبيهات استخدام موقع صيدليات علي أمين ومعلومات الأسعار والوصفات.",
      heading: "قبل ما تستخدم المعلومات",
      price: "الأسعار هي أسعار القوائم وقد تتغير، والمعروض هنا آخر أسعار معروفة.",
      medical: "الموقع لا يقدم نصيحة طبية. اسأل صيدلي أو دكتور.",
      prescription: "الأدوية التي تحتاج روشتة لازم لها روشتة عند الاستلام أو التوصيل.",
    },
    privacy: {
      title: "الخصوصية | صيدليات علي أمين",
      description: "سياسة خصوصية قصيرة وواضحة لموقع صيدليات علي أمين.",
      heading: "إيه اللي بيحصل لبياناتك؟",
      first: "الموقع من غير حسابات ومن غير كوكيز. بنستخدم Cloudflare Web Analytics من غير كوكيز عشان نفهم استخدام الموقع بشكل عام.",
      second: "رسائل واتساب والمكالمات بتحصل خارج الموقع، وبتخضع لسياسات واتساب وشركة الاتصالات.",
    },
    notFound: {
      title: "الصفحة مش موجودة | صيدليات علي أمين",
      description: "الصفحة دي مش موجودة. ارجع للرئيسية أو دوّر على الدواء.",
      heading: "مش لاقيين الصفحة دي",
      body: "الصفحة اللي بتدور عليها مش موجودة. جرّب البحث أو تواصل معانا.",
      englishHome: "English home",
    },
  },
  en: {
    brandName: "Ali Amin Pharmacies",
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    missingData: "To be confirmed",
    wordmark: { primary: "Ali Amin", secondary: "Pharmacies", secondaryLine: "صيدليات علي أمين" },
    skipToContent: "Skip to content",
    switchLanguage: "العربية",
    languageSwitchAria: "Change language to Arabic",
    nav: {
      home: "Home",
      medicines: "Search",
      pharmacist: "Pharmacist",
      branches: "Branches",
      site: "Site links",
      main: "Main navigation",
      legal: "Legal links",
    },
    search: {
      pageTitle: "Search medicines | Ali Amin Pharmacies",
      pageDescription: "Search medicine names at Ali Amin Pharmacies.",
      title: "Search for a medicine",
      label: "Search for a medicine",
      placeholder: "Search by medicine name…",
      submit: "Search",
      noJavaScript: "Search needs JavaScript. Cannot find the medicine?",
      askWhatsApp: "Ask us on WhatsApp",
      help: "Use the medicine name, not the unit or strength.",
      empty: "Cannot find it?",
      error: "Search is not available now. Try again or ask us on WhatsApp.",
      resultCount: "{{count}} results",
      fallbackName: "Medicine",
    },
    home: {
      title: "Ali Amin Pharmacies | Home",
      description: "Find the latest known medicine price and contact Ali Amin Pharmacies in Egypt.",
      whoWeAre: "Who we are",
      intro: "We are Ali Amin Pharmacies. Search for the latest known medicine price, then ask a pharmacist to confirm stock before you go.",
      branches: "Branches",
      allBranches: "All branches",
      contact: "Ask or call",
      delivery: "Delivery is available. Order on WhatsApp.",
    },
    branch: {
      pageTitle: "Branches | Ali Amin Pharmacies",
      listDescription: "Addresses and information for Ali Amin Pharmacies branches.",
      detailTitle: "{{name}} | Ali Amin Pharmacies",
      choose: "Choose a branch",
      information: "Branch information",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      map: "Map",
      openMap: "Open branch location",
      delivery: "Delivery",
      areas: "Delivery areas",
      fee: "Delivery fee",
      deliveryHours: "Delivery hours",
      description: "Information about {{name}} from Ali Amin Pharmacies.",
      viewDetails: "View branch details",
    },
    contact: {
      askWhatsApp: "Ask on WhatsApp",
      callBranch: "Call a branch",
      chooseBranch: "Choose a branch",
      chooseBranchDescription: "Choose the branch you want to call.",
      close: "Close",
      pharmacistMessage: "I want to ask a pharmacist",
      medicineMessage: "Is {{name}} available?",
      missingWhatsApp: "To be confirmed",
      contactHeading: "Contact us",
    },
    medicine: {
      searchBack: "Back to search",
      priceAndAvailability: "Price and availability",
      information: "Medicine information",
      confirmAvailability: "Confirm availability",
      importantNotices: "Important notices",
      lastKnownPrice: "Last known price",
      asOfList: "From the {{asOf}} list",
      knownNotLive: "This is the latest known information, not live stock.",
      activeIngredient: "Active ingredient",
      manufacturer: "Manufacturer",
      form: "Form",
      classification: "Classification",
      noticePrice: "List prices may change.",
      noticeMedical: "This site does not give medical advice. Ask a pharmacist or doctor.",
      noticePrescription: "Prescription medicines need a prescription at pickup or delivery.",
      missingTitle: "We cannot find this medicine",
      missingBody: "Try the name again, or send it to a pharmacist.",
      title: "{{name}} price in Egypt | Ali Amin Pharmacies",
      description: "Known price for {{name}}: EGP {{price}}, from the {{asOf}} list.",
      missingPageTitle: "Medicine not found | Ali Amin Pharmacies",
      missingPageDescription: "This medicine is not in the Ali Amin Pharmacies list. Try another name.",
      currency: "EGP",
    },
    status: {
      check: "Needs confirmation",
      confirmed: "Confirmed",
      unavailable: "Unavailable",
      info: "Information",
    },
    about: {
      title: "About Ali Amin Pharmacies",
      description: "A short guide to Ali Amin Pharmacies and this website.",
      heading: "Clear information before you go",
      first: "Search for a medicine and see its latest known information, then contact us to confirm stock.",
      second: "Branch and delivery details are shown after they are confirmed. Ask a pharmacist if you need help.",
    },
    terms: {
      title: "Terms and notices | Ali Amin Pharmacies",
      description: "Clear notices about using the Ali Amin Pharmacies website, prices, and prescriptions.",
      heading: "Before you use this information",
      price: "List prices may change. The site shows the latest known prices.",
      medical: "This site does not give medical advice. Ask a pharmacist or doctor.",
      prescription: "Prescription medicines need a prescription at pickup or delivery.",
    },
    privacy: {
      title: "Privacy | Ali Amin Pharmacies",
      description: "A short, clear privacy policy for the Ali Amin Pharmacies website.",
      heading: "What happens to your data?",
      first: "There are no accounts and no cookies. We use cookieless Cloudflare Web Analytics to understand site use in general.",
      second: "WhatsApp messages and calls happen outside this site and follow WhatsApp and telecom policies.",
    },
    notFound: {
      title: "Page not found | Ali Amin Pharmacies",
      description: "This page does not exist. Go home or search for a medicine.",
      heading: "We cannot find that page",
      body: "The page you requested does not exist. Try search or contact us.",
      englishHome: "English home",
    },
  },
};

export function getStrings(locale: Locale): Strings {
  return strings[locale];
}

export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}
