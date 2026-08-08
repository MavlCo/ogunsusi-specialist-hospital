import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const hmoPlaceholders = ["HMO Partner", "HMO Partner", "HMO Partner", "HMO Partner", "HMO Partner", "HMO Partner"];

/** Component H — §7.11 / §8.6. Reused on Home, Insurance & HMO, Patients & Visitors. */
export function InsuranceBlock() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Insurance / HMO"
            title="Are you covered? We accept HMO patients."
            intro="Ogunsusi Specialist Hospital is an accredited provider on private health-insurance networks — insured patients are treated on a cashless basis. Call us to confirm your specific HMO before your visit."
          />
          <Reveal delay={0.1}>
            <Button href="/insurance" size="lg" className="lg:justify-self-start">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              Check your HMO
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
            Accepted HMO partners
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {hmoPlaceholders.map((label, i) => (
              <div
                key={i}
                className="flex h-16 items-center justify-center rounded-input border border-dashed border-line bg-sage/60 px-3 text-center font-mono text-[11px] text-ink/40"
              >
                {label}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink/40">
            Accepted-HMO logos will appear here once confirmed by the hospital.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
