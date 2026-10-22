import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Aviso Legal (LSSI-CE)",
  description:
    "Información legal conforme al artículo 10 de la Ley 34/2002 (LSSI-CE) del taller de restauración y ebanistería A.C.D. Carlos Soriano en Calle Arquitecto Arnau, 61, 46020 València.",
  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  const legalNif =
    process.env.NEXT_PUBLIC_LEGAL_NIF ||
    "[NIF/CIF PENDIENTE DE CONFIGURAR EN VARIABLE DE ENTORNO NEXT_PUBLIC_LEGAL_NIF]";
  const legalOwner =
    process.env.NEXT_PUBLIC_LEGAL_OWNER_NAME || BUSINESS_INFO.founder;

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
              ← Volver a A.C.D. Carlos Soriano
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#141210] mt-3">
              Aviso Legal (LSSI-CE)
            </h1>
            <p className="font-mono text-xs text-[#57534E] mt-2">
              Deber de información general conforme al artículo 10 de la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSI-CE)
            </p>
          </div>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              1. Datos Identificativos del Prestador de Servicios
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Denominación comercial:</strong> {BUSINESS_INFO.name}
              </li>
              <li>
                <strong>Titular / Responsable legal:</strong> {legalOwner}
              </li>
              <li>
                <strong>NIF / CIF:</strong>{" "}
                <span className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-black/15">
                  {legalNif}
                </span>
              </li>
              <li>
                <strong>Domicilio social y del taller artesanal:</strong>{" "}
                {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.postalCode}{" "}
                {BUSINESS_INFO.city} ({BUSINESS_INFO.province}, España)
              </li>
              <li>
                <strong>Teléfono directo de contacto:</strong> +34{" "}
                {BUSINESS_INFO.phoneDisplay}
              </li>
              <li>
                <strong>Correo electrónico de contacto:</strong>{" "}
                {BUSINESS_INFO.email}
              </li>
              <li>
                <strong>Actividad:</strong> Taller artesanal de restauración de
                muebles, ebanistería tradicional, tratamientos antixilófagos y
                tapicería (CNAE 9524 · Reparación de muebles y artículos de
                menaje). Actividad no sujeta a régimen de autorización
                administrativa previa especial ni colegiación obligatoria.
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              2. Objeto y Condiciones de Acceso y Uso
            </h2>
            <p>
              El acceso y navegación por este sitio web atribuye la condición de
              usuario e implica la aceptación de las presentes condiciones. El
              usuario se compromete a hacer un uso lícito y adecuado de los
              contenidos y formularios del sitio web, absteniéndose de introducir
              datos falsos o emplear los canales de contacto para fines
              ilícitos, publicitarios no autorizados (spam) o lesivos de
              derechos de terceros.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              3. Propiedad Intelectual, Industrial y Transparencia Visual
            </h2>
            <p>
              Los textos, estructura editorial, código fuente, diseño gráfico y
              signos distintivos de <strong>{BUSINESS_INFO.name}</strong> están
              protegidos por el Real Decreto Legislativo 1/1996 (Ley de Propiedad
              Intelectual) y la Ley 17/2001 de Marcas. Queda prohibida su
              reproducción, distribución o transformación con fines comerciales
              sin autorización expresa. Las fotografías ilustrativas de
              referencia técnica aparecen expresamente identificadas como tales
              en sus pies de foto.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              4. Exclusión de Responsabilidad y Enlaces Externos
            </h2>
            <p>
              El titular adopta las medidas de seguridad técnicas adecuadas para
              garantizar el buen funcionamiento del sitio web, sin que pueda
              responsabilizarse de interrupciones temporales del servicio ajenas
              a su control o del contenido de sitios de terceros enlazados (como
              Google Maps u OpenStreetMap) cuya titularidad y políticas de
              privacidad pertenecen a sus respectivos operadores.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen íntegramente por la legislación
              española. En caso de controversia, cuando el usuario tenga la
              condición legal de consumidor o usuario, serán competentes los
              Juzgados y Tribunales del domicilio del consumidor o los de la
              ciudad de València, conforme a lo dispuesto en la normativa de
              defensa de los consumidores y usuarios.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
