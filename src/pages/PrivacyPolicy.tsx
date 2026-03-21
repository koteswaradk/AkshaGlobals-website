import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-m3-surface dark:bg-m3-dark-surface text-m3-on-surface dark:text-m3-dark-on-surface">
      <SEO
        title="Privacy Policy"
        description="Read the Aksha Globals privacy policy — how we collect, use, and protect your personal data."
        path="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-m3-primary dark:text-m3-dark-primary mb-2">Privacy Policy</h1>
        <p className="text-center mb-10 text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
          Last updated: March 2026
        </p>

        <div className="rounded-m3-xl shadow-m3-1 p-8 bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              Aksha Globals ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal data. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our products and services.
              Please read this policy carefully to understand our views and practices regarding your
              personal data.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Personal Information:</strong> Name, email address, phone number, and other contact details you provide through forms or account registration.</li>
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, device information, and IP address.</li>
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Cookies &amp; Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance your experience and gather analytics data.</li>
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Training &amp; Product Data:</strong> Information related to your enrollment in training programs or use of our software products.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To improve, personalize, and expand our website content and product offerings.</li>
              <li>To communicate with you, including responding to inquiries, sending updates, and providing customer support.</li>
              <li>To process transactions and manage your enrollment in training programs.</li>
              <li>To send promotional communications (with your consent) about new products, features, or services.</li>
              <li>To detect, prevent, and address technical issues and security threats.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          {/* Website Content Usage */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">4. Website Content Usage</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              All content published on this website — including but not limited to text, graphics, logos,
              images, audio, video, software, and documentation — is the exclusive property of Aksha
              Globals or its licensors. You may view and download content for personal, non-commercial
              use only. Any reproduction, distribution, modification, or republication of website content
              without prior written consent from Aksha Globals is strictly prohibited.
            </p>
          </section>

          {/* Product Copyrights */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">5. Product Copyrights</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              All software products, applications, tools, and related materials developed and distributed
              by Aksha Globals are protected by copyright, trademark, and other intellectual property
              laws. Unauthorized copying, reverse engineering, decompilation, or distribution of our
              products is prohibited. Purchasing or licensing a product does not transfer ownership of
              the underlying intellectual property.
            </p>
          </section>

          {/* Ideas and Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">6. Ideas &amp; Intellectual Property</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              All ideas, concepts, methodologies, training curricula, course materials, and innovations
              presented on this website or through our services are the intellectual property of Aksha
              Globals. Any unsolicited ideas or suggestions you submit to us may be used by Aksha
              Globals without obligation of confidentiality, compensation, or acknowledgment. We
              encourage you not to share confidential or proprietary information through our website
              unless covered by a separate written agreement.
            </p>
          </section>

          {/* Cookies Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">7. Cookies Policy</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              Our website uses cookies to improve functionality and user experience. Types of cookies we use include:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong className="text-m3-on-surface dark:text-m3-dark-on-surface">Preference Cookies:</strong> Remember your settings and preferences (e.g., dark mode).</li>
            </ul>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-3">
              You can manage cookie preferences through your browser settings. Disabling certain
              cookies may affect website functionality.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">8. Data Sharing &amp; Disclosure</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              We do not sell your personal information. We may share your data with trusted third
              parties only in the following circumstances: with service providers who assist in operating
              our website and services; when required by law or to comply with legal processes; to
              protect our rights, property, or safety, or that of our users; and in connection with a
              merger, acquisition, or sale of assets, where your data may be transferred as part of
              the transaction.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">9. Data Security</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              We implement appropriate technical and organizational security measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction. However,
              no method of electronic transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">10. Your Rights</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant space-y-2 ml-2">
              <li>Access and receive a copy of your personal data.</li>
              <li>Rectify inaccurate or incomplete information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@akshaglobals.com" className="text-m3-primary dark:text-m3-dark-primary hover:underline">
                info@akshaglobals.com
              </a>.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">11. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date. We encourage you to review this policy periodically
              to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-3">12. Contact Us</h2>
            <p className="text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              If you have any questions or concerns about this Privacy Policy, please contact us:
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
