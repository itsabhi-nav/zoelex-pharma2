import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { SectionHead } from "@/components/sections/section-head";
import { QualityScrolly } from "@/components/sections/quality-scrolly";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { capabilities, certifications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Contract and private-label nutraceutical manufacturing in Pune, India — from formulation and R&D to packaging, quality and documentation.",
};

const infrastructure = [
  {
    index: "01",
    title: "Dedicated production lines",
    copy: "For gummies, oral thin films, softgels and liposomal products.",
  },
  {
    index: "02",
    title: "Controlled environment zones",
    copy: "Temperature and humidity zones support product-specific manufacturing needs.",
  },
  {
    index: "03",
    title: "In-house quality control",
    copy: "A quality control laboratory supports the facility's testing process.",
  },
];

const spec = [
  { label: "Formats", value: "Four" },
  { label: "Environment", value: "Controlled zones" },
  { label: "Quality control", value: "In-house" },
  { label: "Base", value: "Pune, India" },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        kicker="Manufacturing"
        title={
          <>
            From formulation to{" "}
            <span className="text-ember">finished pack.</span>
          </>
        }
        lede="Contract and private-label nutraceutical manufacturing in Pune, India. Explore the support available for your product; scope is confirmed before production."
        image={{
          src: "/images/production-line.jpg",
          alt: "Production line machinery in a controlled manufacturing environment",
        }}
        imageClassName="img-warm object-[50%_68%]"
        imageCaption="Illustrative manufacturing imagery."
        meta={[
          { label: "Manufacturing base", value: "Pune, India" },
          { label: "Production lines", value: "Four formats" },
          { label: "Certifications", value: "GMP · FSSAI · GLP" },
          { label: "Quality control", value: "In-house laboratory" },
        ]}
      />

      {/* Services */}
      <section id="services" className="surface-bone py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Manufacturing support"
            title="Choose the support your brief needs."
            copy="Available services depend on the product, format and intended market. We confirm scope with you before moving ahead."
          />

          <div className="mt-12 grid gap-x-12 border-t border-[var(--line)] md:grid-cols-2">
            {capabilities.map((service, index) => (
              <Reveal
                key={service.title}
                delay={(index % 2) * 0.05}
                className="group flex items-start gap-4 border-b border-[var(--line)] py-6"
              >
                <span className="mono-micro mt-1.5 shrink-0 text-ember">
                  {service.index}
                </span>
                <div>
                  <h3 className="text-[clamp(1.15rem,2vw,1.55rem)] font-medium text-ink transition-colors duration-300 group-hover:text-ember">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/60">
                    {service.detail ?? service.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="facility" className="surface-dark py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="mono-micro text-bone/45">Infrastructure</span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--line-light)]"
                />
              </div>
              <h2 className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.94] text-bone">
                Built around
                <br />
                specialised formats.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/55">
                The Pune facility supports the requirements of novel delivery
                formats, with operating details reviewed against each product
                brief.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-[var(--line-light)]">
              {infrastructure.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="grid gap-2 border-b border-[var(--line-light)] py-5 sm:grid-cols-12 sm:gap-4"
                >
                  <span className="mono-micro text-bone/30 sm:col-span-1">
                    {item.index}
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="text-[15px] font-medium text-bone">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-bone/55">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {spec.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-[var(--line-light)] pt-3"
                >
                  <dt className="mono-micro text-bone/35">{item.label}</dt>
                  <dd className="mt-1 text-[12px] text-bone/75">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <figure>
              <ParallaxImage
                src="/images/lab-bench.jpg"
                alt="Clean laboratory benches and equipment"
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="aspect-[4/5] border border-[var(--line-light)]"
                imgClassName="img-warm"
                speed={45}
              />
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-[11px] text-bone/40">
                <span>Testing and batch records are maintained.</span>
                <span className="mono-micro">Fig. 02</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-bone-2 py-20 md:py-24">
        <div className="shell">
          <SectionHead
            label="Certifications"
            title="Certified operations. Documented controls."
            copy="Zoelex Pharma operates under GMP, FSSAI and GLP certifications. Testing and product documentation are discussed against the requirements of each brief."
          />

          <div className="mt-12 grid border-t border-[var(--line)] sm:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal
                key={cert.code}
                delay={index * 0.06}
                className="border-b border-[var(--line)] py-7 sm:border-r sm:px-7 sm:last:border-r-0 sm:[&:first-child]:pl-0"
              >
                <p className="display text-[clamp(2.6rem,5vw,4rem)] leading-none text-ember">
                  {cert.code}
                </p>
                <p className="mt-4 text-[14px] font-medium text-ink">
                  {cert.title}
                </p>
                <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-ink/55">
                  {cert.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Link
              href="/contact"
              className="link-arrow text-ink hover:text-ember"
            >
              Request quality documentation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quality */}
      <QualityScrolly
        image="/images/cleanroom.jpg"
        imageAlt="Controlled production environment"
        showCertifications={false}
      />

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
