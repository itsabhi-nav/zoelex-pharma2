import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { Reveal } from "@/components/ui/reveal";
import Accordion from "@/components/ui/accordion";
import ContactForm from "@/components/contact-form";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss contract manufacturing, private label or a custom formulation with Zoelex Pharma. Enquiries answered within 24–48 hours.",
};

const contactRows = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: site.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            Start a <span className="text-ember">product enquiry.</span>
          </>
        }
        lede="Ask about contract manufacturing, private label or a custom formulation. Share a few details and our team will respond within 24–48 hours with options and a quote."
        image={{
          src: "/images/liquid-splash.jpg",
          alt: "Dark amber liquid splashing in low light",
        }}
        imageClassName="img-warm"
        imageCaption="Illustrative imagery."
        meta={[
          { label: "Response time", value: "24–48 hours" },
          { label: "Phone / WhatsApp", value: site.phone },
          { label: "Email", value: site.email },
          { label: "Hours", value: "Mon–Sat, 9:30–18:30 IST" },
        ]}
      />

      <section className="surface-bone py-14 md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="min-h-[560px] animate-pulse border border-[var(--line)] bg-bone-2/40" />
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="surface-dark border border-[var(--line-light)] bg-ink p-7 lg:sticky lg:top-28">
                <p className="mono-micro text-ember">Contact Zoelex Pharma</p>
                <h2 className="display mt-3 text-[clamp(1.8rem,3vw,2.4rem)] leading-[0.98] text-bone">
                  A direct line to the team.
                </h2>

                <div className="mt-7 space-y-5 border-t border-[var(--line-light)] pt-6">
                  {contactRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <a
                        key={row.label}
                        href={row.href}
                        {...(row.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-start gap-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--line-light)] text-bone/55">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="mono-micro block text-bone/40">
                            {row.label}
                          </span>
                          <span className="mt-1 block text-sm text-bone/80 transition-colors group-hover:text-ember">
                            {row.value}
                          </span>
                        </span>
                      </a>
                    );
                  })}

                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--line-light)] text-bone/55">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="mono-micro block text-bone/40">
                        Office
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-bone/70">
                        {site.address.line1}
                        <br />
                        {site.address.line2}
                        <br />
                        {site.address.line3}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--line-light)] text-bone/55">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="mono-micro block text-bone/40">
                        Business hours
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-bone/70">
                        {site.hours}
                      </span>
                    </span>
                  </div>
                </div>

                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-between border border-[var(--line-light)] px-4 py-3 text-sm text-bone/70 transition-colors hover:border-ember hover:text-ember"
                >
                  Find us on maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <p className="mt-5 text-[12px] leading-relaxed text-bone/40">
                  To help us prepare, include your preferred format, ingredients,
                  target market and estimated quantity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-bone-2 py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="mono-micro text-ink/45">
                    Common questions
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-[var(--line)]"
                  />
                </div>
                <h2 className="display mt-6 text-[clamp(2.3rem,4.4vw,3.8rem)] leading-[0.94]">
                  Before you get in touch.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/60">
                  Questions about a specific ingredient, format or market? Our
                  team answers every product enquiry directly.
                </p>
                <Link href="#top" className="btn btn-outline mt-7">
                  Ask us directly
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion items={faqs} light />
            </Reveal>
          </div>
        </div>
      </section>

      <PageNav
        items={[
          {
            label: "Product formats",
            href: "/technologies",
            description: "Gummies, thin films, softgels and liposomal products.",
          },
          {
            label: "About Zoelex",
            href: "/about",
            description: "The company, purpose and values.",
          },
        ]}
      />
    </>
  );
}
