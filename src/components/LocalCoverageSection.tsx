"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Truck,
  Train,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";
import { useValenciaWorkshopStatus } from "@/utils/valenciaSchedule";

export function LocalCoverageSection() {
  const { locale, cookieConsent, saveCookieConsent } = useLanguage();
  const workshopStatus = useValenciaWorkshopStatus(locale);

  const isMapConsented = cookieConsent === "all_accepted";

  const valenciaDistricts = [
    {
      zone: "Benimaclet y El Pla del Real",
      detailEs:
        "Ubicación directa de nuestro taller en C/ Arquitecto Arnau, 61. Atención habitual a viviendas de Benimaclet, Jaume Roig, Exposició, Mestalla y Trinitat.",
      detailVa:
        "Ubicació directa del nostre taller al C/ Arquitecto Arnau, 61. Atenció habitual a habitatges de Benimaclet, Jaume Roig, Exposició, Mestalla i Trinitat.",
    },
    {
      zone: "Ciutat Vella, El Carmen y L'Eixample",
      detailEs:
        "Restauración de mobiliario antiguo, consolas, sillería y tratamientos contra carcoma en pisos históricos del centro de Valencia, Gran Vía y Pla del Remei.",
      detailVa:
        "Restauració de mobiliari antic, consoles, cadirat i tractaments contra corc en pisos històrics del centre de València, Gran Via i Pla del Remei.",
    },
    {
      zone: "Algirós, Aragón, Zaidía y Campanar",
      detailEs:
        "Recuperación de comedores clásicos, aparadores de madera noble, escritorios, dormitorios antiguos y tapicería tradicional o rejilla.",
      detailVa:
        "Recuperació de menjadors clàssics, aparadors de fusta noble, escriptoris, dormitoris antics i tapisseria tradicional o reixeta.",
    },
    {
      zone: "Área Metropolitana (Alboraia, Godella, Rocafort, Paterna, Moncada, Torrent)",
      detailEs:
        "Coordinación de recogida y entrega para muebles de gran formato y proyectos integrales de ebanistería en viviendas unifamiliares y alquerías.",
      detailVa:
        "Coordinació de recollida i lliurament per a mobles de gran format i projectes integrals d'ebenisteria en habitatges unifamiliars i alqueries.",
    },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Calle Arquitecto Arnau, 61, 46020 València, España"
  )}`;

  return (
    <section
      id="ubicacion"
      className="border-b border-black/[0.07] bg-[#F1ECE1]/70 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6ECE8] text-[#2A3C34] font-mono text-xs uppercase tracking-[0.16em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A65E2E]" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "05 · UBICACIÓN EN BENIMACLET Y COBERTURA EN VALENCIA"
                : "05 · UBICACIÓ A BENIMACLET I COBERTURA A VALÈNCIA"}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] leading-[1.08] tracking-tight">
            {locale === "es"
              ? "Visítanos en Calle Arquitecto Arnau, 61 (Benimaclet, València)."
              : "Visita'ns al Carrer Arquitecto Arnau, 61 (Benimaclet, València)."}
          </h2>
          <p className="text-base sm:text-lg text-[#5C5349] mt-4 leading-relaxed">
            {locale === "es"
              ? "Nuestro taller de restauración y ebanistería se encuentra en el barrio de Benimaclet (código postal 46020). Atendemos encargos de particulares, familias e instituciones de toda Valencia capital y área metropolitana."
              : "El nostre taller de restauració i ebenisteria es troba al barri de Benimaclet (codi postal 46020). Atenem encàrrecs de tota València capital i àrea metropolitana."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Workshop Address Card & Local Zones (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white/95 p-6 sm:p-8 space-y-6 ring-1 ring-black/[0.08] shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.07] pb-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A65E2E] block">
                    SEDE DEL TALLER ARTESANAL
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1412]">
                    {BUSINESS_INFO.name} · {BUSINESS_INFO.founder}
                  </h3>
                </div>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1412] text-[#FAF7F2] hover:bg-[#A65E2E] transition-colors font-mono text-xs uppercase tracking-wider self-start"
                >
                  <Navigation
                    className="w-3.5 h-3.5 text-[#D4A359]"
                    aria-hidden="true"
                  />
                  <span>{locale === "es" ? "Cómo llegar" : "Com arribar-hi"}</span>
                </motion.a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E9D8] flex items-center justify-center shrink-0">
                    <MapPin
                      className="w-4 h-4 text-[#A65E2E]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <strong className="block font-mono text-xs uppercase text-[#5C5349]">
                      {locale === "es" ? "Dirección Postal:" : "Adreça Postal:"}
                    </strong>
                    <p className="text-[#1A1412] font-medium mt-0.5">
                      {BUSINESS_INFO.streetAddress}
                    </p>
                    <p className="text-[#5C5349]">
                      {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city} (
                      {BUSINESS_INFO.Neighborhood})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E9D8] flex items-center justify-center shrink-0">
                    <Phone
                      className="w-4 h-4 text-[#A65E2E]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <strong className="block font-mono text-xs uppercase text-[#5C5349]">
                      {locale === "es"
                        ? "Teléfono y WhatsApp:"
                        : "Telèfon i WhatsApp:"}
                    </strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneE164}`}
                      className="text-[#1A1412] font-mono font-semibold hover:text-[#A65E2E] block mt-0.5"
                    >
                      +34 {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs font-mono text-[#5C5349] hover:text-[#1A1412]"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E9D8] flex items-center justify-center shrink-0">
                    <Clock
                      className="w-4 h-4 text-[#A65E2E]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <strong className="block font-mono text-xs uppercase text-[#5C5349]">
                      {locale === "es"
                        ? "Horario y Estado Actual:"
                        : "Horari i Estat Actual:"}
                    </strong>
                    <p className="text-[#1A1412] mt-0.5">
                      {locale === "es"
                        ? BUSINESS_INFO.schedule.es
                        : BUSINESS_INFO.schedule.va}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-[#E6ECE8] text-[#2A3C34] font-mono text-[10px]">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          workshopStatus.isOpen
                            ? "bg-[#24593F] animate-pulse"
                            : "bg-[#A65E2E]"
                        }`}
                      />
                      {workshopStatus.label}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E9D8] flex items-center justify-center shrink-0">
                    <Train
                      className="w-4 h-4 text-[#A65E2E]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <strong className="block font-mono text-xs uppercase text-[#5C5349]">
                      {locale === "es"
                        ? "Accesos en Benimaclet:"
                        : "Accessos a Benimaclet:"}
                    </strong>
                    <p className="text-[#5C5349] mt-0.5 text-xs leading-relaxed">
                      Metrovalencia L3 y L9, Tranvía L4 y L6 (Parada Benimaclet /
                      Vicent Zaragozà). Líneas EMT 10, 12, 70 y 98.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Neighborhood coverage cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valenciaDistricts.map((item, idx) => (
                <motion.div
                  key={item.zone}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl bg-white/85 p-5 space-y-2 ring-1 ring-black/[0.06] shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <Truck
                      className="w-4 h-4 text-[#A65E2E] shrink-0"
                      aria-hidden="true"
                    />
                    <h4 className="font-serif text-lg font-semibold text-[#1A1412]">
                      {item.zone}
                    </h4>
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {locale === "es" ? item.detailEs : item.detailVa}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: RGPD/AEPD Compliant Two-Click Map Container (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-[2rem] bg-white p-4 ring-1 ring-black/[0.08] shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 mb-3 px-2 font-mono text-[11px] text-[#5C5349]">
              <span>CARTOGRAFÍA · BARRIO DE BENIMACLET</span>
              <span className="text-[#A65E2E] font-semibold">
                39.4862° N, 0.3588° W
              </span>
            </div>

            <div className="relative w-full aspect-[4/4] rounded-2xl bg-[#14100E] overflow-hidden ring-1 ring-black/10 flex flex-col items-center justify-center">
              {isMapConsented ? (
                <iframe
                  title="Mapa de ubicación de A.C.D. Carlos Soriano en Calle Arquitecto Arnau 61, Valencia"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3645%2C39.4830%2C-0.3530%2C39.4895&layer=mapnik&marker=39.48620%2C-0.35880"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="p-6 sm:p-8 text-center space-y-4 max-w-sm">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#D4A359]/15 border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359]">
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#D4A359]">
                    {locale === "es"
                      ? "PROTECCIÓN DE DATOS · BLOQUEO PREVENTIVO RGPD"
                      : "PROTECCIÓ DE DADES · BLOQUEIG PREVENTIU RGPD"}
                  </p>
                  <h4 className="font-serif text-2xl text-[#FAF7F2] leading-snug">
                    Calle Arquitecto Arnau, 61 · 46020 Benimaclet (València)
                  </h4>
                  <p className="text-xs text-[#C7BCAE] leading-relaxed">
                    {locale === "es"
                      ? "Por respeto a tu privacidad (normativa AEPD / RGPD), no conectamos con servidores externos de mapas hasta que lo autorices expresamente."
                      : "Per respecte a la teua privacitat (normativa AEPD / RGPD), no connectem amb servidors externs de mapes fins que ho autoritzes."}
                  </p>
                  <div className="pt-2 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => saveCookieConsent("all_accepted")}
                      className="w-full px-5 py-3 rounded-full bg-[#D4A359] text-[#14100E] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E2B56D] transition-colors cursor-pointer"
                    >
                      {locale === "es"
                        ? "Cargar mapa interactivo aquí"
                        : "Carregar mapa interactiu ací"}
                    </button>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 py-2.5 rounded-full border border-white/20 text-[#EDE6DA] hover:bg-white/10 font-mono text-[11px] uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>
                        {locale === "es"
                          ? "O abrir ubicación en Google Maps"
                          : "O obrir ubicació en Google Maps"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 pt-2 px-2 flex items-center justify-between gap-2 text-xs">
              <span className="text-[#44403C] font-mono">
                C/ Arquitecto Arnau, 61 · 46020 València
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono uppercase text-[11px] text-[#A65E2E] hover:underline font-semibold"
              >
                {locale === "es"
                  ? "Abrir en Google Maps →"
                  : "Obrir en Google Maps →"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
