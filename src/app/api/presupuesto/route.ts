import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface AttachedPhotoMeta {
  name: string;
  sizeKb: number;
}

interface LeadPayload {
  fullName: string;
  phone: string;
  email?: string;
  neighborhoodOrCity?: string;
  pieceType: string;
  decadeOrMaterial?: string;
  interventionScope?: string;
  preferredContact?: string;
  message: string;
  attachedPhotos?: AttachedPhotoMeta[];
  privacyAccepted: boolean;
  website_trap?: string;
}

// Basic in-memory rate limit map per IP to prevent rapid repeat spam
const recentSubmissions = new Map<string, number>();

function sanitizeText(input: unknown, maxLen = 1000): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "local-client";

    const now = Date.now();
    const lastTime = recentSubmissions.get(ip) || 0;
    if (now - lastTime < 8000) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Ya hemos recibido una solicitud hace unos segundos. Por favor, espera unos instantes antes de volver a enviar.",
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<LeadPayload>;

    // Honeypot check
    if (body.website_trap && body.website_trap.trim().length > 0) {
      return NextResponse.json(
        { ok: false, error: "Detección anti-spam activada." },
        { status: 400 }
      );
    }

    const fullName = sanitizeText(body.fullName, 120);
    const phone = sanitizeText(body.phone, 40);
    const email = sanitizeText(body.email, 120);
    const neighborhoodOrCity = sanitizeText(body.neighborhoodOrCity, 120);
    const pieceType = sanitizeText(body.pieceType, 180);
    const decadeOrMaterial = sanitizeText(body.decadeOrMaterial, 180);
    const interventionScope = sanitizeText(body.interventionScope, 240);
    const preferredContact = sanitizeText(body.preferredContact, 80);
    const message = sanitizeText(body.message, 2000);
    const privacyAccepted = Boolean(body.privacyAccepted);

    const attachedPhotos: AttachedPhotoMeta[] = Array.isArray(
      body.attachedPhotos
    )
      ? body.attachedPhotos.slice(0, 2).map((item) => ({
          name: sanitizeText(item?.name, 100) || "foto-pieza.jpg",
          sizeKb:
            typeof item?.sizeKb === "number" && Number.isFinite(item.sizeKb)
              ? Math.max(1, Math.min(20000, Math.round(item.sizeKb)))
              : 0,
        }))
      : [];

    // Server-side validation
    const errors: Record<string, string> = {};

    if (fullName.length < 2) {
      errors.fullName = "Por favor, indica tu nombre completo.";
    }

    const phoneClean = phone.replace(/[\s\-().]/g, "");
    const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
    if (!phoneRegex.test(phoneClean)) {
      errors.phone =
        "Introduce un teléfono válido de España (9 dígitos, ej. 657 19 12 24).";
    }

    if (email.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "El formato del correo electrónico no es válido.";
      }
    }

    if (pieceType.length < 2) {
      errors.pieceType =
        "Selecciona qué tipo de mueble o lámpara deseas valorar.";
    }

    if (message.length < 10) {
      errors.message =
        "Cuéntanos brevemente qué pieza tienes o qué intervención necesitas (mínimo 10 caracteres).";
    }

    if (!privacyAccepted) {
      errors.privacyAccepted =
        "Debes aceptar la política de privacidad para que podamos tratar tu solicitud.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Revisa los campos marcados en el formulario.",
          fieldErrors: errors,
        },
        { status: 422 }
      );
    }

    recentSubmissions.set(ip, now);

    const referenceCode = `RV-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const record = {
      referenceCode,
      createdAt: new Date().toISOString(),
      fullName,
      phone,
      email: email || null,
      neighborhoodOrCity: neighborhoodOrCity || "Valencia",
      pieceType,
      decadeOrMaterial: decadeOrMaterial || "Por determinar en taller",
      interventionScope: interventionScope || "Valoración técnica general",
      preferredContact: preferredContact || "WhatsApp o llamada",
      message,
      attachedPhotos,
      privacyAccepted,
    };

    // 1. Persist locally in server storage (`data/solicitudes-presupuesto.json`)
    let persistedLocally = false;
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "solicitudes-presupuesto.json");
      let existing: unknown[] = [];
      try {
        const raw = await fs.readFile(filePath, "utf8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) existing = parsed;
      } catch {
        existing = [];
      }
      existing.unshift(record);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
      persistedLocally = true;
    } catch {
      persistedLocally = false;
    }

    // 2. Optional External Notification (Webhook or Resend API if configured in .env)
    let externalNotificationSent = false;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "info@ruzafavintage.es";

    if (webhookUrl) {
      try {
        const resp = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
        externalNotificationSent = resp.ok;
      } catch {
        externalNotificationSent = false;
      }
    } else if (resendApiKey) {
      try {
        const resp = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Ruzafa Vintage Web <onboarding@resend.dev>",
            to: [notificationEmail],
            subject: `[${referenceCode}] Nueva solicitud de valoración: ${pieceType} (${fullName})`,
            text: `Referencia: ${referenceCode}\nNombre: ${fullName}\nTeléfono: ${phone}\nEmail: ${email}\nZona: ${neighborhoodOrCity}\nPieza: ${pieceType}\nMaterial/Época: ${decadeOrMaterial}\nIntervención: ${interventionScope}\nFotos pre-seleccionadas: ${
              attachedPhotos.length > 0
                ? attachedPhotos.map((p) => `${p.name} (${p.sizeKb} KB)`).join(", ")
                : "Ninguna"
            }\nMensaje:\n${message}`,
          }),
        });
        externalNotificationSent = resp.ok;
      } catch {
        externalNotificationSent = false;
      }
    }

    return NextResponse.json(
      {
        ok: true,
        referenceCode,
        persistedLocally,
        externalNotificationSent,
        summary: record,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No se ha podido procesar la solicitud en este momento. Puedes escribirnos directamente por WhatsApp al +34 657 19 12 24.",
      },
      { status: 500 }
    );
  }
}
