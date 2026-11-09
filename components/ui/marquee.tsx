import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  itemClassName,
  separator = (
    <span className="block h-1.5 w-1.5 rounded-full bg-current opacity-70" />
  ),
  duration = 34,
  reverse = false,
  fade = true,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
  duration?: number;
  reverse?: boolean;
  fade?: boolean;
}) {
  const group = (hidden: boolean) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={cn("marquee-item", itemClassName)}
        >
          <span>{item}</span>
          <span className="marquee-sep" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("marquee", fade && "marquee-fade", className)}>
      <div
        className="marquee-track"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : undefined,
          } as CSSProperties
        }
      >
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
