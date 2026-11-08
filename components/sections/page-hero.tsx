import type { ReactNode } from "react";
import { MaskReveal, Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function PageHero({
  kicker,
  title,
  lede,
  meta,
  image,
  imageClassName = "img-warm",
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
  meta?: { label: string; value: string }[];
  image?: { src: string; alt: string };
  imageClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-28 md:pt-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{kicker}</p>
        </Reveal>

        <div className="mt-7 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <MaskReveal>
              <h1 className="display display-tight max-w-[18ch] text-[clamp(2.9rem,6.6vw,6rem)]">
                {title}
              </h1>
            </MaskReveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
                {lede}
              </p>
              {children}
            </Reveal>
          </div>
        </div>

        {meta && meta.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium text-ink/80">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      {image && (
        <div className="shell mt-12 md:mt-16">
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            sizes="100vw"
            className="aspect-[16/10] rounded-sm md:aspect-[16/6]"
            imgClassName={imageClassName}
            speed={50}
          />
        </div>
      )}
    </section>
  );
}
