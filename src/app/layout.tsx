import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BUSINESS_INFO, FAQS } from "@/data/business";
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
  metadataBase: new URL("https://carlossorianorestauracion.es"),
  title: {
    default:
      "A.C.D. Carlos Soriano | Restauración de Muebles, Ebanistería y Antigüedades en Valencia",
    template: "%s | A.C.D. Carlos Soriano · Ebanistería y Restauración en València",
  },
  description:
    "Taller artesanal de restauración de muebles antiguos, ebanistería, tratamientos contra carcoma y tapicería en Calle Arquitecto Arnau, 61 (Benimaclet, València). Dirigido por el maestro ebanista Carlos Soriano. Presupuestos: 670 41 80 08.",
  keywords: [
    "restauración de muebles Valencia",
    "ebanistería Valencia",
    "Carlos Soriano restaurador Valencia",
    "A.C.D. Carlos Soriano Benimaclet",
    "tratamiento carcoma muebles Valencia",
    "barnizado a muñequilla goma laca Valencia",
    "tapicería y restauración de sillas Valencia",
    "restauración de antigüedades Valencia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://carlossorianorestauracion.es",
    siteName: "A.C.D. Carlos Soriano · Restauración y Ebanistería en València",
    title:
      "A.C.D. Carlos Soriano | Maestro Ebanista y Restauración de Muebles en Valencia",
    description:
      "Devolvemos la vida a tus muebles antiguos, sillería y maderas nobles en nuestro taller de C/ Arquitecto Arnau, 61 (Benimaclet, València). Tel/WhatsApp: 670 41 80 08.",
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
    "@graph": [
      {
        "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": "https://carlossorianorestauracion.es/#localbusiness",
        name: BUSINESS_INFO.name,
        description:
          "Taller maestro de restauración de muebles antiguos y clásicos, ebanistería artesanal, tratamientos curativos contra carcoma y xilófagos, y tapicería tradicional en Benimaclet, Valencia.",
        url: "https://carlossorianorestauracion.es",
        telephone: BUSINESS_INFO.phoneE164,
        email: BUSINESS_INFO.email,
        priceRange: "€€",
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
          { "@type": "Place", name: "Benimaclet, València" },
          { "@type": "Place", name: "El Pla del Real, València" },
          { "@type": "Place", name: "L'Eixample, València" },
          { "@type": "Place", name: "Ciutat Vella, València" },
          { "@type": "City", name: "Alboraia" },
          { "@type": "City", name: "Godella" },
          { "@type": "City", name: "Paterna" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:30",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "16:30",
            closes: "20:00",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://carlossorianorestauracion.es/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.questionEs,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answerEs,
          },
        })),
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
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1A1412]">
        <LanguageProvider>
          <a
            href="#contenido-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A1412] focus:text-[#FAF7F2] focus:font-mono focus:text-xs"
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
