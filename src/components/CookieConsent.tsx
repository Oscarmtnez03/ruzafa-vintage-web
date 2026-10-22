"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, SlidersHorizontal, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CookieConsent() {
  const {
    locale,
    cookieConsent,
    saveCookieConsent,
    isCookieSettingsOpen,
    setIsCookieSettingsOpen,
  } = useLanguage();

  const [showGranular, setShowGranular] = useState(false);
  const [externalMapsEnabled, setExternalMapsEnabled] = useState(
    cookieConsent === "all_accepted"
  );

  const isVisible = cookieConsent === "unset" || isCookieSettingsOpen;

  if (!isVisible) return null;

  const handleOpenGranular = () => {
    setExternalMapsEnabled(cookieConsent === "all_accepted");
    setShowGranular(true);
  };

  const handleSaveCustom = () => {
    saveCookieConsent(externalMapsEnabled ? "all_accepted" : "essential_only");
    setShowGranular(false);
  };

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        aria-label={
          locale === "es"
            ? "Panel de privacidad y gestión de cookies (Normativa AEPD)"
            : "Panell de privacitat i gestió de cookies (Normativa AEPD)"
        }
        role="dialog"
        aria-modal="false"
        className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-lg z-50 rounded-3xl bg-[#F5F3EF] text-[#141210] p-5 sm:p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.42)] ring-2 ring-[#141210]"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#141210] text-[#D4A66A] flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#141210] font-semibold">
                {locale === "es"
                  ? "Privacidad y Cookies (Guía AEPD)"
                  : "Privacitat i Cookies (Guia AEPD)"}
              </p>
              <p className="font-mono text-[10px] text-[#78716C]">
                Ley 34/2002 (LSSI-CE) · RGPD (UE) 2016/679
              </p>
            </div>
          </div>

          {isCookieSettingsOpen && (
            <button
              type="button"
              onClick={() => {
                setIsCookieSettingsOpen(false);
                setShowGranular(false);
              }}
              aria-label="Cerrar panel de configuración de cookies"
              className="w-7 h-7 rounded-full bg-black/[0.06] hover:bg-black/12 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <p className="text-xs text-[#44403C] leading-relaxed">
          {locale === "es" ? (
            <>
              Utilizamos almacenamiento técnico propio estrictamente necesario
              para recordar el idioma y tu preferencia de privacidad. Solo si lo
              autorizas, cargaremos servicios externos de terceros (como el mapa
              interactivo de OpenStreetMap). No utilizamos cookies publicitarias
              ni de rastreo. Puedes aceptar todas, rechazar las opcionales en
              igualdad de condiciones o configurarlas. Más información en nuestra{" "}
              <Link
                href="/cookies"
                className="underline font-medium text-[#9A6B32] hover:text-[#141210]"
              >
                Política de Cookies
              </Link>{" "}
              y{" "}
              <Link
                href="/privacidad"
                className="underline font-medium text-[#9A6B32] hover:text-[#141210]"
              >
                Política de Privacidad
              </Link>
              .
            </>
          ) : (
            <>
              Utilitzem emmagatzematge tècnic propi estrictament necessari per
              recordar l&apos;idioma i la teua preferència de privacitat. Només si
              ho autoritzes, carregarem serveis externs (com el mapa interactiu
              d&apos;OpenStreetMap). Pots acceptar-les totes, rebutjar les
              opcionals o configurar-les. Consulta la{" "}
              <Link
                href="/cookies"
                className="underline font-medium text-[#9A6B32]"
              >
                Política de Cookies
              </Link>
              .
            </>
          )}
        </p>

        {/* Granular Configuration Panel */}
        {showGranular && (
          <div className="mt-4 pt-3 border-t border-black/10 space-y-2.5 text-xs">
            <div className="p-3 rounded-2xl bg-white ring-1 ring-black/[0.08] flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-[#141210]">
                  {locale === "es"
                    ? "1. Técnicas y Funcionales (Obligatorias)"
                    : "1. Tècniques i Funcionals (Obligatòries)"}
                </p>
                <p className="text-[11px] text-[#57534E] mt-0.5">
                  {locale === "es"
                    ? "Permiten guardar tu decisión sobre cookies y el idioma seleccionado (ES/VAL). Exentas según art. 22.2 LSSI."
                    : "Permeten guardar la teua decisió sobre cookies i l'idioma."}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#EBE6DC] font-mono text-[10px] uppercase text-[#141210] shrink-0">
                Siempre activas
              </span>
            </div>

            <label className="p-3 rounded-2xl bg-white ring-1 ring-black/[0.08] flex items-start justify-between gap-3 cursor-pointer">
              <div>
                <p className="font-semibold text-[#141210]">
                  {locale === "es"
                    ? "2. Mapas Interactivos de Terceros (OpenStreetMap)"
                    : "2. Mapes Interactius de Tercers (OpenStreetMap)"}
                </p>
                <p className="text-[11px] text-[#57534E] mt-0.5">
                  {locale === "es"
                    ? "Permite embeber el visor cartográfico de la C/ Arquitecto Arnau, 61 directamente en la página."
                    : "Permet incrustar el visor cartogràfic del C/ Arquitecto Arnau, 61."}
                </p>
              </div>
              <input
                type="checkbox"
                checked={externalMapsEnabled}
                onChange={(e) => setExternalMapsEnabled(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#141210] shrink-0"
              />
            </label>
          </div>
        )}

        {/* AEPD 2024 Compliant Action Buttons: Equal Prominence for Accept & Reject */}
        <div className="mt-4 pt-3 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => {
              saveCookieConsent("essential_only");
              setShowGranular(false);
            }}
            className="min-h-10 px-3 py-2.5 rounded-full bg-[#141210] text-[#F7F4EE] hover:bg-[#3A332C] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            {locale === "es" ? "Rechazar opcionales" : "Rebutjar opcionals"}
          </button>

          <button
            type="button"
            onClick={() => {
              saveCookieConsent("all_accepted");
              setShowGranular(false);
            }}
            className="min-h-10 px-3 py-2.5 rounded-full bg-[#141210] text-[#F7F4EE] hover:bg-[#9A6B32] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            {locale === "es" ? "Aceptar todas" : "Acceptar totes"}
          </button>

          {showGranular ? (
            <button
              type="button"
              onClick={handleSaveCustom}
              className="min-h-10 px-3 py-2.5 rounded-full bg-[#9A6B32] text-white hover:bg-[#7D5525] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === "es" ? "Guardar" : "Guardar"}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleOpenGranular}
              className="min-h-10 px-3 py-2.5 rounded-full bg-white text-[#141210] ring-1 ring-[#141210] hover:bg-[#EBE6DC] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === "es" ? "Configurar" : "Configurar"}</span>
            </button>
          )}
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
