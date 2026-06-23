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
    detailsCta: string;
    tba: string;
    note: string;
  };
  event: {
    backToEvents: string;
    backHome: string;
    eyebrow: string;
    whenTitle: string;
    timeApprox: string;
    timeTba: string;
    whereTitle: string;
    bioTitle: string;
    genreTitle: string;
    lineupNote: string;
    ticketsTitle: string;
    ticketsCta: string;
    ticketsSoon: string;
    ticketsSoonNote: string;
    mapCta: string;
    mapTitle: string;
    notFound: string;
  };
  igPlaceholder: string;
  bios: Record<string, string[]>;
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
    mapTitle: string;
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
  alt: {
    hero: string;
    containerStack: string;
    seaNight: string;
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
      detailsCta: 'Event details',
      tba: 'More to be announced',
      note: 'Lineup and dates are subject to change. Ticketing and announcements are published per event.',
    },
    event: {
      backToEvents: 'All events',
      backHome: 'Back to home',
      eyebrow: 'Live at The Container',
      whenTitle: 'When',
      timeApprox: 'Doors / set from approx.',
      timeTba: 'Set times announced closer to the date.',
      whereTitle: 'Where',
      bioTitle: 'About the artist',
      genreTitle: 'Sound',
      lineupNote: 'Lineup subject to change.',
      ticketsTitle: 'Tickets',
      ticketsCta: 'Buy tickets',
      ticketsSoon: 'Tickets coming soon',
      ticketsSoonNote:
        'Ticketing for this event has not been released yet. Ticket links will be published here once on sale.',
      mapCta: 'Open in Maps',
      mapTitle: 'Map showing The Container venue, Jeddah Red Sea port',
      notFound: 'Event not found.',
    },
    igPlaceholder: 'Instagram coming soon',
    bios: {
      'anja-schneider': [
        'Berlin-based DJ, producer and broadcaster — a long-standing figure in international house and techno, and founder of the SOUS Music label.',
      ],
      cassy: [
        'Austrian-Greek DJ and producer celebrated for deep, hypnotic house and techno and long, immersive sets; founder of Kwench Records.',
      ],
    },
    visit: {
      eyebrow: 'Plan your night',
      title: 'Visit',
      addressTitle: 'Location',
      address:
        'Shams Container Terminal, Al Moulysaa district, Jeddah port area, Red Sea coast, Saudi Arabia.',
      gettingThereTitle: 'Getting there',
      gettingThere:
        'The venue sits inside the industrial port zone on the waterfront. We recommend arriving by car or ride-hailing; on-site directions and the entry gate are shared with each event announcement.',
      hoursTitle: 'Timing',
      hours:
        'Doors and set times are published per event. Sets typically run from late afternoon through the night.',
      mapCta: 'Open in Maps',
      mapTitle: 'Map showing The Container venue, Jeddah Red Sea port',
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
    alt: {
      hero: 'A packed night crowd raises their hands before a blazing stage of light and haze at The Container — a live electronic-music event staged in the raw industrial port.',
      containerStack: 'Crowd with hands in the air in front of a towering steel-truss festival stage rig lit purple, smoke and beams over the industrial venue at The Container.',
      seaNight: 'Dancers silhouetted in a raw concrete-and-steel warehouse, exposed pipes overhead and stage light cutting through haze at The Container.',
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
      detailsCta: 'تفاصيل الفعالية',
      tba: 'سيُعلن عن المزيد',
      note: 'العروض والتواريخ قابلة للتغيير. تُنشَر التذاكر والإعلانات لكل فعالية على حدة.',
    },
    event: {
      backToEvents: 'كل الفعاليات',
      backHome: 'العودة إلى الرئيسية',
      eyebrow: 'مباشرةً في ذا كونتينر',
      whenTitle: 'الموعد',
      timeApprox: 'الأبواب / بداية العرض تقريبًا',
      timeTba: 'يُعلَن عن مواعيد العروض قُرب التاريخ.',
      whereTitle: 'المكان',
      bioTitle: 'عن الفنان',
      genreTitle: 'الأسلوب',
      lineupNote: 'العروض قابلة للتغيير.',
      ticketsTitle: 'التذاكر',
      ticketsCta: 'اشترِ التذاكر',
      ticketsSoon: 'التذاكر قريبًا',
      ticketsSoonNote:
        'لم تُطرح تذاكر هذه الفعالية بعد. ستُنشَر روابط التذاكر هنا فور توفّرها.',
      mapCta: 'افتح في الخرائط',
      mapTitle: 'خريطة توضّح موقع ذا كونتينر، ميناء جدة على البحر الأحمر',
      notFound: 'الفعالية غير موجودة.',
    },
    igPlaceholder: 'إنستغرام قريبًا',
    bios: {
      'anja-schneider': [
        'منسّقة أغانٍ ومنتجة ومذيعة مقيمة في برلين — شخصية راسخة منذ زمن طويل في موسيقى الهاوس والتكنو العالمية، ومؤسِّسة لِيبل SOUS Music.',
      ],
      cassy: [
        'منسّقة أغانٍ ومنتجة نمساوية يونانية، اشتهرت بموسيقى هاوس وتكنو عميقة وساحرة وبعروض طويلة غامرة؛ مؤسِّسة Kwench Records.',
      ],
    },
    visit: {
      eyebrow: 'خطّط لليلتك',
      title: 'الزيارة',
      addressTitle: 'الموقع',
      address:
        'محطة شمس للحاويات، حي المُليساء، منطقة ميناء جدة، ساحل البحر الأحمر، المملكة العربية السعودية.',
      gettingThereTitle: 'كيفية الوصول',
      gettingThere:
        'يقع المكان داخل منطقة الميناء الصناعية على الواجهة البحرية. نوصي بالوصول بالسيارة أو خدمات النقل التشاركي؛ تُشارَك إرشادات الوصول وبوابة الدخول مع كل إعلان فعالية.',
      hoursTitle: 'المواعيد',
      hours:
        'تُنشَر مواعيد الأبواب والعروض لكل فعالية. عادةً ما تمتد العروض من بعد الظهر حتى الليل.',
      mapCta: 'افتح في الخرائط',
      mapTitle: 'خريطة توضّح موقع ذا كونتينر، ميناء جدة على البحر الأحمر',
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
    alt: {
      hero: 'حشد ليلي غفير يرفع أيديه أمام مسرح متوهج بالأضواء والدخان في ذا كونتينر — حفل موسيقى إلكترونية حية في الميناء الصناعي الخام.',
      containerStack: 'حشد يرفع أيديه أمام هيكل مسرح مهرجان فولاذي شاهق مضاء بالأرجواني، دخان وأشعة ضوئية فوق المكان الصناعي في ذا كونتينر.',
      seaNight: 'راقصون بظلال داكنة في مستودع خرساني فولاذي خام، أنابيب مكشوفة في الأعلى وضوء المسرح يخترق الضباب في ذا كونتينر.',
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

/** Format a 24h "HH:MM" time string for display (kept simple; Western digits). */
export function formatEventTime(time: string | undefined): string | null {
  if (!time) return null;
  return time; // already in readable HH:MM 24h form
}
