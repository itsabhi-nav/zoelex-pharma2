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
    title: "Formulation",
    copy: "A product begins as a question: can the ingredient, the dose and the experience live in the same format? That question shapes every brief.",
  },
  {
    title: "Regulatory pathways",
    copy: "Requirements differ by format and destination. Mapping them early keeps a product idea grounded in what can actually be made and sold.",
  },
  {
    title: "Scale-up",
    copy: "A sample is a promise. Scale-up is where the promise is tested — batch after batch, with documentation to match.",
  },
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
          src: "/images/softgels-marble.jpg",
          alt: "Golden softgel capsules arranged on a pale marble surface",
        }}
        meta={[
          { label: "Role", value: "Founder & CEO" },
          { label: "Focus", value: "Formulation & scale-up" },
          { label: "Experience", value: founder.experience },
          { label: "Education", value: founder.education },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line-dark)] bg-plum">
              <Image
                src="/images/lab-scientists.jpg"
                alt="Laboratory team working at a bench"
                fill
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="img-duo object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="display text-[5.5rem] leading-[0.8] text-bone">VS</p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/55">
                  Founder &amp; CEO · Pune, India
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-4">The long view</p>
              <h2 className="display text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
                Building at the intersection of science and experience.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
                {founder.intro}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                At Zoelex Pharma, that focus aligns with developing nutraceutical
                products and supporting brands through manufacturing — from the
                first brief to a finished pack.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-6 border-t border-[var(--line-dark)] pt-6 sm:grid-cols-3">
              {[
                { label: "Founder", value: "Vidhatri Singh" },
                { label: "Company", value: "Zoelex Pharma" },
                { label: "Based in", value: "Pune, India" },
              ].map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-ink/80">{item.value}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <blockquote className="mt-9 border-l-2 border-ember pl-5 text-[clamp(1.15rem,2vw,1.5rem)] leading-relaxed text-ink/75">
                “{founder.quote}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="border-y border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Focus</p>
            <h2 className="display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04]">
              Where the work gets real.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/60">
              Three areas of focus connect the product idea to the production
              line.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-[var(--line-dark)]">
              {focusAreas.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="border-b border-[var(--line-dark)] py-6"
                >
                  <h3 className="text-[19px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-ink/60">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-plum py-20 text-bone md:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-6 !text-bone/55">A note on the work</p>
            <p className="display max-w-5xl text-[clamp(1.8rem,3.8vw,3.4rem)] leading-[1.12] text-bone/85">
              “The best supplement is the one someone{" "}
              <span className="text-ember">actually takes.</span> Format, taste
              and trust are not marketing details — they are the product.”
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--line-light)] pt-6">
              <span className="text-[16px] font-semibold">Vidhatri Singh</span>
              <span className="text-[12px] uppercase tracking-[0.1em] text-bone/45">
                Founder &amp; CEO, Zoelex Pharma
              </span>
              <Link
                href="/about"
                className="link-arrow ml-auto text-bone/70 sm:ml-auto"
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
