import { cn } from "@/lib/utils";

/**
 * The "Living Cross" — a medical cross whose lower arm resolves into a leaf,
 * the signature mark described in design.md §2/§3.5. Pure inline SVG (no
 * external asset, no emoji) so it scales crisply and inherits currentColor.
 */
export function LivingCrossMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Vertical + horizontal cross arms */}
      <path
        d="M17 4H23V16H35V22H23V29.5C23 33 20.5 36 17 36V22H5V16H17V4Z"
        fill="currentColor"
      />
      {/* Leaf tip replacing the lower arm terminus */}
      <path
        d="M17 22C17 22 13.5 27.5 17 32.5C20.5 27.5 17 22 17 22Z"
        className="fill-gold"
      />
    </svg>
  );
}

export function Logo({
  className,
  wordmarkClassName,
  light = false,
}: {
  className?: string;
  wordmarkClassName?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LivingCrossMark className={cn("h-8 w-8 shrink-0", light ? "text-gold" : "text-evergreen")} />
      <span
        className={cn(
          "font-display text-lg leading-tight font-semibold tracking-tight",
          light ? "text-white" : "text-evergreen",
          wordmarkClassName,
        )}
      >
        Ogunsusi
        <span className="block text-[0.65rem] font-mono font-medium uppercase tracking-[0.15em] not-italic text-gold">
          Specialist Hospital
        </span>
      </span>
    </span>
  );
}
