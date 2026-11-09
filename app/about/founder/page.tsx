import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { Reveal } from "@/components/ui/reveal";
import { founder } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet Vidhatri Singh, Founder and CEO of Zoelex Pharma — focused on formulation, regulatory pathways and scale-up.",
};

const focusAreas = [
  {
    index: "01",
    title: "Formulation",
    copy: "A product begins as a question: can the ingredient, the dose and the experience live in the same format? That question shapes every brief.",
  },
  {
    index: "02",
    title: "Regulatory pathways",
    copy: "Requirements differ by format and destination. Mapping them early keeps a product idea grounded in what can actually be made and sold.",
  },
  {
    index: "03",
    title: "Scale-up",
    copy: "A sample is a promise. Scale-up is where the promise is tested, batch after batch, with documentation to match.",
  },
];

const facts = [
  { label: "Founder", value: "Vidhatri Singh" },
  { label: "Company", value: "Zoelex Pharma" },
  { label: "Based in", value: "Pune, India" },
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        kicker="Founder & CEO"
        title={
          <>
            Meet <span className="text-ember">Vidhatri Singh.</span>
          </>
        }
        lede="Founder and CEO of Zoelex Pharma, with a professional focus on pharmaceutical formulation, regulatory pathways and scale-up."
        image={{
          src: "/images/softgels-gold.jpg",
          alt: "Golden softgel capsules arranged on a pale surface",
        }}
        imageClassName="img-warm"
        imageCaption="Illustrative imagery; not a portrait."
        meta={[
          { label: "Role", value: "Founder & CEO" },
          { label: "Focus", value: "Formulation & scale-up" },
          { label: "Experience", value: founder.experience },
          { label: "Education", value: founder.education },
        ]}
      />

      <section className="surface-bone py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)] bg-ink">
              <Image
                src="/images/lab-pipette.jpg"
                alt="Gloved hand pipetting a sample in a laboratory"
                fill
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="img-duo object-cover opacity-45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="display text-[6rem] leading-[0.78] text-bone">
                  VS
                </p>
                <p className="mono-micro mt-4 text-bone/50">
                  Founder &amp; CEO / Pune, India
                </p>
              </div>
              <span className="mono-micro absolute left-6 top-6 text-bone/40">
                Fig. 01
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="mono-micro text-ink/45">The long view</span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--line)]"
                />
              </div>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.98]">
                Building at the intersection of science and experience.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
                {founder.intro}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                At Zoelex Pharma, that focus aligns with developing
                nutraceutical products and supporting brands through
                manufacturing, from the first brief to a finished pack.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              {facts.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <p className="mono-micro text-ink/45">{item.label}</p>
                  <p className="mt-2 text-sm text-ink/80">{item.value}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <blockquote className="mt-9 border-l-2 border-ember pl-5 text-[clamp(1.15rem,2vw,1.55rem)] leading-relaxed text-ink/75">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="surface-dark py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="mono-micro text-bone/45">Focus</span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[var(--line-light)]"
              />
            </div>
            <h2 className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.94] text-bone">
              Where the work
              <br />
              gets real.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone/55">
              Three areas of focus connect the product idea to the production
              line.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-[var(--line-light)]">
              {focusAreas.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="grid gap-3 border-b border-[var(--line-light)] py-6 md:grid-cols-12 md:gap-6"
                >
                  <span className="mono-micro text-ember md:col-span-1">
                    {item.index}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="display text-[clamp(1.8rem,3vw,2.6rem)] leading-none text-bone">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-bone/55">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="surface-dark relative overflow-hidden border-t border-[var(--line-light)] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/texture-dark.jpg"
            alt=""
            fill
            sizes="100vw"
            className="img-warm object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="shell relative">
          <Reveal>
            <p className="mono-label flex items-center gap-3 text-ember">
              <span className="h-px w-8 bg-ember" aria-hidden="true" />
              A note on the work
            </p>
            <p className="display mt-8 max-w-5xl text-[clamp(2rem,4.4vw,4rem)] leading-[1.04] text-bone">
              &ldquo;The best supplement is the one someone{" "}
              <span className="text-ember">actually takes.</span> Format, taste
              and trust are not marketing details. They are the product.&rdquo;
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--line-light)] pt-6">
              <span className="text-[16px] font-medium text-bone">
                Vidhatri Singh
              </span>
              <span className="mono-micro text-bone/45">
                Founder &amp; CEO, Zoelex Pharma
              </span>
              <Link
                href="/about"
                className="link-arrow ml-auto text-bone/70 hover:text-ember"
              >
                About the company
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PageNav
        items={[
          {
            label: "About Zoelex",
            href: "/about",
            description: "The company, purpose and values.",
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
