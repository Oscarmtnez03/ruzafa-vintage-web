"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  Info,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { CASE_STUDIES, CaseStudyItem } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

type FilterCategory = "todas" | "lamparas" | "midcentury" | "personalizacion";

export function WorkshopGallery() {
  const { locale, triggerPrefillAndScroll } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("todas");
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(54);

  const filterButtons: {
    id: FilterCategory;
    labelEs: string;
    labelVa: string;
  }[] = [
    {
      id: "todas",
      labelEs: "Todas las Intervenciones",
      labelVa: "Totes les Intervencions",
    },
    {
      id: "lamparas",
      labelEs: "Lámparas de Araña",
      labelVa: "Llums d'Aranya",
    },
    {
      id: "midcentury",
      labelEs: "Mobiliario Años 50–70",
      labelVa: "Mobiliari Anys 50–70",
    },
    {
      id: "personalizacion",
      labelEs: "Reciclaje Creativo",
      labelVa: "Reciclatge Creatiu",
    },
  ];

  const filteredItems =
    activeFilter === "todas"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter);

  return (
    <section
      id="intervenciones"
      className="border-b border-black/[0.07] bg-[#F1ECE1]/70 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Header & Apple Segmented Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6ECE8] text-[#2A3C34] font-mono text-xs uppercase tracking-[0.16em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A65E2E]" aria-hidden="true" />
              <span>
                {locale === "es"
                  ? "03 · CUADERNO DE INTERVENCIONES"
                  : "03 · QUADERN D'INTERVENCIONS"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] leading-[1.08] tracking-tight">
              {locale === "es"
                ? "Patologías reales y cómo las resolvemos en el taller."
                : "Patologies reals i com les resolem al taller."}
            </h2>
          </div>

          {/* Apple-Style Segmented Filter Bar */}
          <div
            className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-md ring-1 ring-black/[0.08] shadow-xs"
            role="tablist"
            aria-label={
              locale === "es"
                ? "Filtrar intervenciones por especialidad"
                : "Filtrar intervencions per especialitat"
            }
          >
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#F7F4EE]"
                      : "text-[#141210] hover:text-[#9A6B32]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#141210] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">
                    {locale === "es" ? btn.labelEs : btn.labelVa}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Apple-Style Optical & Surface Comparison Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 rounded-[2rem] bg-[#141210] text-[#F5F0E6] p-6 sm:p-8 lg:p-10 shadow-2xl ring-1 ring-white/15"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A66A] font-mono text-[11px] uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {locale === "es"
                    ? "SIMULADOR DE RECUPERACIÓN ÓPTICA Y VETA"
                    : "SIMULADOR DE RECUPERACIÓ ÒPTICA I VETA"}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-white leading-tight">
                {locale === "es"
                  ? "Desliza para apreciar el efecto del decapado y la nutrición artesanal."
                  : "Llisca per apreciar l'efecte del decapat i la nutrició artesanal."}
              </h3>
              <p className="text-sm text-[#C2B9AC] leading-relaxed">
                {locale === "es"
                  ? "Con el paso de las décadas, los barnices sintéticos amarillean y apagan la veta de la teca o el brillo del bronce. En nuestro taller retiramos las capas oxidadas y devolvemos la riqueza cromática original."
                  : "Amb el pas de les dècades, els vernissos sintètics engrogueixen i apaguen la veta de la teca o la brillantor del bronze. Al nostre taller retirem les capes oxidades i retornem la riquesa original."}
              </p>

              <div className="pt-2">
                <label
                  htmlFor="restoration-slider"
                  className="flex items-center justify-between font-mono text-xs text-[#D4A66A] mb-2"
                >
                  <span>
                    {locale === "es"
                      ? "← Barniz oxidado / Opaco"
                      : "← Vernís oxidat / Opac"}
                  </span>
                  <span>{sliderPos}%</span>
                  <span>
                    {locale === "es"
                      ? "Madera nutrida / Luz →"
                      : "Fusta nodrida / Llum →"}
                  </span>
                </label>
                <input
                  id="restoration-slider"
                  type="range"
                  min={5}
                  max={95}
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Deslizador de comparación de acabado antes y después"
                  className="w-full accent-[#D4A66A] cursor-ew-resize"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden select-none ring-1 ring-white/15">
                {/* Base Layer: Restored Luminous State */}
                <Image
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
                  alt="Simulación de acabado restaurado y nutrido en aparador mid-century"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover saturate-115 contrast-105"
                />
                <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full apple-glass-dark font-mono text-[10px] uppercase tracking-wider text-[#D4A66A] border border-white/15">
                  {locale === "es"
                    ? "DESPUÉS · VETA NUTRIDA Y ESTABILIZADA"
                    : "DESPRÉS · VETA NODRIDA I ESTABILITZADA"}
                </span>

                {/* Clipped Overlay Layer: Oxidized / Dull Unrestored State */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
                    alt="Simulación de acabado envejecido y opaco previo a la intervención"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover grayscale-[65%] sepia-[35%] brightness-75 contrast-90"
                  />
                  <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/75 font-mono text-[10px] uppercase tracking-wider text-white/80 border border-white/15">
                    {locale === "es"
                      ? "ANTES · BARNIZ DEGRADADO Y OPACO"
                      : "ABANS · VERNÍS DEGRADAT I OPAC"}
                  </span>
                </div>

                {/* Vertical Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-0.5 bg-[#D4A66A] shadow-[0_0_16px_rgba(212,166,106,0.9)] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#F5F3EF] text-[#141210] shadow-xl flex items-center justify-center ring-2 ring-[#D4A66A]">
                    <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transparency Banner about Visual References */}
        <div className="mb-8 p-4 rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/[0.07] flex items-start sm:items-center gap-3 text-xs text-[#57534E]">
          <Info
            className="w-4 h-4 text-[#9A6B32] shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
          />
          <p>
            {locale === "es"
              ? "Transparencia editorial: Las fichas siguientes documentan las metodologías reales aplicadas en A.C.D. Carlos Soriano (C/ Arquitecto Arnau, 61, Benimaclet) acompañadas de fotografías ilustrativas de referencia técnica para cada tipología de mueble y sillería."
              : "Transparència editorial: Les fitxes següents documenten les metodologies reals aplicades a A.C.D. Carlos Soriano (C/ Arquitecte Arnau, 61) acompanyades de fotografies il·lustratives de referència tècnica."}
          </p>
        </div>

        {/* Animated Case Studies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const title = locale === "es" ? item.titleEs : item.titleVa;
              const origin = locale === "es" ? item.originEs : item.originVa;
              const pathology =
                locale === "es" ? item.pathologyEs : item.pathologyVa;
              const intervention =
                locale === "es" ? item.interventionEs : item.interventionVa;

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] bg-white/95 ring-1 ring-black/[0.08] shadow-[0_18px_45px_-15px_rgba(20,18,16,0.09)] hover:shadow-[0_28px_65px_-15px_rgba(20,18,16,0.18)] flex flex-col justify-between overflow-hidden transition-shadow"
                >
                  <div>
                    {/* Image Container with Smooth Apple Zoom */}
                    <div className="relative aspect-[16/10] w-full bg-[#141210] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAltEs}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full apple-glass-dark text-[#F7F4EE] font-mono text-[10px] uppercase tracking-wider border border-white/15">
                          {item.code}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#B88440] text-white font-mono text-[10px] uppercase tracking-wider">
                          {item.decade}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 left-4 right-4 text-[10px] font-mono text-[#E7E0D3]/90">
                        {item.imageCaptionEs}
                      </div>
                    </div>

                    {/* Technical Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div>
                        <p className="font-mono text-[11px] text-[#9A6B32] uppercase tracking-wider">
                          {origin}
                        </p>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#141210] mt-1 leading-snug">
                          {title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-2 text-sm">
                        <div className="p-4 rounded-2xl bg-[#F5F3EF] border-l-4 border-[#78716C]">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#57534E] block mb-1">
                            {locale === "es"
                              ? "Diagnóstico / Estado Habitual de Entrada:"
                              : "Diagnòstic / Estat Habitual d'Entrada:"}
                          </span>
                          <p className="text-[#292524] leading-relaxed">
                            {pathology}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#F3EAD8]/55 border-l-4 border-[#9A6B32]">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#9A6B32] font-semibold block mb-1">
                            {locale === "es"
                              ? "Intervención Artesanal en A.C.D. Carlos Soriano:"
                              : "Intervenció Artesanal a A.C.D. Carlos Soriano:"}
                          </span>
                          <p className="text-[#141210] leading-relaxed">
                            {intervention}
                          </p>
                        </div>
                      </div>

                      {/* Materials tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <Layers
                          className="w-3.5 h-3.5 text-[#9A6B32]"
                          aria-hidden="true"
                        />
                        {item.materialsEs.map((mat) => (
                          <span
                            key={mat}
                            className="px-3 py-1 rounded-full bg-[#F5F3EF] ring-1 ring-black/[0.06] font-mono text-[11px] text-[#44403C]"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-6 sm:px-8 py-4 bg-[#F5F3EF]/80 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[#57534E]">
                      {locale === "es" ? "Plazo medio:" : "Termini mitjà:"}{" "}
                      <strong className="text-[#141210]">
                        {item.estimatedTimeEs}
                      </strong>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCase(item)}
                        className="px-4 py-2 rounded-full bg-white ring-1 ring-black/12 text-xs font-mono uppercase tracking-wider text-[#141210] hover:bg-[#EBE6DC] transition-colors cursor-pointer"
                      >
                        {locale === "es" ? "Ver ficha" : "Veure fitxa"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          triggerPrefillAndScroll({
                            pieceType: title,
                            decadeOrMaterial: `${item.decade} · ${item.materialsEs.join(
                              ", "
                            )}`,
                            interventionScope:
                              "Tengo una pieza similar y deseo valorar su intervención",
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141210] text-[#F7F4EE] hover:bg-[#9A6B32] transition-colors font-mono text-xs uppercase tracking-wider cursor-pointer"
                      >
                        <span>
                          {locale === "es"
                            ? "Tengo una pieza similar"
                            : "Tinc una peça similar"}
                        </span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 text-[#D4A66A]"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Accessible Spring Modal for Technical Sheet */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-case-title"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
                className="rounded-[2rem] bg-[#F5F3EF] ring-1 ring-black/15 shadow-2xl max-w-2xl w-full p-6 sm:p-9 space-y-5 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9A6B32] px-3 py-1 rounded-full bg-[#F3EAD8]">
                    {selectedCase.code} · {selectedCase.decade}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCase(null)}
                    className="px-3.5 py-1.5 rounded-full bg-white ring-1 ring-black/12 font-mono text-xs uppercase hover:bg-[#EBE6DC] cursor-pointer"
                  >
                    {locale === "es" ? "Cerrar" : "Tancar"}
                  </button>
                </div>

                <h3
                  id="modal-case-title"
                  className="font-serif text-2xl sm:text-3xl text-[#141210]"
                >
                  {locale === "es"
                    ? selectedCase.titleEs
                    : selectedCase.titleVa}
                </h3>

                <p className="text-xs font-mono text-[#57534E]">
                  {locale === "es"
                    ? selectedCase.originEs
                    : selectedCase.originVa}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-2xl bg-white ring-1 ring-black/[0.06]">
                    <strong className="block font-mono text-xs uppercase text-[#9A6B32] mb-1">
                      {locale === "es"
                        ? "Patología analizada:"
                        : "Patologia analitzada:"}
                    </strong>
                    <p className="text-[#141210]">
                      {locale === "es"
                        ? selectedCase.pathologyEs
                        : selectedCase.pathologyVa}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white ring-1 ring-black/[0.06]">
                    <strong className="block font-mono text-xs uppercase text-[#9A6B32] mb-1">
                      {locale === "es"
                        ? "Procedimiento en taller:"
                        : "Procediment al taller:"}
                    </strong>
                    <p className="text-[#141210]">
                      {locale === "es"
                        ? selectedCase.interventionEs
                        : selectedCase.interventionVa}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const item = selectedCase;
                      setSelectedCase(null);
                      triggerPrefillAndScroll({
                        pieceType:
                          locale === "es" ? item.titleEs : item.titleVa,
                        decadeOrMaterial: `${item.decade} (${item.materialsEs.join(
                          ", "
                        )})`,
                      });
                    }}
                    className="px-6 py-3.5 rounded-full bg-[#141210] text-[#F7F4EE] hover:bg-[#9A6B32] font-mono text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {locale === "es"
                      ? "Solicitar valoración para una pieza como esta"
                      : "Sol·licitar valoració per a una peça com aquesta"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
