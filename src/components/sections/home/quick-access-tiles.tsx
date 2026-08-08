import Link from "next/link";
import { CalendarPlus, HeartPulse, MapPinned, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const tiles = [
  {
    href: "/contact",
    icon: CalendarPlus,
    label: "Book an appointment",
    line: "Reserve a consultation in minutes.",
  },
  {
    href: "/services",
    icon: HeartPulse,
    label: "Our services",
    line: "Outpatient, admission, surgery & more.",
  },
  {
    href: "/contact",
    icon: MapPinned,
    label: "Find & call us",
    line: "Get directions or speak to our team.",
  },
];

/** §7.4 — three big tap tiles for the fast mobile path directly under the hero. */
export function QuickAccessTiles() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-12">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.08}>
              <Link
                href={tile.href}
                className="group flex min-h-[44px] items-center gap-4 rounded-card border border-line bg-clinical-white p-5 shadow-soft-hover transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-evergreen transition-colors group-hover:bg-gold-tint">
                  <tile.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-body font-semibold text-ink">{tile.label}</span>
                  <span className="mt-0.5 block text-sm text-ink/60">{tile.line}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
