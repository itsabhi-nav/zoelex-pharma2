"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (
      window as unknown as {
        __lenis?: { stop: () => void; start: () => void };
      }
    ).__lenis;
    if (open) {
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-b border-[var(--line-light)] bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <motion.div
          className="absolute left-0 top-0 h-px w-full origin-left bg-ember"
          style={{ scaleX: progress }}
        />
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Logo className="text-bone" onClick={() => setOpen(false)} />

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="mono-micro hidden text-bone/40 xl:block">
              Pune · India
            </span>
            <Link
              href="/contact"
              className="btn btn-ember !hidden !px-5 !py-3 sm:!inline-flex"
            >
              Start an enquiry
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center border border-[var(--line-light-strong)] text-bone transition-colors hover:border-bone lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-ink pt-[var(--nav-h)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <Image
                src="/images/texture-dark.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex min-h-full flex-col justify-between gap-12 pb-10 pt-8">
              <nav className="shell flex flex-col" aria-label="Mobile">
                {nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-[var(--line-light)]"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-baseline justify-between gap-6 py-4",
                        isActive(item.href) ? "text-ember" : "text-bone",
                      )}
                    >
                      <span className="display text-[clamp(2.6rem,11vw,4.2rem)] leading-none">
                        {item.label}
                      </span>
                      <span className="mono-micro text-bone/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="shell grid gap-8 sm:grid-cols-2"
              >
                <div>
                  <p className="mono-micro mb-3 text-bone/40">Talk to us</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="block text-sm text-bone/75 transition-colors hover:text-ember"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm text-bone/75 transition-colors hover:text-ember"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-ember"
                  >
                    WhatsApp the team
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div>
                  <p className="mono-micro mb-3 text-bone/40">Office</p>
                  <p className="text-sm leading-relaxed text-bone/60">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </p>
                  <p className="mt-4 text-sm text-bone/60">{site.hours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
