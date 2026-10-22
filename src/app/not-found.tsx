"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main
        id="contenido-principal"
        className="flex-1 bg-[#F1ECE1] flex items-center justify-center py-20 sm:py-28 px-4"
      >
        <div className="max-w-xl w-full rounded-3xl bg-[#FAF7F2] border border-[#1A1412]/10 p-8 sm:p-12 text-center space-y-6 shadow-[0_20px_50px_-20px_rgba(26,20,18,0.12)]">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1A1412] text-[#D4A359] flex items-center justify-center shadow-md ring-1 ring-[#D4A359]/30">
            <Compass className="w-6 h-6 text-[#D4A359]" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A65E2E] font-medium">
              {locale === "es"
                ? "ERROR 404 · PIEZA NO ENCONTRADA EN TALLER"
                : "ERROR 404 · PEÇA NO TROBADA AL TALLER"}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1412] font-semibold tracking-tight">
              {locale === "es"
                ? "La página que buscas no existe o ha cambiado de ubicación."
                : "La pàgina que busques no existeix o ha canviat d'ubicació."}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-[#443E38] leading-relaxed">
            {locale === "es"
              ? "Puedes regresar al taller principal de Ruzafa Vintage en Carrer de Puerto Rico, 33 para consultar nuestras intervenciones en lámparas de araña y mobiliario mid-century, o solicitar una valoración técnica directa."
              : "Pots tornar al taller principal de Ruzafa Vintage al Carrer de Puerto Rico, 33 per consultar les nostres intervencions en llums d'aranya i mobiliari mid-century, o sol·licitar una valoració tècnica directa."}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto min-h-12 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1412] text-[#FAF7F2] hover:bg-[#A65E2E] transition-colors font-mono text-xs uppercase tracking-wider shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4A359]" aria-hidden="true" />
              <span>{locale === "es" ? "Volver al inicio" : "Tornar a l'inici"}</span>
            </Link>

            <Link
              href="/#solicitar-valoracion"
              className="w-full sm:w-auto min-h-12 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#1A1412]/20 bg-white text-[#1A1412] hover:bg-[#F1ECE1] transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[#A65E2E]" aria-hidden="true" />
              <span>
                {locale === "es" ? "Solicitar valoración" : "Sol·licitar valoració"}
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
