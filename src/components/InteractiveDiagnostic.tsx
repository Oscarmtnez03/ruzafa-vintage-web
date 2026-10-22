"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wrench,
  Clock,
  Camera,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

interface OptionItem {
  id: string;
  labelEs: string;
  labelVa: string;
  protocolEs: string[];
  protocolVa: string[];
  durationEs: string;
  durationVa: string;
  photoTipEs: string;
  photoTipVa: string;
}

const PIECE_OPTIONS: OptionItem[] = [
  {
    id: "lampara-arana",
    labelEs: "Lámpara de araña / Luminaria histórica",
    labelVa: "Llum d'aranya / Lluminària històrica",
    protocolEs: [
      "Desmontaje numerado de brazos, platillos y cadenas de cristal",
      "Limpieza manual de bronce/latón y baño óptico de prismas y lágrimas",
      "Sustitución integral del cableado eléctrico y portalámparas homologados",
      "Reposición de lágrimas o almendras de cristal faltantes con piezas de época",
    ],
    protocolVa: [
      "Desmuntatge numerat de braços, platets i cadenes de cristall",
      "Neteja manual de bronze/llautó i bany òptic de prismes i llàgrimes",
      "Substitució integral del cablejat elèctric i portalàmpades homologats",
      "Reposició de llàgrimes o ametles de cristall amb peces d'època",
    ],
    durationEs: "Entre 2 y 3 semanas según número de brazos y estado eléctrico",
    durationVa: "Entre 2 i 3 setmanes segons nombre de braços i estat elèctric",
    photoTipEs:
      "Haz una foto general de la lámpara colgada o apoyada, un plano cercano de los portalámparas/cables y otro de las lágrimas de cristal.",
    photoTipVa:
      "Fes una foto general del llum, un pla proper dels portalàmpades/cables i un altre de les llàgrimes de cristall.",
  },
  {
    id: "aparador-midcentury",
    labelEs: "Aparador / Credenza / Mueble Años 50–80",
    labelVa: "Aparador / Credença / Moble Anys 50–80",
    protocolEs: [
      "Decapado controlado respetando la chapa original de teca, nogal o palisandro",
      "Eliminación química de cercos de humedad y reintegración de faltas de chapa",
      "Ajuste de puertas correderas, bisagras, colas de milano y guías de cajones",
      "Nutrición profunda con aceite de teca natural, goma-laca o cera de carnauba",
    ],
    protocolVa: [
      "Decapat controlat respectant la xapa original de teca, noguera o palissandre",
      "Eliminació de taques d'humitat i reintegració de faltes de xapa",
      "Ajust de portes corredisses, frontisses i guies de calaixos",
      "Nutrició profunda amb oli de teca natural, goma-laca o cera",
    ],
    durationEs:
      "Entre 3 y 4 semanas en taller (respetando tiempos de secado y nutrición)",
    durationVa: "Entre 3 i 4 setmanes al taller (respectant temps d'assecat)",
    photoTipEs:
      "Toma una foto frontal completa, una del sobre superior (donde suele haber marcas de uso) y un detalle del interior o cantos.",
    photoTipVa:
      "Fes una foto frontal completa, una del sobre superior i un detall de l'interior o cants.",
  },
  {
    id: "silleria-mesa",
    labelEs: "Butaca / Sillería / Mesa o Escritorio de madera",
    labelVa: "Butaca / Cadirat / Taula o Escriptori de fusta",
    protocolEs: [
      "Desmontaje y consolidación de espigas y ensambles con holgura estructural",
      "Tratamiento preventivo-curativo antixilófagos si presenta marcas antiguas",
      "Limpieza y regeneración del acabado en brazos, patas y tableros",
      "Acabado sedoso tradicional a muñequilla o protección mate natural",
    ],
    protocolVa: [
      "Desmuntatge i consolidació d'espigues i ensambles amb folgança",
      "Tractament preventiu-curatiu antixilòfags si cal",
      "Neteja i regeneració de l'acabat en braços, potes i taulers",
      "Acabat sedós tradicional a monyeca o protecció mat natural",
    ],
    durationEs: "Entre 2 y 3 semanas según número de piezas y estado de los ensambles",
    durationVa: "Entre 2 i 3 setmanes segons nombre de peces i estat dels ensambles",
    photoTipEs:
      "Envía una foto de perfil y frente, e indícanos si alguna pata o brazo tiene movimiento o desencolado.",
    photoTipVa:
      "Envia una foto de perfil i front, i indica'ns si alguna pota o braç té moviment.",
  },
  {
    id: "personalizacion",
    labelEs: "Personalización cromática y reciclaje creativo",
    labelVa: "Personalització cromàtica i reciclatge creatiu",
    protocolEs: [
      "Estudio cromático acorde a la luz e interiorismo de tu vivienda en Valencia",
      "Preparación del soporte, decapado parcial para combinar madera vista y color",
      "Aplicación artesanal de pátinas minerales, veladuras o lacado satinado",
      "Limpieza y recuperación de bocallaves, tiradores de latón y cristales",
    ],
    protocolVa: [
      "Estudi cromàtic d'acord amb la llum i interiorisme del teu habitatge",
      "Preparació del suport i combinació de fusta vista i color",
      "Aplicació artesanal de pàtines minerals, veladures o lacat setinat",
      "Neteja i recuperació de tiradors de llautó i cristalls",
    ],
    durationEs: "Entre 2 y 3 semanas incluyendo pruebas de tono con el cliente",
    durationVa: "Entre 2 i 3 setmanes incloent proves de to amb el client",
    photoTipEs:
      "Fotografía el mueble actual y, si quieres, la estancia donde irá ubicado para asesorarte con el acabado ideal.",
    photoTipVa:
      "Fotografia el moble actual i l'estança on anirà ubicat per assessorar-te amb l'acabat.",
  },
  {
    id: "sourcing-encargo",
    labelEs: "Búsqueda de pieza singular por encargo (Sourcing)",
    labelVa: "Recerca de peça singular per encàrrec (Sourcing)",
    protocolEs: [
      "Definición de medidas máximas, década buscada (años 50, 60, 70 u 80) y tipología",
      "Muestra de piezas disponibles en el taller de C/ Arquitecto Arnau, 61 o búsqueda activa",
      "Restauración y puesta a punto completa antes de la entrega en tu domicilio o estudio",
      "Posibilidad de personalizar el acabado final o electrificación a medida",
    ],
    protocolVa: [
      "Definició de mides màximes, dècada buscada (anys 50 a 80) i tipologia",
      "Mostra de peces disponibles al taller del C/ Arquitecte Arnau, 61 o recerca activa",
      "Restauració i posada a punt completa abans del lliurament",
      "Possibilitat de personalitzar l'acabat final a mida",
    ],
    durationEs: "Cita en taller en 24–48 h laborables para ver piezas o definir búsqueda",
    durationVa: "Cita al taller en 24–48 h laborables per veure peces o definir recerca",
    photoTipEs:
      "Indícanos las medidas del espacio disponible y qué estilo o época estás buscando.",
    photoTipVa:
      "Indica'ns les mides de l'espai disponible i quin estil o època estàs buscant.",
  },
];

const MATERIAL_OPTIONS = [
  "Bronce / Latón y Cristal tallado",
  "Madera de Teca / Nogal / Palisandro (Años 50–70)",
  "Madera maciza tradicional (Roble, Haya, Caoba)",
  "Metal cromado / Opalina / Cristal Murano (Años 60–80)",
  "No estoy seguro/a — prefiero valoración técnica",
];

const CONDITION_OPTIONS = [
  "Buen estado estructural · Necesita limpieza, nutrición o puesta a punto",
  "Necesita recableado eléctrico seguro y/o reposición de cristales",
  "Presenta manchas de humedad, barniz deteriorado o desencolados",
  "Quiero actualizar su estética / color conservando su esencia",
  "Busco adquirir una pieza ya restaurada del taller",
];

const LOGISTICS_OPTIONS = [
  "Puedo acercar la pieza al taller en C/ Arquitecto Arnau, 61 (Benimaclet) con cita previa",
  "Necesito coordinar recogida y entrega en Valencia capital",
  "Necesito coordinar recogida y entrega en área metropolitana (Alboraia, Paterna, Godella, Torrent...)",
];

export function InteractiveDiagnostic() {
  const { locale, triggerPrefillAndScroll } = useLanguage();
  const [selectedPieceId, setSelectedPieceId] = useState<string>(
    PIECE_OPTIONS[0].id
  );
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    MATERIAL_OPTIONS[0]
  );
  const [selectedCondition, setSelectedCondition] = useState<string>(
    CONDITION_OPTIONS[0]
  );
  const [selectedLogistics, setSelectedLogistics] = useState<string>(
    LOGISTICS_OPTIONS[0]
  );

  const currentPiece =
    PIECE_OPTIONS.find((p) => p.id === selectedPieceId) || PIECE_OPTIONS[0];

  const pieceLabel =
    locale === "es" ? currentPiece.labelEs : currentPiece.labelVa;
  const protocolList =
    locale === "es" ? currentPiece.protocolEs : currentPiece.protocolVa;
  const durationText =
    locale === "es" ? currentPiece.durationEs : currentPiece.durationVa;
  const photoTipText =
    locale === "es" ? currentPiece.photoTipEs : currentPiece.photoTipVa;

  const whatsappSummary = `Hola Carlos, he configurado mi consulta en la web de A.C.D. Carlos Soriano:
• Pieza: ${pieceLabel}
• Material/Época: ${selectedMaterial}
• Necesidad: ${selectedCondition}
• Logística: ${selectedLogistics}
Me gustaría enviarte unas fotos para valorarlo.`;

  const whatsappDiagnosticUrl = `https://wa.me/${
    BUSINESS_INFO.whatsappNumber
  }?text=${encodeURIComponent(whatsappSummary)}`;

  const handleTransferToForm = () => {
    triggerPrefillAndScroll({
      pieceType: pieceLabel,
      decadeOrMaterial: selectedMaterial,
      interventionScope: selectedCondition,
      dimensionsOrLocation: selectedLogistics,
      notes: `Configuración técnica seleccionada: ${pieceLabel} (${selectedMaterial}) — ${selectedCondition}.`,
    });
  };

  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden border-b border-white/10 bg-[#0F0D0B] text-[#F5F0E6] scroll-mt-20"
    >
      {/* Ambient Apple Dark Mode Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 w-[42rem] h-[42rem] rounded-full bg-radial from-[#B88440]/18 via-[#B88440]/4 to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A66A]" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D4A66A]">
              {locale === "es"
                ? "02 · CONFIGURADOR TÉCNICO INTERACTIVO"
                : "02 · CONFIGURADOR TÈCNIC INTERACTIU"}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F4EE] leading-[1.08] tracking-tight">
            {locale === "es"
              ? "Configura tu pieza y descubre en tiempo real el protocolo que aplicamos en taller."
              : "Configura la teua peça i descobreix en temps real el protocol que apliquem al taller."}
          </h2>
          <p className="text-base sm:text-lg text-[#C2B9AC] mt-4 leading-relaxed">
            {locale === "es"
              ? "Cada lámpara de araña o mueble de los años 50–80 tiene una estructura y patología propias. Selecciona las características de tu pieza para conocer las fases de trabajo y trasladar los datos directamente a tu solicitud o WhatsApp."
              : "Selecciona les característiques de la teua peça per conéixer les fases de treball i traslladar les dades directament a la teua sol·licitud o WhatsApp."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Controls (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 rounded-[2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/12 p-6 sm:p-8 shadow-2xl"
          >
            {/* Step 1: Piece Type with Apple Spring Active Indicator */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#D4A66A] mb-3">
                {locale === "es"
                  ? "1. ¿Qué tipo de pieza deseas restaurar o buscar?"
                  : "1. Quin tipus de peça desitges restaurar o buscar?"}
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {PIECE_OPTIONS.map((option) => {
                  const isSelected = option.id === selectedPieceId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedPieceId(option.id)}
                      aria-pressed={isSelected}
                      className={`relative w-full text-left px-5 py-4 rounded-2xl transition-colors flex items-center justify-between gap-3 cursor-pointer overflow-hidden ${
                        isSelected
                          ? "text-[#F7F4EE]"
                          : "bg-white/[0.03] text-[#C2B9AC] hover:bg-white/[0.06] ring-1 ring-white/10"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="diag-piece-active-surface"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9A6B32]/35 via-[#9A6B32]/20 to-white/[0.06] ring-1 ring-[#D4A66A]"
                        />
                      )}
                      <span className="relative z-10 text-sm sm:text-base font-medium">
                        {locale === "es" ? option.labelEs : option.labelVa}
                      </span>
                      <span
                        className={`relative z-10 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "border-[#D4A66A] bg-[#D4A66A]"
                            : "border-white/30"
                        }`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#0F0D0B]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Material / Era */}
            <div>
              <label
                htmlFor="diag-material"
                className="block font-mono text-xs uppercase tracking-wider text-[#D4A66A] mb-2"
              >
                {locale === "es"
                  ? "2. Material predominante o época aproximada"
                  : "2. Material predominant o època aproximada"}
              </label>
              <select
                id="diag-material"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full min-h-12 px-4 py-3 rounded-2xl bg-[#181512] border border-white/15 text-[#F5F0E6] text-sm focus:border-[#D4A66A] focus:outline-none"
              >
                {MATERIAL_OPTIONS.map((mat) => (
                  <option
                    key={mat}
                    value={mat}
                    className="bg-[#181512] text-[#F5F0E6]"
                  >
                    {mat}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Condition */}
            <div>
              <label
                htmlFor="diag-condition"
                className="block font-mono text-xs uppercase tracking-wider text-[#D4A66A] mb-2"
              >
                {locale === "es"
                  ? "3. Estado actual o intervención deseada"
                  : "3. Estat actual o intervenció desitjada"}
              </label>
              <select
                id="diag-condition"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full min-h-12 px-4 py-3 rounded-2xl bg-[#181512] border border-white/15 text-[#F5F0E6] text-sm focus:border-[#D4A66A] focus:outline-none"
              >
                {CONDITION_OPTIONS.map((cond) => (
                  <option
                    key={cond}
                    value={cond}
                    className="bg-[#181512] text-[#F5F0E6]"
                  >
                    {cond}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Logistics in Valencia */}
            <div>
              <label
                htmlFor="diag-logistics"
                className="block font-mono text-xs uppercase tracking-wider text-[#D4A66A] mb-2"
              >
                {locale === "es"
                  ? "4. Entrega o recogida en Valencia"
                  : "4. Lliurament o recollida a València"}
              </label>
              <select
                id="diag-logistics"
                value={selectedLogistics}
                onChange={(e) => setSelectedLogistics(e.target.value)}
                className="w-full min-h-12 px-4 py-3 rounded-2xl bg-[#181512] border border-white/15 text-[#F5F0E6] text-sm focus:border-[#D4A66A] focus:outline-none"
              >
                {LOGISTICS_OPTIONS.map((log) => (
                  <option
                    key={log}
                    value={log}
                    className="bg-[#181512] text-[#F5F0E6]"
                  >
                    {log}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Right Live Technical Output Sheet (5 cols) with AnimatePresence */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-[2rem] bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl border border-[#D4A66A]/45 p-6 sm:p-8 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPiece.id}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/12 pb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4A66A] block">
                        {locale === "es"
                          ? "HOJA DE PROTOCOLO EN TALLER"
                          : "FULL DE PROTOCOL AL TALLER"}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE] mt-1">
                        {pieceLabel}
                      </h3>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-[#D4A66A]/15 border border-[#D4A66A]/40 flex items-center justify-center shrink-0">
                      <Wrench
                        className="w-5 h-5 text-[#D4A66A]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#C2B9AC] mb-3">
                      {locale === "es"
                        ? "Fases técnicas previstas en C/ Arquitecto Arnau, 61:"
                        : "Fases tècniques previstes al C/ Arquitecte Arnau, 61:"}
                    </p>
                    <ul className="space-y-2.5">
                      {protocolList.map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-2.5 text-sm text-[#E7E0D3]"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#D4A66A] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2 border-t border-white/12 text-xs">
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 flex items-start gap-3">
                      <Clock
                        className="w-4 h-4 text-[#D4A66A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="font-mono uppercase text-[10px] text-[#D4A66A] block">
                          {locale === "es"
                            ? "Plazo orientativo de intervención:"
                            : "Termini orientatiu d'intervenció:"}
                        </span>
                        <p className="text-[#E7E0D3] mt-0.5">{durationText}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 flex items-start gap-3">
                      <Camera
                        className="w-4 h-4 text-[#D4A66A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="font-mono uppercase text-[10px] text-[#D4A66A] block">
                          {locale === "es"
                            ? "Consejo para valoración fotográfica rápida:"
                            : "Consell per a valoració fotogràfica ràpida:"}
                        </span>
                        <p className="text-[#E7E0D3] mt-0.5">{photoTipText}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleTransferToForm}
                  className="w-full min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#D4A66A] text-[#0F0D0B] font-semibold hover:bg-[#E2B87E] transition-colors font-mono text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                >
                  <span>
                    {locale === "es"
                      ? "Completar solicitud con estos datos"
                      : "Completar sol·licitud amb aquestes dades"}
                  </span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappDiagnosticUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/25 bg-white/[0.04] text-[#F5F0E6] hover:bg-white/10 transition-colors font-mono text-xs uppercase tracking-wider"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[#D4A66A]"
                    aria-hidden="true"
                  />
                  <span>
                    {locale === "es"
                      ? "Enviar ficha por WhatsApp · 670 41 80 08"
                      : "Enviar fitxa per WhatsApp · 670 41 80 08"}
                  </span>
                </motion.a>

                <p className="text-[11px] text-[#A89F91] leading-relaxed font-mono pt-1">
                  {locale === "es"
                    ? "* Nota de honestidad profesional: En restauración artesanal no existen tarifas planas cerradas sin inspeccionar la pieza. El diagnóstico inicial por foto o en el taller no tiene ningún coste."
                    : "* Nota d'honestedat professional: El diagnòstic inicial per foto o al taller no té cap cost."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
