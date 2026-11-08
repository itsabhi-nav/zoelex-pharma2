"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLines } from "@/components/ui/reveal";

const stats = [
  { label: "Delivery formats", value: "Four" },
  { label: "Certifications", value: "GMP · FSSAI · GLP" },
  { label: "Enquiry response", value: "24–48 hours" },
  { label: "Manufacturing base", value: "Pune, India" },
];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} className="relative pt-24 md:pt-28">
      <div className="shell grid items-center gap-12 pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
        <motion.div
          className="lg:col-span-6"
          style={reduced ? undefined : { y: textY, opacity: textOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow"
          >
            Contract &amp; private-label manufacturing · Pune, India
          </motion.p>

          <h1 className="display display-tight mt-6 text-[clamp(3rem,7.2vw,6.6rem)]">
            <MaskLines
              delay={0.1}
              lines={[
                <>Built to be</>,
                <>taken.</>,
                <>
                  <span className="italic text-ember">Designed</span> to be
                </>,
                <>remembered.</>,
              ]}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/65">
              Zoelex Pharma makes gummies, oral thin films, softgels and
              liposomal products for brands that care how the product is taken
              — and how it is remembered.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-ember">
                Start an enquiry
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/technologies" className="btn btn-outline">
                Explore formats
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 hidden items-center gap-3 lg:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line-strong)] text-ink/50">
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
              Scroll
            </span>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6">
          <motion.div
            style={reduced ? undefined : { y: imageY }}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0"
          >
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="img-frame img-warm relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)]"
            >
              <Image
                src="/images/gummies-jar.jpg"
                alt="Red gummy supplements in a clear jar"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-4 hidden w-[38%] overflow-hidden rounded-sm border-[6px] border-bone sm:block md:-left-10"
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/softgels-2.jpg"
                  alt="Amber softgel capsules in warm light"
                  fill
                  sizes="20vw"
                  className="img-warm object-cover object-bottom"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="shell">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] py-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                {stat.label}
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-ink/85">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
