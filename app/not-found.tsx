import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Formats", href: "/technologies" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Export", href: "/global" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="surface-dark relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[calc(var(--nav-h)+2rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-10 h-[42rem] w-[42rem] rounded-full bg-ember/[0.08] blur-[150px]" />
        <p className="display text-stroke-light absolute -right-6 top-1/2 -translate-y-1/2 text-[clamp(12rem,42vw,38rem)] leading-none opacity-40">
          404
        </p>
      </div>

      <div className="shell relative flex flex-1 items-center py-16">
        <div className="max-w-3xl">
          <p className="mono-label flex items-center gap-3 text-ember">
            <span className="h-px w-8 bg-ember" aria-hidden="true" />
            Error 404
          </p>
          <h1 className="display display-tight mt-7 text-[clamp(3rem,8vw,7rem)] leading-[0.88] text-bone">
            This page
            <br />
            doesn&apos;t exist.
          </h1>
          <p className="mt-7 max-w-md text-[16px] leading-relaxed text-bone/55">
            The address may have changed, or the page has moved. Let&apos;s get
            you back to something that does.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-ember">
              Back to home
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/technologies" className="btn btn-outline-light">
              Explore formats
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line-light)] pt-6">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-baseline gap-2 text-[13px] text-bone/55 transition-colors hover:text-ember"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-[var(--line-light)] py-3">
        <Marquee
          items={[
            "Contract manufacturing",
            "Private label",
            "Nutraceutical formats",
            "Pune, India",
          ]}
          className="text-bone/25"
          itemClassName="mono-label"
          duration={30}
        />
      </div>
    </section>
  );
}
