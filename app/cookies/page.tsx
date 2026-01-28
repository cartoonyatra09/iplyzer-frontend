import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy - IPlyzer Cookie Usage & Management",
  description: "Learn about how IPlyzer uses cookies, what types of cookies we use, and how to manage your cookie preferences. Minimal cookie usage for privacy.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking",
    "privacy"
  ],
  openGraph: {
    title: "Cookie Policy - IPlyzer Cookie Usage & Management",
    description: "How we use cookies and how to manage your preferences.",
  },
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  const lastUpdated = "January 28, 2026";

  const cookieTypes = [
    {
      name: "Essential Cookies",
      icon: "✅",
      required: true,
      description: "Necessary for the website to function properly",
      examples: [
        "Session management",
        "Rate limiting protection",
        "Security features"
      ],
      duration: "Session or up to 24 hours"
    },
    {
      name: "Analytics Cookies",
      icon: "📊",
      required: false,
      description: "Help us understand how visitors use our website",
      examples: [
        "Page views",
        "User interactions",
        "Performance metrics"
      ],
      duration: "Not currently used"
    },
    {
      name: "Marketing Cookies",
      icon: "🎯",
      required: false,
      description: "Used to track visitors across websites",
      examples: [
        "Advertising",
        "Retargeting",
        "Social media tracking"
      ],
      duration: "Not used"
    }
  ];

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
                "name": "Cookie Policy",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/cookies`
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
              <span className="text-white text-sm font-semibold">🍪 Cookie Information</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Cookie <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              How we use cookies and how to manage your preferences
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
                <span className="text-3xl mr-3">🍪</span>
                Cookie Usage at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>Minimal Cookies:</strong> We use only essential cookies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>No Tracking:</strong> No advertising or tracking cookies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>No Analytics:</strong> We don't use Google Analytics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700"><strong>Privacy First:</strong> Your privacy is our priority</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help websites remember your preferences and improve your browsing experience.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At IPlyzer, we believe in minimal cookie usage. We only use cookies that are absolutely necessary for our website to function properly. We do NOT use cookies for advertising, tracking, or analytics purposes.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Types of Cookies We Use</h2>
                <div className="space-y-6 mb-12">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className={`rounded-xl p-6 border-2 ${
                      type.required 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-4xl">{type.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          type.required 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {type.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                      <div className="ml-14">
                        <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-600 mt-3">
                          <strong>Duration:</strong> {type.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Essential Cookies Details</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use essential cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Rate Limiting:</strong> To prevent abuse and ensure fair access for all users by limiting the number of requests from a single source.</li>
                  <li><strong>Security:</strong> To protect against cross-site request forgery (CSRF) attacks and other security threats.</li>
                  <li><strong>Session Management:</strong> To maintain your session state as you navigate through our tools.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These cookies are strictly necessary for the website to function and cannot be disabled without affecting the core functionality of our services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We DON'T Use</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
                  <p className="text-gray-800 font-semibold mb-3">We explicitly DO NOT use:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Google Analytics:</strong> We don't use Google Analytics or any similar analytics services</li>
                    <li><strong>Advertising Cookies:</strong> No cookies for advertising or retargeting</li>
                    <li><strong>Social Media Cookies:</strong> No Facebook Pixel, Twitter tracking, or similar</li>
                    <li><strong>Third-Party Tracking:</strong> No third-party tracking cookies of any kind</li>
                    <li><strong>Marketing Cookies:</strong> No cookies for marketing or promotional purposes</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Manage Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser-Specific Instructions</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                  <p className="text-gray-800 font-semibold mb-2">⚠️ Important Note:</p>
                  <p className="text-gray-700 leading-relaxed">
                    If you block or delete essential cookies, some features of our website may not work properly. Rate limiting and security features require cookies to function correctly.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not use any third-party cookies on our website. All cookies set by IPlyzer are first-party cookies, meaning they are set directly by our domain and not by external services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cookie Consent</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since we only use essential cookies that are necessary for the website to function, we do not require explicit cookie consent under GDPR and other privacy regulations. Essential cookies are exempt from consent requirements because they are strictly necessary for the service you have requested.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify users of any material changes by updating the "Last Updated" date at the top of this page.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@iplyzer.com</p>
                  <p className="text-gray-700 mb-2"><strong>Support:</strong> support@iplyzer.com</p>
                  <p className="text-gray-700"><strong>Contact Page:</strong> <Link href="/contact" className="text-blue-600 hover:underline">iplyzer.com/contact</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Policies */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/privacy"
                className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-blue-200 group"
              >
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Privacy Policy</h3>
                <p className="text-sm text-gray-600">How we protect your data</p>
              </Link>

              <Link
                href="/terms"
                className="flex flex-col items-center text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-purple-200 group"
              >
                <div className="text-4xl mb-3">📜</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Terms of Service</h3>
                <p className="text-sm text-gray-600">Usage terms and conditions</p>
              </Link>

              <Link
                href="/contact"
                className="flex flex-col items-center text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-green-200 group"
              >
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Contact Us</h3>
                <p className="text-sm text-gray-600">Get in touch with our team</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Privacy-Focused Tools
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Use our IP and network analysis tools with confidence
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
