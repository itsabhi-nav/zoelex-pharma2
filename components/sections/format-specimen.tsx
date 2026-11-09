"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { formats } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

const specimen = [
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

const CYCLE = 5200;

export function FormatSpecimen() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const current = formats[active];
  const image = specimen[active];

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % formats.length);
    }, CYCLE);
    return () => window.clearInterval(id);
  }, [reduced, paused, active]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative mx-auto w-full max-w-[470px]"
    >
      <Tilt strength={4}>
        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line-light)] bg-ink-3">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={cn("absolute inset-0", image.className)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={active === 0}
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10"
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
            <span className="mono-micro text-bone/55">Product format</span>
            <span className="mono-micro text-bone/45">
              {current.index} / 04
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mono-micro text-ember">{current.short}</p>
                <h2 className="display mt-2 text-[clamp(2rem,4vw,3.2rem)] leading-[0.92] text-bone">
                  {current.name}
                </h2>
                <Link
                  href={`/technologies#${current.slug}`}
                  className="link-arrow mt-4 text-bone/75 hover:text-ember"
                >
                  View format
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Tilt>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {formats.map((format, index) => {
          const isActive = index === active;
          return (
            <button
              key={format.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${format.name}`}
              aria-pressed={isActive}
              className="group relative pt-2 text-left"
            >
              <span className="relative block h-px w-full overflow-hidden bg-[var(--line-light)]">
                {isActive && (
                  <span
                    key={active}
                    className="absolute inset-y-0 left-0 block w-full origin-left bg-ember"
                    style={{
                      animation: reduced
                        ? "none"
                        : `specimen-progress ${CYCLE}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                      transform: reduced ? "scaleX(1)" : undefined,
                    }}
                  />
                )}
              </span>
              <span
                className={cn(
                  "mono-micro mt-2 block truncate transition-colors duration-300",
                  isActive
                    ? "text-bone"
                    : "text-bone/35 group-hover:text-bone/65",
                )}
              >
                {format.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
