"use client";

import { useId, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appointmentSchema } from "@/lib/appointment-schema";
import { serviceOptionsForForm } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof typeof appointmentSchema.shape, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "min-h-[48px] w-full rounded-input border border-line bg-clinical-white px-4 py-2.5 text-ink " +
  "placeholder:text-ink/35 transition-colors focus:border-gold focus:outline-none " +
  "focus:ring-4 focus:ring-gold/15";

const labelClasses = "block text-sm font-semibold text-ink";

/** Component I — appointment request form, §5 / §8.5, with inline validation + success state. */
export function AppointmentForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      service: String(formData.get("service") ?? ""),
      preferredDateTime: String(formData.get("preferredDateTime") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = appointmentSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof appointmentSchema.shape;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something went wrong sending your request. Please call or WhatsApp us instead.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-card border border-line bg-sage/60 p-10 text-center"
      >
        <CircleCheck className="h-10 w-10 text-healing-green" aria-hidden="true" />
        <h3 className="font-display text-xl font-medium text-evergreen">Request received.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink/70">
          Thank you — we&apos;ll call you back to confirm your appointment shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-note`}>
      <div>
        <label htmlFor={`${formId}-fullName`} className={labelClasses}>
          Full name
        </label>
        <input
          id={`${formId}-fullName`}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? `${formId}-fullName-err` : undefined}
          className={cn(inputClasses, "mt-1.5", errors.fullName && "border-emergency")}
        />
        {errors.fullName && <FieldError id={`${formId}-fullName-err`}>{errors.fullName}</FieldError>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-phone`} className={labelClasses}>
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+234 8xx xxx xxxx"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
            className={cn(inputClasses, "mt-1.5", errors.phone && "border-emergency")}
          />
          {errors.phone && <FieldError id={`${formId}-phone-err`}>{errors.phone}</FieldError>}
        </div>
        <div>
          <label htmlFor={`${formId}-whatsapp`} className={labelClasses}>
            WhatsApp <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <input
            id={`${formId}-whatsapp`}
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="If different from phone"
            className={cn(inputClasses, "mt-1.5")}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-service`} className={labelClasses}>
          Service needed
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          required
          defaultValue=""
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? `${formId}-service-err` : undefined}
          className={cn(inputClasses, "mt-1.5", errors.service && "border-emergency")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptionsForForm.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && <FieldError id={`${formId}-service-err`}>{errors.service}</FieldError>}
      </div>

      <div>
        <label htmlFor={`${formId}-preferredDateTime`} className={labelClasses}>
          Preferred date &amp; time
        </label>
        <input
          id={`${formId}-preferredDateTime`}
          name="preferredDateTime"
          type="text"
          placeholder="e.g. Thursday morning, or a specific date"
          required
          aria-invalid={!!errors.preferredDateTime}
          aria-describedby={errors.preferredDateTime ? `${formId}-preferredDateTime-err` : undefined}
          className={cn(inputClasses, "mt-1.5", errors.preferredDateTime && "border-emergency")}
        />
        {errors.preferredDateTime && (
          <FieldError id={`${formId}-preferredDateTime-err`}>{errors.preferredDateTime}</FieldError>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className={labelClasses}>
          Message <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder="Tell us a little about what you need"
          className={cn(inputClasses, "mt-1.5 resize-y")}
        />
      </div>

      {serverError && (
        <p role="alert" className="flex items-start gap-2 text-sm text-emergency">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        Request appointment
      </Button>
      <p id={`${formId}-note`} className="text-center text-xs text-ink/50">
        We&apos;ll call you back to confirm.
      </p>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-emergency">
      <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
