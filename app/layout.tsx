import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import SmoothScroll from "@/components/smooth-scroll";
import WhatsAppFab from "@/components/ui/whatsapp-fab";
import { site } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zoelex Pharma — Nutraceutical Contract Manufacturing",
    template: "%s — Zoelex Pharma",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "nutraceutical manufacturing",
    "contract manufacturing",
    "private label supplements",
    "vegan gummies manufacturer",
    "oral thin films",
    "softgels",
    "liposomal formulations",
    "Pune",
    "India",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Zoelex Pharma — Nutraceutical Contract Manufacturing",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoelex Pharma — Nutraceutical Contract Manufacturing",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 1, S. No. 50/15/1, Samarth Sankul, Dhayari",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411041",
      addressCountry: "IN",
    },
    sameAs: [site.website],
  };

  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${interTight.variable} ${plexMono.variable}`}
    >
      <body>
        <noscript>
          <style>{`
            [style*="opacity"] { opacity: 1 !important; }
            [style*="transform"] { transform: none !important; }
            [style*="clip-path"] { clip-path: none !important; }
          `}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div id="top" />
        <SmoothScroll />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
        </MotionProvider>
        <div className="grain" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
