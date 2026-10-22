"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO, UI_TEXT } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";
import { useValenciaWorkshopStatus } from "@/utils/valenciaSchedule";

export function Navbar() {
  const { locale, setLocale } = useLanguage();
  const liveStatus = useValenciaWorkshopStatus(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const t = UI_TEXT[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "/#especialidades", label: t.nav.services },
    { href: "/#anatomia-tecnica", label: t.nav.anatomy },
    { href: "/#diagnostico", label: t.nav.diagnostic },
    { href: "/#intervenciones", label: t.nav.gallery },
    { href: "/#proceso", label: t.nav.process },
    { href: "/#ubicacion", label: t.nav.location },
  ];

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola María José, os escribo desde la web de Ruzafa Vintage para consultar sobre una pieza."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Micro-Bar in Deep Walnut & Burnished Brass */}
      <div className="bg-[#14100E] text-[#F1ECE1] border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.08] border border-white/10 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  liveStatus.isOpen
                    ? "bg-[#4ADE80] animate-pulse"
                    : "bg-[#D4A359]"
                }`}
              />
              <span className="font-mono text-[10px] tracking-tight text-[#FAF7F2]">
                {liveStatus.shortLabel}
              </span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-[#D4A359] shrink-0 hidden sm:inline" aria-hidden="true" />
            <span className="truncate font-mono tracking-tight text-[11px] sm:text-xs text-[#E2D9C8]">
              {t.topBanner}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneE164}`}
              className="hidden md:inline-flex items-center gap-1.5 text-[#F1ECE1] hover:text-[#D4A359] transition-colors font-mono text-xs"
            >
              <Phone className="w-3 h-3 text-[#D4A359]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Apple-Style Segmented Language Switcher */}
            <div
              className="relative inline-flex items-center rounded-full bg-white/10 p-0.5 border border-white/10"
              role="group"
              aria-label="Selector de idioma / Selector d'idioma"
            >
              {(["es", "va"] as const).map((langOption) => {
                const active = locale === langOption;
                return (
                  <button
                    key={langOption}
                    type="button"
                    onClick={() => setLocale(langOption)}
                    aria-pressed={active}
                    className={`relative z-10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider transition-colors rounded-full cursor-pointer ${
                      active ? "text-[#14100E] font-semibold" : "text-[#C9BFAF] hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="lang-segmented-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[#D4A359] -z-10"
                      />
                    )}
                    {langOption === "es" ? "ES" : "VAL"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Apple Glassmorphic Navigation Container */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "py-2.5 px-3 sm:px-6"
            : "py-3.5 px-4 sm:px-6 bg-[#FAF7F2]/85 backdrop-blur-xl border-b border-[#1A1412]/[0.07]"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
          className={`max-w-7xl mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
            isScrolled
              ? "apple-glass-light rounded-full px-4 sm:px-6 py-2.5 shadow-[0_14px_42px_-10px_rgba(26,20,18,0.14)] ring-1 ring-[#1A1412]/[0.09]"
              : ""
          }`}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Ruzafa Vintage - Ir al inicio"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-10 h-10 rounded-2xl bg-[#1A1412] text-[#FAF7F2] flex flex-col items-center justify-center shrink-0 shadow-md ring-1 ring-[#D4A359]/30"
            >
              <span className="font-serif text-lg leading-none tracking-wider text-[#D4A359]">
                RV
              </span>
              <span className="font-mono text-[7px] tracking-widest uppercase text-[#C9BFAF] mt-0.5">
                1950·80
              </span>
            </motion.div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1412] leading-none">
                Ruzafa Vintage
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#A65E2E] font-medium mt-1">
                {locale === "es"
                  ? "Atelier · Lámparas & Mid-Century"
                  : "Atelier · Llums & Mid-Century"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Apple Hover Pill */}
          <nav
            className="hidden lg:flex items-center gap-0.5 bg-[#F1ECE1]/90 p-1 rounded-full border border-[#1A1412]/[0.07]"
            aria-label="Navegación principal"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item) => {
              const isHovered = hoveredNav === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.href)}
                  className="relative px-3.5 py-1.5 text-sm font-medium text-[#1A1412] transition-colors rounded-full"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="apple-nav-hover-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-[#FAF7F2] rounded-full shadow-xs ring-1 ring-[#A65E2E]/20 -z-10"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-full bg-white text-[#1A1412] ring-1 ring-[#1A1412]/12 hover:ring-[#2A3C34] shadow-2xs transition-all"
              aria-label="Consultar por WhatsApp al +34 657 19 12 24"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#2A3C34]" aria-hidden="true" />
              <span className="hidden xl:inline">WhatsApp</span>
              <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#solicitar-valoracion"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full bg-[#A65E2E] text-white hover:bg-[#8A4B20] shadow-[0_8px_20px_-6px_rgba(166,94,46,0.5)] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F6ECDC]" aria-hidden="true" />
                <span>{t.nav.cta}</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#F1ECE1] text-[#1A1412] hover:bg-[#E5DEC9] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </motion.div>

        {/* Accessible Spring-Animated Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 30 }}
              className="lg:hidden mt-2 mx-auto max-w-7xl rounded-3xl apple-glass-light p-5 shadow-2xl ring-1 ring-[#1A1412]/10 space-y-5"
            >
              <nav className="flex flex-col divide-y divide-[#1A1412]/[0.07]" aria-label="Menú móvil">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3.5 text-base font-medium text-[#1A1412] hover:text-[#A65E2E] flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#A65E2E]">→</span>
                  </Link>
                ))}
              </nav>

              <div className="pt-2 grid grid-cols-1 gap-2.5">
                <Link
                  href="/#solicitar-valoracion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-12 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium uppercase tracking-wider rounded-2xl bg-[#A65E2E] text-white hover:bg-[#8A4B20] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#F6ECDC]" aria-hidden="true" />
                  <span>{t.nav.cta}</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneE164}`}
                    className="min-h-12 inline-flex items-center justify-center gap-2 px-3 py-3 text-xs font-medium rounded-2xl bg-white ring-1 ring-[#1A1412]/10 text-[#1A1412]"
                  >
                    <Phone className="w-4 h-4 text-[#A65E2E]" aria-hidden="true" />
                    <span>{locale === "es" ? "Llamar" : "Telefonar"}</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-12 inline-flex items-center justify-center gap-2 px-3 py-3 text-xs font-medium rounded-2xl bg-[#E6ECE8] ring-1 ring-[#2A3C34]/20 text-[#2A3C34]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2A3C34]" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
