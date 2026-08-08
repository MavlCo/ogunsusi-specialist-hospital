import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/appointment-schema";

/**
 * Appointment request intake endpoint.
 *
 * TODO (pre-launch, see design.md §12): wire this to a real transactional
 * channel — e.g. Resend/Nodemailer to info@ogunsusihospital.ng and/or a
 * WhatsApp Business API notification — once credentials are available.
 * Until then, submissions are validated and logged server-side so no
 * request is silently lost, and the client always gets an honest response.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Intentional server-side audit log until email/WhatsApp delivery is wired.
  console.log("[appointment-request]", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
