"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingWhatsApp() {
  const { locale } = useLanguage();

  const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Carlos, te escribo desde la web de A.C.D. Carlos Soriano para enviarte fotos de un mueble y consultar su restauración."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <motion.a
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 320, damping: 24 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          locale === "es"
            ? "Enviar fotos por WhatsApp a A.C.D. Carlos Soriano (+34 670 41 80 08)"
            : "Enviar fotos per WhatsApp a A.C.D. Carlos Soriano (+34 670 41 80 08)"
        }
        className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full apple-glass-dark text-white ring-1 ring-white/20 hover:ring-[#D4A66A] shadow-[0_18px_40px_-8px_rgba(0,0,0,0.45)] transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-[#D4A66A] animate-pulse" />
        <MessageCircle className="w-4 h-4 text-[#D4A66A] shrink-0" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-wider font-medium">
          {locale === "es" ? "Valorar por foto" : "Valorar per foto"}
        </span>
      </motion.a>
    </div>
  );
}
