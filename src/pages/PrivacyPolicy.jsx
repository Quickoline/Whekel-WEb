import './Legal.css'

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              At Whekel, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              platform and services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <p>We collect the following information from users:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Location data for service requests</li>
              <li>Aadhar card information for verification purposes (temporarily stored)</li>
              <li>Service history and preferences</li>
              <li>Device information and usage data</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Aadhar Verification</h2>
            <p>
              Whekel uses Aadhar-based verification to ensure the authenticity and security of users on our platform. 
              This verification process helps maintain trust and safety within our community.
            </p>
            <div className="highlight-box">
              <h3>Important: Data Retention Policy</h3>
              <p>
                <strong>Aadhar card information is collected solely for verification purposes and is automatically deleted 
                within 24 hours after successful verification.</strong> We do not store, retain, or use Aadhar data for any 
                other purpose beyond the initial verification process. Once verification is complete, all Aadhar-related 
                information is permanently removed from our systems.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To facilitate connections with service providers</li>
              <li>To verify your identity and ensure platform security</li>
              <li>To improve our services and user experience</li>
              <li>To send important updates and notifications</li>
              <li>To provide customer support</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              Whekel acts as a connection platform. We share limited information between users and service providers to 
              facilitate connections:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> We share contact details (phone numbers, etc.) between users and 
              service providers to enable direct communication.</li>
              <li><strong>Service Details:</strong> Service requirements and location information are shared to facilitate 
              service delivery.</li>
              <li><strong>No Payment Processing:</strong> We do not process payments or share financial information. 
              All payment transactions are handled directly between users and service providers.</li>
            </ul>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may disclose information only 
              when required by law or to protect our rights and safety.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt-out of certain communications</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and 
              improve our services. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have inadvertently collected such information, please contact us 
              immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@whekel.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Transport St, City, State</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

