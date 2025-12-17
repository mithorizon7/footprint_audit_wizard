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
    whatYoullLearn: string;
    learnPoint1: string;
    learnPoint2: string;
    learnPoint3: string;
    learnPoint4: string;
    whatToExpect: string;
    expectTime: string;
    expectSteps: string;
    expectTools: string;
    expectPrivacy: string;
    beforeYouStart: string;
    prepPoint1: string;
    prepPoint2: string;
    prepPoint3: string;
    chooseYourPath: string;
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
    myFootprintDesc: "Search your own name and record real findings from live tools",
    fictionalPersona: "Fictional Persona Demo",
    fictionalPersonaDesc: "Learn the process with prefilled example data (no real searches)",
    deviceLabel: "Device",
    osLabel: "OS",
    browserLabel: "Browser",
    consent:
      "By continuing, you acknowledge this is a self-audit tool. We do not collect or transmit any personal identifiers. All data stays on your device.",
    optionalHelp: "Optional: Help us show relevant instructions",
    whatYoullLearn: "What You'll Learn",
    learnPoint1: "How much personal info appears when someone searches your name",
    learnPoint2: "Which websites track your browsing behavior",
    learnPoint3: "Whether your browser can be uniquely identified (fingerprinted)",
    learnPoint4: "How to take practical steps to reduce your digital footprint",
    whatToExpect: "What to Expect",
    expectTime: "About 60 minutes to complete",
    expectSteps: "5 guided steps plus a personalized report",
    expectTools: "You'll use free, trusted privacy tools (links provided)",
    expectPrivacy: "All your data stays on your device - nothing is sent to us",
    beforeYouStart: "Before You Start",
    prepPoint1: "Have your passwords ready - clearing cookies will log you out of sites",
    prepPoint2: "Use an incognito/private window if you're on a shared computer",
    prepPoint3: "Set aside uninterrupted time to focus on each step",
    chooseYourPath: "Choose Your Path",
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
    googleResultsDesc: "See what personal information Google has found about you in search results",
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
      "Tikai pašnovērtējums: Meklējiet tikai savus identifikatorus vai izmantojiet fiktīvās personas režīmu. Mēs nekad neprasām jūsu vārdu, e-pastu vai tālruņa numuru. Jūs ierakstīsiet tikai skaitļus un jā/nē atbildes. Viss paliek jūsu ierīcē.",
    chooseMode: "Izvēlieties, kā vēlaties turpināt:",
    myFootprint: "Mana pēda",
    myFootprintDesc: "Meklējiet savu vārdu un ierakstiet reālus rezultātus no tiešiem rīkiem",
    fictionalPersona: "Fiktīvās personas demo",
    fictionalPersonaDesc: "Iemācieties procesu ar iepriekš aizpildītiem piemēra datiem (bez reālām meklēšanām)",
    deviceLabel: "Ierīce",
    osLabel: "OS",
    browserLabel: "Pārlūkprogramma",
    consent:
      "Turpinot, jūs atzīstat, ka šis ir pašnovērtējuma rīks. Mēs nevācam un nepārsūtām nekādus personīgos identifikatorus. Visi dati paliek jūsu ierīcē.",
    optionalHelp: "Neobligāti: Palīdziet mums parādīt atbilstošas instrukcijas",
    whatYoullLearn: "Ko jūs uzzināsiet",
    learnPoint1: "Cik daudz personīgās informācijas parādās, kad kāds meklē jūsu vārdu",
    learnPoint2: "Kuras tīmekļa vietnes izseko jūsu pārlūkošanas aktivitāti",
    learnPoint3: "Vai jūsu pārlūkprogrammu var unikāli identificēt (pirkstu nospiedumu veidošana)",
    learnPoint4: "Kā veikt praktiskus soļus, lai samazinātu savu digitālo pēdu",
    whatToExpect: "Ko sagaidīt",
    expectTime: "Aptuveni 60 minūtes, lai pabeigtu",
    expectSteps: "5 vadīti soļi plus personalizēta atskaite",
    expectTools: "Jūs izmantosiet bezmaksas, uzticamus privātuma rīkus (saites sniegtas)",
    expectPrivacy: "Visi jūsu dati paliek jūsu ierīcē - nekas netiek sūtīts mums",
    beforeYouStart: "Pirms sākat",
    prepPoint1: "Sagatavojiet savas paroles - sīkdatņu dzēšana jūs izrakstīs no vietnēm",
    prepPoint2: "Izmantojiet inkognito/privāto logu, ja esat koplietotā datorā",
    prepPoint3: "Atvēliet nepārtrauktu laiku, lai koncentrētos uz katru soli",
    chooseYourPath: "Izvēlieties savu ceļu",
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
    googleResultsDesc: "Skatiet, kādu personīgo informāciju Google ir atradis par jums meklēšanas rezultātos",
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
    myFootprintDesc: "Искать своё имя и записывать реальные результаты из живых инструментов",
    fictionalPersona: "Демо вымышленной персоны",
    fictionalPersonaDesc: "Изучите процесс с предзаполненными примерами (без реального поиска)",
    deviceLabel: "Устройство",
    osLabel: "ОС",
    browserLabel: "Браузер",
    consent:
      "Продолжая, вы подтверждаете, что это инструмент самопроверки. Мы не собираем и не передаём никаких личных идентификаторов. Все данные остаются на вашем устройстве.",
    optionalHelp: "Необязательно: Помогите нам показать подходящие инструкции",
    whatYoullLearn: "Что вы узнаете",
    learnPoint1: "Сколько личной информации появляется при поиске вашего имени",
    learnPoint2: "Какие сайты отслеживают вашу активность в браузере",
    learnPoint3: "Можно ли уникально идентифицировать ваш браузер (цифровой отпечаток)",
    learnPoint4: "Как предпринять практические шаги для уменьшения цифрового следа",
    whatToExpect: "Чего ожидать",
    expectTime: "Около 60 минут на выполнение",
    expectSteps: "5 пошаговых этапов плюс персонализированный отчёт",
    expectTools: "Вы будете использовать бесплатные, надёжные инструменты конфиденциальности (ссылки предоставлены)",
    expectPrivacy: "Все ваши данные остаются на вашем устройстве - ничего не отправляется нам",
    beforeYouStart: "Перед началом",
    prepPoint1: "Подготовьте свои пароли - очистка cookies приведёт к выходу из сайтов",
    prepPoint2: "Используйте режим инкогнито/приватный режим на общем компьютере",
    prepPoint3: "Выделите непрерывное время для сосредоточения на каждом этапе",
    chooseYourPath: "Выберите свой путь",
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
    googleResultsDesc: "Посмотрите, какую личную информацию Google нашёл о вас в результатах поиска",
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
