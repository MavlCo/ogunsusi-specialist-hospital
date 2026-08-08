import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Compact interior-page hero: breadcrumbs → mono eyebrow → Fraunces H1 →
 * one-line intro (design.md §8 "Each interior page opens with...").
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  tone = "sage",
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "sage" | "evergreen";
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "border-b border-line",
        tone === "sage" ? "bg-sage" : "bg-evergreen text-white",
      )}
    >
      <div className="mx-auto max-w-(--container-page) px-5 py-14 sm:px-8 sm:py-20">
        <Breadcrumbs items={crumbs} />
        <Reveal className="mt-5 max-w-3xl">
          <p className={cn("eyebrow", tone === "evergreen" && "text-gold")}>{eyebrow}</p>
          <h1
            className={cn(
              "mt-3 font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl",
              tone === "sage" ? "text-evergreen" : "text-white",
            )}
          >
            {title}
          </h1>
          {intro && (
            <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", tone === "sage" ? "text-ink/70" : "text-white/80")}>
              {intro}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
