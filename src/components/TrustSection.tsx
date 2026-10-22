"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Wrench, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function TrustSection() {
  const { locale } = useLanguage();

  const pillars = [
    {
      icon: ShieldCheck,
      index: "PRESTIGIO · 01",
      accent: "green" as const,
      titleEs: "Autor de los Sillones del Tribunal de las Aguas de Valencia",
      titleVa: "Autor dels Sillons del Tribunal de les Aigües de València",
      descEs:
        "Reconocido en Valencia por la elaboración artesanal de los sillones institucionales del histórico Tribunal de las Aguas, garantía del más alto nivel en ebanistería y talla.",
      descVa:
        "Reconegut a València per l'elaboració artesanal dels sillons institucionals de l'històric Tribunal de les Aigües.",
    },
    {
      icon: Wrench,
      index: "OFICIO · 02",
      accent: "teak" as const,
      titleEs: "Intervención Personal por el Maestro Carlos Soriano",
      titleVa: "Intervenció Personal pel Mestre Carlos Soriano",
      descEs:
        "Sin intermediarios. Cada mueble o antigüedad es diagnosticado y restaurado en nuestro propio taller aplicando goma-laca a muñequilla, colas tradicionales y ceras naturales.",
      descVa:
        "Sense intermediaris. Cada moble o antiguitat és diagnosticat i restaurat al nostre taller aplicant goma-laca a monyeca i ceres naturals.",
    },
    {
      icon: Compass,
      index: "INTEGRAL · 03",
      accent: "teak" as const,
      titleEs: "Ebanistería, Eliminación de Carcoma y Tapicería en un Solo Taller",
      titleVa: "Ebanisteria, Eliminació de Corc i Tapisseria en un Sol Taller",
      descEs:
        "Resolvemos todas las patologías de tu mueble sin subcontratar fuera: carpintería estructural, fumigación curativa antixilófagos, tapizado tradicional y tejido de rejilla.",
      descVa:
        "Resolem totes les patologies del teu moble: fusteria estructural, fumigació curativa antixilòfags, tapissat tradicional i reixeta.",
    },
    {
      icon: Building2,
      index: "PROXIMIDAD · 04",
      accent: "green" as const,
      titleEs: "Taller Físico en Calle Arquitecto Arnau, 61 (Benimaclet)",
      titleVa: "Taller Físic al Carrer Arquitecte Arnau, 61 (Benimaclet)",
      descEs:
        "Ubicación real a pie de calle en el código postal 46020 de València, con servicio de recogida y entrega a domicilio en toda Valencia capital y área metropolitana.",
      descVa:
        "Ubicació real a peu de carrer al codi postal 46020 de València, amb servei de recollida i lliurament a tota València i àrea metropolitana.",
    },
  ];

  return (
    <section
      aria-label={
        locale === "es"
          ? "Credenciales verificables del taller"
          : "Credencials verificables del taller"
      }
      className="border-b border-[#1A1412]/[0.08] bg-[#F1ECE1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#A65E2E] font-semibold">
              {locale === "es"
                ? "MAESTRÍA EBANISTA Y DATOS VERIFICABLES"
                : "MESTRIA EBANISTA I DADES VERIFICABLES"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412] mt-1.5 tracking-tight">
              {locale === "es"
                ? "Un taller maestro con prestigio histórico, dirección real y oficio completo en Valencia."
                : "Un taller mestre amb prestigi històric, adreça real i ofici complet a València."}
            </h2>
          </div>
          <p className="font-mono text-xs text-[#2A3C34] font-medium px-4 py-2 rounded-full bg-[#E6ECE8] ring-1 ring-[#2A3C34]/20 self-start md:self-auto">
            {BUSINESS_INFO.streetAddress} · {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isGreen = item.accent === "green";
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                className="group rounded-3xl bg-[#FAF7F2] p-6 sm:p-7 ring-1 ring-[#1A1412]/[0.08] shadow-[0_10px_30px_-12px_rgba(26,20,18,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(26,20,18,0.16)] hover:ring-[#A65E2E]/45 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-full font-medium ${
                        isGreen
                          ? "bg-[#E6ECE8] text-[#2A3C34]"
                          : "bg-[#F6ECDC] text-[#A65E2E]"
                      }`}
                    >
                      {item.index}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isGreen
                          ? "bg-[#2A3C34] text-[#FAF7F2] group-hover:bg-[#A65E2E]"
                          : "bg-[#1A1412] text-[#D4A359] group-hover:bg-[#A65E2E] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1412] leading-snug mb-2.5">
                    {locale === "es" ? item.titleEs : item.titleVa}
                  </h3>
                  <p className="text-sm text-[#5C5149] leading-relaxed">
                    {locale === "es" ? item.descEs : item.descVa}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
