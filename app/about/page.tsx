import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHead } from "@/components/sections/section-head";
import { PageNav } from "@/components/sections/page-nav";
import { Reveal } from "@/components/ui/reveal";
import { mission, values, whyZoelex, founder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zoelex Pharma is a Pune-based manufacturer helping brands develop nutraceutical products in consumer-friendly supplement formats.",
};

const workSteps = [
  "Share the product brief and target market.",
  "Review format and formulation feasibility.",
  "Discuss samples, packaging and specifications.",
  "Confirm scope, quote and production plan.",
];

const roles = [
  "R&D and Formulation",
  "Quality Control & Assurance",
  "Production",
  "Regulatory Affairs",
  "Business Development & Exports",
  "Supply Chain",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Zoelex"
        title={
          <>
            A manufacturing partner for{" "}
            <span className="text-ember">nutraceutical brands.</span>
          </>
        }
        lede="Zoelex Pharma is a Pune-based manufacturer helping brands develop products in consumer-friendly supplement formats — with the brief as the starting point."
        image={{
          src: "/images/turmeric.jpg",
          alt: "Turmeric root, slices and powder on a pale surface",
        }}
        meta={[
          { label: "Base", value: "Pune, India" },
          { label: "Formats", value: "Four delivery systems" },
          { label: "Certifications", value: "GMP · FSSAI · GLP" },
          { label: "Focus", value: "Nutraceutical & Ayurvedic" },
        ]}
      />

      {/* Who we are */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04]">
              Built for brands that take the product seriously.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/65">
              <p>
                We work with brands on contract manufacturing and private-label
                products across gummies, oral thin films, softgels and liposomal
                formats. Each project starts with the product brief: ingredients,
                audience, market and pack.
              </p>
              <p>
                We believe supplements should be as easy to take as they are to
                make. Our focus is on formats that can make daily supplementation
                simpler and more enjoyable; feasibility is reviewed for each
                brief.
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline mt-8">
              Talk to our team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <figure>
              <div className="img-frame img-warm relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line-dark)]">
                <Image
                  src="/images/gummies-jar.jpg"
                  alt="Red gummy supplements in a clear jar"
                  fill
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[12px] text-ink/50">
                Gummies remain one of the most approachable formats for daily
                supplementation.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-y border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Our purpose"
            title="What guides our work."
            copy="Two statements keep the work honest: where we are going, and how we get there."
          />

          <div className="mt-12 grid gap-10 border-t border-[var(--line-dark)] pt-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-4">Vision</p>
              <h3 className="display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08]">
                To be a globally trusted partner for innovative nutraceutical and
                Ayurvedic delivery formats.
              </h3>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/60">
                A format is not a detail. It is the moment a brand becomes
                something a person can hold, taste and take every day.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-4">Mission</p>
              <div className="border-t border-[var(--line-dark)]">
                {mission.map((item, index) => (
                  <Reveal
                    key={item}
                    delay={index * 0.05}
                    className="flex items-start gap-4 border-b border-[var(--line-dark)] py-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <p className="text-[14px] leading-relaxed text-ink/70">
                      {item}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Our values"
            title="Principles, not posters."
            copy="Five commitments that shape how we work with products, people and partners."
          />

          <div className="mt-12 border-t border-[var(--line-dark)]">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 0.04}
                className="grid gap-2 border-b border-[var(--line-dark)] py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <h3 className="text-[19px] font-semibold text-ink md:col-span-4">
                  {value.title}
                </h3>
                <p className="max-w-xl text-[14px] leading-relaxed text-ink/60 md:col-span-8">
                  {value.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zoelex */}
      <section id="why-zoelex" className="bg-plum py-20 text-bone md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Why brands work with us"
            title="The partner behind your next product."
            copy="Four formats supported from one manufacturing base, with quality, documentation and market requirements discussed from the start."
          />

          <div className="mt-12 grid gap-x-10 gap-y-0 border-t border-[var(--line-light)] sm:grid-cols-2 lg:grid-cols-3">
            {whyZoelex.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="border-b border-[var(--line-light)] py-6"
              >
                <h3 className="text-[16px] font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-bone/60">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 rounded-sm border border-[var(--line-dark)] bg-bone-2/40 p-7 md:p-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-3">
                <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center overflow-hidden rounded-sm border border-[var(--line-dark)] bg-plum">
                  <Image
                    src="/images/lab-scientists.jpg"
                    alt=""
                    fill
                    sizes="200px"
                    className="img-duo object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/45 to-transparent" />
                  <span className="display relative text-[4.5rem] leading-none text-bone">
                    VS
                  </span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="eyebrow mb-3">Founder</p>
                <h2 className="display text-[clamp(2rem,4vw,3.2rem)] leading-none">
                  {founder.name}
                </h2>
                <p className="mt-2 text-[13px] text-ink/55">{founder.role}</p>
                <blockquote className="mt-6 max-w-2xl text-[clamp(1.1rem,1.9vw,1.5rem)] leading-relaxed text-ink/75">
                  “{founder.quote}”
                </blockquote>
                <Link href="/about/founder" className="link-arrow mt-7 text-ink">
                  Meet the founder
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-[var(--line-dark)] bg-bone-2/40 py-20 md:py-24">
        <div className="shell">
          <SectionHead
            label="How we work"
            title="Clear steps. Agreed requirements."
          />
          <div className="mt-10 grid gap-x-10 gap-y-0 border-t border-[var(--line-dark)] sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 0.05}
                className="border-b border-[var(--line-dark)] py-6"
              >
                <p className="text-[14px] leading-relaxed text-ink/70">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Careers</p>
            <h2 className="display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.04]">
              Grow with us.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/65">
              Work on products that reach people around the world. Bring
              curiosity, ownership and a commitment to quality.
            </p>
            <a
              href={`mailto:${site.careersEmail}?subject=Career%20enquiry%20-%20area%20of%20interest`}
              className="btn btn-ember mt-8"
            >
              Send your CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow mb-4">Areas we hire for</p>
            <div className="border-t border-[var(--line-dark)]">
              {roles.map((role) => (
                <div
                  key={role}
                  className="flex items-center justify-between border-b border-[var(--line-dark)] py-3.5 text-[14px] text-ink/70"
                >
                  {role}
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink/25" />
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] leading-relaxed text-ink/50">
              Send your CV with your area of interest in the subject line. Ask us
              about current openings.
            </p>
          </Reveal>
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
            label: "Manufacturing",
            href: "/manufacturing",
            description: "Capabilities, quality and documentation.",
          },
        ]}
      />
    </>
  );
}
