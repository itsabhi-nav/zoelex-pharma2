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

/**
 * Resolve the public URL for the current deployment so that Open Graph /
 * Twitter images always resolve on the domain the link is actually shared
 * from. Set NEXT_PUBLIC_SITE_URL to override (for example, when the custom
 * domain is connected).
 */
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.URL
        ? process.env.URL
        : process.env.DEPLOY_PRIME_URL
          ? process.env.DEPLOY_PRIME_URL
          : process.env.CF_PAGES_URL
            ? process.env.CF_PAGES_URL
            : site.url)
).replace(/\/$/, "");

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Zoelex Pharma — contract and private-label nutraceutical manufacturing in Pune, India.",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "Zoelex Pharma — Nutraceutical Contract Manufacturing",
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoelex Pharma — Nutraceutical Contract Manufacturing",
    description: site.description,
    images: [ogImage.url],
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
    url: siteUrl,
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
    sameAs: [siteUrl],
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
