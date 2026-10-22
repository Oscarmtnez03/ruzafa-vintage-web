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
    id: "comoda-aparador",
    labelEs: "Cómoda / Aparador / Consola o Armario antiguo",
    labelVa: "Còmoda / Aparador / Consola o Armari antic",
    protocolEs: [
      "Decapado artesanal controlado respetando la pátina y chapa original de nogal o caoba",
      "Eliminación de manchas de humedad, reintegración de faltas de chapa y marquetería",
      "Ajuste de puertas, cerraduras de época, colas de milano y guías de cajonera",
      "Barnizado tradicional a muñequilla con goma-laca natural o nutrición a la cera virgen",
    ],
    protocolVa: [
      "Decapat artesanal controlat respectant la pàtina i xapa original de noguera o caoba",
      "Eliminació de taques d'humitat i reintegració de faltes de xapa i marqueteria",
      "Ajust de portes, panys d'època, cues d'oronella i guies de calaixera",
      "Envernissat tradicional a monyeca amb goma-laca natural o nutrició a la cera verge",
    ],
    durationEs:
      "Entre 3 y 4 semanas en taller (respetando tiempos naturales de secado y nutrición)",
    durationVa: "Entre 3 i 4 setmanes al taller (respectant temps naturals d'assecat)",
    photoTipEs:
      "Toma una foto frontal completa, una del sobre superior y un detalle de los cajones, herrajes o desperfectos.",
    photoTipVa:
      "Fes una foto frontal completa, una del sobre superior i un detall dels calaixos o desperfectes.",
  },
  {
    id: "silleria-ebanisteria",
    labelEs: "Sillería / Sillón histórico / Mesa de comedor o Escritorio",
    labelVa: "Cadirat / Silló històric / Taula de menjador o Escriptori",
    protocolEs: [
      "Desmontaje numerado y reencolado de espigas y cajas con holgura estructural",
      "Reconstrucción de piezas torneadas, patas o tallas fracturadas en madera maciza",
      "Limpieza y regeneración del barniz en brazos, respaldos y tableros de mesa",
      "Acabado sedoso tradicional a muñequilla con goma-laca o ceras de ebanista",
    ],
    protocolVa: [
      "Desmuntatge numerat i reencolat d'espigues i caixes amb folgança estructural",
      "Reconstrucció de peces tornejades, potes o talles fracturades en fusta massissa",
      "Neteja i regeneració del vernís en braços, respatlers i taulers",
      "Acabat sedós tradicional a monyeca amb goma-laca o ceres d'ebanista",
    ],
    durationEs: "Entre 2 y 3 semanas según número de sillas y estado de los ensambles",
    durationVa: "Entre 2 i 3 setmanes segons nombre de cadires i estat dels ensambles",
    photoTipEs:
      "Envía una foto de perfil y frente, e indícanos si alguna pata, brazo o travesaño tiene movimiento o desencolado.",
    photoTipVa:
      "Envia una foto de perfil i front, i indica'ns si alguna pota o braç té moviment.",
  },
  {
    id: "tratamiento-carcoma",
    labelEs: "Tratamiento contra Carcoma / Termita y Sanidad de la Madera",
    labelVa: "Tractament contra Corc / Termita i Sanitat de la Fusta",
    protocolEs: [
      "Inspección técnica para determinar si el ataque de xilófagos está activo o latente",
      "Fumigación curativa profunda por inyección e impregnación en cámara controlada",
      "Consolidación interna de galerías debilitadas mediante resinas reversibles",
      "Sellado invisible de los orificios de salida con ceras de ebanista pigmentadas al tono",
    ],
    protocolVa: [
      "Inspecció tècnica per determinar si l'atac de xilòfags està actiu o latent",
      "Fumigació curativa profunda per injecció i impregnació controlada",
      "Consolidació interna de galeries debilitades mitjançant resines",
      "Segellat invisible dels orificis d'eixida amb ceres d'ebanista al to",
    ],
    durationEs: "Entre 2 y 3 semanas incluyendo el ciclo completo de cuarentena y sellado",
    durationVa: "Entre 2 i 3 setmanes incloent el cicle complet de quarantena i segellat",
    photoTipEs:
      "Haz una foto general del mueble y otra de cerca donde se aprecien los pequeños orificios o el serrín.",
    photoTipVa:
      "Fes una foto general del moble i una altra de prop on s'aprecien els orificis o les serradures.",
  },
  {
    id: "tapiceria-rejilla",
    labelEs: "Tapicería tradicional, butacas o tejido de rejilla (Cannage)",
    labelVa: "Tapisseria tradicional, butaques o teixit de reixeta (Cannage)",
    protocolEs: [
      "Revisión y encolado previo del bastidor de madera antes de tapizar",
      "Sustitución de cinchas de yute, atado manual de muelles o renovación de relleno",
      "Tejido artesanal hebra a hebra de rejilla vegetal (cannage) en asientos y respaldos",
      "Confección y remate con tachuela vista envejecida, vivo doble o pasamanería",
    ],
    protocolVa: [
      "Revisió i encolat previ del bastidor de fusta abans de tapissar",
      "Substitució de cingles de jute, lligat manual de molles o renovació de farciment",
      "Teixit artesanal de reixeta vegetal (cannage) en seients i respatlers",
      "Confecció i rematada amb tatxola vista, viu doble o passamaneria",
    ],
    durationEs: "Entre 2 y 3 semanas según tejido o complejidad del cosido/rejilla",
    durationVa: "Entre 2 i 3 setmanes segons teixit o complexitat de la reixeta",
    photoTipEs:
      "Fotografía la silla o butaca completa y un plano del asiento/respaldo actual.",
    photoTipVa:
      "Fotografia la cadira o butaca completa i un pla del seient o respatler actual.",
  },
  {
    id: "ebanisteria-medida",
    labelEs: "Encargo de ebanistería a medida, talla o pieza especial",
    labelVa: "Encàrrec d'ebanisteria a mida, talla o peça especial",
    protocolEs: [
      "Toma de medidas, diseño previo y selección de maderas nobles macizas (nogal, roble, haya, caoba)",
      "Construcción artesanal con ensambles tradicionales de ebanistería y talla manual",
      "Pruebas de tono y acabado en el taller de C/ Arquitecto Arnau, 61 (Benimaclet)",
      "Entrega e instalación cuidadosa en domicilio, despacho o institución en Valencia",
    ],
    protocolVa: [
      "Presa de mides, disseny previ i selecció de fustes nobles massisses",
      "Construcció artesanal amb ensambles tradicionals d'ebanisteria i talla manual",
      "Proves de to i acabat al taller del C/ Arquitecte Arnau, 61 (Benimaclet)",
      "Lliurament i instal·lació acurada en domicili o despatx a València",
    ],
    durationEs: "Cita en taller en 24–48 h laborables para definir diseño, maderas y plazos",
    durationVa: "Cita al taller en 24–48 h laborables per definir disseny, fustes i terminis",
    photoTipEs:
      "Indícanos las medidas aproximadas, la madera deseada o adjunta una foto de referencia.",
    photoTipVa:
      "Indica'ns les mides aproximades, la fusta desitjada o adjunta una foto de referència.",
  },
];

const MATERIAL_OPTIONS = [
  "Madera maciza de Nogal / Caoba / Roble / Haya",
  "Mueble con Chapa de madera noble o Marquetería",
  "Sillería con Tapizado clásico o Rejilla vegetal (Cannage)",
  "Madera tallada / Marco dorado / Pieza de época",
  "No estoy seguro/a — prefiero valoración técnica de Carlos Soriano",
];

const CONDITION_OPTIONS = [
  "Presenta agujeros o serrín de carcoma (necesita fumigación y consolidación)",
  "Tiene holgura estructural, patas desencoladas o piezas rotas",
  "El barniz está desgastado, oscurecido o tiene manchas de humedad",
  "Necesita retapizado artesanal o reposición de rejilla rota",
  "Quiero un encargo de ebanistería a medida o restauración completa",
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
              ? "Cada mueble antiguo, sillería de nogal o pieza de ebanistería tiene una estructura y patología propias. Selecciona las características de tu mueble para conocer las fases de trabajo y trasladar los datos directamente a tu solicitud o WhatsApp."
              : "Selecciona les característiques del teu moble per conéixer les fases de treball i traslladar les dades directament a la teua sol·licitud o WhatsApp."}
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
