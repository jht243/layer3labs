import type { NextPage } from 'next'
import React from 'react'
import Header from '@/components/layout/Header'
import Layout from '@/layouts/index'
import styles from '@/styles/pages/Policy.module.scss'

const SupportPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <Header />
        <div className="container">
          <div className={styles['simplePage']}>
            <div className={styles['wysiwyg']}>
              <h1>Support Center</h1>
              <p>
                Welcome to the Layer3Labs Support Center. We are here to help you with any questions or issues you may have regarding our services.
              </p>

              <h2>How Can We Help?</h2>
              <p>
                Our dedicated support team is available to assist you with:
              </p>
              <ul>
                <li>Account access and management</li>
                <li>AI model configuration and integration</li>
                <li>OpenAI API connection support</li>
                <li>Technical issues and troubleshooting</li>
                <li>Billing and subscription inquiries</li>
                <li>Feature requests and feedback</li>
                <li>General questions about Layer3Labs</li>
              </ul>

          <h2>Contact Us</h2>
          <p>
            The best way to reach our support team is via email. We strive to respond to all inquiries within 24 business hours.
          </p>
          
          <h3>Email Support</h3>
          <p>
            Please send your support requests directly to our official support email address:
          </p>
          <p>
             <strong><a href="mailto:support@layer3labs.io">support@layer3labs.io</a></strong>
          </p>
          <p>
            When emailing us, please include as much detail as possible about your issue, including any error messages, screenshots, or steps to reproduce the problem. This helps us serve you faster and more effectively.
          </p>

          <h2>Frequently Asked Questions</h2>
          <p>
            Before contacting support, you might want to check if your question has already been answered. We are currently building out our knowledge base to provide instant answers to common queries.
          </p>

          <h2>Feedback</h2>
          <p>
            We value your feedback as it helps us improve our products and services. If you have any suggestions or comments, please feel free to send them to the support email listed above.
          </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SupportPage
