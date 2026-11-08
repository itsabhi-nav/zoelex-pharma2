"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { formats } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FormatsStack() {
  return (
    <div className="shell">
      <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-5">Product formats</p>
          <h2 className="display text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.98]">
            Four formats.
            <br />
            One standard.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
            Each format brings its own formulation logic, equipment and
            packaging requirements. We review the fit before a sample is made.
          </p>
        </Reveal>
      </div>

      <div className="relative">
        {formats.map((format, index) => (
          <article
            key={format.slug}
            className={cn(
              "lg:sticky mb-5 overflow-hidden rounded-sm border border-[var(--line)] shadow-[0_-12px_40px_rgba(33,26,22,0.08)] last:mb-0 md:mb-7",
              index % 2 === 0 ? "bg-bone" : "bg-bone-2",
            )}
            style={{ top: `calc(var(--nav-h) + ${index * 10}px)` }}
          >
            <div className="grid lg:grid-cols-2">
              <div
                className={cn(
                  "relative aspect-[4/3] lg:aspect-auto lg:min-h-[56vh]",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <Image
                  src={format.image}
                  alt={format.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn("object-cover", format.imageClassName)}
                />
              </div>

              <div
                className={cn(
                  "flex flex-col justify-between p-7 md:p-10 lg:p-12",
                  index % 2 === 1 && "lg:order-1",
                )}
              >
                <Reveal>
                  <p className="eyebrow text-ink/50">{format.short}</p>
                  <h3 className="display mt-4 text-[clamp(2rem,4vw,3.6rem)] leading-[1]">
                    {format.name}
                  </h3>
                  <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink/65">
                    {format.summary}
                  </p>

                  <ul className="mt-7 border-t border-[var(--line)]">
                    {format.bullets.slice(0, 3).map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 border-b border-[var(--line)] py-2.5"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" />
                        <span className="text-[12px] leading-relaxed text-ink/65">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={0.08}
                  className="mt-8 flex flex-wrap items-center justify-between gap-4"
                >
                  <Link
                    href={`/technologies#${format.slug}`}
                    className="btn btn-outline"
                  >
                    Explore {format.name.split(" ")[0]}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <div className="flex flex-wrap gap-1.5">
                    {format.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-sm border border-[var(--line)] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-ink/45"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
