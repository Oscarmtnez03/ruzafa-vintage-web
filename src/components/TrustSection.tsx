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
      index: "VERIFICADO · 01",
      accent: "green" as const,
      titleEs: "Reconocido en la Guía de Artesanía de Cervezas Alhambra",
      titleVa: "Reconegut en la Guia d'Artesania de Cervezas Alhambra",
      descEs:
        "Destacado como taller referente en el barrio de Ruzafa por preservar el oficio manual de recuperación de lámparas de araña y mobiliario de las décadas de 1950 a 1980.",
      descVa:
        "Destacat com a taller referent al barri de Russafa per preservar l'ofici manual de recuperació de llums d'aranya i mobiliari de les dècades de 1950 a 1980.",
    },
    {
      icon: Wrench,
      index: "OFICIO · 02",
      accent: "teak" as const,
      titleEs: "Intervención Directa por María José Martínez",
      titleVa: "Intervenció Directa per María José Martínez",
      descEs:
        "Sin intermediarios comerciales ni subcontratas industriales. Cada pieza es diagnosticada, desmontada y restaurada personalmente en el taller con técnicas respetuosas.",
      descVa:
        "Sense intermediaris comercials ni subcontractes industrials. Cada peça és diagnosticada, desmuntada i restaurada personalment al taller.",
    },
    {
      icon: Compass,
      index: "ESPECIALIDAD · 03",
      accent: "teak" as const,
      titleEs: "Doble Especialización: Luminarias Históricas y Mid-Century",
      titleVa: "Doble Especialització: Lluminàries Històriques i Mid-Century",
      descEs:
        "Pocos talleres en Valencia combinan la ebanistería fina de los años 50–80 con la restauración y electrificación completa de lámparas de araña de cristal y bronce.",
      descVa:
        "Pocs tallers a València combinen l'ebanisteria fina dels anys 50–80 amb la restauració i electrificació completa de llums d'aranya de cristall i bronze.",
    },
    {
      icon: Building2,
      index: "PROXIMIDAD · 04",
      accent: "green" as const,
      titleEs: "Taller Físico en Carrer de Puerto Rico, 33 (Ruzafa)",
      titleVa: "Taller Físic al Carrer de Puerto Rico, 33 (Russafa)",
      descEs:
        "Ubicación real a pie de calle en el código postal 46006 de València. Atendemos con cita previa a vecinos del Eixample, Ciutat Vella, toda Valencia y estudios de interiorismo.",
      descVa:
        "Ubicació real a peu de carrer al codi postal 46006 de València. Atenem amb cita prèvia a veïns de l'Eixample, Ciutat Vella, tota València i interioristes.",
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
                ? "TRAYECTORIA Y DATOS VERIFICABLES"
                : "TRAJECTÒRIA I DADES VERIFICABLES"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412] mt-1.5 tracking-tight">
              {locale === "es"
                ? "Un taller con nombre propio, dirección real y oficio contrastado en Valencia."
                : "Un taller amb nom propi, adreça real i ofici contrastat a València."}
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
