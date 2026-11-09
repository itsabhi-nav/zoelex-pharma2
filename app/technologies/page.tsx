import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PageNav } from "@/components/sections/page-nav";
import { CategoryIndex } from "@/components/sections/category-index";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { formats } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Product Formats",
  description:
    "Explore Zoelex Pharma's four manufacturing formats: vegan gummies, oral thin films, softgels and liposomal formulations.",
};

const formatMedia = [
  {
    src: "/images/gummies-color.jpg",
    alt: "Colourful gummy supplements arranged in rows",
    className: "img-warm",
  },
  {
    src: "/images/film-membrane.jpg",
    alt: "Translucent green oral thin film",
    className: "img-warm",
  },
  {
    src: "/images/softgels-gold.jpg",
    alt: "Golden softgel capsules on a pale surface",
    className: "img-warm",
  },
  {
    src: "/images/product-dropper.jpg",
    alt: "Amber dropper bottle in warm light",
    className: "img-warm",
  },
];

export default function FormatsPage() {
  return (
    <>
      <PageHero
        kicker="Product formats"
        title={
          <>
            Four formats.{" "}
            <span className="text-ember">One manufacturing partner.</span>
          </>
        }
        lede="Explore what each dosage form can support, then bring us the brief. Suitability is reviewed for every product."
        image={{
          src: "/images/gummies-spill.jpg",
          alt: "Red gummy supplements spilling from a clear bottle",
        }}
        imageClassName="img-warm object-[50%_58%]"
        imageCaption="Illustrative product imagery."
        meta={[
          { label: "Formats", value: "Four delivery systems" },
          { label: "Gummies", value: "Pectin-based, vegan" },
          { label: "Films", value: "Dissolve, no water" },
          { label: "Packs", value: "Bottles · jars · sachets" },
        ]}
      />

      <div className="surface-dark sticky top-[var(--nav-h)] z-30 border-b border-[var(--line-light)] bg-ink/85 backdrop-blur-xl">
        <div className="shell hide-scrollbar flex items-center gap-2 overflow-x-auto py-3">
          <span className="mono-micro mr-2 hidden shrink-0 text-bone/35 md:block">
            Jump to
          </span>
          {formats.map((format) => (
            <a
              key={format.slug}
              href={`#${format.slug}`}
              className="mono-micro shrink-0 border border-[var(--line-light-strong)] px-3 py-2 text-bone/55 transition-colors hover:border-ember hover:text-ember"
            >
              {format.name}
            </a>
          ))}
          <Link
            href="/contact"
            className="mono-micro ml-auto hidden shrink-0 items-center gap-1.5 text-ember md:flex"
          >
            Start an enquiry <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {formats.map((format, index) => {
        const even = index % 2 === 0;
        const dark = !even;
        const media = formatMedia[index];
        return (
          <section
            key={format.slug}
            id={format.slug}
            className={cn(
              "py-20 md:py-28",
              dark ? "surface-dark" : "surface-bone",
            )}
          >
            <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <Reveal
                className={cn(
                  "lg:col-span-6",
                  !even && "lg:order-2 lg:col-start-7",
                )}
              >
                <figure>
                  <ParallaxImage
                    src={media.src}
                    alt={media.alt}
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="aspect-[4/5] border border-[var(--line)]"
                    imgClassName={media.className}
                    speed={50}
                  />
                  <figcaption
                    className={cn(
                      "mt-3 flex items-center justify-between gap-4 text-[11px]",
                      dark ? "text-bone/40" : "text-ink/45",
                    )}
                  >
                    <span>Illustrative image.</span>
                    <span className="mono-micro">
                      Fig. {format.index}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              <div
                className={cn(
                  "lg:col-span-5",
                  even ? "lg:col-start-8" : "lg:order-1 lg:col-start-1",
                )}
              >
                <Reveal>
                  <div className="flex items-end justify-between gap-4">
                    <p
                      className={cn(
                        "mono-micro",
                        dark ? "text-bone/40" : "text-ink/45",
                      )}
                    >
                      {format.short}
                    </p>
                    <span
                      className={cn(
                        "display text-[clamp(3rem,6vw,5rem)] leading-[0.8]",
                        dark ? "text-stroke-light" : "text-stroke",
                      )}
                      aria-hidden="true"
                    >
                      {format.index}
                    </span>
                  </div>
                  <h2
                    className={cn(
                      "display mt-3 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.96]",
                      dark ? "text-bone" : "text-ink",
                    )}
                  >
                    {format.name}
                  </h2>
                  <p
                    className={cn(
                      "mt-5 max-w-md text-[15px] leading-relaxed",
                      dark ? "text-bone/60" : "text-ink/65",
                    )}
                  >
                    {format.summary}
                  </p>

                  <ul
                    className={cn(
                      "mt-7 border-t",
                      dark
                        ? "border-[var(--line-light)]"
                        : "border-[var(--line)]",
                    )}
                  >
                    {format.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={cn(
                          "flex items-start gap-3 border-b py-3",
                          dark
                            ? "border-[var(--line-light)]"
                            : "border-[var(--line)]",
                        )}
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" />
                        <span
                          className={cn(
                            "text-[13px] leading-relaxed",
                            dark ? "text-bone/60" : "text-ink/65",
                          )}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {format.categories.map((category) => (
                      <span
                        key={category}
                        className={cn(
                          "mono-micro border px-2.5 py-1.5",
                          dark
                            ? "border-[var(--line-light-strong)] text-bone/55"
                            : "border-[var(--line-strong)] text-ink/55",
                        )}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?format=${encodeURIComponent(format.name)}`}
                    className={cn(
                      "btn mt-7",
                      dark ? "btn-outline-light" : "btn-outline",
                    )}
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

      <p className="surface-bone shell border-t border-[var(--line)] py-5 text-[12px] leading-relaxed text-ink/50">
        Ingredient examples are for discussion only. Suitability, specifications
        and applicable requirements are reviewed for each brief.
      </p>

      {/* Categories */}
      <section id="categories" className="bg-bone-2 py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="mono-micro text-ink/45">
                  Product categories
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--line)]"
                />
              </div>
              <h2 className="display mt-6 text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[0.94]">
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

          <div className="mt-12">
            <CategoryIndex />
          </div>
        </div>
      </section>

      {/* Custom formulation CTA */}
      <section className="surface-dark py-20 md:py-24">
        <div className="shell">
          <Reveal className="flex flex-col items-start justify-between gap-6 border border-[var(--line-light)] bg-ink-2 p-7 sm:flex-row sm:items-center md:p-10">
            <div>
              <p className="mono-micro text-ember">Have a different idea?</p>
              <h2 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] text-bone">
                Ask us to review your brief.
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-bone/55">
                Share the ingredient, dose, format and market. We will review
                feasibility with you.
              </p>
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
