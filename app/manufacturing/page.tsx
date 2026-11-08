import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Factory,
  FileText,
  FlaskConical,
  Package,
  Ship,
  Tags,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { SectionHead } from "@/components/sections/section-head";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { capabilities, certifications, qualitySteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Contract and private-label nutraceutical manufacturing in Pune, India — from formulation and R&D to packaging, quality and documentation.",
};

const icons = [Factory, Tags, FlaskConical, Package, FileText, Ship];

const infrastructure = [
  {
    title: "Dedicated production lines",
    copy: "For gummies, oral thin films, softgels and liposomal products.",
  },
  {
    title: "Controlled environment zones",
    copy: "Temperature and humidity zones support product-specific manufacturing needs.",
  },
  {
    title: "In-house quality control",
    copy: "A quality control laboratory supports the facility's testing process.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        kicker="Manufacturing"
        title="From formulation to finished pack."
        lede="Contract and private-label nutraceutical manufacturing in Pune, India. Explore the support available for your product — scope is confirmed before production."
        image={{
          src: "/images/lab-equipment.jpg",
          alt: "Laboratory equipment used for product testing",
        }}
        imageClassName="img-duo"
        meta={[
          { label: "Manufacturing base", value: "Pune, India" },
          { label: "Production lines", value: "Four formats" },
          { label: "Certifications", value: "GMP · FSSAI · GLP" },
          { label: "Quality control", value: "In-house laboratory" },
        ]}
      />

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Manufacturing support"
            title="Choose the support your brief needs."
            copy="Available services depend on the product, format and intended market. We confirm scope with you before moving ahead."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((service, index) => {
              const Icon = icons[index] ?? Factory;
              return (
                <Reveal
                  key={service.title}
                  delay={(index % 3) * 0.05}
                  className="rounded-sm border border-[var(--line-dark)] p-6 transition-colors duration-300 hover:border-ember/50 md:p-7"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--line-dark)] text-ink/60">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {service.detail ?? service.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section
        id="facility"
        className="border-y border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-28"
      >
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-4">Infrastructure</p>
              <h2 className="display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04]">
                Built around specialised formats.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
                The Pune facility supports the requirements of novel delivery
                formats, with operating details reviewed against each product
                brief.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-[var(--line-dark)]">
              {infrastructure.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="border-b border-[var(--line-dark)] py-5"
                >
                  <h3 className="text-[15px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-ink/60">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="lg:col-span-6">
            <figure>
              <ParallaxImage
                src="/images/lab-equipment.jpg"
                alt="Laboratory equipment used for product testing"
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="aspect-[4/3] rounded-sm border border-[var(--line-dark)]"
                imgClassName="img-duo"
                speed={45}
              />
              <figcaption className="mt-3 text-[12px] text-ink/50">
                Testing and batch records are maintained for every production
                run.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-plum py-20 text-bone md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Quality & documentation"
            title="Quality information for every stage."
            copy="Zoelex Pharma operates under GMP, FSSAI and GLP certifications. Testing and product documentation are discussed against the requirements of each brief."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal
                key={cert.code}
                delay={index * 0.06}
                className="rounded-sm border border-[var(--line-light)] p-6"
              >
                <p className="text-[20px] font-semibold text-ember">
                  {cert.code}
                </p>
                <p className="mt-1 text-[13px] font-medium text-bone/80">
                  {cert.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-bone/55">
                  {cert.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-[var(--line-light)] pt-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h3 className="display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.04]">
                A sequence of checks, from input to dispatch.
              </h3>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-bone/60">
                Certificate scope and supporting records can be discussed with
                our team. Every lot is documented; every claim is reviewed.
              </p>
              <Link
                href="/contact"
                className="link-arrow mt-6 text-bone/70 hover:text-bone"
              >
                Request quality documentation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-[var(--line-light)]">
                {qualitySteps.map((step, index) => (
                  <Reveal
                    key={step.title}
                    delay={index * 0.04}
                    className="flex items-start gap-4 border-b border-[var(--line-light)] py-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <div>
                      <h4 className="text-[14px] font-medium text-bone/85">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-bone/55">
                        {step.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageNav
        items={[
          {
            label: "Export support",
            href: "/global",
            description: "Destination-market requirements and documentation.",
          },
          {
            label: "Start an enquiry",
            href: "/contact",
            description: "Share your brief with our team.",
          },
        ]}
      />
    </>
  );
}
