import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center border-b border-[var(--line-dark)] pb-16 pt-32">
      <div className="shell">
        <p className="eyebrow text-ink/55">Error 404</p>
        <div className="mt-7 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="display display-tight text-[clamp(2.8rem,7vw,6rem)]">
              This page doesn&apos;t exist.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
              The address may have changed, or the page has moved. Let&apos;s get
              you back to something that does.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-ember">
                Back to home
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/technologies" className="btn btn-outline">
                Explore formats
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line-dark)] pt-6">
          {[
            { label: "About", href: "/about" },
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Export", href: "/global" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink/55 transition-colors hover:text-ember"
            >
              {item.label} ↗
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
