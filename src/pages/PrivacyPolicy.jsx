import LegalLayout, { Section } from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 2024">

      <Section title="1. Who We Are">
        <p>
          MSS Charitable Trust ("we", "our", or "us") is a registered charitable organisation based in
          Guntur, Andhra Pradesh, India (Reg. No. MSST/2024, Indian Trusts Act, 1882). This Privacy Policy
          explains how we collect, use, and protect information provided to us through our website.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong className="text-gray-800">Contact information</strong> — name, email address, and phone number when you submit our contact form.</li>
          <li><strong className="text-gray-800">Donation details</strong> — name and contact details provided during donation-related communications.</li>
          <li><strong className="text-gray-800">Usage data</strong> — pages visited, time spent, and browser type, collected automatically via standard web analytics.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul className="list-disc pl-5 space-y-2">
          <li>To respond to enquiries and contact form submissions.</li>
          <li>To process donations and issue 80G tax receipts.</li>
          <li>To send programme updates or newsletters (only if you have opted in).</li>
          <li>To improve our website and services based on usage patterns.</li>
        </ul>
      </Section>

      <Section title="4. How We Protect Your Information">
        <p>
          We implement reasonable security measures to protect your personal information. We do not sell,
          trade, or rent your personal information to third parties. Your data is used solely for the
          purposes stated in this policy.
        </p>
      </Section>

      <Section title="5. Third-Party Services">
        <p>
          Our contact form uses Web3Forms to deliver messages securely. Donations and communications may
          involve trusted third-party processors. These services have their own privacy policies, and we
          recommend reviewing them before submitting information.
        </p>
      </Section>

      <Section title="6. Cookies">
        <p>
          Our website may use basic session cookies to improve your browsing experience. We do not use
          tracking cookies for advertising. You can disable cookies through your browser settings at any time.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>
          You have the right to request access to, correction of, or deletion of your personal information
          held by us. To exercise these rights, please contact us at{' '}
          <a href="mailto:msscharitabletrust4u@gmail.com" className="text-forest font-medium hover:underline break-all">
            msscharitabletrust4u@gmail.com
          </a>.
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated date. Continued use of our website constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section title="9. Contact Us">
        <p>For any privacy-related questions, please reach out to us:</p>
        <div className="mt-3 bg-gray-50 rounded-xl px-5 py-4 space-y-1.5 text-sm border border-gray-100">
          <div className="font-bold text-gray-800">MSS Charitable Trust</div>
          <div>Guntur, Andhra Pradesh – 522315</div>
          <div>
            <a href="mailto:msscharitabletrust4u@gmail.com" className="text-forest hover:underline break-all">
              msscharitabletrust4u@gmail.com
            </a>
          </div>
          <div>+91 98663 76367</div>
        </div>
      </Section>

    </LegalLayout>
  )
}
