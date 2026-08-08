import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of the ${site.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms governing your use of this website."
      updated="8 August 2026"
      sections={[
        {
          id: "acceptance",
          title: "Acceptance of terms",
          paragraphs: [
            `By using this website, you agree to these terms. If you do not agree, please do not use the site. These terms apply to the ${site.name} website only, and do not replace or override any consent forms, admission agreements, or clinical documentation you sign at the hospital.`,
          ],
        },
        {
          id: "not-medical-advice",
          title: "Not a substitute for medical advice",
          paragraphs: [
            "Content on this website is provided for general information about our hospital and services. It is not medical advice and should not be used to diagnose or treat any condition. Always consult a qualified clinician for medical concerns, and call our emergency line for urgent situations.",
          ],
        },
        {
          id: "appointment-requests",
          title: "Appointment requests",
          paragraphs: [
            "Submitting the appointment form is a request, not a confirmed booking. We will contact you by phone to confirm your appointment. Please arrive with any documents (ID, HMO card and authorisation code, previous records) noted on our Patients & Visitors page.",
          ],
        },
        {
          id: "website-use",
          title: "Acceptable use",
          paragraphs: [
            "You agree not to misuse this website, attempt unauthorised access to our systems, or submit false information through our forms.",
          ],
        },
        {
          id: "liability",
          title: "Limitation of liability",
          paragraphs: [
            "While we take care to keep this website accurate and up to date, we make no warranties about its completeness and are not liable for any loss arising from reliance on website content, to the fullest extent permitted by law.",
          ],
        },
        {
          id: "changes",
          title: "Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. Continued use of the website after changes are posted means you accept the updated terms.",
          ],
        },
      ]}
    />
  );
}
