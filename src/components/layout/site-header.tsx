"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, CalendarPlus } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Component B — sticky header; transparent-over-hero on Home, solid elsewhere. */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    // Fragment, not a single wrapper: the mobile menu panel below is
    // `position: fixed`, and `<header>` is `position: sticky` — a sticky
    // ancestor establishes a containing block for fixed descendants, so
    // nesting the panel inside <header> collapsed its `top/bottom` sizing
    // against the ~60px header instead of the viewport. Keeping it a
    // sibling of <header> lets it size against the viewport as intended.
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "border-b border-line bg-clinical-white/95 backdrop-blur-md shadow-soft",
        )}
      >
        <div className="mx-auto flex h-[60px] max-w-(--container-page) items-center justify-between px-5 sm:px-8 lg:h-[72px]">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Logo light={transparent} />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-sm font-medium transition-colors",
                    transparent
                      ? "text-white/90 hover:text-white"
                      : "text-ink hover:text-evergreen",
                    active &&
                      (transparent
                        ? "text-white underline decoration-gold decoration-2 underline-offset-8"
                        : "text-evergreen underline decoration-gold decoration-2 underline-offset-8"),
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="primary" size="md">
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Book appointment
            </Button>
            <Button
              href={site.contact.emergencyPhoneHref}
              variant="emergency"
              size="md"
              className={
                transparent
                  ? "border-white text-white hover:bg-emergency hover:border-emergency"
                  : undefined
              }
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Emergency — Call now
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.contact.emergencyPhoneHref}
              aria-label="Emergency — call now"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-emergency text-emergency"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                transparent ? "text-white" : "text-evergreen",
              )}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-40 overflow-y-auto bg-clinical-white lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "min-h-[48px] rounded-input px-3 py-3 font-display text-xl font-medium text-ink",
                    pathname === link.href && "bg-sage text-evergreen",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-3 border-t border-line px-5 py-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Book appointment
              </Button>
              <Button
                href={site.contact.emergencyPhoneHref}
                variant="emergency"
                size="lg"
                className="w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency — Call now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
