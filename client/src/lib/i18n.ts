export type Locale = "en" | "lv" | "ru";

export interface Translations {
  common: {
    next: string;
    back: string;
    skip: string;
    start: string;
    continue: string;
    startAudit: string;
    clearData: string;
    cancel: string;
    confirm: string;
    print: string;
    download: string;
    startOver: string;
    learnMore: string;
    reset: string;
    yes: string;
    no: string;
    unsure: string;
  };
  accessibility: {
    languageSelector: string;
    switchTheme: string;
    darkMode: string;
    lightMode: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    safetyNote: string;
    chooseMode: string;
    myFootprint: string;
    myFootprintDesc: string;
    fictionalPersona: string;
    fictionalPersonaDesc: string;
    deviceLabel: string;
    osLabel: string;
    browserLabel: string;
    consent: string;
    optionalHelp: string;
  };
  steps: {
    welcome: string;
    publicExposure: string;
    trackers: string;
    fingerprinting: string;
    accountDevice: string;
    cleanup: string;
    reportCard: string;
  };
  report: {
    title: string;
    subtitle: string;
    auditComplete: string;
    privacyScoreOverview: string;
    whatThisMeans: string;
    nextActions: string;
    publicExposureDetails: string;
    trackerAnalysis: string;
    accountSettings: string;
    fingerprintDetails: string;
    cleanupActions: string;
    publicExposureSignals: string;
    trackingIntensity: string;
    fingerprintUniqueness: string;
    accountDeviceAds: string;
    cleanupCompleted: string;
    realityCheck: string;
  };
  panic: {
    buttonLabel: string;
    title: string;
    description: string;
    confirmButton: string;
  };
  sessionRecovery: {
    title: string;
    description: string;
    started: string;
    lastStep: string;
    resumeButton: string;
    startFreshButton: string;
  };
  fictional: {
    bannerTitle: string;
    bannerDescription: string;
    tryLiveTools: string;
    switchToReal: string;
    switchConfirmation: string;
  };
  progress: {
    stepOf: string;
    target: string;
    left: string;
  };
  publicExposure: {
    title: string;
    concept: string;
    whyItMatters: string;
    externalTools: string;
    recordFindings: string;
    searchPagesQuestion: string;
    searchPagesHelper: string;
    peopleSearchQuestion: string;
    googleVisitedQuestion: string;
    removalRequestedQuestion: string;
  };
  trackers: {
    title: string;
    concept: string;
    whyItMatters: string;
    externalTool: string;
    blacklightTip: string;
    recordFindings: string;
    blacklightRunQuestion: string;
    siteCategoryQuestion: string;
    trackerCountQuestion: string;
    trackerCountHelper: string;
    cookiesFlaggedQuestion: string;
    sessionRecordingQuestion: string;
    sessionRecordingHelper: string;
    keyLoggingQuestion: string;
    keyLoggingHelper: string;
    fingerprintingQuestion: string;
    fingerprintingHelper: string;
  };
  fingerprinting: {
    title: string;
    concept: string;
    whyItMatters: string;
    externalTools: string;
    whatToLookFor: string;
    effRunQuestion: string;
    browserUniqueQuestion: string;
    browserUniqueHelper: string;
    trackingProtectionQuestion: string;
    trackingProtectionHelper: string;
  };
  accountDevice: {
    title: string;
    concept: string;
    whyItMatters: string;
    externalTools: string;
    recordSettings: string;
    googleAdsQuestion: string;
    appleAdsQuestion: string;
    androidIdQuestion: string;
    iosAttQuestion: string;
    iosAttHelper: string;
  };
  cleanup: {
    title: string;
    concept: string;
    whyItMatters: string;
    browserInstructions: string;
    breachExposure: string;
    breachExposureDesc: string;
    recordActions: string;
    cookiesClearedQuestion: string;
    cookiesBlockedQuestion: string;
    passwordHygieneQuestion: string;
    passwordHygieneHelper: string;
    cookiesWarning: string;
  };
  siteCategories: {
    news: string;
    shopping: string;
    social: string;
    health: string;
    other: string;
  };
  trackingProtection: {
    strong: string;
    partial: string;
    weak: string;
  };
  adSettings: {
    on: string;
    off: string;
    notUsed: string;
    notApplicable: string;
  };
  androidActions: {
    reset: string;
    deleted: string;
    none: string;
  };
  iosAtt: {
    allowApps: string;
    blocked: string;
  };
  cleanupActions: {
    yes: string;
    no: string;
    later: string;
    alreadyBlocked: string;
  };
  externalTools: {
    googleResultsTitle: string;
    googleResultsDesc: string;
    findContactTitle: string;
    findContactDesc: string;
    requestRemovalTitle: string;
    requestRemovalDesc: string;
    blacklightTitle: string;
    blacklightDesc: string;
    effCoverTracksTitle: string;
    effCoverTracksDesc: string;
    googleAdSettingsTitle: string;
    googleAdSettingsDesc: string;
    appleAdsTitle: string;
    appleAdsDesc: string;
    androidAdIdTitle: string;
    androidAdIdDesc: string;
    iosAttTitle: string;
    iosAttDesc: string;
    clearCookiesTitle: string;
    clearCookiesDesc: string;
    blockCookiesTitle: string;
    blockCookiesDesc: string;
    hibpTitle: string;
    hibpDesc: string;
  };
  badges: {
    optional: string;
  };
}

const en: Translations = {
  common: {
    next: "Next",
    back: "Back",
    skip: "Skip",
    start: "Start",
    continue: "Continue",
    startAudit: "Begin Audit",
    clearData: "Clear my lab data",
    cancel: "Cancel",
    confirm: "Confirm",
    print: "Print / Save PDF",
    download: "Download Report",
    startOver: "Start New Audit",
    learnMore: "Learn more",
    reset: "Reset",
    yes: "Yes",
    no: "No",
    unsure: "Unsure",
  },
  accessibility: {
    languageSelector: "Language selector",
    switchTheme: "Switch theme",
    darkMode: "Dark mode",
    lightMode: "Light mode",
  },
  welcome: {
    title: "Footprint Audit Wizard",
    subtitle:
      "This 60-minute lab helps you see what parts of your digital footprint are visible and trackable. You'll use a few trusted public tools to explore your online presence.",
    safetyNote:
      "Self-audit only: Search only your own identifiers or use Fictional Persona Mode. We never ask for your name, email, or phone. You'll only record counts and yes/no answers. Everything stays on your device.",
    chooseMode: "Choose how you'd like to proceed:",
    myFootprint: "My Footprint",
    myFootprintDesc: "Search your own name and record real findings",
    fictionalPersona: "Fictional Persona Demo",
    fictionalPersonaDesc: "View prefilled example data without real searches",
    deviceLabel: "Device",
    osLabel: "OS",
    browserLabel: "Browser",
    consent:
      "By continuing, you acknowledge this is a self-audit tool. We do not collect or transmit any personal identifiers. All data stays on your device.",
    optionalHelp: "Optional: Help us show relevant instructions",
  },
  steps: {
    welcome: "Welcome",
    publicExposure: "Public Exposure",
    trackers: "Trackers",
    fingerprinting: "Fingerprinting",
    accountDevice: "Account/Device",
    cleanup: "Cleanup",
    reportCard: "Report Card",
  },
  report: {
    title: "Your Footprint Report",
    subtitle:
      "Here's a summary of what you discovered about your digital footprint and recommended next steps.",
    auditComplete: "Audit Complete",
    privacyScoreOverview: "Privacy Score Overview",
    whatThisMeans: "What This Means",
    nextActions: "Your Next Actions",
    publicExposureDetails: "Public Exposure Details",
    trackerAnalysis: "Tracker Analysis",
    accountSettings: "Account & Device Settings",
    fingerprintDetails: "Fingerprinting Results",
    cleanupActions: "Cleanup Actions Taken",
    publicExposureSignals: "Public Exposure Signals",
    trackingIntensity: "Tracking Intensity",
    fingerprintUniqueness: "Fingerprint Uniqueness",
    accountDeviceAds: "Account/Device Ads",
    cleanupCompleted: "Cleanup Completed",
    realityCheck: "Reality Check",
  },
  panic: {
    buttonLabel: "Clear my lab data",
    title: "Clear all lab data?",
    description:
      "This will permanently delete all your audit progress and recorded data from this device. You'll start fresh with a new audit. This action cannot be undone.",
    confirmButton: "Yes, clear everything",
  },
  sessionRecovery: {
    title: "Incomplete Session Found",
    description:
      "You have an unfinished audit session. Would you like to continue where you left off?",
    started: "Started:",
    lastStep: "Last step:",
    resumeButton: "Resume Session",
    startFreshButton: "Start Fresh",
  },
  fictional: {
    bannerTitle: "Fictional Persona Mode",
    bannerDescription: "Using example data. Click Next to proceed without real searches.",
    tryLiveTools: "Try live tools anyway",
    switchToReal: "Switch to My Footprint",
    switchConfirmation: "Switch to 'My Footprint' mode? This will clear current demo data.",
  },
  progress: {
    stepOf: "Step {current} of {total}",
    target: "Target: {minutes} min",
    left: "{time} left",
  },
  publicExposure: {
    title: "Public Exposure",
    concept: "Some personal info is publicly discoverable via search. 'Privacy' isn't only about what you post yourself.",
    whyItMatters: "Data brokers and people-search sites aggregate public records, social media, and other sources. Even without your knowledge, your contact info may be visible to anyone with a search engine.",
    externalTools: "External Tools",
    recordFindings: "Record Your Findings",
    searchPagesQuestion: "How many search result pages contained personal info (address, phone, relatives)?",
    searchPagesHelper: "Count unique pages, not total mentions. Use 5+ if more than 5.",
    peopleSearchQuestion: "Did you find yourself on people-search sites (e.g., Whitepages, Spokeo, BeenVerified)?",
    googleVisitedQuestion: "Did you visit Google's 'Results about you' dashboard?",
    removalRequestedQuestion: "Did you request removal of any search results from Google?",
  },
  trackers: {
    title: "Tracker Visibility",
    concept: "One normal webpage can load dozens of third parties. Tracking isn't just 'cookies' — it includes session recording, fingerprinting, and more.",
    whyItMatters: "When you visit a website, invisible scripts often record your behavior, share data with advertisers, and build a profile of your interests — often without your knowledge.",
    externalTool: "External Tool",
    blacklightTip: "Tip: Try scanning a news site or shopping site you frequently visit. Avoid sensitive sites like health portals or banking.",
    recordFindings: "Record Your Findings",
    blacklightRunQuestion: "Did you run the Blacklight scan?",
    siteCategoryQuestion: "What type of site did you scan?",
    trackerCountQuestion: "How many trackers were detected?",
    trackerCountHelper: "Enter the number shown in Blacklight's summary",
    cookiesFlaggedQuestion: "Were third-party cookies flagged?",
    sessionRecordingQuestion: "Was session recording detected?",
    sessionRecordingHelper: "Session recording captures mouse movements, clicks, and keystrokes",
    keyLoggingQuestion: "Was key logging detected?",
    keyLoggingHelper: "Key logging captures what you type into forms",
    fingerprintingQuestion: "Was fingerprinting detected?",
    fingerprintingHelper: "Fingerprinting identifies your browser without cookies",
  },
  fingerprinting: {
    title: "Fingerprinting",
    concept: "Clearing cookies doesn't make you invisible. Browser fingerprinting can still identify your device through unique combinations of settings, fonts, and hardware.",
    whyItMatters: "Even in 'private browsing' mode, your browser's unique characteristics (screen size, installed fonts, timezone, WebGL settings) can create a fingerprint that identifies you across websites.",
    externalTools: "External Tools",
    whatToLookFor: "What to look for",
    effRunQuestion: "Did you run the EFF Cover Your Tracks test?",
    browserUniqueQuestion: "Does the test say your browser fingerprint is unique?",
    browserUniqueHelper: "Look for 'Your browser fingerprint appears to be unique' or similar wording",
    trackingProtectionQuestion: "What level of tracking protection did the test report?",
    trackingProtectionHelper: "This indicates how well your browser blocks known trackers",
  },
  accountDevice: {
    title: "Account & Device Identifiers",
    concept: "Tracking also happens at the account/device level through ad personalization settings, device IDs, and app tracking permissions.",
    whyItMatters: "Even if you block website trackers, your accounts and devices may still share data with advertisers through built-in identifiers that follow you across apps and services.",
    externalTools: "External Tools",
    recordSettings: "Record Your Settings",
    googleAdsQuestion: "Is Google personalized ads turned on or off?",
    appleAdsQuestion: "Is Apple personalized ads turned on or off?",
    androidIdQuestion: "What action did you take on your Android advertising ID?",
    iosAttQuestion: "What is your iOS App Tracking Transparency setting?",
    iosAttHelper: "Settings > Privacy & Security > Tracking",
  },
  cleanup: {
    title: "Cleanup Sprint",
    concept: "Now it's time to take action. Clear tracking data and optionally enable privacy protections.",
    whyItMatters: "Clearing cookies and site data removes existing trackers. Blocking third-party cookies prevents many future tracking attempts. These are quick wins that immediately improve your privacy.",
    browserInstructions: "Browser Instructions for",
    breachExposure: "Breach Exposure Check",
    breachExposureDesc: "Check if your email addresses have appeared in known data breaches. This only takes 2 minutes.",
    recordActions: "Record Your Actions",
    cookiesClearedQuestion: "Did you clear your cookies and site data?",
    cookiesBlockedQuestion: "Did you enable blocking of third-party cookies?",
    passwordHygieneQuestion: "Did you take any password hygiene action?",
    passwordHygieneHelper: "Examples: checked Have I Been Pwned, enabled MFA, updated a password, or reviewed your password manager",
    cookiesWarning: "Clearing cookies will log you out of websites. Make sure you know your passwords or have a password manager before proceeding.",
  },
  siteCategories: {
    news: "News",
    shopping: "Shopping",
    social: "Social",
    health: "Health",
    other: "Other",
  },
  trackingProtection: {
    strong: "Strong",
    partial: "Partial",
    weak: "Weak/None",
  },
  adSettings: {
    on: "On",
    off: "Off",
    notUsed: "Don't use",
    notApplicable: "N/A",
  },
  androidActions: {
    reset: "Reset",
    deleted: "Deleted",
    none: "No change",
  },
  iosAtt: {
    allowApps: "Apps can request",
    blocked: "Blocked",
  },
  cleanupActions: {
    yes: "Yes",
    no: "No",
    later: "Will do later",
    alreadyBlocked: "Already blocked",
  },
};

const lv: Translations = {
  common: {
    next: "Tālāk",
    back: "Atpakaļ",
    skip: "Izlaist",
    start: "Sākt",
    continue: "Turpināt",
    startAudit: "Sākt auditu",
    clearData: "Dzēst manus laboratorijas datus",
    cancel: "Atcelt",
    confirm: "Apstiprināt",
    print: "Drukāt / Saglabāt PDF",
    download: "Lejupielādēt atskaiti",
    startOver: "Sākt jaunu auditu",
    learnMore: "Uzzināt vairāk",
    reset: "Atiestatīt",
    yes: "Jā",
    no: "Nē",
    unsure: "Nezinu",
  },
  accessibility: {
    languageSelector: "Valodas izvēle",
    switchTheme: "Mainīt motīvu",
    darkMode: "Tumšais režīms",
    lightMode: "Gaišais režīms",
  },
  welcome: {
    title: "Digitālās pēdas audita vednis",
    subtitle:
      "Šī 60 minūšu laboratorija palīdz jums redzēt, kādas jūsu digitālās pēdas daļas ir redzamas un izsekojamas. Jūs izmantosiet dažus uzticamus publiskos rīkus, lai izpētītu savu tiešsaistes klātbūtni.",
    safetyNote:
      "Tikai pašnovērtējums: Meklējiet tikai savus identifikatorus vai izmantojiet fiktīvās personas režīmu. Mēs nekad neprasām jūsu vārdu, e-pastu vai tālruņa numuru. Jūs ierakstīsiet tikai skaitļus un jā/nē atbildes. Viss paliek jūsu ierīcē.",
    chooseMode: "Izvēlieties, kā vēlaties turpināt:",
    myFootprint: "Mana pēda",
    myFootprintDesc: "Meklējiet savu vārdu un ierakstiet reālus atklājumus",
    fictionalPersona: "Fiktīvās personas demo",
    fictionalPersonaDesc: "Skatīt iepriekš aizpildītus piemēra datus bez reālām meklēšanām",
    deviceLabel: "Ierīce",
    osLabel: "OS",
    browserLabel: "Pārlūkprogramma",
    consent:
      "Turpinot, jūs atzīstat, ka šis ir pašnovērtējuma rīks. Mēs nevācam un nepārsūtām nekādus personīgos identifikatorus. Visi dati paliek jūsu ierīcē.",
    optionalHelp: "Neobligāti: Palīdziet mums parādīt atbilstošas instrukcijas",
  },
  steps: {
    welcome: "Sveicināti",
    publicExposure: "Publiskā redzamība",
    trackers: "Izsekotāji",
    fingerprinting: "Pirkstu nospiedumu veidošana",
    accountDevice: "Konts/Ierīce",
    cleanup: "Tīrīšana",
    reportCard: "Atskaite",
  },
  report: {
    title: "Jūsu pēdas atskaite",
    subtitle:
      "Šeit ir kopsavilkums par to, ko jūs atklājāt par savu digitālo pēdu, un ieteicamie turpmākie soļi.",
    auditComplete: "Audits pabeigts",
    privacyScoreOverview: "Privātuma vērtējuma pārskats",
    whatThisMeans: "Ko tas nozīmē",
    nextActions: "Jūsu nākamās darbības",
    publicExposureDetails: "Publiskās redzamības detaļas",
    trackerAnalysis: "Izsekotāju analīze",
    accountSettings: "Konta un ierīces iestatījumi",
    fingerprintDetails: "Pirkstu nospiedumu rezultāti",
    cleanupActions: "Veiktās tīrīšanas darbības",
    publicExposureSignals: "Publiskās redzamības signāli",
    trackingIntensity: "Izsekošanas intensitāte",
    fingerprintUniqueness: "Pirkstu nospieduma unikalitāte",
    accountDeviceAds: "Konta/ierīces reklāmas",
    cleanupCompleted: "Tīrīšana pabeigta",
    realityCheck: "Realitātes pārbaude",
  },
  panic: {
    buttonLabel: "Dzēst manus laboratorijas datus",
    title: "Dzēst visus laboratorijas datus?",
    description:
      "Tas neatgriezeniski izdzēsīs visu jūsu audita progresu un ierakstītos datus no šīs ierīces. Jūs sāksiet no jauna ar jaunu auditu. Šo darbību nevar atsaukt.",
    confirmButton: "Jā, dzēst visu",
  },
  sessionRecovery: {
    title: "Atrasta nepabeigta sesija",
    description:
      "Jums ir nepabeigta audita sesija. Vai vēlaties turpināt no vietas, kur apstājāties?",
    started: "Sākts:",
    lastStep: "Pēdējais solis:",
    resumeButton: "Turpināt sesiju",
    startFreshButton: "Sākt no jauna",
  },
  fictional: {
    bannerTitle: "Fiktīvās personas režīms",
    bannerDescription: "Izmanto piemēra datus. Noklikšķiniet Tālāk, lai turpinātu bez reālām meklēšanām.",
    tryLiveTools: "Tomēr izmēģināt reālos rīkus",
    switchToReal: "Pārslēgties uz Mana pēda",
    switchConfirmation: "Pārslēgties uz 'Mana pēda' režīmu? Tas dzēsīs pašreizējos demo datus.",
  },
  progress: {
    stepOf: "Solis {current} no {total}",
    target: "Mērķis: {minutes} min",
    left: "Atlikuši: {time}",
  },
  publicExposure: {
    title: "Publiskā redzamība",
    concept: "Dažu personīgo informāciju var atrast publiski, izmantojot meklēšanu. 'Privātums' nav tikai par to, ko jūs pats publicējat.",
    whyItMatters: "Datu brokeri un cilvēku meklēšanas vietnes apkopo publiskos ierakstus, sociālos medijus un citus avotus. Pat bez jūsu ziņas jūsu kontaktinformācija var būt redzama ikvienam, kurš izmanto meklētājprogrammu.",
    externalTools: "Ārējie rīki",
    recordFindings: "Ierakstiet savus atklājumus",
    searchPagesQuestion: "Cik meklēšanas rezultātu lapas saturēja personīgo informāciju (adrese, tālrunis, radinieki)?",
    searchPagesHelper: "Skaitiet unikālās lapas, nevis kopējos pieminējumus. Izmantojiet 5+, ja vairāk nekā 5.",
    peopleSearchQuestion: "Vai atradāt sevi cilvēku meklēšanas vietnēs (piem., Whitepages, Spokeo, BeenVerified)?",
    googleVisitedQuestion: "Vai apmeklējāt Google 'Rezultāti par jums' paneli?",
    removalRequestedQuestion: "Vai pieprasījāt kādu meklēšanas rezultātu noņemšanu no Google?",
  },
  trackers: {
    title: "Izsekotāju redzamība",
    concept: "Viena parasta tīmekļa lapa var ielādēt desmitiem trešo pušu. Izsekošana nav tikai 'sīkdatnes' — tā ietver sesiju ierakstīšanu, pirkstu nospiedumus un daudz ko citu.",
    whyItMatters: "Apmeklējot vietni, neredzami skripti bieži ieraksta jūsu uzvedību, kopīgo datus ar reklāmdevējiem un veido jūsu interešu profilu — bieži vien bez jūsu ziņas.",
    externalTool: "Ārējais rīks",
    blacklightTip: "Padoms: Mēģiniet skenēt ziņu vai iepirkšanās vietni, ko bieži apmeklējat. Izvairieties no sensitīvām vietnēm, piemēram, veselības portāliem vai bankām.",
    recordFindings: "Ierakstiet savus atklājumus",
    blacklightRunQuestion: "Vai palaidāt Blacklight skenēšanu?",
    siteCategoryQuestion: "Kāda veida vietni jūs skenējāt?",
    trackerCountQuestion: "Cik izsekotāju tika atklāts?",
    trackerCountHelper: "Ievadiet skaitli, kas parādīts Blacklight kopsavilkumā",
    cookiesFlaggedQuestion: "Vai tika atzīmētas trešo pušu sīkdatnes?",
    sessionRecordingQuestion: "Vai tika atklāta sesiju ierakstīšana?",
    sessionRecordingHelper: "Sesiju ierakstīšana tver peles kustības, klikšķus un taustiņu nospiešanas",
    keyLoggingQuestion: "Vai tika atklāta taustiņu reģistrēšana?",
    keyLoggingHelper: "Taustiņu reģistrēšana tver to, ko jūs rakstāt formās",
    fingerprintingQuestion: "Vai tika atklāta pirkstu nospiedumu vākšana?",
    fingerprintingHelper: "Pirkstu nospiedumu vākšana identificē jūsu pārlūkprogrammu bez sīkdatnēm",
  },
  fingerprinting: {
    title: "Pirkstu nospiedumi",
    concept: "Sīkdatņu dzēšana nepadara jūs neredzamu. Pārlūkprogrammas pirkstu nospiedumi joprojām var identificēt jūsu ierīci, izmantojot unikālas iestatījumu, fontu un aparatūras kombinācijas.",
    whyItMatters: "Pat 'privātās pārlūkošanas' režīmā jūsu pārlūkprogrammas unikālās īpašības (ekrāna izmērs, instalētie fonti, laika josla, WebGL iestatījumi) var izveidot pirkstu nospiedumu, kas jūs identificē dažādās vietnēs.",
    externalTools: "Ārējie rīki",
    whatToLookFor: "Uz ko pievērst uzmanību",
    effRunQuestion: "Vai palaidāt EFF Cover Your Tracks testu?",
    browserUniqueQuestion: "Vai tests norāda, ka jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls?",
    browserUniqueHelper: "Meklējiet 'Your browser fingerprint appears to be unique' vai līdzīgu formulējumu",
    trackingProtectionQuestion: "Kādu izsekošanas aizsardzības līmeni ziņoja tests?",
    trackingProtectionHelper: "Tas norāda, cik labi jūsu pārlūkprogramma bloķē zināmos izsekotājus",
  },
  accountDevice: {
    title: "Konta un ierīces identifikatori",
    concept: "Izsekošana notiek arī konta/ierīces līmenī, izmantojot reklāmu personalizācijas iestatījumus, ierīču ID un lietotņu izsekošanas atļaujas.",
    whyItMatters: "Pat ja bloķējat vietņu izsekotājus, jūsu konti un ierīces joprojām var kopīgot datus ar reklāmdevējiem, izmantojot iebūvētos identifikatorus, kas jūs seko pa lietotnēm un pakalpojumiem.",
    externalTools: "Ārējie rīki",
    recordSettings: "Ierakstiet savus iestatījumus",
    googleAdsQuestion: "Vai Google personalizētās reklāmas ir ieslēgtas vai izslēgtas?",
    appleAdsQuestion: "Vai Apple personalizētās reklāmas ir ieslēgtas vai izslēgtas?",
    androidIdQuestion: "Kādu darbību veicāt ar savu Android reklāmas ID?",
    iosAttQuestion: "Kāds ir jūsu iOS lietotņu izsekošanas caurspīdīguma iestatījums?",
    iosAttHelper: "Iestatījumi > Privātums un drošība > Izsekošana",
  },
  cleanup: {
    title: "Tīrīšanas sprints",
    concept: "Tagad ir laiks rīkoties. Dzēsiet izsekošanas datus un pēc izvēles iespējojiet privātuma aizsardzību.",
    whyItMatters: "Sīkdatņu un vietnes datu dzēšana noņem esošos izsekotājus. Trešo pušu sīkdatņu bloķēšana novērš daudzus nākotnes izsekošanas mēģinājumus. Tie ir ātri ieguvumi, kas nekavējoties uzlabo jūsu privātumu.",
    browserInstructions: "Pārlūkprogrammas instrukcijas priekš",
    breachExposure: "Datu noplūdes pārbaude",
    breachExposureDesc: "Pārbaudiet, vai jūsu e-pasta adreses ir parādījušās zināmās datu noplūdēs. Tas aizņem tikai 2 minūtes.",
    recordActions: "Ierakstiet savas darbības",
    cookiesClearedQuestion: "Vai izdzēsāt savas sīkdatnes un vietnes datus?",
    cookiesBlockedQuestion: "Vai iespējojāt trešo pušu sīkdatņu bloķēšanu?",
    passwordHygieneQuestion: "Vai veicāt kādu paroļu higiēnas darbību?",
    passwordHygieneHelper: "Piemēri: pārbaudījāt Have I Been Pwned, iespējojāt MFA, atjauninājāt paroli vai pārskatījāt savu paroļu pārvaldnieku",
    cookiesWarning: "Sīkdatņu dzēšana jūs izrakstīs no vietnēm. Pārliecinieties, ka zināt savas paroles vai jums ir paroļu pārvaldnieks, pirms turpināt.",
  },
  siteCategories: {
    news: "Ziņas",
    shopping: "Iepirkšanās",
    social: "Sociālie",
    health: "Veselība",
    other: "Cits",
  },
  trackingProtection: {
    strong: "Spēcīga",
    partial: "Daļēja",
    weak: "Vāja/Nav",
  },
  adSettings: {
    on: "Ieslēgts",
    off: "Izslēgts",
    notUsed: "Neizmantoju",
    notApplicable: "N/P",
  },
  androidActions: {
    reset: "Atiestatīts",
    deleted: "Dzēsts",
    none: "Bez izmaiņām",
  },
  iosAtt: {
    allowApps: "Lietotnes var pieprasīt",
    blocked: "Bloķēts",
  },
  cleanupActions: {
    yes: "Jā, izdzēsts",
    no: "Nē, izlaists",
    later: "Izdarīšu vēlāk",
    alreadyBlocked: "Jau bloķēts",
  },
};

const ru: Translations = {
  common: {
    next: "Далее",
    back: "Назад",
    skip: "Пропустить",
    start: "Начать",
    continue: "Продолжить",
    startAudit: "Начать аудит",
    clearData: "Удалить мои данные лаборатории",
    cancel: "Отмена",
    confirm: "Подтвердить",
    print: "Печать / Сохранить PDF",
    download: "Скачать отчёт",
    startOver: "Начать новый аудит",
    learnMore: "Подробнее",
    reset: "Сбросить",
    yes: "Да",
    no: "Нет",
    unsure: "Не уверен",
  },
  accessibility: {
    languageSelector: "Выбор языка",
    switchTheme: "Сменить тему",
    darkMode: "Тёмный режим",
    lightMode: "Светлый режим",
  },
  welcome: {
    title: "Мастер аудита цифрового следа",
    subtitle:
      "Эта 60-минутная лаборатория поможет вам увидеть, какие части вашего цифрового следа видимы и отслеживаемы. Вы будете использовать несколько надёжных публичных инструментов для изучения своего присутствия в интернете.",
    safetyNote:
      "Только самопроверка: Ищите только свои идентификаторы или используйте режим вымышленной персоны. Мы никогда не спрашиваем ваше имя, email или телефон. Вы будете записывать только числа и ответы да/нет. Всё остаётся на вашем устройстве.",
    chooseMode: "Выберите, как вы хотите продолжить:",
    myFootprint: "Мой след",
    myFootprintDesc: "Искать своё имя и записывать реальные находки",
    fictionalPersona: "Демо вымышленной персоны",
    fictionalPersonaDesc: "Просмотр предзаполненных примеров без реального поиска",
    deviceLabel: "Устройство",
    osLabel: "ОС",
    browserLabel: "Браузер",
    consent:
      "Продолжая, вы подтверждаете, что это инструмент самопроверки. Мы не собираем и не передаём никаких личных идентификаторов. Все данные остаются на вашем устройстве.",
    optionalHelp: "Необязательно: Помогите нам показать подходящие инструкции",
  },
  steps: {
    welcome: "Добро пожаловать",
    publicExposure: "Публичная доступность",
    trackers: "Трекеры",
    fingerprinting: "Цифровые отпечатки",
    accountDevice: "Аккаунт/Устройство",
    cleanup: "Очистка",
    reportCard: "Отчёт",
  },
  report: {
    title: "Ваш отчёт о цифровом следе",
    subtitle:
      "Вот краткое изложение того, что вы обнаружили о своём цифровом следе, и рекомендуемые следующие шаги.",
    auditComplete: "Аудит завершён",
    privacyScoreOverview: "Обзор оценки конфиденциальности",
    whatThisMeans: "Что это означает",
    nextActions: "Ваши следующие действия",
    publicExposureDetails: "Детали публичной доступности",
    trackerAnalysis: "Анализ трекеров",
    accountSettings: "Настройки аккаунта и устройства",
    fingerprintDetails: "Результаты отпечатков браузера",
    cleanupActions: "Выполненные действия по очистке",
    publicExposureSignals: "Сигналы публичной доступности",
    trackingIntensity: "Интенсивность отслеживания",
    fingerprintUniqueness: "Уникальность отпечатка",
    accountDeviceAds: "Реклама аккаунта/устройства",
    cleanupCompleted: "Очистка завершена",
    realityCheck: "Проверка реальности",
  },
  panic: {
    buttonLabel: "Удалить мои данные лаборатории",
    title: "Удалить все данные лаборатории?",
    description:
      "Это безвозвратно удалит весь ваш прогресс аудита и записанные данные с этого устройства. Вы начнёте заново с нового аудита. Это действие нельзя отменить.",
    confirmButton: "Да, удалить всё",
  },
  sessionRecovery: {
    title: "Найдена незавершённая сессия",
    description:
      "У вас есть незавершённая сессия аудита. Хотите продолжить с того места, где остановились?",
    started: "Начато:",
    lastStep: "Последний шаг:",
    resumeButton: "Возобновить сессию",
    startFreshButton: "Начать заново",
  },
  fictional: {
    bannerTitle: "Режим вымышленной персоны",
    bannerDescription: "Используются примерные данные. Нажмите Далее, чтобы продолжить без реального поиска.",
    tryLiveTools: "Всё равно попробовать реальные инструменты",
    switchToReal: "Переключиться на Мой след",
    switchConfirmation: "Переключиться на режим 'Мой след'? Это удалит текущие демо-данные.",
  },
  progress: {
    stepOf: "Шаг {current} из {total}",
    target: "Цель: {minutes} мин",
    left: "Осталось: {time}",
  },
  publicExposure: {
    title: "Публичная доступность",
    concept: "Некоторую личную информацию можно найти публично через поиск. 'Конфиденциальность' — это не только о том, что вы сами публикуете.",
    whyItMatters: "Брокеры данных и сайты поиска людей собирают публичные записи, социальные сети и другие источники. Даже без вашего ведома ваша контактная информация может быть видна любому, кто пользуется поисковой системой.",
    externalTools: "Внешние инструменты",
    recordFindings: "Запишите свои находки",
    searchPagesQuestion: "Сколько страниц результатов поиска содержали личную информацию (адрес, телефон, родственники)?",
    searchPagesHelper: "Считайте уникальные страницы, а не общее количество упоминаний. Используйте 5+, если больше 5.",
    peopleSearchQuestion: "Нашли ли вы себя на сайтах поиска людей (напр., Whitepages, Spokeo, BeenVerified)?",
    googleVisitedQuestion: "Посещали ли вы панель Google 'Результаты о вас'?",
    removalRequestedQuestion: "Запрашивали ли вы удаление каких-либо результатов поиска из Google?",
  },
  trackers: {
    title: "Видимость трекеров",
    concept: "Одна обычная веб-страница может загружать десятки сторонних скриптов. Отслеживание — это не только 'куки', оно включает запись сессий, снятие отпечатков и многое другое.",
    whyItMatters: "Когда вы посещаете сайт, невидимые скрипты часто записывают ваше поведение, делятся данными с рекламодателями и создают профиль ваших интересов — часто без вашего ведома.",
    externalTool: "Внешний инструмент",
    blacklightTip: "Совет: Попробуйте сканировать новостной или интернет-магазин, который вы часто посещаете. Избегайте чувствительных сайтов, таких как медицинские порталы или банки.",
    recordFindings: "Запишите свои находки",
    blacklightRunQuestion: "Запускали ли вы сканирование Blacklight?",
    siteCategoryQuestion: "Какой тип сайта вы сканировали?",
    trackerCountQuestion: "Сколько трекеров было обнаружено?",
    trackerCountHelper: "Введите число, показанное в сводке Blacklight",
    cookiesFlaggedQuestion: "Были ли отмечены сторонние куки?",
    sessionRecordingQuestion: "Была ли обнаружена запись сессий?",
    sessionRecordingHelper: "Запись сессий фиксирует движения мыши, клики и нажатия клавиш",
    keyLoggingQuestion: "Была ли обнаружена запись нажатий клавиш?",
    keyLoggingHelper: "Запись клавиш фиксирует то, что вы вводите в формы",
    fingerprintingQuestion: "Был ли обнаружен сбор отпечатков браузера?",
    fingerprintingHelper: "Снятие отпечатков идентифицирует ваш браузер без куки",
  },
  fingerprinting: {
    title: "Отпечатки браузера",
    concept: "Очистка куки не делает вас невидимым. Отпечатки браузера всё ещё могут идентифицировать ваше устройство через уникальные комбинации настроек, шрифтов и оборудования.",
    whyItMatters: "Даже в режиме 'приватного просмотра' уникальные характеристики вашего браузера (размер экрана, установленные шрифты, часовой пояс, настройки WebGL) могут создать отпечаток, который идентифицирует вас на разных сайтах.",
    externalTools: "Внешние инструменты",
    whatToLookFor: "На что обратить внимание",
    effRunQuestion: "Запускали ли вы тест EFF Cover Your Tracks?",
    browserUniqueQuestion: "Показывает ли тест, что отпечаток вашего браузера уникален?",
    browserUniqueHelper: "Ищите 'Your browser fingerprint appears to be unique' или похожую формулировку",
    trackingProtectionQuestion: "Какой уровень защиты от отслеживания показал тест?",
    trackingProtectionHelper: "Это показывает, насколько хорошо ваш браузер блокирует известные трекеры",
  },
  accountDevice: {
    title: "Идентификаторы аккаунта и устройства",
    concept: "Отслеживание также происходит на уровне аккаунта/устройства через настройки персонализации рекламы, ID устройств и разрешения на отслеживание приложений.",
    whyItMatters: "Даже если вы блокируете трекеры сайтов, ваши аккаунты и устройства всё ещё могут делиться данными с рекламодателями через встроенные идентификаторы, которые следуют за вами между приложениями и сервисами.",
    externalTools: "Внешние инструменты",
    recordSettings: "Запишите свои настройки",
    googleAdsQuestion: "Персонализированная реклама Google включена или выключена?",
    appleAdsQuestion: "Персонализированная реклама Apple включена или выключена?",
    androidIdQuestion: "Какое действие вы предприняли с рекламным ID Android?",
    iosAttQuestion: "Какая у вас настройка прозрачности отслеживания приложений iOS?",
    iosAttHelper: "Настройки > Конфиденциальность и безопасность > Отслеживание",
  },
  cleanup: {
    title: "Спринт очистки",
    concept: "Теперь пора действовать. Очистите данные отслеживания и при желании включите защиту конфиденциальности.",
    whyItMatters: "Очистка куки и данных сайтов удаляет существующие трекеры. Блокировка сторонних куки предотвращает многие будущие попытки отслеживания. Это быстрые победы, которые немедленно улучшают вашу конфиденциальность.",
    browserInstructions: "Инструкции для браузера",
    breachExposure: "Проверка утечек данных",
    breachExposureDesc: "Проверьте, появлялись ли ваши адреса электронной почты в известных утечках данных. Это займёт всего 2 минуты.",
    recordActions: "Запишите свои действия",
    cookiesClearedQuestion: "Очистили ли вы куки и данные сайтов?",
    cookiesBlockedQuestion: "Включили ли вы блокировку сторонних куки?",
    passwordHygieneQuestion: "Предприняли ли вы какие-либо действия по гигиене паролей?",
    passwordHygieneHelper: "Примеры: проверили Have I Been Pwned, включили MFA, обновили пароль или проверили менеджер паролей",
    cookiesWarning: "Очистка куки выйдет из всех сайтов. Убедитесь, что вы знаете свои пароли или у вас есть менеджер паролей, прежде чем продолжить.",
  },
  siteCategories: {
    news: "Новости",
    shopping: "Покупки",
    social: "Социальные сети",
    health: "Здоровье",
    other: "Другое",
  },
  trackingProtection: {
    strong: "Сильная",
    partial: "Частичная",
    weak: "Слабая/Нет",
  },
  adSettings: {
    on: "Включено",
    off: "Выключено",
    notUsed: "Не использую",
    notApplicable: "Н/П",
  },
  androidActions: {
    reset: "Сброшен",
    deleted: "Удалён",
    none: "Без изменений",
  },
  iosAtt: {
    allowApps: "Приложения могут запрашивать",
    blocked: "Заблокировано",
  },
  cleanupActions: {
    yes: "Да, очищено",
    no: "Нет, пропущено",
    later: "Сделаю позже",
    alreadyBlocked: "Уже заблокировано",
  },
};

export const allTranslations: Record<Locale, Translations> = {
  en,
  lv,
  ru,
};

export function getTranslations(locale: Locale): Translations {
  return allTranslations[locale] || allTranslations.en;
}

export function getLocaleFromStorage(): Locale {
  const stored = localStorage.getItem("footprintWizard:locale");
  if (stored && stored in allTranslations) {
    return stored as Locale;
  }
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang in allTranslations) {
    return browserLang as Locale;
  }
  return "en";
}

export function saveLocaleToStorage(locale: Locale): void {
  localStorage.setItem("footprintWizard:locale", locale);
}

export const SUPPORTED_LOCALES: { code: Locale; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "lv", name: "Latvian", nativeName: "Latviešu" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
];
