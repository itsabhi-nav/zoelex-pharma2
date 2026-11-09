"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { formats, type Format } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const railImages = [
  { src: "/images/gummies-color.jpg", className: "img-warm" },
  { src: "/images/film-membrane.jpg", className: "img-warm" },
  { src: "/images/softgels-gold.jpg", className: "img-warm" },
  { src: "/images/product-dropper.jpg", className: "img-warm" },
];

type RailImage = (typeof railImages)[number];

function FormatCard({
  format,
  image,
  variant = "rail",
}: {
  format: Format;
  image: RailImage;
  variant?: "rail" | "pin";
}) {
  const pinned = variant === "pin";

  return (
    <article
      data-panel={pinned ? undefined : true}
      className={cn(
        "group flex shrink-0 overflow-hidden border border-[var(--line-light)] bg-ink-2",
        pinned
          ? "w-[clamp(34rem,48vw,44rem)] flex-row"
          : "w-[82vw] max-w-[520px] snap-start flex-col",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-ink-3",
          pinned
            ? "w-[44%] shrink-0 border-r border-[var(--line-light)]"
            : "aspect-[4/3] border-b border-[var(--line-light)]",
        )}
      >
        <Image
          src={image.src}
          alt={format.imageAlt}
          fill
          sizes={
            pinned
              ? "(max-width: 1024px) 44vw, 22vw"
              : "(max-width: 768px) 82vw, 520px"
          }
          className={cn(
            "object-cover transition-transform duration-1000 group-hover:scale-[1.04]",
            image.className,
          )}
        />
        <span className="mono-micro absolute left-4 top-4 bg-ink/70 px-2 py-1 text-bone/80 backdrop-blur-sm">
          {format.index}
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          pinned ? "justify-center p-7 md:p-8" : "p-6 md:p-7",
        )}
      >
        <p className="mono-micro text-ember">{format.short}</p>
        <h3 className="display mt-2 text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[0.98] text-bone">
          {format.name}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-bone/55">
          {format.summary}
        </p>

        <ul className="mt-5 border-t border-[var(--line-light)]">
          {format.bullets.slice(0, 3).map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 border-b border-[var(--line-light)] py-2.5"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" />
              <span className="text-[12px] leading-relaxed text-bone/60">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/technologies#${format.slug}`}
            className="link-arrow text-bone/75 hover:text-ember"
          >
            Explore format
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="mono-micro text-bone/25">
            {format.index} / 04
          </span>
        </div>
      </div>
    </article>
  );
}

export function FormatRail() {
  const reduced = usePrefersReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const pinned = isDesktop && !reduced;

  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const pinViewportRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.06, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(
      Math.min(
        formats.length - 1,
        Math.max(0, Math.round(value * (formats.length - 1))),
      ),
    );
  });

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const measurePinned = useCallback(() => {
    const track = pinTrackRef.current;
    const viewport = pinViewportRef.current;
    if (!track || !viewport) return;
    setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
  }, []);

  useEffect(() => {
    if (!pinned) return;
    measurePinned();
    const observer = new ResizeObserver(measurePinned);
    if (pinRef.current) observer.observe(pinRef.current);
    if (pinTrackRef.current) observer.observe(pinTrackRef.current);
    if (pinViewportRef.current) observer.observe(pinViewportRef.current);
    window.addEventListener("resize", measurePinned);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measurePinned);
    };
  }, [pinned, measurePinned]);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft < 12);
    setAtEnd(el.scrollLeft > max - 12);
  }, []);

  useEffect(() => {
    if (pinned) return;
    sync();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => sync();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pinned, sync]);

  const scrollRail = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const panel = el.querySelector<HTMLElement>("[data-panel]");
    const amount = panel ? panel.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const goToFormat = (direction: 1 | -1) => {
    if (!pinned) {
      scrollRail(direction);
      return;
    }
    const wrapper = pinRef.current;
    if (!wrapper || distance <= 0) return;
    const next = Math.min(
      formats.length - 1,
      Math.max(0, active + direction),
    );
    const top = wrapper.getBoundingClientRect().top + window.scrollY;
    const target = top + (next / (formats.length - 1)) * distance;
    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (target: number, options?: { duration?: number }) => void;
        };
      }
    ).__lenis;
    if (lenis) lenis.scrollTo(target, { duration: 1.1 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

  const controls = (previousDisabled: boolean, nextDisabled: boolean) => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => goToFormat(-1)}
        disabled={previousDisabled}
        aria-label="Previous format"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-light-strong)] text-bone transition-colors hover:border-ember hover:bg-ember hover:text-ink disabled:pointer-events-none disabled:opacity-30"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => goToFormat(1)}
        disabled={nextDisabled}
        aria-label="Next format"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-light-strong)] text-bone transition-colors hover:border-ember hover:bg-ember hover:text-ink disabled:pointer-events-none disabled:opacity-30"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <>
      <div
        ref={pinRef}
        data-format-pin
        className={cn("relative", pinned ? "" : "hidden")}
        style={{ height: `calc(100svh + ${distance}px)` }}
      >
        {pinned && (
          <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-[var(--nav-h)] pb-6">
            <div className="shell mb-6 flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="mono-micro text-bone/40">Formats 01—04</span>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[var(--line-light)]"
                />
              </div>
              {controls(active === 0, active === formats.length - 1)}
            </div>

            <div ref={pinViewportRef} className="overflow-hidden">
              <motion.div
                ref={pinTrackRef}
                style={{ x }}
                className="flex w-max gap-5 pl-[var(--gutter)] pr-[var(--gutter)]"
              >
                {formats.map((format, index) => (
                  <FormatCard
                    key={format.slug}
                    format={format}
                    image={railImages[index]}
                    variant="pin"
                  />
                ))}
              </motion.div>
            </div>

            <div className="shell mt-7">
              <div className="h-px w-full bg-[var(--line-light)]">
                <motion.div
                  className="h-px origin-left bg-ember"
                  style={{ scaleX: progressScale }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {!pinned && (
        <div>
          <div className="shell mb-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="mono-micro text-bone/35">Formats 01—04</span>
              <span className="hidden h-px w-10 bg-[var(--line-light)] sm:block" />
            </div>
            {controls(atStart, atEnd)}
          </div>

          <div
            ref={trackRef}
            onScroll={sync}
            className="hide-scrollbar -mx-[var(--gutter)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-4"
          >
            {formats.map((format, index) => (
              <FormatCard
                key={format.slug}
                format={format}
                image={railImages[index]}
              />
            ))}
            <div aria-hidden="true" className="w-2 shrink-0" />
          </div>

          <div className="shell mt-2 h-px w-full bg-[var(--line-light)]">
            <div
              className="h-px origin-left bg-ember transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${Math.max(0.08, progress || 0)})` }}
            />
          </div>
        </div>
      )}
    </>
  );
}
