"use client";

import { useSyncExternalStore } from "react";
import { Locale } from "@/data/business";

export interface WorkshopLiveStatus {
  isOpen: boolean;
  label: string;
  shortLabel: string;
}

function subscribeToMinuteTick(callback: () => void) {
  const interval = window.setInterval(callback, 60_000);
  return () => window.clearInterval(interval);
}

function getMinuteBucketClient(): number {
  return Math.floor(Date.now() / 60_000);
}

function getMinuteBucketServer(): number {
  return 0;
}

export function useValenciaWorkshopStatus(locale: Locale): WorkshopLiveStatus {
  const bucket = useSyncExternalStore(
    subscribeToMinuteTick,
    getMinuteBucketClient,
    getMinuteBucketServer
  );

  if (bucket === 0) {
    return {
      isOpen: true,
      label:
        locale === "es"
          ? "Atención en taller (L–V 09:30–14:00 y 16:30–20:00)"
          : "Atenció al taller (Dl–Dv 09:30–14:00 i 16:30–20:00)",
      shortLabel: locale === "es" ? "Taller en Benimaclet" : "Taller a Benimaclet",
    };
  }

  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Madrid",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value || "Mon";
    const hour = Number(parts.find((p) => p.type === "hour")?.value || 12);
    const minute = Number(parts.find((p) => p.type === "minute")?.value || 0);
    const totalMinutes = hour * 60 + minute;

    const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
    const isSaturday = weekday === "Sat";

    // Morning: 09:30 (570) to 14:00 (840)
    if (isWeekday && totalMinutes >= 570 && totalMinutes < 840) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Taller abierto ahora en Benimaclet (hasta las 14:00 h)"
            : "Taller obert ara a Benimaclet (fins a les 14:00 h)",
        shortLabel:
          locale === "es"
            ? "Abierto ahora · Benimaclet"
            : "Obert ara · Benimaclet",
      };
    }

    // Afternoon: 16:30 (990) to 20:00 (1200)
    if (isWeekday && totalMinutes >= 990 && totalMinutes < 1200) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Taller abierto ahora en Benimaclet (hasta las 20:00 h)"
            : "Taller obert ara a Benimaclet (fins a les 20:00 h)",
        shortLabel:
          locale === "es"
            ? "Abierto ahora · Benimaclet"
            : "Obert ara · Benimaclet",
      };
    }

    // Saturday morning: 10:00 (600) to 13:30 (810)
    if (isSaturday && totalMinutes >= 600 && totalMinutes < 810) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Sábado mañana · Atención con cita previa en taller"
            : "Dissabte matí · Atenció amb cita prèvia al taller",
        shortLabel:
          locale === "es" ? "Sábado · Con cita" : "Dissabte · Amb cita",
      };
    }

    // Midday break on weekdays (14:00 to 16:30)
    if (isWeekday && totalMinutes >= 840 && totalMinutes < 990) {
      return {
        isOpen: false,
        label:
          locale === "es"
            ? "Pausa de mediodía · Reapertura hoy a las 16:30 h (WhatsApp activo)"
            : "Pausa de migdia · Reobertura hui a les 16:30 h (WhatsApp actiu)",
        shortLabel:
          locale === "es" ? "Reabre hoy 16:30 h" : "Reobri hui 16:30 h",
      };
    }

    return {
      isOpen: false,
      label:
        locale === "es"
          ? "Taller cerrado ahora · Recepción de fotos por WhatsApp activa 24 h"
          : "Taller tancat ara · Recepció de fotos per WhatsApp activa 24 h",
      shortLabel:
        locale === "es"
          ? "Cerrado · Presupuesto 24h"
          : "Tancat · Pressupost 24h",
    };
  } catch {
    return {
      isOpen: true,
      label:
        locale === "es"
          ? "Atención personalizada en Benimaclet"
          : "Atenció personalitzada a Benimaclet",
      shortLabel: locale === "es" ? "Benimaclet" : "Benimaclet",
    };
  }
}
