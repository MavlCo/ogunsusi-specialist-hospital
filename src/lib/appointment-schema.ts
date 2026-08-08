import { z } from "zod";

/**
 * Shared client + server validation for the appointment request form
 * (Component I, design.md §5/§8.5). Keeping one schema on both sides
 * guarantees the API route never trusts unvalidated input.
 */
export const appointmentSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[+\d][\d\s-]{6,}$/, "Please enter a valid phone number."),
  whatsapp: z.string().trim().optional().or(z.literal("")),
  service: z.enum(
    ["general-outpatient", "inpatient-admission", "surgery", "mortuary-embalming", "other"],
    { error: "Please select a service." },
  ),
  preferredDateTime: z.string().trim().min(1, "Please share a preferred date & time."),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
