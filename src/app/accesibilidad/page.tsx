import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Declaración de Accesibilidad Web (WCAG 2.1 AA)",
  description:
    "Declaración de accesibilidad y compromiso de inclusión digital del sitio web de Ruzafa Vintage (València) conforme a las pautas WCAG 2.1 nivel AA y norma UNE-EN 301 549.",
  alternates: {
    canonical: "/accesibilidad",
  },
};

export default function AccesibilidadPage() {
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
              Declaración de Accesibilidad
            </h1>
            <p className="font-mono text-xs text-[#57534E] mt-2">
              Conforme a las pautas WCAG 2.1 (Nivel AA) y la norma europea
              UNE-EN 301 549
            </p>
          </div>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              1. Compromiso de Accesibilidad
            </h2>
            <p>
              <strong>{BUSINESS_INFO.name}</strong> se compromete a hacer
              accesible su sitio web para todas las personas, con independencia
              de sus capacidades físicas, sensoriales, cognitivas o tecnológicas,
              aplicando los requisitos de nivel AA de las Pautas de Accesibilidad
              para el Contenido Web (WCAG 2.1) del consorcio W3C y la norma
              española <strong>UNE-EN 301 549</strong>.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              2. Medidas Técnicas Implementadas en este Sitio Web
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Estructura semántica HTML5:</strong> Uso adecuado de
                regiones (<code>header</code>, <code>main</code>,{" "}
                <code>section</code>, <code>nav</code>, <code>footer</code>) y
                jerarquía lógica de encabezados (<code>h1</code> a{" "}
                <code>h3</code>).
              </li>
              <li>
                <strong>Enlace de salto al contenido principal:</strong>{" "}
                Accesible al presionar la tecla <code>Tab</code> desde el inicio
                de cada página.
              </li>
              <li>
                <strong>Navegación íntegra por teclado e indicadores de foco:</strong>{" "}
                Todos los controles interactivos, pestañas, modales y acordeones
                disponen de atributos ARIA (<code>aria-expanded</code>,{" "}
                <code>aria-controls</code>, <code>aria-pressed</code>,{" "}
                <code>role=&quot;dialog&quot;</code>) y contorno visible de foco.
              </li>
              <li>
                <strong>Respeto por el movimiento reducido:</strong> El sitio
                detecta automáticamente la preferencia del sistema operativo{" "}
                <code>prefers-reduced-motion: reduce</code> desactivando
                transiciones y desplazamientos animados para personas con
                sensibilidad vestibular.
              </li>
              <li>
                <strong>Contraste cromático y escalado tipográfico:</strong>{" "}
                Contraste verificado entre texto y fondo y soporte de zoom de
                hasta el 200 % sin pérdida de contenido ni desbordamiento
                horizontal.
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              3. Comunicaciones y Sugerencias de Accesibilidad
            </h2>
            <p>
              Si encuentras cualquier barrera de acceso o necesitas recibir la
              información de valoración de piezas en un formato alternativo
              accesible, puedes comunicarte directamente con nosotros a través
              de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="underline text-[#9A6B32]"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <strong>Teléfono y atención directa por voz o WhatsApp:</strong>{" "}
                +34 {BUSINESS_INFO.phoneDisplay}
              </li>
              <li>
                <strong>Atención presencial en planta baja (a pie de calle):</strong>{" "}
                {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.postalCode}{" "}
                {BUSINESS_INFO.city}.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
