export type Locale = "en" | "es" | "fr" | "de" | "zh";

export interface Translations {
  common: {
    next: string;
    back: string;
    skip: string;
    startAudit: string;
    clearData: string;
    cancel: string;
    confirm: string;
    print: string;
    download: string;
    startOver: string;
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
  };
  steps: {
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
}

const en: Translations = {
  common: {
    next: "Next",
    back: "Back",
    skip: "Skip",
    startAudit: "Begin Audit",
    clearData: "Clear my lab data",
    cancel: "Cancel",
    confirm: "Confirm",
    print: "Print / Save PDF",
    download: "Download Report",
    startOver: "Start New Audit",
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
  },
  steps: {
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
    fingerprintDetails: "Fingerprint Details",
    cleanupActions: "Cleanup Actions Taken",
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
};

const es: Translations = {
  common: {
    next: "Siguiente",
    back: "Atr\u00e1s",
    skip: "Saltar",
    startAudit: "Comenzar Auditor\u00eda",
    clearData: "Borrar mis datos del laboratorio",
    cancel: "Cancelar",
    confirm: "Confirmar",
    print: "Imprimir / Guardar PDF",
    download: "Descargar Informe",
    startOver: "Nueva Auditor\u00eda",
  },
  welcome: {
    title: "Asistente de Auditor\u00eda de Huella Digital",
    subtitle:
      "Este laboratorio de 60 minutos te ayuda a ver qu\u00e9 partes de tu huella digital son visibles y rastreables. Usar\u00e1s herramientas p\u00fablicas confiables para explorar tu presencia en l\u00ednea.",
    safetyNote:
      "Solo autoauditor\u00eda: Busca solo tus propios identificadores o usa el Modo de Persona Ficticia. Nunca pedimos tu nombre, correo o tel\u00e9fono. Solo registrar\u00e1s conteos y respuestas s\u00ed/no. Todo permanece en tu dispositivo.",
    chooseMode: "Elige c\u00f3mo deseas proceder:",
    myFootprint: "Mi Huella",
    myFootprintDesc: "Busca tu propio nombre y registra hallazgos reales",
    fictionalPersona: "Demo de Persona Ficticia",
    fictionalPersonaDesc: "Ver datos de ejemplo sin b\u00fasquedas reales",
    deviceLabel: "Dispositivo",
    osLabel: "SO",
    browserLabel: "Navegador",
    consent:
      "Al continuar, reconoces que esta es una herramienta de autoauditor\u00eda. No recopilamos ni transmitimos identificadores personales. Todos los datos permanecen en tu dispositivo.",
  },
  steps: {
    publicExposure: "Exposici\u00f3n P\u00fablica",
    trackers: "Rastreadores",
    fingerprinting: "Huella Digital",
    accountDevice: "Cuenta/Dispositivo",
    cleanup: "Limpieza",
    reportCard: "Informe",
  },
  report: {
    title: "Tu Informe de Huella Digital",
    subtitle:
      "Aqu\u00ed hay un resumen de lo que descubriste sobre tu huella digital y los pr\u00f3ximos pasos recomendados.",
    auditComplete: "Auditor\u00eda Completa",
    privacyScoreOverview: "Resumen de Puntuaci\u00f3n de Privacidad",
    whatThisMeans: "Qu\u00e9 Significa Esto",
    nextActions: "Tus Pr\u00f3ximas Acciones",
    publicExposureDetails: "Detalles de Exposici\u00f3n P\u00fablica",
    trackerAnalysis: "An\u00e1lisis de Rastreadores",
    accountSettings: "Configuraci\u00f3n de Cuenta y Dispositivo",
    fingerprintDetails: "Detalles de Huella Digital",
    cleanupActions: "Acciones de Limpieza Realizadas",
  },
  panic: {
    buttonLabel: "Borrar mis datos del laboratorio",
    title: "\u00bfBorrar todos los datos del laboratorio?",
    description:
      "Esto eliminar\u00e1 permanentemente todo tu progreso de auditor\u00eda y datos registrados de este dispositivo. Comenzar\u00e1s de nuevo. Esta acci\u00f3n no se puede deshacer.",
    confirmButton: "S\u00ed, borrar todo",
  },
  sessionRecovery: {
    title: "Sesi\u00f3n Incompleta Encontrada",
    description:
      "Tienes una sesi\u00f3n de auditor\u00eda sin terminar. \u00bfDeseas continuar donde lo dejaste?",
    started: "Iniciada:",
    lastStep: "\u00daltimo paso:",
    resumeButton: "Reanudar Sesi\u00f3n",
    startFreshButton: "Empezar de Nuevo",
  },
};

const translations: Record<Locale, Translations> = {
  en,
  es,
  fr: en,
  de: en,
  zh: en,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en;
}

export function getLocaleFromStorage(): Locale {
  const stored = localStorage.getItem("footprintWizard:locale");
  if (stored && stored in translations) {
    return stored as Locale;
  }
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang in translations) {
    return browserLang as Locale;
  }
  return "en";
}

export function saveLocaleToStorage(locale: Locale): void {
  localStorage.setItem("footprintWizard:locale", locale);
}

export const SUPPORTED_LOCALES: { code: Locale; name: string }[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Espa\u00f1ol" },
  { code: "fr", name: "Fran\u00e7ais" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "\u4e2d\u6587" },
];
