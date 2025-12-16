import { useWizard } from "@/context/WizardContext";
import { useI18n } from "@/context/I18nContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, User, FlaskConical, Monitor, Smartphone, HelpCircle } from "lucide-react";
import { AlertBox } from "@/components/wizard/AlertBox";
import { cn } from "@/lib/utils";
import type { Mode, DeviceType, OS, Browser } from "@shared/schema";

export default function Welcome() {
  const { data, setMode, setDevice, startAudit, mode } = useWizard();
  const { t } = useI18n();

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold font-serif text-foreground">
            {t.welcome.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t.welcome.subtitle}
          </p>
        </div>

        <AlertBox severity="warning" className="max-w-xl mx-auto">
          {t.welcome.safetyNote}
        </AlertBox>

        <div className="space-y-4">
          <p className="text-sm font-medium text-center text-muted-foreground">
            {t.welcome.chooseMode}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              className={cn(
                "cursor-pointer transition-all p-0 hover-elevate",
                mode === "self" && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
              onClick={() => handleModeChange("self")}
              data-testid="mode-self"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      mode === "self" ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.welcome.myFootprint}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t.welcome.myFootprintDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all p-0 hover-elevate",
                mode === "fictional" && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
              onClick={() => handleModeChange("fictional")}
              data-testid="mode-fictional"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      mode === "fictional" ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.welcome.fictionalPersona}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t.welcome.fictionalPersonaDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <p className="text-xs text-center text-muted-foreground">
            {t.welcome.optionalHelp}
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">{t.welcome.deviceLabel}</label>
              <Select
                value={data.device.type}
                onValueChange={(v) => setDevice({ type: v as DeviceType })}
              >
                <SelectTrigger data-testid="select-device-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desktop">
                    <span className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" /> Desktop
                    </span>
                  </SelectItem>
                  <SelectItem value="mobile">
                    <span className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" /> Mobile
                    </span>
                  </SelectItem>
                  <SelectItem value="unknown">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" /> Unknown
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">{t.welcome.osLabel}</label>
              <Select value={data.device.os} onValueChange={(v) => setDevice({ os: v as OS })}>
                <SelectTrigger data-testid="select-os">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="mac">macOS</SelectItem>
                  <SelectItem value="linux">Linux</SelectItem>
                  <SelectItem value="ios">iOS</SelectItem>
                  <SelectItem value="android">Android</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">{t.welcome.browserLabel}</label>
              <Select
                value={data.device.browser}
                onValueChange={(v) => setDevice({ browser: v as Browser })}
              >
                <SelectTrigger data-testid="select-browser">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chrome">Chrome</SelectItem>
                  <SelectItem value="edge">Edge</SelectItem>
                  <SelectItem value="firefox">Firefox</SelectItem>
                  <SelectItem value="safari">Safari</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button size="lg" onClick={startAudit} data-testid="button-begin-audit">
            {t.common.startAudit}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground max-w-md mx-auto">
          {t.welcome.consent}
        </p>

        <div className="text-center pt-4">
          <a
            href="/facilitator"
            className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
            data-testid="link-facilitator-dashboard"
          >
            Facilitator Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
