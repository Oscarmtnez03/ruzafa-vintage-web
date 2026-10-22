"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { BUSINESS_INFO, UI_TEXT } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

const HERO_SCENES = [
  {
    id: "ebanisteria",
    tabEs: "Ebanistería & Talla",
    tabVa: "Ebanisteria & Talla",
    badgeEs: "MAESTRÍA ARTESANAL · VALÈNCIA",
    badgeVa: "MESTRIA ARTESANAL · VALÈNCIA",
    titleEs: "Ebanistería de autor, sillería histórica y acabados a muñequilla con goma-laca.",
    titleVa: "Ebanisteria d'autor, cadirat històric i acabats a monyeca amb goma-laca.",
    spec1Es: "Sillones Tribunal de las Aguas",
    spec1Va: "Sillons Tribunal de les Aigües",
    spec2Es: "Goma-laca y ceras vírgenes",
    spec2Va: "Goma-laca i ceres verges",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    alt: "Sillón clásico de madera noble restaurado artesanalmente en taller",
  },
  {
    id: "mobiliario",
    tabEs: "Mueble Antiguo",
    tabVa: "Moble Antic",
    badgeEs: "RESTAURACIÓN DE ANTIGÜEDADES Y SIGLO XX",
    badgeVa: "RESTAURACIÓ D'ANTIGUITATS I SEGLE XX",
    titleEs: "Cómodas, aparadores, consolas y escritorios recuperados respetando su pátina.",
    titleVa: "Còmodes, aparadors, consoles i escriptoris recuperats respectant la pàtina.",
    spec1Es: "Reintegración de marquetería",
    spec1Va: "Reintegració de marqueteria",
    spec2Es: "Consolidación de ensambles",
    spec2Va: "Consolidació d'ensambles",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    alt: "Aparador de madera noble restaurado en taller de ebanistería",
  },
  {
    id: "sanidad-tapiceria",
    tabEs: "Carcoma & Tapicería",
    tabVa: "Corc & Tapisseria",
    badgeEs: "C/ ARQUITECTO ARNAU, 61 · BENIMACLET",
    badgeVa: "C/ ARQUITECTE ARNAU, 61 · BENIMACLET",
    titleEs: "Fumigación curativa contra carcoma, tejido de rejilla y tapicería tradicional.",
    titleVa: "Fumigació curativa contra corc, teixit de reixeta i tapisseria tradicional.",
    spec1Es: "Erradicación de xilófagos",
    spec1Va: "Eradicació de xilòfags",
    spec2Es: "Tapizado y rejilla a mano",
    spec2Va: "Tapissat i reixeta a mà",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    alt: "Detalle de trabajo artesanal de ebanistería sobre madera noble",
  },
] as const;

export function Hero() {
  const { locale } = useLanguage();
  const t = UI_TEXT[locale].hero;
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const activeScene = HERO_SCENES[activeSceneIndex];

  const whatsappHeroUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Carlos, te escribo desde la web de A.C.D. Carlos Soriano. Me gustaría enviarte fotos de un mueble para valorar su restauración."
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-16 sm:py-16 lg:py-24 border-b border-[#1A1412]/[0.08]">
      {/* Warm Shellac Amber & Mid-Century Olive Ambient Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[40rem] h-[40rem] rounded-full bg-radial from-[#D4A359]/22 via-[#A65E2E]/6 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-8 w-[30rem] h-[30rem] rounded-full bg-radial from-[#2A3C34]/10 via-transparent to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E6ECE8] ring-1 ring-[#2A3C34]/20"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#2A3C34]"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#2A3C34] font-semibold">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.04] tracking-tight text-[#1A1412] font-normal"
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.75,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-[#5C5149] leading-relaxed max-w-2xl"
            >
              {t.subtitle}
            </motion.p>

            {/* Primary (Teak Amber) & Secondary (Gallery Olive / Ivory) Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#diagnostico"
                  className="min-h-13 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#A65E2E] text-white hover:bg-[#8A4B20] shadow-[0_14px_32px_-8px_rgba(166,94,46,0.45)] transition-colors text-xs font-mono uppercase tracking-wider font-medium"
                >
                  <span>{t.primaryCta}</span>
                  <ArrowRight
                    className="w-4 h-4 text-[#F6ECDC]"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-13 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#1A1412] ring-1 ring-[#1A1412]/15 hover:ring-[#2A3C34] hover:bg-[#E6ECE8]/50 shadow-xs transition-all text-xs font-mono uppercase tracking-wider font-medium"
              >
                <MessageCircle
                  className="w-4 h-4 text-[#2A3C34]"
                  aria-hidden="true"
                />
                <span>{t.secondaryCta} · 670 41 80 08</span>
              </motion.a>
            </motion.div>

            {/* Verifiable Workshop Fact Sheet in Limestone & Gallery Green Bento Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"
            >
              <div className="rounded-2xl bg-[#F1ECE1]/90 p-4 ring-1 ring-[#1A1412]/[0.07] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F6ECDC] ring-1 ring-[#A65E2E]/20 flex items-center justify-center shrink-0">
                  <MapPin
                    className="w-4 h-4 text-[#A65E2E]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-wider text-[#84776D]">
                    {locale === "es" ? "Taller en Valencia" : "Taller a València"}
                  </p>
                  <p className="font-semibold text-[#1A1412] mt-0.5">
                    C/ Arquitecto Arnau, 61
                  </p>
                  <p className="text-[#5C5149]">46020 Benimaclet, València</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F1ECE1]/90 p-4 ring-1 ring-[#1A1412]/[0.07] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E6ECE8] ring-1 ring-[#2A3C34]/20 flex items-center justify-center shrink-0">
                  <Award
                    className="w-4 h-4 text-[#2A3C34]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-wider text-[#84776D]">
                    {locale === "es"
                      ? "Maestro Ebanista"
                      : "Mestre Ebanista"}
                  </p>
                  <p className="font-semibold text-[#1A1412] mt-0.5">
                    Carlos Soriano
                  </p>
                  <p className="text-[#2A3C34] font-medium">
                    {locale === "es"
                      ? "Sillones Tribunal de las Aguas"
                      : "Sillons Tribunal de les Aigües"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F1ECE1]/90 p-4 ring-1 ring-[#1A1412]/[0.07] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F6ECDC] ring-1 ring-[#A65E2E]/20 flex items-center justify-center shrink-0">
                  <Clock
                    className="w-4 h-4 text-[#A65E2E]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-wider text-[#84776D]">
                    {locale === "es"
                      ? "Presupuesto Rápido"
                      : "Pressupost Ràpid"}
                  </p>
                  <p className="font-semibold text-[#1A1412] mt-0.5">
                    {locale === "es"
                      ? "Taller y Domicilio"
                      : "Taller i Domicili"}
                  </p>
                  <p className="text-[#5C5149]">
                    {locale === "es"
                      ? "Valoración por foto sin coste"
                      : "Valoració per foto sense cost"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Interactive Apple Studio Showcase Card in Deep Walnut (#14100E) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2rem] bg-[#14100E] p-3.5 sm:p-4 shadow-[0_32px_70px_-16px_rgba(26,20,18,0.48)] ring-1 ring-[#D4A359]/30">
              {/* Top Interactive Segmented Control */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div
                  className="flex items-center bg-[#211A16] p-1 rounded-full border border-white/10 w-full"
                  role="tablist"
                  aria-label="Visor de especialidades del taller"
                >
                  {HERO_SCENES.map((scene, idx) => {
                    const isActive = idx === activeSceneIndex;
                    return (
                      <button
                        key={scene.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveSceneIndex(idx)}
                        className={`relative flex-1 py-1.5 px-2 text-[11px] font-mono tracking-tight rounded-full transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#1A1412] font-semibold"
                            : "text-[#C9BFAF] hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="hero-scene-segmented-pill"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                            className="absolute inset-0 rounded-full bg-[#D4A359] shadow-xs"
                          />
                        )}
                        <span className="relative z-10 truncate block">
                          {locale === "es" ? scene.tabEs : scene.tabVa}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Animated Visual Viewport */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#14100E] ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScene.id}
                    initial={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeScene.image}
                      alt={activeScene.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/25 to-transparent" />

                    {/* Floating Top Glass Telemetry Pill */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-glass-dark text-[10px] font-mono uppercase tracking-wider text-[#FAF7F2] border border-[#D4A359]/35">
                        <Eye className="w-3 h-3 text-[#D4A359]" aria-hidden="true" />
                        <span>
                          {locale === "es"
                            ? activeScene.badgeEs
                            : activeScene.badgeVa}
                        </span>
                      </span>
                    </div>

                    {/* Bottom Glass Overlay Content */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-[#FAF7F2]">
                      <p className="font-serif text-2xl sm:text-[1.65rem] leading-snug text-white">
                        {locale === "es"
                          ? activeScene.titleEs
                          : activeScene.titleVa}
                      </p>

                      <div className="mt-3.5 grid grid-cols-2 gap-2">
                        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 text-xs">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-[#D4A359] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {locale === "es"
                              ? activeScene.spec1Es
                              : activeScene.spec1Va}
                          </span>
                        </div>
                        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 text-xs">
                          <Sparkles
                            className="w-3.5 h-3.5 text-[#D4A359] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {locale === "es"
                              ? activeScene.spec2Es
                              : activeScene.spec2Va}
                          </span>
                        </div>
                      </div>

                      <p className="font-mono text-[10px] text-[#C9BFAF] mt-3">
                        {locale === "es"
                          ? "Imagen ilustrativa de referencia técnica · Especialidad del taller"
                          : "Imatge il·lustrativa de referència tècnica · Especialitat del taller"}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
