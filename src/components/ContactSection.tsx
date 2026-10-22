"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Sparkles,
  Camera,
  X,
} from "lucide-react";
import { BUSINESS_INFO, Locale } from "@/data/business";
import { useLanguage, DiagnosticPrefill } from "@/context/LanguageContext";

interface PhotoPreviewItem {
  name: string;
  sizeKb: number;
  previewUrl: string;
}

interface SubmissionSuccess {
  referenceCode: string;
  fullName: string;
  pieceType: string;
  phone: string;
  message: string;
  attachedPhotos: PhotoPreviewItem[];
  externalNotificationSent: boolean;
}

function ContactFormInner({
  locale,
  prefill,
}: {
  locale: Locale;
  prefill: DiagnosticPrefill;
}) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [neighborhoodOrCity, setNeighborhoodOrCity] = useState(
    prefill.dimensionsOrLocation || "Benimaclet / València"
  );
  const [pieceType, setPieceType] = useState(
    prefill.pieceType || "Mueble antiguo o clásico / Ebanistería"
  );
  const [decadeOrMaterial] = useState(
    prefill.decadeOrMaterial || "Madera maciza / Chapa de nogal o caoba"
  );
  const [interventionScope] = useState(
    prefill.interventionScope || "Valoración técnica general de restauración"
  );
  const [preferredContact, setPreferredContact] = useState(
    "WhatsApp (para adjuntar fotografías)"
  );
  const [message, setMessage] = useState(prefill.notes || "");
  const [attachedPhotos, setAttachedPhotos] = useState<PhotoPreviewItem[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [websiteTrap, setWebsiteTrap] = useState("");

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<SubmissionSuccess | null>(null);

  const hasPrefill = Boolean(prefill.version && prefill.version > 0);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selected = Array.from(files).slice(0, 2 - attachedPhotos.length);
    selected.forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAttachedPhotos((prev) =>
            prev.length >= 2
              ? prev
              : [
                  ...prev,
                  {
                    name: file.name,
                    sizeKb: Math.max(1, Math.round(file.size / 1024)),
                    previewUrl: reader.result as string,
                  },
                ]
          );
        }
      };
      reader.readAsDataURL(file);
    });

    e.target.value = "";
  };

  const removePhoto = (index: number) => {
    setAttachedPhotos((prev) => prev.filter((_, idx) => idx !== index));
  };

  const validateClient = () => {
    const errs: Record<string, string> = {};
    if (fullName.trim().length < 2) {
      errs.fullName =
        locale === "es"
          ? "Por favor, indica tu nombre."
          : "Per favor, indica el teu nom.";
    }
    const cleanPhone = phone.replace(/[\s\-().]/g, "");
    if (!/^(\+34|0034|34)?[6789]\d{8}$/.test(cleanPhone)) {
      errs.phone =
        locale === "es"
          ? "Introduce un teléfono válido de España (9 dígitos, ej. 670 41 80 08)."
          : "Introdueix un telèfon vàlid d'Espanya (9 dígits).";
    }
    if (
      email.trim().length > 0 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errs.email =
        locale === "es"
          ? "Introduce un correo electrónico válido."
          : "Introdueix un correu electrònic vàlid.";
    }
    if (pieceType.trim().length < 2) {
      errs.pieceType =
        locale === "es"
          ? "Indica el tipo de mueble o encargo a valorar."
          : "Indica el tipus de moble o encàrrec a valorar.";
    }
    if (message.trim().length < 10) {
      errs.message =
        locale === "es"
          ? "Describe brevemente la pieza o lo que necesitas (mínimo 10 caracteres)."
          : "Descriu breument la peça o el que necessites (mínim 10 caràcters).";
    }
    if (!privacyAccepted) {
      errs.privacyAccepted =
        locale === "es"
          ? "Debes aceptar la política de privacidad."
          : "Has d'acceptar la política de privacitat.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setGeneralError(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/presupuesto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          neighborhoodOrCity,
          pieceType,
          decadeOrMaterial,
          interventionScope,
          preferredContact,
          message,
          attachedPhotos: attachedPhotos.map((p) => ({
            name: p.name,
            sizeKb: p.sizeKb,
          })),
          privacyAccepted,
          website_trap: websiteTrap,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setGeneralError(
          data.error ||
            "No se pudo registrar la solicitud. Por favor, revisa los datos."
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessData({
        referenceCode: data.referenceCode,
        fullName,
        pieceType,
        phone,
        message,
        attachedPhotos,
        externalNotificationSent: Boolean(data.externalNotificationSent),
      });
      setFieldErrors({});
      setIsSubmitting(false);
    } catch {
      setGeneralError(
        "Error de conexión con el servidor. Puedes escribirnos directamente por WhatsApp al +34 670 41 80 08."
      );
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6 py-4"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A359]/20 border border-[#D4A359] text-[#D4A359] font-mono text-xs uppercase">
          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
          <span>
            {locale === "es"
              ? `SOLICITUD REGISTRADA · REF: ${successData.referenceCode}`
              : `SOL·LICITUD REGISTRADA · REF: ${successData.referenceCode}`}
          </span>
        </div>

        <h3 className="font-serif text-3xl text-[#FAF7F2]">
          {locale === "es"
            ? `Gracias, ${successData.fullName}. Hemos registrado la ficha de tu pieza.`
            : `Gràcies, ${successData.fullName}. Hem registrat la fitxa de la teua peça.`}
        </h3>

        <div className="p-5 rounded-2xl bg-black/40 border border-white/12 space-y-2 text-sm text-[#EDE6DA]">
          <p className="font-mono text-xs text-[#D4A359] uppercase">
            Resumen de tu consulta ({successData.referenceCode}):
          </p>
          <p>
            <strong>Pieza / Servicio:</strong> {successData.pieceType}
          </p>
          <p>
            <strong>Teléfono de contacto:</strong> {successData.phone}
          </p>
          <p>
            <strong>Detalles:</strong> {successData.message}
          </p>
          {successData.attachedPhotos.length > 0 && (
            <div className="pt-2">
              <span className="font-mono text-[11px] uppercase text-[#D4A359] block mb-2">
                {locale === "es"
                  ? "Fotografías pre-seleccionadas en tu ficha:"
                  : "Fotografies pre-seleccionades en la teua fitxa:"}
              </span>
              <div className="flex flex-wrap gap-3">
                {successData.attachedPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.previewUrl}
                      alt={photo.name}
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                    <span className="font-mono text-[11px]">
                      {photo.name} ({photo.sizeKb} KB)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 rounded-2xl border border-[#D4A359]/45 bg-[#D4A359]/10 text-xs text-[#EDE6DA] leading-relaxed">
          {locale === "es"
            ? "Pulsa el siguiente botón para abrir WhatsApp con tu número de referencia ya preparado y enviar las fotografías directamente a Carlos:"
            : "Prem el botó següent per obrir WhatsApp amb el teu número de referència i enviar les fotografies a Carlos:"}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${
              BUSINESS_INFO.whatsappNumber
            }?text=${encodeURIComponent(
              `Hola Carlos, acabo de registrar la solicitud ${successData.referenceCode} en la web de A.C.D. Carlos Soriano.\n• Nombre: ${successData.fullName}\n• Pieza: ${successData.pieceType}\n• Detalles: ${successData.message}${
                successData.attachedPhotos.length > 0
                  ? `\n• Fotos preparadas: ${successData.attachedPhotos
                      .map((p) => p.name)
                      .join(", ")}`
                  : ""
              }\nTe adjunto las fotografías a continuación:`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-12 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#D4A359] text-[#14100E] font-semibold hover:bg-[#E2B56D] transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "Enviar fotografías ahora por WhatsApp"
                : "Enviar fotografies ara per WhatsApp"}
            </span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              setMessage("");
              setAttachedPhotos([]);
            }}
            className="min-h-12 px-5 py-3.5 rounded-full border border-white/25 text-[#EDE6DA] hover:bg-white/10 transition-colors font-mono text-xs uppercase tracking-wider cursor-pointer"
          >
            {locale === "es" ? "Enviar otra consulta" : "Enviar una altra consulta"}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="flex items-center justify-between border-b border-white/12 pb-4">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2]">
            {locale === "es"
              ? "Solicitud de Valoración Técnica / Cita Previa"
              : "Sol·licitud de Valoració Tècnica / Cita Prèvia"}
          </h3>
          <p className="text-xs text-[#C7BCAE] mt-0.5">
            {locale === "es"
              ? "Respuesta directa desde el taller de C/ Arquitecto Arnau, 61 (Benimaclet)"
              : "Resposta directa des del taller del C/ Arquitecto Arnau, 61 (Benimaclet)"}
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#D4A359] uppercase px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
          FICHA DE TALLER
        </span>
      </div>

      {hasPrefill && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="p-3.5 rounded-2xl bg-[#D4A359]/15 border border-[#D4A359] text-xs text-[#FAF7F2] flex items-center gap-2"
        >
          <Sparkles
            className="w-4 h-4 text-[#D4A359] shrink-0"
            aria-hidden="true"
          />
          <span>
            {locale === "es"
              ? "Ficha técnica pre-cargada con tu selección:"
              : "Fitxa tècnica pre-carregada amb la teua selecció:"}{" "}
            <strong>{pieceType}</strong>
          </span>
        </motion.div>
      )}

      {generalError && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-[#451A1A] border border-[#EF4444] text-xs text-[#FCA5A5] flex items-start gap-2.5"
        >
          <AlertCircle
            className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span>{generalError}</span>
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_trap">No rellenar este campo</label>
        <input
          id="website_trap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={websiteTrap}
          onChange={(e) => setWebsiteTrap(e.target.value)}
        />
      </div>

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es" ? "Nombre y apellidos *" : "Nom i cognoms *"}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ej. Carmen Llopis"
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? "err-fullName" : undefined}
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm placeholder:text-[#78716C] focus:border-[#D4A359] focus:outline-none transition-colors"
          />
          {fieldErrors.fullName && (
            <p id="err-fullName" className="text-xs text-[#F87171] mt-1">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es"
              ? "Teléfono móvil (WhatsApp) *"
              : "Telèfon mòbil (WhatsApp) *"}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ej. 670 41 80 08"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "err-phone" : undefined}
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm placeholder:text-[#78716C] focus:border-[#D4A359] focus:outline-none transition-colors"
          />
          {fieldErrors.phone && (
            <p id="err-phone" className="text-xs text-[#F87171] mt-1">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Neighborhood */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es"
              ? "Correo electrónico (Opcional)"
              : "Correu electrònic (Opcional)"}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nombre@ejemplo.es"
            aria-invalid={Boolean(fieldErrors.email)}
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm placeholder:text-[#78716C] focus:border-[#D4A359] focus:outline-none transition-colors"
          />
          {fieldErrors.email && (
            <p className="text-xs text-[#F87171] mt-1">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="neighborhoodOrCity"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es"
              ? "Barrio o municipio en Valencia"
              : "Barri o municipi a València"}
          </label>
          <input
            id="neighborhoodOrCity"
            name="neighborhoodOrCity"
            type="text"
            value={neighborhoodOrCity}
            onChange={(e) => setNeighborhoodOrCity(e.target.value)}
            placeholder="Ej. Benimaclet, El Pla del Real, Alboraia..."
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm placeholder:text-[#78716C] focus:border-[#D4A359] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Piece Type & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="pieceType"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es"
              ? "Tipo de pieza o encargo *"
              : "Tipus de peça o encàrrec *"}
          </label>
          <input
            id="pieceType"
            name="pieceType"
            type="text"
            required
            value={pieceType}
            onChange={(e) => setPieceType(e.target.value)}
            aria-invalid={Boolean(fieldErrors.pieceType)}
            aria-describedby={fieldErrors.pieceType ? "err-piecetype" : undefined}
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm focus:border-[#D4A359] focus:outline-none transition-colors"
          />
          {fieldErrors.pieceType && (
            <p id="err-piecetype" className="text-xs text-[#F87171] mt-1">
              {fieldErrors.pieceType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="preferredContact"
            className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
          >
            {locale === "es"
              ? "Preferencia de respuesta"
              : "Preferència de resposta"}
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={preferredContact}
            onChange={(e) => setPreferredContact(e.target.value)}
            className="w-full min-h-12 px-4 py-2.5 rounded-2xl bg-[#181512] border border-white/15 text-[#FAF7F2] text-sm focus:border-[#D4A359] focus:outline-none"
          >
            <option value="WhatsApp (para adjuntar fotografías)">
              {locale === "es"
                ? "WhatsApp (para adjuntar fotografías)"
                : "WhatsApp (per adjuntar fotografies)"}
            </option>
            <option value="Llamada telefónica">
              {locale === "es" ? "Llamada telefónica" : "Telefonada"}
            </option>
            <option value="Cita presencial en C/ Arquitecto Arnau, 61 (Benimaclet)">
              {locale === "es"
                ? "Cita presencial en C/ Arquitecto Arnau, 61 (Benimaclet)"
                : "Cita presencial al C/ Arquitecto Arnau, 61 (Benimaclet)"}
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Quick Pathology Tags + Description */}
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-wider text-[#EDE6DA] mb-1.5"
        >
          {locale === "es"
            ? "Descripción de la pieza, medidas aproximadas o consulta *"
            : "Descripció de la peça, mides aproximades o consulta *"}
        </label>

        {/* Quick Technical Symptom Chips */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {(locale === "es"
            ? [
                "Orificios o serrín de carcoma",
                "Encolado de patas o cajones",
                "Barniz desgastado / manchas",
                "Chapa de madera levantada",
                "Tapicería o rejilla rota",
                "Encargo de ebanistería a medida",
              ]
            : [
                "Orificis o serradures de corc",
                "Encolat de potes o calaixos",
                "Vernís desgastat / taques",
                "Xapa de fusta alçada",
                "Tapisseria o reixeta trencada",
                "Encàrrec d'ebenisteria a mida",
              ]
          ).map((symptom) => (
            <button
              key={symptom}
              type="button"
              onClick={() =>
                setMessage((prev) =>
                  prev.includes(symptom)
                    ? prev
                    : prev.trim().length > 0
                    ? `${prev.trim()} · ${symptom}.`
                    : `${symptom}. `
                )
              }
              className="px-2.5 py-1 rounded-full bg-white/[0.06] hover:bg-[#D4A359]/25 border border-white/12 hover:border-[#D4A359] text-[11px] font-mono text-[#EDE6DA] transition-colors cursor-pointer"
            >
              + {symptom}
            </button>
          ))}
        </div>

        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntanos qué mueble quieres restaurar (tipo de mueble, estado actual, si presenta carcoma, holgura o desgaste de barniz, medidas aproximadas)..."
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "err-message" : undefined}
          className="w-full p-4 rounded-2xl bg-black/40 border border-white/15 text-[#FAF7F2] text-sm placeholder:text-[#78716C] focus:border-[#D4A359] focus:outline-none transition-colors"
        />
        {fieldErrors.message && (
          <p id="err-message" className="text-xs text-[#F87171] mt-1">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Optional Photo Attachment with Instant Preview (Up to 2 images) */}
      <div className="rounded-2xl bg-black/35 border border-dashed border-white/20 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#D4A359] flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" aria-hidden="true" />
              {locale === "es"
                ? "Pre-adjuntar fotografías de la pieza (Opcional · Máx. 2)"
                : "Pre-adjuntar fotografies de la peça (Opcional · Màx. 2)"}
            </span>
            <p className="text-[11px] text-[#C7BCAE] mt-0.5">
              {locale === "es"
                ? "Selecciona hasta 2 fotos (plano general y detalle) para vincularlas a tu referencia de valoración."
                : "Selecciona fins a 2 fotos (pla general i detall) per vincular-les a la teua referència."}
            </p>
          </div>

          {attachedPhotos.length < 2 && (
            <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-[#D4A359] hover:text-[#14100E] text-[#FAF7F2] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer self-start sm:self-auto shrink-0">
              <Camera className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {locale === "es" ? "Seleccionar foto" : "Seleccionar foto"}
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoSelect}
                className="sr-only"
              />
            </label>
          )}
        </div>

        {attachedPhotos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {attachedPhotos.map((photo, index) => (
              <div
                key={`${photo.name}-${index}`}
                className="flex items-center justify-between gap-2.5 p-2 rounded-xl bg-white/[0.06] border border-white/12"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.previewUrl}
                    alt={photo.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0 ring-1 ring-[#D4A359]/50"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-[#FAF7F2] font-medium truncate">
                      {photo.name}
                    </p>
                    <p className="font-mono text-[10px] text-[#D4A359]">
                      {photo.sizeKb} KB · Lista para revisión
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  aria-label={`Quitar foto ${photo.name}`}
                  className="p-1.5 rounded-full hover:bg-white/15 text-[#C7BCAE] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer text-xs text-[#C7BCAE]">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#D4A359]"
          />
          <span>
            {locale === "es" ? (
              <>
                He leído y acepto la{" "}
                <Link
                  href="/privacidad"
                  className="text-[#D4A359] underline hover:text-white"
                >
                  Política de Privacidad
                </Link>{" "}
                para que A.C.D. Carlos Soriano gestione mi solicitud de
                valoración o cita previa. *
              </>
            ) : (
              <>
                He llegit i accepte la{" "}
                <Link
                  href="/privacidad"
                  className="text-[#D4A359] underline hover:text-white"
                >
                  Política de Privacitat
                </Link>{" "}
                perquè A.C.D. Carlos Soriano gestione la meua sol·licitud. *
              </>
            )}
          </span>
        </label>
        {fieldErrors.privacyAccepted && (
          <p className="text-xs text-[#F87171] mt-1">
            {fieldErrors.privacyAccepted}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-13 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#D4A359] text-[#14100E] font-semibold hover:bg-[#E2B56D] disabled:opacity-60 transition-colors font-mono text-xs uppercase tracking-wider shadow-lg cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "Registrando solicitud en el servidor..."
                : "Registrant sol·licitud al servidor..."}
            </span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>
              {locale === "es"
                ? "Registrar Solicitud de Valoración"
                : "Registrar Sol·licitud de Valoració"}
            </span>
          </>
        )}
      </motion.button>

      {/* Primera Capa Informativa RGPD / art. 11 LOPDGDD (Obligatoria en España) */}
      <div
        aria-label="Información básica sobre protección de datos (Primera capa RGPD)"
        className="mt-4 rounded-2xl bg-black/40 border border-white/10 p-4 text-[11px] text-[#B8AFA3] space-y-1.5 leading-relaxed"
      >
        <p className="font-mono uppercase text-[10px] tracking-wider text-[#D4A359] font-semibold">
          {locale === "es"
            ? "Información Básica sobre Protección de Datos (Art. 13 RGPD y Art. 11 LOPDGDD)"
            : "Informació Bàsica sobre Protecció de Dades (Art. 13 RGPD i Art. 11 LOPDGDD)"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          <p>
            <strong className="text-[#EDE6DA]">
              {locale === "es" ? "Responsable:" : "Responsable:"}
            </strong>{" "}
            {BUSINESS_INFO.founder} ({BUSINESS_INFO.name})
          </p>
          <p>
            <strong className="text-[#EDE6DA]">
              {locale === "es" ? "Finalidad:" : "Finalitat:"}
            </strong>{" "}
            {locale === "es"
              ? "Atender tu solicitud de valoración técnica, presupuesto o cita previa."
              : "Atendre la teua sol·licitud de valoració tècnica, pressupost o cita prèvia."}
          </p>
          <p>
            <strong className="text-[#EDE6DA]">
              {locale === "es" ? "Legitimación:" : "Legitimació:"}
            </strong>{" "}
            {locale === "es"
              ? "Consentimiento del interesado (art. 6.1.a RGPD) y medidas precontractuales (art. 6.1.b RGPD)."
              : "Consentiment de l'interessat (art. 6.1.a RGPD) i mesures precontractuals (art. 6.1.b RGPD)."}
          </p>
          <p>
            <strong className="text-[#EDE6DA]">
              {locale === "es" ? "Destinatarios:" : "Destinataris:"}
            </strong>{" "}
            {locale === "es"
              ? "No se cederán datos a terceros salvo obligación legal."
              : "No es cediran dades a tercers excepte obligació legal."}
          </p>
        </div>
        <p>
          <strong className="text-[#EDE6DA]">
            {locale === "es"
              ? "Derechos e info adicional:"
              : "Drets i informació addicional:"}
          </strong>{" "}
          {locale === "es" ? (
            <>
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              oposición, limitación y portabilidad escribiendo a{" "}
              <span className="font-mono text-[#EDE6DA]">
                {BUSINESS_INFO.email}
              </span>
              . Consulta la segunda capa detallada en nuestra{" "}
              <Link
                href="/privacidad"
                className="underline text-[#D4A359] hover:text-white"
              >
                Política de Privacidad
              </Link>{" "}
              y las{" "}
              <Link
                href="/condiciones-servicio"
                className="underline text-[#D4A359] hover:text-white"
              >
                Condiciones de Servicio y Garantías
              </Link>
              .
            </>
          ) : (
            <>
              Pots exercir els teus drets d&apos;accés, rectificació, supressió,
              oposició, limitació i portabilitat escrivint a{" "}
              <span className="font-mono text-[#EDE6DA]">
                {BUSINESS_INFO.email}
              </span>
              . Consulta la segona capa detallada en la nostra{" "}
              <Link
                href="/privacidad"
                className="underline text-[#D4A359] hover:text-white"
              >
                Política de Privacitat
              </Link>{" "}
              i les{" "}
              <Link
                href="/condiciones-servicio"
                className="underline text-[#D4A359] hover:text-white"
              >
                Condicions de Servei i Garanties
              </Link>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}

export function ContactSection() {
  const { locale, prefill } = useLanguage();

  const directWhatsappUrl = `https://wa.me/${
    BUSINESS_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    "Hola Carlos, te escribo desde la web de A.C.D. Carlos Soriano para concertar una cita o valorar la restauración de un mueble."
  )}`;

  return (
    <section
      id="solicitar-valoracion"
      className="relative overflow-hidden border-b border-white/10 bg-[#14100E] text-[#FAF7F2] scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[38rem] h-[38rem] rounded-full bg-radial from-[#D4A359]/15 to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Workshop Protocol (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 mb-4">
                <Sparkles
                  className="w-3.5 h-3.5 text-[#D4A359]"
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D4A359]">
                  {locale === "es"
                    ? "07 · CONTACTO Y CITA PREVIA EN EL TALLER"
                    : "07 · CONTACTE I CITA PRÈVIA AL TALLER"}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF7F2] leading-[1.08] tracking-tight">
                {locale === "es"
                  ? "Hablemos de tu mueble o concierta una cita en C/ Arquitecto Arnau, 61."
                  : "Parlem del teu moble o concerta una cita al C/ Arquitecto Arnau, 61."}
              </h2>
              <p className="text-base text-[#C7BCAE] mt-4 leading-relaxed">
                {locale === "es"
                  ? "Carlos Soriano atiende personalmente cada consulta. Puedes completar la ficha técnica para registrar tu solicitud o enviarnos directamente fotografías por WhatsApp."
                  : "Carlos Soriano atén personalment cada consulta. Pots completar la fitxa tècnica o enviar-nos fotografies per WhatsApp."}
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <motion.a
                whileHover={{ y: -3 }}
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-3xl border border-[#D4A359]/60 bg-gradient-to-br from-[#D4A359]/20 to-white/[0.03] hover:border-[#D4A359] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#D4A359]">
                    {locale === "es"
                      ? "VÍA RÁPIDA · ENVÍO DE FOTOS"
                      : "VIA RÀPIDA · ENVIAMENT DE FOTOS"}
                  </span>
                  <MessageCircle
                    className="w-5 h-5 text-[#D4A359]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-serif text-2xl text-[#FAF7F2] mt-1">
                  WhatsApp Directo · {BUSINESS_INFO.phoneDisplay}
                </p>
                <p className="text-xs text-[#C7BCAE] mt-1">
                  {locale === "es"
                    ? "Ideal para adjuntar 2 o 3 fotos de tu mueble (plano general y detalle) y recibir orientación inicial."
                    : "Ideal per adjuntar 2 o 3 fotos del teu moble i rebre orientació inicial."}
                </p>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={`tel:${BUSINESS_INFO.phoneE164}`}
                className="block p-6 rounded-3xl border border-white/12 bg-white/[0.04] hover:border-[#D4A359]/60 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C7BCAE]">
                    {locale === "es"
                      ? "ATENCIÓN TELEFÓNICA · CITA PREVIA"
                      : "ATENCIÓ TELEFÒNICA · CITA PRÈVIA"}
                  </span>
                  <Phone
                    className="w-4 h-4 text-[#D4A359]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-serif text-2xl text-[#FAF7F2] mt-1">
                  +34 {BUSINESS_INFO.phoneDisplay}
                </p>
                <p className="text-xs text-[#C7BCAE] mt-1">
                  {locale === "es"
                    ? BUSINESS_INFO.schedule.es
                    : BUSINESS_INFO.schedule.va}
                </p>
              </motion.a>

              <div className="p-6 rounded-3xl border border-white/12 bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C7BCAE]">
                    {locale === "es"
                      ? "DIRECCIÓN DEL TALLER"
                      : "ADREÇA DEL TALLER"}
                  </span>
                  <MapPin
                    className="w-4 h-4 text-[#D4A359]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-serif text-xl text-[#FAF7F2] mt-1">
                  {BUSINESS_INFO.streetAddress}
                </p>
                <p className="text-xs text-[#C7BCAE] mt-1">
                  {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city} (
                  {BUSINESS_INFO.Neighborhood})
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Server-Validated Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="lg:col-span-7 rounded-[2.25rem] bg-white/[0.05] backdrop-blur-2xl border border-white/15 p-6 sm:p-9 lg:p-10 shadow-2xl"
          >
            <ContactFormInner
              key={prefill.version || 0}
              locale={locale}
              prefill={prefill}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
