import Link from "next/link";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M11 12h22L11 32h22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="miter"
      />
      <circle cx="22" cy="22" r="1.7" fill="var(--color-ember)" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
  compact = false,
  onClick,
}: {
  className?: string;
  href?: string | null;
  compact?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col">
        <span className="text-[13px] font-semibold leading-none tracking-[0.28em]">
          ZOELEX
        </span>
        {!compact && (
          <span className="mt-1 text-[7px] font-medium uppercase leading-none tracking-[0.42em] opacity-55">
            Pharma
          </span>
        )}
      </span>
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label="Zoelex Pharma — home" onClick={onClick} className="inline-flex">
      {content}
    </Link>
  );
}
