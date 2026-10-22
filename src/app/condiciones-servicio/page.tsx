import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Condiciones del Servicio, Presupuestos y Garantías (LGDCU)",
  description:
    "Condiciones generales de contratación, elaboración de presupuestos, resguardo de depósito, garantías de restauración y hojas de reclamaciones de A.C.D. Carlos Soriano (València).",
  alternates: {
    canonical: "/condiciones-servicio",
  },
};

export default function CondicionesServicioPage() {
  const legalNif =
    process.env.NEXT_PUBLIC_LEGAL_NIF ||
    "[NIF/CIF PENDIENTE DE COMPLETAR EN VARIABLE NEXT_PUBLIC_LEGAL_NIF]";

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
              Condiciones del Servicio, Presupuestos y Garantías
            </h1>
            <p className="font-mono text-xs text-[#57534E] mt-2">
              Real Decreto Legislativo 1/2007 (LGDCU) y normativa de protección
              de consumidores en la Comunitat Valenciana
            </p>
          </div>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              1. Información Precontractual e Identificación del Prestador
            </h2>
            <p>
              En cumplimiento del artículo 97 del Real Decreto Legislativo
              1/2007, de 16 de noviembre, por el que se aprueba el texto
              refundido de la Ley General para la Defensa de los Consumidores y
              Usuarios (LGDCU), se informa que los servicios de restauración
              artesanal de mobiliario y luminarias son prestados por{" "}
              <strong>{BUSINESS_INFO.founder}</strong> ({BUSINESS_INFO.name}),
              con NIF/CIF <span className="font-mono text-xs">{legalNif}</span>{" "}
              y taller físico abierto al público (bajo cita previa) en{" "}
              <strong>
                {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.postalCode}{" "}
                {BUSINESS_INFO.city}
              </strong>
              , teléfono +34 {BUSINESS_INFO.phoneDisplay} y correo electrónico{" "}
              {BUSINESS_INFO.email}.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              2. Valoración Orientativa por Fotografía vs. Presupuesto Escrito
              en Taller
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Carácter orientativo del diagnóstico digital:</strong>{" "}
                Las estimaciones proporcionadas a partir de fotografías enviadas
                por WhatsApp o mediante el configurador web tienen carácter
                meramente orientativo y gratuito, dado que en piezas antiguas o
                de las décadas de 1950 a 1980 pueden existir patologías ocultas
                (xilófagos internos, desencolados estructurales o deterioro del
                aislamiento eléctrico interior).
              </li>
              <li>
                <strong>Presupuesto previo vinculante y resguardo de depósito:</strong>{" "}
                Ninguna intervención se inicia sin la inspección física de la
                pieza y la aceptación expresa del presupuesto escrito por parte
                del cliente, donde constarán desglosados los trabajos a
                realizar, el precio total (impuestos incluidos) y el plazo
                estimado de entrega, entregándose el correspondiente resguardo
                de depósito de la pieza en el taller de C/ Arquitecto Arnau, 61.
              </li>
              <li>
                <strong>Aparición de vicios ocultos durante el desmontaje:</strong>{" "}
                Si durante el desmontaje técnico de un mueble o estructura de
                madera se detectaran averías o daños ocultos no apreciables en
                la inspección inicial, se comunicará inmediatamente al cliente
                antes de realizar cualquier cargo adicional.
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              3. Régimen de Garantías y Naturaleza de las Piezas Antiguas
            </h2>
            <p>
              Las intervenciones de restauración, encolado estructural,
              ebanistería y tapicería realizadas por{" "}
              {BUSINESS_INFO.name} cuentan con la garantía legal prevista en la
              normativa española de defensa de los consumidores respecto a la
              mano de obra y los materiales nuevos incorporados (como espigas,
              cinchas, herrajes o acabados aplicados).
            </p>
            <p>
              Quedan excluidos de la garantía los desperfectos derivados de un
              uso inadecuado, golpes posteriores a la entrega, exposición a
              humedad extrema o fuentes directas de calor sobre maderas antiguas
              y chapas naturales, así como las variaciones estéticas propias de
              la pátina histórica del objeto expresamente conservadas a petición
              del cliente.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              4. Derecho de Desistimiento y Excepciones Legales
            </h2>
            <p>
              Este sitio web no realiza cobros automáticos ni formaliza
              contratos de compraventa a distancia sin intervención previa. En
              caso de contratación a distancia, el consumidor dispone con
              carácter general de un plazo de 14 días naturales para desistir
              del contrato (art. 102 LGDCU), salvo en los supuestos legalmente
              exceptuados en el <strong>artículo 103 de la LGDCU</strong>, entre
              ellos:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                La prestación de servicios de restauración o personalización
                una vez que el servicio haya sido completamente ejecutado con el
                consentimiento expreso previo del consumidor (art. 103.a LGDCU).
              </li>
              <li>
                El suministro de bienes o intervenciones confeccionados
                conforme a las especificaciones del consumidor o claramente
                personalizados (art. 103.c LGDCU).
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              5. Hojas de Reclamaciones y Resolución Extrajudicial de Conflictos
            </h2>
            <p>
              Se informa a los consumidores y usuarios de que este
              establecimiento dispone de{" "}
              <strong>
                Hojas Oficiales de Reclamaciones de la Generalitat Valenciana
              </strong>{" "}
              en su local físico de{" "}
              <strong>
                {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.postalCode}{" "}
                {BUSINESS_INFO.city}
              </strong>
              , que serán facilitadas de inmediato a cualquier cliente que las
              solicite.
            </p>
            <p>
              Asimismo, para cualquier reclamación en materia de consumo, el
              usuario puede dirigirse a la Oficina Municipal de Información al
              Consumidor (OMIC) del Ayuntamiento de València o al Servicio
              Territorial de Comercio y Consumo de Valencia.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
