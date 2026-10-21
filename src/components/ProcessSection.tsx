"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Quote,
  ExternalLink,
  Sparkles,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { PROCESS_STEPS, BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function ProcessSection() {
  const { locale, triggerPrefillAndScroll } = useLanguage();

  return (
    <section
      id="proceso"
      className="border-b border-black/[0.07] bg-[#F5F3EF] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-24">
        {/* Part 1: 4-Step Artisan Process in Apple Bento Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAD8] text-[#9A6B32] font-mono text-xs uppercase tracking-[0.16em] mb-3">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {locale === "es"
                  ? "04 · METODOLOGÍA DE TALLER EN RUZAFA"
                  : "04 · METODOLOGIA DE TALLER A RUSSAFA"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#141210] leading-[1.08] tracking-tight">
              {locale === "es"
                ? "Cómo trabajamos cada encargo con rigor, cercanía y sin prisas."
                : "Com treballem cada encàrrec amb rigor, proximitat i sense presses."}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white/90 backdrop-blur-md p-6 sm:p-7 ring-1 ring-black/[0.08] shadow-[0_14px_35px_-12px_rgba(20,18,16,0.08)] hover:shadow-[0_24px_50px_-12px_rgba(20,18,16,0.16)] flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3.5 mb-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#9A6B32] font-semibold px-3 py-1 rounded-full bg-[#F3EAD8]">
                      FASE · {stepItem.step}
                    </span>
                    <span className="font-mono text-[10px] text-[#78716C]">
                      C/ PUERTO RICO 33
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#141210] leading-snug mb-3">
                    {locale === "es" ? stepItem.titleEs : stepItem.titleVa}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {locale === "es"
                      ? stepItem.descriptionEs
                      : stepItem.descriptionVa}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Verifiable Reputation & Public Mentions in Dark Glass Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0F0D0B] text-[#F5F0E6] p-7 sm:p-11 lg:p-14 shadow-2xl ring-1 ring-white/15"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-radial from-[#D4A66A]/20 to-transparent blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15">
                <Award className="w-3.5 h-3.5 text-[#D4A66A]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4A66A]">
                  {locale === "es"
                    ? "RECONOCIMIENTO PÚBLICO VERIFICADO"
                    : "RECONEIXEMENT PÚBLIC VERIFICAT"}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] leading-tight">
                {locale === "es"
                  ? "Lo que destacan las guías de artesanía y los clientes de Ruzafa Vintage."
                  : "El que destaquen les guies d'artesania i els clients de Ruzafa Vintage."}
              </h3>

              <p className="text-sm sm:text-base text-[#C2B9AC] leading-relaxed">
                {locale === "es"
                  ? "No publicamos reseñas anónimas inventadas. La reputación de María José Martínez en Valencia está respaldada por publicaciones editoriales de artesanía y directorios especializados de diseño."
                  : "No publiquem ressenyes anònimes inventades. La reputació de María José Martínez a València està avalada per publicacions editorials d'artesania i directoris de disseny."}
              </p>

              <div className="pt-3 border-t border-white/12 text-xs font-mono text-[#D4A66A]">
                {locale === "es"
                  ? "Titular del taller: María José Martínez · Ruzafa, València"
                  : "Titular del taller: María José Martínez · Russafa, València"}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              {BUSINESS_INFO.verifiableMentions.map((mention, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/12 p-6 space-y-2 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#D4A66A] font-semibold">
                      {mention.source}
                    </span>
                    <Quote
                      className="w-4 h-4 text-[#D4A66A] shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-[#E7E0D3] leading-relaxed">
                    {locale === "es" ? mention.detailEs : mention.detailVa}
                  </p>
                </motion.div>
              ))}

              <div className="rounded-3xl bg-gradient-to-r from-[#9A6B32]/25 to-white/[0.04] border border-[#D4A66A]/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-lg text-[#F7F4EE]">
                    {locale === "es"
                      ? "¿Qué valoran de forma recurrente nuestros clientes en Valencia?"
                      : "Què valoren de forma recurrent els nostres clients a València?"}
                  </p>
                  <p className="text-xs text-[#C2B9AC] mt-1">
                    {locale === "es"
                      ? "1) La recuperación impecable de lámparas de araña heredadas · 2) El respeto por las maderas de los años 50–80 · 3) El trato cercano y honesto de María José."
                      : "1) La recuperació impecable de llums d'aranya heretats · 2) El respecte per les fustes dels anys 50–80 · 3) El tracte proper i honest de María José."}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Ruzafa Vintage Carrer de Puerto Rico 33 Valencia"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#D4A66A] text-xs font-mono uppercase tracking-wider text-[#F7F4EE] hover:bg-[#D4A66A] hover:text-[#0F0D0B] transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 3: Dedicated B2B Module for Interior Designers, Architects & Hospitality in Valencia */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.25rem] bg-[#EBE6DC] p-7 sm:p-11 ring-1 ring-black/[0.08] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#9A6B32] font-mono text-xs uppercase tracking-wider ring-1 ring-black/[0.06]">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {locale === "es"
                  ? "SERVICIO B2B · ARQUITECTOS E INTERIORISTAS EN VALENCIA"
                  : "SERVEI B2B · ARQUITECTES I INTERIORISTES A VALÈNCIA"}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#141210] leading-tight">
              {locale === "es"
                ? "¿Diriges una reforma integral o proyecto de interiorismo en L'Eixample, Ciutat Vella o Valencia?"
                : "Dirigeixes una reforma integral o projecte d'interiorisme a l'Eixample, Ciutat Vella o València?"}
            </h3>
            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed max-w-3xl">
              {locale === "es"
                ? "Colaboramos con estudios de arquitectura, decoradores y proyectos contract en Valencia para recuperar las lámparas de araña originales de pisos señoriales, adaptar el acabado de piezas heredadas a la nueva paleta de la obra o localizar mobiliario auténtico de los años 50, 60, 70 y 80 bajo plazos de entrega coordinados con obra."
                : "Col·laborem amb estudis d'arquitectura i interioristes a València per recuperar els llums d'aranya originals de pisos senyorials o localitzar mobiliari autèntic dels anys 50 a 80."}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              type="button"
              onClick={() =>
                triggerPrefillAndScroll({
                  pieceType:
                    "Colaboración Profesional · Estudio de Arquitectura / Interiorismo",
                  decadeOrMaterial:
                    "Restauración de pieza en obra o búsqueda (Sourcing) años 50–80",
                  interventionScope:
                    "Atención a proyecto de interiorismo en Valencia",
                  notes:
                    "Hola María José, somos un estudio de arquitectura/interiorismo en Valencia y nos gustaría comentar una pieza o proyecto con vuestro taller.",
                })
              }
              className="w-full min-h-13 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#141210] text-[#F7F4EE] hover:bg-[#9A6B32] transition-colors font-mono text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              <span>
                {locale === "es"
                  ? "Contactar como Estudio Profesional"
                  : "Contactar com a Estudi Professional"}
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[#D4A66A]"
                aria-hidden="true"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
