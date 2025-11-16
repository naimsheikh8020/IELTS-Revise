import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen mt-20 bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: January 2025</p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          {/* Section 1: Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              By accessing and using IELTS Revision (the "Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          {/* Section 2: Description of Service */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              IELTS Revision provides online IELTS test preparation materials, including practice questions, study tools, and progress tracking. We reserve the right to modify, suspend, or discontinue any part of our service at any time.
            </p>
          </section>

          {/* Section 3: User Accounts */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
            
            <h3 className="text-base font-semibold text-gray-900 mb-2">Registration</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4 ml-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>One account per user</li>
              <li>You must be at least 13 years old</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 mb-2">Account Restrictions</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Accounts are for individual use only. Sharing accounts, selling access, or using automated access tools are strictly prohibited.
            </p>
          </section>

          {/* Section 4: Subscription and Payment */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Subscription and Payment</h2>
            
            <h3 className="text-base font-semibold text-gray-900 mb-2">Free Trial</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              New users may receive access to a free trial. We reserve the right to modify or discontinue free trial offers at any time.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mb-2">Paid Subscription</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4 ml-2">
              <li>Subscriptions are billed in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We reserve the right to change pricing with 30 days' notice</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 mb-2">Billing and Renewal</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
              <li>Subscriptions automatically renew unless canceled</li>
              <li>You can cancel anytime through your account settings</li>
              <li>Cancellations take effect at the end of the current billing period</li>
            </ul>
          </section>

          {/* Section 5: Acceptable Use */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Acceptable Use</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
              <li>Share your account credentials</li>
              <li>Reproduce, distribute, or sell our content</li>
              <li>Use automated tools to access the platform</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Upload malicious code or engage in any harmful activities</li>
              <li>Use the service for any illegal purpose</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </section>

          {/* Section 6: Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              All content on IELTS Revision, including questions, answers, explanations, and materials, is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content without express written permission.
            </p>
          </section>

          {/* Section 7: Disclaimer of Warranties */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The platform is provided "as is" without warranties of any kind. We do not guarantee that our service will be uninterrupted, error-free, or meet your specific requirements. While we strive for accuracy, we cannot guarantee that our practice materials will result in any particular IELTS score.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              To the maximum extent permitted by law, IELTS Revision shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          {/* Section 9: User Content and Feedback */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. User Content and Feedback</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you provide feedback, suggestions, or other communications to us (feedback), you grant us a perpetual, irrevocable, worldwide license to use such feedback without compensation or attribution.
            </p>
          </section>

          {/* Section 10: Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Termination</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or for any other reason. Upon termination, your right to use the platform will immediately cease. You may also terminate your account at any time through your account settings.
            </p>
          </section>

          {/* Section 11: Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to Terms</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We may modify these Terms at any time. Material changes will be notified via email or through a platform notice at least 30 days before taking effect. Continued use of the platform after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 12: Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Governing Law</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 13: Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact Information</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you have questions about these Terms, please contact us:
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              Email: <a href="mailto:support@ieltsrevision.com" className="text-blue-600 hover:underline">support@ieltsrevision.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}