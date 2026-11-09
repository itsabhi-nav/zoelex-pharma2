import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHead } from "@/components/sections/section-head";
import { PageNav } from "@/components/sections/page-nav";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
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
        lede="Zoelex Pharma is a Pune-based manufacturer helping brands develop products in consumer-friendly supplement formats, with the brief as the starting point."
        image={{
          src: "/images/lab-team.jpg",
          alt: "Two scientists reviewing a sample at a laboratory microscope",
        }}
        imageClassName="img-warm"
        imageCaption="Illustrative laboratory imagery."
        meta={[
          { label: "Base", value: "Pune, India" },
          { label: "Formats", value: "Four delivery systems" },
          { label: "Certifications", value: "GMP · FSSAI · GLP" },
          { label: "Focus", value: "Nutraceutical & Ayurvedic" },
        ]}
      />

      {/* Who we are */}
      <section className="surface-bone py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="mono-micro text-ink/45">Who we are</span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--line)]"
                />
              </div>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.6vw,4rem)] leading-[0.96]">
                Built for brands that take the product seriously.
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/65">
                <p>
                  We work with brands on contract manufacturing and
                  private-label products across gummies, oral thin films,
                  softgels and liposomal formats. Each project starts with the
                  product brief: ingredients, audience, market and pack.
                </p>
                <p>
                  We believe supplements should be as easy to take as they are
                  to make. Our focus is on formats that can make daily
                  supplementation simpler and more enjoyable; feasibility is
                  reviewed for each brief.
                </p>
              </div>
              <Link href="/contact" className="btn btn-outline mt-8">
                Talk to our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
              <figure>
                <ParallaxImage
                  src="/images/product-amber.jpg"
                  alt="Amber supplement bottle on a warm orange surface"
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="aspect-[4/5] border border-[var(--line)]"
                  speed={45}
                />
                <figcaption className="mt-3 flex items-start justify-between gap-4 text-[12px] text-ink/50">
                  <span>
                    Gummies remain one of the most approachable formats for
                    daily supplementation.
                  </span>
                  <span className="mono-micro shrink-0 text-ink/30">
                    Fig. 01
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="surface-dark py-20 md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Our purpose"
            title="What guides our work."
            copy="Two statements keep the work honest: where we are going, and how we get there."
          />

          <div className="mt-14 grid gap-12 border-t border-[var(--line-light)] pt-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="mono-micro text-ember">Vision</p>
              <h3 className="display mt-4 text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.02] text-bone">
                To be a globally trusted partner for innovative nutraceutical
                and Ayurvedic delivery formats.
              </h3>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone/55">
                A format is not a detail. It is the moment a brand becomes
                something a person can hold, taste and take every day.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="mono-micro text-ember">Mission</p>
              <div className="mt-4 border-t border-[var(--line-light)]">
                {mission.map((item, index) => (
                  <Reveal
                    key={item}
                    delay={index * 0.05}
                    className="flex items-start gap-4 border-b border-[var(--line-light)] py-5"
                  >
                    <span className="mono-micro mt-1 shrink-0 text-bone/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] leading-relaxed text-bone/65">
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
      <section className="surface-bone py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Our values"
            title="Principles, not posters."
            copy="Five commitments that shape how we work with products, people and partners."
          />

          <div className="mt-12 border-t border-[var(--line)]">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 0.04}
                className="group grid gap-2 border-b border-[var(--line)] py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="mono-micro text-ember md:col-span-1">
                  {value.index}
                </span>
                <h3 className="display text-[clamp(1.7rem,3vw,2.6rem)] leading-none text-ink transition-colors duration-300 group-hover:text-ember md:col-span-4">
                  {value.title}
                </h3>
                <p className="max-w-xl text-[14px] leading-relaxed text-ink/60 md:col-span-6">
                  {value.copy}
                </p>
                <ArrowUpRight className="hidden h-4 w-4 justify-self-end text-ink/20 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember md:col-span-1 md:block" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zoelex */}
      <section id="why-zoelex" className="surface-dark py-20 md:py-28">
        <div className="shell">
          <SectionHead
            dark
            label="Why brands work with us"
            title="The partner behind your next product."
            copy="Four formats supported from one manufacturing base, with quality, documentation and market requirements discussed from the start."
          />

          <div className="mt-12 grid gap-x-10 border-t border-[var(--line-light)] sm:grid-cols-2 lg:grid-cols-3">
            {whyZoelex.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="border-b border-[var(--line-light)] py-6"
              >
                <p className="mono-micro text-ember">{item.index}</p>
                <h3 className="mt-3 text-[16px] font-medium text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-bone/55">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="surface-bone py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 border border-[var(--line)] bg-bone-2/50 p-6 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-4">
                <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden border border-[var(--line)] bg-ink">
                  <Image
                    src="/images/lab-pipette.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 92vw, 30vw"
                    className="img-duo object-cover opacity-40"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
                  />
                  <span className="display relative text-[5.5rem] leading-none text-bone">
                    VS
                  </span>
                  <span className="mono-micro absolute bottom-5 left-5 text-bone/45">
                    Founder &amp; CEO
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="mono-micro text-ember">Founder</p>
                <h2 className="display mt-3 text-[clamp(2.2rem,4.4vw,3.6rem)] leading-none">
                  {founder.name}
                </h2>
                <p className="mt-2 text-[13px] text-ink/55">{founder.role}</p>
                <blockquote className="mt-7 max-w-2xl text-[clamp(1.15rem,2vw,1.55rem)] leading-relaxed text-ink/75">
                  &ldquo;{founder.quote}&rdquo;
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
      <section className="bg-bone-2 py-20 md:py-24">
        <div className="shell">
          <SectionHead
            label="How we work"
            title="Clear steps. Agreed requirements."
          />
          <div className="mt-10 grid gap-x-10 border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 0.05}
                className="border-b border-[var(--line)] py-6"
              >
                <p className="display text-stroke text-[clamp(2.4rem,4vw,3.4rem)] leading-none">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/70">
                  {step}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="surface-dark py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="mono-micro text-bone/45">Careers</span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[var(--line-light)]"
              />
            </div>
            <h2 className="display mt-6 text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[0.92] text-bone">
              Grow with us.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/55">
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
            <p className="mono-micro mb-4 text-bone/40">Areas we hire for</p>
            <div className="border-t border-[var(--line-light)]">
              {roles.map((role, index) => (
                <div
                  key={role}
                  className="flex items-center justify-between gap-4 border-b border-[var(--line-light)] py-4 text-[14px] text-bone/65"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="mono-micro text-bone/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {role}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-bone/25" />
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] leading-relaxed text-bone/40">
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
