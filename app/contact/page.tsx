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
import { Reveal } from "@/components/ui/reveal";
import Accordion from "@/components/ui/accordion";
import ContactForm from "@/components/contact-form";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss contract manufacturing, private label or a custom formulation with Zoelex Pharma. Enquiries answered within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start a product enquiry."
        lede="Ask about contract manufacturing, private label or a custom formulation. Share a few details and our team will respond within 24–48 hours with options and a quote."
        image={{
          src: "/images/droplets.jpg",
          alt: "Macro detail of liquid droplets",
        }}
        imageClassName="img-duo"
        meta={[
          { label: "Response time", value: "24–48 hours" },
          { label: "Phone / WhatsApp", value: site.phone },
          { label: "Email", value: site.email },
          { label: "Hours", value: "Mon–Sat, 9:30–18:30 IST" },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="min-h-[560px] animate-pulse rounded-sm border border-[var(--line-dark)] bg-bone-2/40" />
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="rounded-sm border border-[var(--line-dark)] bg-plum p-7 text-bone lg:sticky lg:top-28">
                <p className="eyebrow mb-3 !text-bone/55">Contact Zoelex Pharma</p>
                <h2 className="display text-[1.9rem] leading-[1.06]">
                  A direct line to the team.
                </h2>

                <div className="mt-7 space-y-5 border-t border-[var(--line-light)] pt-6">
                  <a href={site.phoneHref} className="group flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--line-light)] text-bone/55">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-bone/45">
                        Phone / WhatsApp
                      </span>
                      <span className="mt-1 block text-sm text-bone/80 transition-colors group-hover:text-ember">
                        {site.phone}
                      </span>
                    </span>
                  </a>

                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--line-light)] text-bone/55">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-bone/45">
                        WhatsApp
                      </span>
                      <span className="mt-1 block text-sm text-bone/80 transition-colors group-hover:text-ember">
                        Chat with our team
                      </span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--line-light)] text-bone/55">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-bone/45">
                        Email
                      </span>
                      <span className="mt-1 block text-sm text-bone/80 transition-colors group-hover:text-ember">
                        {site.email}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--line-light)] text-bone/55">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-bone/45">
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
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--line-light)] text-bone/55">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-bone/45">
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
                  className="mt-7 flex items-center justify-between rounded-sm border border-[var(--line-light)] px-4 py-3 text-sm text-bone/70 transition-colors hover:border-bone/40 hover:text-bone"
                >
                  Find us on maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <p className="mt-5 text-[12px] leading-relaxed text-bone/50">
                  To help us prepare, include your preferred format, ingredients,
                  target market and estimated quantity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        className="border-t border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-28"
      >
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow mb-4">Common questions</p>
                <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.04]">
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
    </>
  );
}
