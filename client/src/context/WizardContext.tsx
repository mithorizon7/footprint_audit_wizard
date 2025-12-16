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
}

const WizardContext = createContext<WizardContextType | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WizardData>(() => {
    const stored = getWizardData();
    if (stored) return stored;
    return createInitialWizardData();
  });

  const [timeRemaining, setTimeRemaining] = useState(TOTAL_DURATION_MINUTES);

  useEffect(() => {
    saveWizardData(data);
  }, [data]);

  useEffect(() => {
    if (!data.startedAt || data.completedAt) return;

    const interval = setInterval(() => {
      const startTime = new Date(data.startedAt!).getTime();
      const elapsed = Math.floor((Date.now() - startTime) / 60000);
      const remaining = Math.max(0, TOTAL_DURATION_MINUTES - elapsed);
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [data.startedAt, data.completedAt]);

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
    nextStep();
  }, [nextStep]);

  const resetWizard = useCallback(() => {
    clearWizardData();
    setData(createInitialWizardData());
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
