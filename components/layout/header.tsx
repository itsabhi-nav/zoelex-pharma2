"use client";

import { useEffect, useState } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-[var(--line)] bg-bone/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <motion.div
          className="absolute left-0 top-0 h-px w-full origin-left bg-ember"
          style={{ scaleX: progress }}
        />
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Logo onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
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

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link
                href="/contact"
                className="btn btn-ember !px-5 !py-3"
              >
                Start an enquiry
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center border border-[var(--line-strong)] text-ink transition-colors hover:border-ink lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto border-t border-[var(--line)] bg-bone pt-[var(--nav-h)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="shell flex min-h-full flex-col justify-between gap-12 py-8">
              <nav className="flex flex-col" aria-label="Mobile">
                {nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-[var(--line)]"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4",
                        isActive(item.href) ? "text-ember" : "text-ink",
                      )}
                    >
                      <span className="display text-[clamp(2.2rem,9vw,3.6rem)] leading-none">
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <p className="eyebrow mb-2">Talk to us</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="block text-sm text-ink/75 transition-colors hover:text-ember"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="block text-sm text-ink/75 transition-colors hover:text-ember"
                  >
                    {site.phone}
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2">Office hours</p>
                  <p className="text-sm text-ink/60">{site.hours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
