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
    viewReportCard: string;
    stepNumber: string;
    commonPitfalls: string;
    open: string;
    demo: string;
    demoModeNotice: string;
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
    introParagraph: string;
    whatToExpect: string;
    expectDescription: string;
    expectTime: string;
    expectSteps: string;
    expectTools: string;
    expectPrivacy: string;
    privacyTitle: string;
    privacyDescription: string;
    beforeYouStart: string;
    prepPoint1: string;
    prepPoint2: string;
    prepPoint3: string;
    chooseYourPath: string;
    chooseYourPathDesc: string;
    auditPurposeTitle: string;
    auditPurposeDesc1: string;
    auditPurposeDesc2: string;
    understandingOptionsTitle: string;
    optionTableStarting: string;
    optionTableTools: string;
    optionTableLearn: string;
    optionTableBestFor: string;
    optionSelfStarting: string;
    optionSelfTools: string;
    optionSelfLearn: string;
    optionSelfBestFor: string;
    optionDemoStarting: string;
    optionDemoTools: string;
    optionDemoLearn: string;
    optionDemoBestFor: string;
    privacyProtectedTitle: string;
    privacyProtectedIntro: string;
    privacyBullet1Title: string;
    privacyBullet1Desc: string;
    privacyBullet2Title: string;
    privacyBullet2Desc: string;
    privacyBullet3Title: string;
    privacyBullet3Desc: string;
    privacyBullet4Title: string;
    privacyBullet4Desc: string;
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
    educationalContent: {
      sectionTitle: string;
      industryTitle: string;
      industryParagraph1: string;
      industryParagraph2: string;
      dataSourcesTitle: string;
      dataSourcesParagraph: string;
      dataSourcesList: string[];
      dataSourcesConclusion: string;
      meaningTitle: string;
      meaningParagraph: string;
      meaningList: string[];
      activityPreview: string;
    };
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
    educationalContent: {
      sectionTitle: string;
      introTitle: string;
      introParagraph1: string;
      introParagraph2: string;
      trackingTypesTitle: string;
      trackingTypesIntro: string;
      trackingTypes: {
        adTrackers: { title: string; description: string };
        thirdPartyCookies: { title: string; description: string };
        sessionRecording: { title: string; description: string };
        keystrokeLogging: { title: string; description: string };
        canvasFingerprinting: { title: string; description: string };
        facebookPixel: { title: string; description: string };
        googleAnalytics: { title: string; description: string };
      };
      beyondAdsTitle: string;
      beyondAdsParagraph: string;
      beyondAdsList: string[];
      activityPreview: string;
    };
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
    educationalContent: {
      sectionTitle: string;
      introTitle: string;
      introParagraph: string;
      howItWorksTitle: string;
      howItWorksParagraph: string;
      attributesList: string[];
      statisticsTitle: string;
      statisticsParagraph: string;
      privateBrowsingTitle: string;
      privateBrowsingParagraph1: string;
      privateBrowsingParagraph2: string;
      activityPreview: string;
    };
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
    educationalContent: {
      sectionTitle: string;
      introTitle: string;
      introParagraph: string;
      howItWorksTitle: string;
      howItWorksParagraph: string;
      howItWorksList: string[];
      scaleTitle: string;
      scaleParagraph: string;
      attTitle: string;
      attParagraph1: string;
      attParagraph2: string;
      activityPreviewTitle: string;
      activityPreviewList: string[];
      activityPreviewConclusion: string;
    };
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
    educationalContent: {
      sectionTitle: string;
      breachesTitle: string;
      breachesParagraph1: string;
      breachesParagraph2: string;
      cookiesTitle: string;
      cookiesParagraph: string;
      cookiesList: string[];
      blockingTitle: string;
      blockingParagraph1: string;
      blockingParagraph2: string;
      blockingBrowsers: string[];
      hibpTitle: string;
      hibpParagraph1: string;
      hibpParagraph2: string;
      activityPreviewTitle: string;
      activityPreviewList: string[];
      activityPreviewConclusion: string;
    };
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
  instructions: {
    whatToDo: string;
    publicExposure1: string;
    publicExposure2: string;
    publicExposure3: string;
    trackers1: string;
    trackers2: string;
    trackers3: string;
    fingerprinting1: string;
    fingerprinting2: string;
    fingerprinting3: string;
    accountDevice1: string;
    accountDevice2: string;
    accountDevice3: string;
    cleanup1: string;
    cleanup2: string;
    cleanup3: string;
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
    effExplainerTitle: string;
    effExplainerDesc: string;
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
    stepsForBrowser: string;
  };
  badges: {
    optional: string;
  };
  nextActions: {
    skippedStep: string;
    requestGoogleRemoval: string;
    optOutPeopleSearch: string;
    installContentBlocker: string;
    fingerprintingRisk: string;
    turnOffGoogleAds: string;
    clearCookies: string;
    enableCookieBlocking: string;
    checkHibp: string;
    allDone: string;
  };
  footer: {
    privacyNotice: string;
  };
  realityCheckItems: {
    snapshot: string;
    variesByLocation: string;
    personalization: string;
    changesOverTime: string;
    dataOnDevice: string;
  };
  skippedSections: {
    title: string;
    description: string;
  };
  printInfo: {
    generated: string;
    dataStoredLocally: string;
  };
  charts: {
    radarView: string;
    scoreComparison: string;
    privacyScore: string;
  };
  metrics: {
    publicExposureLabel: string;
    trackingIntensityLabel: string;
    fingerprintLabel: string;
    adSettingsLabel: string;
    cleanupLabel: string;
    valueLow: string;
    valuePages: string;
    valueUnique: string;
    valueNotUnique: string;
    valueUnknown: string;
    valueLimited: string;
    valueActive: string;
    valueCheckSettings: string;
    valueDone: string;
    valuePartial: string;
    valueNotYet: string;
    valueNA: string;
    exposureGood: string;
    exposureWarning: string;
    exposureCritical: string;
    trackingGood: string;
    trackingWarning: string;
    trackingCritical: string;
    trackingUnknown: string;
    fingerprintGood: string;
    fingerprintCritical: string;
    fingerprintUnknown: string;
    adsGood: string;
    adsWarning: string;
    adsCritical: string;
    cleanupGood: string;
    cleanupWarning: string;
    cleanupCritical: string;
  };
  chartCategories: {
    publicExposure: string;
    trackers: string;
    fingerprint: string;
    adSettings: string;
    cleanup: string;
  };
  browserNames: {
    chrome: string;
    edge: string;
    firefox: string;
    safari: string;
    other: string;
    unknown: string;
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
    viewReportCard: "View Report Card",
    stepNumber: "Step {step}",
    commonPitfalls: "Common Pitfalls",
    open: "Open",
    demo: "Demo",
    demoModeNotice: "Using demo data. Enable \"Try live tools\" to open this.",
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
      "Discover what's visible about you online and learn how to protect your privacy.",
    safetyNote:
      "Self-audit only: Search only your own identifiers or use Fictional Persona Mode. We never ask for your name, email, or phone. You'll only record counts and yes/no answers. Everything stays on your device.",
    chooseMode: "Choose how you'd like to proceed:",
    myFootprint: "My Footprint",
    myFootprintDesc: "Audit your real digital presence by searching your own name and using live privacy tools. You'll discover what's actually visible about you online and take real cleanup actions. Best if you want actionable insights about your personal privacy.",
    fictionalPersona: "Fictional Persona Demo",
    fictionalPersonaDesc: "Walk through the audit process using example data without searching anything real. Great for learning how the tools work first, practicing in a group setting, or if you're on a shared/work computer and prefer not to search personal information.",
    deviceLabel: "Device",
    osLabel: "OS",
    browserLabel: "Browser",
    consent:
      "By continuing, you acknowledge this is a self-audit tool. We do not collect or transmit any personal identifiers. All data stays on your device.",
    optionalHelp: "Telling us your device, OS, and browser helps us show you the right instructions for clearing cookies and adjusting privacy settings on your specific setup.",
    introParagraph: "Every time you browse the web, you leave traces - your name in search results, trackers following you across sites, and a unique browser fingerprint that identifies you. This hands-on lab helps you discover exactly what's visible about you online and gives you the tools to take back control of your privacy.",
    whatToExpect: "What You'll Do",
    expectDescription: "Over the next 60 minutes, you'll use free privacy tools to audit your digital presence. You'll search for your name online, scan websites for hidden trackers, test if your browser can be uniquely identified, review your ad settings, and take cleanup actions. At the end, you'll receive a personalized report with your findings and recommended next steps.",
    expectTime: "60 minutes",
    expectSteps: "5 guided steps",
    expectTools: "Free privacy tools",
    expectPrivacy: "100% local data",
    privacyTitle: "Self-Audit Only",
    privacyDescription: "Your privacy is protected throughout this process. You'll only search your own information, and we never ask for your name, email, or personal details. Everything you record stays on your device - nothing is sent anywhere.",
    beforeYouStart: "Before You Start",
    prepPoint1: "Have your passwords ready - clearing cookies will log you out of sites",
    prepPoint2: "Use an incognito/private window if you're on a shared computer",
    prepPoint3: "Set aside uninterrupted time to focus on each step",
    chooseYourPath: "Choose Your Path",
    chooseYourPathDesc: "You can either audit your real digital footprint or practice with fictional example data. Both paths teach the same concepts - choose based on whether you're ready to search your own information.",
    auditPurposeTitle: "What This Audit Helps You Do",
    auditPurposeDesc1: "Your digital footprint is the trail of data you leave behind online - from search results containing your name to invisible trackers following you across websites. Understanding this footprint is the first step to taking control of your privacy.",
    auditPurposeDesc2: "There are many free tools across the internet that can help you see what's being collected about you - but they're scattered and can be overwhelming to navigate alone. This guided audit walks you through the most important ones, step by step, helping you understand what you find and what actions you can take.",
    understandingOptionsTitle: "Understanding Your Options",
    optionTableStarting: "Starting point",
    optionTableTools: "External tools",
    optionTableLearn: "What you learn",
    optionTableBestFor: "Best for",
    optionSelfStarting: "Blank - you enter your real findings",
    optionSelfTools: "Active links to Blacklight, EFF, etc.",
    optionSelfLearn: "Actual insights about your privacy",
    optionSelfBestFor: "Getting actionable results for yourself",
    optionDemoStarting: "Pre-filled with example data",
    optionDemoTools: "Disabled by default (with option to enable)",
    optionDemoLearn: "How the process works using sample data",
    optionDemoBestFor: "Learning first, group training, or shared computers",
    privacyProtectedTitle: "Your Privacy is Protected",
    privacyProtectedIntro: "This is a self-audit tool. We have no servers, no accounts, no tracking.",
    privacyBullet1Title: "Nothing leaves your browser",
    privacyBullet1Desc: "All your responses are stored only in this browser's local storage on this device",
    privacyBullet2Title: "No data transmitted",
    privacyBullet2Desc: "We don't collect, store, or send any information you enter",
    privacyBullet3Title: "You control deletion",
    privacyBullet3Desc: "Clear all data instantly using the reset button at any time",
    privacyBullet4Title: "External tools are your choice",
    privacyBullet4Desc: "When you click links to tools like Blacklight or EFF, those sites open in new tabs and are separate from this audit",
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
    educationalContent: {
      sectionTitle: "Understanding Public Exposure",
      industryTitle: "The $323 Billion Industry Trading Your Identity",
      industryParagraph1: "Every time you've filled out a form, registered to vote, bought a house, or even just existed as a citizen, you've created data points. What you may not know is that a massive industry has built itself around collecting, packaging, and selling this information about you.",
      industryParagraph2: "The data broker industry is worth $323 billion in 2024 and is projected to nearly double to $697 billion by 2034. These companies don't just have a file on you—they maintain an average of 1,500 data points per person. One of the largest brokers, Acxiom, holds over 2.5 billion consumer records worldwide. Data brokers trade information on over 80% of American consumers.",
      dataSourcesTitle: "Where Does Your Data Come From?",
      dataSourcesParagraph: "People-search sites like Spokeo, Whitepages, and BeenVerified don't create information about you—they aggregate it from sources you'd never expect:",
      dataSourcesList: [
        "Public records: Property deeds, court filings, voter registrations, marriage licenses, bankruptcy filings",
        "Commercial sources: Credit applications, car loans, rental agreements, utility records, and even some state DMVs that sell registration data",
        "Social media: Any profile you've ever made public, even briefly",
        "Other data brokers: These companies cross-reference and sell data to each other, creating an interconnected web"
      ],
      dataSourcesConclusion: "The key insight is that none of this data was necessarily \"leaked\"—much of it has always been technically public. The difference now is that companies have automated the collection and made your entire life searchable in seconds. What once required a private investigator and weeks of work now takes anyone with internet access about 30 seconds.",
      meaningTitle: "What This Means for You",
      meaningParagraph: "When a stranger, a potential employer, an ex-partner, or a scammer searches your name, they can potentially find:",
      meaningList: [
        "Your current and previous addresses",
        "Phone numbers (including ones you thought were private)",
        "Email addresses",
        "Names of your relatives and associates",
        "Your approximate age and date of birth",
        "Property ownership and estimated home value",
        "Court records and legal history"
      ],
      activityPreview: "The activity you're about to do will show you exactly what's discoverable about you. For many people, this is eye-opening—not because they've done anything wrong, but because they had no idea how much of their life is catalogued and for sale."
    },
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
    educationalContent: {
      sectionTitle: "Understanding Web Tracking",
      introTitle: "What Happens in the First Second You Visit a Website",
      introParagraph1: "When you click a link to visit a website, something invisible happens before the page even finishes loading. Scripts execute, connections open to dozens of third-party servers, and data about you begins flowing in multiple directions. This happens so fast you'd never notice—but it's happening on almost every website you visit.",
      introParagraph2: "Research shows that 90% of websites include at least one tracking script, and the average website has 48 trackers. Social media sites are the worst offenders, averaging 28 trackers per site—and in some regions like Hong Kong, that number climbs to 169 trackers on a single social media site. Google trackers are present on 74% of all web traffic, with Facebook accounting for another 11%. A typical user encounters approximately 177 different trackers every week.",
      trackingTypesTitle: "The Seven Types of Tracking You'll Discover",
      trackingTypesIntro: "The tool you're about to use (Blacklight, created by The Markup) will reveal what's really happening behind the scenes:",
      trackingTypes: {
        adTrackers: {
          title: "Ad Trackers",
          description: "These send information about your visit to advertising networks. They're building a profile of your interests based on every site you visit, every product you look at, and how long you spend on each page."
        },
        thirdPartyCookies: {
          title: "Third-Party Cookies",
          description: "Unlike cookies from the site you're visiting, these come from external domains. Here's how they work: You visit an online shoe store, and a cookie from an ad network (let's call it \"adtracker.com\") is placed in your browser. Later, you visit a news site that also uses adtracker.com. That same cookie is read, and now the ad network knows you were shopping for shoes. That's why you see shoe ads following you around the internet."
        },
        sessionRecording: {
          title: "Session Recording",
          description: "This is more invasive than you might expect. Session recording tools capture a video-like reconstruction of everything you do on a page—your mouse movements, where you pause, what you click, how you scroll. Companies like Hotjar and FullStory sell these services, and thousands of websites use them. The recording shows exactly what you saw and did, replayed like a movie."
        },
        keystrokeLogging: {
          title: "Keystroke Logging",
          description: "Some tracking scripts record what you type into forms—sometimes even before you hit submit. This is primarily used to capture partial form submissions, but it means your keystrokes are being transmitted to servers as you type."
        },
        canvasFingerprinting: {
          title: "Canvas Fingerprinting",
          description: "Your browser can be asked to draw an invisible image. Due to subtle differences in how your specific hardware and software render graphics, this image is slightly different from almost everyone else's. This creates an identifier that works even if you block cookies."
        },
        facebookPixel: {
          title: "Facebook Pixel",
          description: "Even if you're not logged into Facebook, and even if you don't have a Facebook account, many websites send data to Facebook about your visit through an embedded tracking pixel."
        },
        googleAnalytics: {
          title: "Google Analytics",
          description: "Present on the majority of websites, Google Analytics tracks visitors and shares data with Google's advertising ecosystem."
        }
      },
      beyondAdsTitle: "Why This Matters Beyond Ads",
      beyondAdsParagraph: "You might think: \"So what? I just get more relevant ads.\" But tracking has implications beyond advertising:",
      beyondAdsList: [
        "Price discrimination: Some retailers show different prices based on your browsing history or inferred income level",
        "Insurance and employment: Data brokers sell behavioral profiles that can influence credit decisions, insurance rates, and even hiring",
        "Profile permanence: The behavioral profiles built from tracking data persist for years and are traded between companies",
        "Security risk: Each company that holds data about you is a potential breach target"
      ],
      activityPreview: "The activity you're about to do lets you scan a website you actually visit and see exactly what tracking is happening. Many people are shocked to see the number and types of trackers on their favorite sites."
    },
    externalTool: "External Tool",
    blacklightTip: "Tip: Try scanning a news site or shopping site you frequently visit. Avoid sensitive sites like health portals or banking.",
    recordFindings: "Record Your Findings",
    blacklightRunQuestion: "Did you run the Blacklight scan?",
    siteCategoryQuestion: "What type of site did you scan?",
    trackerCountQuestion: "How many trackers were detected?",
    trackerCountHelper: "Enter the number shown in Blacklight's summary. 0-5 trackers is relatively low, 6-15 is typical for commercial sites, 16+ indicates heavy tracking.",
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
    educationalContent: {
      sectionTitle: "Understanding Browser Fingerprinting",
      introTitle: "The Tracking Method You Can't Block by Clearing Cookies",
      introParagraph: "You've probably heard that clearing your cookies helps protect your privacy. And it does—for one type of tracking. But there's another method that doesn't require storing anything on your device at all. It's called browser fingerprinting, and studies show it can uniquely identify 83-90% of browsers.",
      howItWorksTitle: "How Your Browser Betrays Your Identity",
      howItWorksParagraph: "Browser fingerprinting works by collecting dozens of small details about your device and browser that, combined, create a unique signature. Think of it like this: any single characteristic might be common, but the specific combination of 20 or 30 characteristics together is likely unique to you. Here's what gets collected:",
      attributesList: [
        "Screen resolution and color depth: Your display's exact pixel dimensions",
        "Timezone and language: Your location and language preferences",
        "Installed fonts: The specific combination of fonts on your system is highly distinctive",
        "Browser plugins: Which extensions and their versions you have installed",
        "Hardware specifications: Details about your graphics card, CPU, and available memory",
        "WebGL rendering: Your browser can be asked to draw a 3D graphic, and microscopic differences in how your hardware renders it create a unique signature",
        "Audio fingerprinting: Similar technique using audio processing",
        "Canvas fingerprinting: Drawing an invisible 2D image to identify rendering differences"
      ],
      statisticsTitle: "The Numbers Are Striking",
      statisticsParagraph: "The Electronic Frontier Foundation (EFF) demonstrated that the distribution of fingerprints has at least 18.1 bits of entropy, meaning the average user has only a 1 in 286,777 chance of sharing their exact fingerprint with another user. A 2016 AmIUnique study found that 89.4% of fingerprints are unique. Even a more conservative 2018 study found that 33.6% of fingerprints are completely unique, and on desktop computers specifically, the uniqueness rate remains very high.",
      privateBrowsingTitle: "Why Private Browsing Doesn't Help Here",
      privateBrowsingParagraph1: "When you open an incognito or private browsing window, your browser doesn't save cookies or history. But it doesn't change your screen resolution, fonts, graphics card, or timezone. Your fingerprint in private mode is often identical to your fingerprint in regular mode—which means websites can still recognize you.",
      privateBrowsingParagraph2: "Some privacy-focused browsers like Firefox and Brave have implemented fingerprinting protections that either block certain collection techniques or deliberately provide generic responses.",
      activityPreview: "The test you're about to run will tell you: (1) whether your browser fingerprint is unique (meaning you can be identified), (2) how strong your tracking protection is, and (3) which specific characteristics make you most identifiable. For many people, discovering that their browser is as unique as a fingerprint—even with no cookies—is a wake-up call about how sophisticated modern tracking has become."
    },
    externalTools: "External Tools",
    whatToLookFor: "What to look for",
    effRunQuestion: "Did you run the EFF Cover Your Tracks test?",
    browserUniqueQuestion: "Does the test say your browser fingerprint is unique?",
    browserUniqueHelper: "If your fingerprint is 'unique', websites can identify you even without cookies. Using a privacy browser or extensions like Privacy Badger can help reduce uniqueness.",
    trackingProtectionQuestion: "What level of tracking protection did the test report?",
    trackingProtectionHelper: "This indicates how well your browser blocks known trackers",
  },
  accountDevice: {
    title: "Account & Device Identifiers",
    concept: "Tracking also happens at the account/device level through ad personalization settings, device IDs, and app tracking permissions.",
    whyItMatters: "Even if you block website trackers, your accounts and devices may still share data with advertisers through built-in identifiers that follow you across apps and services.",
    educationalContent: {
      sectionTitle: "Understanding Mobile and Account Tracking",
      introTitle: "The Identifiers That Follow You Across Every App",
      introParagraph: "Website tracking uses cookies. But what about the apps on your phone? Apps can't read each other's cookies—they're sandboxed for security. So how do advertisers track you across apps? The answer is a special identifier built into your device's operating system: the Google Advertising ID (GAID) on Android and the Identifier for Advertisers (IDFA) on Apple devices.",
      howItWorksTitle: "How Mobile Advertising IDs Work",
      howItWorksParagraph: "When you installed your phone's operating system, it generated a unique advertising ID—a string of letters and numbers that identifies your device. This ID is accessible to every app you install, and it's designed specifically to enable advertising and tracking. Here's what this enables:",
      howItWorksList: [
        "You search for flights in one app → You see hotel ads in a completely different app",
        "You browse products in a shopping app → You see ads for those products in your social media apps",
        "You play a free game → The game shares your activity with ad networks tied to your advertising ID",
        "Your location data, app usage patterns, and behavioral profile are all linked to this single identifier"
      ],
      scaleTitle: "The Scale of Mobile Tracking",
      scaleParagraph: "Unlike cookies, your advertising ID follows you across your entire app ecosystem—games, social media, news apps, utilities, everything. Because it's persistent, companies can build a comprehensive profile of everything you do on your phone over months or years. Data brokers and ad networks use these identifiers to track your physical location across time, build behavioral profiles based on app usage, connect your app activity to your web browsing through cross-device tracking, and sell this data to advertisers, analytics companies, and increasingly, to anyone willing to pay.",
      attTitle: "Apple's App Tracking Transparency Changed the Game",
      attParagraph1: "In 2021, Apple introduced App Tracking Transparency (ATT), which requires apps to ask permission before accessing your IDFA. You've probably seen the popup: \"Allow this app to track your activity across other companies' apps and websites?\" This was significant: before ATT, apps accessed your IDFA automatically without asking.",
      attParagraph2: "After ATT, users had to explicitly opt in. Current statistics show that globally, about 50% of users now consent to tracking—meaning 50% decline. This single change cost the advertising industry billions of dollars in lost targeting capability. Google is following suit, planning to replace the GAID with more privacy-preserving alternatives.",
      activityPreviewTitle: "What You'll Check in This Activity",
      activityPreviewList: [
        "Google Ad Personalization: Whether Google builds a profile of your interests across all Google services",
        "Apple Advertising: Whether Apple uses your data for targeted ads within their ecosystem",
        "Android Advertising ID: You can reset (give yourself a new ID) or delete it entirely",
        "iOS App Tracking Transparency: Whether apps can request to track you at all"
      ],
      activityPreviewConclusion: "Many people discover that ad personalization has been on by default for years, building a detailed profile they never knew existed."
    },
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
    educationalContent: {
      sectionTitle: "Why Digital Hygiene Matters",
      breachesTitle: "The 1.7 Billion Reasons to Practice Good Digital Hygiene",
      breachesParagraph1: "In 2024 alone, 1.7 billion people had their personal data compromised in data breaches. The largest single breach—at National Public Data—exposed the personal information of approximately 2.9 billion records, including Social Security numbers, addresses, and dates of birth of citizens across the US, Canada, and the UK.",
      breachesParagraph2: "Here's what makes this particularly sobering: the Ticketmaster, Advance Auto Parts, Change Healthcare, and AT&T breaches—which together exposed over 1.24 billion records—all happened because hackers gained access using compromised credentials for accounts that did not have multi-factor authentication enabled. These were preventable.",
      cookiesTitle: "Why Cookies Matter for Your Security",
      cookiesParagraph: "Cookies aren't just about ads—they're also how websites remember that you're logged in. When you visit your email or bank and don't have to re-enter your password, a cookie is what proves to the site that you've already authenticated. This is convenient, but it has implications:",
      cookiesList: [
        "If someone accesses your browser, they access your logged-in accounts",
        "Session hijacking: If an attacker captures your cookies (through malware, insecure WiFi, or a compromised website), they can impersonate you without knowing your password",
        "Long-lived sessions: Some cookies persist for months or years, meaning a single compromise has a long window of exposure"
      ],
      blockingTitle: "Third-Party Cookie Blocking: The Single Most Impactful Setting",
      blockingParagraph1: "If there's one privacy setting that delivers the most protection for the least inconvenience, it's blocking third-party cookies. First-party cookies come from the site you're visiting (they're necessary for logging in and using the site). Third-party cookies come from external domains and are used almost exclusively for cross-site tracking.",
      blockingParagraph2: "Modern browsers handle this differently:",
      blockingBrowsers: [
        "Firefox: Uses \"Total Cookie Protection\" to isolate third-party cookies per site",
        "Safari: Blocks third-party cookies by default through \"Prevent Cross-Site Tracking\"",
        "Chrome: Still allows third-party cookies by default (Google reversed plans to phase them out)",
        "Enabling this setting breaks cross-site tracking without affecting your ability to use websites normally"
      ],
      hibpTitle: "Have I Been Pwned: The Reality Check",
      hibpParagraph1: "The optional activity in this step—checking Have I Been Pwned—is a moment of truth for most people. This service, run by security researcher Troy Hunt, aggregates data from 936 known breaches containing over 17 billion compromised account records.",
      hibpParagraph2: "When you enter your email address, it checks whether that email appeared in any known data breach. For most people who've had an email address for more than a few years, the answer is yes—often in multiple breaches. This is why password hygiene matters: unique passwords for every account, ideally managed by a password manager, and multi-factor authentication wherever it's available.",
      activityPreviewTitle: "What You're About to Do",
      activityPreviewList: [
        "Clear cookies and site data: Remove existing trackers and force fresh authentication",
        "Block third-party cookies: Prevent future cross-site tracking",
        "Check for breach exposure: See if your credentials have been compromised",
        "Plan password hygiene actions: Update compromised passwords, enable MFA"
      ],
      activityPreviewConclusion: "By the time you complete this step, you'll have taken concrete actions that meaningfully reduce your tracking exposure and improve your account security. These aren't theoretical benefits—they're immediate, measurable improvements to your digital privacy."
    },
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
  instructions: {
    whatToDo: "What to Do",
    publicExposure1: "Search your name (in quotes) on Google and count how many result pages show personal info like address or phone",
    publicExposure2: "Check if you appear on people-search sites (like Spokeo, WhitePages, or BeenVerified)",
    publicExposure3: "Record your findings below, then continue to the next step",
    trackers1: "Open Blacklight and enter a website you visit often (e.g., a news site or shopping site)",
    trackers2: "Review what the tool finds: trackers, cookies, session recorders, and fingerprinting",
    trackers3: "Record the tracker count and any concerning findings below",
    fingerprinting1: "Click the link to open EFF's Cover Your Tracks test",
    fingerprinting2: "Run the test and note if your browser fingerprint is unique",
    fingerprinting3: "Check your tracking protection level and record the results below",
    accountDevice1: "Check your Google Ad Settings and note if personalized ads are on or off",
    accountDevice2: "Check Apple/Android ad settings on your device (if applicable)",
    accountDevice3: "Record your current settings below - you can change them later if you wish",
    cleanup1: "Clear your cookies and site data using the browser instructions provided",
    cleanup2: "Enable blocking of third-party cookies in your browser settings",
    cleanup3: "Optionally, check Have I Been Pwned for any email breaches",
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
  externalTools: {
    googleResultsTitle: "Google 'Results about you'",
    googleResultsDesc: "See what personal information Google has found about you in search results. Requires a Google account and may not be available in all regions - if unavailable, search your name manually in quotes.",
    findContactTitle: "Find Contact Info Sites",
    findContactDesc: "Search your name in quotes plus city/state to find people-search listings",
    requestRemovalTitle: "Request Removal",
    requestRemovalDesc: "Most people-search sites have opt-out pages. Search '[site name] opt out' to find them",
    blacklightTitle: "Blacklight by The Markup",
    blacklightDesc: "Enter any website URL to see what trackers, cookies, and session recorders it uses",
    effCoverTracksTitle: "EFF Cover Your Tracks",
    effCoverTracksDesc: "Test how unique your browser fingerprint is and how well you're protected from tracking",
    effExplainerTitle: "Understanding Fingerprinting",
    effExplainerDesc: "Learn more about how browser fingerprinting works and why it matters",
    googleAdSettingsTitle: "Google Ad Settings",
    googleAdSettingsDesc: "View and control how Google personalizes ads based on your activity",
    appleAdsTitle: "Apple Advertising Settings",
    appleAdsDesc: "Settings > Privacy & Security > Apple Advertising",
    androidAdIdTitle: "Android Advertising ID",
    androidAdIdDesc: "Settings > Privacy > Ads > Reset or Delete advertising ID",
    iosAttTitle: "iOS App Tracking Transparency",
    iosAttDesc: "Settings > Privacy & Security > Tracking",
    clearCookiesTitle: "Clear Cookies & Site Data",
    clearCookiesDesc: "Remove stored tracking data from your browser",
    blockCookiesTitle: "Block Third-Party Cookies",
    blockCookiesDesc: "Prevent cross-site tracking cookies from being stored",
    hibpTitle: "Have I Been Pwned",
    hibpDesc: "Check if your email has appeared in known data breaches",
    stepsForBrowser: "Step-by-step instructions for {browser}",
  },
  badges: {
    optional: "Optional",
  },
  nextActions: {
    skippedStep: "You skipped \"{stepName}\". Complete this section when you have time.",
    requestGoogleRemoval: "Request removal of your personal info from Google search results using the 'Results about you' tool.",
    optOutPeopleSearch: "Remove your info from people-search sites. Visit the FTC guide at consumer.ftc.gov/articles/what-know-about-people-search-sites-sell-your-information",
    installContentBlocker: "Install a reputable content blocker like uBlock Origin to reduce tracker exposure.",
    fingerprintingRisk: "Your browser is uniquely identifiable. Learn more about fingerprinting at eff.org/pages/cover-your-tracks and try Firefox with Enhanced Tracking Protection set to 'Strict'.",
    turnOffGoogleAds: "Turn off personalized ads in your Google Ad Center settings.",
    clearCookies: "Clear your browser cookies and site data to remove existing trackers.",
    enableCookieBlocking: "Enable blocking of third-party cookies in your browser settings.",
    checkHibp: "Check Have I Been Pwned (haveibeenpwned.com) to see if your email was in data breaches, and sign up for notifications at haveibeenpwned.com/NotifyMe.",
    allDone: "Great job! Consider running this audit again in a few months to stay on top of your digital footprint.",
  },
  footer: {
    privacyNotice: "Your data stays on this device. We never collect or transmit personal information.",
  },
  realityCheckItems: {
    snapshot: "This is a snapshot, not a complete census of your digital footprint.",
    variesByLocation: "Results vary by country, language, and network you're connected to.",
    personalization: "Search personalization means others may see different results for you.",
    changesOverTime: "Your footprint changes over time as new data is collected and shared.",
    dataOnDevice: "All data remains on your device. This wizard never collects, stores, or transmits personal information.",
  },
  skippedSections: {
    title: "Skipped Sections",
    description: "You skipped the following sections. Complete them later to get a more accurate picture of your digital footprint.",
  },
  printInfo: {
    generated: "Generated",
    dataStoredLocally: "All data stored locally only",
  },
  charts: {
    radarView: "Radar View",
    scoreComparison: "Score Comparison",
    privacyScore: "Privacy Score",
  },
  metrics: {
    publicExposureLabel: "Public Exposure Signals",
    trackingIntensityLabel: "Tracking Intensity",
    fingerprintLabel: "Fingerprint Uniqueness",
    adSettingsLabel: "Account/Device Ads",
    cleanupLabel: "Cleanup Completed",
    valueLow: "Low",
    valuePages: "{count, plural, one {# page} other {# pages}}",
    valueUnique: "Unique",
    valueNotUnique: "Not Unique",
    valueUnknown: "Unknown",
    valueLimited: "Limited",
    valueActive: "Active",
    valueCheckSettings: "Check Settings",
    valueDone: "Done",
    valuePartial: "Partial",
    valueNotYet: "Not Yet",
    valueNA: "N/A",
    exposureGood: "Great! Your personal info wasn't easily found in search results.",
    exposureWarning: "Some personal info is visible. Consider requesting removal from search engines.",
    exposureCritical: "Your personal info is exposed. Take action to remove it from data brokers and search results.",
    trackingGood: "The site you scanned has few trackers. This is better than average.",
    trackingWarning: "Moderate tracking detected. Consider using a content blocker.",
    trackingCritical: "High tracker count. This site is heavily monetizing your attention.",
    trackingUnknown: "Run the Blacklight scan to see tracker counts.",
    fingerprintGood: "Your browser blends in with others, making fingerprinting harder.",
    fingerprintCritical: "Your browser is uniquely identifiable. Consider using Firefox with enhanced tracking protection.",
    fingerprintUnknown: "Run the EFF test to check your browser's fingerprint.",
    adsGood: "You've disabled ad personalization on your accounts.",
    adsWarning: "Some ad personalization is still active. Consider disabling in your account settings.",
    adsCritical: "Ad personalization is active. Your activity is being used to target ads.",
    cleanupGood: "You've cleared cookies and enabled third-party cookie blocking. This suggests reduced tracking persistence.",
    cleanupWarning: "You've taken some cleanup actions. Consider completing both cookie clearing and blocking for better protection.",
    cleanupCritical: "Hygiene actions like clearing cookies and blocking third-party cookies help reduce tracking persistence.",
  },
  chartCategories: {
    publicExposure: "Public Exposure",
    trackers: "Trackers",
    fingerprint: "Fingerprint",
    adSettings: "Ad Settings",
    cleanup: "Cleanup",
  },
  browserNames: {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari",
    other: "your browser",
    unknown: "your browser",
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
    viewReportCard: "Skatīt atskaiti",
    stepNumber: "{step}. solis",
    commonPitfalls: "Biežākās kļūdas",
    open: "Atvērt",
    demo: "Demo",
    demoModeNotice: "Tiek izmantoti demo dati. Iespējojiet \"Izmēģināt reālos rīkus\", lai atvērtu.",
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
      "Uzziniet, kas par jums ir redzams tiešsaistē, un iemācieties aizsargāt savu privātumu.",
    safetyNote:
      "Tikai pašpārbaude: meklējiet tikai savus identifikatorus vai izmantojiet fiktīvās personas režīmu. Mēs nekad neprasām jūsu vārdu, e-pastu vai tālruņa numuru. Jūs ievadīsiet tikai skaitļus un jā/nē atbildes. Viss paliek jūsu ierīcē.",
    chooseMode: "Izvēlieties, kā vēlaties turpināt:",
    myFootprint: "Mana pēda",
    myFootprintDesc: "Pārbaudiet savu reālo digitālo klātbūtni, meklējot savu vārdu un izmantojot reālos privātuma rīkus. Jūs uzzināsiet, kas patiesībā ir redzams par jums tiešsaistē, un varēsiet veikt konkrētas tīrīšanas darbības. Labākā izvēle, ja vēlaties praktisku ieskatu savā personīgajā privātumā.",
    fictionalPersona: "Fiktīvās personas demo",
    fictionalPersonaDesc: "Izejiet cauri audita procesam, izmantojot piemēra datus, nemeklējot neko reālu. Lieliska izvēle, lai vispirms iemācītos, kā rīki darbojas, praktizētos grupas apmācībā vai ja strādājat pie koplietota/darba datora un nevēlaties meklēt personīgo informāciju.",
    deviceLabel: "Ierīce",
    osLabel: "OS",
    browserLabel: "Pārlūkprogramma",
    consent:
      "Turpinot, jūs atzīstat, ka šis ir pašnovērtējuma rīks. Mēs nevācam un nepārsūtām nekādus personīgos identifikatorus. Visi dati paliek jūsu ierīcē.",
    optionalHelp: "Norādot savu ierīci, OS un pārlūkprogrammu, mēs varēsim parādīt pareizās instrukcijas sīkdatņu dzēšanai un privātuma iestatījumu pielāgošanai tieši jūsu konfigurācijai.",
    introParagraph: "Katru reizi, kad pārlūkojat tīmekli, jūs atstājat pēdas — jūsu vārds meklēšanas rezultātos, izsekotāji, kas seko jums pa vietnēm, un unikāls pārlūkprogrammas pirkstu nospiedums, kas jūs identificē. Šī praktiskā laboratorija palīdzēs jums precīzi uzzināt, kas par jums ir redzams tiešsaistē, un sniegs rīkus, lai atgūtu kontroli pār savu privātumu.",
    whatToExpect: "Ko jūs darīsiet",
    expectDescription: "Nākamo 60 minūšu laikā jūs izmantosiet bezmaksas privātuma rīkus, lai pārbaudītu savu digitālo klātbūtni. Jūs meklēsiet savu vārdu tiešsaistē, skenēsiet vietnes, lai atrastu slēptus izsekotājus, pārbaudīsiet, vai jūsu pārlūkprogrammu var unikāli identificēt, pārskatīsiet savus reklāmu iestatījumus un veiksiet tīrīšanas darbības. Beigās jūs saņemsiet personalizētu atskaiti ar saviem atradumiem un ieteicamajiem nākamajiem soļiem.",
    expectTime: "60 minūtes",
    expectSteps: "5 vadīti soļi",
    expectTools: "Bezmaksas privātuma rīki",
    expectPrivacy: "100% lokāli dati",
    privacyTitle: "Tikai pašpārbaude",
    privacyDescription: "Jūsu privātums ir aizsargāts visa procesa laikā. Jūs meklēsiet tikai savu informāciju, un mēs nekad neprasām jūsu vārdu, e-pastu vai citas personīgas ziņas. Viss, ko ievadāt, paliek jūsu ierīcē — nekas netiek sūtīts nekur.",
    beforeYouStart: "Pirms sākat",
    prepPoint1: "Sagatavojiet savas paroles — sīkdatņu dzēšana jūs izrakstīs no visām vietnēm",
    prepPoint2: "Izmantojiet inkognito/privāto logu, ja strādājat koplietotā datorā",
    prepPoint3: "Atvēliet nepārtrauktu laiku, lai varētu koncentrēties uz katru soli",
    chooseYourPath: "Izvēlieties savu ceļu",
    chooseYourPathDesc: "Jūs varat vai nu pārbaudīt savu reālo digitālo pēdu, vai arī praktizēties ar fiktīviem piemēra datiem. Abi ceļi māca tos pašus jēdzienus — izvēlieties atkarībā no tā, vai esat gatavi meklēt informāciju par sevi.",
    auditPurposeTitle: "Ko šis audits jums palīdzēs izdarīt",
    auditPurposeDesc1: "Jūsu digitālā pēda ir datu pēdas, ko atstājat tiešsaistē — no meklēšanas rezultātiem ar jūsu vārdu līdz neredzamiem izsekotājiem, kas seko jums pa tīmekļa vietnēm. Šīs pēdas izpratne ir pirmais solis, lai pārņemtu kontroli pār savu privātumu.",
    auditPurposeDesc2: "Internetā ir daudz bezmaksas rīku, kas var palīdzēt ieraudzīt, kādi dati tiek vākti par jums — taču tie ir izkaisīti un var būt grūti tajos orientēties vienatnē. Šis vadītais audits palīdzēs jums iziet cauri svarīgākajiem rīkiem soli pa solim, izskaidrojot atrastās lietas un iespējamās rīcības.",
    understandingOptionsTitle: "Jūsu izvēles iespējas",
    optionTableStarting: "Sākuma punkts",
    optionTableTools: "Ārējie rīki",
    optionTableLearn: "Ko uzzināsiet",
    optionTableBestFor: "Piemērotākais",
    optionSelfStarting: "Tukšs — jūs ievadāt savus reālos atradumus",
    optionSelfTools: "Aktīvas saites uz Blacklight, EFF u.c.",
    optionSelfLearn: "Reālas atziņas par jūsu privātumu",
    optionSelfBestFor: "Praktisku rezultātu iegūšanai",
    optionDemoStarting: "Iepriekš aizpildīts ar piemēra datiem",
    optionDemoTools: "Pēc noklusējuma atspējoti (ar iespēju ieslēgt)",
    optionDemoLearn: "Kā process darbojas, izmantojot parauga datus",
    optionDemoBestFor: "Mācīšanās, grupu apmācības vai koplietotiem datoriem",
    privacyProtectedTitle: "Jūsu privātums ir aizsargāts",
    privacyProtectedIntro: "Šis ir pašpārbaudes rīks. Mums nav serveru, nav kontu, nav izsekošanas.",
    privacyBullet1Title: "Nekas neiziet ārpus jūsu pārlūkprogrammas",
    privacyBullet1Desc: "Visas jūsu atbildes tiek saglabātas tikai šīs pārlūkprogrammas lokālajā krātuvē šajā ierīcē",
    privacyBullet2Title: "Dati netiek nosūtīti",
    privacyBullet2Desc: "Mēs nevācam, neglabājam un nesūtām nekādu ievadīto informāciju",
    privacyBullet3Title: "Jūs kontrolējat dzēšanu",
    privacyBullet3Desc: "Izdzēsiet visus datus jebkurā brīdī, izmantojot atiestatīšanas pogu",
    privacyBullet4Title: "Ārējie rīki ir jūsu izvēle",
    privacyBullet4Desc: "Noklikšķinot uz saitēm uz rīkiem, piemēram, Blacklight vai EFF, šīs vietnes atveras jaunās cilnēs un ir neatkarīgas no šī audita",
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
    educationalContent: {
      sectionTitle: "Publiskās redzamības izpratne",
      industryTitle: "323 miljardu dolāru nozare, kas tirgo jūsu identitāti",
      industryParagraph1: "Katru reizi, kad esat aizpildījis veidlapu, reģistrējies vēlēšanām, iegādājies māju vai vienkārši eksistējis kā pilsonis, jūs esat radījis datu punktus. Iespējams, jūs nezināt, ka milzīga nozare ir izveidojusies ap šīs informācijas par jums vākšanu, iepakošanu un pārdošanu.",
      industryParagraph2: "Datu brokeru nozares vērtība 2024. gadā ir 323 miljardi dolāru, un tiek prognozēts, ka līdz 2034. gadam tā gandrīz dubultosies līdz 697 miljardiem dolāru. Šie uzņēmumi ne tikai uztur failu par jums — tie vidēji glabā 1500 datu punktus par katru personu. Viens no lielākajiem brokeriem, Acxiom, glabā vairāk nekā 2,5 miljardus patērētāju ierakstu visā pasaulē. Datu brokeri tirgo informāciju par vairāk nekā 80% Amerikas patērētāju.",
      dataSourcesTitle: "No kurienes nāk jūsu dati?",
      dataSourcesParagraph: "Cilvēku meklēšanas vietnes, piemēram, Spokeo, Whitepages un BeenVerified, nerada informāciju par jums — tās to apkopo no avotiem, ko jūs nekad nebūtu gaidījis:",
      dataSourcesList: [
        "Publiskie ieraksti: īpašuma akti, tiesas lietas, vēlētāju reģistrācijas, laulības apliecības, bankrota lietas",
        "Komerciālie avoti: kredītu pieteikumi, auto aizdevumi, īres līgumi, komunālo pakalpojumu ieraksti un pat daži štatu autovadītāju reģistri, kas pārdod reģistrācijas datus",
        "Sociālie mediji: jebkurš profils, ko esat kādreiz padarījis publisku, pat īslaicīgi",
        "Citi datu brokeri: šie uzņēmumi veic datu krustenisko salīdzināšanu un pārdod tos viens otram, veidojot savstarpēji savienotu tīklu"
      ],
      dataSourcesConclusion: "Galvenā atziņa ir tāda, ka neviens no šiem datiem nav obligāti \"noplūdis\" — liela daļa vienmēr ir bijusi tehniski publiska. Atšķirība tagad ir tāda, ka uzņēmumi ir automatizējuši vākšanu un padarījuši visu jūsu dzīvi meklējamu dažās sekundēs. Tas, kam agrāk bija nepieciešams privātdetektīvs un nedēļu darbs, tagad jebkuram ar interneta pieeju aizņem aptuveni 30 sekundes.",
      meaningTitle: "Ko tas nozīmē jums",
      meaningParagraph: "Kad svešinieks, potenciālais darba devējs, bijušais partneris vai krāpnieks meklē jūsu vārdu, viņš potenciāli var atrast:",
      meaningList: [
        "Jūsu pašreizējo un iepriekšējās adreses",
        "Tālruņu numurus (ieskaitot tos, ko uzskatījāt par privātiem)",
        "E-pasta adreses",
        "Jūsu radinieku un paziņu vārdus",
        "Jūsu aptuveno vecumu un dzimšanas datumu",
        "Īpašuma piederību un aptuveno mājas vērtību",
        "Tiesas ierakstus un juridisko vēsturi"
      ],
      activityPreview: "Aktivitāte, ko tagad veiksiet, parādīs tieši to, kas par jums ir atrodams. Daudziem cilvēkiem tas ir acis atvērošs pārdzīvojums — ne tāpēc, ka viņi būtu darījuši kaut ko nepareizu, bet tāpēc, ka viņiem nebija ne jausmas, cik liela daļa viņu dzīves ir katalogizēta un pārdošanā."
    },
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
    educationalContent: {
      sectionTitle: "Tīmekļa izsekošanas izpratne",
      introTitle: "Kas notiek pirmajā sekundē, kad apmeklējat vietni",
      introParagraph1: "Kad noklikšķināt uz saites, lai apmeklētu vietni, kaut kas neredzams notiek vēl pirms lapas pilnīgas ielādes. Skripti izpildās, savienojumi atveras ar desmitiem trešo pušu serveru, un dati par jums sāk plūst vairākos virzienos. Tas notiek tik ātri, ka jūs to nekad nepamanītu — bet tas notiek gandrīz katrā vietnē, ko apmeklējat.",
      introParagraph2: "Pētījumi rāda, ka 90% vietņu ietver vismaz vienu izsekošanas skriptu, un vidēji vietnē ir 48 izsekotāji. Sociālo mediju vietnes ir lielākās pārkāpējas — vidēji 28 izsekotāji vienā vietnē, un dažos reģionos, piemēram, Honkongā, šis skaitlis sasniedz 169 izsekotājus vienā sociālo mediju vietnē. Google izsekotāji ir klāt 74% no visa tīmekļa trafika, un Facebook veido vēl 11%. Tipisks lietotājs katru nedēļu saskaras ar aptuveni 177 dažādiem izsekotājiem.",
      trackingTypesTitle: "Septiņi izsekošanas veidi, ko atklāsiet",
      trackingTypesIntro: "Rīks, ko izmantosiet (Blacklight, ko izveidoja The Markup), atklās, kas patiesībā notiek aizkulisēs:",
      trackingTypes: {
        adTrackers: { title: "Reklāmu izsekotāji", description: "Tie nosūta informāciju par jūsu apmeklējumu reklāmu tīkliem. Tie veido jūsu interešu profilu, balstoties uz katru vietni, ko apmeklējat, katru produktu, ko aplūkojat, un cik ilgi pavadāt katrā lapā." },
        thirdPartyCookies: { title: "Trešo pušu sīkdatnes", description: "Atšķirībā no sīkdatnēm no vietnes, ko apmeklējat, šīs nāk no ārējiem domēniem. Lūk, kā tās darbojas: jūs apmeklējat tiešsaistes apavu veikalu, un sīkdatne no reklāmu tīkla (sauksim to par \"adtracker.com\") tiek ievietota jūsu pārlūkprogrammā. Vēlāk jūs apmeklējat ziņu vietni, kas arī izmanto adtracker.com. Tā pati sīkdatne tiek nolasīta, un tagad reklāmu tīkls zina, ka jūs iepirkāties apavus. Tāpēc jūs redzat apavu reklāmas, kas seko jums pa visu internetu." },
        sessionRecording: { title: "Sesiju ierakstīšana", description: "Tas ir invazīvāk, nekā varētu gaidīt. Sesiju ierakstīšanas rīki tver video veida rekonstrukciju visa, ko darāt lapā — jūsu peles kustības, kur apstājaties, uz ko klikšķināt, kā ritināt. Uzņēmumi kā Hotjar un FullStory pārdod šos pakalpojumus, un tūkstošiem vietņu tos izmanto. Ieraksts parāda tieši to, ko redzējāt un darījāt, atskaņots kā filma." },
        keystrokeLogging: { title: "Taustiņu reģistrēšana", description: "Daži izsekošanas skripti ieraksta to, ko rakstāt formās — dažreiz pat pirms nospiežat \"Iesniegt\". To galvenokārt izmanto, lai tvertu daļējas veidlapu aizpildes, bet tas nozīmē, ka jūsu taustiņu nospiešanas tiek pārsūtītas uz serveriem, kamēr rakstāt." },
        canvasFingerprinting: { title: "Canvas pirkstu nospiedumi", description: "Jūsu pārlūkprogrammai var lūgt uzzīmēt neredzamu attēlu. Sakarā ar smalkām atšķirībām tajā, kā jūsu konkrētā aparatūra un programmatūra renderē grafiku, šis attēls ir nedaudz atšķirīgs no gandrīz visu pārējo. Tas rada identifikatoru, kas darbojas pat tad, ja bloķējat sīkdatnes." },
        facebookPixel: { title: "Facebook pikselis", description: "Pat ja neesat pieteicies Facebook un pat ja jums nav Facebook konta, daudzas vietnes nosūta datus Facebook par jūsu apmeklējumu, izmantojot iegultu izsekošanas pikseli." },
        googleAnalytics: { title: "Google Analytics", description: "Klātesošs lielākajā daļā vietņu, Google Analytics izseko apmeklētājus un dalās ar datiem ar Google reklāmu ekosistēmu." }
      },
      beyondAdsTitle: "Kāpēc tas ir svarīgi ārpus reklāmām",
      beyondAdsParagraph: "Jūs varētu domāt: \"Nu un? Es vienkārši redzu atbilstošākas reklāmas.\" Bet izsekošanai ir sekas ārpus reklāmas:",
      beyondAdsList: [
        "Cenu diskriminācija: daži mazumtirgotāji rāda atšķirīgas cenas, balstoties uz jūsu pārlūkošanas vēsturi vai izsecināto ienākumu līmeni",
        "Apdrošināšana un nodarbinātība: datu brokeri pārdod uzvedības profilus, kas var ietekmēt kredītlēmumus, apdrošināšanas likmes un pat pieņemšanu darbā",
        "Profilu pastāvīgums: uzvedības profili, kas veidoti no izsekošanas datiem, saglabājas gadiem un tiek tirgoti starp uzņēmumiem",
        "Drošības risks: katrs uzņēmums, kas glabā datus par jums, ir potenciāls datu noplūdes mērķis"
      ],
      activityPreview: "Aktivitāte, ko veiksiet, ļauj skenēt vietni, ko patiešām apmeklējat, un redzēt tieši to, kāda izsekošana notiek. Daudzi cilvēki ir šokēti, redzot izsekotāju skaitu un veidus savās iecienītākajās vietnēs."
    },
    externalTool: "Ārējais rīks",
    blacklightTip: "Padoms: Mēģiniet skenēt ziņu vai iepirkšanās vietni, ko bieži apmeklējat. Izvairieties no sensitīvām vietnēm, piemēram, veselības portāliem vai bankām.",
    recordFindings: "Ierakstiet savus atklājumus",
    blacklightRunQuestion: "Vai palaidāt Blacklight skenēšanu?",
    siteCategoryQuestion: "Kāda veida vietni jūs skenējāt?",
    trackerCountQuestion: "Cik izsekotāju tika atklāts?",
    trackerCountHelper: "Ievadiet skaitli, kas parādīts Blacklight kopsavilkumā. 0-5 izsekotāji ir salīdzinoši maz, 6-15 ir tipiski komerciālām vietnēm, 16+ norāda uz intensīvu izsekošanu.",
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
    educationalContent: {
      sectionTitle: "Pārlūkprogrammas pirkstu nospiedumu izpratne",
      introTitle: "Izsekošanas metode, ko nevar bloķēt, dzēšot sīkdatnes",
      introParagraph: "Jūs droši vien esat dzirdējis, ka sīkdatņu dzēšana palīdz aizsargāt jūsu privātumu. Un tā arī ir — vienam izsekošanas veidam. Bet ir cita metode, kas vispār neprasa neko glabāt jūsu ierīcē. To sauc par pārlūkprogrammas pirkstu nospiedumiem, un pētījumi rāda, ka tā var unikāli identificēt 83-90% pārlūkprogrammu.",
      howItWorksTitle: "Kā jūsu pārlūkprogramma nodod jūsu identitāti",
      howItWorksParagraph: "Pārlūkprogrammas pirkstu nospiedumu vākšana darbojas, savācot desmitiem sīku detaļu par jūsu ierīci un pārlūkprogrammu, kas apvienotas veido unikālu parakstu. Iedomājieties šādi: jebkura atsevišķa īpašība var būt izplatīta, bet konkrētā 20 vai 30 īpašību kombinācija kopā, visticamāk, ir unikāla tieši jums. Lūk, kas tiek savākts:",
      attributesList: [
        "Ekrāna izšķirtspēja un krāsu dziļums: jūsu displeja precīzās pikseļu dimensijas",
        "Laika josla un valoda: jūsu atrašanās vieta un valodas preferences",
        "Instalētie fonti: konkrētā fontu kombinācija jūsu sistēmā ir ļoti atšķirīga",
        "Pārlūkprogrammas spraudņi: kādi paplašinājumi un to versijas jums ir instalētas",
        "Aparatūras specifikācijas: detaļas par jūsu grafikas karti, procesoru un pieejamo atmiņu",
        "WebGL renderēšana: jūsu pārlūkprogrammai var lūgt uzzīmēt 3D grafiku, un mikroskopiskas atšķirības tajā, kā jūsu aparatūra to renderē, rada unikālu parakstu",
        "Audio pirkstu nospiedumi: līdzīga tehnika, izmantojot audio apstrādi",
        "Canvas pirkstu nospiedumi: neredzama 2D attēla zīmēšana, lai identificētu renderēšanas atšķirības"
      ],
      statisticsTitle: "Skaitļi ir pārsteidzoši",
      statisticsParagraph: "Electronic Frontier Foundation (EFF) demonstrēja, ka pirkstu nospiedumu sadalījumam ir vismaz 18,1 entropijas biti, kas nozīmē, ka vidējam lietotājam ir tikai 1 no 286 777 iespēja dalīties ar precīzi tādu pašu pirkstu nospiedumu ar citu lietotāju. 2016. gada AmIUnique pētījums atklāja, ka 89,4% pirkstu nospiedumu ir unikāli. Pat konservatīvāks 2018. gada pētījums atklāja, ka 33,6% pirkstu nospiedumu ir pilnīgi unikāli, un galddatoriem konkrēti unikalitātes līmenis saglabājas ļoti augsts.",
      privateBrowsingTitle: "Kāpēc privātā pārlūkošana šeit nepalīdz",
      privateBrowsingParagraph1: "Kad atverat inkognito vai privātās pārlūkošanas logu, jūsu pārlūkprogramma nesaglabā sīkdatnes vai vēsturi. Bet tā nemaina jūsu ekrāna izšķirtspēju, fontus, grafikas karti vai laika joslu. Jūsu pirkstu nospiedums privātajā režīmā bieži ir identisks jūsu pirkstu nospiedumam parastajā režīmā — kas nozīmē, ka vietnes joprojām var jūs atpazīt.",
      privateBrowsingParagraph2: "Dažas uz privātumu vērstas pārlūkprogrammas, piemēram, Firefox un Brave, ir ieviesušas pirkstu nospiedumu aizsardzību, kas vai nu bloķē noteiktas vākšanas tehnikas, vai apzināti sniedz vispārīgas atbildes.",
      activityPreview: "Tests, ko veiksiet, jums pateiks: (1) vai jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls (kas nozīmē, ka jūs var identificēt), (2) cik spēcīga ir jūsu izsekošanas aizsardzība, un (3) kuras konkrētas īpašības padara jūs visvairāk identificējamu. Daudziem cilvēkiem atklājums, ka viņu pārlūkprogramma ir tikpat unikāla kā pirkstu nospiedums — pat bez sīkdatnēm — ir modinātājzvans par to, cik sarežģīta ir kļuvusi mūsdienu izsekošana."
    },
    externalTools: "Ārējie rīki",
    whatToLookFor: "Uz ko pievērst uzmanību",
    effRunQuestion: "Vai palaidāt EFF Cover Your Tracks testu?",
    browserUniqueQuestion: "Vai tests norāda, ka jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls?",
    browserUniqueHelper: "Ja jūsu pirkstu nospiedums ir 'unikāls', vietnes var jūs identificēt pat bez sīkdatnēm. Privātuma pārlūkprogrammas vai paplašinājumi kā Privacy Badger var palīdzēt samazināt unikalitāti.",
    trackingProtectionQuestion: "Kādu izsekošanas aizsardzības līmeni ziņoja tests?",
    trackingProtectionHelper: "Tas norāda, cik labi jūsu pārlūkprogramma bloķē zināmos izsekotājus",
  },
  accountDevice: {
    title: "Konta un ierīces identifikatori",
    concept: "Izsekošana notiek arī konta/ierīces līmenī, izmantojot reklāmu personalizācijas iestatījumus, ierīču ID un lietotņu izsekošanas atļaujas.",
    whyItMatters: "Pat ja bloķējat vietņu izsekotājus, jūsu konti un ierīces joprojām var kopīgot datus ar reklāmdevējiem, izmantojot iebūvētos identifikatorus, kas jūs seko pa lietotnēm un pakalpojumiem.",
    educationalContent: {
      sectionTitle: "Mobilo un kontu izsekošanas izpratne",
      introTitle: "Identifikatori, kas seko jums visās lietotnēs",
      introParagraph: "Vietņu izsekošana izmanto sīkdatnes. Bet kā ar lietotnēm jūsu tālrunī? Lietotnes nevar lasīt citu lietotņu sīkdatnes — tās ir izolētas drošības nolūkos. Tātad, kā reklāmdevēji izseko jūs pa lietotnēm? Atbilde ir īpašs identifikators, kas iebūvēts jūsu ierīces operētājsistēmā: Google reklāmas ID (GAID) Android ierīcēs un reklāmdevēju identifikators (IDFA) Apple ierīcēs.",
      howItWorksTitle: "Kā darbojas mobilo reklāmu ID",
      howItWorksParagraph: "Kad instalējāt sava tālruņa operētājsistēmu, tā ģenerēja unikālu reklāmas ID — burtu un ciparu virkni, kas identificē jūsu ierīci. Šis ID ir pieejams katrai lietotnei, ko instalējat, un tas ir īpaši paredzēts, lai nodrošinātu reklāmu un izsekošanu. Lūk, ko tas ļauj:",
      howItWorksList: [
        "Jūs meklējat lidojumus vienā lietotnē → Jūs redzat viesnīcu reklāmas pilnīgi citā lietotnē",
        "Jūs pārlūkojat produktus iepirkšanās lietotnē → Jūs redzat šo produktu reklāmas savās sociālo mediju lietotnēs",
        "Jūs spēlējat bezmaksas spēli → Spēle dalās ar jūsu aktivitāti ar reklāmu tīkliem, kas saistīti ar jūsu reklāmas ID",
        "Jūsu atrašanās vietas dati, lietotņu lietošanas modeļi un uzvedības profils — viss ir saistīts ar šo vienu identifikatoru"
      ],
      scaleTitle: "Mobilās izsekošanas mērogs",
      scaleParagraph: "Atšķirībā no sīkdatnēm, jūsu reklāmas ID seko jums pa visu jūsu lietotņu ekosistēmu — spēles, sociālie mediji, ziņu lietotnes, utilītas, viss. Tā kā tas ir pastāvīgs, uzņēmumi var veidot visaptverošu profilu par visu, ko darāt savā tālrunī mēnešu vai gadu garumā. Datu brokeri un reklāmu tīkli izmanto šos identifikatorus, lai izsekotu jūsu fizisko atrašanās vietu laika gaitā, veidotu uzvedības profilus, balstoties uz lietotņu lietošanu, savienotu jūsu lietotņu aktivitāti ar tīmekļa pārlūkošanu, izmantojot starpierīču izsekošanu, un pārdotu šos datus reklāmdevējiem, analītikas uzņēmumiem un arvien biežāk — jebkuram, kurš ir gatavs maksāt.",
      attTitle: "Apple lietotņu izsekošanas caurspīdīgums mainīja spēles noteikumus",
      attParagraph1: "2021. gadā Apple ieviesa lietotņu izsekošanas caurspīdīgumu (ATT), kas pieprasa lietotnēm lūgt atļauju pirms piekļuves jūsu IDFA. Jūs droši vien esat redzējis uznirstošo logu: \"Atļaut šai lietotnei izsekot jūsu aktivitāti citu uzņēmumu lietotnēs un vietnēs?\" Tas bija nozīmīgi: pirms ATT lietotnes piekļuva jūsu IDFA automātiski, nejautājot.",
      attParagraph2: "Pēc ATT lietotājiem bija skaidri jāpiekrīt. Pašreizējā statistika rāda, ka globāli aptuveni 50% lietotāju tagad piekrīt izsekošanai — kas nozīmē, ka 50% atsakās. Šī viena izmaiņa izmaksāja reklāmas nozarei miljardus dolāru zaudētās mērķēšanas spējās. Google seko līdzi, plānojot aizstāt GAID ar privātumu vairāk saudzējošām alternatīvām.",
      activityPreviewTitle: "Ko pārbaudīsiet šajā aktivitātē",
      activityPreviewList: [
        "Google reklāmu personalizācija: vai Google veido jūsu interešu profilu visos Google pakalpojumos",
        "Apple reklāma: vai Apple izmanto jūsu datus mērķētām reklāmām savā ekosistēmā",
        "Android reklāmas ID: varat atiestatīt (piešķirt sev jaunu ID) vai pilnībā dzēst",
        "iOS lietotņu izsekošanas caurspīdīgums: vai lietotnes vispār var pieprasīt jūs izsekot"
      ],
      activityPreviewConclusion: "Daudzi cilvēki atklāj, ka reklāmu personalizācija ir bijusi ieslēgta pēc noklusējuma gadiem, veidojot detalizētu profilu, par kura eksistenci viņiem nebija ne jausmas."
    },
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
    educationalContent: {
      sectionTitle: "Kāpēc digitālā higiēna ir svarīga",
      breachesTitle: "1,7 miljardi iemeslu praktizēt labu digitālo higiēnu",
      breachesParagraph1: "Tikai 2024. gadā vien 1,7 miljardiem cilvēku tika kompromitēti personas dati datu noplūdēs. Lielākā atsevišķā noplūde — National Public Data — atklāja aptuveni 2,9 miljardu ierakstu personīgo informāciju, ieskaitot sociālās apdrošināšanas numurus, adreses un dzimšanas datumus iedzīvotājiem ASV, Kanādā un Apvienotajā Karalistē.",
      breachesParagraph2: "Lūk, kas padara to īpaši satraucošu: Ticketmaster, Advance Auto Parts, Change Healthcare un AT&T noplūdes — kas kopā atklāja vairāk nekā 1,24 miljardus ierakstu — visas notika tāpēc, ka hakeri ieguva piekļuvi, izmantojot kompromitētus akreditācijas datus kontiem, kuriem nebija iespējota daudzfaktoru autentifikācija. Tās bija novēršamas.",
      cookiesTitle: "Kāpēc sīkdatnes ir svarīgas jūsu drošībai",
      cookiesParagraph: "Sīkdatnes nav tikai par reklāmām — tās arī ir veids, kā vietnes atceras, ka esat pieteicies. Kad apmeklējat savu e-pastu vai banku un jums nav atkārtoti jāievada parole, sīkdatne ir tas, kas pierāda vietnei, ka jau esat autentificējies. Tas ir ērti, bet tam ir sekas:",
      cookiesList: [
        "Ja kāds piekļūst jūsu pārlūkprogrammai, viņš piekļūst jūsu pieteiktajiem kontiem",
        "Sesijas nolaupīšana: ja uzbrucējs tver jūsu sīkdatnes (caur ļaunprogrammatūru, nedrošu WiFi vai kompromitētu vietni), viņš var uzdoties par jums, nezinot jūsu paroli",
        "Ilgdzīvojošas sesijas: dažas sīkdatnes saglabājas mēnešiem vai gadiem, kas nozīmē, ka vienam kompromitējumam ir ilgs iedarbības logs"
      ],
      blockingTitle: "Trešo pušu sīkdatņu bloķēšana: vienietekmīgākais iestatījums",
      blockingParagraph1: "Ja ir viens privātuma iestatījums, kas sniedz visvairāk aizsardzības ar vismazākajām neērtībām, tā ir trešo pušu sīkdatņu bloķēšana. Pirmās puses sīkdatnes nāk no vietnes, ko apmeklējat (tās ir nepieciešamas pieteikšanās un vietnes lietošanai). Trešo pušu sīkdatnes nāk no ārējiem domēniem un tiek izmantotas gandrīz tikai starpvietņu izsekošanai.",
      blockingParagraph2: "Mūsdienu pārlūkprogrammas to apstrādā atšķirīgi:",
      blockingBrowsers: [
        "Firefox: izmanto \"Total Cookie Protection\", lai izolētu trešo pušu sīkdatnes katrai vietnei",
        "Safari: bloķē trešo pušu sīkdatnes pēc noklusējuma, izmantojot \"Novērst starpvietņu izsekošanu\"",
        "Chrome: joprojām atļauj trešo pušu sīkdatnes pēc noklusējuma (Google atcēla plānus tās pakāpeniski izbeigt)",
        "Šī iestatījuma iespējošana pārtrauc starpvietņu izsekošanu, neietekmējot jūsu spēju normāli lietot vietnes"
      ],
      hibpTitle: "Have I Been Pwned: realitātes pārbaude",
      hibpParagraph1: "Neobligātā aktivitāte šajā solī — Have I Been Pwned pārbaude — ir patiesības brīdis lielākajai daļai cilvēku. Šis pakalpojums, ko vada drošības pētnieks Troy Hunt, apkopo datus no 936 zināmām noplūdēm, kas satur vairāk nekā 17 miljardus kompromitētu kontu ierakstu.",
      hibpParagraph2: "Kad ievadāt savu e-pasta adresi, tas pārbauda, vai šis e-pasts ir parādījies kādā zināmā datu noplūdē. Lielākajai daļai cilvēku, kuriem e-pasta adrese ir bijusi vairāk nekā dažus gadus, atbilde ir jā — bieži vairākās noplūdēs. Tāpēc paroļu higiēna ir svarīga: unikālas paroles katram kontam, ideālā gadījumā pārvaldītas ar paroļu pārvaldnieku, un daudzfaktoru autentifikācija visur, kur tā ir pieejama.",
      activityPreviewTitle: "Ko jūs tagad darīsiet",
      activityPreviewList: [
        "Dzēst sīkdatnes un vietnes datus: noņemt esošos izsekotājus un piespiest jaunu autentifikāciju",
        "Bloķēt trešo pušu sīkdatnes: novērst nākotnes starpvietņu izsekošanu",
        "Pārbaudīt noplūdes iedarbību: redzēt, vai jūsu akreditācijas dati ir kompromitēti",
        "Plānot paroļu higiēnas darbības: atjaunināt kompromitētās paroles, iespējot MFA"
      ],
      activityPreviewConclusion: "Līdz šī soļa pabeigšanai jūs būsiet veicis konkrētas darbības, kas būtiski samazina jūsu izsekošanas iedarbību un uzlabo jūsu kontu drošību. Tie nav teorētiski ieguvumi — tie ir tūlītēji, izmērāmi uzlabojumi jūsu digitālajam privātumam."
    },
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
  instructions: {
    whatToDo: "Ko darīt",
    publicExposure1: "Meklējiet savu vārdu (pēdiņās) Google un saskaitiet, cik rezultātu lapas parāda personīgo informāciju, piemēram, adresi vai tālruni",
    publicExposure2: "Pārbaudiet, vai parādāties personu meklēšanas vietnēs (piemēram, Spokeo, WhitePages vai BeenVerified)",
    publicExposure3: "Ierakstiet savus atklājumus zemāk, pēc tam turpiniet uz nākamo soli",
    trackers1: "Atveriet Blacklight un ievadiet vietni, kuru bieži apmeklējat (piem., ziņu vai iepirkšanās vietni)",
    trackers2: "Pārskatiet, ko rīks atrod: izsekotājus, sīkdatnes, sesiju ierakstītājus un pirkstu nospiedumus",
    trackers3: "Ierakstiet izsekotāju skaitu un visus satraucošos atradumus zemāk",
    fingerprinting1: "Noklikšķiniet uz saites, lai atvērtu EFF Cover Your Tracks testu",
    fingerprinting2: "Palaidiet testu un atzīmējiet, vai jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls",
    fingerprinting3: "Pārbaudiet savu izsekošanas aizsardzības līmeni un ierakstiet rezultātus zemāk",
    accountDevice1: "Pārbaudiet savus Google reklāmu iestatījumus un atzīmējiet, vai personalizētās reklāmas ir ieslēgtas vai izslēgtas",
    accountDevice2: "Pārbaudiet Apple/Android reklāmu iestatījumus savā ierīcē (ja piemērojams)",
    accountDevice3: "Ierakstiet savus pašreizējos iestatījumus zemāk - vēlāk tos varat mainīt, ja vēlaties",
    cleanup1: "Dzēsiet savas sīkdatnes un vietnes datus, izmantojot sniegtos pārlūkprogrammas norādījumus",
    cleanup2: "Iespējojiet trešo pušu sīkdatņu bloķēšanu savos pārlūkprogrammas iestatījumos",
    cleanup3: "Pēc izvēles pārbaudiet Have I Been Pwned, lai atrastu e-pasta noplūdes",
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
  externalTools: {
    googleResultsTitle: "Google 'Rezultāti par jums'",
    googleResultsDesc: "Skatiet, kādu personīgo informāciju Google ir atradis par jums meklēšanas rezultātos. Nepieciešams Google konts un var nebūt pieejams visos reģionos - ja nav pieejams, meklējiet savu vārdu manuāli pēdiņās.",
    findContactTitle: "Atrast kontaktinformācijas vietnes",
    findContactDesc: "Meklējiet savu vārdu pēdiņās plus pilsētu/valsti, lai atrastu personu meklēšanas sarakstus",
    requestRemovalTitle: "Pieprasīt dzēšanu",
    requestRemovalDesc: "Lielākajai daļai personu meklēšanas vietņu ir datu dzēšanas lapas. Meklējiet '[vietnes nosaukums] atteikties' vai 'dzēst datus', lai tās atrastu",
    blacklightTitle: "Blacklight no The Markup",
    blacklightDesc: "Ievadiet jebkuru vietnes URL, lai redzētu, kādus izsekotājus, sīkdatnes un sesiju ierakstītājus tā izmanto",
    effCoverTracksTitle: "EFF Cover Your Tracks",
    effCoverTracksDesc: "Pārbaudiet, cik unikāls ir jūsu pārlūkprogrammas pirkstu nospiedums un cik labi esat aizsargāts pret izsekošanu",
    effExplainerTitle: "Izpratne par pirkstu nospiedumiem",
    effExplainerDesc: "Uzziniet vairāk par to, kā darbojas pārlūkprogrammas pirkstu nospiedumi un kāpēc tas ir svarīgi",
    googleAdSettingsTitle: "Google reklāmu iestatījumi",
    googleAdSettingsDesc: "Skatiet un kontrolējiet, kā Google personalizē reklāmas, pamatojoties uz jūsu darbībām",
    appleAdsTitle: "Apple reklāmu iestatījumi",
    appleAdsDesc: "Iestatījumi > Privātums un drošība > Apple reklāma",
    androidAdIdTitle: "Android reklāmas ID",
    androidAdIdDesc: "Iestatījumi > Privātums > Reklāmas > Atiestatīt vai dzēst reklāmas ID",
    iosAttTitle: "iOS lietotņu izsekošanas caurspīdīgums",
    iosAttDesc: "Iestatījumi > Privātums un drošība > Izsekošana",
    clearCookiesTitle: "Dzēst sīkdatnes un vietnes datus",
    clearCookiesDesc: "Noņemiet saglabātos izsekošanas datus no savas pārlūkprogrammas",
    blockCookiesTitle: "Bloķēt trešo pušu sīkdatnes",
    blockCookiesDesc: "Novērsiet starpvietņu izsekošanas sīkdatņu saglabāšanu",
    hibpTitle: "Have I Been Pwned",
    hibpDesc: "Pārbaudiet, vai jūsu e-pasts ir parādījies zināmās datu noplūdēs",
    stepsForBrowser: "Soli pa solim instrukcijas priekš {browser}",
  },
  badges: {
    optional: "Neobligāti",
  },
  nextActions: {
    skippedStep: "Jūs izlaidāt \"{stepName}\". Pabeidziet šo sadaļu, kad jums būs laiks.",
    requestGoogleRemoval: "Pieprasiet savas personīgās informācijas dzēšanu no Google meklēšanas rezultātiem, izmantojot 'Rezultāti par jums' rīku.",
    optOutPeopleSearch: "Dzēsiet savu informāciju no personu meklēšanas vietnēm. Apmeklējiet datu aizsardzības iestādes vietni, lai uzzinātu vairāk par savām tiesībām.",
    installContentBlocker: "Instalējiet uzticamu satura bloķētāju, piemēram, uBlock Origin, lai samazinātu izsekotāju ietekmi.",
    fingerprintingRisk: "Jūsu pārlūkprogramma ir unikāli identificējama. Uzziniet vairāk par pirkstu nospiedumiem eff.org/pages/cover-your-tracks un izmēģiniet Firefox ar Uzlabotu izsekošanas aizsardzību iestatītu uz 'Stingrs'.",
    turnOffGoogleAds: "Izslēdziet personalizētās reklāmas savos Google reklāmu centra iestatījumos.",
    clearCookies: "Dzēsiet savas pārlūkprogrammas sīkdatnes un vietnes datus, lai noņemtu esošos izsekotājus.",
    enableCookieBlocking: "Iespējojiet trešo pušu sīkdatņu bloķēšanu savas pārlūkprogrammas iestatījumos.",
    checkHibp: "Pārbaudiet Have I Been Pwned (haveibeenpwned.com), lai redzētu, vai jūsu e-pasts ir bijis datu noplūdēs, un pierakstieties paziņojumiem haveibeenpwned.com/NotifyMe.",
    allDone: "Lieliski padarīts! Apsveriet iespēju veikt šo auditu vēlreiz pēc dažiem mēnešiem, lai sekotu līdzi savai digitālajai pēdai.",
  },
  footer: {
    privacyNotice: "Jūsu dati paliek šajā ierīcē. Mēs nekad neapkopojam un nepārsūtām personisko informāciju.",
  },
  realityCheckItems: {
    snapshot: "Šis ir momentuzņēmums, nevis pilnīgs jūsu digitālās pēdas apskats.",
    variesByLocation: "Rezultāti atšķiras atkarībā no valsts, valodas un tīkla, kuram esat pieslēdzies.",
    personalization: "Meklēšanas personalizācija nozīmē, ka citi var redzēt atšķirīgus rezultātus par jums.",
    changesOverTime: "Jūsu digitālā pēda mainās laika gaitā, jo tiek apkopoti un kopīgoti jauni dati.",
    dataOnDevice: "Visi dati paliek jūsu ierīcē. Šis vednis nekad neapkopo, neuzglabā un nepārsūta personisko informāciju.",
  },
  skippedSections: {
    title: "Izlaistās sadaļas",
    description: "Jūs izlaidāt šīs sadaļas. Aizpildiet tās vēlāk, lai iegūtu precīzāku priekšstatu par savu digitālo pēdu.",
  },
  printInfo: {
    generated: "Izveidots",
    dataStoredLocally: "Visi dati glabājas tikai lokāli",
  },
  charts: {
    radarView: "Radara skats",
    scoreComparison: "Punktu salīdzinājums",
    privacyScore: "Privātuma rezultāts",
  },
  metrics: {
    publicExposureLabel: "Publiskā atpazīstamība",
    trackingIntensityLabel: "Izsekošanas intensitāte",
    fingerprintLabel: "Pārlūka pirkstu nospiedums",
    adSettingsLabel: "Kontu/ierīču reklāmas",
    cleanupLabel: "Tīrīšana pabeigta",
    valueLow: "Zema",
    valuePages: "{count, plural, one {# lapa} few {# lapas} other {# lapas}}",
    valueUnique: "Unikāls",
    valueNotUnique: "Nav unikāls",
    valueUnknown: "Nezināms",
    valueLimited: "Ierobežotas",
    valueActive: "Aktīvas",
    valueCheckSettings: "Pārbaudīt iestatījumus",
    valueDone: "Pabeigts",
    valuePartial: "Daļēji",
    valueNotYet: "Vēl nav",
    valueNA: "Nav pieejams",
    exposureGood: "Lieliski! Jūsu personīgā informācija netika viegli atrasta meklēšanas rezultātos.",
    exposureWarning: "Daļa personīgās informācijas ir redzama. Apsveriet iespēju pieprasīt noņemšanu no meklētājprogrammām.",
    exposureCritical: "Jūsu personīgā informācija ir atklāta. Rīkojieties, lai to noņemtu no datu brokeriem un meklēšanas rezultātiem.",
    trackingGood: "Skenētajā vietnē ir maz izsekotāju. Tas ir labāk nekā vidēji.",
    trackingWarning: "Konstatēta mērena izsekošana. Apsveriet satura bloķētāja izmantošanu.",
    trackingCritical: "Augsts izsekotāju skaits. Šī vietne intensīvi monetizē jūsu uzmanību.",
    trackingUnknown: "Palaidiet Blacklight skenēšanu, lai redzētu izsekotāju skaitu.",
    fingerprintGood: "Jūsu pārlūks saplūst ar citiem, padarot pirkstu nospiedumu noteikšanu grūtāku.",
    fingerprintCritical: "Jūsu pārlūks ir unikāli identificējams. Apsveriet Firefox ar uzlabotu izsekošanas aizsardzību.",
    fingerprintUnknown: "Palaidiet EFF testu, lai pārbaudītu sava pārlūka pirkstu nospiedumu.",
    adsGood: "Esat atspējojis reklāmu personalizāciju savos kontos.",
    adsWarning: "Daļa reklāmu personalizācijas joprojām ir aktīva. Apsveriet atspējošanu konta iestatījumos.",
    adsCritical: "Reklāmu personalizācija ir aktīva. Jūsu aktivitāte tiek izmantota reklāmu mērķēšanai.",
    cleanupGood: "Esat notīrījis sīkfailus un iespējojis trešo pušu sīkfailu bloķēšanu. Tas liecina par samazinātu izsekošanas noturību.",
    cleanupWarning: "Esat veicis dažas tīrīšanas darbības. Apsveriet gan sīkfailu dzēšanu, gan bloķēšanu labākai aizsardzībai.",
    cleanupCritical: "Higiēnas darbības, piemēram, sīkfailu dzēšana un trešo pušu sīkfailu bloķēšana, palīdz samazināt izsekošanas noturību.",
  },
  chartCategories: {
    publicExposure: "Publiskā atpazīstamība",
    trackers: "Izsekotāji",
    fingerprint: "Pirkstu nospiedums",
    adSettings: "Reklāmu iestatījumi",
    cleanup: "Tīrīšana",
  },
  browserNames: {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari",
    other: "jūsu pārlūkprogramma",
    unknown: "jūsu pārlūkprogramma",
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
    viewReportCard: "Просмотреть отчёт",
    stepNumber: "Шаг {step}",
    commonPitfalls: "Частые ошибки",
    open: "Открыть",
    demo: "Демо",
    demoModeNotice: "Используются демо-данные. Включите \"Попробовать реальные инструменты\", чтобы открыть.",
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
      "Узнайте, что о вас видно в интернете, и научитесь защищать свою конфиденциальность.",
    safetyNote:
      "Только самопроверка: Ищите только свои идентификаторы или используйте режим вымышленной персоны. Мы никогда не спрашиваем ваше имя, email или телефон. Вы будете записывать только числа и ответы да/нет. Всё остаётся на вашем устройстве.",
    chooseMode: "Выберите, как вы хотите продолжить:",
    myFootprint: "Мой след",
    myFootprintDesc: "Проверьте своё реальное цифровое присутствие, выполняя поиск своего имени и используя реальные инструменты конфиденциальности. Вы узнаете, что действительно видно о вас в сети, и сможете выполнить конкретные действия по очистке. Лучший выбор, если вам нужны практические результаты о вашей личной конфиденциальности.",
    fictionalPersona: "Демо вымышленной персоны",
    fictionalPersonaDesc: "Пройдите процесс аудита с примерными данными без реального поиска. Отличный выбор для изучения работы инструментов, практики в группе или если вы на общем/рабочем компьютере и предпочитаете не искать личную информацию.",
    deviceLabel: "Устройство",
    osLabel: "ОС",
    browserLabel: "Браузер",
    consent:
      "Продолжая, вы подтверждаете, что это инструмент самопроверки. Мы не собираем и не передаём никаких личных идентификаторов. Все данные остаются на вашем устройстве.",
    optionalHelp: "Указав ваше устройство, ОС и браузер, мы сможем показать правильные инструкции по очистке cookies и настройке конфиденциальности именно для вашей конфигурации.",
    introParagraph: "Каждый раз, когда вы просматриваете интернет, вы оставляете следы — ваше имя в результатах поиска, трекеры, следящие за вами на разных сайтах, и уникальный отпечаток браузера, который вас идентифицирует. Эта практическая лаборатория поможет вам точно узнать, что о вас видно в сети, и даст инструменты для восстановления контроля над вашей конфиденциальностью.",
    whatToExpect: "Что вы будете делать",
    expectDescription: "В течение следующих 60 минут вы будете использовать бесплатные инструменты конфиденциальности для проверки своего цифрового присутствия. Вы поищете своё имя в интернете, просканируете сайты на скрытые трекеры, проверите, можно ли уникально идентифицировать ваш браузер, проверите настройки рекламы и выполните действия по очистке. В конце вы получите персонализированный отчёт с вашими результатами и рекомендуемыми следующими шагами.",
    expectTime: "60 минут",
    expectSteps: "5 этапов",
    expectTools: "Бесплатные инструменты",
    expectPrivacy: "100% локальные данные",
    privacyTitle: "Только самопроверка",
    privacyDescription: "Ваша конфиденциальность защищена на протяжении всего процесса. Вы будете искать только свою информацию, и мы никогда не спрашиваем ваше имя, email или личные данные. Всё, что вы вводите, остаётся на вашем устройстве — ничего никуда не отправляется.",
    beforeYouStart: "Перед началом",
    prepPoint1: "Подготовьте свои пароли — очистка cookies приведёт к выходу из всех сайтов",
    prepPoint2: "Используйте режим инкогнито/приватный режим, если работаете на общем компьютере",
    prepPoint3: "Выделите непрерывное время, чтобы сосредоточиться на каждом этапе",
    chooseYourPath: "Выберите свой путь",
    chooseYourPathDesc: "Вы можете либо проверить свой реальный цифровой след, либо попрактиковаться с примерными данными. Оба пути обучают одним и тем же понятиям — выбирайте в зависимости от того, готовы ли вы искать информацию о себе.",
    auditPurposeTitle: "Что поможет сделать этот аудит",
    auditPurposeDesc1: "Ваш цифровой след — это данные, которые вы оставляете в интернете: от результатов поиска с вашим именем до невидимых трекеров, следящих за вами на сайтах. Понимание этого следа — первый шаг к контролю над вашей конфиденциальностью.",
    auditPurposeDesc2: "В интернете есть много бесплатных инструментов, которые помогут увидеть, какие данные о вас собираются — но они разбросаны и разобраться в них самостоятельно непросто. Этот пошаговый аудит проведёт вас через самые важные из них, объясняя находки и возможные действия.",
    understandingOptionsTitle: "Ваши варианты",
    optionTableStarting: "Начальное состояние",
    optionTableTools: "Внешние инструменты",
    optionTableLearn: "Что вы узнаете",
    optionTableBestFor: "Лучше всего подходит",
    optionSelfStarting: "Пустой — вы вводите свои реальные находки",
    optionSelfTools: "Активные ссылки на Blacklight, EFF и др.",
    optionSelfLearn: "Реальные выводы о вашей конфиденциальности",
    optionSelfBestFor: "Для получения практических результатов",
    optionDemoStarting: "Заполнен примерными данными",
    optionDemoTools: "По умолчанию отключены (можно включить)",
    optionDemoLearn: "Как работает процесс на примерных данных",
    optionDemoBestFor: "Для обучения, групповых тренингов или общих компьютеров",
    privacyProtectedTitle: "Ваша конфиденциальность защищена",
    privacyProtectedIntro: "Это инструмент самопроверки. У нас нет серверов, аккаунтов и отслеживания.",
    privacyBullet1Title: "Ничего не покидает ваш браузер",
    privacyBullet1Desc: "Все ваши ответы хранятся только в локальном хранилище браузера на этом устройстве",
    privacyBullet2Title: "Данные не передаются",
    privacyBullet2Desc: "Мы не собираем, не храним и не отправляем никакую введённую вами информацию",
    privacyBullet3Title: "Вы контролируете удаление",
    privacyBullet3Desc: "Удалите все данные в любой момент с помощью кнопки сброса",
    privacyBullet4Title: "Внешние инструменты — ваш выбор",
    privacyBullet4Desc: "При переходе по ссылкам на инструменты вроде Blacklight или EFF эти сайты открываются в новых вкладках и не связаны с этим аудитом",
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
    educationalContent: {
      sectionTitle: "Понимание публичной доступности",
      industryTitle: "Индустрия стоимостью $323 миллиарда, торгующая вашей личностью",
      industryParagraph1: "Каждый раз, когда вы заполняли форму, регистрировались для голосования, покупали дом или просто существовали как гражданин, вы создавали точки данных. Чего вы, возможно, не знаете — это то, что огромная индустрия построила себя вокруг сбора, упаковки и продажи этой информации о вас.",
      industryParagraph2: "Индустрия брокеров данных оценивается в $323 миллиарда в 2024 году и, по прогнозам, почти удвоится до $697 миллиардов к 2034 году. Эти компании не просто имеют файл на вас — они хранят в среднем 1500 точек данных на человека. Один из крупнейших брокеров, Acxiom, хранит более 2,5 миллиарда записей потребителей по всему миру. Брокеры данных торгуют информацией о более чем 80% американских потребителей.",
      dataSourcesTitle: "Откуда берутся ваши данные?",
      dataSourcesParagraph: "Сайты поиска людей, такие как Spokeo, Whitepages и BeenVerified, не создают информацию о вас — они агрегируют её из источников, о которых вы и не подозревали:",
      dataSourcesList: [
        "Публичные записи: акты собственности, судебные документы, регистрации избирателей, свидетельства о браке, дела о банкротстве",
        "Коммерческие источники: кредитные заявки, автокредиты, договоры аренды, записи коммунальных служб, и даже некоторые DMV штатов, продающие регистрационные данные",
        "Социальные сети: любой профиль, который вы когда-либо сделали публичным, даже ненадолго",
        "Другие брокеры данных: эти компании перекрёстно проверяют и продают данные друг другу, создавая взаимосвязанную сеть"
      ],
      dataSourcesConclusion: "Ключевой вывод в том, что эти данные не обязательно были «утечкой» — большая часть всегда была технически публичной. Разница в том, что компании автоматизировали сбор и сделали всю вашу жизнь доступной для поиска за секунды. То, что раньше требовало частного детектива и недель работы, теперь занимает около 30 секунд у любого с доступом в интернет.",
      meaningTitle: "Что это значит для вас",
      meaningParagraph: "Когда незнакомец, потенциальный работодатель, бывший партнёр или мошенник ищет ваше имя, они потенциально могут найти:",
      meaningList: [
        "Ваши текущие и предыдущие адреса",
        "Номера телефонов (включая те, которые вы считали приватными)",
        "Адреса электронной почты",
        "Имена ваших родственников и знакомых",
        "Ваш примерный возраст и дату рождения",
        "Владение недвижимостью и её оценочную стоимость",
        "Судебные записи и правовую историю"
      ],
      activityPreview: "Упражнение, которое вы сейчас выполните, покажет вам точно, что можно обнаружить о вас. Для многих людей это открытие глаз — не потому, что они сделали что-то неправильно, а потому, что они не представляли, сколько их жизни каталогизировано и выставлено на продажу."
    },
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
    educationalContent: {
      sectionTitle: "Понимание веб-отслеживания",
      introTitle: "Что происходит в первую секунду посещения сайта",
      introParagraph1: "Когда вы нажимаете на ссылку для посещения сайта, нечто невидимое происходит ещё до того, как страница закончит загрузку. Выполняются скрипты, открываются соединения с десятками сторонних серверов, и данные о вас начинают течь в разных направлениях. Это происходит так быстро, что вы никогда не заметите — но это происходит почти на каждом сайте, который вы посещаете.",
      introParagraph2: "Исследования показывают, что 90% сайтов включают хотя бы один отслеживающий скрипт, а средний сайт имеет 48 трекеров. Социальные сети — худшие нарушители, в среднем 28 трекеров на сайт — а в некоторых регионах, как Гонконг, это число достигает 169 трекеров на одном сайте социальной сети. Трекеры Google присутствуют на 74% всего веб-трафика, Facebook составляет ещё 11%. Типичный пользователь сталкивается примерно с 177 разными трекерами каждую неделю.",
      trackingTypesTitle: "Семь типов отслеживания, которые вы обнаружите",
      trackingTypesIntro: "Инструмент, который вы собираетесь использовать (Blacklight, созданный The Markup), покажет, что на самом деле происходит за кулисами:",
      trackingTypes: {
        adTrackers: { title: "Рекламные трекеры", description: "Они отправляют информацию о вашем визите рекламным сетям. Они строят профиль ваших интересов на основе каждого сайта, который вы посещаете, каждого продукта, который вы смотрите, и того, сколько времени вы проводите на каждой странице." },
        thirdPartyCookies: { title: "Сторонние куки", description: "В отличие от куки с сайта, который вы посещаете, они приходят с внешних доменов. Вот как это работает: вы посещаете интернет-магазин обуви, и куки от рекламной сети (назовём её \"adtracker.com\") помещается в ваш браузер. Позже вы посещаете новостной сайт, который тоже использует adtracker.com. Та же куки считывается, и теперь рекламная сеть знает, что вы искали обувь. Вот почему вы видите рекламу обуви, следующую за вами по интернету." },
        sessionRecording: { title: "Запись сессий", description: "Это более инвазивно, чем вы могли ожидать. Инструменты записи сессий создают видеоподобную реконструкцию всего, что вы делаете на странице — ваши движения мыши, где вы останавливаетесь, что вы нажимаете, как вы прокручиваете. Компании вроде Hotjar и FullStory продают эти услуги, и тысячи сайтов их используют. Запись показывает именно то, что вы видели и делали, воспроизведённое как фильм." },
        keystrokeLogging: { title: "Запись нажатий клавиш", description: "Некоторые отслеживающие скрипты записывают то, что вы вводите в формы — иногда даже до того, как вы нажмёте кнопку отправки. Это в основном используется для захвата частично заполненных форм, но это означает, что ваши нажатия клавиш передаются на серверы по мере ввода." },
        canvasFingerprinting: { title: "Canvas-отпечатки", description: "Вашему браузеру можно предложить нарисовать невидимое изображение. Из-за тонких различий в том, как именно ваше оборудование и программное обеспечение отображают графику, это изображение слегка отличается от почти всех остальных. Это создаёт идентификатор, который работает, даже если вы блокируете куки." },
        facebookPixel: { title: "Пиксель Facebook", description: "Даже если вы не залогинены в Facebook, и даже если у вас нет аккаунта Facebook, многие сайты отправляют данные о вашем визите в Facebook через встроенный отслеживающий пиксель." },
        googleAnalytics: { title: "Google Analytics", description: "Присутствует на большинстве сайтов, Google Analytics отслеживает посетителей и делится данными с рекламной экосистемой Google." }
      },
      beyondAdsTitle: "Почему это важно помимо рекламы",
      beyondAdsParagraph: "Вы можете подумать: «Ну и что? Я просто получаю более релевантную рекламу.» Но отслеживание имеет последствия за пределами рекламы:",
      beyondAdsList: [
        "Ценовая дискриминация: некоторые магазины показывают разные цены в зависимости от вашей истории просмотров или предполагаемого уровня дохода",
        "Страхование и трудоустройство: брокеры данных продают поведенческие профили, которые могут влиять на кредитные решения, страховые ставки и даже найм на работу",
        "Постоянство профиля: поведенческие профили, построенные на данных отслеживания, сохраняются годами и продаются между компаниями",
        "Риск безопасности: каждая компания, хранящая данные о вас — потенциальная цель для утечки"
      ],
      activityPreview: "Упражнение, которое вы сейчас выполните, позволит вам просканировать сайт, который вы реально посещаете, и увидеть точно, какое отслеживание происходит. Многие люди шокированы количеством и типами трекеров на их любимых сайтах."
    },
    externalTool: "Внешний инструмент",
    blacklightTip: "Совет: Попробуйте сканировать новостной или интернет-магазин, который вы часто посещаете. Избегайте чувствительных сайтов, таких как медицинские порталы или банки.",
    recordFindings: "Запишите свои находки",
    blacklightRunQuestion: "Запускали ли вы сканирование Blacklight?",
    siteCategoryQuestion: "Какой тип сайта вы сканировали?",
    trackerCountQuestion: "Сколько трекеров было обнаружено?",
    trackerCountHelper: "Введите число, показанное в сводке Blacklight. 0-5 трекеров - относительно мало, 6-15 типично для коммерческих сайтов, 16+ указывает на интенсивное отслеживание.",
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
    educationalContent: {
      sectionTitle: "Понимание отпечатков браузера",
      introTitle: "Метод отслеживания, который нельзя заблокировать очисткой куки",
      introParagraph: "Вы, вероятно, слышали, что очистка куки помогает защитить вашу конфиденциальность. И это так — для одного типа отслеживания. Но есть другой метод, который вообще не требует хранения чего-либо на вашем устройстве. Это называется отпечаток браузера, и исследования показывают, что он может уникально идентифицировать 83-90% браузеров.",
      howItWorksTitle: "Как ваш браузер выдаёт вашу личность",
      howItWorksParagraph: "Отпечаток браузера работает путём сбора десятков мелких деталей о вашем устройстве и браузере, которые вместе создают уникальную подпись. Подумайте об этом так: любая отдельная характеристика может быть общей, но конкретная комбинация 20 или 30 характеристик вместе, вероятно, уникальна для вас. Вот что собирается:",
      attributesList: [
        "Разрешение экрана и глубина цвета: точные размеры пикселей вашего дисплея",
        "Часовой пояс и язык: ваше местоположение и языковые предпочтения",
        "Установленные шрифты: конкретная комбинация шрифтов в вашей системе очень характерна",
        "Плагины браузера: какие расширения и их версии у вас установлены",
        "Технические характеристики: детали о вашей видеокарте, процессоре и доступной памяти",
        "WebGL-рендеринг: вашему браузеру можно предложить нарисовать 3D-графику, и микроскопические различия в том, как ваше оборудование её отображает, создают уникальную подпись",
        "Аудио-отпечатки: похожая техника с использованием обработки звука",
        "Canvas-отпечатки: рисование невидимого 2D-изображения для идентификации различий рендеринга"
      ],
      statisticsTitle: "Цифры впечатляют",
      statisticsParagraph: "Electronic Frontier Foundation (EFF) продемонстрировала, что распределение отпечатков имеет как минимум 18,1 бит энтропии, что означает, что у среднего пользователя только 1 шанс из 286 777 совпасть отпечатком с другим пользователем. Исследование AmIUnique 2016 года показало, что 89,4% отпечатков уникальны. Даже более консервативное исследование 2018 года показало, что 33,6% отпечатков полностью уникальны, а на настольных компьютерах уровень уникальности остаётся очень высоким.",
      privateBrowsingTitle: "Почему приватный просмотр здесь не помогает",
      privateBrowsingParagraph1: "Когда вы открываете окно инкогнито или приватного просмотра, ваш браузер не сохраняет куки или историю. Но он не меняет разрешение экрана, шрифты, видеокарту или часовой пояс. Ваш отпечаток в приватном режиме часто идентичен отпечатку в обычном режиме — что означает, что сайты всё ещё могут вас узнать.",
      privateBrowsingParagraph2: "Некоторые браузеры, ориентированные на конфиденциальность, такие как Firefox и Brave, внедрили защиту от отпечатков, которая либо блокирует определённые методы сбора, либо намеренно предоставляет общие ответы.",
      activityPreview: "Тест, который вы сейчас запустите, покажет: (1) является ли отпечаток вашего браузера уникальным (что означает, что вас можно идентифицировать), (2) насколько сильна ваша защита от отслеживания, и (3) какие конкретные характеристики делают вас наиболее идентифицируемым. Для многих людей открытие того, что их браузер так же уникален, как отпечаток пальца — даже без куки — становится сигналом о том, насколько изощрённым стало современное отслеживание."
    },
    externalTools: "Внешние инструменты",
    whatToLookFor: "На что обратить внимание",
    effRunQuestion: "Запускали ли вы тест EFF Cover Your Tracks?",
    browserUniqueQuestion: "Показывает ли тест, что отпечаток вашего браузера уникален?",
    browserUniqueHelper: "Если ваш отпечаток 'уникален', сайты могут идентифицировать вас даже без cookies. Приватные браузеры или расширения типа Privacy Badger могут помочь уменьшить уникальность.",
    trackingProtectionQuestion: "Какой уровень защиты от отслеживания показал тест?",
    trackingProtectionHelper: "Это показывает, насколько хорошо ваш браузер блокирует известные трекеры",
  },
  accountDevice: {
    title: "Идентификаторы аккаунта и устройства",
    concept: "Отслеживание также происходит на уровне аккаунта/устройства через настройки персонализации рекламы, ID устройств и разрешения на отслеживание приложений.",
    whyItMatters: "Даже если вы блокируете трекеры сайтов, ваши аккаунты и устройства всё ещё могут делиться данными с рекламодателями через встроенные идентификаторы, которые следуют за вами между приложениями и сервисами.",
    educationalContent: {
      sectionTitle: "Понимание мобильного отслеживания и отслеживания аккаунтов",
      introTitle: "Идентификаторы, которые следуют за вами через каждое приложение",
      introParagraph: "Отслеживание сайтов использует куки. Но что насчёт приложений на вашем телефоне? Приложения не могут читать куки друг друга — они изолированы для безопасности. Так как же рекламодатели отслеживают вас между приложениями? Ответ — специальный идентификатор, встроенный в операционную систему вашего устройства: Google Advertising ID (GAID) на Android и Identifier for Advertisers (IDFA) на устройствах Apple.",
      howItWorksTitle: "Как работают мобильные рекламные идентификаторы",
      howItWorksParagraph: "Когда вы установили операционную систему телефона, она сгенерировала уникальный рекламный ID — строку букв и цифр, которая идентифицирует ваше устройство. Этот ID доступен каждому приложению, которое вы устанавливаете, и он создан специально для обеспечения рекламы и отслеживания. Вот что это позволяет:",
      howItWorksList: [
        "Вы ищете авиабилеты в одном приложении → Вы видите рекламу отелей в совершенно другом приложении",
        "Вы просматриваете товары в приложении магазина → Вы видите рекламу этих товаров в социальных сетях",
        "Вы играете в бесплатную игру → Игра делится вашей активностью с рекламными сетями, привязанными к вашему рекламному ID",
        "Ваши данные о местоположении, паттерны использования приложений и поведенческий профиль — всё связано с этим единственным идентификатором"
      ],
      scaleTitle: "Масштаб мобильного отслеживания",
      scaleParagraph: "В отличие от куки, ваш рекламный ID следует за вами по всей экосистеме приложений — игры, социальные сети, новостные приложения, утилиты, всё. Поскольку он постоянен, компании могут строить всеобъемлющий профиль всего, что вы делаете на телефоне в течение месяцев или лет. Брокеры данных и рекламные сети используют эти идентификаторы для отслеживания вашего физического местоположения во времени, построения поведенческих профилей на основе использования приложений, связывания активности приложений с веб-сёрфингом через кросс-девайсное отслеживание и продажи этих данных рекламодателям, аналитическим компаниям и, всё чаще, любому, кто готов платить.",
      attTitle: "App Tracking Transparency от Apple изменила игру",
      attParagraph1: "В 2021 году Apple представила App Tracking Transparency (ATT), которая требует от приложений спрашивать разрешение перед доступом к вашему IDFA. Вы, вероятно, видели всплывающее окно: «Разрешить этому приложению отслеживать вашу активность в приложениях и на сайтах других компаний?» Это было значимо: до ATT приложения получали доступ к вашему IDFA автоматически без запроса.",
      attParagraph2: "После ATT пользователи должны были явно согласиться. Текущая статистика показывает, что глобально около 50% пользователей теперь соглашаются на отслеживание — это означает, что 50% отказываются. Это единственное изменение стоило рекламной индустрии миллиардов долларов потерянных возможностей таргетирования. Google следует этому примеру, планируя заменить GAID более приватными альтернативами.",
      activityPreviewTitle: "Что вы проверите в этом упражнении",
      activityPreviewList: [
        "Персонализация рекламы Google: строит ли Google профиль ваших интересов по всем сервисам Google",
        "Реклама Apple: использует ли Apple ваши данные для таргетированной рекламы в своей экосистеме",
        "Рекламный ID Android: вы можете сбросить (получить новый ID) или удалить его полностью",
        "iOS App Tracking Transparency: могут ли приложения вообще запрашивать отслеживание"
      ],
      activityPreviewConclusion: "Многие люди обнаруживают, что персонализация рекламы была включена по умолчанию годами, создавая детальный профиль, о существовании которого они не знали."
    },
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
    educationalContent: {
      sectionTitle: "Почему цифровая гигиена важна",
      breachesTitle: "1,7 миллиарда причин практиковать хорошую цифровую гигиену",
      breachesParagraph1: "Только в 2024 году 1,7 миллиарда человек имели свои персональные данные скомпрометированными в утечках данных. Крупнейшая единичная утечка — в National Public Data — раскрыла персональную информацию примерно 2,9 миллиарда записей, включая номера социального страхования, адреса и даты рождения граждан США, Канады и Великобритании.",
      breachesParagraph2: "Вот что делает это особенно отрезвляющим: утечки Ticketmaster, Advance Auto Parts, Change Healthcare и AT&T — которые вместе раскрыли более 1,24 миллиарда записей — все произошли потому, что хакеры получили доступ, используя скомпрометированные учётные данные для аккаунтов, на которых не была включена многофакторная аутентификация. Это было предотвратимо.",
      cookiesTitle: "Почему куки важны для вашей безопасности",
      cookiesParagraph: "Куки — это не только о рекламе, они также являются способом, которым сайты помнят, что вы залогинены. Когда вы посещаете почту или банк и вам не нужно повторно вводить пароль, куки — это то, что доказывает сайту, что вы уже аутентифицировались. Это удобно, но имеет последствия:",
      cookiesList: [
        "Если кто-то получит доступ к вашему браузеру, он получит доступ к вашим залогиненным аккаунтам",
        "Перехват сессии: если злоумышленник захватит ваши куки (через вредоносное ПО, небезопасный WiFi или скомпрометированный сайт), он сможет выдать себя за вас, не зная пароля",
        "Долгоживущие сессии: некоторые куки сохраняются месяцами или годами, что означает, что единственная компрометация имеет длительное окно уязвимости"
      ],
      blockingTitle: "Блокировка сторонних куки: самая эффективная настройка",
      blockingParagraph1: "Если есть одна настройка конфиденциальности, которая даёт максимальную защиту при минимальных неудобствах, это блокировка сторонних куки. Куки первой стороны приходят с сайта, который вы посещаете (они необходимы для входа и использования сайта). Сторонние куки приходят с внешних доменов и используются почти исключительно для межсайтового отслеживания.",
      blockingParagraph2: "Современные браузеры обрабатывают это по-разному:",
      blockingBrowsers: [
        "Firefox: использует «Total Cookie Protection» для изоляции сторонних куки по сайтам",
        "Safari: блокирует сторонние куки по умолчанию через «Prevent Cross-Site Tracking»",
        "Chrome: всё ещё разрешает сторонние куки по умолчанию (Google отменил планы по их отмене)",
        "Включение этой настройки ломает межсайтовое отслеживание, не влияя на вашу способность использовать сайты нормально"
      ],
      hibpTitle: "Have I Been Pwned: проверка реальности",
      hibpParagraph1: "Необязательное упражнение на этом этапе — проверка Have I Been Pwned — это момент истины для большинства людей. Этот сервис, управляемый исследователем безопасности Троем Хантом, агрегирует данные из 936 известных утечек, содержащих более 17 миллиардов скомпрометированных записей аккаунтов.",
      hibpParagraph2: "Когда вы вводите свой email, он проверяет, появлялся ли этот email в какой-либо известной утечке данных. Для большинства людей, у которых email был более нескольких лет, ответ — да, часто в нескольких утечках. Вот почему гигиена паролей важна: уникальные пароли для каждого аккаунта, в идеале управляемые менеджером паролей, и многофакторная аутентификация везде, где она доступна.",
      activityPreviewTitle: "Что вы сейчас сделаете",
      activityPreviewList: [
        "Очистить куки и данные сайтов: удалить существующие трекеры и заставить заново аутентифицироваться",
        "Заблокировать сторонние куки: предотвратить будущее межсайтовое отслеживание",
        "Проверить подверженность утечкам: узнать, были ли ваши учётные данные скомпрометированы",
        "Спланировать действия по гигиене паролей: обновить скомпрометированные пароли, включить MFA"
      ],
      activityPreviewConclusion: "К тому времени, когда вы завершите этот этап, вы предпримете конкретные действия, которые значимо уменьшат вашу подверженность отслеживанию и улучшат безопасность аккаунтов. Это не теоретические преимущества — это немедленные, измеримые улучшения вашей цифровой конфиденциальности."
    },
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
  instructions: {
    whatToDo: "Что делать",
    publicExposure1: "Поищите своё имя (в кавычках) в Google и посчитайте, сколько страниц результатов показывают личную информацию, такую как адрес или телефон",
    publicExposure2: "Проверьте, появляетесь ли вы на сайтах поиска людей (таких как Spokeo, WhitePages или BeenVerified)",
    publicExposure3: "Запишите свои находки ниже, затем перейдите к следующему шагу",
    trackers1: "Откройте Blacklight и введите сайт, который вы часто посещаете (напр., новостной или интернет-магазин)",
    trackers2: "Изучите, что находит инструмент: трекеры, куки, записыватели сессий и отпечатки",
    trackers3: "Запишите количество трекеров и любые тревожные находки ниже",
    fingerprinting1: "Нажмите на ссылку, чтобы открыть тест EFF Cover Your Tracks",
    fingerprinting2: "Запустите тест и отметьте, уникален ли отпечаток вашего браузера",
    fingerprinting3: "Проверьте уровень защиты от отслеживания и запишите результаты ниже",
    accountDevice1: "Проверьте настройки рекламы Google и отметьте, включена или выключена персонализированная реклама",
    accountDevice2: "Проверьте настройки рекламы Apple/Android на вашем устройстве (если применимо)",
    accountDevice3: "Запишите свои текущие настройки ниже - вы можете изменить их позже, если захотите",
    cleanup1: "Очистите куки и данные сайтов, используя предоставленные инструкции для браузера",
    cleanup2: "Включите блокировку сторонних куки в настройках браузера",
    cleanup3: "При желании проверьте Have I Been Pwned на наличие утечек email",
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
  externalTools: {
    googleResultsTitle: "Google 'Результаты о вас'",
    googleResultsDesc: "Посмотрите, какую личную информацию Google нашёл о вас в результатах поиска. Требуется аккаунт Google и может быть недоступно в некоторых регионах - если недоступно, поищите своё имя вручную в кавычках.",
    findContactTitle: "Найти сайты с контактной информацией",
    findContactDesc: "Ищите своё имя в кавычках плюс город/область, чтобы найти списки поиска людей",
    requestRemovalTitle: "Запросить удаление",
    requestRemovalDesc: "Большинство сайтов поиска людей имеют страницы отказа. Ищите '[название сайта] удалить данные' или 'отказаться', чтобы их найти",
    blacklightTitle: "Blacklight от The Markup",
    blacklightDesc: "Введите любой URL сайта, чтобы увидеть, какие трекеры, куки и записыватели сессий он использует",
    effCoverTracksTitle: "EFF Cover Your Tracks",
    effCoverTracksDesc: "Проверьте, насколько уникален отпечаток вашего браузера и насколько хорошо вы защищены от отслеживания",
    effExplainerTitle: "Понимание цифровых отпечатков",
    effExplainerDesc: "Узнайте больше о том, как работают отпечатки браузера и почему это важно",
    googleAdSettingsTitle: "Настройки рекламы Google",
    googleAdSettingsDesc: "Просматривайте и контролируйте, как Google персонализирует рекламу на основе вашей активности",
    appleAdsTitle: "Настройки рекламы Apple",
    appleAdsDesc: "Настройки > Конфиденциальность и безопасность > Реклама Apple",
    androidAdIdTitle: "Рекламный ID Android",
    androidAdIdDesc: "Настройки > Конфиденциальность > Реклама > Сбросить или удалить рекламный ID",
    iosAttTitle: "Прозрачность отслеживания приложений iOS",
    iosAttDesc: "Настройки > Конфиденциальность и безопасность > Отслеживание",
    clearCookiesTitle: "Очистить куки и данные сайтов",
    clearCookiesDesc: "Удалите сохранённые данные отслеживания из браузера",
    blockCookiesTitle: "Блокировать сторонние куки",
    blockCookiesDesc: "Предотвратите сохранение межсайтовых отслеживающих куки",
    hibpTitle: "Have I Been Pwned",
    hibpDesc: "Проверьте, появлялся ли ваш email в известных утечках данных",
    stepsForBrowser: "Пошаговые инструкции для {browser}",
  },
  badges: {
    optional: "Необязательно",
  },
  nextActions: {
    skippedStep: "Вы пропустили \"{stepName}\". Завершите этот раздел, когда у вас будет время.",
    requestGoogleRemoval: "Запросите удаление вашей личной информации из результатов поиска Google, используя инструмент 'Результаты о вас'.",
    optOutPeopleSearch: "Удалите вашу информацию с сайтов поиска людей. Посетите сайт органа защиты данных, чтобы узнать больше о ваших правах.",
    installContentBlocker: "Установите надёжный блокировщик контента, например uBlock Origin, чтобы уменьшить воздействие трекеров.",
    fingerprintingRisk: "Ваш браузер уникально идентифицируем. Узнайте больше о цифровых отпечатках на eff.org/pages/cover-your-tracks и попробуйте Firefox с усиленной защитой от отслеживания в режиме 'Строгий'.",
    turnOffGoogleAds: "Отключите персонализированную рекламу в настройках рекламного центра Google.",
    clearCookies: "Очистите куки и данные сайтов в браузере, чтобы удалить существующие трекеры.",
    enableCookieBlocking: "Включите блокировку сторонних куки в настройках браузера.",
    checkHibp: "Проверьте Have I Been Pwned (haveibeenpwned.com), чтобы узнать, был ли ваш email в утечках данных, и подпишитесь на уведомления на haveibeenpwned.com/NotifyMe.",
    allDone: "Отличная работа! Рекомендуем провести этот аудит снова через несколько месяцев, чтобы следить за своим цифровым следом.",
  },
  footer: {
    privacyNotice: "Ваши данные остаются на этом устройстве. Мы никогда не собираем и не передаём личную информацию.",
  },
  realityCheckItems: {
    snapshot: "Это снимок, а не полная перепись вашего цифрового следа.",
    variesByLocation: "Результаты зависят от страны, языка и сети, к которой вы подключены.",
    personalization: "Персонализация поиска означает, что другие могут видеть другие результаты о вас.",
    changesOverTime: "Ваш цифровой след меняется со временем по мере сбора и обмена новыми данными.",
    dataOnDevice: "Все данные остаются на вашем устройстве. Этот мастер никогда не собирает, не хранит и не передаёт личную информацию.",
  },
  skippedSections: {
    title: "Пропущенные разделы",
    description: "Вы пропустили следующие разделы. Заполните их позже, чтобы получить более точную картину вашего цифрового следа.",
  },
  printInfo: {
    generated: "Создано",
    dataStoredLocally: "Все данные хранятся только локально",
  },
  charts: {
    radarView: "Радарный вид",
    scoreComparison: "Сравнение баллов",
    privacyScore: "Оценка приватности",
  },
  metrics: {
    publicExposureLabel: "Публичная видимость",
    trackingIntensityLabel: "Интенсивность отслеживания",
    fingerprintLabel: "Уникальность отпечатка",
    adSettingsLabel: "Реклама в аккаунтах/устройствах",
    cleanupLabel: "Очистка завершена",
    valueLow: "Низкая",
    valuePages: "{count, plural, one {# страница} few {# страницы} many {# страниц} other {# страниц}}",
    valueUnique: "Уникален",
    valueNotUnique: "Не уникален",
    valueUnknown: "Неизвестно",
    valueLimited: "Ограничена",
    valueActive: "Активна",
    valueCheckSettings: "Проверить настройки",
    valueDone: "Выполнено",
    valuePartial: "Частично",
    valueNotYet: "Ещё нет",
    valueNA: "Н/Д",
    exposureGood: "Отлично! Ваша личная информация не была легко найдена в результатах поиска.",
    exposureWarning: "Часть личной информации видна. Рассмотрите возможность запроса на удаление из поисковых систем.",
    exposureCritical: "Ваша личная информация открыта. Примите меры для удаления её из баз данных и результатов поиска.",
    trackingGood: "На просканированном сайте мало трекеров. Это лучше среднего.",
    trackingWarning: "Обнаружено умеренное отслеживание. Рассмотрите использование блокировщика контента.",
    trackingCritical: "Высокое количество трекеров. Этот сайт активно монетизирует ваше внимание.",
    trackingUnknown: "Запустите сканирование Blacklight, чтобы увидеть количество трекеров.",
    fingerprintGood: "Ваш браузер сливается с другими, что затрудняет снятие отпечатка.",
    fingerprintCritical: "Ваш браузер уникально идентифицируем. Рассмотрите использование Firefox с улучшенной защитой от отслеживания.",
    fingerprintUnknown: "Запустите тест EFF, чтобы проверить отпечаток вашего браузера.",
    adsGood: "Вы отключили персонализацию рекламы в своих аккаунтах.",
    adsWarning: "Часть персонализации рекламы всё ещё активна. Рассмотрите отключение в настройках аккаунта.",
    adsCritical: "Персонализация рекламы активна. Ваша активность используется для таргетирования рекламы.",
    cleanupGood: "Вы очистили cookies и включили блокировку сторонних cookies. Это говорит о сниженной устойчивости отслеживания.",
    cleanupWarning: "Вы выполнили некоторые действия по очистке. Рассмотрите и очистку cookies, и блокировку для лучшей защиты.",
    cleanupCritical: "Гигиенические действия, такие как очистка cookies и блокировка сторонних cookies, помогают снизить устойчивость отслеживания.",
  },
  chartCategories: {
    publicExposure: "Публичная видимость",
    trackers: "Трекеры",
    fingerprint: "Отпечаток",
    adSettings: "Настройки рекламы",
    cleanup: "Очистка",
  },
  browserNames: {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari",
    other: "ваш браузер",
    unknown: "ваш браузер",
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
  // Fallback chain: user preference → English (default)
  // Users can select other languages (Latvian, Russian) if desired
  const stored = localStorage.getItem("footprintWizard:locale");
  if (stored && stored in allTranslations) {
    return stored as Locale;
  }
  
  // Default to English
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
