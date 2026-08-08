import { PhoneCall } from "lucide-react";
import { site } from "@/lib/site-config";

/** §8.5 (2) — prominent red emergency callout bar with big click-to-call. */
export function EmergencyCallout() {
  return (
    <div className="bg-emergency">
      <div className="mx-auto flex max-w-(--container-page) flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-body font-semibold text-white">
          Medical emergency? Don&apos;t wait — call us now, we&apos;re available 24 hours.
        </p>
        <a
          href={site.contact.emergencyPhoneHref}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-input bg-white px-6 font-display text-lg font-semibold text-emergency shadow-soft"
        >
          <PhoneCall className="h-5 w-5" aria-hidden="true" />
          {site.contact.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
