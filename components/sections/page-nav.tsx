import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function PageNav({
  items,
}: {
  items: { label: string; href: string; description?: string }[];
}) {
  return (
    <section className="surface-dark-2 border-t border-[var(--line-light)]">
      <div className="shell">
        <div className="flex items-center justify-between py-7">
          <p className="mono-label text-bone/45">Continue reading</p>
          <span className="mono-micro text-bone/25">Next</span>
        </div>

        <div className="grid border-t border-[var(--line-light)] md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.06}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-6 border-b border-[var(--line-light)] py-8 transition-colors hover:bg-bone/[0.03] md:px-8 md:py-10"
              >
                <div>
                  <p className="mono-micro text-bone/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="display mt-2 text-[clamp(2rem,4vw,3.4rem)] leading-none text-bone transition-colors group-hover:text-ember">
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-[13px] text-bone/45">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line-light-strong)] text-bone/60 transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
