import { cn } from "@/lib/utils";

export function SpecRail({
  items,
  className,
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="border-t border-[var(--line)] pt-3">
          <dt className="mono-micro opacity-50">{item.label}</dt>
          <dd className="mt-1.5 text-[13px] font-medium text-current">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
