import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/common/FloatingCTA";
import { CLINIC_CONFIG } from "@/config/clinic.config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_CONFIG.domain),
  title: {
    default: "NeoDental Clinic — Dental Care & In-House Laboratory in Eastleigh, Nairobi",
    template: "%s | NeoDental Clinic",
  },
  description:
    "Official website of NeoDental Clinic on 14th Street, 1st Avenue, Eastleigh, Nairobi. Providing emergency pain relief, root canals, Gold & Silver crowns, tooth restorations, and on-site dental laboratory craftsmanship.",
  keywords: [
    "NeoDental Clinic",
    "Dentist in Eastleigh",
    "Dental Clinic Eastleigh Nairobi",
    "Root canal treatment Nairobi",
    "Gold crowns Nairobi",
    "Silver crowns Eastleigh",
    "Dental laboratory Eastleigh",
    "Emergency toothache relief Nairobi",
    "Dental implants Eastleigh",
  ],
  authors: [{ name: "NeoDental Clinic" }],
  creator: "NeoDental Clinic",
  publisher: "NeoDental Clinic",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "NeoDental Clinic — Dental Care & Laboratory in Eastleigh, Nairobi",
    description:
      "Modern dental care, patient education, 3D tooth visualization, and in-house laboratory craftsmanship in Eastleigh, Nairobi. Open daily 9:00 AM — 7:00 PM.",
    url: CLINIC_CONFIG.domain,
    siteName: "NeoDental Clinic",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: `${CLINIC_CONFIG.domain}/logo.png`,
        width: 800,
        height: 600,
        alt: "NeoDental Clinic Logo",
      },
    ],
  },
  applicationName: "NeoDental Clinic",
  appleWebApp: {
    capable: true,
    title: "NeoDental",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_CONFIG.name,
    image: `${CLINIC_CONFIG.domain}/logo.png`,
    "@id": CLINIC_CONFIG.domain,
    url: CLINIC_CONFIG.domain,
    telephone: [
      CLINIC_CONFIG.contact.primaryPhoneTel,
      CLINIC_CONFIG.contact.secondaryPhoneTel,
    ],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_CONFIG.location.address,
      addressLocality: CLINIC_CONFIG.location.area,
      addressRegion: CLINIC_CONFIG.location.city,
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_CONFIG.location.coordinates.latitude,
      longitude: CLINIC_CONFIG.location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Endodontics",
      "Prosthodontics",
      "Orthodontics",
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="NeoDental" />
        <meta name="application-name" content="NeoDental Clinic" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen text-neo-dark bg-white font-sans selection:bg-neo-red selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
