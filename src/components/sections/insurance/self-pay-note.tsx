import { Wallet } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/** §8.6 — self-pay note. */
export function SelfPayNote() {
  return (
    <section className="bg-sage py-16 sm:py-20">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="mx-auto flex max-w-2xl items-start gap-4 rounded-card border border-line bg-clinical-white p-7 shadow-soft">
          <Wallet className="mt-0.5 h-6 w-6 shrink-0 text-healing-green" aria-hidden="true" />
          <p className="text-ink/75 leading-relaxed">
            <span className="font-semibold text-ink">Not on an HMO?</span> We
            also welcome self-paying patients across all our services —
            speak with our front desk about payment options before your visit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
