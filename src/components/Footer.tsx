"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, SlidersHorizontal } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { locale, setIsCookieSettingsOpen } = useLanguage();

  return (
    <footer className="bg-[#0B0908] text-[#C2B9AC] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Craft Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-[#D4A66A] bg-[#181512] flex items-center justify-center">
                <span className="font-serif text-base text-[#D4A66A]">CS</span>
              </div>
              <div>
                <span className="block font-serif text-xl text-[#F7F4EE]">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#D4A66A]">
                  {BUSINESS_INFO.founder}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#A89F91]">
              {locale === "es"
                ? "Taller de restauración de muebles antiguos y clásicos, ebanistería artesanal, tratamientos anticarcoma y tapicería tradicional en el barrio de Benimaclet, València."
                : "Taller de restauració de mobles antics i clàssics, ebenisteria artesanal, tractaments anticorc i tapisseria tradicional al barri de Benimaclet, València."}
            </p>

            <p className="text-xs font-mono text-[#8C8275]">
              {locale === "es"
                ? "Hojas oficiales de reclamaciones de la Generalitat Valenciana a disposición de los clientes en el taller."
                : "Fulls oficials de reclamacions de la Generalitat Valenciana a disposició dels clients al taller."}
            </p>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F7F4EE]">
              {locale === "es" ? "Secciones del Taller" : "Seccions del Taller"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#especialidades"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Especialidades de Restauración"
                    : "Especialitats de Restauració"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#diagnostico"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Diagnóstico Técnico de Piezas"
                    : "Diagnòstic Tècnic de Peces"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#intervenciones"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Cuaderno de Intervenciones"
                    : "Quadern d'Intervencions"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#proceso"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Metodología y Reconocimiento"
                    : "Metodologia i Reconeixement"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ubicacion"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Taller en Benimaclet y Cobertura"
                    : "Taller a Benimaclet i Cobertura"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#preguntas-frecuentes"
                  className="hover:text-[#D4A66A] transition-colors"
                >
                  {locale === "es"
                    ? "Preguntas Frecuentes"
                    : "Preguntes Freqüents"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F7F4EE]">
              {locale === "es"
                ? "Datos de Contacto Verificados (València)"
                : "Dades de Contacte Verificades (València)"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-[#D4A66A] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  {BUSINESS_INFO.streetAddress} · {BUSINESS_INFO.postalCode}{" "}
                  {BUSINESS_INFO.city} ({BUSINESS_INFO.Neighborhood})
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-[#D4A66A] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${BUSINESS_INFO.phoneE164}`}
                  className="hover:text-[#F7F4EE] font-mono"
                >
                  +34 {BUSINESS_INFO.phoneDisplay} (Teléfono y WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="w-4 h-4 text-[#D4A66A] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#F7F4EE] font-mono"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="w-4 h-4 text-[#D4A66A] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-xs text-[#A89F91]">
                  {locale === "es"
                    ? BUSINESS_INFO.schedule.appointmentNoteEs
                    : BUSINESS_INFO.schedule.appointmentNoteVa}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar (Full Spanish Legal Compliance) */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#8C8275]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} ·{" "}
            {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.postalCode}{" "}
            {BUSINESS_INFO.city}.
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]"
            aria-label="Enlaces legales y de cumplimiento normativo en España"
          >
            <Link
              href="/aviso-legal"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Aviso Legal (LSSI-CE)
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Política de Privacidad (RGPD)
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Política de Cookies
            </Link>
            <Link
              href="/condiciones-servicio"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Condiciones y Garantías (LGDCU)
            </Link>
            <Link
              href="/accesibilidad"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Accesibilidad
            </Link>
            <button
              type="button"
              onClick={() => setIsCookieSettingsOpen(true)}
              className="inline-flex items-center gap-1.5 text-[#D4A66A] hover:text-white underline cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3" aria-hidden="true" />
              <span>Configurar Cookies</span>
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
