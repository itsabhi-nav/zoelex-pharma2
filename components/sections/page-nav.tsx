import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function PageNav({
  items,
}: {
  items: { label: string; href: string; description?: string }[];
}) {
  return (
    <section className="border-t border-[var(--line)] bg-bone-2/50">
      <div className="shell">
        <p className="eyebrow py-7">Continue reading</p>
        <div className="grid border-t border-[var(--line)] md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.06}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-6 border-b border-[var(--line)] py-8 transition-colors hover:bg-bone/60 md:px-8 md:py-10"
              >
                <div>
                  <p className="display text-[clamp(1.8rem,3.2vw,2.6rem)] leading-none text-ink transition-colors group-hover:text-ember">
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-[13px] text-ink/55">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[var(--line-strong)] text-ink/60 transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-bone">
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
