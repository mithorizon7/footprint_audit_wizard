import { createContext, useContext, useCallback, useState, useEffect, type ReactNode } from "react";
import {
  WizardData,
  WizardResults,
  FICTIONAL_DATA,
  STEP_INFO,
  TOTAL_DURATION_MINUTES,
  type Mode,
  type DeviceInfo,
} from "@shared/schema";
import {
  getWizardData,
  saveWizardData,
  clearWizardData,
  createInitialWizardData,
  detectDevice,
} from "@/lib/wizardStorage";

interface WizardContextType {
  data: WizardData;
  mode: Mode;
  currentStep: number;
  isFictional: boolean;
  timeRemaining: number;
  elapsedSeconds: number;
  currentStepTargetMinutes: number;
  skippedSteps: number[];
  tryLiveTools: boolean;
  setMode: (mode: Mode) => void;
  setDevice: (device: Partial<DeviceInfo>) => void;
  updateResults: <K extends keyof WizardResults>(
    section: K,
    updates: Partial<WizardResults[K]>
  ) => void;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  skipStep: () => void;
  resetWizard: () => void;
  startAudit: () => void;
  completeAudit: () => void;
  setTryLiveTools: (value: boolean) => void;
  isStepSkipped: (step: number) => boolean;
}

const WizardContext = createContext<WizardContextType | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WizardData>(() => {
    const stored = getWizardData();
    if (stored) {
      return {
        ...stored,
        skippedSteps: stored.skippedSteps ?? [],
        elapsedSeconds: stored.elapsedSeconds ?? 0,
        tryLiveToolsInFictional: stored.tryLiveToolsInFictional ?? false,
      };
    }
    return createInitialWizardData();
  });

  const [elapsedSeconds, setElapsedSeconds] = useState(() => data.elapsedSeconds ?? 0);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_DURATION_MINUTES);

  useEffect(() => {
    saveWizardData({ ...data, elapsedSeconds });
  }, [data, elapsedSeconds]);

  useEffect(() => {
    if (!data.startedAt || data.completedAt) return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => {
        const newElapsed = prev + 1;
        const remainingMinutes = Math.max(0, TOTAL_DURATION_MINUTES - Math.floor(newElapsed / 60));
        setTimeRemaining(remainingMinutes);
        return newElapsed;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.startedAt, data.completedAt]);

  useEffect(() => {
    const remainingMinutes = Math.max(0, TOTAL_DURATION_MINUTES - Math.floor(elapsedSeconds / 60));
    setTimeRemaining(remainingMinutes);
  }, [elapsedSeconds]);

  const setMode = useCallback((mode: Mode) => {
    if (mode === "fictional") {
      setData({ ...FICTIONAL_DATA, currentStep: 0, startedAt: null, completedAt: null });
    } else {
      setData((prev) => ({
        ...createInitialWizardData(),
        device: prev.device,
        mode: "self",
      }));
    }
  }, []);

  const setDevice = useCallback((device: Partial<DeviceInfo>) => {
    setData((prev) => ({
      ...prev,
      device: { ...prev.device, ...device } as DeviceInfo,
    }));
  }, []);

  const updateResults = useCallback(
    <K extends keyof WizardResults>(section: K, updates: Partial<WizardResults[K]>) => {
      setData((prev) => ({
        ...prev,
        results: {
          ...prev.results,
          [section]: { ...prev.results[section], ...updates },
        },
      }));
    },
    []
  );

  const goToStep = useCallback((step: number) => {
    const maxStep = STEP_INFO.length - 1;
    const clampedStep = Math.max(0, Math.min(step, maxStep));
    setData((prev) => ({ ...prev, currentStep: clampedStep }));
  }, []);

  const nextStep = useCallback(() => {
    setData((prev) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, STEP_INFO.length - 1),
    }));
  }, []);

  const prevStep = useCallback(() => {
    setData((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
    }));
  }, []);

  const skipStep = useCallback(() => {
    setData((prev) => {
      const newSkippedSteps = prev.skippedSteps.includes(prev.currentStep)
        ? prev.skippedSteps
        : [...prev.skippedSteps, prev.currentStep];
      return {
        ...prev,
        skippedSteps: newSkippedSteps,
        currentStep: Math.min(prev.currentStep + 1, STEP_INFO.length - 1),
      };
    });
  }, []);

  const setTryLiveTools = useCallback((value: boolean) => {
    setData((prev) => ({ ...prev, tryLiveToolsInFictional: value }));
  }, []);

  const isStepSkipped = useCallback(
    (step: number) => data.skippedSteps.includes(step),
    [data.skippedSteps]
  );

  const currentStepTargetMinutes = STEP_INFO[data.currentStep]?.duration ?? 10;

  const resetWizard = useCallback(() => {
    clearWizardData();
    setData(createInitialWizardData());
    setElapsedSeconds(0);
    setTimeRemaining(TOTAL_DURATION_MINUTES);
  }, []);

  const startAudit = useCallback(() => {
    const detectedDevice = detectDevice();
    setData((prev) => ({
      ...prev,
      startedAt: new Date().toISOString(),
      currentStep: 1,
      device: {
        type: detectedDevice.type as "desktop" | "mobile" | "unknown",
        os: detectedDevice.os as DeviceInfo["os"],
        browser: detectedDevice.browser as DeviceInfo["browser"],
      },
    }));
  }, []);

  const completeAudit = useCallback(() => {
    setData((prev) => ({
      ...prev,
      completedAt: new Date().toISOString(),
      currentStep: STEP_INFO.length - 1,
    }));
  }, []);

  return (
    <WizardContext.Provider
      value={{
        data,
        mode: data.mode,
        currentStep: data.currentStep,
        isFictional: data.mode === "fictional",
        timeRemaining,
        elapsedSeconds,
        currentStepTargetMinutes,
        skippedSteps: data.skippedSteps,
        tryLiveTools: data.tryLiveToolsInFictional,
        setMode,
        setDevice,
        updateResults,
        goToStep,
        nextStep,
        prevStep,
        skipStep,
        resetWizard,
        startAudit,
        completeAudit,
        setTryLiveTools,
        isStepSkipped,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
}
