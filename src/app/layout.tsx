import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BUSINESS_INFO } from "@/data/business";
import { CookieConsent } from "@/components/CookieConsent";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruzafavintage.es"),
  title: {
    default:
      "Ruzafa Vintage | Restauración de Muebles y Lámparas de Araña en Valencia",
    template: "%s | Ruzafa Vintage · Taller de Restauración en València",
  },
  description:
    "Taller artesanal de restauración de muebles de los años 50, 60, 70 y 80 y recuperación y electrificación de lámparas de araña en Carrer de Puerto Rico, 33 (Ruzafa, València). Dirigido por María José Martínez. Cita previa: 657 19 12 24.",
  keywords: [
    "restauración de muebles Valencia",
    "restauración de lámparas de araña Valencia",
    "Ruzafa Vintage",
    "taller de restauración Ruzafa",
    "mobiliario mid-century Valencia",
    "restaurar aparador años 60 Valencia",
    "electrificación lámparas antiguas Valencia",
    "María José Martínez restauradora Valencia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ruzafavintage.es",
    siteName: "Ruzafa Vintage · Taller de Restauración en València",
    title:
      "Ruzafa Vintage | Restauración de Muebles Mid-Century y Lámparas de Araña en Valencia",
    description:
      "Devolvemos la luz y el alma a tus lámparas de araña y mobiliario de los años 50 a 80 en nuestro taller de Carrer de Puerto Rico, 33 (Ruzafa, València).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://ruzafavintage.es/#localbusiness",
    name: BUSINESS_INFO.name,
    description:
      "Taller artesanal especializado en restauración de mobiliario de las décadas de 1950 a 1980, recuperación y electrificación de lámparas de araña clásicas y personalización de piezas en el barrio de Ruzafa, Valencia.",
    url: "https://ruzafavintage.es",
    telephone: BUSINESS_INFO.phoneE164,
    email: BUSINESS_INFO.email,
    founder: {
      "@type": "Person",
      name: BUSINESS_INFO.founder,
      jobTitle: BUSINESS_INFO.role,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.streetAddress,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.province,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: BUSINESS_INFO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    areaServed: [
      { "@type": "City", name: "València" },
      { "@type": "Place", name: "Ruzafa (Russafa)" },
      { "@type": "Place", name: "L'Eixample, València" },
      { "@type": "Place", name: "Ciutat Vella, València" },
      { "@type": "City", name: "Alboraia" },
      { "@type": "City", name: "Paterna" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F4EE] text-[#1C1917]">
        <LanguageProvider>
          <a
            href="#contenido-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1C1917] focus:text-[#F7F4EE] focus:font-mono focus:text-xs"
          >
            Saltar al contenido principal
          </a>
          {children}
          <FloatingWhatsApp />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
