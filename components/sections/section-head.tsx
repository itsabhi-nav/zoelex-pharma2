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
          <p
            className={cn(
              "eyebrow mb-5 flex items-center gap-3",
              dark && "!text-bone/55",
            )}
          >
            <span className="h-px w-6 bg-ember" />
            {label}
          </p>
        )}
        <h2 className="display text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[1.02]">
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
