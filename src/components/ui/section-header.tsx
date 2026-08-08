import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/**
 * Component O from design.md §5 — mono eyebrow → Fraunces H2 → optional
 * intro line, with a gold Care-Line "node" marker at the left.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,147,47,0.18)]"
        />
        <p className={cn("eyebrow", light && "text-gold")}>{eyebrow}</p>
      </div>
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-[1.3] font-medium text-balance sm:text-4xl",
          light ? "text-white" : "text-evergreen",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/80" : "text-ink/70")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
