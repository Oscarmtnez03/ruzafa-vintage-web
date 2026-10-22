"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { locale, triggerPrefillAndScroll } = useLanguage();

  return (
    <section
      id="especialidades"
      className="border-b border-[#1A1412]/[0.08] bg-[#FAF7F2] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6ECDC] text-[#A65E2E] font-mono text-xs uppercase tracking-[0.16em] font-semibold mb-3 ring-1 ring-[#A65E2E]/20">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "01 · ESPECIALIDADES DEL TALLER"
                : "01 · ESPECIALITATS DEL TALLER"}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] leading-[1.08] tracking-tight">
            {locale === "es"
              ? "Oficio técnico de restauración para piezas que merecen una segunda vida."
              : "Ofici tècnic de restauració per a peces que mereixen una segona vida."}
          </h2>
          <p className="text-base sm:text-lg text-[#5C5149] mt-4 leading-relaxed">
            {locale === "es"
              ? "Cada intervención se plantea desde el respeto por los materiales originales —bronce, cristal tallado, teca, nogal o haya— y la adaptación funcional a los hogares actuales de Valencia."
              : "Cada intervenció es planteja des del respecte pels materials originals —bronze, cristall tallat, teca, noguera o faig— i l'adaptació funcional a les llars actuals de València."}
          </p>
        </motion.div>

        {/* Apple Bento Grid of Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const title = locale === "es" ? service.titleEs : service.titleVa;
            const subtitle =
              locale === "es" ? service.subtitleEs : service.subtitleVa;
            const description =
              locale === "es" ? service.descriptionEs : service.descriptionVa;
            const deliverables =
              locale === "es" ? service.deliverablesEs : service.deliverablesVa;
            const typicalPieces =
              locale === "es" ? service.typicalPiecesEs : service.typicalPiecesVa;

            const waLink = `https://wa.me/${
              BUSINESS_INFO.whatsappNumber
            }?text=${encodeURIComponent(service.whatsappPrefill)}`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[2rem] bg-white p-7 sm:p-9 ring-1 ring-[#1A1412]/[0.08] shadow-[0_18px_45px_-15px_rgba(26,20,18,0.08)] hover:shadow-[0_28px_65px_-15px_rgba(26,20,18,0.16)] hover:ring-[#A65E2E]/50 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Corner Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-radial from-[#D4A359]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1A1412]/[0.07]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A65E2E] font-semibold px-3 py-1 rounded-full bg-[#F6ECDC]">
                      ESPECIALIDAD · {service.number}
                    </span>
                    <span className="font-mono text-[11px] text-[#2A3C34] bg-[#E6ECE8] px-2.5 py-0.5 rounded-full">
                      BENIMACLET · VALÈNCIA
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1412] leading-snug">
                    {title}
                  </h3>
                  <p className="font-mono text-xs text-[#A65E2E] font-medium mt-1.5 mb-4">
                    {subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#5C5149] leading-relaxed mb-6">
                    {description}
                  </p>

                  <div className="rounded-2xl bg-[#FAF7F2] p-5 ring-1 ring-[#1A1412]/[0.06] mb-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#5C5149] mb-3">
                      {locale === "es"
                        ? "Protocolo de intervención en taller:"
                        : "Protocol d'intervenció al taller:"}
                    </p>
                    <ul className="space-y-2.5">
                      {deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-[#1A1412]"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#E6ECE8] text-[#2A3C34] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" aria-hidden="true" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#1A1412]/[0.07] space-y-4">
                  <div className="rounded-2xl bg-[#F1ECE1] px-4 py-3 text-xs text-[#5C5149]">
                    <span className="font-mono uppercase text-[10px] text-[#A65E2E] font-semibold block mb-0.5">
                      {locale === "es" ? "Piezas habituales:" : "Peces habituals:"}
                    </span>
                    {typicalPieces}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      type="button"
                      onClick={() =>
                        triggerPrefillAndScroll({
                          pieceType: title,
                          interventionScope: subtitle,
                        })
                      }
                      className="flex-1 min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1A1412] text-[#FAF7F2] hover:bg-[#A65E2E] transition-colors font-mono text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                    >
                      <span>
                        {locale === "es"
                          ? "Solicitar valoración de esta especialidad"
                          : "Sol·licitar valoració d'aquesta especialitat"}
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#D4A359]"
                        aria-hidden="true"
                      />
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#E6ECE8] text-[#2A3C34] ring-1 ring-[#2A3C34]/20 hover:bg-[#2A3C34] hover:text-white transition-all font-mono text-xs uppercase tracking-wider font-medium"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
