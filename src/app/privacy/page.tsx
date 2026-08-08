import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal and health information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use, and protect your personal and health information."
      updated="8 August 2026"
      sections={[
        {
          id: "information-we-collect",
          title: "Information we collect",
          paragraphs: [
            "When you contact us, request an appointment, or visit the hospital, we may collect information such as your name, phone number, WhatsApp number, email address, and details relevant to your care, including health information you or your clinician record as part of your treatment.",
            "Our website may also collect limited technical information (such as browser type and pages visited) to help us keep the site secure and working well.",
          ],
        },
        {
          id: "how-we-use-it",
          title: "How we use your information",
          paragraphs: [
            "We use your information to respond to appointment requests, provide clinical care, communicate with you about your visit, coordinate with your HMO where applicable, and meet our legal and regulatory obligations as a healthcare provider.",
            "We do not sell your personal or health information to third parties.",
          ],
        },
        {
          id: "sharing",
          title: "How we share information",
          paragraphs: [
            "We may share information with your HMO/insurance provider to process your cover, with other healthcare professionals involved in your care, and where required by law or a competent authority.",
          ],
        },
        {
          id: "security",
          title: "Keeping your information secure",
          paragraphs: [
            "We take reasonable administrative and technical measures to protect your information from unauthorised access, loss, or misuse, in line with applicable Nigerian data protection requirements.",
          ],
        },
        {
          id: "your-rights",
          title: "Your rights",
          paragraphs: [
            "You may request access to, correction of, or deletion of your personal information, subject to our clinical and legal record-keeping obligations. Contact us using the details below to make a request.",
          ],
        },
        {
          id: "contact",
          title: "Contact us",
          paragraphs: [
            "If you have questions about this policy or how your information is handled, please reach out using the contact details on our Contact page.",
          ],
        },
      ]}
    />
  );
}
