import { cn } from "@/lib/utils";

/**
 * Base card surface — Component E/G/J share this: Sage Mist or white,
 * soft shadow, hover lift + gold left-edge accent (design.md §3.4).
 */
export function Card({
  children,
  className,
  tone = "white",
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "sage";
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-card border border-line p-6 shadow-soft",
        tone === "white" ? "bg-clinical-white" : "bg-sage",
        interactive && "transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-soft-hover",
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-0 bg-gold transition-all duration-200 ease-out group-hover:w-1"
        />
      )}
      {children}
    </div>
  );
}
