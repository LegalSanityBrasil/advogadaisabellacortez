import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Isabella Cortez Advocacia | Soluções Jurídicas para Pessoas e Empresas",
    template: "%s | Isabella Cortez Advocacia",
  },
  description:
    "Advocacia previdenciária, trabalhista e empresarial com atendimento humanizado, transparente e online. Fale agora com a Dra. Isabella Cortez pelo WhatsApp.",
  keywords: [
    "advogada",
    "advocacia previdenciária",
    "advocacia trabalhista",
    "advocacia empresarial",
    "aposentadoria",
    "revisão de benefício",
    "consultoria jurídica",
  ],
  authors: [{ name: "Isabella Cortez" }],
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Isabella Cortez Advocacia",
    title: "Isabella Cortez Advocacia | Soluções Jurídicas para Pessoas e Empresas",
    description:
      "Atendimento jurídico personalizado, transparente e online em Direito Previdenciário, Trabalhista e Empresarial.",
    images: [
      {
        url: "/logo-full.png",
        width: 900,
        height: 900,
        alt: "Isabella Cortez Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabella Cortez Advocacia",
    description:
      "Soluções jurídicas com atendimento humanizado para pessoas e empresas.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Isabella Cortez",
  image: `${SITE_URL}/logo-full.png`,
  url: SITE_URL,
  priceRange: "$$",
  areaServed: "BR",
  identifier: "OAB/SP 525.315",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Direito Previdenciário",
    "Direito Trabalhista",
    "Direito Empresarial",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
