import './Legal.css'

const TermsConditions = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              Welcome to Whekel. These Terms and Conditions ("Terms") govern your access to and use of the Whekel platform 
              and services. By accessing or using our platform, you agree to be bound by these Terms. If you do not agree 
              to these Terms, please do not use our services.
            </p>
            <p>
              <strong>Important:</strong> Whekel is a connection platform that facilitates connections between users and 
              service providers. We do not provide transportation, delivery, freight, or professional services directly. 
              We only help connect users with service providers.
            </p>
          </section>

          <section className="legal-section">
            <h2>Platform Description</h2>
            <div className="highlight-box">
              <h3>Whekel's Role</h3>
              <p>
                Whekel operates as a technology platform that connects users seeking services (rides, parcel delivery, 
                freight, professional services) with service providers (drivers, delivery partners, freight operators, 
                professionals). We facilitate these connections through our mobile application and website.
              </p>
              <p>
                <strong>We do NOT:</strong>
              </p>
              <ul>
                <li>Provide transportation, delivery, or professional services</li>
                <li>Process payments or handle financial transactions</li>
                <li>Take any commission from transactions</li>
                <li>Guarantee service quality or outcomes</li>
                <li>Mediate disputes between users and service providers</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2>Important: Dispute Responsibility</h2>
            <div className="warning-box">
              <h3>⚠️ Service Providers/Admins Are Responsible for All Disputes</h3>
              <p style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem'}}>
                <strong>As a user, please understand that:</strong>
              </p>
              <p>
                <strong>Service providers (also referred to as admins) are solely responsible for resolving ANY and ALL disputes</strong> 
                that may arise from your use of their services. This includes, but is not limited to:
              </p>
              <ul style={{marginTop: '1rem'}}>
                <li><strong>Service Quality Disputes:</strong> Issues related to the quality, delivery, or outcome of services provided</li>
                <li><strong>Payment Disputes:</strong> Any disagreements regarding payment amounts, methods, refunds, or billing</li>
                <li><strong>Service Delivery Issues:</strong> Problems with service completion, delays, or non-delivery</li>
                <li><strong>Customer Complaints:</strong> Any grievances or complaints about the service received</li>
                <li><strong>Damage or Loss:</strong> Any damage to goods or loss during service provision</li>
                <li><strong>Any Other Disputes:</strong> All other issues arising from the service relationship</li>
              </ul>
              <p style={{marginTop: '1.5rem', fontSize: '1.05rem', fontWeight: '600'}}>
                <strong>Whekel's Role:</strong> We only facilitate connections between you and service providers. We are NOT 
                responsible for resolving disputes, mediating conflicts, or handling complaints. If you have any issues, 
                you must contact the service provider directly.
              </p>
              <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                By using our platform, you acknowledge and agree that service providers are responsible for all disputes, 
                and Whekel is not liable for any issues arising from services provided by third-party service providers.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Account Registration and Verification</h2>
            <ul>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You must be at least 18 years old to use our services</li>
              <li>Aadhar-based verification is required for account activation</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Use of Services</h2>
            <ul>
              <li>You may use our platform to connect with service providers</li>
              <li>You are responsible for selecting appropriate service providers</li>
              <li>All service agreements, terms, and payment arrangements are between you and the service provider</li>
              <li>You must comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Payment and Transactions</h2>
            <ul>
              <li>All payments are made directly to service providers</li>
              <li>Whekel does not process, handle, or facilitate payments</li>
              <li>Payment terms, methods, and amounts are agreed upon directly with service providers</li>
              <li>You are responsible for all payment obligations to service providers</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>User Responsibilities</h2>
            <ul>
              <li>Provide accurate service requirements and location information</li>
              <li>Treat service providers with respect and professionalism</li>
              <li>Honor agreements made with service providers</li>
              <li>Report any issues or concerns through appropriate channels</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Service Provider Responsibility</h2>
            <div className="warning-box">
              <h3>⚠️ Important: Service Provider Responsibility</h3>
              <p>
                <strong>Service providers (drivers, delivery partners, freight operators, professionals) are solely responsible for:</strong>
              </p>
              <ul>
                <li><strong>Service Quality:</strong> Ensuring all services provided meet quality standards and customer expectations</li>
                <li><strong>Payment Disputes:</strong> Resolving any payment-related disputes with users directly</li>
                <li><strong>Service Disputes:</strong> Handling all disputes related to service delivery, quality, or outcomes</li>
                <li><strong>Customer Satisfaction:</strong> Addressing customer complaints and ensuring satisfactory service delivery</li>
                <li><strong>Compliance:</strong> Adhering to all applicable laws, regulations, and industry standards</li>
                <li><strong>Insurance and Liability:</strong> Maintaining appropriate insurance coverage and accepting liability for services provided</li>
              </ul>
              <p>
                <strong>Whekel is not responsible for:</strong> Service quality, payment disputes, service delivery issues, 
                or any disputes between users and service providers. We only facilitate connections and are not a party to 
                any service agreements or transactions.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Aadhar Verification</h2>
            <p>
              Users are required to complete Aadhar-based verification to use our platform. This verification process 
              helps ensure platform security and authenticity.
            </p>
            <div className="highlight-box">
              <h3>Data Retention</h3>
              <p>
                <strong>Aadhar card information is collected solely for verification purposes and is automatically 
                deleted within 24 hours after successful verification.</strong> We do not retain Aadhar data beyond 
                the verification process.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Dispute Resolution</h2>
            <div className="warning-box">
              <h3>⚠️ Important: Contact Service Provider for All Disputes</h3>
              <p style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem'}}>
                <strong>If you have ANY disputes, you must contact the service provider (admin) directly.</strong>
              </p>
              <p>
                Whekel does NOT mediate, resolve, or handle disputes between users and service providers. All disputes 
                must be resolved directly with the service provider.
              </p>
              <p style={{marginTop: '1rem', fontWeight: '600'}}>
                <strong>Service providers (admins) are responsible for resolving ALL disputes, including:</strong>
              </p>
              <ul style={{marginTop: '0.75rem'}}>
                <li><strong>Service Quality:</strong> Issues with service quality, delivery, or outcomes</li>
                <li><strong>Payment Disputes:</strong> Payment issues, refunds, billing disagreements, or payment-related complaints</li>
                <li><strong>Service Complaints:</strong> Any grievances, complaints, or dissatisfaction with services</li>
                <li><strong>Damage or Loss:</strong> Any damage to goods or loss during service provision</li>
                <li><strong>Any Other Issues:</strong> All other disputes or problems arising from service provision</li>
              </ul>
              <p style={{marginTop: '1.5rem', fontStyle: 'italic', fontWeight: '500'}}>
                Whekel may assist in facilitating communication between parties, but we are NOT responsible for dispute 
                resolution, outcomes, or any consequences arising from disputes.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code, viruses, or malware</li>
              <li>Harass, abuse, or harm other users or service providers</li>
              <li>Attempt to gain unauthorized access to the platform</li>
              <li>Interfere with platform operations or security</li>
              <li>Use automated systems to access the platform without authorization</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Whekel shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
              indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your use or inability to use the platform</li>
              <li>Any services provided by service providers</li>
              <li>Any disputes between users and service providers</li>
              <li>Payment issues or financial transactions</li>
              <li>Any unauthorized access to or use of our servers</li>
            </ul>
            <p>
              Whekel's total liability shall not exceed the amount you paid to Whekel (if any) in the 12 months prior to 
              the event giving rise to the liability.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Whekel, its officers, directors, employees, and agents from any 
              claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to:
            </p>
            <ul>
              <li>Your use of the platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Disputes with service providers</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account and access to the platform immediately, without prior notice, 
              for any reason, including if you breach these Terms. Upon termination, your right to use the platform will 
              cease immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
              posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the 
              platform after such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its 
              conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> contact@whekel.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Transport St, City, State</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions

