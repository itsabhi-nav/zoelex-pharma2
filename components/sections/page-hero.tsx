import type { ReactNode } from "react";
import { MaskReveal, Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { SpecRail } from "@/components/sections/spec-rail";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  meta,
  image,
  imageClassName = "img-warm",
  imageCaption,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
  meta?: { label: string; value: string }[];
  image?: { src: string; alt: string };
  imageClassName?: string;
  imageCaption?: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-dark relative overflow-hidden pt-[calc(var(--nav-h)+2.5rem)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-1/4 top-0 h-[50rem] w-[50rem] rounded-full bg-ember/10 blur-[150px]" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-sage/5 blur-[130px]" />
      </div>

      <div className="shell relative">
        <Reveal>
          <p className="mono-label flex items-center gap-3 text-ember">
            <span className="h-px w-8 bg-ember" aria-hidden="true" />
            {kicker}
          </p>
        </Reveal>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <MaskReveal>
              <h1 className="display display-tight max-w-[16ch] text-[clamp(3rem,7vw,7rem)]">
                {title}
              </h1>
            </MaskReveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="max-w-sm text-[16px] leading-relaxed text-bone/65">
                {lede}
              </p>
              {children}
            </Reveal>
          </div>
        </div>

        {meta && meta.length > 0 && (
          <Reveal delay={0.2}>
            <SpecRail items={meta} className="mt-12 md:mt-16" />
          </Reveal>
        )}
      </div>

      {image && (
        <div className="shell relative mt-12 md:mt-16">
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            priority
            sizes="100vw"
            className={cn(
              "aspect-[16/11] rounded-[var(--radius)] border border-[var(--line-light)] md:aspect-[16/6]",
            )}
            imgClassName={imageClassName}
            speed={45}
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-bone/35">
            <span>{imageCaption ?? "Illustrative image."}</span>
            <span className="mono-micro">Zoelex / {kicker}</span>
          </div>
        </div>
      )}

      <div className="mt-14 border-t border-[var(--line-light)]" />
    </section>
  );
}
