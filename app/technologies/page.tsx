import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { categories, formats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Formats",
  description:
    "Explore Zoelex Pharma's four manufacturing formats: vegan gummies, oral thin films, softgels and liposomal formulations.",
};

export default function FormatsPage() {
  return (
    <>
      <PageHero
        kicker="Product formats"
        title="Four formats. One manufacturing partner."
        lede="Explore what each dosage form can support, then bring us the brief. Suitability is reviewed for every product."
        image={{
          src: "/images/gummies-spill.jpg",
          alt: "Red gummy supplements spilling from a clear bottle",
        }}
        imageClassName="img-warm object-[50%_58%]"
        meta={[
          { label: "Formats", value: "Four delivery systems" },
          { label: "Gummies", value: "Pectin-based, vegan" },
          { label: "Films", value: "Dissolve, no water" },
          { label: "Packs", value: "Bottles · jars · sachets" },
        ]}
      />

      <div className="sticky top-[var(--nav-h)] z-30 border-b border-[var(--line-dark)] bg-bone/95 backdrop-blur-md">
        <div className="shell hide-scrollbar flex items-center gap-2 overflow-x-auto py-3">
          <span className="mr-2 hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45 md:block">
            Jump to
          </span>
          {formats.map((format) => (
            <a
              key={format.slug}
              href={`#${format.slug}`}
              className="shrink-0 rounded-sm border border-[var(--line-dark)] px-3 py-1.5 text-[12px] text-ink/65 transition-colors hover:border-ember hover:text-ember"
            >
              {format.name}
            </a>
          ))}
          <Link
            href="/contact"
            className="ml-auto hidden shrink-0 items-center gap-1.5 text-[12px] font-semibold text-ember md:flex"
          >
            Start an enquiry <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {formats.map((format, index) => {
        const even = index % 2 === 0;
        return (
          <section
            key={format.slug}
            id={format.slug}
            className={`py-16 md:py-24 scroll-mt-[calc(var(--nav-h)+4rem)] ${
              index % 2 === 1
                ? "border-y border-[var(--line-dark)] bg-bone-2/40"
                : ""
            }`}
          >
            <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <Reveal
                className={`lg:col-span-6 ${
                  even ? "" : "lg:order-2 lg:col-start-7"
                }`}
              >
                <figure>
                  <ParallaxImage
                    src={format.image}
                    alt={format.imageAlt}
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="aspect-[4/5] rounded-sm border border-[var(--line-dark)]"
                    imgClassName={format.imageClassName}
                    speed={50}
                  />
                </figure>
              </Reveal>

              <div
                className={`lg:col-span-5 ${
                  even ? "lg:col-start-8" : "lg:order-1 lg:col-start-1"
                }`}
              >
                <Reveal>
                  <p className="eyebrow mb-3 text-ink/50">{format.short}</p>
                  <h2 className="display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04]">
                    {format.name}
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
                    {format.summary}
                  </p>

                  <ul className="mt-7 border-t border-[var(--line-dark)]">
                    {format.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 border-b border-[var(--line-dark)] py-3"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" />
                        <span className="text-[13px] leading-relaxed text-ink/65">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {format.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-sm border border-[var(--line-dark)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink/55"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?format=${encodeURIComponent(format.name)}`}
                    className="btn btn-outline mt-7"
                  >
                    Discuss {format.name.split(" ")[0]}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <p className="shell border-t border-[var(--line-dark)] py-5 text-[12px] leading-relaxed text-ink/50">
        Ingredient examples are for discussion only. Suitability, specifications
        and applicable requirements are reviewed for each brief.
      </p>

      {/* Categories */}
      <section
        id="categories"
        className="border-t border-[var(--line-dark)] py-20 md:py-28"
      >
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-4">Product categories</p>
              <h2 className="display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04]">
                Browse by wellness category.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
                Example product ideas and the formats that may be considered for
                each category. Final scope depends on formulation feasibility and
                applicable regulations.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid border-t border-[var(--line-dark)] md:grid-cols-2">
            {categories.map((category, index) => (
              <Reveal
                key={category.name}
                delay={(index % 2) * 0.05}
                className="flex flex-col justify-between border-b border-[var(--line-dark)] py-6 md:px-6 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n+1)]:pl-0"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/60">
                    {category.ideas.join(" · ")}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {category.formats.map((format) => (
                      <span
                        key={format}
                        className="rounded-sm bg-plum/[0.04] px-2 py-1 text-[10px] font-medium text-ink/55"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-ink/70 transition-colors hover:text-ember"
                  >
                    Discuss
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 rounded-sm border border-[var(--line-dark)] bg-bone-2/50 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <p className="eyebrow mb-2">Have a different idea?</p>
              <h3 className="display text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.08]">
                Ask us to review your brief.
              </h3>
            </div>
            <Link
              href="/contact?service=Custom%20Formulation"
              className="btn btn-ember shrink-0"
            >
              Discuss a custom formulation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <PageNav
        items={[
          {
            label: "Manufacturing",
            href: "/manufacturing",
            description: "Capabilities, quality and documentation.",
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
