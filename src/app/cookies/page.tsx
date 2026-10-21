import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies (Guía AEPD 2024)",
  description:
    "Información detallada sobre el uso de almacenamiento local técnico y el bloqueo preventivo de servicios de terceros en Ruzafa Vintage (València).",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main
        id="contenido-principal"
        className="flex-1 bg-[#F5F3EF] py-14 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-black/15 pb-6">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-wider text-[#9A6B32] hover:underline"
            >
              ← Volver a Ruzafa Vintage
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#141210] mt-3">
              Política de Cookies
            </h1>
            <p className="font-mono text-xs text-[#57534E] mt-2">
              Adaptada al art. 22.2 de la Ley 34/2002 (LSSI-CE) y a las
              Directrices de la Guía sobre el Uso de las Cookies de la AEPD
            </p>
          </div>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              1. ¿Qué son las cookies y el almacenamiento local?
            </h2>
            <p>
              Las cookies y entradas de almacenamiento local (
              <code>localStorage</code>) son pequeños registros que el navegador
              guarda en su dispositivo para recordar preferencias técnicas de
              navegación (como el idioma seleccionado o su decisión respecto al
              panel de privacidad).
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              2. Cuadro Detallado de Cookies y Servicios de Terceros
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-black/15 bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#EBE6DC] border-b border-black/15 font-mono uppercase">
                  <tr>
                    <th className="p-3.5">Identificador / Servicio</th>
                    <th className="p-3.5">Titular</th>
                    <th className="p-3.5">Categoría</th>
                    <th className="p-3.5">Finalidad</th>
                    <th className="p-3.5">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="p-3.5 font-mono">
                      ruzafa_vintage_cookie_consent_v2
                    </td>
                    <td className="p-3.5">Propia (Ruzafa Vintage)</td>
                    <td className="p-3.5">Técnica / Necesaria (Exenta)</td>
                    <td className="p-3.5">
                      Almacena el estado de consentimiento otorgado o denegado
                      por el usuario en el banner de privacidad conforme a la
                      AEPD.
                    </td>
                    <td className="p-3.5">12 meses</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono">
                      Mapa embebido (OpenStreetMap)
                    </td>
                    <td className="p-3.5">
                      Tercero (OpenStreetMap Foundation)
                    </td>
                    <td className="p-3.5">Contenido externo opcional</td>
                    <td className="p-3.5">
                      Muestra el plano cartográfico interactivo de la C/ Puerto
                      Rico, 33.{" "}
                      <strong>
                        Permanece bloqueado por defecto hasta que el usuario
                        pulsa «Aceptar todas» o «Cargar mapa interactivo».
                      </strong>
                    </td>
                    <td className="p-3.5">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              3. Cómo Modificar o Revocar su Consentimiento en Cualquier Momento
            </h2>
            <p>
              Puede cambiar o revocar su elección en cualquier momento haciendo
              clic en el botón permanente{" "}
              <strong>«Configurar Cookies»</strong> situado en el pie de página
              (Footer) de todas las páginas de este sitio web. Asimismo, puede
              eliminar las cookies almacenadas desde la configuración de
              privacidad de su navegador (Chrome, Safari, Firefox o Edge).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
