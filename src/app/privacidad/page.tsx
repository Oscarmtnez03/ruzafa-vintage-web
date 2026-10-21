import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Política de Privacidad y Protección de Datos (RGPD y LOPDGDD)",
  description:
    "Segunda capa informativa de protección de datos personales de Ruzafa Vintage (Carrer de Puerto Rico, 33, 46006 València) conforme al RGPD y LOPDGDD.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
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
              ← Volver a Ruzafa Vintage
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#141210] mt-3">
              Política de Privacidad (Segunda Capa RGPD)
            </h1>
            <p className="font-mono text-xs text-[#57534E] mt-2">
              Reglamento (UE) 2016/679 (RGPD · Arts. 13 y 14) y Ley Orgánica
              3/2018 (LOPDGDD · Art. 11)
            </p>
          </div>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              1. ¿Quién es el Responsable del Tratamiento de sus Datos?
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Responsable:</strong> {legalOwner} ({BUSINESS_INFO.name})
              </li>
              <li>
                <strong>NIF / CIF:</strong>{" "}
                <span className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-black/15">
                  {legalNif}
                </span>
              </li>
              <li>
                <strong>Dirección postal:</strong> {BUSINESS_INFO.streetAddress},{" "}
                {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city} (España)
              </li>
              <li>
                <strong>Teléfono:</strong> +34 {BUSINESS_INFO.phoneDisplay}
              </li>
              <li>
                <strong>Correo electrónico para ejercicio de derechos:</strong>{" "}
                {BUSINESS_INFO.email}
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              2. ¿Qué Datos Recogemos y con qué Finalidad los Tratamos?
            </h2>
            <p>
              Recogemos únicamente los datos identificativos y de contacto que el
              usuario facilita voluntariamente mediante el formulario de
              solicitud de valoración o comunicación directa (nombre y apellidos,
              teléfono, correo electrónico opcional, zona de Valencia y
              descripción técnica de la pieza). Los tratamos con las siguientes
              finalidades legítimas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Responder a las solicitudes de valoración orientativa de
                restauración de muebles o lámparas de araña.
              </li>
              <li>
                Concertar citas previas de atención personalizada en el taller de{" "}
                {BUSINESS_INFO.streetAddress} ({BUSINESS_INFO.city}).
              </li>
              <li>
                Elaborar presupuestos escritos y gestionar la relación
                contractual en caso de encomendarse la restauración.
              </li>
            </ul>
            <p>
              <strong>Ausencia de decisiones automatizadas y de spam:</strong>{" "}
              No elaboramos perfiles comerciales automatizados ni enviamos
              comunicaciones publicitarias masivas no solicitadas (art. 21
              LSSI-CE).
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              3. Base Jurídica (Legitimación) y Plazos de Conservación
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong>{" "}
                Otorgado al marcar expresamente la casilla de aceptación de esta
                Política de Privacidad antes de enviar el formulario.
              </li>
              <li>
                <strong>Medidas precontractuales y ejecución contractual (Art. 6.1.b RGPD):</strong>{" "}
                Necesarias para elaborar la valoración solicitada por el usuario
                y ejecutar, en su caso, el encargo de restauración.
              </li>
              <li>
                <strong>Plazo de conservación:</strong> Los datos de consultas no
                formalizadas se conservarán durante un plazo máximo de 12 meses
                desde la última comunicación, o antes si el interesado solicita
                su supresión. Si se formaliza un encargo, se conservarán
                bloqueados durante los plazos legales de prescripción fiscal y
                tributaria (4 años conforme a la Ley General Tributaria) y de
                acciones civiles/consumo aplicables.
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              4. Destinatarios, Encargados del Tratamiento y Comunicaciones por
              WhatsApp
            </h2>
            <p>
              No se cederán datos personales a terceros ajenos al servicio, salvo
              obligación legal (Administración Tributaria u órganos judiciales).
              El sitio web cuenta con proveedores tecnológicos de alojamiento web
              y correo transaccional que actúan como encargados del tratamiento
              bajo contrato conforme al artículo 28 del RGPD.
            </p>
            <p>
              Cuando el usuario decide voluntariamente iniciar una conversación o
              enviar fotografías a través de <strong>WhatsApp</strong>, queda
              informado de que dicho canal es operado por WhatsApp Ireland
              Limited (Meta Platforms), rigiéndose adicionalmente por las
              condiciones de privacidad de dicha plataforma. Si prefiere no
              utilizar WhatsApp, puede comunicarse íntegramente por teléfono (+34{" "}
              {BUSINESS_INFO.phoneDisplay}), correo electrónico (
              {BUSINESS_INFO.email}) o presencialmente en el taller.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base text-[#292524] leading-relaxed">
            <h2 className="font-serif text-2xl text-[#141210]">
              5. Derechos del Interesado (ARSOPOL)
            </h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en{" "}
              {BUSINESS_INFO.name} estamos tratando datos personales que le
              conciernan, así como a ejercer gratuitamente sus derechos de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Acceso:</strong> Conocer qué datos personales suyos
                tratamos.
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la modificación de
                datos inexactos o incompletos.
              </li>
              <li>
                <strong>Supresión (Derecho al olvido):</strong> Solicitar la
                eliminación de sus datos cuando ya no sean necesarios.
              </li>
              <li>
                <strong>Oposición y Limitación del tratamiento:</strong>{" "}
                Solicitar que se restrinja o cese el tratamiento en determinadas
                circunstancias.
              </li>
              <li>
                <strong>Portabilidad:</strong> Recibir sus datos en formato
                estructurado y de uso común.
              </li>
              <li>
                <strong>Retirada del consentimiento:</strong> En cualquier
                momento, sin que ello afecte a la licitud del tratamiento previo.
              </li>
            </ul>
            <p>
              Puede ejercitar estos derechos enviando un correo electrónico a{" "}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="underline text-[#9A6B32]"
              >
                {BUSINESS_INFO.email}
              </a>{" "}
              o una comunicación escrita a {BUSINESS_INFO.streetAddress},{" "}
              {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}. Si considera que
              sus derechos no han sido debidamente atendidos, tiene derecho a
              presentar una reclamación ante la{" "}
              <strong>
                Agencia Española de Protección de Datos (AEPD — www.aepd.es, C/
                Jorge Juan, 6, 28001 Madrid)
              </strong>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
