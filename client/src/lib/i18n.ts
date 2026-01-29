export type Locale = 'en' | 'lv' | 'ru';

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
    unknown: string;
    skipped: string;
    viewReportCard: string;
    stepNumber: string;
    commonPitfalls: string;
    open: string;
    demo: string;
    demoModeNotice: string;
    estimatedTime: string;
    onTrack: string;
  };
  accessibility: {
    languageSelector: string;
    switchTheme: string;
    darkMode: string;
    lightMode: string;
    decrease: string;
    increase: string;
    close: string;
    previousSlide: string;
    nextSlide: string;
    toggleSidebar: string;
    sidebarTitle: string;
    sidebarDescription: string;
    breadcrumbMore: string;
    breadcrumbLabel: string;
  };
  pagination: {
    ariaLabel: string;
    previous: string;
    next: string;
    more: string;
    previousAria: string;
    nextAria: string;
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
    beforeYouStartSummaryTitle: string;
    beforeYouStartSummaryDo: string;
    beforeYouStartSummaryNeed: string;
    beforeYouStartSummarySafety: string;
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
    summaryPrefix: string;
    nextActions: string;
    downloadFilename: string;
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
    saveExportCallout: string;
  };
  facilitatorDashboard: {
    title: string;
    subtitle: string;
    loading: string;
    loadError: string;
    retry: string;
    liveUpdates: string;
    refresh: string;
    totalSessions: string;
    completed: string;
    completionRate: string;
    avgTrackersFound: string;
    avgPrivacyScores: string;
    deviceBreakdown: string;
    noDeviceData: string;
    sessionsOverTime: string;
    noSessionData: string;
    privacyNotice: string;
  };
  notFound: {
    title: string;
    description: string;
  };
  panic: {
    buttonLabel: string;
    title: string;
    description: string;
    confirmButton: string;
    toastTitle: string;
    toastDescription: string;
  };
  sessionRecovery: {
    title: string;
    description: string;
    started: string;
    lastStep: string;
    resumeButton: string;
    startFreshButton: string;
    unknownStep: string;
  };
  fictional: {
    bannerTitle: string;
    bannerDescription: string;
    tryLiveTools: string;
    switchToReal: string;
    switchConfirmation: string;
  };
  toolFallback: {
    title: string;
    description: string;
    suggestions: string[];
    confirmSwitch: string;
    switchButton: string;
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
    pitfalls: string[];
    outcomePreview: string;
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
      sourcesTitle: string;
      sources: { label: string; url: string }[];
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
    pitfalls: string[];
    outcomePreview: string;
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
      sourcesTitle: string;
      sources: { label: string; url: string }[];
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
    pitfalls: string[];
    outcomePreview: string;
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
      sourcesTitle: string;
      sources: { label: string; url: string }[];
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
    pitfalls: string[];
    outcomePreview: string;
    deviceSelectionTitle: string;
    deviceSelectionHelper: string;
    deviceSelectionOptionBoth: string;
    deviceSelectionOptionNone: string;
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
      sourcesTitle: string;
      sources: { label: string; url: string }[];
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
    pitfalls: string[];
    outcomePreview: string;
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
      sourcesTitle: string;
      sources: { label: string; url: string }[];
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
    legendGood: string;
    legendWarning: string;
    legendCritical: string;
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
    valueNotAnswered: string;
    valueSkipped: string;
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
    adsUnknown: string;
    adsCritical: string;
    cleanupGood: string;
    cleanupWarning: string;
    cleanupUnknown: string;
    cleanupCritical: string;
    skippedExplanation: string;
    statusNA: string;
    statusNotAnswered: string;
    statusSkipped: string;
    statusTooltipNA: string;
  };
  chartCategories: {
    publicExposure: string;
    trackers: string;
    fingerprint: string;
    adSettings: string;
    cleanup: string;
  };
  deviceNames: {
    desktop: string;
    mobile: string;
    unknown: string;
  };
  osNames: {
    windows: string;
    mac: string;
    linux: string;
    ios: string;
    android: string;
    unknown: string;
  };
  browserOptions: {
    chrome: string;
    edge: string;
    firefox: string;
    safari: string;
    other: string;
    unknown: string;
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
    next: 'Next',
    back: 'Back',
    skip: 'Skip',
    start: 'Start',
    continue: 'Continue',
    startAudit: 'Begin Audit',
    clearData: 'Clear my lab data',
    cancel: 'Cancel',
    confirm: 'Confirm',
    print: 'Print / Save PDF',
    download: 'Download Report',
    startOver: 'Start New Audit',
    learnMore: 'Learn more',
    reset: 'Reset',
    yes: 'Yes',
    no: 'No',
    unsure: 'Unsure',
    unknown: 'Unknown',
    skipped: 'Skipped',
    viewReportCard: 'View Report Card',
    stepNumber: 'Step {step}',
    commonPitfalls: 'Common Pitfalls',
    open: 'Open',
    demo: 'Demo',
    demoModeNotice: 'Using demo data. Enable "Try live tools" to open this.',
    estimatedTime: 'Estimated time: ~{minutes}',
    onTrack: "You're on track",
  },
  accessibility: {
    languageSelector: 'Language selector',
    switchTheme: 'Switch theme',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    decrease: 'Decrease',
    increase: 'Increase',
    close: 'Close',
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    toggleSidebar: 'Toggle Sidebar',
    sidebarTitle: 'Sidebar',
    sidebarDescription: 'Displays the mobile sidebar.',
    breadcrumbMore: 'More',
    breadcrumbLabel: 'Breadcrumb',
  },
  pagination: {
    ariaLabel: 'Pagination',
    previous: 'Previous',
    next: 'Next',
    more: 'More pages',
    previousAria: 'Go to previous page',
    nextAria: 'Go to next page',
  },
  welcome: {
    title: 'Footprint Audit Wizard',
    subtitle:
      'See what information about you is discoverable online and learn concrete steps to reduce exposure.',
    safetyNote:
      'Self-audit only. Search only your own identifiers or use Fictional Persona Mode. We never ask for your name, email, or phone. Record counts and yes/no answers only. All data stays on this device.',
    chooseMode: "Choose how you'd like to proceed:",
    myFootprint: 'My Footprint',
    myFootprintDesc:
      'Use live tools to audit your real digital footprint. You will search your name, scan a site for trackers, review ad settings, and record what you find. Best if you want results tied to your own data.',
    fictionalPersona: 'Fictional Persona Demo',
    fictionalPersonaDesc:
      'Use example data to practice the workflow without searching real identifiers. Useful for first-time practice, classroom demos, or shared devices.',
    deviceLabel: 'Device',
    osLabel: 'OS',
    browserLabel: 'Browser',
    consent:
      'By continuing, you acknowledge this is a self-audit tool. We do not collect or transmit any personal identifiers. All data stays on your device.',
    optionalHelp: 'Device, OS, and browser details let us show instructions that match your setup.',
    introParagraph:
      'Browsing leaves artifacts: search results with your name, third-party trackers on sites you visit, and browser settings that can identify your device. This lab measures those artifacts and links each one to a specific privacy action.',
    whatToExpect: "What You'll Do",
    expectDescription:
      'In about 60 minutes you will search for your name, scan one site for trackers, run a fingerprinting test, review ad settings, and complete cleanup steps. You will receive a report with scores and next actions.',
    expectTime: '60 minutes',
    expectSteps: '5 guided steps',
    expectTools: 'Free privacy tools',
    expectPrivacy: '100% local data',
    privacyTitle: 'Self-Audit Only',
    privacyDescription:
      'You will only search your own information. We do not collect or transmit personal identifiers. Everything you record stays on this device.',
    beforeYouStart: 'Before You Start',
    prepPoint1: 'Have your passwords ready; clearing cookies signs you out of sites',
    prepPoint2: 'Use a private/incognito window on shared or managed devices',
    prepPoint3: 'Set aside uninterrupted time for each step',
    chooseYourPath: 'Choose Your Path',
    chooseYourPathDesc:
      'Both modes teach the same steps. Choose real data for personal results or example data for practice.',
    auditPurposeTitle: 'What This Audit Helps You Do',
    auditPurposeDesc1:
      'Your digital footprint is the set of discoverable traces left by your browsing and accounts: search results, data broker listings, trackers, and device identifiers. The audit measures these traces so you can reduce exposure.',
    auditPurposeDesc2:
      'The tools exist but are scattered. This audit sequences them, explains the outputs, and highlights concrete actions.',
    understandingOptionsTitle: 'Understanding Your Options',
    optionTableStarting: 'Starting point',
    optionTableTools: 'External tools',
    optionTableLearn: 'What you learn',
    optionTableBestFor: 'Best for',
    optionSelfStarting: 'Blank - you enter your real findings',
    optionSelfTools: 'Active links to Blacklight, EFF, etc.',
    optionSelfLearn: 'Actual insights about your privacy',
    optionSelfBestFor: 'Getting actionable results for yourself',
    optionDemoStarting: 'Pre-filled with example data',
    optionDemoTools: 'Disabled by default (with option to enable)',
    optionDemoLearn: 'How the process works using sample data',
    optionDemoBestFor: 'Learning first, group training, or shared computers',
    privacyProtectedTitle: 'Your Privacy is Protected',
    privacyProtectedIntro: 'Self-audit only. No accounts. No tracking.',
    privacyBullet1Title: 'Nothing leaves your browser',
    privacyBullet1Desc:
      "All your responses are stored only in this browser's local storage on this device",
    privacyBullet2Title: 'No data transmitted',
    privacyBullet2Desc: "We don't collect, store, or send any information you enter",
    privacyBullet3Title: 'You control deletion',
    privacyBullet3Desc: 'Clear all data instantly using the reset button at any time',
    privacyBullet4Title: 'External tools are your choice',
    privacyBullet4Desc:
      'When you click links to tools like Blacklight or EFF, those sites open in new tabs and are separate from this audit',
    beforeYouStartSummaryTitle: 'Before You Start (Quick Summary)',
    beforeYouStartSummaryDo:
      "What you'll do: run a few checks and record counts and yes/no answers.",
    beforeYouStartSummaryNeed:
      "What you'll need: about 60 minutes and access to the sites you want to scan.",
    beforeYouStartSummarySafety:
      "Safety: self-audit only; use Fictional mode if you're on a shared or managed device.",
  },
  steps: {
    welcome: 'Welcome',
    publicExposure: 'Public Exposure',
    trackers: 'Trackers',
    fingerprinting: 'Fingerprinting',
    accountDevice: 'Account/Device',
    cleanup: 'Cleanup',
    reportCard: 'Report Card',
  },
  report: {
    title: 'Your Footprint Report',
    subtitle: 'Summary of your findings and recommended next steps.',
    auditComplete: 'Audit Complete',
    privacyScoreOverview: 'Privacy Score Overview',
    whatThisMeans: 'What This Means',
    summaryPrefix: 'Bottom line:',
    nextActions: 'Your Next Actions',
    downloadFilename: 'footprint-audit-{date}.json',
    publicExposureDetails: 'Public Exposure Details',
    trackerAnalysis: 'Tracker Analysis',
    accountSettings: 'Account & Device Settings',
    fingerprintDetails: 'Fingerprinting Results',
    cleanupActions: 'Cleanup Actions Taken',
    publicExposureSignals: 'Public Exposure Signals',
    trackingIntensity: 'Tracking Intensity',
    fingerprintUniqueness: 'Fingerprint Uniqueness',
    accountDeviceAds: 'Account/Device Ads',
    cleanupCompleted: 'Cleanup Completed',
    realityCheck: 'Reality Check',
    saveExportCallout: 'Save a copy: download the report or print to PDF.',
  },
  facilitatorDashboard: {
    title: 'Facilitator Dashboard',
    subtitle: 'Anonymized aggregate metrics from all lab sessions',
    loading: 'Loading dashboard metrics...',
    loadError: 'Failed to load dashboard metrics.',
    retry: 'Retry',
    liveUpdates: 'Live Updates',
    refresh: 'Refresh',
    totalSessions: 'Total Sessions',
    completed: 'Completed',
    completionRate: 'Completion Rate',
    avgTrackersFound: 'Avg Trackers Found',
    avgPrivacyScores: 'Average Privacy Scores',
    deviceBreakdown: 'Device Breakdown',
    noDeviceData: 'No device data yet',
    sessionsOverTime: 'Sessions Over Time (Last 14 Days)',
    noSessionData: 'No session data yet. Start some audits to see trends.',
    privacyNotice: 'All metrics are anonymized. No personal identifiers are collected or stored.',
  },
  notFound: {
    title: '404 Page Not Found',
    description: 'This page is not registered in the router.',
  },
  panic: {
    buttonLabel: 'Clear my lab data',
    title: 'Clear all lab data',
    description:
      "This will permanently delete all your audit progress and recorded data from this device. You'll start fresh with a new audit. This action cannot be undone.",
    confirmButton: 'Yes, clear everything',
    toastTitle: 'Data cleared',
    toastDescription: 'All your lab data has been removed from this device.',
  },
  sessionRecovery: {
    title: 'Incomplete Session Found',
    description: 'An unfinished audit session is saved on this device. Resume or start fresh.',
    started: 'Started:',
    lastStep: 'Last step:',
    resumeButton: 'Resume Session',
    startFreshButton: 'Start Fresh',
    unknownStep: 'Unknown step',
  },
  fictional: {
    bannerTitle: 'Fictional Persona Mode',
    bannerDescription: 'Using example data. Proceed without real searches.',
    tryLiveTools: 'Try live tools anyway',
    switchToReal: 'Switch to My Footprint',
    switchConfirmation: "Switch to 'My Footprint' mode. This will clear current demo data.",
  },
  toolFallback: {
    title: 'If a tool does not load',
    description: 'Some networks block these external tools. Try:',
    suggestions: [
      'Try a different website or tool category',
      'Try using your mobile phone with cellular data (bypasses corporate network)',
      'Continue with Fictional mode to learn the concepts without live tools',
    ],
    confirmSwitch: 'Switch to Fictional Persona mode. This will use demo data instead.',
    switchButton: 'Use Fictional Mode',
  },
  progress: {
    stepOf: 'Step {current} of {total}',
    target: 'Target: {minutes} min',
    left: '{time} left',
  },
  publicExposure: {
    title: 'Public Exposure',
    concept:
      'Search results and data brokers can expose contact and identity details beyond what you choose to post.',
    whyItMatters:
      'People-search and broker sites aggregate public records, social profiles, and commercial data. That aggregation makes your contact info easy to retrieve.',
    outcomePreview: 'Outcome: a public-exposure signal and specific next actions.',
    pitfalls: [
      'Self-audit only: search for your own identifiers, or use Fictional Persona mode.',
      "Use a private/incognito window if you're on a shared or managed device.",
      'Avoid entering sensitive identifiers (SSN, full DOB) into any people-search site.',
    ],
    educationalContent: {
      sectionTitle: 'Understanding Public Exposure',
      industryTitle: 'The Data Broker Ecosystem Behind Public Exposure',
      industryParagraph1:
        'Routine activities like forms, voter registration, and property records create data points. A data-broker industry collects, aggregates, and sells those records at scale.',
      industryParagraph2:
        'A 2014 U.S. Federal Trade Commission (FTC) report describes the scale: major data brokers held hundreds of billions of data points, and one example listed over 1.1 billion unique identity elements plus 1.4 billion consumer transactions. The same report noted a broker claiming coverage of over 80% of U.S. consumer email addresses. These are historical, self-reported examples rather than a full census, but they show how large this ecosystem can be.',
      dataSourcesTitle: 'Common data sources',
      dataSourcesParagraph:
        'People-search sites like Spokeo, Whitepages, and BeenVerified aggregate records from:',
      dataSourcesList: [
        'Public records: Property deeds, court filings, voter registrations, marriage licenses, bankruptcy filings',
        'Commercial sources: Credit applications, car loans, rental agreements, utility records, and even some state DMVs that sell registration data',
        "Social media: Any profile you've ever made public, even briefly",
        'Other data brokers: These companies cross-reference and sell data to each other, creating an interconnected web',
      ],
      dataSourcesConclusion:
        'Much of this data is technically public; the difference is scale and automation. Companies can assemble a full profile in seconds rather than days.',
      meaningTitle: 'What This Means for You',
      meaningParagraph: 'Search results can reveal:',
      meaningList: [
        'Your current and previous addresses',
        'Phone numbers (including ones you thought were private)',
        'Email addresses',
        'Names of your relatives and associates',
        'Your approximate age and date of birth',
        'Property ownership and estimated home value',
        'Court records and legal history',
      ],
      activityPreview:
        'This activity shows which details are discoverable about you and where they appear. Many learners are surprised by the breadth, even without sharing sensitive data.',
      sourcesTitle: 'Sources',
      sources: [
        {
          label: 'U.S. FTC (2014) — Data Brokers: A Call for Transparency and Accountability',
          url: 'https://www.ftc.gov/system/files/documents/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014/140527databrokerreport.pdf',
        },
      ],
    },
    externalTools: 'External Tools',
    recordFindings: 'Record Your Findings',
    searchPagesQuestion:
      'How many search result pages contained personal info (address, phone, relatives)?',
    searchPagesHelper: 'Count unique pages, not total mentions. Use 5+ if more than 5.',
    peopleSearchQuestion:
      'Did you find yourself on people-search sites (e.g., Whitepages, Spokeo, BeenVerified)?',
    googleVisitedQuestion: "Did you visit Google's 'Results about you' dashboard?",
    removalRequestedQuestion: 'Did you request removal of any search results from Google?',
  },
  trackers: {
    title: 'Tracker Visibility',
    concept:
      'A single webpage can load dozens of third parties. Tracking includes cookies, session recording, fingerprinting, and more.',
    whyItMatters:
      'When you visit a site, scripts can record behavior, share data with advertisers, and build profiles without clear notice.',
    outcomePreview: 'Outcome: a tracking intensity signal and a list of detected tracker types.',
    pitfalls: [
      "Don't scan sensitive sites (banking, health, school portals). Pick a public site you use often.",
      'Results are a snapshot and can vary by region, browser, and time.',
      'On managed networks, tools may be blocked—use Fictional mode if needed.',
    ],
    educationalContent: {
      sectionTitle: 'Understanding Web Tracking',
      introTitle: 'What Happens in the First Second You Visit a Website',
      introParagraph1:
        'When a page loads, scripts run and requests go to third-party servers before the page finishes rendering. This activity is invisible in the UI but happens on most sites.',
      introParagraph2:
        'Large-scale measurements show tracking is widespread. The 2025 HTTP Archive Web Almanac reports that about 75% of pages include at least one tracker, and Google trackers appear on about 61% of desktop pages (Facebook trackers about 22%). Exact numbers vary by site category and region, but the pattern is consistent: most pages load third-party tracking.',
      trackingTypesTitle: "The Seven Types of Tracking You'll Discover",
      trackingTypesIntro:
        "The tool you're about to use (Blacklight, created by The Markup) will reveal what's really happening behind the scenes:",
      trackingTypes: {
        adTrackers: {
          title: 'Ad Trackers',
          description:
            'These send visit data to advertising networks, which build interest profiles based on the sites and products you view and how long you stay.',
        },
        thirdPartyCookies: {
          title: 'Third-Party Cookies',
          description:
            'These cookies are set by a domain different from the site you are visiting. The same cookie can be read across sites that embed the same ad network, enabling cross-site tracking.',
        },
        sessionRecording: {
          title: 'Session Recording',
          description:
            'Session recording tools capture interaction data (clicks, scrolls, and sometimes keystrokes) and reconstruct sessions for replay. Vendors include Hotjar and FullStory.',
        },
        keystrokeLogging: {
          title: 'Keystroke Logging',
          description:
            'Some scripts record what you type into forms, sometimes before you submit. This can capture partial entries as you type.',
        },
        canvasFingerprinting: {
          title: 'Canvas Fingerprinting',
          description:
            "Your browser can be asked to draw an invisible image. Due to subtle differences in how your specific hardware and software render graphics, this image is slightly different from almost everyone else's. This creates an identifier that works even if you block cookies.",
        },
        facebookPixel: {
          title: 'Facebook Pixel',
          description:
            'Many sites send visit data to Facebook through an embedded tracking pixel, even if you are not logged in.',
        },
        googleAnalytics: {
          title: 'Google Analytics',
          description:
            "Present on the majority of websites, Google Analytics tracks visitors and shares data with Google's advertising ecosystem.",
        },
      },
      beyondAdsTitle: 'Why This Matters Beyond Ads',
      beyondAdsParagraph: 'Tracking affects more than advertising:',
      beyondAdsList: [
        'Price discrimination: Some retailers show different prices based on your browsing history or inferred income level',
        'Insurance and employment: Data brokers sell behavioral profiles that can influence credit decisions, insurance rates, and even hiring',
        'Profile permanence: The behavioral profiles built from tracking data persist for years and are traded between companies',
        'Security risk: Each company that holds data about you is a potential breach target',
      ],
      activityPreview:
        'This activity scans a site you use and shows the tracker types it loads. Use the results to connect abstract categories to real pages.',
      sourcesTitle: 'Sources',
      sources: [
        {
          label: 'HTTP Archive Web Almanac 2025 — Privacy (tracker prevalence)',
          url: 'https://almanac.httparchive.org/en/2025/privacy',
        },
      ],
    },
    externalTool: 'External Tool',
    blacklightTip:
      'Tip: Try scanning a news site or shopping site you frequently visit. Avoid sensitive sites like health portals or banking.',
    recordFindings: 'Record Your Findings',
    blacklightRunQuestion: 'Did you run the Blacklight scan?',
    siteCategoryQuestion: 'What type of site did you scan?',
    trackerCountQuestion: 'How many trackers were detected?',
    trackerCountHelper:
      "Enter the number shown in Blacklight's summary. 0-5 trackers is relatively low, 6-15 is typical for commercial sites, 16+ indicates heavy tracking.",
    cookiesFlaggedQuestion: 'Were third-party cookies flagged?',
    sessionRecordingQuestion: 'Was session recording detected?',
    sessionRecordingHelper: 'Session recording captures mouse movements, clicks, and keystrokes',
    keyLoggingQuestion: 'Was key logging detected?',
    keyLoggingHelper: 'Key logging captures what you type into forms',
    fingerprintingQuestion: 'Was fingerprinting detected?',
    fingerprintingHelper: 'Fingerprinting identifies your browser without cookies',
  },
  fingerprinting: {
    title: 'Fingerprinting',
    concept:
      'Clearing cookies reduces one tracking channel, but browser fingerprinting can still identify your device through combinations of settings, fonts, and hardware.',
    whyItMatters:
      'Private browsing does not change attributes like screen size, fonts, timezone, or WebGL settings. Those attributes can create a stable fingerprint across sites.',
    outcomePreview:
      'Outcome: whether your browser is uniquely identifiable and your protection level.',
    pitfalls: [
      'Run the test in the browser you use most—extensions and settings change results.',
      "A 'unique' result doesn't mean your name is known; it means you can be distinguished.",
      'Private browsing hides history, not your fingerprint.',
    ],
    educationalContent: {
      sectionTitle: 'Understanding Browser Fingerprinting',
      introTitle: "The Tracking Method You Can't Block by Clearing Cookies",
      introParagraph:
        "Clearing cookies reduces one form of tracking. Browser fingerprinting uses device and browser attributes instead of stored identifiers. Studies like EFF's Panopticlick found that many browsers were uniquely fingerprintable, and EFF notes that a large share of browsers still present a unique fingerprint even without cookies. Uniqueness rates change as defenses improve, but fingerprinting remains common.",
      howItWorksTitle: 'How Your Browser Betrays Your Identity',
      howItWorksParagraph:
        'Browser fingerprinting collects dozens of device and browser attributes that, combined, create a signature. Any single attribute may be common, but the specific combination can be unique. Common inputs include:',
      attributesList: [
        "Screen resolution and color depth: Your display's exact pixel dimensions",
        'Timezone and language: Your location and language preferences',
        'Installed fonts: The specific combination of fonts on your system is highly distinctive',
        'Browser plugins: Which extensions and their versions you have installed',
        'Hardware specifications: Details about your graphics card, CPU, and available memory',
        'WebGL rendering: Your browser can be asked to draw a 3D graphic, and microscopic differences in how your hardware renders it create a unique signature',
        'Audio fingerprinting: Similar technique using audio processing',
        'Canvas fingerprinting: Drawing an invisible 2D image to identify rendering differences',
      ],
      statisticsTitle: 'Why Fingerprints Are Often Unique',
      statisticsParagraph:
        "EFF's Panopticlick project and later guidance explain that combining many attributes (fonts, screen size, hardware, and more) can produce a fingerprint that is often unique enough to track a user across sites. Anti-fingerprinting protections can reduce uniqueness, but results vary by browser and configuration.",
      privateBrowsingTitle: "Why Private Browsing Doesn't Help Here",
      privateBrowsingParagraph1:
        'Incognito and private modes do not save cookies or history, but they do not change screen resolution, fonts, graphics card, or timezone. Your fingerprint in private mode is often identical to your regular mode fingerprint, which allows recognition across sites.',
      privateBrowsingParagraph2:
        'Some privacy-focused browsers like Firefox and Brave have implemented fingerprinting protections that either block certain collection techniques or deliberately provide generic responses.',
      activityPreview:
        'This test reports whether your fingerprint is unique, how strong your tracking protection is, and which attributes make you identifiable. Use the results to decide whether to change browser settings or use stronger protections.',
      sourcesTitle: 'Sources',
      sources: [
        {
          label: 'EFF — Panopticlick (browser fingerprinting study)',
          url: 'https://www.eff.org/press/releases/eff-launches-panopticlick-unique-fingerprint-every-browser',
        },
        {
          label: 'EFF Surveillance Self-Defense — What is fingerprinting? (reviewed 2024)',
          url: 'https://ssd.eff.org/module/what-fingerprinting',
        },
      ],
    },
    externalTools: 'External Tools',
    whatToLookFor: 'What to look for',
    effRunQuestion: 'Did you run the EFF Cover Your Tracks test?',
    browserUniqueQuestion: 'Does the test say your browser fingerprint is unique?',
    browserUniqueHelper:
      "If your fingerprint is 'unique', websites can identify you even without cookies. Using a privacy browser or extensions like Privacy Badger can help reduce uniqueness.",
    trackingProtectionQuestion: 'What level of tracking protection did the test report?',
    trackingProtectionHelper: 'This indicates how well your browser blocks known trackers',
  },
  accountDevice: {
    title: 'Account & Device Identifiers',
    concept:
      'Tracking also occurs through account settings, device IDs, and app tracking permissions.',
    whyItMatters:
      'Even if you block website trackers, accounts and devices can still share data with advertisers through persistent identifiers used across apps and services.',
    outcomePreview: 'Outcome: which ad settings are active and where to adjust them.',
    deviceSelectionTitle: 'Which mobile devices do you want to review?',
    deviceSelectionHelper: 'Choose the platforms you use so we can show the right settings.',
    deviceSelectionOptionBoth: 'Both iOS and Android',
    deviceSelectionOptionNone: "I don't use a smartphone/tablet",
    pitfalls: [
      'If a device is managed by work/school, some settings may be locked.',
      "Check each device you use (phone/tablet/laptop) — settings don't always sync.",
      'Changing ad settings can affect recommendations; note what you change.',
    ],
    educationalContent: {
      sectionTitle: 'Understanding Mobile and Account Tracking',
      introTitle: 'The Identifiers That Follow You Across Every App',
      introParagraph:
        'Web tracking uses cookies, but mobile apps use operating-system advertising IDs. Android uses the Google Advertising ID (GAID) and Apple devices use the Identifier for Advertisers (IDFA).',
      howItWorksTitle: 'How Mobile Advertising IDs Work',
      howItWorksParagraph:
        'Your operating system generates a unique advertising ID. Apps can access it to enable cross-app advertising and tracking. This enables:',
      howItWorksList: [
        'You search for flights in one app → You see hotel ads in a completely different app',
        'You browse products in a shopping app → You see ads for those products in your social media apps',
        'You play a free game → The game shares your activity with ad networks tied to your advertising ID',
        'Your location data, app usage patterns, and behavioral profile are all linked to this single identifier',
      ],
      scaleTitle: 'The Scale of Mobile Tracking',
      scaleParagraph:
        'Unlike cookies, advertising IDs follow you across apps. Because the ID is persistent, companies can build profiles based on app usage over months or years, connect app activity to web activity, and share that data with ad networks and data brokers.',
      attTitle: "Apple's App Tracking Transparency Changed the Game",
      attParagraph1:
        'In 2021, Apple introduced App Tracking Transparency (ATT), which requires apps to ask permission before accessing your IDFA. Users see a prompt such as "Allow this app to track your activity across other companies\' apps and websites?" Before ATT, apps accessed the IDFA without asking.',
      attParagraph2:
        'After ATT, users must explicitly opt in. Reported opt-in rates vary widely by measurement method, app category, and geography. For example, AppsFlyer reported global opt-in around 50% in Q1 2024, while Singular reported much lower opt-in at first app open in Q4 2025. Treat any single number as context-specific. Google has said its Privacy Sandbox on Android aims to operate without cross-app identifiers like the advertising ID.',
      activityPreviewTitle: "What You'll Check in This Activity",
      activityPreviewList: [
        'Google Ad Personalization: Whether Google builds a profile of your interests across all Google services',
        'Apple Advertising: Whether Apple uses your data for targeted ads within their ecosystem',
        'Android Advertising ID: You can reset (give yourself a new ID) or delete it entirely',
        'iOS App Tracking Transparency: Whether apps can request to track you at all',
      ],
      activityPreviewConclusion:
        'Many people find that ad personalization has been enabled by default for years, building profiles they did not explicitly approve.',
      sourcesTitle: 'Sources',
      sources: [
        {
          label: 'AppsFlyer (2024) — ATT opt-in rate report (Q1 2024)',
          url: 'https://www.appsflyer.com/resources/reports/app-tracking-transparency-opt-in-rate/',
        },
        {
          label: 'Singular (2025) — Q4 2025 Insights (ATT opt-in at first open)',
          url: 'https://www.singular.net/blog/singular-q4-2025-insights/',
        },
        {
          label: 'Google Android Developers Blog (2022) — Privacy Sandbox on Android',
          url: 'https://android-developers.googleblog.com/2022/02/introducing-privacy-sandbox-android.html',
        },
      ],
    },
    externalTools: 'External Tools',
    recordSettings: 'Record Your Settings',
    googleAdsQuestion: 'Is Google personalized ads turned on or off?',
    appleAdsQuestion: 'Is Apple personalized ads turned on or off?',
    androidIdQuestion: 'What action did you take on your Android advertising ID?',
    iosAttQuestion: 'What is your iOS App Tracking Transparency setting?',
    iosAttHelper: 'Settings > Privacy & Security > Tracking',
  },
  cleanup: {
    title: 'Cleanup Sprint',
    concept: 'Take action to remove existing tracking data and enable privacy protections.',
    whyItMatters:
      'Clearing cookies and site data removes existing trackers. Blocking third-party cookies prevents many future tracking attempts. These steps produce immediate, practical gains.',
    outcomePreview: 'Outcome: a cleanup status and concrete next actions.',
    pitfalls: [
      'Clearing cookies will log you out; make sure you know your passwords.',
      "If you're on a shared or managed device, follow local policies before changing settings.",
      "Don't delete saved passwords unless you're ready to replace them with a manager.",
    ],
    educationalContent: {
      sectionTitle: 'Why Digital Hygiene Matters',
      breachesTitle: 'Why Breaches Keep Happening',
      breachesParagraph1:
        "Verizon's 2024 Data Breach Investigations Report (DBIR) finds the human element in about 68% of breaches, and stolen credentials remain one of the most common ways attackers get in (about 31% in Verizon's 10-year analysis).",
      breachesParagraph2:
        "That makes password hygiene and multi-factor authentication especially important. They don't prevent every breach, but they reduce the risk of account takeovers and credential-stuffing attacks.",
      cookiesTitle: 'Why Cookies Matter for Your Security',
      cookiesParagraph:
        'Cookies are not just about ads; they also keep you logged in. When you visit your email or bank and do not re-enter your password, a cookie proves that you already authenticated. That convenience has security implications:',
      cookiesList: [
        'If someone accesses your browser, they access your logged-in accounts',
        'Session hijacking: If an attacker captures your cookies (through malware, insecure WiFi, or a compromised website), they can impersonate you without knowing your password',
        'Long-lived sessions: Some cookies persist for months or years, meaning a single compromise has a long window of exposure',
      ],
      blockingTitle: 'Third-Party Cookie Blocking: The Single Most Impactful Setting',
      blockingParagraph1:
        'If there is one privacy setting with high impact and low friction, it is blocking third-party cookies. First-party cookies come from the site you visit and are needed for login and site features. Third-party cookies come from external domains and are used primarily for cross-site tracking.',
      blockingParagraph2: 'Modern browsers handle this differently:',
      blockingBrowsers: [
        'Firefox: Uses "Total Cookie Protection" to isolate third-party cookies per site',
        'Safari: Blocks third-party cookies by default through "Prevent Cross-Site Tracking"',
        'Chrome: Still allows third-party cookies by default (Google reversed plans to phase them out)',
        'Enabling this setting breaks cross-site tracking without affecting your ability to use websites normally',
      ],
      hibpTitle: 'Have I Been Pwned: The Reality Check',
      hibpParagraph1:
        'The optional activity in this step—checking Have I Been Pwned—is a moment of truth for most people. As of January 2026, HIBP lists 941 breached sites and about 17.4 billion pwned accounts. These totals change over time as new breaches are added.',
      hibpParagraph2:
        "When you enter your email address, it checks whether that email appeared in any known data breach. For most people who've had an email address for more than a few years, the answer is yes—often in multiple breaches. This is why password hygiene matters: unique passwords for every account, ideally managed by a password manager, and multi-factor authentication wherever it's available.",
      activityPreviewTitle: "What You're About to Do",
      activityPreviewList: [
        'Clear cookies and site data: Remove existing trackers and force fresh authentication',
        'Block third-party cookies: Prevent future cross-site tracking',
        'Check for breach exposure: See if your credentials have been compromised',
        'Plan password hygiene actions: Update compromised passwords, enable MFA',
      ],
      activityPreviewConclusion:
        'By the end of this step, you will have reduced tracking persistence and improved account security with concrete changes.',
      sourcesTitle: 'Sources',
      sources: [
        {
          label: 'Verizon 2024 Data Breach Investigations Report (DBIR) — highlights',
          url: 'https://www.verizon.com/about/news/2024-data-breach-investigations-report',
        },
        {
          label: 'Have I Been Pwned — Pwned websites statistics',
          url: 'https://haveibeenpwned.com/PwnedWebsites',
        },
      ],
    },
    browserInstructions: 'Browser Instructions for',
    breachExposure: 'Breach Exposure Check',
    breachExposureDesc:
      'Check if your email addresses have appeared in known data breaches. This only takes 2 minutes.',
    recordActions: 'Record Your Actions',
    cookiesClearedQuestion: 'Did you clear your cookies and site data?',
    cookiesBlockedQuestion: 'Did you enable blocking of third-party cookies?',
    passwordHygieneQuestion: 'Did you take any password hygiene action?',
    passwordHygieneHelper:
      'Examples: checked Have I Been Pwned, enabled MFA, updated a password, or reviewed your password manager',
    cookiesWarning:
      'Clearing cookies will log you out of websites. Make sure you know your passwords or have a password manager before proceeding.',
  },
  instructions: {
    whatToDo: 'What to Do',
    publicExposure1:
      'Search your name (in quotes) on Google and count how many result pages show personal info like address or phone',
    publicExposure2:
      'Check if you appear on people-search sites (like Spokeo, WhitePages, or BeenVerified)',
    publicExposure3: 'Record your findings below, then continue to the next step',
    trackers1:
      'Open Blacklight and enter a website you visit often (e.g., a news site or shopping site)',
    trackers2:
      'Review what the tool finds: trackers, cookies, session recorders, and fingerprinting',
    trackers3: 'Record the tracker count and any concerning findings below',
    fingerprinting1: "Click the link to open EFF's Cover Your Tracks test",
    fingerprinting2: 'Run the test and note if your browser fingerprint is unique',
    fingerprinting3: 'Check your tracking protection level and record the results below',
    accountDevice1: 'Check your Google Ad Settings and note if personalized ads are on or off',
    accountDevice2:
      'Check Apple/Android ad settings on any devices you use (select N/A if not applicable)',
    accountDevice3: 'Record your current settings below - you can change them later if you wish',
    cleanup1: 'Clear your cookies and site data using the browser instructions provided',
    cleanup2: 'Enable blocking of third-party cookies in your browser settings',
    cleanup3: 'Optionally, check Have I Been Pwned for any email breaches',
  },
  siteCategories: {
    news: 'News',
    shopping: 'Shopping',
    social: 'Social',
    health: 'Health',
    other: 'Other',
  },
  trackingProtection: {
    strong: 'Strong',
    partial: 'Partial',
    weak: 'Weak/None',
  },
  adSettings: {
    on: 'On',
    off: 'Off',
    notUsed: "Don't use",
    notApplicable: 'N/A',
  },
  androidActions: {
    reset: 'Reset',
    deleted: 'Deleted',
    none: 'No change',
  },
  iosAtt: {
    allowApps: 'Apps can request',
    blocked: 'Blocked',
  },
  cleanupActions: {
    yes: 'Yes',
    no: 'No',
    later: 'Will do later',
    alreadyBlocked: 'Already blocked',
  },
  externalTools: {
    googleResultsTitle: "Google 'Results about you'",
    googleResultsDesc:
      'See what personal information Google has found about you in search results. Requires a Google account and may not be available in all regions - if unavailable, search your name manually in quotes.',
    findContactTitle: 'Find Contact Info Sites',
    findContactDesc: 'Search your name in quotes plus city/state to find people-search listings',
    requestRemovalTitle: 'Request Removal',
    requestRemovalDesc:
      "Most people-search sites have opt-out pages. Search '[site name] opt out' to find them",
    blacklightTitle: 'Blacklight by The Markup',
    blacklightDesc:
      'Enter any website URL to see what trackers, cookies, and session recorders it uses',
    effCoverTracksTitle: 'EFF Cover Your Tracks',
    effCoverTracksDesc:
      "Test how unique your browser fingerprint is and how well you're protected from tracking",
    effExplainerTitle: 'Understanding Fingerprinting',
    effExplainerDesc: 'Learn more about how browser fingerprinting works and why it matters',
    googleAdSettingsTitle: 'Google Ad Settings',
    googleAdSettingsDesc: 'View and control how Google personalizes ads based on your activity',
    appleAdsTitle: 'Apple Advertising Settings',
    appleAdsDesc: 'Settings > Privacy & Security > Apple Advertising',
    androidAdIdTitle: 'Android Advertising ID',
    androidAdIdDesc: 'Settings > Privacy > Ads > Reset or Delete advertising ID',
    iosAttTitle: 'iOS App Tracking Transparency',
    iosAttDesc: 'Settings > Privacy & Security > Tracking',
    clearCookiesTitle: 'Clear Cookies & Site Data',
    clearCookiesDesc: 'Remove stored tracking data from your browser',
    blockCookiesTitle: 'Block Third-Party Cookies',
    blockCookiesDesc: 'Prevent cross-site tracking cookies from being stored',
    hibpTitle: 'Have I Been Pwned',
    hibpDesc: 'Check if your email has appeared in known data breaches',
    stepsForBrowser: 'Step-by-step instructions for {browser}',
  },
  badges: {
    optional: 'Optional',
  },
  nextActions: {
    skippedStep: 'You skipped "{stepName}". Complete this section when you have time.',
    requestGoogleRemoval:
      "Request removal of your personal info from Google search results using the 'Results about you' tool.",
    optOutPeopleSearch:
      'Remove your info from people-search sites. Visit the FTC guide at consumer.ftc.gov/articles/what-know-about-people-search-sites-sell-your-information',
    installContentBlocker:
      'Install a reputable content blocker like uBlock Origin to reduce tracker exposure.',
    fingerprintingRisk:
      "Your browser is uniquely identifiable. Learn more about fingerprinting at eff.org/pages/cover-your-tracks and try Firefox with Enhanced Tracking Protection set to 'Strict'.",
    turnOffGoogleAds: 'Turn off personalized ads in your Google Ad Center settings.',
    clearCookies: 'Clear your browser cookies and site data to remove existing trackers.',
    enableCookieBlocking: 'Enable blocking of third-party cookies in your browser settings.',
    checkHibp:
      'Check Have I Been Pwned (haveibeenpwned.com) to see if your email was in data breaches, and sign up for notifications at haveibeenpwned.com/NotifyMe.',
    allDone:
      'Great job! Consider running this audit again in a few months to stay on top of your digital footprint.',
  },
  footer: {
    privacyNotice:
      'Your data stays on this device. We never collect or transmit personal information.',
  },
  realityCheckItems: {
    snapshot: 'This is a snapshot, not a complete census of your digital footprint.',
    variesByLocation: "Results vary by country, language, and network you're connected to.",
    personalization: 'Search personalization means others may see different results for you.',
    changesOverTime: 'Your footprint changes over time as new data is collected and shared.',
    dataOnDevice:
      'All data remains on your device. This wizard never collects, stores, or transmits personal information.',
  },
  skippedSections: {
    title: 'Skipped Sections',
    description:
      'You skipped the following sections. Complete them later to get a more accurate picture of your digital footprint.',
  },
  printInfo: {
    generated: 'Generated',
    dataStoredLocally: 'All data stored locally only',
  },
  charts: {
    radarView: 'Radar View',
    scoreComparison: 'Score Comparison',
    privacyScore: 'Privacy Score',
    legendGood: 'Good (100)',
    legendWarning: 'Warning (60)',
    legendCritical: 'Critical (25)',
  },
  metrics: {
    publicExposureLabel: 'Public Exposure Signals',
    trackingIntensityLabel: 'Tracking Intensity',
    fingerprintLabel: 'Fingerprint Uniqueness',
    adSettingsLabel: 'Account/Device Ads',
    cleanupLabel: 'Cleanup Completed',
    valueLow: 'Low',
    valuePages: '{count, plural, one {# page} other {# pages}}',
    valueUnique: 'Unique',
    valueNotUnique: 'Not Unique',
    valueUnknown: 'Unknown',
    valueLimited: 'Limited',
    valueActive: 'Active',
    valueCheckSettings: 'Check Settings',
    valueDone: 'Done',
    valuePartial: 'Partial',
    valueNotYet: 'Not Yet',
    valueNA: 'N/A',
    valueNotAnswered: 'Not answered',
    valueSkipped: 'Skipped',
    exposureGood: "Great! Your personal info wasn't easily found in search results.",
    exposureWarning:
      'Some personal info is visible. Consider requesting removal from search engines.',
    exposureCritical:
      'Your personal info is exposed. Take action to remove it from data brokers and search results.',
    trackingGood: 'The site you scanned has few trackers. This is better than average.',
    trackingWarning: 'Moderate tracking detected. Consider using a content blocker.',
    trackingCritical: 'High tracker count. This site is heavily monetizing your attention.',
    trackingUnknown: 'Run the Blacklight scan to see tracker counts.',
    fingerprintGood: 'Your browser blends in with others, making fingerprinting harder.',
    fingerprintCritical:
      'Your browser is uniquely identifiable. Consider using Firefox with enhanced tracking protection.',
    fingerprintUnknown: "Run the EFF test to check your browser's fingerprint.",
    adsGood: "You've disabled ad personalization on your accounts.",
    adsWarning:
      'Some ad personalization is still active. Consider disabling in your account settings.',
    adsUnknown: "Review your account and device ad settings to see what's enabled.",
    adsCritical: 'Ad personalization is active. Your activity is being used to target ads.',
    cleanupGood:
      "You've cleared cookies and enabled third-party cookie blocking. This suggests reduced tracking persistence.",
    cleanupWarning:
      "You've taken some cleanup actions. Consider completing both cookie clearing and blocking for better protection.",
    cleanupUnknown: 'Complete the cleanup step to see your hygiene status.',
    cleanupCritical:
      'Hygiene actions like clearing cookies and blocking third-party cookies help reduce tracking persistence.',
    skippedExplanation: 'You skipped this step, so no score is shown.',
    statusNA: 'N/A',
    statusNotAnswered: 'Not answered',
    statusSkipped: 'Skipped',
    statusTooltipNA: 'Not scored because this was skipped or not answered.',
  },
  chartCategories: {
    publicExposure: 'Public Exposure',
    trackers: 'Trackers',
    fingerprint: 'Fingerprint',
    adSettings: 'Ad Settings',
    cleanup: 'Cleanup',
  },
  deviceNames: {
    desktop: 'Desktop',
    mobile: 'Mobile',
    unknown: 'Unknown',
  },
  osNames: {
    windows: 'Windows',
    mac: 'macOS',
    linux: 'Linux',
    ios: 'iOS',
    android: 'Android',
    unknown: 'Unknown',
  },
  browserOptions: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'Other',
    unknown: 'Unknown',
  },
  browserNames: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'your browser',
    unknown: 'your browser',
  },
};

const lv: Translations = {
  common: {
    next: 'Tālāk',
    back: 'Atpakaļ',
    skip: 'Izlaist',
    start: 'Sākt',
    continue: 'Turpināt',
    startAudit: 'Sākt auditu',
    clearData: 'Dzēst manus laboratorijas datus',
    cancel: 'Atcelt',
    confirm: 'Apstiprināt',
    print: 'Drukāt / Saglabāt PDF',
    download: 'Lejupielādēt atskaiti',
    startOver: 'Sākt jaunu auditu',
    learnMore: 'Uzzināt vairāk',
    reset: 'Atiestatīt',
    yes: 'Jā',
    no: 'Nē',
    unsure: 'Nezinu',
    unknown: 'Nezināms',
    skipped: 'Izlaists',
    viewReportCard: 'Skatīt atskaiti',
    stepNumber: '{step}. solis',
    commonPitfalls: 'Biežākās kļūdas',
    open: 'Atvērt',
    demo: 'Demo',
    demoModeNotice: 'Tiek izmantoti demo dati. Iespējojiet "Izmēģināt reālos rīkus", lai atvērtu.',
    estimatedTime: 'Aptuvenais laiks: ~{minutes}',
    onTrack: 'Jūs esat uz pareizā kursa',
  },
  accessibility: {
    languageSelector: 'Valodas izvēle',
    switchTheme: 'Mainīt motīvu',
    darkMode: 'Tumšais režīms',
    lightMode: 'Gaišais režīms',
    decrease: 'Samazināt',
    increase: 'Palielināt',
    close: 'Aizvērt',
    previousSlide: 'Iepriekšējais slaids',
    nextSlide: 'Nākamais slaids',
    toggleSidebar: 'Pārslēgt sānjoslu',
    sidebarTitle: 'Sānjosla',
    sidebarDescription: 'Rāda mobilo sānjoslu.',
    breadcrumbMore: 'Vairāk',
    breadcrumbLabel: 'Atrašanās vietas josla',
  },
  pagination: {
    ariaLabel: 'Lappušu pārslēgšana',
    previous: 'Iepriekšējā',
    next: 'Nākamā',
    more: 'Vairāk lappušu',
    previousAria: 'Doties uz iepriekšējo lappusi',
    nextAria: 'Doties uz nākamo lappusi',
  },
  welcome: {
    title: 'Digitālās pēdas audita vednis',
    subtitle:
      'Uzziniet, kāda informācija par jums ir atrodama tiešsaistē, un apgūstiet konkrētus soļus, kā mazināt redzamību.',
    safetyNote:
      'Tikai pašpārbaude. Meklējiet tikai savus identifikatorus vai izmantojiet fiktīvās personas režīmu. Mēs nekad neprasām jūsu vārdu, e-pastu vai tālruņa numuru. Ievadiet tikai skaitļus un jā/nē atbildes. Visi dati paliek šajā ierīcē.',
    chooseMode: 'Izvēlieties, kā vēlaties turpināt:',
    myFootprint: 'Mana pēda',
    myFootprintDesc:
      'Izmantojiet reālos rīkus, lai pārbaudītu savu digitālo pēdu. Jūs meklēsiet savu vārdu, skenēsiet vietni izsekotājiem, pārskatīsiet reklāmu iestatījumus un fiksēsiet rezultātus. Vislabāk, ja vēlaties rezultātus par saviem datiem.',
    fictionalPersona: 'Fiktīvās personas demo',
    fictionalPersonaDesc:
      'Izmantojiet piemēra datus, lai apgūtu procesu bez reālu identifikatoru meklēšanas. Noder pirmajai praksei, nodarbībām vai koplietotām ierīcēm.',
    deviceLabel: 'Ierīce',
    osLabel: 'OS',
    browserLabel: 'Pārlūkprogramma',
    consent:
      'Turpinot, jūs atzīstat, ka šis ir pašnovērtējuma rīks. Mēs nevācam un nepārsūtām nekādus personīgos identifikatorus. Visi dati paliek jūsu ierīcē.',
    optionalHelp:
      'Ierīces, OS un pārlūkprogrammas norāde ļauj parādīt instrukcijas, kas atbilst jūsu konfigurācijai.',
    introParagraph:
      'Pārlūkošana atstāj pēdas: meklēšanas rezultātus ar jūsu vārdu, trešo pušu izsekotājus vietnēs, ko apmeklējat, un pārlūkprogrammas iestatījumus, kas var identificēt ierīci. Šī laboratorija izmēra šīs pēdas un sasaista tās ar konkrētām privātuma darbībām.',
    whatToExpect: 'Ko jūs darīsiet',
    expectDescription:
      'Aptuveni 60 minūšu laikā jūs meklēsiet savu vārdu, skenēsiet vienu vietni izsekotājiem, veiksiet pirkstu nospiedumu testu, pārskatīsiet reklāmu iestatījumus un veiksiet tīrīšanas darbības. Jūs saņemsiet atskaiti ar vērtējumiem un nākamajiem soļiem.',
    expectTime: '60 minūtes',
    expectSteps: '5 vadīti soļi',
    expectTools: 'Bezmaksas privātuma rīki',
    expectPrivacy: '100% lokāli dati',
    privacyTitle: 'Tikai pašpārbaude',
    privacyDescription:
      'Jūs meklēsiet tikai savu informāciju. Mēs nevācam un nepārsūtām personīgos identifikatorus. Viss, ko ierakstāt, paliek šajā ierīcē.',
    beforeYouStart: 'Pirms sākat',
    prepPoint1: 'Sagatavojiet paroles; sīkdatņu dzēšana jūs izrakstīs no vietnēm',
    prepPoint2: 'Izmantojiet privāto/inkognito logu koplietotās vai pārvaldītās ierīcēs',
    prepPoint3: 'Atvēliet nepārtrauktu laiku katram solim',
    chooseYourPath: 'Izvēlieties savu ceļu',
    chooseYourPathDesc:
      'Abos režīmos soļi ir vienādi. Izvēlieties reālus datus personīgiem rezultātiem vai piemēra datus praksei.',
    auditPurposeTitle: 'Ko šis audits jums palīdzēs izdarīt',
    auditPurposeDesc1:
      'Jūsu digitālā pēda ir atrodamo pēdu kopums, ko atstāj jūsu pārlūkošana un konti: meklēšanas rezultāti, datu brokeru ieraksti, izsekotāji un ierīces identifikatori. Audits izmēra šīs pēdas, lai jūs varētu mazināt redzamību.',
    auditPurposeDesc2:
      'Rīki pastāv, bet ir izkaisīti. Šis audits tos sakārto secībā, izskaidro rezultātus un iezīmē konkrētas darbības.',
    understandingOptionsTitle: 'Jūsu izvēles iespējas',
    optionTableStarting: 'Sākuma punkts',
    optionTableTools: 'Ārējie rīki',
    optionTableLearn: 'Ko uzzināsiet',
    optionTableBestFor: 'Piemērotākais',
    optionSelfStarting: 'Tukšs — jūs ievadāt savus reālos atradumus',
    optionSelfTools: 'Aktīvas saites uz Blacklight, EFF u.c.',
    optionSelfLearn: 'Reālas atziņas par jūsu privātumu',
    optionSelfBestFor: 'Praktisku rezultātu iegūšanai',
    optionDemoStarting: 'Iepriekš aizpildīts ar piemēra datiem',
    optionDemoTools: 'Pēc noklusējuma atspējoti (ar iespēju ieslēgt)',
    optionDemoLearn: 'Kā process darbojas, izmantojot parauga datus',
    optionDemoBestFor: 'Mācīšanās, grupu apmācības vai koplietotiem datoriem',
    privacyProtectedTitle: 'Jūsu privātums ir aizsargāts',
    privacyProtectedIntro: 'Tikai pašpārbaude. Bez kontiem. Bez izsekošanas.',
    privacyBullet1Title: 'Nekas neiziet ārpus jūsu pārlūkprogrammas',
    privacyBullet1Desc:
      'Visas jūsu atbildes tiek saglabātas tikai šīs pārlūkprogrammas lokālajā krātuvē šajā ierīcē',
    privacyBullet2Title: 'Dati netiek nosūtīti',
    privacyBullet2Desc: 'Mēs nevācam, neglabājam un nesūtām nekādu ievadīto informāciju',
    privacyBullet3Title: 'Jūs kontrolējat dzēšanu',
    privacyBullet3Desc: 'Izdzēsiet visus datus jebkurā brīdī, izmantojot atiestatīšanas pogu',
    privacyBullet4Title: 'Ārējie rīki ir jūsu izvēle',
    privacyBullet4Desc:
      'Noklikšķinot uz saitēm uz rīkiem, piemēram, Blacklight vai EFF, šīs vietnes atveras jaunās cilnēs un ir neatkarīgas no šī audita',
    beforeYouStartSummaryTitle: 'Pirms sākat (īss kopsavilkums)',
    beforeYouStartSummaryDo:
      'Ko darīsiet: veiksiet dažas pārbaudes un ierakstīsiet skaitļus un jā/nē atbildes.',
    beforeYouStartSummaryNeed:
      'Kas nepieciešams: apmēram 60 minūtes un piekļuve vietnēm, ko vēlaties skenēt.',
    beforeYouStartSummarySafety:
      'Drošība: tikai pašpārbaude; izmantojiet Fiktīvo režīmu, ja esat uz koplietojamas vai pārvaldītas ierīces.',
  },
  steps: {
    welcome: 'Sveicināti',
    publicExposure: 'Publiskā redzamība',
    trackers: 'Izsekotāji',
    fingerprinting: 'Pirkstu nospiedumu veidošana',
    accountDevice: 'Konts/Ierīce',
    cleanup: 'Tīrīšana',
    reportCard: 'Atskaite',
  },
  report: {
    title: 'Jūsu pēdas atskaite',
    subtitle: 'Jūsu atradumu kopsavilkums un ieteicamie nākamie soļi.',
    auditComplete: 'Audits pabeigts',
    privacyScoreOverview: 'Privātuma vērtējuma pārskats',
    whatThisMeans: 'Ko tas nozīmē',
    summaryPrefix: 'Galvenais secinājums:',
    nextActions: 'Jūsu nākamās darbības',
    downloadFilename: 'digitālās-pēdas-audits-{date}.json',
    publicExposureDetails: 'Publiskās redzamības detaļas',
    trackerAnalysis: 'Izsekotāju analīze',
    accountSettings: 'Konta un ierīces iestatījumi',
    fingerprintDetails: 'Pirkstu nospiedumu rezultāti',
    cleanupActions: 'Veiktās tīrīšanas darbības',
    publicExposureSignals: 'Publiskās redzamības signāli',
    trackingIntensity: 'Izsekošanas intensitāte',
    fingerprintUniqueness: 'Pirkstu nospieduma unikalitāte',
    accountDeviceAds: 'Konta/ierīces reklāmas',
    cleanupCompleted: 'Tīrīšana pabeigta',
    realityCheck: 'Realitātes pārbaude',
    saveExportCallout: 'Saglabājiet kopiju: lejupielādējiet atskaiti vai izdrukājiet kā PDF.',
  },
  facilitatorDashboard: {
    title: 'Facilitatora panelis',
    subtitle: 'Anonimizēti apkopotie rādītāji no visām laboratorijas sesijām',
    loading: 'Ielādē paneļa rādītājus...',
    loadError: 'Neizdevās ielādēt paneļa rādītājus.',
    retry: 'Mēģināt vēlreiz',
    liveUpdates: 'Tiešsaistes atjauninājumi',
    refresh: 'Atsvaidzināt',
    totalSessions: 'Kopējās sesijas',
    completed: 'Pabeigts',
    completionRate: 'Pabeigšanas rādītājs',
    avgTrackersFound: 'Vidēji atrastie izsekotāji',
    avgPrivacyScores: 'Vidējie privātuma rezultāti',
    deviceBreakdown: 'Ierīču sadalījums',
    noDeviceData: 'Pagaidām nav ierīču datu',
    sessionsOverTime: 'Sesijas laika gaitā (pēdējās 14 dienas)',
    noSessionData: 'Pagaidām nav sesiju datu. Sāciet dažus auditus, lai redzētu tendences.',
    privacyNotice:
      'Visi rādītāji ir anonimizēti. Netiek vākti vai glabāti personīgie identifikatori.',
  },
  notFound: {
    title: '404 Lapa nav atrasta',
    description: 'Šī lapa nav reģistrēta maršrutētājā.',
  },
  panic: {
    buttonLabel: 'Dzēst manus laboratorijas datus',
    title: 'Dzēst visus laboratorijas datus',
    description:
      'Tas neatgriezeniski izdzēsīs visu jūsu audita progresu un ierakstītos datus no šīs ierīces. Jūs sāksiet no jauna ar jaunu auditu. Šo darbību nevar atsaukt.',
    confirmButton: 'Jā, dzēst visu',
    toastTitle: 'Dati dzēsti',
    toastDescription: 'Visi jūsu laboratorijas dati ir dzēsti no šīs ierīces.',
  },
  sessionRecovery: {
    title: 'Atrasta nepabeigta sesija',
    description:
      'Šajā ierīcē ir saglabāta nepabeigta audita sesija. Turpiniet vai sāciet no jauna.',
    started: 'Sākts:',
    lastStep: 'Pēdējais solis:',
    resumeButton: 'Turpināt sesiju',
    startFreshButton: 'Sākt no jauna',
    unknownStep: 'Nezināms solis',
  },
  fictional: {
    bannerTitle: 'Fiktīvās personas režīms',
    bannerDescription: 'Izmanto piemēra datus. Turpiniet bez reālām meklēšanām.',
    tryLiveTools: 'Tomēr izmēģināt reālos rīkus',
    switchToReal: 'Pārslēgties uz Mana pēda',
    switchConfirmation: "Pārslēgties uz 'Mana pēda' režīmu. Tas dzēsīs pašreizējos demo datus.",
  },
  toolFallback: {
    title: 'Ja rīks neielādējas',
    description: 'Daži tīkli bloķē šos ārējos rīkus. Pamēģiniet:',
    suggestions: [
      'Pamēģiniet citu vietni vai rīku kategoriju',
      'Pamēģiniet izmantot mobilo telefonu ar mobilo datu savienojumu (apiet korporatīvo tīklu)',
      'Turpiniet Fiktīvās personas režīmā, lai apgūtu jēdzienus bez tiešsaistes rīkiem',
    ],
    confirmSwitch: 'Pārslēgties uz Fiktīvās personas režīmu. Tiks izmantoti demo dati.',
    switchButton: 'Lietot fiktīvo režīmu',
  },
  progress: {
    stepOf: 'Solis {current} no {total}',
    target: 'Mērķis: {minutes} min',
    left: 'Atlikuši: {time}',
  },
  publicExposure: {
    title: 'Publiskā redzamība',
    concept:
      'Meklēšanas rezultāti un datu brokeri var atklāt kontaktu un identitātes datus, kas pārsniedz to, ko publicējat.',
    whyItMatters:
      'Cilvēku meklēšanas vietnes un brokeri apkopo publiskos ierakstus, sociālos profilus un komerciālus datus. Šī apvienošana padara kontaktinformāciju viegli atrodamu.',
    outcomePreview: 'Rezultāts: publiskās redzamības signāls un konkrētas nākamās darbības.',
    pitfalls: [
      'Pašpārbaude tikai: meklējiet tikai savus identifikatorus vai izmantojiet Fiktīvās personas režīmu.',
      'Ja esat uz koplietojamas vai pārvaldītas ierīces, izmantojiet privāto/inkognito logu.',
      'Neievadiet sensitīvus identifikatorus (personas kodu, pilnu dzimšanas datumu) cilvēku meklēšanas vietnēs.',
    ],
    educationalContent: {
      sectionTitle: 'Publiskās redzamības izpratne',
      industryTitle: 'Datu brokeru ekosistēma aiz publiskās redzamības',
      industryParagraph1:
        'Ikdienišķas darbības, piemēram, veidlapas, vēlētāju reģistrācija un īpašuma ieraksti, rada datu punktus. Datu brokeru nozare šos ierakstus vāc, apvieno un pārdod lielā mērogā.',
      industryParagraph2:
        '2014. gada ASV Federālās tirdzniecības komisijas (FTC) ziņojums rāda mērogu: lielie datu brokeri glabāja simtiem miljardu datu punktu, un vienā piemērā bija vairāk nekā 1,1 miljards unikālu identitātes elementu un 1,4 miljardi patērētāju darījumu. Tas pats ziņojums min brokeri, kurš apgalvoja, ka aptver vairāk nekā 80% ASV patērētāju e‑pasta adrešu. Šie ir vēsturiski, pašu ziņoti piemēri, nevis pilnīgs skaitījums, taču tie parāda ekosistēmas mērogu.',
      dataSourcesTitle: 'Biežākie datu avoti',
      dataSourcesParagraph:
        'Cilvēku meklēšanas vietnes, piemēram, Spokeo, Whitepages un BeenVerified, apkopo ierakstus no:',
      dataSourcesList: [
        'Publiskie ieraksti: īpašuma reģistri, tiesu dokumenti, vēlētāju reģistri, laulību apliecības, bankrota lietas',
        'Komercavoti: kredītu pieteikumi, auto kredīti, īres līgumi, komunālo pakalpojumu ieraksti, un pat dažu štatu DMV, kas pārdod reģistrācijas datus',
        'Sociālie tīkli: jebkurš profils, kuru jebkad esat padarījis publisku, pat uz īsu brīdi',
        'Citi datu brokeri: šie uzņēmumi savstarpēji pārbauda un pārdod datus, veidojot savstarpēji saistītu tīklu',
      ],
      dataSourcesConclusion:
        'Liela daļa šo datu ir tehniski publiski; atšķirība ir mērogs un automatizācija. Uzņēmumi var salikt pilnu profilu sekundēs, nevis dienās.',
      meaningTitle: 'Ko tas nozīmē jums',
      meaningParagraph: 'Meklēšanas rezultāti var atklāt:',
      meaningList: [
        'Jūsu pašreizējās un iepriekšējās adreses',
        'Tālruņa numurus (tostarp tos, kurus uzskatījāt par privātiem)',
        'E-pasta adreses',
        'Jūsu radinieku un saistīto personu vārdus',
        'Jūsu aptuveno vecumu un dzimšanas datumu',
        'Īpašuma īpašumtiesības un aptuveno mājokļa vērtību',
        'Tiesu ierakstus un juridisko vēsturi',
      ],
      activityPreview:
        'Šis uzdevums parāda, kuri dati par jums ir atrodami un kur tie parādās. Daudzi ir pārsteigti par apjomu, pat bez sensitīvu datu publicēšanas.',
      sourcesTitle: 'Avoti',
      sources: [
        {
          label: 'ASV FTC (2014) — Datu brokeri: aicinājums uz caurspīdīgumu un atbildību',
          url: 'https://www.ftc.gov/system/files/documents/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014/140527databrokerreport.pdf',
        },
      ],
    },
    externalTools: 'Ārējie rīki',
    recordFindings: 'Ierakstiet savus atklājumus',
    searchPagesQuestion:
      'Cik meklēšanas rezultātu lapas saturēja personīgo informāciju (adrese, tālrunis, radinieki)?',
    searchPagesHelper:
      'Skaitiet unikālās lapas, nevis kopējos pieminējumus. Izmantojiet 5+, ja vairāk nekā 5.',
    peopleSearchQuestion:
      'Vai atradāt sevi cilvēku meklēšanas vietnēs (piem., Whitepages, Spokeo, BeenVerified)?',
    googleVisitedQuestion: "Vai apmeklējāt Google 'Rezultāti par jums' paneli?",
    removalRequestedQuestion: 'Vai pieprasījāt kādu meklēšanas rezultātu noņemšanu no Google?',
  },
  trackers: {
    title: 'Izsekotāju redzamība',
    concept:
      'Viena tīmekļa lapa var ielādēt desmitiem trešo pušu. Izsekošana ietver sīkdatnes, sesiju ierakstīšanu, pirkstu nospiedumus un citu.',
    whyItMatters:
      'Apmeklējot vietni, skripti var fiksēt uzvedību, kopīgot datus ar reklāmdevējiem un veidot profilu bez skaidra paziņojuma.',
    outcomePreview: 'Rezultāts: izsekošanas intensitātes signāls un konstatēto izsekotāju veidi.',
    pitfalls: [
      'Neskenējiet sensitīvas vietnes (bankas, veselības, skolu portālus). Izvēlieties publisku vietni, ko bieži apmeklējat.',
      'Rezultāti ir momentuzņēmums un var atšķirties pēc reģiona, pārlūkprogrammas un laika.',
      'Pārvaldītos tīklos rīki var būt bloķēti — vajadzības gadījumā izmantojiet Fiktīvo režīmu.',
    ],
    educationalContent: {
      sectionTitle: 'Tīmekļa izsekošanas izpratne',
      introTitle: 'Kas notiek pirmajā sekundē, kad apmeklējat vietni',
      introParagraph1:
        'Kad lapa ielādējas, skripti tiek izpildīti un pieprasījumi dodas uz trešo pušu serveriem, pirms lapa pilnībā renderējas. Tas ir neredzams lietotāja saskarnē, bet notiek lielākajā daļā vietņu.',
      introParagraph2:
        'Plaša mēroga mērījumi rāda, ka izsekošana ir plaši izplatīta. 2025. gada HTTP Archive Web Almanac ziņo, ka apmēram 75% lapu satur vismaz vienu izsekotāju, un Google izsekotāji ir apmēram 61% darbvirsmas lapu (Facebook izsekotāji — ap 22%). Precīzi skaitļi atšķiras pēc vietnes kategorijas un reģiona, bet kopaina ir konsekventa: lielākajā daļā lapu tiek ielādēta trešo pušu izsekošana.',
      trackingTypesTitle: 'Septiņi izsekošanas veidi, ko jūs atklāsiet',
      trackingTypesIntro:
        'Rīks, ko tūlīt izmantosiet (Blacklight, ko izveidoja The Markup), atklās, kas patiesībā notiek aizkulisēs:',
      trackingTypes: {
        adTrackers: {
          title: 'Reklāmu izsekotāji',
          description:
            'Tie nosūta apmeklējuma datus reklāmu tīkliem, kas veido interešu profilus, balstoties uz apskatītajām vietnēm un laiku tajās.',
        },
        thirdPartyCookies: {
          title: 'Trešo pušu sīkdatnes',
          description:
            'Šīs sīkdatnes iestata domēns, kas nav jūsu apmeklētā vietne. To var nolasīt citās vietnēs ar to pašu reklāmu tīklu, tādējādi iespējama starpvietņu izsekošana.',
        },
        sessionRecording: {
          title: 'Sesiju ierakstīšana',
          description:
            'Sesiju ierakstīšanas rīki fiksē mijiedarbību (klikšķus, ritināšanu un dažkārt taustiņsitienus) un atjauno sesijas atkārtošanai. Piemēri: Hotjar, FullStory.',
        },
        keystrokeLogging: {
          title: 'Taustiņu reģistrēšana',
          description:
            'Daži skripti ieraksta to, ko rakstāt formās, dažreiz pirms iesniegšanas. Tas var uztvert daļēji ievadītus datus.',
        },
        canvasFingerprinting: {
          title: 'Canvas pirkstu nospiedumi',
          description:
            'Jūsu pārlūkprogrammai var likt uzzīmēt neredzamu attēlu. Smalku atšķirību dēļ, kā jūsu konkrētā aparatūra un programmatūra renderē grafiku, šis attēls ir nedaudz atšķirīgs no gandrīz visiem citiem. Tas rada identifikatoru, kas darbojas pat tad, ja bloķējat sīkdatnes.',
        },
        facebookPixel: {
          title: 'Facebook Pixel',
          description:
            'Daudzas vietnes nosūta apmeklējuma datus Facebook, izmantojot iegultu izsekošanas pikseli, pat ja neesat pieteicies.',
        },
        googleAnalytics: {
          title: 'Google Analytics',
          description:
            'Atrodas lielākajā daļā vietņu, Google Analytics izseko apmeklētājus un kopīgo datus ar Google reklāmas ekosistēmu.',
        },
      },
      beyondAdsTitle: 'Kāpēc tas ir svarīgi ne tikai reklāmu dēļ',
      beyondAdsParagraph: 'Izsekošana ietekmē vairāk nekā reklāmas:',
      beyondAdsList: [
        'Cenu diskriminācija: daži tirgotāji rāda atšķirīgas cenas, balstoties uz jūsu pārlūkošanas vēsturi vai secināto ienākumu līmeni',
        'Apdrošināšana un nodarbinātība: datu brokeri pārdod uzvedības profilus, kas var ietekmēt kredīta lēmumus, apdrošināšanas likmes un pat pieņemšanu darbā',
        'Profila noturība: no izsekošanas datiem veidotie profili saglabājas gadiem un tiek tirgoti starp uzņēmumiem',
        'Drošības risks: katrs uzņēmums, kas glabā datus par jums, ir potenciāls uzlaušanas mērķis',
      ],
      activityPreview:
        'Šis uzdevums skenē vietni, ko izmantojat, un parāda, kādi izsekotāji tiek ielādēti. Rezultāti palīdz sasaistīt kategorijas ar reālām lapām.',
      sourcesTitle: 'Avoti',
      sources: [
        {
          label: 'HTTP Archive Web Almanac 2025 — Privātums (izsekotāju izplatība)',
          url: 'https://almanac.httparchive.org/en/2025/privacy',
        },
      ],
    },
    externalTool: 'Ārējais rīks',
    blacklightTip:
      'Padoms: Mēģiniet skenēt ziņu vai iepirkšanās vietni, ko bieži apmeklējat. Izvairieties no sensitīvām vietnēm, piemēram, veselības portāliem vai bankām.',
    recordFindings: 'Ierakstiet savus atklājumus',
    blacklightRunQuestion: 'Vai palaidāt Blacklight skenēšanu?',
    siteCategoryQuestion: 'Kāda veida vietni jūs skenējāt?',
    trackerCountQuestion: 'Cik izsekotāju tika atklāts?',
    trackerCountHelper:
      'Ievadiet skaitli, kas parādīts Blacklight kopsavilkumā. 0-5 izsekotāji ir salīdzinoši maz, 6-15 ir tipiski komerciālām vietnēm, 16+ norāda uz intensīvu izsekošanu.',
    cookiesFlaggedQuestion: 'Vai tika atzīmētas trešo pušu sīkdatnes?',
    sessionRecordingQuestion: 'Vai tika atklāta sesiju ierakstīšana?',
    sessionRecordingHelper:
      'Sesiju ierakstīšana tver peles kustības, klikšķus un taustiņu nospiešanas',
    keyLoggingQuestion: 'Vai tika atklāta taustiņu reģistrēšana?',
    keyLoggingHelper: 'Taustiņu reģistrēšana tver to, ko jūs rakstāt formās',
    fingerprintingQuestion: 'Vai tika atklāta pirkstu nospiedumu vākšana?',
    fingerprintingHelper:
      'Pirkstu nospiedumu vākšana identificē jūsu pārlūkprogrammu bez sīkdatnēm',
  },
  fingerprinting: {
    title: 'Pirkstu nospiedumi',
    concept:
      'Sīkdatņu dzēšana samazina vienu izsekošanas kanālu, taču pārlūkprogrammas pirkstu nospiedumi joprojām var identificēt ierīci, izmantojot iestatījumu, fontu un aparatūras kombinācijas.',
    whyItMatters:
      'Privātā pārlūkošana nemaina tādus atribūtus kā ekrāna izmērs, fonti, laika josla vai WebGL iestatījumi. Šie atribūti var veidot stabilu pirkstu nospiedumu dažādās vietnēs.',
    outcomePreview:
      'Rezultāts: vai jūsu pārlūks ir unikāli identificējams un aizsardzības līmenis.',
    pitfalls: [
      'Palaidiet testu tajā pārlūkā, ko lietojat visbiežāk — paplašinājumi un iestatījumi maina rezultātu.',
      '“Unikāls” nenozīmē, ka jūsu vārds ir zināms; tas nozīmē, ka jūs var atšķirt.',
      'Privātā pārlūkošana slēpj vēsturi, nevis pirkstu nospiedumu.',
    ],
    educationalContent: {
      sectionTitle: 'Pārlūkprogrammu pirkstu nospiedumu izpratne',
      introTitle: 'Izsekošanas metode, ko nevar apturēt, vienkārši dzēšot sīkdatnes',
      introParagraph:
        'Sīkdatņu dzēšana samazina vienu izsekošanas veidu. Pārlūkprogrammas pirkstu nospiedumi izmanto ierīces un pārlūkprogrammas atribūtus, nevis glabātus identifikatorus. EFF Panopticlick pētījumi parādīja, ka daudzas pārlūkprogrammas ir unikāli identificējamas, un EFF norāda, ka liela daļa pārlūkprogrammu joprojām rada unikālu pirkstu nospiedumu arī bez sīkdatnēm. Unikalitāte mainās, uzlabojoties aizsardzībai, taču pirkstu nospiedumu veidošana ir izplatīta.',
      howItWorksTitle: 'Kā jūsu pārlūkprogramma nodod jūsu identitāti',
      howItWorksParagraph:
        'Pirkstu nospiedumu veidošana savāc desmitiem ierīces un pārlūkprogrammas atribūtu, kas kopā veido parakstu. Atsevišķi atribūti var būt izplatīti, bet to kombinācija var būt unikāla. Biežākie ievades dati:',
      attributesList: [
        'Ekrāna izšķirtspēja un krāsu dziļums: jūsu displeja precīzie pikseļu izmēri',
        'Laika josla un valoda: jūsu atrašanās vieta un valodas preferences',
        'Instalētie fonti: konkrētā fontu kombinācija jūsu sistēmā ir ļoti raksturīga',
        'Pārlūkprogrammas spraudņi: kādi paplašinājumi un to versijas jums ir instalēti',
        'Aparatūras specifikācijas: informācija par videokarti, CPU un pieejamo atmiņu',
        'WebGL renderēšana: pārlūkprogramma var zīmēt 3D grafiku, un mikroskopiskas atšķirības tajā, kā jūsu aparatūra to renderē, rada unikālu parakstu',
        'Audio pirkstu nospiedumi: līdzīga tehnika, izmantojot audio apstrādi',
        'Canvas pirkstu nospiedumi: neredzama 2D attēla zīmēšana, lai noteiktu renderēšanas atšķirības',
      ],
      statisticsTitle: 'Kāpēc pirkstu nospiedumi bieži ir unikāli',
      statisticsParagraph:
        'EFF Panopticlick projekts un vēlākā EFF metodika skaidro, ka daudzu atribūtu (fonti, ekrāna izmērs, aparatūra u.c.) kombinācija var veidot pirkstu nospiedumu, kas bieži ir pietiekami unikāls, lai izsekotu lietotāju dažādās vietnēs. Pretpirkstu nospiedumu aizsardzība var samazināt unikalitāti, taču rezultāti atšķiras atkarībā no pārlūkprogrammas un iestatījumiem.',
      privateBrowsingTitle: 'Kāpēc privātā pārlūkošana šeit nepalīdz',
      privateBrowsingParagraph1:
        'Inkognito vai privātais režīms nesaglabā sīkdatnes vai vēsturi, taču nemaina ekrāna izšķirtspēju, fontus, videokarti vai laika joslu. Tāpēc pirkstu nospiedums privātajā režīmā bieži sakrīt ar parasto, un vietnes jūs var atpazīt.',
      privateBrowsingParagraph2:
        'Dažas uz privātumu vērstas pārlūkprogrammas, piemēram, Firefox un Brave, ir ieviesušas pirkstu nospiedumu aizsardzību, kas vai nu bloķē noteiktas vākšanas tehnikas, vai apzināti sniedz vispārīgas atbildes.',
      activityPreview:
        'Šis tests parāda, vai pirkstu nospiedums ir unikāls, cik spēcīga ir aizsardzība un kuri atribūti jūs padara identificējamu. Izmantojiet rezultātus, lai izlemtu par iestatījumu vai pārlūka maiņu.',
      sourcesTitle: 'Avoti',
      sources: [
        {
          label: 'EFF — Panopticlick (pārlūkprogrammu pirkstu nospiedumu pētījums)',
          url: 'https://www.eff.org/press/releases/eff-launches-panopticlick-unique-fingerprint-every-browser',
        },
        {
          label: 'EFF Surveillance Self-Defense — Kas ir pirkstu nospiedumi? (pārskatīts 2024)',
          url: 'https://ssd.eff.org/module/what-fingerprinting',
        },
      ],
    },
    externalTools: 'Ārējie rīki',
    whatToLookFor: 'Uz ko pievērst uzmanību',
    effRunQuestion: 'Vai palaidāt EFF Cover Your Tracks testu?',
    browserUniqueQuestion:
      'Vai tests norāda, ka jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls?',
    browserUniqueHelper:
      "Ja jūsu pirkstu nospiedums ir 'unikāls', vietnes var jūs identificēt pat bez sīkdatnēm. Privātuma pārlūkprogrammas vai paplašinājumi kā Privacy Badger var palīdzēt samazināt unikalitāti.",
    trackingProtectionQuestion: 'Kādu izsekošanas aizsardzības līmeni ziņoja tests?',
    trackingProtectionHelper: 'Tas norāda, cik labi jūsu pārlūkprogramma bloķē zināmos izsekotājus',
  },
  accountDevice: {
    title: 'Konta un ierīces identifikatori',
    concept:
      'Izsekošana notiek arī caur kontu iestatījumiem, ierīču ID un lietotņu izsekošanas atļaujām.',
    whyItMatters:
      'Pat ja bloķējat vietņu izsekotājus, konti un ierīces var joprojām kopīgot datus ar reklāmdevējiem, izmantojot noturīgus identifikatorus dažādās lietotnēs un pakalpojumos.',
    outcomePreview: 'Rezultāts: kuri reklāmu iestatījumi ir aktīvi un kur tos mainīt.',
    deviceSelectionTitle: 'Kuras mobilās ierīces vēlaties pārskatīt?',
    deviceSelectionHelper:
      'Izvēlieties platformas, ko lietojat, lai parādītu atbilstošos iestatījumus.',
    deviceSelectionOptionBoth: 'Gan iOS, gan Android',
    deviceSelectionOptionNone: 'Es neizmantoju viedtālruni/planšeti',
    pitfalls: [
      'Ja ierīce ir darba/skolas pārvaldīta, daži iestatījumi var būt bloķēti.',
      'Pārbaudiet katru izmantoto ierīci (tālruni/planšeti/klēpjdatoru) — iestatījumi ne vienmēr sinhronizējas.',
      'Iestatījumu maiņa var ietekmēt ieteikumus; pierakstiet, ko maināt.',
    ],
    educationalContent: {
      sectionTitle: 'Mobilās un konta izsekošanas izpratne',
      introTitle: 'Identifikatori, kas seko jums caur katru lietotni',
      introParagraph:
        'Tīmekļa izsekošana izmanto sīkdatnes, bet mobilās lietotnes izmanto operētājsistēmas reklāmas ID. Android izmanto Google Advertising ID (GAID), bet Apple ierīces — Identifier for Advertisers (IDFA).',
      howItWorksTitle: 'Kā darbojas mobilie reklāmas ID',
      howItWorksParagraph:
        'Operētājsistēma izveido unikālu reklāmas ID. Lietotnes tam var piekļūt, lai iespējotu starp‑lietotņu reklāmu un izsekošanu. Tas ļauj:',
      howItWorksList: [
        'Jūs meklējat lidojumus vienā lietotnē → jūs redzat viesnīcu reklāmas pavisam citā lietotnē',
        'Jūs pārlūkojat produktus iepirkšanās lietotnē → jūs redzat šo produktu reklāmas sociālo tīklu lietotnēs',
        'Jūs spēlējat bezmaksas spēli → spēle kopīgo jūsu aktivitāti ar reklāmu tīkliem, kas piesaistīti jūsu reklāmas ID',
        'Jūsu atrašanās vietas dati, lietotņu lietošanas paradumi un uzvedības profils ir sasaistīti ar šo vienoto identifikatoru',
      ],
      scaleTitle: 'Mobilās izsekošanas mērogs',
      scaleParagraph:
        'Atšķirībā no sīkdatnēm reklāmas ID seko jums starp lietotnēm. Tā noturība ļauj veidot profilus, sasaistīt lietotņu un tīmekļa aktivitāti un kopīgot datus ar reklāmu tīkliem un datu brokeriem.',
      attTitle: 'Apple App Tracking Transparency mainīja spēles noteikumus',
      attParagraph1:
        '2021. gadā Apple ieviesa App Tracking Transparency (ATT), kas prasa lietotnēm lūgt atļauju pirms piekļuves IDFA. Lietotāji redz uznirstošo logu, piemēram: "Atļaut šai lietotnei izsekot jūsu aktivitāti citās uzņēmumu lietotnēs un vietnēs?" Pirms ATT lietotnes piekļuva IDFA bez atļaujas.',
      attParagraph2:
        'Pēc ATT lietotājiem ir skaidri jāpiekrīt. Ziņotās piekrišanas likmes ļoti atšķiras atkarībā no mērījumu metodes, lietotņu kategorijas un ģeogrāfijas. Piemēram, AppsFlyer 2024. gada 1. ceturksnī ziņoja par globālu piekrišanas līmeni ap 50%, bet Singular 2025. gada 4. ceturksnī ziņoja par daudz zemāku piekrišanu pirmajā lietotnes atvēršanā. Tāpēc jebkuru vienu skaitli uztveriet kā kontekstam specifisku. Google ir paziņojis, ka Privacy Sandbox uz Android mērķis ir darboties bez starp‑lietotņu identifikatoriem, piemēram, reklāmas ID.',
      activityPreviewTitle: 'Ko jūs pārbaudīsiet šajā aktivitātē',
      activityPreviewList: [
        'Google reklāmu personalizācija: vai Google veido jūsu interešu profilu visos Google pakalpojumos',
        'Apple Advertising: vai Apple izmanto jūsu datus mērķētām reklāmām savā ekosistēmā',
        'Android reklāmas ID: jūs varat to atiestatīt (izveidot jaunu ID) vai pilnībā dzēst',
        'iOS App Tracking Transparency: vai lietotnes vispār drīkst lūgt izsekot jūs',
      ],
      activityPreviewConclusion:
        'Daudzi atklāj, ka reklāmu personalizācija pēc noklusējuma bija ieslēgta gadiem, veidojot profilu bez tiešas piekrišanas.',
      sourcesTitle: 'Avoti',
      sources: [
        {
          label: 'AppsFlyer (2024) — ATT piekrišanas rādītāji (2024. gada 1. ceturksnis)',
          url: 'https://www.appsflyer.com/resources/reports/app-tracking-transparency-opt-in-rate/',
        },
        {
          label: 'Singular (2025) — Q4 2025 ieskati (ATT piekrišana pirmajā atvēršanā)',
          url: 'https://www.singular.net/blog/singular-q4-2025-insights/',
        },
        {
          label: 'Google Android Developers Blog (2022) — Privacy Sandbox uz Android',
          url: 'https://android-developers.googleblog.com/2022/02/introducing-privacy-sandbox-android.html',
        },
      ],
    },
    externalTools: 'Ārējie rīki',
    recordSettings: 'Ierakstiet savus iestatījumus',
    googleAdsQuestion: 'Vai Google personalizētās reklāmas ir ieslēgtas vai izslēgtas?',
    appleAdsQuestion: 'Vai Apple personalizētās reklāmas ir ieslēgtas vai izslēgtas?',
    androidIdQuestion: 'Kādu darbību veicāt ar savu Android reklāmas ID?',
    iosAttQuestion: 'Kāds ir jūsu iOS lietotņu izsekošanas caurspīdīguma iestatījums?',
    iosAttHelper: 'Iestatījumi > Privātums un drošība > Izsekošana',
  },
  cleanup: {
    title: 'Tīrīšanas sprints',
    concept:
      'Veiciet darbības, lai noņemtu esošos izsekošanas datus un ieslēgtu privātuma aizsardzību.',
    whyItMatters:
      'Sīkdatņu un vietnes datu dzēšana noņem esošos izsekotājus. Trešo pušu sīkdatņu bloķēšana novērš daudzus nākotnes izsekošanas mēģinājumus. Šie soļi dod tūlītējus, praktiskus ieguvumus.',
    outcomePreview: 'Rezultāts: tīrīšanas statuss un konkrētas nākamās darbības.',
    pitfalls: [
      'Sīkdatņu dzēšana jūs izrakstīs; pārliecinieties, ka zināt paroles.',
      'Ja esat uz koplietojamas vai pārvaldītas ierīces, ievērojiet vietējos noteikumus pirms iestatījumu maiņas.',
      'Nedzēsiet saglabātās paroles, ja neesat gatavs tās aizstāt ar paroļu pārvaldnieku.',
    ],
    educationalContent: {
      sectionTitle: 'Kāpēc digitālā higiēna ir svarīga',
      breachesTitle: 'Kāpēc datu noplūdes turpinās',
      breachesParagraph1:
        'Verizon 2024. gada Data Breach Investigations Report (DBIR) rāda, ka cilvēciskais faktors iesaistīts ap 68% noplūdēs, un nozagtas piekļuves dati joprojām ir viens no biežākajiem sākotnējās piekļuves veidiem (ap 31% Verizon 10 gadu analīzē).',
      breachesParagraph2:
        'Tāpēc paroļu higiēna un daudzfaktoru autentifikācija ir īpaši svarīga. Tās nepasargā no visa, bet samazina kontu pārņemšanas un uzbrukumu ar nozagtām parolēm risku.',
      cookiesTitle: 'Kāpēc sīkdatnes ir svarīgas jūsu drošībai',
      cookiesParagraph:
        'Sīkdatnes nav tikai par reklāmām; tās uztur pieteikšanos. Kad apmeklējat e‑pastu vai banku un neievadāt paroli, sīkdatne pierāda, ka esat autentificējies. Tam ir drošības sekas:',
      cookiesList: [
        'Ja kāds piekļūst jūsu pārlūkprogrammai, viņš piekļūst arī jūsu pieteiktajiem kontiem',
        'Sesijas nolaupīšana: ja uzbrucējs iegūst jūsu sīkdatnes (caur ļaunprogrammatūru, nedrošu Wi‑Fi vai kompromitētu vietni), viņš var izlikties par jums, nezinot paroli',
        'Ilgdzīvojošas sesijas: dažas sīkdatnes glabājas mēnešiem vai gadiem, tāpēc viena noplūde nozīmē ilgu riska periodu',
      ],
      blockingTitle: 'Trešo pušu sīkdatņu bloķēšana: vienīgais iestatījums ar lielāko ietekmi',
      blockingParagraph1:
        'Ja ir viens privātuma iestatījums ar lielu ietekmi un mazu apgrūtinājumu, tā ir trešo pušu sīkdatņu bloķēšana. Pirmās puses sīkdatnes nāk no apmeklētās vietnes un ir vajadzīgas pieteikšanai un funkcijām. Trešo pušu sīkdatnes nāk no ārējiem domēniem un galvenokārt tiek izmantotas starpvietņu izsekošanai.',
      blockingParagraph2: 'Mūsdienu pārlūkprogrammas ar to rīkojas atšķirīgi:',
      blockingBrowsers: [
        'Firefox: izmanto "Total Cookie Protection", lai izolētu trešo pušu sīkdatnes katrai vietnei atsevišķi',
        'Safari: pēc noklusējuma bloķē trešo pušu sīkdatnes ar "Prevent Cross-Site Tracking"',
        'Chrome: joprojām pēc noklusējuma atļauj trešo pušu sīkdatnes (Google atteicās no plāniem tās pakāpeniski izbeigt)',
        'Šī iestatījuma ieslēgšana pārtrauc starpvietņu izsekošanu, neietekmējot jūsu iespēju normāli lietot vietnes',
      ],
      hibpTitle: 'Have I Been Pwned: realitātes pārbaude',
      hibpParagraph1:
        'Pēc izvēles veicamā aktivitāte šajā solī — Have I Been Pwned pārbaude — lielākajai daļai cilvēku ir patiesības brīdis. 2026. gada janvārī HIBP uzskaitīja 941 pārkāptu vietni un ap 17,4 miljardus kompromitētu kontu. Šie kopskaiti mainās, pievienojot jaunas noplūdes.',
      hibpParagraph2:
        'Kad ievadāt savu e‑pasta adresi, tas pārbauda, vai šis e‑pasts ir parādījies kādā zināmā datu noplūdē. Lielākajai daļai cilvēku, kuriem e‑pasta adrese ir bijusi vairāk nekā dažus gadus, atbilde ir "jā" — bieži vien vairākās noplūdēs. Tāpēc parolēs higiēna ir svarīga: unikālas paroles katram kontam, vēlams paroļu pārvaldniekā, un daudzfaktoru autentifikācija, kur vien iespējams.',
      activityPreviewTitle: 'Ko jūs tūlīt darīsiet',
      activityPreviewList: [
        'Notīrīt sīkdatnes un vietnes datus: noņemt esošos izsekotājus un piespiest jaunu autentifikāciju',
        'Bloķēt trešo pušu sīkdatnes: novērst turpmāku starpvietņu izsekošanu',
        'Pārbaudīt datu noplūdi: noskaidrot, vai jūsu piekļuves dati ir kompromitēti',
        'Plānot paroļu higiēnas darbības: atjaunināt kompromitētās paroles, ieslēgt MFA',
      ],
      activityPreviewConclusion:
        'Šī soļa beigās jūs būsiet samazinājis izsekošanas noturību un uzlabojis kontu drošību ar konkrētām izmaiņām.',
      sourcesTitle: 'Avoti',
      sources: [
        {
          label: 'Verizon 2024 Data Breach Investigations Report (DBIR) — galvenie secinājumi',
          url: 'https://www.verizon.com/about/news/2024-data-breach-investigations-report',
        },
        {
          label: 'Have I Been Pwned — Pwned websites statistika',
          url: 'https://haveibeenpwned.com/PwnedWebsites',
        },
      ],
    },
    browserInstructions: 'Pārlūkprogrammas instrukcijas priekš',
    breachExposure: 'Datu noplūdes pārbaude',
    breachExposureDesc:
      'Pārbaudiet, vai jūsu e-pasta adreses ir parādījušās zināmās datu noplūdēs. Tas aizņem tikai 2 minūtes.',
    recordActions: 'Ierakstiet savas darbības',
    cookiesClearedQuestion: 'Vai izdzēsāt savas sīkdatnes un vietnes datus?',
    cookiesBlockedQuestion: 'Vai iespējojāt trešo pušu sīkdatņu bloķēšanu?',
    passwordHygieneQuestion: 'Vai veicāt kādu paroļu higiēnas darbību?',
    passwordHygieneHelper:
      'Piemēri: pārbaudījāt Have I Been Pwned, iespējojāt MFA, atjauninājāt paroli vai pārskatījāt savu paroļu pārvaldnieku',
    cookiesWarning:
      'Sīkdatņu dzēšana jūs izrakstīs no vietnēm. Pārliecinieties, ka zināt savas paroles vai jums ir paroļu pārvaldnieks, pirms turpināt.',
  },
  instructions: {
    whatToDo: 'Ko darīt',
    publicExposure1:
      'Meklējiet savu vārdu (pēdiņās) Google un saskaitiet, cik rezultātu lapas parāda personīgo informāciju, piemēram, adresi vai tālruni',
    publicExposure2:
      'Pārbaudiet, vai parādāties personu meklēšanas vietnēs (piemēram, Spokeo, WhitePages vai BeenVerified)',
    publicExposure3: 'Ierakstiet savus atklājumus zemāk, pēc tam turpiniet uz nākamo soli',
    trackers1:
      'Atveriet Blacklight un ievadiet vietni, kuru bieži apmeklējat (piem., ziņu vai iepirkšanās vietni)',
    trackers2:
      'Pārskatiet, ko rīks atrod: izsekotājus, sīkdatnes, sesiju ierakstītājus un pirkstu nospiedumus',
    trackers3: 'Ierakstiet izsekotāju skaitu un visus satraucošos atradumus zemāk',
    fingerprinting1: 'Noklikšķiniet uz saites, lai atvērtu EFF Cover Your Tracks testu',
    fingerprinting2:
      'Palaidiet testu un atzīmējiet, vai jūsu pārlūkprogrammas pirkstu nospiedums ir unikāls',
    fingerprinting3:
      'Pārbaudiet savu izsekošanas aizsardzības līmeni un ierakstiet rezultātus zemāk',
    accountDevice1:
      'Pārbaudiet savus Google reklāmu iestatījumus un atzīmējiet, vai personalizētās reklāmas ir ieslēgtas vai izslēgtas',
    accountDevice2:
      'Pārbaudiet Apple/Android reklāmu iestatījumus jebkurās izmantotajās ierīcēs (ja neattiecas, izvēlieties N/P)',
    accountDevice3:
      'Ierakstiet savus pašreizējos iestatījumus zemāk - vēlāk tos varat mainīt, ja vēlaties',
    cleanup1:
      'Dzēsiet savas sīkdatnes un vietnes datus, izmantojot sniegtos pārlūkprogrammas norādījumus',
    cleanup2: 'Iespējojiet trešo pušu sīkdatņu bloķēšanu savos pārlūkprogrammas iestatījumos',
    cleanup3: 'Pēc izvēles pārbaudiet Have I Been Pwned, lai atrastu e-pasta noplūdes',
  },
  siteCategories: {
    news: 'Ziņas',
    shopping: 'Iepirkšanās',
    social: 'Sociālie',
    health: 'Veselība',
    other: 'Cits',
  },
  trackingProtection: {
    strong: 'Spēcīga',
    partial: 'Daļēja',
    weak: 'Vāja/Nav',
  },
  adSettings: {
    on: 'Ieslēgts',
    off: 'Izslēgts',
    notUsed: 'Neizmantoju',
    notApplicable: 'N/P',
  },
  androidActions: {
    reset: 'Atiestatīts',
    deleted: 'Dzēsts',
    none: 'Bez izmaiņām',
  },
  iosAtt: {
    allowApps: 'Lietotnes var pieprasīt',
    blocked: 'Bloķēts',
  },
  cleanupActions: {
    yes: 'Jā, izdzēsts',
    no: 'Nē, izlaists',
    later: 'Izdarīšu vēlāk',
    alreadyBlocked: 'Jau bloķēts',
  },
  externalTools: {
    googleResultsTitle: "Google 'Rezultāti par jums'",
    googleResultsDesc:
      'Skatiet, kādu personīgo informāciju Google ir atradis par jums meklēšanas rezultātos. Nepieciešams Google konts un var nebūt pieejams visos reģionos - ja nav pieejams, meklējiet savu vārdu manuāli pēdiņās.',
    findContactTitle: 'Atrast kontaktinformācijas vietnes',
    findContactDesc:
      'Meklējiet savu vārdu pēdiņās plus pilsētu/valsti, lai atrastu personu meklēšanas sarakstus',
    requestRemovalTitle: 'Pieprasīt dzēšanu',
    requestRemovalDesc:
      "Lielākajai daļai personu meklēšanas vietņu ir datu dzēšanas lapas. Meklējiet '[vietnes nosaukums] atteikties' vai 'dzēst datus', lai tās atrastu",
    blacklightTitle: 'Blacklight no The Markup',
    blacklightDesc:
      'Ievadiet jebkuru vietnes URL, lai redzētu, kādus izsekotājus, sīkdatnes un sesiju ierakstītājus tā izmanto',
    effCoverTracksTitle: 'EFF Cover Your Tracks',
    effCoverTracksDesc:
      'Pārbaudiet, cik unikāls ir jūsu pārlūkprogrammas pirkstu nospiedums un cik labi esat aizsargāts pret izsekošanu',
    effExplainerTitle: 'Izpratne par pirkstu nospiedumiem',
    effExplainerDesc:
      'Uzziniet vairāk par to, kā darbojas pārlūkprogrammas pirkstu nospiedumi un kāpēc tas ir svarīgi',
    googleAdSettingsTitle: 'Google reklāmu iestatījumi',
    googleAdSettingsDesc:
      'Skatiet un kontrolējiet, kā Google personalizē reklāmas, pamatojoties uz jūsu darbībām',
    appleAdsTitle: 'Apple reklāmu iestatījumi',
    appleAdsDesc: 'Iestatījumi > Privātums un drošība > Apple reklāma',
    androidAdIdTitle: 'Android reklāmas ID',
    androidAdIdDesc: 'Iestatījumi > Privātums > Reklāmas > Atiestatīt vai dzēst reklāmas ID',
    iosAttTitle: 'iOS lietotņu izsekošanas caurspīdīgums',
    iosAttDesc: 'Iestatījumi > Privātums un drošība > Izsekošana',
    clearCookiesTitle: 'Dzēst sīkdatnes un vietnes datus',
    clearCookiesDesc: 'Noņemiet saglabātos izsekošanas datus no savas pārlūkprogrammas',
    blockCookiesTitle: 'Bloķēt trešo pušu sīkdatnes',
    blockCookiesDesc: 'Novērsiet starpvietņu izsekošanas sīkdatņu saglabāšanu',
    hibpTitle: 'Have I Been Pwned',
    hibpDesc: 'Pārbaudiet, vai jūsu e-pasts ir parādījies zināmās datu noplūdēs',
    stepsForBrowser: 'Soli pa solim instrukcijas priekš {browser}',
  },
  badges: {
    optional: 'Neobligāti',
  },
  nextActions: {
    skippedStep: 'Jūs izlaidāt "{stepName}". Pabeidziet šo sadaļu, kad jums būs laiks.',
    requestGoogleRemoval:
      "Pieprasiet savas personīgās informācijas dzēšanu no Google meklēšanas rezultātiem, izmantojot 'Rezultāti par jums' rīku.",
    optOutPeopleSearch:
      'Dzēsiet savu informāciju no personu meklēšanas vietnēm. Apmeklējiet datu aizsardzības iestādes vietni, lai uzzinātu vairāk par savām tiesībām.',
    installContentBlocker:
      'Instalējiet uzticamu satura bloķētāju, piemēram, uBlock Origin, lai samazinātu izsekotāju ietekmi.',
    fingerprintingRisk:
      "Jūsu pārlūkprogramma ir unikāli identificējama. Uzziniet vairāk par pirkstu nospiedumiem eff.org/pages/cover-your-tracks un izmēģiniet Firefox ar Uzlabotu izsekošanas aizsardzību iestatītu uz 'Stingrs'.",
    turnOffGoogleAds:
      'Izslēdziet personalizētās reklāmas savos Google reklāmu centra iestatījumos.',
    clearCookies:
      'Dzēsiet savas pārlūkprogrammas sīkdatnes un vietnes datus, lai noņemtu esošos izsekotājus.',
    enableCookieBlocking:
      'Iespējojiet trešo pušu sīkdatņu bloķēšanu savas pārlūkprogrammas iestatījumos.',
    checkHibp:
      'Pārbaudiet Have I Been Pwned (haveibeenpwned.com), lai redzētu, vai jūsu e-pasts ir bijis datu noplūdēs, un pierakstieties paziņojumiem haveibeenpwned.com/NotifyMe.',
    allDone:
      'Lieliski padarīts! Apsveriet iespēju veikt šo auditu vēlreiz pēc dažiem mēnešiem, lai sekotu līdzi savai digitālajai pēdai.',
  },
  footer: {
    privacyNotice:
      'Jūsu dati paliek šajā ierīcē. Mēs nekad neapkopojam un nepārsūtām personisko informāciju.',
  },
  realityCheckItems: {
    snapshot: 'Šis ir momentuzņēmums, nevis pilnīgs jūsu digitālās pēdas apskats.',
    variesByLocation:
      'Rezultāti atšķiras atkarībā no valsts, valodas un tīkla, kuram esat pieslēdzies.',
    personalization:
      'Meklēšanas personalizācija nozīmē, ka citi var redzēt atšķirīgus rezultātus par jums.',
    changesOverTime:
      'Jūsu digitālā pēda mainās laika gaitā, jo tiek apkopoti un kopīgoti jauni dati.',
    dataOnDevice:
      'Visi dati paliek jūsu ierīcē. Šis vednis nekad neapkopo, neuzglabā un nepārsūta personisko informāciju.',
  },
  skippedSections: {
    title: 'Izlaistās sadaļas',
    description:
      'Jūs izlaidāt šīs sadaļas. Aizpildiet tās vēlāk, lai iegūtu precīzāku priekšstatu par savu digitālo pēdu.',
  },
  printInfo: {
    generated: 'Izveidots',
    dataStoredLocally: 'Visi dati glabājas tikai lokāli',
  },
  charts: {
    radarView: 'Radara skats',
    scoreComparison: 'Punktu salīdzinājums',
    privacyScore: 'Privātuma rezultāts',
    legendGood: 'Labi (100)',
    legendWarning: 'Brīdinājums (60)',
    legendCritical: 'Kritiski (25)',
  },
  metrics: {
    publicExposureLabel: 'Publiskā atpazīstamība',
    trackingIntensityLabel: 'Izsekošanas intensitāte',
    fingerprintLabel: 'Pārlūka pirkstu nospiedums',
    adSettingsLabel: 'Kontu/ierīču reklāmas',
    cleanupLabel: 'Tīrīšana pabeigta',
    valueLow: 'Zema',
    valuePages: '{count, plural, one {# lapa} few {# lapas} other {# lapas}}',
    valueUnique: 'Unikāls',
    valueNotUnique: 'Nav unikāls',
    valueUnknown: 'Nezināms',
    valueLimited: 'Ierobežotas',
    valueActive: 'Aktīvas',
    valueCheckSettings: 'Pārbaudīt iestatījumus',
    valueDone: 'Pabeigts',
    valuePartial: 'Daļēji',
    valueNotYet: 'Vēl nav',
    valueNA: 'Nav pieejams',
    valueNotAnswered: 'Nav atbildēts',
    valueSkipped: 'Izlaists',
    exposureGood:
      'Lieliski! Jūsu personīgā informācija netika viegli atrasta meklēšanas rezultātos.',
    exposureWarning:
      'Daļa personīgās informācijas ir redzama. Apsveriet iespēju pieprasīt noņemšanu no meklētājprogrammām.',
    exposureCritical:
      'Jūsu personīgā informācija ir atklāta. Rīkojieties, lai to noņemtu no datu brokeriem un meklēšanas rezultātiem.',
    trackingGood: 'Skenētajā vietnē ir maz izsekotāju. Tas ir labāk nekā vidēji.',
    trackingWarning: 'Konstatēta mērena izsekošana. Apsveriet satura bloķētāja izmantošanu.',
    trackingCritical: 'Augsts izsekotāju skaits. Šī vietne intensīvi monetizē jūsu uzmanību.',
    trackingUnknown: 'Palaidiet Blacklight skenēšanu, lai redzētu izsekotāju skaitu.',
    fingerprintGood:
      'Jūsu pārlūks saplūst ar citiem, padarot pirkstu nospiedumu noteikšanu grūtāku.',
    fingerprintCritical:
      'Jūsu pārlūks ir unikāli identificējams. Apsveriet Firefox ar uzlabotu izsekošanas aizsardzību.',
    fingerprintUnknown: 'Palaidiet EFF testu, lai pārbaudītu sava pārlūka pirkstu nospiedumu.',
    adsGood: 'Esat atspējojis reklāmu personalizāciju savos kontos.',
    adsWarning:
      'Daļa reklāmu personalizācijas joprojām ir aktīva. Apsveriet atspējošanu konta iestatījumos.',
    adsUnknown: 'Pārskatiet konta un ierīces reklāmu iestatījumus, lai redzētu, kas ir ieslēgts.',
    adsCritical:
      'Reklāmu personalizācija ir aktīva. Jūsu aktivitāte tiek izmantota reklāmu mērķēšanai.',
    cleanupGood:
      'Esat notīrījis sīkfailus un iespējojis trešo pušu sīkfailu bloķēšanu. Tas liecina par samazinātu izsekošanas noturību.',
    cleanupWarning:
      'Esat veicis dažas tīrīšanas darbības. Apsveriet gan sīkfailu dzēšanu, gan bloķēšanu labākai aizsardzībai.',
    cleanupUnknown: 'Pabeidziet tīrīšanas soli, lai redzētu higiēnas statusu.',
    cleanupCritical:
      'Higiēnas darbības, piemēram, sīkfailu dzēšana un trešo pušu sīkfailu bloķēšana, palīdz samazināt izsekošanas noturību.',
    skippedExplanation: 'Jūs izlaidāt šo soli, tāpēc rezultāts netiek rādīts.',
    statusNA: 'N/P',
    statusNotAnswered: 'Nav atbildēts',
    statusSkipped: 'Izlaists',
    statusTooltipNA: 'Netiek vērtēts, jo šis solis tika izlaists vai netika atbildēts.',
  },
  chartCategories: {
    publicExposure: 'Publiskā atpazīstamība',
    trackers: 'Izsekotāji',
    fingerprint: 'Pirkstu nospiedums',
    adSettings: 'Reklāmu iestatījumi',
    cleanup: 'Tīrīšana',
  },
  deviceNames: {
    desktop: 'Darbvirsma',
    mobile: 'Mobilā ierīce',
    unknown: 'Nezināms',
  },
  osNames: {
    windows: 'Windows',
    mac: 'macOS',
    linux: 'Linux',
    ios: 'iOS',
    android: 'Android',
    unknown: 'Nezināms',
  },
  browserOptions: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'Cits',
    unknown: 'Nezināms',
  },
  browserNames: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'jūsu pārlūkprogramma',
    unknown: 'jūsu pārlūkprogramma',
  },
};

const ru: Translations = {
  common: {
    next: 'Далее',
    back: 'Назад',
    skip: 'Пропустить',
    start: 'Начать',
    continue: 'Продолжить',
    startAudit: 'Начать аудит',
    clearData: 'Удалить мои данные лаборатории',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    print: 'Печать / Сохранить PDF',
    download: 'Скачать отчёт',
    startOver: 'Начать новый аудит',
    learnMore: 'Подробнее',
    reset: 'Сбросить',
    yes: 'Да',
    no: 'Нет',
    unsure: 'Не уверен',
    unknown: 'Неизвестно',
    skipped: 'Пропущено',
    viewReportCard: 'Просмотреть отчёт',
    stepNumber: 'Шаг {step}',
    commonPitfalls: 'Частые ошибки',
    open: 'Открыть',
    demo: 'Демо',
    demoModeNotice:
      'Используются демо-данные. Включите "Попробовать реальные инструменты", чтобы открыть.',
    estimatedTime: 'Примерное время: ~{minutes}',
    onTrack: 'Вы идёте по плану',
  },
  accessibility: {
    languageSelector: 'Выбор языка',
    switchTheme: 'Сменить тему',
    darkMode: 'Тёмный режим',
    lightMode: 'Светлый режим',
    decrease: 'Уменьшить',
    increase: 'Увеличить',
    close: 'Закрыть',
    previousSlide: 'Предыдущий слайд',
    nextSlide: 'Следующий слайд',
    toggleSidebar: 'Переключить боковую панель',
    sidebarTitle: 'Боковая панель',
    sidebarDescription: 'Отображает мобильную боковую панель.',
    breadcrumbMore: 'Ещё',
    breadcrumbLabel: 'Навигационная цепочка',
  },
  pagination: {
    ariaLabel: 'Пагинация',
    previous: 'Назад',
    next: 'Вперёд',
    more: 'Ещё страницы',
    previousAria: 'Перейти на предыдущую страницу',
    nextAria: 'Перейти на следующую страницу',
  },
  welcome: {
    title: 'Мастер аудита цифрового следа',
    subtitle:
      'Узнайте, какая информация о вас доступна онлайн, и освоите конкретные шаги по снижению видимости.',
    safetyNote:
      'Только самопроверка. Ищите только свои идентификаторы или используйте режим вымышленной персоны. Мы никогда не просим имя, email или телефон. Записывайте только числа и ответы да/нет. Все данные остаются на этом устройстве.',
    chooseMode: 'Выберите, как вы хотите продолжить:',
    myFootprint: 'Мой след',
    myFootprintDesc:
      'Используйте реальные инструменты для аудита своего цифрового следа. Вы будете искать свое имя, сканировать сайт на трекеры, проверять рекламные настройки и фиксировать результаты. Лучше всего, если нужны результаты по вашим данным.',
    fictionalPersona: 'Демо вымышленной персоны',
    fictionalPersonaDesc:
      'Используйте примерные данные, чтобы пройти процесс без поиска реальных идентификаторов. Подходит для первой практики, занятий или общих устройств.',
    deviceLabel: 'Устройство',
    osLabel: 'ОС',
    browserLabel: 'Браузер',
    consent:
      'Продолжая, вы подтверждаете, что это инструмент самопроверки. Мы не собираем и не передаём никаких личных идентификаторов. Все данные остаются на вашем устройстве.',
    optionalHelp:
      'Данные об устройстве, ОС и браузере позволяют показать инструкции, которые подходят вашей конфигурации.',
    introParagraph:
      'Просмотр веба оставляет следы: результаты поиска с вашим именем, сторонние трекеры на посещаемых сайтах и настройки браузера, которые могут идентифицировать устройство. Эта лаборатория измеряет эти следы и связывает каждый с конкретным действием по приватности.',
    whatToExpect: 'Что вы будете делать',
    expectDescription:
      'За ~60 минут вы найдете свое имя в поиске, просканируете один сайт на трекеры, проведете тест на отпечаток, проверите рекламные настройки и выполните шаги очистки. В конце вы получите отчет с оценками и следующими действиями.',
    expectTime: '60 минут',
    expectSteps: '5 этапов',
    expectTools: 'Бесплатные инструменты',
    expectPrivacy: '100% локальные данные',
    privacyTitle: 'Только самопроверка',
    privacyDescription:
      'Вы ищете только свою информацию. Мы не собираем и не передаем личные идентификаторы. Все записи остаются на этом устройстве.',
    beforeYouStart: 'Перед началом',
    prepPoint1: 'Подготовьте пароли; очистка куки выводит из аккаунтов',
    prepPoint2: 'Используйте приватное/инкогнито окно на общих или управляемых устройствах',
    prepPoint3: 'Выделите непрерывное время на каждый шаг',
    chooseYourPath: 'Выберите свой путь',
    chooseYourPathDesc:
      'Оба режима учат одним и тем же шагам. Выбирайте реальные данные для личных результатов или примерные данные для практики.',
    auditPurposeTitle: 'Что поможет сделать этот аудит',
    auditPurposeDesc1:
      'Ваш цифровой след — это набор обнаруживаемых следов от вашего браузинга и аккаунтов: результаты поиска, записи брокеров данных, трекеры и идентификаторы устройств. Аудит измеряет эти следы, чтобы вы могли снизить видимость.',
    auditPurposeDesc2:
      'Инструменты существуют, но разбросаны. Этот аудит выстраивает их в последовательность, объясняет результаты и выделяет конкретные действия.',
    understandingOptionsTitle: 'Ваши варианты',
    optionTableStarting: 'Начальное состояние',
    optionTableTools: 'Внешние инструменты',
    optionTableLearn: 'Что вы узнаете',
    optionTableBestFor: 'Лучше всего подходит',
    optionSelfStarting: 'Пустой — вы вводите свои реальные находки',
    optionSelfTools: 'Активные ссылки на Blacklight, EFF и др.',
    optionSelfLearn: 'Реальные выводы о вашей конфиденциальности',
    optionSelfBestFor: 'Для получения практических результатов',
    optionDemoStarting: 'Заполнен примерными данными',
    optionDemoTools: 'По умолчанию отключены (можно включить)',
    optionDemoLearn: 'Как работает процесс на примерных данных',
    optionDemoBestFor: 'Для обучения, групповых тренингов или общих компьютеров',
    privacyProtectedTitle: 'Ваша конфиденциальность защищена',
    privacyProtectedIntro: 'Только самопроверка. Без аккаунтов. Без отслеживания.',
    privacyBullet1Title: 'Ничего не покидает ваш браузер',
    privacyBullet1Desc:
      'Все ваши ответы хранятся только в локальном хранилище браузера на этом устройстве',
    privacyBullet2Title: 'Данные не передаются',
    privacyBullet2Desc:
      'Мы не собираем, не храним и не отправляем никакую введённую вами информацию',
    privacyBullet3Title: 'Вы контролируете удаление',
    privacyBullet3Desc: 'Удалите все данные в любой момент с помощью кнопки сброса',
    privacyBullet4Title: 'Внешние инструменты — ваш выбор',
    privacyBullet4Desc:
      'При переходе по ссылкам на инструменты вроде Blacklight или EFF эти сайты открываются в новых вкладках и не связаны с этим аудитом',
    beforeYouStartSummaryTitle: 'Перед началом (кратко)',
    beforeYouStartSummaryDo: 'Что вы сделаете: несколько проверок и запись чисел и ответов да/нет.',
    beforeYouStartSummaryNeed:
      'Что понадобится: около 60 минут и доступ к сайтам, которые вы хотите проверить.',
    beforeYouStartSummarySafety:
      'Безопасность: только самопроверка; используйте демо‑режим, если устройство общее или управляемое.',
  },
  steps: {
    welcome: 'Добро пожаловать',
    publicExposure: 'Публичная доступность',
    trackers: 'Трекеры',
    fingerprinting: 'Цифровые отпечатки',
    accountDevice: 'Аккаунт/Устройство',
    cleanup: 'Очистка',
    reportCard: 'Отчёт',
  },
  report: {
    title: 'Ваш отчёт о цифровом следе',
    subtitle: 'Краткое резюме ваших результатов и рекомендуемые следующие шаги.',
    auditComplete: 'Аудит завершён',
    privacyScoreOverview: 'Обзор оценки конфиденциальности',
    whatThisMeans: 'Что это означает',
    summaryPrefix: 'Итог:',
    nextActions: 'Ваши следующие действия',
    downloadFilename: 'аудит-цифрового-следа-{date}.json',
    publicExposureDetails: 'Детали публичной доступности',
    trackerAnalysis: 'Анализ трекеров',
    accountSettings: 'Настройки аккаунта и устройства',
    fingerprintDetails: 'Результаты отпечатков браузера',
    cleanupActions: 'Выполненные действия по очистке',
    publicExposureSignals: 'Сигналы публичной доступности',
    trackingIntensity: 'Интенсивность отслеживания',
    fingerprintUniqueness: 'Уникальность отпечатка',
    accountDeviceAds: 'Реклама аккаунта/устройства',
    cleanupCompleted: 'Очистка завершена',
    realityCheck: 'Проверка реальности',
    saveExportCallout: 'Сохраните копию: скачайте отчёт или распечатайте в PDF.',
  },
  facilitatorDashboard: {
    title: 'Панель фасилитатора',
    subtitle: 'Анонимные агрегированные показатели по всем лабораторным сессиям',
    loading: 'Загрузка метрик панели...',
    loadError: 'Не удалось загрузить метрики панели.',
    retry: 'Повторить',
    liveUpdates: 'Живые обновления',
    refresh: 'Обновить',
    totalSessions: 'Всего сессий',
    completed: 'Завершено',
    completionRate: 'Процент завершения',
    avgTrackersFound: 'Среднее число найденных трекеров',
    avgPrivacyScores: 'Средние оценки конфиденциальности',
    deviceBreakdown: 'Распределение устройств',
    noDeviceData: 'Данных по устройствам пока нет',
    sessionsOverTime: 'Сессии по времени (последние 14 дней)',
    noSessionData: 'Данных о сессиях пока нет. Начните несколько аудитов, чтобы увидеть тенденции.',
    privacyNotice:
      'Все показатели анонимизированы. Личные идентификаторы не собираются и не хранятся.',
  },
  notFound: {
    title: '404 Страница не найдена',
    description: 'Эта страница не зарегистрирована в роутере.',
  },
  panic: {
    buttonLabel: 'Удалить мои данные лаборатории',
    title: 'Удалить все данные лаборатории',
    description:
      'Это безвозвратно удалит весь ваш прогресс аудита и записанные данные с этого устройства. Вы начнёте заново с нового аудита. Это действие нельзя отменить.',
    confirmButton: 'Да, удалить всё',
    toastTitle: 'Данные удалены',
    toastDescription: 'Все ваши лабораторные данные удалены с этого устройства.',
  },
  sessionRecovery: {
    title: 'Найдена незавершённая сессия',
    description:
      'На этом устройстве сохранена незавершенная сессия аудита. Продолжите или начните заново.',
    started: 'Начато:',
    lastStep: 'Последний шаг:',
    resumeButton: 'Возобновить сессию',
    startFreshButton: 'Начать заново',
    unknownStep: 'Неизвестный шаг',
  },
  fictional: {
    bannerTitle: 'Режим вымышленной персоны',
    bannerDescription: 'Используются примерные данные. Продолжайте без реального поиска.',
    tryLiveTools: 'Всё равно попробовать реальные инструменты',
    switchToReal: 'Переключиться на Мой след',
    switchConfirmation: "Переключиться на режим 'Мой след'. Это удалит текущие демо-данные.",
  },
  toolFallback: {
    title: 'Если инструмент не загружается',
    description: 'Некоторые сети блокируют эти внешние инструменты. Попробуйте:',
    suggestions: [
      'Попробуйте другой сайт или категорию инструмента',
      'Попробуйте использовать мобильный телефон с мобильной передачей данных (обходит корпоративную сеть)',
      'Продолжайте в режиме вымышленной персоны, чтобы изучить концепции без живых инструментов',
    ],
    confirmSwitch: 'Переключиться в режим вымышленной персоны. Будут использованы демо-данные.',
    switchButton: 'Использовать вымышленный режим',
  },
  progress: {
    stepOf: 'Шаг {current} из {total}',
    target: 'Цель: {minutes} мин',
    left: 'Осталось: {time}',
  },
  publicExposure: {
    title: 'Публичная доступность',
    concept:
      'Результаты поиска и брокеры данных могут раскрывать контактные и идентификационные сведения помимо того, что вы публикуете.',
    whyItMatters:
      'Сайты поиска людей и брокеры агрегируют публичные записи, социальные профили и коммерческие данные. Такое объединение делает контактную информацию легко доступной.',
    outcomePreview: 'Результат: сигнал публичной видимости и конкретные следующие действия.',
    pitfalls: [
      'Только самопроверка: ищите свои идентификаторы или используйте режим вымышленной персоны.',
      'Если устройство общее или управляемое, используйте приватное/инкогнито окно.',
      'Не вводите чувствительные идентификаторы (паспорт, полный ДР) на сайтах поиска людей.',
    ],
    educationalContent: {
      sectionTitle: 'Понимание публичной доступности',
      industryTitle: 'Экосистема брокеров данных за публичной доступностью',
      industryParagraph1:
        'Рутинные действия, такие как формы, регистрация избирателей и записи о собственности, создают точки данных. Индустрия брокеров данных собирает, объединяет и продает эти записи в большом масштабе.',
      industryParagraph2:
        'Отчёт Федеральной торговой комиссии США (FTC) за 2014 год иллюстрирует масштаб: крупные брокеры данных хранили сотни миллиардов точек данных, а в одном примере — более 1,1 млрд уникальных элементов идентичности и 1,4 млрд потребительских транзакций. В том же отчёте упоминается брокер, заявивший охват более 80% адресов электронной почты потребителей США. Это исторические, самоотчётные примеры, а не полный учёт, но они показывают масштаб экосистемы.',
      dataSourcesTitle: 'Основные источники данных',
      dataSourcesParagraph:
        'Сайты поиска людей, такие как Spokeo, Whitepages и BeenVerified, агрегируют записи из:',
      dataSourcesList: [
        'Публичные записи: акты собственности, судебные документы, регистрации избирателей, свидетельства о браке, дела о банкротстве',
        'Коммерческие источники: кредитные заявки, автокредиты, договоры аренды, записи коммунальных служб, и даже некоторые DMV штатов, продающие регистрационные данные',
        'Социальные сети: любой профиль, который вы когда-либо сделали публичным, даже ненадолго',
        'Другие брокеры данных: эти компании перекрёстно проверяют и продают данные друг другу, создавая взаимосвязанную сеть',
      ],
      dataSourcesConclusion:
        'Большая часть этих данных технически публична; разница в масштабе и автоматизации. Компании могут собрать полный профиль за секунды, а не за дни.',
      meaningTitle: 'Что это значит для вас',
      meaningParagraph: 'Результаты поиска могут раскрывать:',
      meaningList: [
        'Ваши текущие и предыдущие адреса',
        'Номера телефонов (включая те, которые вы считали приватными)',
        'Адреса электронной почты',
        'Имена ваших родственников и знакомых',
        'Ваш примерный возраст и дату рождения',
        'Владение недвижимостью и её оценочную стоимость',
        'Судебные записи и правовую историю',
      ],
      activityPreview:
        'Это упражнение показывает, какие сведения о вас доступны и где они появляются. Многие удивляются объему даже без публикации чувствительных данных.',
      sourcesTitle: 'Источники',
      sources: [
        {
          label: 'FTC США (2014) — Data Brokers: A Call for Transparency and Accountability',
          url: 'https://www.ftc.gov/system/files/documents/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014/140527databrokerreport.pdf',
        },
      ],
    },
    externalTools: 'Внешние инструменты',
    recordFindings: 'Запишите свои находки',
    searchPagesQuestion:
      'Сколько страниц результатов поиска содержали личную информацию (адрес, телефон, родственники)?',
    searchPagesHelper:
      'Считайте уникальные страницы, а не общее количество упоминаний. Используйте 5+, если больше 5.',
    peopleSearchQuestion:
      'Нашли ли вы себя на сайтах поиска людей (напр., Whitepages, Spokeo, BeenVerified)?',
    googleVisitedQuestion: "Посещали ли вы панель Google 'Результаты о вас'?",
    removalRequestedQuestion: 'Запрашивали ли вы удаление каких-либо результатов поиска из Google?',
  },
  trackers: {
    title: 'Видимость трекеров',
    concept:
      'Одна веб-страница может загрузить десятки сторонних доменов. Отслеживание включает куки, запись сессий, отпечатки и другое.',
    whyItMatters:
      'При посещении сайта скрипты могут фиксировать поведение, делиться данными с рекламодателями и строить профили без явного уведомления.',
    outcomePreview:
      'Результат: сигнал интенсивности отслеживания и список обнаруженных типов трекеров.',
    pitfalls: [
      'Не сканируйте чувствительные сайты (банки, медицина, школьные порталы). Выберите публичный сайт, который вы часто посещаете.',
      'Результаты — это снимок и могут отличаться по региону, браузеру и времени.',
      'В управляемых сетях инструменты могут быть заблокированы — при необходимости используйте демо-режим.',
    ],
    educationalContent: {
      sectionTitle: 'Понимание веб-отслеживания',
      introTitle: 'Что происходит в первую секунду посещения сайта',
      introParagraph1:
        'При загрузке страницы выполняются скрипты и запросы уходят на сторонние серверы до завершения рендеринга. Это не видно в интерфейсе, но происходит на большинстве сайтов.',
      introParagraph2:
        'Крупномасштабные измерения показывают, что отслеживание широко распространено. В отчёте HTTP Archive Web Almanac 2025 говорится, что примерно 75% страниц содержат хотя бы один трекер, а трекеры Google присутствуют примерно на 61% страниц для настольных устройств (трекеры Facebook — около 22%). Точные цифры зависят от категории сайта и региона, но общая картина стабильна: большинство страниц загружает стороннее отслеживание.',
      trackingTypesTitle: 'Семь типов отслеживания, которые вы обнаружите',
      trackingTypesIntro:
        'Инструмент, который вы собираетесь использовать (Blacklight, созданный The Markup), покажет, что на самом деле происходит за кулисами:',
      trackingTypes: {
        adTrackers: {
          title: 'Рекламные трекеры',
          description:
            'Они отправляют данные посещений рекламным сетям, которые строят профили интересов по посещенным сайтам и времени.',
        },
        thirdPartyCookies: {
          title: 'Сторонние куки',
          description:
            'Эти куки устанавливаются доменом, отличным от посещаемого сайта. Их можно прочитать на других сайтах с тем же рекламным кодом, что позволяет межсайтовое отслеживание.',
        },
        sessionRecording: {
          title: 'Запись сессий',
          description:
            'Инструменты записи сессий фиксируют взаимодействия (клики, прокрутку и иногда нажатия клавиш) и восстанавливают сессии для просмотра. Примеры: Hotjar, FullStory.',
        },
        keystrokeLogging: {
          title: 'Запись нажатий клавиш',
          description:
            'Некоторые скрипты записывают ввод в формах, иногда до отправки. Это может захватывать частично введенные данные.',
        },
        canvasFingerprinting: {
          title: 'Canvas-отпечатки',
          description:
            'Вашему браузеру можно предложить нарисовать невидимое изображение. Из-за тонких различий в том, как именно ваше оборудование и программное обеспечение отображают графику, это изображение слегка отличается от почти всех остальных. Это создаёт идентификатор, который работает, даже если вы блокируете куки.',
        },
        facebookPixel: {
          title: 'Пиксель Facebook',
          description:
            'Многие сайты отправляют данные о визите в Facebook через встроенный пиксель, даже если вы не вошли.',
        },
        googleAnalytics: {
          title: 'Google Analytics',
          description:
            'Присутствует на большинстве сайтов, Google Analytics отслеживает посетителей и делится данными с рекламной экосистемой Google.',
        },
      },
      beyondAdsTitle: 'Почему это важно помимо рекламы',
      beyondAdsParagraph: 'Отслеживание влияет на большее, чем рекламу:',
      beyondAdsList: [
        'Ценовая дискриминация: некоторые магазины показывают разные цены в зависимости от вашей истории просмотров или предполагаемого уровня дохода',
        'Страхование и трудоустройство: брокеры данных продают поведенческие профили, которые могут влиять на кредитные решения, страховые ставки и даже найм на работу',
        'Постоянство профиля: поведенческие профили, построенные на данных отслеживания, сохраняются годами и продаются между компаниями',
        'Риск безопасности: каждая компания, хранящая данные о вас — потенциальная цель для утечки',
      ],
      activityPreview:
        'Это упражнение сканирует сайт, который вы используете, и показывает типы загружаемых трекеров. Результаты связывают категории с реальными страницами.',
      sourcesTitle: 'Источники',
      sources: [
        {
          label: 'HTTP Archive Web Almanac 2025 — Privacy (распространённость трекеров)',
          url: 'https://almanac.httparchive.org/en/2025/privacy',
        },
      ],
    },
    externalTool: 'Внешний инструмент',
    blacklightTip:
      'Совет: Попробуйте сканировать новостной или интернет-магазин, который вы часто посещаете. Избегайте чувствительных сайтов, таких как медицинские порталы или банки.',
    recordFindings: 'Запишите свои находки',
    blacklightRunQuestion: 'Запускали ли вы сканирование Blacklight?',
    siteCategoryQuestion: 'Какой тип сайта вы сканировали?',
    trackerCountQuestion: 'Сколько трекеров было обнаружено?',
    trackerCountHelper:
      'Введите число, показанное в сводке Blacklight. 0-5 трекеров - относительно мало, 6-15 типично для коммерческих сайтов, 16+ указывает на интенсивное отслеживание.',
    cookiesFlaggedQuestion: 'Были ли отмечены сторонние куки?',
    sessionRecordingQuestion: 'Была ли обнаружена запись сессий?',
    sessionRecordingHelper: 'Запись сессий фиксирует движения мыши, клики и нажатия клавиш',
    keyLoggingQuestion: 'Была ли обнаружена запись нажатий клавиш?',
    keyLoggingHelper: 'Запись клавиш фиксирует то, что вы вводите в формы',
    fingerprintingQuestion: 'Был ли обнаружен сбор отпечатков браузера?',
    fingerprintingHelper: 'Снятие отпечатков идентифицирует ваш браузер без куки',
  },
  fingerprinting: {
    title: 'Отпечатки браузера',
    concept:
      'Очистка куки уменьшает один канал отслеживания, но отпечаток браузера все еще может идентифицировать устройство по комбинации настроек, шрифтов и оборудования.',
    whyItMatters:
      'Приватный режим не меняет атрибуты вроде размера экрана, шрифтов, часового пояса или WebGL. Эти атрибуты могут создавать стабильный отпечаток на разных сайтах.',
    outcomePreview: 'Результат: уникальность отпечатка и уровень защиты от отслеживания.',
    pitfalls: [
      'Запускайте тест в браузере, которым пользуетесь чаще всего — расширения и настройки меняют результат.',
      '«Уникален» не означает, что ваше имя известно; это означает, что вас можно отличить.',
      'Приватный режим скрывает историю, а не отпечаток.',
    ],
    educationalContent: {
      sectionTitle: 'Понимание отпечатков браузера',
      introTitle: 'Метод отслеживания, который нельзя заблокировать очисткой куки',
      introParagraph:
        'Очистка куки уменьшает один тип отслеживания. Отпечаток браузера использует атрибуты устройства и браузера вместо сохраненных идентификаторов. Исследования EFF Panopticlick показали, что многие браузеры уникально идентифицируемы, и EFF отмечает, что большая доля браузеров все еще дает уникальный отпечаток даже без куки. Уровень уникальности меняется по мере улучшения защит, но отпечатки остаются распространенными.',
      howItWorksTitle: 'Как ваш браузер выдаёт вашу личность',
      howItWorksParagraph:
        'Сбор отпечатка использует десятки атрибутов устройства и браузера, которые вместе образуют подпись. Отдельные атрибуты могут быть общими, но их комбинация может быть уникальной. Типичные входные данные:',
      attributesList: [
        'Разрешение экрана и глубина цвета: точные размеры пикселей вашего дисплея',
        'Часовой пояс и язык: ваше местоположение и языковые предпочтения',
        'Установленные шрифты: конкретная комбинация шрифтов в вашей системе очень характерна',
        'Плагины браузера: какие расширения и их версии у вас установлены',
        'Технические характеристики: детали о вашей видеокарте, процессоре и доступной памяти',
        'WebGL-рендеринг: вашему браузеру можно предложить нарисовать 3D-графику, и микроскопические различия в том, как ваше оборудование её отображает, создают уникальную подпись',
        'Аудио-отпечатки: похожая техника с использованием обработки звука',
        'Canvas-отпечатки: рисование невидимого 2D-изображения для идентификации различий рендеринга',
      ],
      statisticsTitle: 'Почему отпечатки часто уникальны',
      statisticsParagraph:
        'Проект EFF Panopticlick и последующие материалы объясняют, что сочетание множества атрибутов (шрифты, размер экрана, оборудование и т. д.) может создавать отпечаток, который часто достаточно уникален, чтобы отслеживать пользователя между сайтами. Защита от отпечатков может снизить уникальность, но результаты различаются в зависимости от браузера и настроек.',
      privateBrowsingTitle: 'Почему приватный просмотр здесь не помогает',
      privateBrowsingParagraph1:
        'Инкогнито и приватный режим не сохраняют куки или историю, но не меняют разрешение экрана, шрифты, видеокарту или часовой пояс. Поэтому отпечаток в приватном режиме часто совпадает с обычным, и сайты могут вас распознавать.',
      privateBrowsingParagraph2:
        'Некоторые браузеры, ориентированные на конфиденциальность, такие как Firefox и Brave, внедрили защиту от отпечатков, которая либо блокирует определённые методы сбора, либо намеренно предоставляет общие ответы.',
      activityPreview:
        'Этот тест показывает, уникален ли отпечаток, насколько сильна защита и какие атрибуты делают вас узнаваемым. Используйте результаты, чтобы решить, менять ли настройки или браузер.',
      sourcesTitle: 'Источники',
      sources: [
        {
          label: 'EFF — Panopticlick (исследование отпечатков браузера)',
          url: 'https://www.eff.org/press/releases/eff-launches-panopticlick-unique-fingerprint-every-browser',
        },
        {
          label: 'EFF Surveillance Self-Defense — What is fingerprinting? (обзор 2024)',
          url: 'https://ssd.eff.org/module/what-fingerprinting',
        },
      ],
    },
    externalTools: 'Внешние инструменты',
    whatToLookFor: 'На что обратить внимание',
    effRunQuestion: 'Запускали ли вы тест EFF Cover Your Tracks?',
    browserUniqueQuestion: 'Показывает ли тест, что отпечаток вашего браузера уникален?',
    browserUniqueHelper:
      "Если ваш отпечаток 'уникален', сайты могут идентифицировать вас даже без куки. Приватные браузеры или расширения типа Privacy Badger могут помочь уменьшить уникальность.",
    trackingProtectionQuestion: 'Какой уровень защиты от отслеживания показал тест?',
    trackingProtectionHelper:
      'Это показывает, насколько хорошо ваш браузер блокирует известные трекеры',
  },
  accountDevice: {
    title: 'Идентификаторы аккаунта и устройства',
    concept:
      'Отслеживание происходит также через настройки аккаунтов, идентификаторы устройств и разрешения на отслеживание в приложениях.',
    whyItMatters:
      'Даже при блокировке веб-трекеров аккаунты и устройства могут продолжать делиться данными с рекламодателями через устойчивые идентификаторы в разных приложениях и сервисах.',
    outcomePreview: 'Результат: какие рекламные настройки активны и где их изменить.',
    deviceSelectionTitle: 'Какие мобильные устройства вы хотите проверить?',
    deviceSelectionHelper:
      'Выберите платформы, которыми вы пользуетесь, чтобы показать нужные настройки.',
    deviceSelectionOptionBoth: 'И iOS, и Android',
    deviceSelectionOptionNone: 'Я не пользуюсь смартфоном/планшетом',
    pitfalls: [
      'Если устройство управляется работой/школой, некоторые настройки могут быть заблокированы.',
      'Проверьте каждое устройство (телефон/планшет/ноутбук) — настройки не всегда синхронизируются.',
      'Изменение рекламных настроек может повлиять на рекомендации; фиксируйте, что меняете.',
    ],
    educationalContent: {
      sectionTitle: 'Понимание мобильного отслеживания и отслеживания аккаунтов',
      introTitle: 'Идентификаторы, которые следуют за вами через каждое приложение',
      introParagraph:
        'Веб-отслеживание использует куки, а мобильные приложения используют рекламные ID операционной системы. Android использует Google Advertising ID (GAID), устройства Apple — Identifier for Advertisers (IDFA).',
      howItWorksTitle: 'Как работают мобильные рекламные идентификаторы',
      howItWorksParagraph:
        'ОС создает уникальный рекламный ID. Приложения могут обращаться к нему для межприложного таргетинга и отслеживания. Это позволяет:',
      howItWorksList: [
        'Вы ищете авиабилеты в одном приложении → Вы видите рекламу отелей в совершенно другом приложении',
        'Вы просматриваете товары в приложении магазина → Вы видите рекламу этих товаров в социальных сетях',
        'Вы играете в бесплатную игру → Игра делится вашей активностью с рекламными сетями, привязанными к вашему рекламному ID',
        'Ваши данные о местоположении, паттерны использования приложений и поведенческий профиль — всё связано с этим единственным идентификатором',
      ],
      scaleTitle: 'Масштаб мобильного отслеживания',
      scaleParagraph:
        'В отличие от куки рекламный ID сопровождает вас между приложениями. Его устойчивость позволяет строить профили, связывать активность в приложениях и вебе и передавать данные рекламным сетям и брокерам данных.',
      attTitle: 'App Tracking Transparency от Apple изменила игру',
      attParagraph1:
        'В 2021 году Apple ввела App Tracking Transparency (ATT), требующую спрашивать разрешение перед доступом к IDFA. Пользователи видят запрос, например: «Разрешить этому приложению отслеживать вашу активность в приложениях и на сайтах других компаний?» До ATT приложения получали доступ к IDFA без согласия.',
      attParagraph2:
        'После ATT пользователи должны явно согласиться. Сообщаемые уровни согласия сильно различаются в зависимости от метода измерения, категории приложений и географии. Например, AppsFlyer сообщил о глобальном уровне согласия около 50% в 1 квартале 2024 года, а Singular сообщил о существенно более низком уровне согласия при первом запуске приложения в 4 квартале 2025 года. Любую отдельную цифру следует рассматривать как контекстную. Google заявил, что Privacy Sandbox на Android стремится работать без межприложных идентификаторов вроде рекламного ID.',
      activityPreviewTitle: 'Что вы проверите в этом упражнении',
      activityPreviewList: [
        'Персонализация рекламы Google: строит ли Google профиль ваших интересов по всем сервисам Google',
        'Реклама Apple: использует ли Apple ваши данные для таргетированной рекламы в своей экосистеме',
        'Рекламный ID Android: вы можете сбросить (получить новый ID) или удалить его полностью',
        'iOS App Tracking Transparency: могут ли приложения вообще запрашивать отслеживание',
      ],
      activityPreviewConclusion:
        'Многие обнаруживают, что персонализация рекламы годами была включена по умолчанию, формируя профиль без явного согласия.',
      sourcesTitle: 'Источники',
      sources: [
        {
          label: 'AppsFlyer (2024) — отчёт по ATT (1 квартал 2024)',
          url: 'https://www.appsflyer.com/resources/reports/app-tracking-transparency-opt-in-rate/',
        },
        {
          label: 'Singular (2025) — Q4 2025 Insights (ATT при первом запуске)',
          url: 'https://www.singular.net/blog/singular-q4-2025-insights/',
        },
        {
          label: 'Google Android Developers Blog (2022) — Privacy Sandbox на Android',
          url: 'https://android-developers.googleblog.com/2022/02/introducing-privacy-sandbox-android.html',
        },
      ],
    },
    externalTools: 'Внешние инструменты',
    recordSettings: 'Запишите свои настройки',
    googleAdsQuestion: 'Персонализированная реклама Google включена или выключена?',
    appleAdsQuestion: 'Персонализированная реклама Apple включена или выключена?',
    androidIdQuestion: 'Какое действие вы предприняли с рекламным ID Android?',
    iosAttQuestion: 'Какая у вас настройка прозрачности отслеживания приложений iOS?',
    iosAttHelper: 'Настройки > Конфиденциальность и безопасность > Отслеживание',
  },
  cleanup: {
    title: 'Спринт очистки',
    concept:
      'Выполните действия, чтобы удалить существующие данные отслеживания и включить защиту конфиденциальности.',
    whyItMatters:
      'Очистка куки и данных сайтов удаляет существующие трекеры. Блокировка сторонних куки предотвращает многие будущие попытки отслеживания. Эти шаги дают немедленные практические выгоды.',
    outcomePreview: 'Результат: статус очистки и конкретные следующие действия.',
    pitfalls: [
      'Очистка куки выведет вас из аккаунтов; убедитесь, что знаете пароли.',
      'Если устройство общее или управляемое, соблюдайте локальные правила перед изменением настроек.',
      'Не удаляйте сохранённые пароли, если не готовы заменить их менеджером паролей.',
    ],
    educationalContent: {
      sectionTitle: 'Почему цифровая гигиена важна',
      breachesTitle: 'Почему утечки продолжаются',
      breachesParagraph1:
        'Отчёт Verizon 2024 Data Breach Investigations Report (DBIR) показывает, что человеческий фактор задействован примерно в 68% утечек, а украденные учётные данные остаются одним из самых распространённых способов проникновения (около 31% в 10‑летнем анализе Verizon).',
      breachesParagraph2:
        'Это делает гигиену паролей и многофакторную аутентификацию особенно важными. Они не предотвращают все утечки, но снижают риск захвата аккаунтов и атак с подбором украденных учётных данных.',
      cookiesTitle: 'Почему куки важны для вашей безопасности',
      cookiesParagraph:
        'Куки нужны не только для рекламы; они поддерживают вход в аккаунты. Когда вы заходите в почту или банк и не вводите пароль, куки подтверждают, что вы уже аутентифицированы. Это имеет последствия для безопасности:',
      cookiesList: [
        'Если кто-то получит доступ к вашему браузеру, он получит доступ к вашим залогиненным аккаунтам',
        'Перехват сессии: если злоумышленник захватит ваши куки (через вредоносное ПО, небезопасный WiFi или скомпрометированный сайт), он сможет выдать себя за вас, не зная пароля',
        'Долгоживущие сессии: некоторые куки сохраняются месяцами или годами, что означает, что единственная компрометация имеет длительное окно уязвимости',
      ],
      blockingTitle: 'Блокировка сторонних куки: самая эффективная настройка',
      blockingParagraph1:
        'Если есть одна настройка с высокой пользой и низкими затратами, это блокировка сторонних куки. Куки первого домена приходят с посещаемого сайта и нужны для входа и функций. Сторонние куки приходят с внешних доменов и в основном используются для межсайтового отслеживания.',
      blockingParagraph2: 'Современные браузеры обрабатывают это по-разному:',
      blockingBrowsers: [
        'Firefox: использует «Total Cookie Protection» для изоляции сторонних куки по сайтам',
        'Safari: блокирует сторонние куки по умолчанию через «Prevent Cross-Site Tracking»',
        'Chrome: всё ещё разрешает сторонние куки по умолчанию (Google отменил планы по их отмене)',
        'Включение этой настройки ломает межсайтовое отслеживание, не влияя на вашу способность использовать сайты нормально',
      ],
      hibpTitle: 'Have I Been Pwned: проверка реальности',
      hibpParagraph1:
        'Необязательное упражнение на этом этапе — проверка Have I Been Pwned — это момент истины для большинства людей. По состоянию на январь 2026 года HIBP перечисляет 941 скомпрометированный сайт и около 17,4 млрд взломанных аккаунтов. Эти показатели меняются по мере добавления новых утечек.',
      hibpParagraph2:
        'Когда вы вводите свой email, он проверяет, появлялся ли этот email в какой-либо известной утечке данных. Для большинства людей, у которых email был более нескольких лет, ответ — да, часто в нескольких утечках. Вот почему гигиена паролей важна: уникальные пароли для каждого аккаунта, в идеале управляемые менеджером паролей, и многофакторная аутентификация везде, где она доступна.',
      activityPreviewTitle: 'Что вы сейчас сделаете',
      activityPreviewList: [
        'Очистить куки и данные сайтов: удалить существующие трекеры и заставить заново аутентифицироваться',
        'Заблокировать сторонние куки: предотвратить будущее межсайтовое отслеживание',
        'Проверить подверженность утечкам: узнать, были ли ваши учётные данные скомпрометированы',
        'Спланировать действия по гигиене паролей: обновить скомпрометированные пароли, включить MFA',
      ],
      activityPreviewConclusion:
        'К концу этого шага вы уменьшите устойчивость отслеживания и улучшите безопасность аккаунтов за счет конкретных изменений.',
      sourcesTitle: 'Источники',
      sources: [
        {
          label: 'Verizon 2024 Data Breach Investigations Report (DBIR) — ключевые выводы',
          url: 'https://www.verizon.com/about/news/2024-data-breach-investigations-report',
        },
        {
          label: 'Have I Been Pwned — статистика Pwned websites',
          url: 'https://haveibeenpwned.com/PwnedWebsites',
        },
      ],
    },
    browserInstructions: 'Инструкции для браузера',
    breachExposure: 'Проверка утечек данных',
    breachExposureDesc:
      'Проверьте, появлялись ли ваши адреса электронной почты в известных утечках данных. Это займёт всего 2 минуты.',
    recordActions: 'Запишите свои действия',
    cookiesClearedQuestion: 'Очистили ли вы куки и данные сайтов?',
    cookiesBlockedQuestion: 'Включили ли вы блокировку сторонних куки?',
    passwordHygieneQuestion: 'Предприняли ли вы какие-либо действия по гигиене паролей?',
    passwordHygieneHelper:
      'Примеры: проверили Have I Been Pwned, включили MFA, обновили пароль или проверили менеджер паролей',
    cookiesWarning:
      'Очистка куки выйдет из всех сайтов. Убедитесь, что вы знаете свои пароли или у вас есть менеджер паролей, прежде чем продолжить.',
  },
  instructions: {
    whatToDo: 'Что делать',
    publicExposure1:
      'Поищите своё имя (в кавычках) в Google и посчитайте, сколько страниц результатов показывают личную информацию, такую как адрес или телефон',
    publicExposure2:
      'Проверьте, появляетесь ли вы на сайтах поиска людей (таких как Spokeo, WhitePages или BeenVerified)',
    publicExposure3: 'Запишите свои находки ниже, затем перейдите к следующему шагу',
    trackers1:
      'Откройте Blacklight и введите сайт, который вы часто посещаете (напр., новостной или интернет-магазин)',
    trackers2: 'Изучите, что находит инструмент: трекеры, куки, записыватели сессий и отпечатки',
    trackers3: 'Запишите количество трекеров и любые тревожные находки ниже',
    fingerprinting1: 'Нажмите на ссылку, чтобы открыть тест EFF Cover Your Tracks',
    fingerprinting2: 'Запустите тест и отметьте, уникален ли отпечаток вашего браузера',
    fingerprinting3: 'Проверьте уровень защиты от отслеживания и запишите результаты ниже',
    accountDevice1:
      'Проверьте настройки рекламы Google и отметьте, включена или выключена персонализированная реклама',
    accountDevice2:
      'Проверьте настройки рекламы Apple/Android на любых устройствах, которыми вы пользуетесь (если не относится, выберите Н/П)',
    accountDevice3:
      'Запишите свои текущие настройки ниже - вы можете изменить их позже, если захотите',
    cleanup1: 'Очистите куки и данные сайтов, используя предоставленные инструкции для браузера',
    cleanup2: 'Включите блокировку сторонних куки в настройках браузера',
    cleanup3: 'При желании проверьте Have I Been Pwned на наличие утечек email',
  },
  siteCategories: {
    news: 'Новости',
    shopping: 'Покупки',
    social: 'Социальные сети',
    health: 'Здоровье',
    other: 'Другое',
  },
  trackingProtection: {
    strong: 'Сильная',
    partial: 'Частичная',
    weak: 'Слабая/Нет',
  },
  adSettings: {
    on: 'Включено',
    off: 'Выключено',
    notUsed: 'Не использую',
    notApplicable: 'Н/П',
  },
  androidActions: {
    reset: 'Сброшен',
    deleted: 'Удалён',
    none: 'Без изменений',
  },
  iosAtt: {
    allowApps: 'Приложения могут запрашивать',
    blocked: 'Заблокировано',
  },
  cleanupActions: {
    yes: 'Да, очищено',
    no: 'Нет, пропущено',
    later: 'Сделаю позже',
    alreadyBlocked: 'Уже заблокировано',
  },
  externalTools: {
    googleResultsTitle: "Google 'Результаты о вас'",
    googleResultsDesc:
      'Посмотрите, какую личную информацию Google нашёл о вас в результатах поиска. Требуется аккаунт Google и может быть недоступно в некоторых регионах - если недоступно, поищите своё имя вручную в кавычках.',
    findContactTitle: 'Найти сайты с контактной информацией',
    findContactDesc:
      'Ищите своё имя в кавычках плюс город/область, чтобы найти списки поиска людей',
    requestRemovalTitle: 'Запросить удаление',
    requestRemovalDesc:
      "Большинство сайтов поиска людей имеют страницы отказа. Ищите '[название сайта] удалить данные' или 'отказаться', чтобы их найти",
    blacklightTitle: 'Blacklight от The Markup',
    blacklightDesc:
      'Введите любой URL сайта, чтобы увидеть, какие трекеры, куки и записыватели сессий он использует',
    effCoverTracksTitle: 'EFF Cover Your Tracks',
    effCoverTracksDesc:
      'Проверьте, насколько уникален отпечаток вашего браузера и насколько хорошо вы защищены от отслеживания',
    effExplainerTitle: 'Понимание цифровых отпечатков',
    effExplainerDesc: 'Узнайте больше о том, как работают отпечатки браузера и почему это важно',
    googleAdSettingsTitle: 'Настройки рекламы Google',
    googleAdSettingsDesc:
      'Просматривайте и контролируйте, как Google персонализирует рекламу на основе вашей активности',
    appleAdsTitle: 'Настройки рекламы Apple',
    appleAdsDesc: 'Настройки > Конфиденциальность и безопасность > Реклама Apple',
    androidAdIdTitle: 'Рекламный ID Android',
    androidAdIdDesc: 'Настройки > Конфиденциальность > Реклама > Сбросить или удалить рекламный ID',
    iosAttTitle: 'Прозрачность отслеживания приложений iOS',
    iosAttDesc: 'Настройки > Конфиденциальность и безопасность > Отслеживание',
    clearCookiesTitle: 'Очистить куки и данные сайтов',
    clearCookiesDesc: 'Удалите сохранённые данные отслеживания из браузера',
    blockCookiesTitle: 'Блокировать сторонние куки',
    blockCookiesDesc: 'Предотвратите сохранение межсайтовых отслеживающих куки',
    hibpTitle: 'Have I Been Pwned',
    hibpDesc: 'Проверьте, появлялся ли ваш email в известных утечках данных',
    stepsForBrowser: 'Пошаговые инструкции для {browser}',
  },
  badges: {
    optional: 'Необязательно',
  },
  nextActions: {
    skippedStep: 'Вы пропустили "{stepName}". Завершите этот раздел, когда у вас будет время.',
    requestGoogleRemoval:
      "Запросите удаление вашей личной информации из результатов поиска Google, используя инструмент 'Результаты о вас'.",
    optOutPeopleSearch:
      'Удалите вашу информацию с сайтов поиска людей. Посетите сайт органа защиты данных, чтобы узнать больше о ваших правах.',
    installContentBlocker:
      'Установите надёжный блокировщик контента, например uBlock Origin, чтобы уменьшить воздействие трекеров.',
    fingerprintingRisk:
      "Ваш браузер уникально идентифицируем. Узнайте больше о цифровых отпечатках на eff.org/pages/cover-your-tracks и попробуйте Firefox с усиленной защитой от отслеживания в режиме 'Строгий'.",
    turnOffGoogleAds:
      'Отключите персонализированную рекламу в настройках рекламного центра Google.',
    clearCookies: 'Очистите куки и данные сайтов в браузере, чтобы удалить существующие трекеры.',
    enableCookieBlocking: 'Включите блокировку сторонних куки в настройках браузера.',
    checkHibp:
      'Проверьте Have I Been Pwned (haveibeenpwned.com), чтобы узнать, был ли ваш email в утечках данных, и подпишитесь на уведомления на haveibeenpwned.com/NotifyMe.',
    allDone:
      'Отличная работа! Рекомендуем провести этот аудит снова через несколько месяцев, чтобы следить за своим цифровым следом.',
  },
  footer: {
    privacyNotice:
      'Ваши данные остаются на этом устройстве. Мы никогда не собираем и не передаём личную информацию.',
  },
  realityCheckItems: {
    snapshot: 'Это снимок, а не полная перепись вашего цифрового следа.',
    variesByLocation: 'Результаты зависят от страны, языка и сети, к которой вы подключены.',
    personalization:
      'Персонализация поиска означает, что другие могут видеть другие результаты о вас.',
    changesOverTime:
      'Ваш цифровой след меняется со временем по мере сбора и обмена новыми данными.',
    dataOnDevice:
      'Все данные остаются на вашем устройстве. Этот мастер никогда не собирает, не хранит и не передаёт личную информацию.',
  },
  skippedSections: {
    title: 'Пропущенные разделы',
    description:
      'Вы пропустили следующие разделы. Заполните их позже, чтобы получить более точную картину вашего цифрового следа.',
  },
  printInfo: {
    generated: 'Создано',
    dataStoredLocally: 'Все данные хранятся только локально',
  },
  charts: {
    radarView: 'Радарный вид',
    scoreComparison: 'Сравнение баллов',
    privacyScore: 'Оценка приватности',
    legendGood: 'Хорошо (100)',
    legendWarning: 'Предупреждение (60)',
    legendCritical: 'Критично (25)',
  },
  metrics: {
    publicExposureLabel: 'Публичная видимость',
    trackingIntensityLabel: 'Интенсивность отслеживания',
    fingerprintLabel: 'Уникальность отпечатка',
    adSettingsLabel: 'Реклама в аккаунтах/устройствах',
    cleanupLabel: 'Очистка завершена',
    valueLow: 'Низкая',
    valuePages:
      '{count, plural, one {# страница} few {# страницы} many {# страниц} other {# страниц}}',
    valueUnique: 'Уникален',
    valueNotUnique: 'Не уникален',
    valueUnknown: 'Неизвестно',
    valueLimited: 'Ограничена',
    valueActive: 'Активна',
    valueCheckSettings: 'Проверить настройки',
    valueDone: 'Выполнено',
    valuePartial: 'Частично',
    valueNotYet: 'Ещё нет',
    valueNA: 'Н/Д',
    valueNotAnswered: 'Нет ответа',
    valueSkipped: 'Пропущено',
    exposureGood: 'Отлично! Ваша личная информация не была легко найдена в результатах поиска.',
    exposureWarning:
      'Часть личной информации видна. Рассмотрите возможность запроса на удаление из поисковых систем.',
    exposureCritical:
      'Ваша личная информация открыта. Примите меры для удаления её из баз данных и результатов поиска.',
    trackingGood: 'На просканированном сайте мало трекеров. Это лучше среднего.',
    trackingWarning:
      'Обнаружено умеренное отслеживание. Рассмотрите использование блокировщика контента.',
    trackingCritical: 'Высокое количество трекеров. Этот сайт активно монетизирует ваше внимание.',
    trackingUnknown: 'Запустите сканирование Blacklight, чтобы увидеть количество трекеров.',
    fingerprintGood: 'Ваш браузер сливается с другими, что затрудняет снятие отпечатка.',
    fingerprintCritical:
      'Ваш браузер уникально идентифицируем. Рассмотрите использование Firefox с улучшенной защитой от отслеживания.',
    fingerprintUnknown: 'Запустите тест EFF, чтобы проверить отпечаток вашего браузера.',
    adsGood: 'Вы отключили персонализацию рекламы в своих аккаунтах.',
    adsWarning:
      'Часть персонализации рекламы всё ещё активна. Рассмотрите отключение в настройках аккаунта.',
    adsUnknown:
      'Проверьте настройки рекламы в аккаунтах и на устройствах, чтобы увидеть, что включено.',
    adsCritical:
      'Персонализация рекламы активна. Ваша активность используется для таргетирования рекламы.',
    cleanupGood:
      'Вы очистили куки и включили блокировку сторонних куки. Это говорит о сниженной устойчивости отслеживания.',
    cleanupWarning:
      'Вы выполнили некоторые действия по очистке. Рассмотрите и очистку куки, и блокировку для лучшей защиты.',
    cleanupUnknown: 'Завершите шаг очистки, чтобы увидеть статус гигиены.',
    cleanupCritical:
      'Гигиенические действия, такие как очистка куки и блокировка сторонних куки, помогают снизить устойчивость отслеживания.',
    skippedExplanation: 'Вы пропустили этот шаг, поэтому оценка не показана.',
    statusNA: 'Н/Д',
    statusNotAnswered: 'Нет ответа',
    statusSkipped: 'Пропущено',
    statusTooltipNA: 'Не оценивается, потому что шаг пропущен или не дан ответ.',
  },
  chartCategories: {
    publicExposure: 'Публичная видимость',
    trackers: 'Трекеры',
    fingerprint: 'Отпечаток',
    adSettings: 'Настройки рекламы',
    cleanup: 'Очистка',
  },
  deviceNames: {
    desktop: 'Настольный компьютер',
    mobile: 'Мобильное устройство',
    unknown: 'Неизвестно',
  },
  osNames: {
    windows: 'Windows',
    mac: 'macOS',
    linux: 'Linux',
    ios: 'iOS',
    android: 'Android',
    unknown: 'Неизвестно',
  },
  browserOptions: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'Другое',
    unknown: 'Неизвестно',
  },
  browserNames: {
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    safari: 'Safari',
    other: 'ваш браузер',
    unknown: 'ваш браузер',
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
  const stored = localStorage.getItem('footprintWizard:locale');
  if (stored && stored in allTranslations) {
    return stored as Locale;
  }

  // Default to English
  return 'en';
}

export function saveLocaleToStorage(locale: Locale): void {
  localStorage.setItem('footprintWizard:locale', locale);
}

export const SUPPORTED_LOCALES: { code: Locale; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
];
