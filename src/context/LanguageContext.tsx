"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import { Locale } from "@/data/business";

export interface DiagnosticPrefill {
  pieceType?: string;
  decadeOrMaterial?: string;
  interventionScope?: string;
  dimensionsOrLocation?: string;
  notes?: string;
  version?: number;
}

export type CookieConsentMode = "unset" | "essential_only" | "all_accepted";

const COOKIE_STORAGE_KEY = "carlos_soriano_cookie_consent_v2";
const LOCALE_STORAGE_KEY = "carlos_soriano_locale_v1";

function subscribeToCookieStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("carlos-cookie-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("carlos-cookie-change", callback);
  };
}

function getCookieSnapshot(): CookieConsentMode {
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return "unset";
    const parsed = JSON.parse(raw);
    if (
      parsed.mode === "essential_only" ||
      parsed.mode === "all_accepted"
    ) {
      return parsed.mode;
    }
    return "unset";
  } catch {
    return "unset";
  }
}

function getServerCookieSnapshot(): CookieConsentMode {
  // On the server, return "essential_only" so SSR never renders unconsented third-party iframes
  return "essential_only";
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  prefill: DiagnosticPrefill;
  triggerPrefillAndScroll: (data: Omit<DiagnosticPrefill, "version">) => void;
  cookieConsent: CookieConsentMode;
  saveCookieConsent: (mode: "essential_only" | "all_accepted") => void;
  isCookieSettingsOpen: boolean;
  setIsCookieSettingsOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [prefill, setPrefill] = useState<DiagnosticPrefill>({ version: 0 });
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved === "es" || saved === "va") {
        queueMicrotask(() => {
          setLocaleState(saved);
        });
        document.documentElement.lang = saved === "va" ? "ca-valencia" : "es";
      } else {
        document.documentElement.lang = "es";
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale === "va" ? "ca-valencia" : "es";
    }
  }, []);

  const cookieConsent = useSyncExternalStore(
    subscribeToCookieStorage,
    getCookieSnapshot,
    getServerCookieSnapshot
  );

  const saveCookieConsent = useCallback(
    (mode: "essential_only" | "all_accepted") => {
      try {
        window.localStorage.setItem(
          COOKIE_STORAGE_KEY,
          JSON.stringify({
            mode,
            updatedAt: new Date().toISOString(),
            version: "2.0-AEPD-2024",
          })
        );
        window.dispatchEvent(new Event("carlos-cookie-change"));
      } catch {
        // ignore storage errors
      }
      setIsCookieSettingsOpen(false);
    },
    []
  );

  const triggerPrefillAndScroll = useCallback(
    (data: Omit<DiagnosticPrefill, "version">) => {
      setPrefill((prev) => ({
        ...prev,
        ...data,
        version: (prev.version || 0) + 1,
      }));
      const target = document.getElementById("solicitar-valoracion");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        prefill,
        triggerPrefillAndScroll,
        cookieConsent,
        saveCookieConsent,
        isCookieSettingsOpen,
        setIsCookieSettingsOpen,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
