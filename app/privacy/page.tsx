import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - IPlyzer Data Protection & Privacy",
  description: "IPlyzer Privacy Policy: Learn how we protect your data, our no-logging policy, and commitment to your privacy. GDPR compliant and transparent.",
  keywords: [
    "privacy policy",
    "data protection",
    "gdpr",
    "no logging",
    "privacy"
  ],
  openGraph: {
    title: "Privacy Policy - IPlyzer Data Protection & Privacy",
    description: "Our commitment to protecting your privacy and data.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "January 28, 2026";

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/privacy`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-semibold">🔒 Your Privacy Matters</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to protecting your privacy and data
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Privacy at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>No Data Storage:</strong> We don't store your IP addresses or queries</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>No Tracking:</strong> We don't track your activity or behavior</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>No Registration:</strong> Use all tools without creating an account</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>GDPR Compliant:</strong> Full compliance with data protection laws</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At IPlyzer, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our IP address lookup and network analysis tools. We are committed to transparency and protecting your personal data.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information We Collect</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you use our tools, we temporarily process the following information to provide our services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>IP Address:</strong> Your IP address is processed in real-time to provide lookup results. It is NOT stored in any database or logs.</li>
                  <li><strong>Browser Information:</strong> Basic browser type and version for compatibility purposes.</li>
                  <li><strong>Timestamp:</strong> Request time for rate limiting and abuse prevention only.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Information You Provide</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you voluntarily use certain features:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Email Address:</strong> Only if you subscribe to our newsletter (optional).</li>
                  <li><strong>Contact Information:</strong> Only if you contact us through our contact form.</li>
                  <li><strong>IP Addresses for Lookup:</strong> Any IP addresses you enter into our tools are processed immediately and never stored.</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect only for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Provide Services:</strong> To deliver IP lookup and network analysis results.</li>
                  <li><strong>Prevent Abuse:</strong> To implement rate limiting and prevent automated abuse of our services.</li>
                  <li><strong>Improve Services:</strong> To understand aggregate usage patterns (without identifying individual users).</li>
                  <li><strong>Communication:</strong> To respond to your inquiries if you contact us.</li>
                  <li><strong>Newsletter:</strong> To send updates if you've subscribed (you can unsubscribe anytime).</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our No-Logging Policy</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                  <p className="text-gray-800 font-semibold mb-2">We Do NOT Log:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Your IP address</li>
                    <li>IP addresses you look up</li>
                    <li>Your search queries</li>
                    <li>Your browsing history on our site</li>
                    <li>Any personally identifiable information</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All lookups are processed in real-time and immediately discarded. We maintain this strict no-logging policy to ensure your privacy is protected at all times.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use minimal cookies and tracking:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality (e.g., rate limiting).</li>
                  <li><strong>No Analytics Cookies:</strong> We don't use Google Analytics or similar tracking services.</li>
                  <li><strong>No Advertising Cookies:</strong> We don't serve ads or use advertising trackers.</li>
                  <li><strong>No Third-Party Tracking:</strong> We don't share data with third-party trackers.</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do NOT sell, rent, or share your personal information with third parties, except in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation.</li>
                  <li><strong>Service Providers:</strong> Trusted service providers who help us operate our website (e.g., hosting providers) under strict confidentiality agreements.</li>
                  <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets (users will be notified).</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>HTTPS encryption for all connections</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>No storage of sensitive data</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your Rights (GDPR)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under GDPR and other data protection laws, you have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Right to Access:</strong> Request information about data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data.</li>
                  <li><strong>Right to Object:</strong> Object to processing of your data.</li>
                  <li><strong>Right to Data Portability:</strong> Request transfer of your data.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since we don't store your IP lookup data, most of these rights are automatically satisfied. For newsletter subscriptions or contact form data, please email us at privacy@iplyzer.com.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@iplyzer.com</p>
                  <p className="text-gray-700 mb-2"><strong>General Inquiries:</strong> support@iplyzer.com</p>
                  <p className="text-gray-700"><strong>Contact Page:</strong> <Link href="/contact" className="text-blue-600 hover:underline">iplyzer.com/contact</Link></p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Protection Officer</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For GDPR-related inquiries, you can contact our Data Protection Officer at dpo@iplyzer.com.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Privacy Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-sm text-gray-600">Full compliance with EU data protection regulations</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="text-5xl mb-4">🚫</div>
                <h3 className="font-bold text-gray-900 mb-2">No Logging</h3>
                <p className="text-sm text-gray-600">We don't store your IP addresses or queries</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-sm text-gray-600">Industry-standard encryption and security</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              We're here to help. Contact us anytime with your privacy concerns.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
