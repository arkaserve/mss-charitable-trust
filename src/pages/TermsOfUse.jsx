import LegalLayout, { Section } from '../components/LegalLayout'

export default function TermsOfUse() {
  return (
    <LegalLayout title="Terms of Use" updated="October 2026">

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing and using the MSS Charitable Trust website, you agree to be bound by these
          Terms of Use. If you do not agree to these terms, please do not use this website.
        </p>
      </Section>

      <Section title="2. About MSS Charitable Trust">
        <p>
          MSS Charitable Trust is a registered non-profit organisation (Reg. No. MSST/2024) operating
          under the Indian Trusts Act, 1882, with its office in Guntur, Andhra Pradesh. This website is
          maintained to share information about our programmes, accept donations, and connect with
          volunteers, donors, and partners.
        </p>
      </Section>

      <Section title="3. Use of Website Content">
        <p>
          All content on this website — including text, images, logos, and programme descriptions — is
          the property of MSS Charitable Trust unless otherwise stated.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>You may share or reference our content for non-commercial, awareness-raising purposes with attribution.</li>
          <li>You may not reproduce or redistribute content for commercial gain without written permission.</li>
          <li>Misrepresentation of our organisation, programmes, or financials is strictly prohibited.</li>
        </ul>
      </Section>

      <Section title="4. Donations">
        <p>
          Donations made through or in connection with this website are voluntary contributions to MSS
          Charitable Trust. We are committed to utilising funds responsibly for our stated charitable
          objectives. Donation receipts eligible for 80G tax exemption will be issued upon request for
          contributions above ₹500.
        </p>
      </Section>

      <Section title="5. Volunteer & Partner Engagement">
        <p>
          Individuals or organisations who express interest in volunteering or partnership through this
          website do so voluntarily. MSS Charitable Trust reserves the right to accept or decline
          applications at its discretion and to define the scope of engagement.
        </p>
      </Section>

      <Section title="6. Accuracy of Information">
        <p>
          We strive to keep all information on this website accurate and up to date. However, we make
          no warranties regarding the completeness or accuracy of any content. Programme statistics and
          impact figures are approximate and subject to change.
        </p>
      </Section>

      <Section title="7. External Links">
        <p>
          This website may contain links to external websites. MSS Charitable Trust is not responsible
          for the content or privacy practices of those sites. Links are provided for convenience and
          do not imply endorsement.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          MSS Charitable Trust shall not be held liable for any direct, indirect, or consequential
          damages arising from use of this website or reliance on its content. The website is provided
          on an "as is" basis.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>
          These Terms of Use are governed by the laws of India. Any disputes shall be subject to the
          jurisdiction of courts in Guntur, Andhra Pradesh.
        </p>
      </Section>

      <Section title="10. Contact Us">
        <p>For any queries regarding these terms, please contact us:</p>
        <div className="mt-3 bg-gray-50 rounded-xl px-5 py-4 space-y-1.5 text-sm border border-gray-100">
          <div className="font-bold text-gray-800">MSS Charitable Trust</div>
          <div>Guntur, Andhra Pradesh – 522315</div>
          <div>
            <a href="mailto:msscharitabletrust4u@gmail.com" className="text-forest hover:underline break-all">
              msscharitabletrust4u@gmail.com
            </a>
          </div>
          <div>+91 94902 84208</div>
        </div>
      </Section>

    </LegalLayout>
  )
}
