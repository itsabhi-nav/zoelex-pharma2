import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { FormatsStack } from "@/components/sections/formats-stack";
import { CapabilityList } from "@/components/sections/capability-list";
import ProcessTimeline from "@/components/sections/process-timeline";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { WordReveal } from "@/components/ui/word-reveal";
import { categories, certifications, qualitySteps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Manifesto */}
      <section className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-8">The company</p>
              <WordReveal
                text="A manufacturing partner for brands that care how the product feels, tastes and travels."
                className="display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] text-ink"
              />
            </div>
            <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-10 lg:pt-16">
              <p className="text-[15px] leading-relaxed text-ink/60">
                Zoelex Pharma works with nutraceutical, Ayurvedic and D2C brands
                across contract manufacturing and private label. Every project
                starts with the brief — ingredients, audience, market and pack.
              </p>
              <Link href="/about" className="link-arrow mt-6 text-ink">
                About Zoelex
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-12">
            <ParallaxImage
              src="/images/gummies-spill.jpg"
              alt="Red gummy supplements spilling from a clear bottle"
              sizes="(max-width: 640px) 92vw, 64vw"
              className="aspect-[4/3] rounded-sm sm:col-span-8 sm:aspect-[16/10]"
              speed={45}
            />
            <ParallaxImage
              src="/images/turmeric.jpg"
              alt="Turmeric root and powder"
              sizes="(max-width: 640px) 92vw, 30vw"
              className="aspect-[4/3] rounded-sm sm:col-span-4 sm:aspect-auto"
              speed={70}
            />
          </div>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" className="border-t border-[var(--line)] bg-bone-2/40 py-20 md:py-28">
        <FormatsStack />
      </section>

      {/* Capabilities */}
      <section className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5">Capabilities</p>
              <h2 className="display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.98]">
                One team, from formula
                <br />
                to finished pack.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
                Product development, manufacturing, packaging, documentation and
                export support are handled together, so fewer things fall
                between conversations.
              </p>
            </Reveal>
          </div>
          <CapabilityList />
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-plum py-20 text-bone md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ParallaxImage
              src="/images/lab-scientists.jpg"
              alt="Laboratory team working at a bench"
              sizes="(max-width: 1024px) 92vw, 38vw"
              className="aspect-[4/5] rounded-sm"
              imgClassName="img-duo"
              speed={40}
            />
            <p className="mt-3 text-[12px] text-bone/45">
              Laboratory testing and batch records are maintained for every
              production run.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-5">Quality &amp; process</p>
              <h2 className="display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.02]">
                Checked at every stage.
                <br />
                Documented at every step.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-bone/60">
                Zoelex operates under GMP, FSSAI and GLP certifications. Product
                requirements and supporting documentation are reviewed with each
                manufacturing brief.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-[var(--line-dark)]">
              {qualitySteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={index * 0.04}
                  className="grid grid-cols-12 gap-4 border-b border-[var(--line-dark)] py-4"
                >
                  <span className="col-span-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ember md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <p className="text-[14px] font-medium text-bone/85">
                      {step.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-bone/55">
                      {step.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert.code}
                  className="rounded-sm border border-[var(--line-dark)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-bone/60"
                >
                  {cert.code}
                </span>
              ))}
              <Link href="/manufacturing#quality" className="link-arrow ml-2 text-bone/70">
                How manufacturing works
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-[var(--line)] py-20 md:py-28">
        <div className="shell">
          <p className="eyebrow mb-4">Working with Zoelex</p>
          <ProcessTimeline />
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-bone-2/40 py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Wellness categories</p>
              <h2 className="display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.02]">
                Product ideas, by category.
              </h2>
            </div>
            <Link href="/technologies#categories" className="link-arrow text-ink">
              All ten categories
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid border-t border-[var(--line)] md:grid-cols-2">
            {categories.map((category, index) => (
              <Reveal
                key={category.name}
                delay={(index % 2) * 0.04}
                className="group border-b border-[var(--line)] py-5 md:px-6 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n+1)]:pl-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] font-medium text-ink transition-colors group-hover:text-ember">
                    {category.name}
                  </h3>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                </div>
                <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-ink/55">
                  {category.ideas.join(" · ")}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-[12px] leading-relaxed text-ink/45">
            Examples are starting points for discussion. Final product scope
            depends on formulation feasibility and applicable regulations.
          </p>
        </div>
      </section>

      {/* Export */}
      <section className="relative min-h-[70vh] overflow-hidden bg-plum">
        <Image
          src="/images/containers.jpg"
          alt="Cargo containers stacked at a commercial port"
          fill
          sizes="100vw"
          className="img-duo object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum via-plum/80 to-plum/20" />
        <div className="shell relative flex min-h-[70vh] flex-col justify-center py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Export</p>
            <h2 className="display text-[clamp(2.6rem,5.6vw,5rem)] leading-[0.98] text-bone">
              Made here.
              <br />
              Shipped anywhere.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/65">
              Import and product requirements differ by destination. Tell us
              where the product will be sold and our team can review the product
              and documentation scope before production.
            </p>
            <Link href="/global" className="btn btn-bone mt-8">
              Plan a market entry
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
