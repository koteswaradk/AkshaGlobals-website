import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-m3-surface dark:bg-m3-dark-surface text-m3-on-surface dark:text-m3-dark-on-surface">
      <SEO
        title="Terms of Service"
        description="Review the Aksha Globals terms of service governing use of our website, products, and training services."
        path="/terms-of-service"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-m3-primary dark:text-m3-dark-primary mb-2">Terms of Service</h1>
        <p className="text-center mb-10 text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
          Last updated: March 2026
        </p>

        <div className="rounded-m3-xl shadow-m3-1 p-8 bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high space-y-8">

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              By accessing and using the Aksha Globals website and services, you accept and agree to
              be bound by these Terms of Service. If you do not agree with any part of these terms,
              you must not use our website or services. These terms apply to all visitors, users,
              customers, and others who access or use our website and services.
            </p>
          </section>

          {/* Use of Website Content */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">2. Use of Website Content</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              All content on this website is provided for informational and educational purposes. You agree to use
              our website content in accordance with the following terms:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>You may view and download content for personal, non-commercial use only.</li>
              <li>You must not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, or create derivative works from any content obtained from this website.</li>
              <li>You must not use any content for commercial purposes without obtaining prior written permission from Aksha Globals.</li>
              <li>You must not remove any copyright, trademark, or other proprietary notices from any content.</li>
              <li>You must not attempt to gain unauthorized access to any portion of the website or its systems.</li>
            </ul>
          </section>

          {/* Product Copyrights */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">3. Product Copyrights</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              All software products, applications, tools, source code, and related documentation
              developed by Aksha Globals are protected under applicable copyright and intellectual
              property laws. The following restrictions apply:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>Unauthorized reproduction, distribution, or modification of our products is strictly prohibited.</li>
              <li>Reverse engineering, decompilation, or disassembly of any Aksha Globals software product is not permitted.</li>
              <li>Product licenses are non-transferable unless explicitly stated in the license agreement.</li>
              <li>All product names, logos, and brands displayed on this website are trademarks of Aksha Globals or their respective owners.</li>
              <li>Purchasing or licensing a product grants usage rights only and does not transfer ownership of the underlying intellectual property.</li>
            </ul>
          </section>

          {/* Ideas Copyright */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">4. Ideas &amp; Intellectual Property Rights</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              Aksha Globals values innovation and creativity. All ideas, concepts, methodologies,
              innovations, training curricula, course structures, and business processes presented on
              this website or through our services are the exclusive intellectual property of Aksha
              Globals. By using our website, you acknowledge and agree to the following:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>You shall not replicate, adapt, or commercialize any ideas, concepts, or methodologies from our website or services without prior written consent.</li>
              <li>Any unsolicited submissions, suggestions, or ideas sent to Aksha Globals become our property and may be used without obligation of confidentiality, compensation, or credit.</li>
              <li>Training materials, course content, and educational methodologies are proprietary and may not be reproduced or redistributed.</li>
              <li>Business strategies, product roadmaps, and innovation concepts shared publicly are protected under applicable intellectual property laws.</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">5. User Responsibilities</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              When using our website and services, you agree to:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>Provide accurate, current, and complete information when required.</li>
              <li>Use the website and services only for lawful purposes and in compliance with all applicable laws.</li>
              <li>Not engage in any activity that could harm, disable, or impair the website or interfere with other users' access.</li>
              <li>Not use automated tools (bots, scrapers, crawlers) to access the website without express permission.</li>
              <li>Not impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">6. Third-Party Links</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              Our website may contain links to third-party websites or services that are not owned or
              controlled by Aksha Globals. We have no control over, and assume no responsibility for,
              the content, privacy policies, or practices of any third-party websites. You acknowledge
              and agree that Aksha Globals shall not be liable for any damage or loss caused by the
              use of any third-party content, goods, or services.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              Our website and services are provided on an "as is" and "as available" basis without
              warranties of any kind, whether express or implied. Aksha Globals does not warrant that
              the website will be uninterrupted, error-free, or free of viruses or other harmful
              components. We disclaim all warranties, including but not limited to implied warranties
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              To the fullest extent permitted by law, Aksha Globals and its directors, employees,
              partners, and affiliates shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation loss of profits, data,
              use, goodwill, or other intangible losses, arising from your use of or inability to use
              the website or services.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">9. Governing Law</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of India. Any disputes arising under or in connection with these terms shall be subject
              to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">10. Changes to These Terms</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              We reserve the right to modify or replace these Terms of Service at any time. Changes
              will be effective immediately upon posting on this page with an updated revision date.
              Your continued use of the website after any changes constitutes acceptance of the
              revised terms. We encourage you to review these terms periodically.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">11. Contact Us</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-3 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-1">
              <p><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Aksha Globals</strong></p>
              <p>123 Tech Park, 4th Floor, Innovation District</p>
              <p>Hyderabad, Telangana 500001, India</p>
              <p>
                Email:{' '}
                <a href="mailto:info@akshaglobals.com" className="text-m3-primary dark:text-m3-dark-primary hover:underline">
                  info@akshaglobals.com
                </a>
              </p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-m3-primary dark:text-m3-dark-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
