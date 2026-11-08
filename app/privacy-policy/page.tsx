import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { legal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zoelex Pharma handles information submitted through website enquiries.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return <LegalPage content={legal.privacy} />;
}
