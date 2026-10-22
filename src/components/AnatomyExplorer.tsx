"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crosshair,
  ArrowUpRight,
  CheckCircle2,
  Palette,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HotspotItem {
  id: string;
  number: string;
  x: string;
  y: string;
  partEs: string;
  partVa: string;
  pathologyEs: string;
  pathologyVa: string;
  techniqueEs: string;
  techniqueVa: string;
}

interface BlueprintModel {
  id: "arana" | "credenza";
  tabEs: string;
  tabVa: string;
  subtitleEs: string;
  subtitleVa: string;
  image: string;
  imageAlt: string;
  hotspots: HotspotItem[];
}

const BLUEPRINTS: BlueprintModel[] = [
  {
    id: "arana",
    tabEs: "Anatomía: Lámpara de Araña",
    tabVa: "Anatomia: Llum d'Aranya",
    subtitleEs:
      "Pulsa sobre los 5 puntos críticos de una luminaria histórica para ver cómo intervenimos cada elemento en el taller.",
    subtitleVa:
      "Prem sobre els 5 punts crítics d'una lluminària històrica per veure com intervenim cada element al taller.",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Radiografía técnica de restauración de una lámpara de araña de bronce y cristal tallado",
    hotspots: [
      {
        id: "floron-cadena",
        number: "01",
        x: "50%",
        y: "16%",
        partEs: "Florón superior, tija central y cadena de suspensión",
        partVa: "Floró superior, tija central i cadena de suspensió",
        pathologyEs:
          "Desgaste mecánico en eslabones de carga, ausencia de toma de tierra y oxidación acumulada por condensación en techos altos.",
        pathologyVa:
          "Desgast mecànic en baules de càrrega, absència de presa de terra i oxidació acumulada en sostres alts.",
        techniqueEs:
          "Verificación de resistencia estructural del anclaje, limpieza de bronce sin ácidos abrasivos e incorporación de conductor de protección (tierra) hasta el techo.",
        techniqueVa:
          "Verificació de resistència estructural de l'ancoratge, neteja del bronze i incorporació de presa de terra.",
      },
      {
        id: "circuito-electrico",
        number: "02",
        x: "34%",
        y: "42%",
        partEs: "Cableado interior por el interior de los brazos de bronce",
        partVa: "Cablejat interior pels braços de bronze",
        pathologyEs:
          "Cables originales de algodón o plástico rígido de los años 50–70 con el aislamiento cuarteado, provocando saltos del diferencial o cortocircuitos.",
        pathologyVa:
          "Cables originals de cotó o plàstic rígid dels anys 50–70 amb l'aïllament clivellat, provocant curtcircuits.",
        techniqueEs:
          "Sustitución completa del circuito interno mediante cableado nuevo de doble aislamiento o trenzado textil homologado, con empalmes internos termosellados en la copa central.",
        techniqueVa:
          "Substitució completa del circuit intern mitjançant cablejat nou de doble aïllament amb empalmaments termosellats.",
      },
      {
        id: "portalamparas-velas",
        number: "03",
        x: "68%",
        y: "46%",
        partEs: "Portalámparas E14/E27, platillos y fundas de vela",
        partVa: "Portalàmpades E14/E27, platets i fundes de ciri",
        pathologyEs:
          "Casquillos sulfatados que hacen falso contacto, fundas de cartón o plástico quemadas por bombillas incandescentes antiguas y platillos de cristal lascados.",
        pathologyVa:
          "Casquets sulfatats que fan fals contacte i fundes cremades per bombetes antigues.",
        techniqueEs:
          "Instalación de portalámparas cerámicos o metálicos nuevos, sustitución de fundas imitación cera envejecida a medida y nivelado geométrico de todos los brazos.",
        techniqueVa:
          "Instal·lació de portalàmpades nous, substitució de fundes imitació cera envellida i anivellat dels braços.",
      },
      {
        id: "engarce-cristal",
        number: "04",
        x: "46%",
        y: "66%",
        partEs: "Rosetas, octógonos y cadenas de cristal tallado",
        partVa: "Rosetes, octògons i cadenes de cristall tallat",
        pathologyEs:
          "Alambres de hierro o latón oxidados que se parten al mínimo roce, dejando caer lágrimas de cristal, y opacidad por grasa ambiental acumulada.",
        pathologyVa:
          "Filferros oxidats que es trenquen al mínim frec i opacitat acumulada al cristall.",
        techniqueEs:
          "Desmontaje documentado, lavado óptico individual pieza a pieza y re-engarzado íntegro a mano utilizando alambre de latón o bronce de calibre exacto.",
        techniqueVa:
          "Desmuntatge documentat, rentat òptic peça a peça i re-engalzat íntegre a mà amb filferro de llautó o bronze.",
      },
      {
        id: "lagrimas-bola",
        number: "05",
        x: "53%",
        y: "84%",
        partEs: "Almendras, prismas, dagas y bola facetada inferior",
        partVa: "Ametles, prismes, dagues i bola facetada inferior",
        pathologyEs:
          "Pérdida de piezas originales tras mudanzas o limpiezas previas, rompiendo la simetría y el juego de refracción de la lámpara.",
        pathologyVa:
          "Pèrdua de peces originals després de mudances, trencant la simetria del llum.",
        techniqueEs:
          "Reposición de lágrimas, almendras, octógonos o bolas facetadas empleando recambios de cristal tallado de época equivalentes en talla y plomo.",
        techniqueVa:
          "Reposició de llàgrimes, ametles o boles facetades emprant recanvis de cristall tallat d'època.",
      },
    ],
  },
  {
    id: "credenza",
    tabEs: "Anatomía: Credenza Años 60",
    tabVa: "Anatomia: Credença Anys 60",
    subtitleEs:
      "Explora los 5 puntos de intervención ebanista sobre un aparador mid-century de madera de teca o nogal.",
    subtitleVa:
      "Explora els 5 punts d'intervenció ebanista sobre un aparador mid-century de fusta de teca o noguera.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Radiografía técnica de restauración de un aparador mid-century de los años 60",
    hotspots: [
      {
        id: "sobre-teca",
        number: "01",
        x: "48%",
        y: "28%",
        partEs: "Sobre superior en chapa fina de teca birmana o nogal",
        partVa: "Sobre superior en xapa fina de teca birmana o noguera",
        pathologyEs:
          "Cercos blancos de vasos y macetas, manchas oscuras de oxidación tánica y barniz de poliuretano amarilleado. Un lijado mecánico agresivo perforaría la chapa de 0,6 mm.",
        pathologyVa:
          "Taques blanques d'humitat i vernís engroguit. Un polit mecànic agressiu perforaria la xapa.",
        techniqueEs:
          "Decapado químico y manual controlado a favor de veta, blanqueo selectivo de manchas de humedad con ácido oxálico y nutrición profunda con aceite de teca natural.",
        techniqueVa:
          "Decapat manual controlat a favor de veta, tractament amb àcid oxàlic i nutrició amb oli de teca.",
      },
      {
        id: "cantos-injertos",
        number: "02",
        x: "22%",
        y: "45%",
        partEs: "Cantos biselados y reintegración de faltas de chapa",
        partVa: "Cants bisellats i reintegració de faltes de xapa",
        pathologyEs:
          "Desprendimiento o astillado de pequeños fragmentos de chapa en las esquinas y bolsas de aire por degradación de las colas antiguas.",
        pathologyVa:
          "Despreniment de xicotets fragments de xapa a les cantonades i bosses d'aire.",
        techniqueEs:
          "Inyección de adhesivo reversible bajo las bolsas de chapa con prensado térmico e injertos milimétricos con madera vieja de la misma especie y dirección de poro.",
        techniqueVa:
          "Injecció d'adhesiu sota les bosses de xapa i empelts mil·limètrics amb fusta de la mateixa espècie.",
      },
      {
        id: "puertas-herrajes",
        number: "03",
        x: "56%",
        y: "52%",
        partEs: "Puertas correderas, tiradores encastrados y bisagras de latón",
        partVa: "Portes corredisses, tiradors encastats i frontisses de llautó",
        pathologyEs:
          "Puertas que rozan o se atascan en el carril inferior, tiradores de uñero ennegrecidos por el uso y cerraduras bloqueadas.",
        pathologyVa:
          "Portes que freguen o s'encallen al carril i tiradors ennegridos per l'ús.",
        techniqueEs:
          "Rectificado y lubricación en seco con cera de los carriles de madera, limpieza de herrajes de latón macizo y ajuste de escuadra de todo el frente.",
        techniqueVa:
          "Rectificat i lubricació en sec amb cera dels carrils de fusta i neteja de ferratges de llautó.",
      },
      {
        id: "cajones-milano",
        number: "04",
        x: "76%",
        y: "50%",
        partEs: "Cajonera interior y ensambles de cola de milano",
        partVa: "Calaixera interior i ensambles de cua d'oronella",
        pathologyEs:
          "Guías de madera desgastadas que hacen caer el cajón al abrirlo, fondos de contrachapado combados y olor a cerrado en el interior.",
        pathologyVa:
          "Guies de fusta desgastades que fan caure el calaix i fons corbats.",
        techniqueEs:
          "Recrecido en madera dura de las guías desgastadas, encolado de colas de milano, higienización interior y acabado suave a la cera con esencia natural.",
        techniqueVa:
          " Recreixement en fusta dura de les guies desgastades, encolat i higienització interior.",
      },
      {
        id: "bastidor-patas",
        number: "05",
        x: "32%",
        y: "80%",
        partEs: "Bastidor inferior, patas cónicas y virolas de latón",
        partVa: "Bastidor inferior, potes còniques i virolles de llautó",
        pathologyEs:
          "Holgura peligrosa en el encuentro de las patas con el bastidor (riesgo de rotura al desplazar el mueble) y ataques antiguos de carcoma (Anobium punctatum).",
        pathologyVa:
          "Folgança perillosa a la unió de les potes amb el bastidor i marques antigues de corc.",
        techniqueEs:
          "Desmontaje y reencolado de espigas y tornillos de anclaje, tratamiento curativo-preventivo antixilófagos y pulido de las virolas inferiores de latón.",
        techniqueVa:
          "Desmuntatge i reencolat d'espigues, tractament antixilòfags i polit de les virolles de llautó.",
      },
    ],
  },
];

const FINISH_SWATCHES = [
  {
    nameEs: "Goma-Laca a Muñequilla",
    nameVa: "Goma-Laca a Monyeca",
    tone: "linear-gradient(135deg, #6E3B1E 0%, #9E5B30 50%, #522912 100%)",
    useEs: "Muebles clásicos, nogal español y caoba (brillo sedoso orgánico)",
    useVa: "Mobles clàssics, noguera espanyola i caoba",
  },
  {
    nameEs: "Aceite de Teca Danés Puro",
    nameVa: "Oli de Teca Danés Pur",
    tone: "linear-gradient(135deg, #8F582A 0%, #B87B43 55%, #73441E 100%)",
    useEs: "Aparadores escandinavos años 50–70 (poro abierto y tacto natural)",
    useVa: "Aparadors escandinaus anys 50–70 (porus obert)",
  },
  {
    nameEs: "Cera Virgen y Carnauba",
    nameVa: "Cera Verge i Carnauba",
    tone: "linear-gradient(135deg, #B58B52 0%, #D6B07A 55%, #8C6838 100%)",
    useEs: "Nutrición y protección hidrófuga con pátina mate aterciopelada",
    useVa: "Nutrició i protecció amb pàtina mat vellutada",
  },
  {
    nameEs: "Bronce y Latón Estabilizado",
    nameVa: "Bronze i Llautó Estabilitzat",
    tone: "linear-gradient(135deg, #7A5C29 0%, #D4AF6A 50%, #59411A 100%)",
    useEs: "Lámparas de araña, apliques, bocallaves y virolas mid-century",
    useVa: "Llums d'aranya, aplics i ferratges mid-century",
  },
  {
    nameEs: "Pátina Mineral Verde Salvia / Piedra",
    nameVa: "Pàtina Mineral Verd Sàlvia / Pedra",
    tone: "linear-gradient(135deg, #5F6B5E 0%, #869484 55%, #465045 100%)",
    useEs: "Reciclaje creativo de alacenas y vitrinas en combinación con madera vista",
    useVa: "Reciclatge creatiu d'armaris i vitrines",
  },
];

export function AnatomyExplorer() {
  const { locale, triggerPrefillAndScroll } = useLanguage();
  const [activeModelId, setActiveModelId] = useState<"arana" | "credenza">(
    "arana"
  );
  const [activeHotspotIndex, setActiveHotspotIndex] = useState<number>(0);

  const currentModel =
    BLUEPRINTS.find((b) => b.id === activeModelId) || BLUEPRINTS[0];
  const currentHotspot =
    currentModel.hotspots[activeHotspotIndex] || currentModel.hotspots[0];

  const handleModelSwitch = (id: "arana" | "credenza") => {
    setActiveModelId(id);
    setActiveHotspotIndex(0);
  };

  return (
    <section
      id="anatomia-tecnica"
      className="border-b border-[#1A1412]/[0.08] bg-[#FAF7F2] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-20">
        {/* Header & Model Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6ECE8] text-[#2A3C34] font-mono text-xs uppercase tracking-[0.16em] font-semibold mb-3 ring-1 ring-[#2A3C34]/20">
              <Crosshair className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {locale === "es"
                  ? "RIGOR TÉCNICO · RADIOGRAFÍA DE TALLER"
                  : "RIGOR TÈCNIC · RADIOGRAFIA DE TALLER"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] leading-[1.08] tracking-tight">
              {locale === "es"
                ? "Anatomía de una restauración artesanal pieza a pieza."
                : "Anatomia d'una restauració artesanal peça a peça."}
            </h2>
            <p className="text-base text-[#5C5149] mt-3 leading-relaxed">
              {locale === "es"
                ? currentModel.subtitleEs
                : currentModel.subtitleVa}
            </p>
          </div>

          {/* Segmented Switcher */}
          <div
            className="inline-flex p-1.5 rounded-full bg-[#F1ECE1] ring-1 ring-[#1A1412]/[0.08] shadow-xs self-start"
            role="tablist"
            aria-label="Seleccionar modelo de anatomía técnica"
          >
            {BLUEPRINTS.map((model) => {
              const active = model.id === activeModelId;
              return (
                <button
                  key={model.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleModelSwitch(model.id)}
                  className={`relative px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? "text-[#FAF7F2]"
                      : "text-[#1A1412] hover:text-[#A65E2E]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="anatomy-model-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#1A1412] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">
                    {locale === "es" ? model.tabEs : model.tabVa}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Blueprint Canvas + Hotspot Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Hotspot Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] w-full rounded-[2rem] overflow-hidden bg-[#141210] ring-1 ring-black/15 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModel.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentModel.image}
                    alt={currentModel.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Interactive Numbered Hotspot Pins */}
              {currentModel.hotspots.map((spot, idx) => {
                const isSelected = idx === activeHotspotIndex;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspotIndex(idx)}
                    style={{ left: spot.x, top: spot.y }}
                    aria-label={`Inspeccionar punto ${spot.number}: ${
                      locale === "es" ? spot.partEs : spot.partVa
                    }`}
                    aria-pressed={isSelected}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full font-mono text-xs font-bold transition-transform duration-300 ${
                        isSelected
                          ? "bg-[#D4A66A] text-[#0F0D0B] scale-115 ring-4 ring-white shadow-xl"
                          : "bg-[#141210]/90 text-white ring-2 ring-[#D4A66A] hover:scale-110"
                      }`}
                    >
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A66A] opacity-50" />
                      )}
                      <span className="relative z-10">{spot.number}</span>
                    </span>
                  </button>
                );
              })}

              {/* Bottom Legend Bar inside Image */}
              <div className="absolute bottom-3.5 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-2xl apple-glass-dark border border-white/15 text-[11px] font-mono text-[#E7E0D3]">
                <span>
                  {locale === "es"
                    ? "Haz clic en cada número (01–05) para inspeccionar el despiece técnico"
                    : "Fes clic en cada número (01–05) per inspeccionar el desglossament tècnic"}
                </span>
                <span className="text-[#D4A66A]">
                  PUNTO ACTIVO: {currentHotspot.number} / 05
                </span>
              </div>
            </div>
          </div>

          {/* Right Hotspot Detail Inspector Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-black/[0.08] shadow-xl space-y-6">
              {/* Quick Step Selector Pills */}
              <div className="flex items-center gap-1.5 border-b border-black/[0.07] pb-4">
                {currentModel.hotspots.map((spot, idx) => {
                  const active = idx === activeHotspotIndex;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveHotspotIndex(idx)}
                      className={`flex-1 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? "bg-[#141210] text-[#D4A66A] shadow-xs"
                          : "bg-[#F5F3EF] text-[#57534E] hover:bg-[#EBE6DC]"
                      }`}
                    >
                      {spot.number}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHotspot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#9A6B32] font-semibold">
                      ZONA DE INTERVENCIÓN · {currentHotspot.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#141210] mt-1 leading-snug">
                      {locale === "es"
                        ? currentHotspot.partEs
                        : currentHotspot.partVa}
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F3EF] border-l-4 border-[#78716C] space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#57534E] block">
                      {locale === "es"
                        ? "Patología frecuente que encontramos:"
                        : "Patologia freqüent que trobem:"}
                    </span>
                    <p className="text-sm text-[#292524] leading-relaxed">
                      {locale === "es"
                        ? currentHotspot.pathologyEs
                        : currentHotspot.pathologyVa}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F3EAD8]/60 border-l-4 border-[#9A6B32] space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9A6B32] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>
                        {locale === "es"
                          ? "Solución artesanal en A.C.D. Carlos Soriano:"
                          : "Solució artesanal a A.C.D. Carlos Soriano:"}
                      </span>
                    </span>
                    <p className="text-sm text-[#141210] leading-relaxed">
                      {locale === "es"
                        ? currentHotspot.techniqueEs
                        : currentHotspot.techniqueVa}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      triggerPrefillAndScroll({
                        pieceType:
                          activeModelId === "arana"
                            ? "Lámpara de araña / Luminaria histórica"
                            : "Aparador / Credenza / Mueble Años 50–80",
                        interventionScope:
                          locale === "es"
                            ? currentHotspot.partEs
                            : currentHotspot.partVa,
                        notes: `Consulta sobre el punto técnico ${currentHotspot.number} (${
                          locale === "es"
                            ? currentHotspot.partEs
                            : currentHotspot.partVa
                        }).`,
                      })
                    }
                    className="w-full min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#A65E2E] text-white hover:bg-[#8A4B20] transition-colors font-mono text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                  >
                    <span>
                      {locale === "es"
                        ? "Mi pieza necesita esta intervención · Valorar"
                        : "La meua peça necessita aquesta intervenció · Valorar"}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#F6ECDC]"
                      aria-hidden="true"
                    />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Part 2: Muestrario de Acabados Nobles del Taller (Tactile Material Swatches) */}
        <div className="rounded-[2rem] bg-white p-6 sm:p-9 ring-1 ring-[#1A1412]/[0.08] shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#1A1412]/[0.07] pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[#A65E2E] font-mono text-xs uppercase tracking-wider font-semibold mb-1">
                <Palette className="w-4 h-4" aria-hidden="true" />
                <span>
                  {locale === "es"
                    ? "MUESTRARIO DE MATERIALES Y ACABADOS NOBLES"
                    : "MOSTRARI DE MATERIALS I ACABATS NOBLES"}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1412]">
                {locale === "es"
                  ? "Acabados tradicionales que respetan la transpiración y el tacto de la madera."
                  : "Acabats tradicionals que respecten la transpiració i el tacte de la fusta."}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#2A3C34] bg-[#E6ECE8] px-3 py-1 rounded-full">
              {locale === "es"
                ? "Muestras físicas disponibles en C/ Arquitecto Arnau, 61"
                : "Mostres físiques disponibles al C/ Arquitecte Arnau, 61"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FINISH_SWATCHES.map((swatch, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#FAF7F2] p-4 ring-1 ring-[#1A1412]/[0.07] flex flex-col justify-between gap-3"
              >
                <div className="space-y-3">
                  <div
                    className="h-16 w-full rounded-xl shadow-inner ring-1 ring-black/15"
                    style={{ background: swatch.tone }}
                    aria-hidden="true"
                  />
                  <h4 className="font-serif text-lg font-semibold text-[#1A1412] leading-snug">
                    {locale === "es" ? swatch.nameEs : swatch.nameVa}
                  </h4>
                </div>
                <p className="text-xs text-[#5C5149] leading-relaxed">
                  {locale === "es" ? swatch.useEs : swatch.useVa}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Part 3: Guía de Conservación en el Clima Mediterráneo de Valencia */}
          <div className="mt-8 pt-6 border-t border-[#1A1412]/[0.07] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#F1ECE1]/80 space-y-1">
              <span className="font-mono uppercase text-[10px] text-[#A65E2E] font-semibold block">
                {locale === "es"
                  ? "01 · Humedad Relativa en Valencia (65 %–75 %)"
                  : "01 · Humitat Relativa a València (65 %–75 %)"}
              </span>
              <p className="text-[#1A1412] font-medium">
                {locale === "es"
                  ? "Estabilización de chapas de teca y nogal"
                  : "Estabilització de xapes de teca i noguera"}
              </p>
              <p className="text-[#5C5149] leading-relaxed">
                {locale === "es"
                  ? "Nutrimos la madera por ambas caras y sellamos el poro con cera de carnauba e hidrofugantes naturales para evitar que la humedad costera de Valencia arquee puertas o cajones."
                  : "Nodrim la fusta i segellem el porus amb cera de carnauba per evitar que la humitat de València arquege portes o calaixos."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#E6ECE8]/70 space-y-1">
              <span className="font-mono uppercase text-[10px] text-[#2A3C34] font-semibold block">
                {locale === "es"
                  ? "02 · Ambiente Salino y Oxidación del Bronce"
                  : "02 · Ambient Salí i Oxidació del Bronze"}
              </span>
              <p className="text-[#1A1412] font-medium">
                {locale === "es"
                  ? "Protección antioxidante en lámparas de araña"
                  : "Protecció antioxidant en llums d'aranya"}
              </p>
              <p className="text-[#5C5149] leading-relaxed">
                {locale === "es"
                  ? "Tras limpiar el bronce o latón y sustituir los alambres de engarce oxidados por hilo de latón nuevo, aplicamos una película microcristalina invisible que frena el oscurecimiento."
                  : "Després de netejar el bronze i substituir els filferros per llautó nou, apliquem una protecció microcristal·lina que frena l'enfosquiment."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F1ECE1]/80 space-y-1">
              <span className="font-mono uppercase text-[10px] text-[#A65E2E] font-semibold block">
                {locale === "es"
                  ? "03 · Radiación Solar en Balcones del Eixample"
                  : "03 · Radiació Solar en Balcons de l'Eixample"}
              </span>
              <p className="text-[#1A1412] font-medium">
                {locale === "es"
                  ? "Prevención de decoloración UV"
                  : "Prevenció de decoloració UV"}
              </p>
              <p className="text-[#5C5149] leading-relaxed">
                {locale === "es"
                  ? "Evitamos barnices sintéticos plásticos que amarillean con el sol de Valencia, empleando aceites naturales y ceras que permiten regenerar el mueble en minutos sin volver a decapar."
                  : "Evitem vernissos sintètics plàstics que engrogueixen amb el sol, emprant olis naturals i ceres regenerables."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
