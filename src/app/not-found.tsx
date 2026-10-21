import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="contenido-principal"
        className="flex-1 bg-[#F7F4EE] flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-xl w-full border-2 border-[#1C1917] bg-[#EFEAE0] p-8 sm:p-10 text-center space-y-6">
          <div className="w-12 h-12 mx-auto border border-[#1C1917] bg-[#181512] text-[#D4A66A] flex items-center justify-center">
            <Wrench className="w-5 h-5" aria-hidden="true" />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9A6B32]">
            ERROR 404 · PIEZA NO ENCONTRADA EN CATÁLOGO
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
            La página que buscas no existe o ha cambiado de ubicación.
          </h1>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Puedes regresar al taller principal de Ruzafa Vintage para consultar nuestras
            especialidades en lámparas de araña y mobiliario de los años 50–80 o solicitar una
            valoración directa.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1917] text-[#F7F4EE] hover:bg-[#9A6B32] transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4A66A]" aria-hidden="true" />
              <span>Volver al Inicio</span>
            </Link>

            <Link
              href="/#solicitar-valoracion"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1C1917] bg-[#F7F4EE] text-[#1C1917] hover:bg-[#DDD5C5] transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <span>Valorar una pieza</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
