"use client";

import { Phone, CalendarPlus, PhoneCall } from "lucide-react";
import { site } from "@/lib/site-config";

/** Component M — mobile sticky action bar: big Call + Book buttons, red Emergency tap. */
export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-clinical-white/95 backdrop-blur-md shadow-[0_-8px_24px_rgba(20,67,46,0.08)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={site.contact.emergencyPhoneHref}
        className="flex min-h-[56px] flex-1 items-center justify-center gap-1.5 border-r border-line bg-emergency font-body text-sm font-semibold text-white"
      >
        <PhoneCall className="h-4 w-4" aria-hidden="true" />
        Emergency
      </a>
      <a
        href={site.contact.phoneHref}
        className="flex min-h-[56px] flex-1 items-center justify-center gap-1.5 border-r border-line font-body text-sm font-semibold text-evergreen"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <a
        href="/contact"
        className="flex min-h-[56px] flex-1 items-center justify-center gap-1.5 bg-evergreen font-body text-sm font-semibold text-white"
      >
        <CalendarPlus className="h-4 w-4" aria-hidden="true" />
        Book
      </a>
    </div>
  );
}
