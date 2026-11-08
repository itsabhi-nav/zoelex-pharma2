import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { SectionHead } from "@/components/sections/section-head";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { buyers, marketSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Export",
  description:
    "Zoelex Pharma manufactures in Pune, India and supports international brands with destination-market requirements and export documentation.",
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        kicker="Export"
        title="Made in India. Delivered worldwide."
        lede="Share your target market early so product and documentation requirements can be discussed before production. Availability, documents and shipping are confirmed for each enquiry."
        image={{
          src: "/images/containers.jpg",
          alt: "Cargo containers stacked at a commercial port",
        }}
        imageClassName="img-duo"
        meta={[
          { label: "Manufacturing base", value: "Pune, India" },
          { label: "Export support", value: "Documentation & planning" },
          { label: "Buyer types", value: "Eight profiles" },
          { label: "Markets", value: "Reviewed per destination" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <figure>
              <ParallaxImage
                src="/images/containers.jpg"
                alt="Cargo containers stacked at a commercial port"
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="aspect-[16/11] rounded-sm border border-[var(--line-dark)]"
                imgClassName="img-duo"
                speed={45}
              />
              <figcaption className="mt-3 text-[12px] text-ink/50">
                Dispatch and shipping arrangements are planned with the product
                and batch documentation for each order.
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow mb-4">For international enquiries</p>
              <h2 className="display text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
                Plan market requirements before production.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
                Import and product requirements differ by destination. Tell us
                where the product will be sold and what you plan to manufacture;
                our team can review the relevant product and documentation scope.
              </p>
              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-ink/55">
                Availability, export documents and shipping arrangements are
                confirmed for each enquiry.
              </p>
              <Link href="/contact" className="btn btn-ember mt-8">
                Start an export enquiry
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Buyers */}
      <section className="bg-plum py-20 text-bone md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Who we work with"
            title="Different businesses. One standard."
            copy="Product, format and market fit are reviewed for each enquiry. Share your business and intended market to discuss scope."
          />

          <div className="mt-12 grid border-t border-[var(--line-light)] md:grid-cols-2">
            {buyers.map((buyer, index) => (
              <Reveal
                key={buyer}
                delay={(index % 2) * 0.04}
                className="flex items-center justify-between gap-5 border-b border-[var(--line-light)] py-4 md:px-5 md:[&:nth-child(2n)]:border-l"
              >
                <p className="text-[14px] text-bone/70">{buyer}</p>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-bone/30" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="A practical starting point"
            title="Four things to align before dispatch."
          />

          <div className="mt-10 grid gap-x-10 gap-y-0 border-t border-[var(--line-dark)] sm:grid-cols-2 lg:grid-cols-4">
            {marketSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.05}
                className="border-b border-[var(--line-dark)] py-6"
              >
                <h3 className="text-[16px] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-ink/60">
                  {step.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 rounded-sm border border-[var(--line-dark)] bg-bone p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <p className="eyebrow mb-2">Not sure where to start?</p>
              <h3 className="display text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.08]">
                Tell us the destination.
              </h3>
            </div>
            <Link href="/contact" className="btn btn-ember shrink-0">
              Check market requirements
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <PageNav
        items={[
          {
            label: "Contact",
            href: "/contact",
            description: "Ask about your destination market.",
          },
          {
            label: "Product formats",
            href: "/technologies",
            description: "Gummies, thin films, softgels and liposomal products.",
          },
        ]}
      />
    </>
  );
}
