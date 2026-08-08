import { CompassIcon, Home, HeartPulse, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site-config";

/** §8.9 — friendly 404, Care-Line motif, buttons back to Home/Services/Contact + emergency call. */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-clinical-white">
      <div className="mx-auto max-w-(--container-page) px-5 py-20 text-center sm:px-8">
        <div className="mx-auto flex justify-center">
          <Logo />
        </div>
        <span
          aria-hidden="true"
          className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-gold-tint text-gold"
        >
          <CompassIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-sm uppercase tracking-[0.1em] text-healing-green">404</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-balance text-evergreen sm:text-5xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on the right path.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
            Our services
          </Button>
          <Button href={site.contact.emergencyPhoneHref} variant="emergency" size="lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Emergency — call now
          </Button>
        </div>
      </div>
    </section>
  );
}
