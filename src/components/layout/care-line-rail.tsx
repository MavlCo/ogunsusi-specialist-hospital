"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Component C — the signature Care Line side-rail (design.md §2/§5): a
 * continuous gold line down the left margin with a node per primary
 * section, plus a rotated emergency click-to-call at the base. Desktop
 * only (≥1024px) — collapses into the header/sticky bar on smaller screens.
 */
export function CareLineRail() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Section navigation"
      className="fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col items-center border-r border-line bg-clinical-white/60 backdrop-blur-sm lg:flex"
    >
      <div className="relative flex flex-1 flex-col items-center justify-center gap-8 py-10">
        {/* The continuous gold line threading behind the nodes */}
        <span aria-hidden="true" className="absolute top-10 bottom-10 left-1/2 w-px -translate-x-1/2 bg-line" />
        <span
          aria-hidden="true"
          className="absolute top-10 left-1/2 w-px -translate-x-1/2 bg-gold transition-all duration-500"
          style={{ height: "calc(100% - 80px)" }}
        />

        <nav className="relative flex flex-col items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                aria-label={link.label}
                className="group relative flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border-2 bg-clinical-white transition-all duration-200",
                    active ? "border-gold bg-gold scale-125" : "border-healing-green group-hover:border-gold",
                  )}
                />
                <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-input bg-evergreen px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white opacity-0 shadow-soft transition-opacity duration-150 group-hover:opacity-100">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <a
        href={site.contact.emergencyPhoneHref}
        className="mb-8 flex flex-col items-center gap-2 text-emergency"
        aria-label="Emergency — call now"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Emergency
        </span>
      </a>
    </aside>
  );
}
