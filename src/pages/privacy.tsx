import type { NextPage } from 'next'
import React from 'react'
import Header from '@/components/layout/Header'
import Layout from '@/layouts/index'
import styles from '@/styles/pages/Policy.module.scss'

const PrivacyPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <Header />
        <div className="container">
          <div className={styles['simplePage']}>
            <div className={styles['wysiwyg']}>
              <h1>Privacy Policy</h1>
              <p>Last Updated: December 2025</p>

              <p>
                Layer3Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered application development services (collectively, the "Service").
              </p>
              <p>
                By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
              </p>
 
              <h2>1. Information We Collect</h2>
              <h3>a. Information You Provide to Us</h3>
              <p>
                We collect information you provide directly to us when you create an account, use our interactive features, or communicate with us.
              </p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, password, and company information.</li>
                <li><strong>Payment Information:</strong> Billing address and payment method details (processed by our third-party payment processors).</li>
                <li><strong>Communications:</strong> Content of messages you send to us for support or inquiries.</li>
                <li><strong>User Content:</strong> Data, text, prompts, files, and other materials that you input, upload, or transmit to the Service for processing by our AI models ("Content").</li>
              </ul>

          <h3>b. Information We Collect Automatically</h3>
          <p>
            When you access or use our Service, we automatically collect certain information about your device and usage patterns.
          </p>
          <ul>
            <li><strong>Log Data:</strong> IP address, browser type, operating system, referring/exit pages, and clickstream data.</li>
            <li><strong>Usage Data:</strong> Information about how you use our Service, such as the features you access, the time spent on pages, and the frequency of your visits.</li>
            <li><strong>Cookies and Similar Technologies:</strong> We use cookies to authenticate users, remember user settings, and analyze site traffic.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li><strong>Provide and Maintain the Service:</strong> To authenticate users, process transactions, and deliver the AI functionality you request.</li>
            <li><strong>Improve Our Services:</strong> To analyze usage patterns, identify bugs, and enhance the performance and accuracy of our AI models and application infrastructure.</li>
            <li><strong>Communications:</strong> To send you technical notices, updates, security alerts, and support messages.</li>
            <li><strong>Safety and Security:</strong> To detect, prevent, and address technical issues, fraud, or abuse of our Service.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations.</li>
          </ul>
          <p>
            <strong>Note on AI Training:</strong> We do not use your proprietary Customer Content to train our foundation models without your explicit permission. Your data is used solely to provide the Service to you.
          </p>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> With third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., cloud hosting, payment processing, AI model providers).</li>
            <li><strong>Legal Requirements:</strong> If required to do so by law or in the good-faith belief that such action is necessary to comply with state and federal laws or respond to a court order, subpoena, or search warrant.</li>
            <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information and Content for as long as necessary to provide the Service and fulfill the purposes described in this Privacy Policy. We may also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2>5. Your Data Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li><strong>Access and Portability:</strong> The right to request access to and a copy of your personal information.</li>
            <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> The right to request deletion of your personal information.</li>
            <li><strong>Opt-Out:</strong> The right to opt-out of marketing communications.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at <a href="mailto:support@layer3labs.io">support@layer3labs.io</a>.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement industry-standard technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. International Data Transfers</h2>
          <p>
            Layer3Labs is based in the United States. If you access the Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using the Service, you consent to such transfer and processing.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@layer3labs.io">support@layer3labs.io</a></li>
          </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage
