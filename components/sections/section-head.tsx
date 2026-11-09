import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHead({
  label,
  title,
  copy,
  dark = false,
  className,
}: {
  label?: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
      <Reveal className="lg:col-span-7">
        {label && (
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "mono-micro",
                dark ? "text-bone/45" : "text-ink/45",
              )}
            >
              {label}
            </span>
            <span
              className={cn(
                "h-px flex-1",
                dark ? "bg-[var(--line-light)]" : "bg-[var(--line)]",
              )}
              aria-hidden="true"
            />
          </div>
        )}
        <h2
          className={cn(
            "display mt-5 text-[clamp(2.4rem,5.6vw,5rem)] leading-[0.94]",
            dark ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {copy && (
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <p
            className={cn(
              "max-w-sm text-[15px] leading-relaxed",
              dark ? "text-bone/60" : "text-ink/60",
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}
