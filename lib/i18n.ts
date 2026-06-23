export type Lang = 'en' | 'ar';

export type Dict = {
  dir: 'ltr' | 'rtl';
  nav: { about: string; lineup: string; visit: string; tickets: string };
  langToggle: { label: string; switchTo: string };
  hero: {
    kicker: string;
    title: string;
    tagline: string;
    cta: string;
    instagram: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  lineup: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ticketsCta: string;
    tba: string;
    note: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    addressTitle: string;
    address: string;
    gettingThereTitle: string;
    gettingThere: string;
    hoursTitle: string;
    hours: string;
    mapCta: string;
    entryTitle: string;
    entry: string;
  };
  footer: {
    tagline: string;
    follow: string;
    contact: string;
    rights: string;
    eventsNote: string;
  };
  months: string[];
  weekdays: string[];
};

export const dict: Record<Lang, Dict> = {
  en: {
    dir: 'ltr',
    nav: { about: 'About', lineup: 'Events', visit: 'Visit', tickets: 'Tickets' },
    langToggle: { label: 'العربية', switchTo: 'Switch to Arabic' },
    hero: {
      kicker: 'Jeddah · Red Sea Port',
      title: 'THE CONTAINER',
      tagline:
        'Raw, industrial electronic music on the Red Sea. Steel, concrete, water and sound — where shipping containers become a stage from sunset to late.',
      cta: 'See the lineup',
      instagram: 'Follow on Instagram',
    },
    about: {
      eyebrow: 'The Venue',
      title: 'A working port, repurposed for sound.',
      body: [
        'The Container lives inside Shams Container Terminal — a working shipping-container terminal on the Jeddah waterfront, reborn as a venue for techno and house. Towering stacks of steel, raw concrete and the open Red Sea set the stage for international and regional artists.',
        'It is industrial by nature: open-air and warehouse spaces, port lighting, and a sound system built for the long arc from golden-hour sunset to the small hours. No gloss, no pretense — just powerful music in a space that was never meant to be pretty, and is all the more striking for it.',
      ],
      stats: [
        { value: 'Red Sea', label: 'Waterfront port setting' },
        { value: 'Techno · House', label: 'International & regional DJs' },
        { value: 'Sunset → Late', label: 'Open-air & warehouse floors' },
      ],
    },
    lineup: {
      eyebrow: 'Upcoming',
      title: 'Events & Lineup',
      subtitle: 'World-class techno and house, on the edge of the Red Sea.',
      ticketsCta: 'Tickets & info',
      tba: 'More to be announced',
      note: 'Lineup and dates are subject to change. Follow our Instagram for the latest announcements and ticketing.',
    },
    visit: {
      eyebrow: 'Plan your night',
      title: 'Visit',
      addressTitle: 'Location',
      address:
        'Shams Container Terminal, Al Moulysaa district, Jeddah port area, Red Sea coast, Saudi Arabia.',
      gettingThereTitle: 'Getting there',
      gettingThere:
        'The venue sits inside the industrial port zone on the waterfront. We recommend arriving by car or ride-hailing; on-site directions and the entry gate are shared with each event announcement on Instagram.',
      hoursTitle: 'Timing',
      hours:
        'Doors and set times are published per event. Sets typically run from late afternoon through the night.',
      mapCta: 'Open in Maps',
      entryTitle: 'Entry',
      entry:
        'The Container hosts licensed live electronic-music events. Entry is for ticket-holders; please bring valid ID. Event-specific entry details are confirmed at announcement.',
    },
    footer: {
      tagline: "Jeddah's industrial techno & house venue on the Red Sea port.",
      follow: 'Follow',
      contact: 'Contact',
      rights: 'All rights reserved.',
      eventsNote: 'Live electronic music events · Jeddah, Saudi Arabia',
    },
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  ar: {
    dir: 'rtl',
    nav: { about: 'عن المكان', lineup: 'الفعاليات', visit: 'الزيارة', tickets: 'التذاكر' },
    langToggle: { label: 'English', switchTo: 'التبديل إلى الإنجليزية' },
    hero: {
      kicker: 'جدة · ميناء البحر الأحمر',
      title: 'ذا كونتينر',
      tagline:
        'موسيقى إلكترونية صناعية خام على ساحل البحر الأحمر. فولاذ وخرسانة وماء وصوت — حيث تتحوّل حاويات الشحن إلى مسرح من غروب الشمس حتى وقت متأخر من الليل.',
      cta: 'استعرض الفعاليات',
      instagram: 'تابعنا على إنستغرام',
    },
    about: {
      eyebrow: 'المكان',
      title: 'ميناء عامل، أُعيد تصميمه من أجل الصوت.',
      body: [
        'يقع ذا كونتينر داخل محطة شمس للحاويات — محطة حاويات شحن عاملة على واجهة جدة البحرية، أُعيد إحياؤها كمكان لموسيقى التكنو والهاوس. أكوام شاهقة من الفولاذ، وخرسانة خام، والبحر الأحمر المفتوح، تشكّل خلفية لعروض فنانين عالميين وإقليميين.',
        'إنه مكان صناعي بطبعه: مساحات مفتوحة وأخرى مغلقة على طراز المستودعات، وإضاءة الميناء، ونظام صوت مصمَّم للامتداد الطويل من غروب الشمس الذهبي حتى ساعات الفجر الأولى. لا تنميق ولا تكلّف — مجرد موسيقى قوية في مساحة لم تُصمَّم يومًا لتكون جميلة، وهي بذلك أكثر تأثيرًا.',
      ],
      stats: [
        { value: 'البحر الأحمر', label: 'موقع على واجهة الميناء البحرية' },
        { value: 'تكنو · هاوس', label: 'منسّقو أغانٍ عالميون وإقليميون' },
        { value: 'الغروب ← وقت متأخر', label: 'مساحات مفتوحة ومستودعات' },
      ],
    },
    lineup: {
      eyebrow: 'القادم',
      title: 'الفعاليات والعروض',
      subtitle: 'تكنو وهاوس على أعلى مستوى، على حافة البحر الأحمر.',
      ticketsCta: 'التذاكر والمعلومات',
      tba: 'سيُعلن عن المزيد',
      note: 'العروض والتواريخ قابلة للتغيير. تابع حسابنا على إنستغرام لآخر الإعلانات والتذاكر.',
    },
    visit: {
      eyebrow: 'خطّط لليلتك',
      title: 'الزيارة',
      addressTitle: 'الموقع',
      address:
        'محطة شمس للحاويات، حي المُليساء، منطقة ميناء جدة، ساحل البحر الأحمر، المملكة العربية السعودية.',
      gettingThereTitle: 'كيفية الوصول',
      gettingThere:
        'يقع المكان داخل منطقة الميناء الصناعية على الواجهة البحرية. نوصي بالوصول بالسيارة أو خدمات النقل التشاركي؛ تُشارَك إرشادات الوصول وبوابة الدخول مع كل إعلان فعالية على إنستغرام.',
      hoursTitle: 'المواعيد',
      hours:
        'تُنشَر مواعيد الأبواب والعروض لكل فعالية. عادةً ما تمتد العروض من بعد الظهر حتى الليل.',
      mapCta: 'افتح في الخرائط',
      entryTitle: 'الدخول',
      entry:
        'يستضيف ذا كونتينر فعاليات موسيقى إلكترونية حيّة مرخّصة. الدخول لحاملي التذاكر؛ يُرجى إحضار هوية سارية. تُؤكَّد تفاصيل الدخول الخاصة بكل فعالية عند الإعلان عنها.',
    },
    footer: {
      tagline: 'وجهة جدة لموسيقى التكنو والهاوس الصناعية على ميناء البحر الأحمر.',
      follow: 'تابعنا',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      eventsNote: 'فعاليات موسيقى إلكترونية حيّة · جدة، المملكة العربية السعودية',
    },
    months: [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
    ],
    weekdays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  },
};

export function formatEventDate(iso: string, lang: Lang): string {
  const d = new Date(iso + 'T00:00:00');
  const t = dict[lang];
  const wd = t.weekdays[d.getDay()];
  const day = d.getDate();
  const month = t.months[d.getMonth()];
  const year = d.getFullYear();
  // Use Western digits for both; readable in EN and AR
  return lang === 'ar'
    ? `${wd} · ${day} ${month} ${year}`
    : `${wd} · ${day} ${month} ${year}`;
}
