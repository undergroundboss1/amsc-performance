export const metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions governing your use of the AMSC Performance website and services.',
};

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
        <p className="text-secondary text-sm mb-12">Last updated: 4 April 2025</p>

        <div className="prose-legal space-y-10 text-secondary text-sm leading-relaxed font-body">
          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the AMSC Performance website at amsc-performance.vercel.app (the &quot;Site&quot;),
              you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">2. About AMSC Performance</h2>
            <p>
              AMSC Performance is an athletic performance training company based in Kenya, providing structured
              training systems for athletes. The Site provides information about our programs and services, and
              allows prospective athletes to apply for training programs.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">3. Use of the Site</h2>
            <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Infringe the rights of any third party</li>
              <li>Restrict or inhibit any other user from using the Site</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Transmit any harmful code, viruses, or malicious content</li>
              <li>Scrape, copy, or reproduce content without written permission</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this Site &mdash; including text, images, logos, graphics, and design &mdash; is the
              property of AMSC Performance or its licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works from this content without our
              prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">5. Training Programs & Services</h2>
            <p>
              Information about our training programs, including pricing and availability, is provided for general
              informational purposes and may change without notice. Submitting an application does not guarantee
              acceptance into any program. Program enrolment is subject to a separate agreement between you and
              AMSC Performance.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">6. Health & Fitness Disclaimer</h2>
            <p>
              The content on this Site is for informational purposes only and does not constitute medical advice.
              Athletic training involves inherent physical risks. You should:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Consult a qualified healthcare professional before starting any exercise program</li>
              <li>Inform your coach of any medical conditions, injuries, or limitations</li>
              <li>Understand that AMSC Performance is not liable for injuries resulting from training activities</li>
            </ul>
            <p className="mt-2">
              Participation in our programs is at your own risk. By enrolling, you acknowledge the physical nature
              of athletic training and accept responsibility for your own health and safety.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">7. Assumption of Risk & Liability Waiver</h2>
            <p>
              To the fullest extent permitted by law, AMSC Performance, its coaches, staff, and affiliates shall not
              be liable for any direct, indirect, incidental, or consequential damages arising from:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your use of the Site or reliance on any information provided</li>
              <li>Participation in any training program or activity</li>
              <li>Any interruption or error in the Site&apos;s operation</li>
              <li>Actions of third-party service providers (Tally.so, Behold.so, Vercel)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">8. Third-Party Services</h2>
            <p>
              Our Site uses third-party services including Tally.so (application forms), Behold.so (Instagram feed),
              and Vercel (hosting). Your use of these services is subject to their respective terms and privacy policies.
              We are not responsible for the content, practices, or availability of third-party services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">9. User-Submitted Content</h2>
            <p>
              By submitting information through our application forms, you represent that the information is
              accurate and that you have the right to provide it. You grant AMSC Performance the right to use
              this information for the purpose of processing your application and communicating with you about
              our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">10. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
              posting to the Site. Your continued use of the Site after changes constitutes acceptance of the
              updated Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes
              arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of
              the courts of Kenya.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, contact AMSC Performance via Instagram at{' '}
              <a href="https://instagram.com/amscperformance" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @amscperformance
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
