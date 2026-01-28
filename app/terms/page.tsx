import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - IPlyzer Usage Terms & Conditions",
  description: "IPlyzer Terms of Service: Read our terms and conditions for using our IP lookup and network analysis tools. Fair use policy and guidelines.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "usage policy",
    "legal"
  ],
  openGraph: {
    title: "Terms of Service - IPlyzer Usage Terms & Conditions",
    description: "Terms and conditions for using IPlyzer services.",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
                "name": "Terms of Service",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/terms`
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
              <span className="text-white text-sm font-semibold">📜 Legal Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Terms of <span className="text-yellow-300">Service</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By accessing and using IPlyzer ("the Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IPlyzer provides free IP address lookup and network analysis tools, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>IP address geolocation</li>
                  <li>ISP and ASN lookup</li>
                  <li>VPN and proxy detection</li>
                  <li>DNS leak testing</li>
                  <li>Email header analysis</li>
                  <li>Network diagnostic tools</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our Service only for lawful purposes. You must not use our Service:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>In any way that violates any applicable local, national, or international law or regulation</li>
                  <li>To send, knowingly receive, upload, download, use, or re-use any material that is illegal, harmful, or offensive</li>
                  <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                  <li>To impersonate or attempt to impersonate IPlyzer, an IPlyzer employee, another user, or any other person or entity</li>
                  <li>To engage in any automated use of the system, such as using scripts to send queries or scraping</li>
                  <li>To interfere with, disrupt, or create an undue burden on the Service or the networks connected to the Service</li>
                  <li>To attempt to bypass any measures we may use to prevent or restrict access to the Service</li>
                  <li>For any illegal surveillance, stalking, or harassment purposes</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Rate Limiting and Fair Use</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To ensure fair access for all users, we implement rate limiting on our services. Excessive automated queries or abuse of our services may result in temporary or permanent blocking of access. For high-volume or commercial use, please contact us to discuss appropriate solutions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by IPlyzer and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission. You may not reverse engineer or attempt to extract the source code of our Service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. User Content and Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you use our tools:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>IP addresses and queries you submit are processed in real-time and not stored</li>
                  <li>You are responsible for ensuring you have the right to look up any IP addresses you submit</li>
                  <li>You must not submit personal data of others without proper authorization</li>
                  <li>Results provided by our Service are for informational purposes only</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Disclaimer of Warranties</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                  <p className="text-gray-800 font-semibold mb-2">IMPORTANT:</p>
                  <p className="text-gray-700 leading-relaxed">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. We do not warrant the accuracy, completeness, or reliability of any information obtained through the Service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IPLYZER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Your use or inability to use the Service</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any interruption or cessation of transmission to or from the Service</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted through the Service</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You agree to defend, indemnify, and hold harmless IPlyzer and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by IPlyzer. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Modifications to Service</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which IPlyzer operates, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">15. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Any disputes arising out of or relating to these Terms or the Service shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the rules of the jurisdiction.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">16. Severability</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">17. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These Terms constitute the entire agreement between you and IPlyzer regarding the use of the Service and supersede all prior agreements and understandings.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">18. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@iplyzer.com</p>
                  <p className="text-gray-700 mb-2"><strong>Support:</strong> support@iplyzer.com</p>
                  <p className="text-gray-700"><strong>Contact Page:</strong> <Link href="/contact" className="text-blue-600 hover:underline">iplyzer.com/contact</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/privacy"
                className="flex items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-blue-200 group"
              >
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <h3 className="font-bold text-gray-900 mb-1">Privacy Policy</h3>
                  <p className="text-sm text-gray-600">How we protect your data</p>
                </div>
                <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-between bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-green-200 group"
              >
                <div>
                  <div className="text-3xl mb-2">📧</div>
                  <h3 className="font-bold text-gray-900 mb-1">Contact Us</h3>
                  <p className="text-sm text-gray-600">Get in touch with our team</p>
                </div>
                <svg className="w-6 h-6 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Use Our Tools?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Start using our free IP and network analysis tools now
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl"
            >
              Explore Tools
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
