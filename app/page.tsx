import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { FormatRail } from "@/components/sections/format-rail";
import { CapabilityList } from "@/components/sections/capability-list";
import { CategoryIndex } from "@/components/sections/category-index";
import { QualityScrolly } from "@/components/sections/quality-scrolly";
import ProcessTimeline from "@/components/sections/process-timeline";
import { SectionHead } from "@/components/sections/section-head";
import { Marquee } from "@/components/ui/marquee";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { WordReveal } from "@/components/ui/word-reveal";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="bg-ember py-4 text-ink">
        <Marquee
          items={[
            "Gummies",
            "Oral thin films",
            "Softgels",
            "Liposomal",
            "Contract manufacturing",
            "Private label",
          ]}
          itemClassName="display text-[clamp(1.15rem,1.8vw,1.65rem)] leading-none tracking-[-0.01em]"
          duration={40}
        />
      </div>

      {/* Manifesto */}
      <section className="surface-bone py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="mono-micro text-ink/45">The company</span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--line)]"
                />
              </div>
              <WordReveal
                text="A manufacturing partner for brands that care how the product feels, tastes and travels."
                className="display mt-6 text-[clamp(2.3rem,5.2vw,4.8rem)] leading-[0.98] text-ink"
              />
            </div>
            <Reveal
              delay={0.1}
              className="lg:col-span-3 lg:col-start-10 lg:pt-14"
            >
              <p className="text-[15px] leading-relaxed text-ink/60">
                Zoelex Pharma works with nutraceutical, Ayurvedic and D2C brands
                across contract manufacturing and private label. Every project
                starts with the brief: ingredients, audience, market and pack.
              </p>
              <Link href="/about" className="link-arrow mt-6 text-ink">
                About Zoelex
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-12">
            <ParallaxImage
              src="/images/cleanroom.jpg"
              alt="Controlled production environment at a manufacturing facility"
              sizes="(max-width: 640px) 92vw, 58vw"
              className="aspect-[4/3] sm:col-span-7 sm:aspect-[16/11]"
              speed={45}
            />
            <div className="grid gap-4 sm:col-span-5">
              <ParallaxImage
                src="/images/lab-pipette.jpg"
                alt="Gloved hand pipetting in a laboratory"
                sizes="(max-width: 640px) 92vw, 40vw"
                className="aspect-[4/3]"
                speed={70}
              />
              <div className="flex flex-col justify-between border border-[var(--line)] p-5">
                <div>
                  <p className="mono-micro text-ember">The brief comes first</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    Format, formulation, packaging and market are reviewed
                    together before a sample is made.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
                  <span className="mono-micro text-ink/35">Pune, India</span>
                  <span className="mono-micro text-ink/35">Private label</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" className="surface-dark py-20 md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Product formats"
            title={
              <>
                Four formats.
                <br />
                One standard.
              </>
            }
            copy="Each format brings its own formulation logic, equipment and packaging requirements. We review the fit before a sample is made."
          />
        </div>
        <div className="mt-12">
          <FormatRail />
        </div>
      </section>

      {/* Capabilities */}
      <section className="surface-bone py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Capabilities"
            title={
              <>
                One team, from formula
                <br />
                to finished pack.
              </>
            }
            copy="Product development, manufacturing, packaging, documentation and export support are handled together, so fewer things fall between conversations."
          />
          <div className="mt-12">
            <CapabilityList />
          </div>
        </div>
      </section>

      {/* Quality */}
      <QualityScrolly />

      {/* Process */}
      <section className="surface-bone border-t border-[var(--line)] py-20 md:py-28">
        <div className="shell">
          <ProcessTimeline />
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-bone-2 py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Wellness categories"
            title={
              <>
                Product ideas,
                <br />
                by category.
              </>
            }
            copy="Ten wellness categories, each mapped to the formats that can carry them. Use these as a starting point for the brief."
          />
          <div className="mt-12">
            <CategoryIndex />
          </div>
        </div>
      </section>

      {/* Export */}
      <section className="surface-dark relative min-h-[72vh] overflow-hidden">
        <Image
          src="/images/cargo-sunset.jpg"
          alt="Container ship loaded with cargo at sunset"
          fill
          sizes="100vw"
          className="img-warm object-cover object-[50%_55%] opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20"
        />
        <div className="shell relative flex min-h-[72vh] flex-col justify-center py-20">
          <div className="max-w-2xl">
            <p className="mono-label flex items-center gap-3 text-ember">
              <span className="h-px w-8 bg-ember" aria-hidden="true" />
              Export
            </p>
            <h2 className="display mt-6 text-[clamp(2.8rem,6.4vw,6rem)] leading-[0.9] text-bone">
              Made here.
              <br />
              <span className="text-ember">Shipped anywhere.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/60">
              Import and product requirements differ by destination. Tell us
              where the product will be sold and our team can review the product
              and documentation scope before production.
            </p>
            <Link href="/global" className="btn btn-ember mt-8">
              Plan a market entry
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-4">
              <div className="border-t border-[var(--line-light)] pt-3">
                <dt className="mono-micro text-bone/35">Origin</dt>
                <dd className="mt-1 text-[13px] text-bone/75">
                  Pune, India
                </dd>
              </div>
              <div className="border-t border-[var(--line-light)] pt-3">
                <dt className="mono-micro text-bone/35">Destination</dt>
                <dd className="mt-1 text-[13px] text-bone/75">
                  Discussed per enquiry
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
