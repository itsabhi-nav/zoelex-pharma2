import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { SectionHead } from "@/components/sections/section-head";
import { Reveal } from "@/components/ui/reveal";
import { buyers, marketSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Export",
  description:
    "Zoelex Pharma manufactures in Pune, India and supports international brands with destination-market requirements and export documentation.",
};

const routeDetails = [
  { label: "Product", value: "Format & specification" },
  { label: "Documents", value: "Reviewed per market" },
  { label: "Shipping", value: "Planned per order" },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        kicker="Export"
        title={
          <>
            Made in India.{" "}
            <span className="text-ember">Delivered worldwide.</span>
          </>
        }
        lede="Share your target market early so product and documentation requirements can be discussed before production. Availability, documents and shipping are confirmed for each enquiry."
        image={{
          src: "/images/cargo-sunset.jpg",
          alt: "Container ship loaded with cargo at sunset",
        }}
        imageClassName="img-warm object-[50%_55%]"
        imageCaption="Illustrative shipping imagery."
        meta={[
          { label: "Manufacturing base", value: "Pune, India" },
          { label: "Export support", value: "Documentation & planning" },
          { label: "Buyer types", value: "Eight profiles" },
          { label: "Markets", value: "Reviewed per destination" },
        ]}
      />

      <section className="surface-bone py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="mono-micro text-ink/45">
                International enquiries
              </span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[var(--line)]"
              />
            </div>
            <h2 className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.94]">
              Plan market requirements before production.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/65">
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

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-[var(--line)] bg-bone-2">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--line)]">
                <Image
                  src="/images/cargo-aerial.jpg"
                  alt="Container ship approaching a port"
                  fill
                  sizes="(max-width: 1024px) 92vw, 50vw"
                  className="img-duo object-cover object-[50%_78%]"
                />
                <span className="mono-micro absolute left-4 top-4 bg-bone/85 px-2 py-1 text-ink/60 backdrop-blur-sm">
                  Route / 01
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <p className="mono-micro text-ink/40">Origin</p>
                    <p className="display mt-1 text-[clamp(1.4rem,2.4vw,2rem)] leading-none text-ink">
                      Pune, India
                    </p>
                  </div>
                  <div className="relative h-px flex-1 bg-[var(--line-strong)]">
                    <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ember" />
                    <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-ink/40 bg-bone" />
                    <span className="mono-micro absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap text-ink/30">
                      Discussed per enquiry
                    </span>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="mono-micro text-ink/40">Destination</p>
                    <p className="display mt-1 text-[clamp(1.4rem,2.4vw,2rem)] leading-none text-ink">
                      Your market
                    </p>
                  </div>
                </div>

                <dl className="mt-8 grid gap-x-6 gap-y-4 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
                  {routeDetails.map((item) => (
                    <div key={item.label}>
                      <dt className="mono-micro text-ink/40">{item.label}</dt>
                      <dd className="mt-1 text-[12px] text-ink/70">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-ink/45">
              Illustrative route diagram; not a market-availability claim.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Buyers */}
      <section className="surface-dark py-20 md:py-28">
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
                className="group flex items-center justify-between gap-5 border-b border-[var(--line-light)] py-4 md:px-5 md:[&:nth-child(2n)]:border-l"
              >
                <span className="flex items-baseline gap-4">
                  <span className="mono-micro text-bone/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] text-bone/70 transition-colors duration-300 group-hover:text-bone">
                    {buyer}
                  </p>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-bone/25 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-bone-2 py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="A practical starting point"
            title="Four things to align before dispatch."
          />

          <div className="mt-10 grid gap-x-0 border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {marketSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.05}
                className="border-b border-[var(--line)] py-6 sm:px-6 sm:[&:nth-child(2n+1)]:pl-0 lg:border-r lg:last:border-r-0"
              >
                <p className="display text-stroke text-[clamp(2.6rem,4.4vw,3.6rem)] leading-none">
                  {step.index}
                </p>
                <h3 className="mt-4 text-[16px] font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-ink/60">
                  {step.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-dark py-20 md:py-24">
        <div className="shell">
          <Reveal className="flex flex-col items-start justify-between gap-6 border border-[var(--line-light)] bg-ink-2 p-7 sm:flex-row sm:items-center md:p-10">
            <div>
              <p className="mono-micro text-ember">Not sure where to start?</p>
              <h2 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] text-bone">
                Tell us the destination.
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-bone/55">
                Share the market and product idea. We will review the relevant
                requirements with you.
              </p>
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
