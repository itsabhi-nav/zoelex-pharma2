"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications, qualitySteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export function QualityScrolly({
  id = "quality",
  image = "/images/cleanroom.jpg",
  imageAlt = "Controlled production environment",
  showCertifications = true,
}: {
  id?: string;
  image?: string;
  imageAlt?: string;
  showCertifications?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(
      Math.min(
        qualitySteps.length - 1,
        Math.max(0, Math.floor(value * qualitySteps.length)),
      ),
    );
  });

  return (
    <section
      id={id}
      className="surface-dark relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="img-duo object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="mono-micro text-bone/45">
                  Quality &amp; compliance
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[var(--line-light)]"
                />
              </div>

              <h2 className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.94] text-bone">
                Checked at every
                <br />
                stage. Documented
                <br />
                at every step.
              </h2>

              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone/55">
                Zoelex operates under GMP, FSSAI and GLP certifications.
                Product requirements and supporting documentation are reviewed
                with each manufacturing brief.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-ember" aria-hidden="true" />
                <span className="mono-micro text-bone/55">
                  {qualitySteps[active]?.title ?? qualitySteps[0].title}
                </span>
              </div>

              <Link
                href="/manufacturing#quality"
                className="link-arrow mt-8 text-bone/70 hover:text-ember"
              >
                How manufacturing works
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-6 lg:col-start-7">
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-[var(--line-light)]">
              <motion.div
                className="h-full w-full origin-top bg-ember"
                style={{ scaleY }}
              />
            </div>

            {qualitySteps.map((step, index) => {
              const isReached = index <= active;
              return (
                <motion.div
                  key={step.index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pb-8 pl-10 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border transition-colors duration-300",
                      isReached
                        ? "border-ember bg-ember"
                        : "border-[var(--line-light-strong)] bg-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1 w-1 rounded-full transition-colors duration-300",
                        isReached ? "bg-ink" : "bg-bone/30",
                      )}
                    />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span
                      className={cn(
                        "mono-micro transition-colors duration-300",
                        isReached ? "text-ember" : "text-bone/25",
                      )}
                    >
                      {step.index}
                    </span>
                    <h3
                      className={cn(
                        "text-[16px] font-medium leading-snug transition-colors duration-300 md:text-[17px]",
                        isReached ? "text-bone" : "text-bone/40",
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 max-w-md pl-[calc(1.25rem+0.75rem)] text-[13px] leading-relaxed text-bone/45">
                    {step.copy}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {showCertifications && (
          <div className="mt-16 border-t border-[var(--line-light)] pt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="display text-[clamp(1.9rem,3.2vw,2.8rem)] leading-none text-bone">
                Certified operations.
              </h3>
              <p className="mono-micro text-bone/35">{imageAlt}</p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden border border-[var(--line-light)] bg-[var(--line-light)] sm:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.code} className="bg-ink p-6 md:p-7">
                  <p className="display text-[clamp(2rem,3.4vw,2.8rem)] leading-none text-ember">
                    {cert.code}
                  </p>
                  <p className="mt-4 text-[14px] font-medium text-bone">
                    {cert.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-bone/50">
                    {cert.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
