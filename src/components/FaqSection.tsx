"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";
import { FAQS } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function FaqSection() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="border-b border-black/[0.07] bg-[#FAF7F2] scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E9D8] text-[#A65E2E] font-mono text-xs uppercase tracking-[0.16em] mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "06 · PREGUNTAS FRECUENTES"
                : "06 · PREGUNTES FREQÜENTS"}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] leading-[1.08] tracking-tight">
            {locale === "es"
              ? "Dudas habituales antes de traer tu mueble al taller."
              : "Dubtes habituals abans de portar el teu moble al taller."}
          </h2>
        </motion.div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`rounded-3xl transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white ring-1 ring-[#B88440]/50 shadow-lg"
                    : "bg-white/75 ring-1 ring-black/[0.07] hover:bg-white"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 sm:py-6 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#141210] leading-snug">
                      {locale === "es" ? faq.questionEs : faq.questionVa}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#141210] text-[#D4A66A]"
                          : "bg-[#F3EAD8] text-[#141210]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      )}
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-6 px-6 pr-12 border-t border-black/[0.05] pt-4">
                        <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                          {locale === "es" ? faq.answerEs : faq.answerVa}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
