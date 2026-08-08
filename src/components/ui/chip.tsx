import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
  withCheck = true,
}: {
  children: React.ReactNode;
  className?: string;
  withCheck?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill bg-gold-tint px-3.5 py-1.5",
        "font-mono text-xs font-medium uppercase tracking-[0.08em] text-evergreen",
        className,
      )}
    >
      {withCheck && <CheckCircle2 className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden="true" />}
      {children}
    </span>
  );
}
