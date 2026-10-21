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
          ? "Atención personalizada con cita previa (L–V 10–14h y 17–20h)"
          : "Atenció personalitzada amb cita prèvia (Dl–Dv 10–14h i 17–20h)",
      shortLabel: locale === "es" ? "Cita previa activa" : "Cita prèvia activa",
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

    // Morning: 10:00 (600) to 14:00 (840)
    if (isWeekday && totalMinutes >= 600 && totalMinutes < 840) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Taller abierto ahora en Ruzafa (hasta las 14:00 h) · Cita previa"
            : "Taller obert ara a Russafa (fins a les 14:00 h) · Cita prèvia",
        shortLabel:
          locale === "es"
            ? "Abierto ahora · Cita previa"
            : "Obert ara · Cita prèvia",
      };
    }

    // Afternoon: 17:00 (1020) to 20:00 (1200)
    if (isWeekday && totalMinutes >= 1020 && totalMinutes < 1200) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Taller abierto ahora en Ruzafa (hasta las 20:00 h) · Cita previa"
            : "Taller obert ara a Russafa (fins a les 20:00 h) · Cita prèvia",
        shortLabel:
          locale === "es"
            ? "Abierto ahora · Cita previa"
            : "Obert ara · Cita prèvia",
      };
    }

    // Saturday morning: 10:00 (600) to 13:30 (810)
    if (isSaturday && totalMinutes >= 600 && totalMinutes < 810) {
      return {
        isOpen: true,
        label:
          locale === "es"
            ? "Sábado mañana · Atención de citas concertadas en taller"
            : "Dissabte matí · Atenció de cites concertades al taller",
        shortLabel:
          locale === "es" ? "Sábado · Con cita" : "Dissabte · Amb cita",
      };
    }

    // Midday break on weekdays (14:00 to 17:00)
    if (isWeekday && totalMinutes >= 840 && totalMinutes < 1020) {
      return {
        isOpen: false,
        label:
          locale === "es"
            ? "Pausa de mediodía · Reapertura hoy a las 17:00 h (Recepción online activa)"
            : "Pausa de migdia · Reobertura hui a les 17:00 h (Recepció online activa)",
        shortLabel:
          locale === "es" ? "Reabre hoy 17:00 h" : "Reobri hui 17:00 h",
      };
    }

    return {
      isOpen: false,
      label:
        locale === "es"
          ? "Taller cerrado ahora · Recepción de valoraciones y fotos activa 24 h"
          : "Taller tancat ara · Recepció de valoracions i fotos activa 24 h",
      shortLabel:
        locale === "es"
          ? "Cerrado · Valoración 24h"
          : "Tancat · Valoració 24h",
    };
  } catch {
    return {
      isOpen: true,
      label:
        locale === "es"
          ? "Atención personalizada con cita previa"
          : "Atenció personalitzada amb cita prèvia",
      shortLabel: locale === "es" ? "Cita previa" : "Cita prèvia",
    };
  }
}
