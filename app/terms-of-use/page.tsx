import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { legal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the Zoelex Pharma website and its content.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalPage content={legal.terms} />;
}
