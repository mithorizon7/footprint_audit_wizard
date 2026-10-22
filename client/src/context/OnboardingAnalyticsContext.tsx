import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { GuidanceLevel, Mode, StepKey } from '@shared/schema';
import { useI18n } from './I18nContext';
import { useWizard } from './WizardContext';
import { apiRequest } from '@/lib/queryClient';
import {
  buildAuditSessionPayload,
  countNextActions,
  countUnknownAnswers,
  getStepKeyForIndex,
  isWeakReport,
} from '@/lib/onboardingAnalytics';

interface ChecklistTelemetry {
  stepKey: StepKey;
  completedChecklistCount: number;
  targetChecklistCount: number;
  unmetItemsCount: number;
}

interface StepCompletionTelemetry extends ChecklistTelemetry {
  skipped: boolean;
  wasReady: boolean;
}

interface OnboardingAnalyticsContextValue {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  trackModeSelected: (mode: Mode) => void;
  trackChecklistProgress: (payload: ChecklistTelemetry) => void;
  trackReadinessPrompt: (payload: ChecklistTelemetry) => void;
  trackStepCompleted: (payload: StepCompletionTelemetry) => void;
}

const OnboardingAnalyticsContext = createContext<OnboardingAnalyticsContextValue | null>(null);

function useSessionScopedSetRef() {
  return useRef<Set<string>>(new Set());
}

export function OnboardingAnalyticsProvider({ children }: { children: ReactNode }) {
  const { data, currentStep, elapsedSeconds } = useWizard();
  const { locale } = useI18n();
  const sessionId = data.sessionId;
  const [enabled, setAnalyticsEnabled] = useState(() => {
    try {
      return localStorage.getItem('footprintWizard:analytics') === 'yes';
    } catch {
      return false;
    }
  });
  const setEnabled = (value: boolean) => {
    setAnalyticsEnabled(value);
    try {
      localStorage.setItem('footprintWizard:analytics', value ? 'yes' : 'no');
    } catch {
      /* Applies for this visit. */
    }
  };

  const welcomeViewedRef = useSessionScopedSetRef();
  const stepViewRef = useSessionScopedSetRef();
  const checklistProgressRef = useSessionScopedSetRef();
  const readinessPromptRef = useSessionScopedSetRef();
  const reportViewedRef = useSessionScopedSetRef();
  const auditStartedRef = useSessionScopedSetRef();
  const lastSyncedSessionPayloadRef = useRef<string | null>(null);

  const emitEvent = useCallback(
    (payload: Record<string, unknown>) => {
      if (!sessionId || !enabled) {
        return;
      }

      void apiRequest('POST', '/api/onboarding-events', payload).catch((error) => {
        console.error('Failed to store onboarding analytics event:', error);
      });
    },
    [enabled, sessionId],
  );

  useEffect(() => {
    if (!enabled || !sessionId || currentStep !== 0 || welcomeViewedRef.current.has(sessionId)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'welcome_viewed',
      stepKey: 'welcome',
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'light',
      timeSinceStartSec: 0,
    });
    welcomeViewedRef.current.add(sessionId);
  }, [
    currentStep,
    enabled,
    data.device.browser,
    data.device.os,
    data.device.type,
    data.mode,
    emitEvent,
    locale,
    sessionId,
    welcomeViewedRef,
  ]);

  useEffect(() => {
    if (!enabled || !sessionId || !data.startedAt || auditStartedRef.current.has(sessionId)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'audit_started',
      stepKey: 'welcome',
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'light',
      timeSinceStartSec: 0,
    });
    auditStartedRef.current.add(sessionId);
  }, [
    data.device.browser,
    data.device.os,
    data.device.type,
    data.mode,
    data.startedAt,
    enabled,
    emitEvent,
    locale,
    sessionId,
    auditStartedRef,
  ]);

  useEffect(() => {
    if (!enabled || !sessionId || currentStep <= 0 || currentStep >= 6) {
      return;
    }

    const stepKey = getStepKeyForIndex(currentStep);
    const dedupeKey = `${sessionId}:${stepKey}`;
    if (stepViewRef.current.has(dedupeKey)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'step_viewed',
      stepKey,
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'light',
      timeSinceStartSec: elapsedSeconds,
    });
    stepViewRef.current.add(dedupeKey);
  }, [
    currentStep,
    data.device.browser,
    data.device.os,
    data.device.type,
    data.mode,
    elapsedSeconds,
    enabled,
    emitEvent,
    locale,
    sessionId,
    stepViewRef,
  ]);

  useEffect(() => {
    if (!enabled || !sessionId || currentStep !== 6) {
      return;
    }

    const dedupeKey = `${sessionId}:report`;
    if (reportViewedRef.current.has(dedupeKey)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'report_viewed',
      stepKey: 'reportCard',
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'none',
      timeSinceStartSec: elapsedSeconds,
      unknownAnswerCount: countUnknownAnswers(data.results),
      nextActionCount: countNextActions(data),
      skippedStepCount: data.skippedSteps.length,
      weakReport: isWeakReport(data),
    });
    reportViewedRef.current.add(dedupeKey);
  }, [currentStep, data, elapsedSeconds, enabled, emitEvent, locale, sessionId, reportViewedRef]);

  useEffect(() => {
    if (!enabled || !sessionId || !data.startedAt) {
      return;
    }

    const payload = buildAuditSessionPayload(data, locale);
    const serializedPayload = JSON.stringify(payload);
    if (lastSyncedSessionPayloadRef.current === serializedPayload) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void apiRequest('POST', '/api/sessions', payload)
        .then(() => {
          lastSyncedSessionPayloadRef.current = serializedPayload;
        })
        .catch((error) => {
          console.error('Failed to sync audit session:', error);
        });
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [data, enabled, locale, sessionId]);

  const trackModeSelected = (mode: Mode) => {
    if (!enabled || !sessionId) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'mode_selected',
      stepKey: 'welcome',
      mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'light',
      timeSinceStartSec: 0,
    });
  };

  const trackChecklistProgress = (payload: ChecklistTelemetry) => {
    if (!enabled || !sessionId) {
      return;
    }

    const dedupeKey = [
      sessionId,
      payload.stepKey,
      payload.completedChecklistCount,
      payload.targetChecklistCount,
    ].join(':');
    if (checklistProgressRef.current.has(dedupeKey)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'checklist_progressed',
      stepKey: payload.stepKey,
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'light',
      timeSinceStartSec: elapsedSeconds,
      completedChecklistCount: payload.completedChecklistCount,
      targetChecklistCount: payload.targetChecklistCount,
      unmetItemsCount: payload.unmetItemsCount,
    });
    checklistProgressRef.current.add(dedupeKey);
  };

  const trackReadinessPrompt = (payload: ChecklistTelemetry) => {
    if (!enabled || !sessionId) {
      return;
    }

    const dedupeKey = `${sessionId}:${payload.stepKey}`;
    if (readinessPromptRef.current.has(dedupeKey)) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'next_prompt_shown',
      stepKey: payload.stepKey,
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: 'high' satisfies GuidanceLevel,
      timeSinceStartSec: elapsedSeconds,
      completedChecklistCount: payload.completedChecklistCount,
      targetChecklistCount: payload.targetChecklistCount,
      unmetItemsCount: payload.unmetItemsCount,
    });
    readinessPromptRef.current.add(dedupeKey);
  };

  const trackStepCompleted = (payload: StepCompletionTelemetry) => {
    if (!sessionId) {
      return;
    }

    emitEvent({
      sessionId,
      eventName: 'step_completed',
      stepKey: payload.stepKey,
      mode: data.mode,
      locale,
      deviceType: data.device.type,
      os: data.device.os,
      browser: data.device.browser,
      guidanceLevel: payload.wasReady ? 'light' : 'high',
      timeSinceStartSec: elapsedSeconds,
      completedChecklistCount: payload.completedChecklistCount,
      targetChecklistCount: payload.targetChecklistCount,
      unmetItemsCount: payload.unmetItemsCount,
      wasReady: payload.wasReady,
      skipped: payload.skipped,
    });
  };

  const value: OnboardingAnalyticsContextValue = {
    enabled,
    setEnabled,
    trackModeSelected,
    trackChecklistProgress,
    trackReadinessPrompt,
    trackStepCompleted,
  };

  return (
    <OnboardingAnalyticsContext.Provider value={value}>
      {children}
    </OnboardingAnalyticsContext.Provider>
  );
}

export function useOnboardingAnalytics() {
  const context = useContext(OnboardingAnalyticsContext);
  if (!context) {
    throw new Error('useOnboardingAnalytics must be used within OnboardingAnalyticsProvider');
  }

  return context;
}
