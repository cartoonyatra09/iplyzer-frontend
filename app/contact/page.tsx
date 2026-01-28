import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - IPlyzer Support & Feedback",
  description: "Get in touch with IPlyzer team for support, feedback, or business inquiries. We're here to help with your IP lookup and network analysis needs.",
  keywords: [
    "contact iplyzer",
    "support",
    "feedback",
    "help",
    "customer service"
  ],
  openGraph: {
    title: "Contact Us - IPlyzer Support & Feedback",
    description: "Get in touch with IPlyzer team for support and feedback.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "For general inquiries and support",
      contact: "support@iplyzer.com",
      action: "mailto:support@iplyzer.com"
    },
    {
      icon: "💼",
      title: "Business Inquiries",
      description: "For partnerships and business opportunities",
      contact: "business@iplyzer.com",
      action: "mailto:business@iplyzer.com"
    },
    {
      icon: "🐛",
      title: "Report Issues",
      description: "Found a bug or technical issue?",
      contact: "bugs@iplyzer.com",
      action: "mailto:bugs@iplyzer.com"
    },
    {
      icon: "💡",
      title: "Feature Requests",
      description: "Suggest new features or improvements",
      contact: "feedback@iplyzer.com",
      action: "mailto:feedback@iplyzer.com"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent technical issues, we prioritize responses and aim to get back to you as soon as possible."
    },
    {
      question: "Do you offer API access?",
      answer: "Currently, all our tools are available through our web interface. We're working on API access for developers and businesses. Contact us at business@iplyzer.com to express your interest and we'll notify you when it's available."
    },
    {
      question: "Can I use IPlyzer for commercial purposes?",
      answer: "Yes! All our tools are free to use for both personal and commercial purposes. However, if you need high-volume access or custom solutions, please contact our business team to discuss enterprise options."
    },
    {
      question: "How do I report a bug or technical issue?",
      answer: "Please email bugs@iplyzer.com with a detailed description of the issue, including what tool you were using, what you expected to happen, and what actually happened. Screenshots are very helpful!"
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes! We're happy to help with any questions about using our tools. Email support@iplyzer.com with your question and we'll get back to you with guidance."
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
                "name": "Contact",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/contact`
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
              <span className="text-white text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Contact <span className="text-yellow-300">IPlyzer</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out for support, feedback, or business inquiries
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How Can We Help?
              </h2>
              <p className="text-lg text-gray-600">
                Choose the best way to reach us based on your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>{method.contact}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Looking for Something Else?
              </h2>
              <p className="text-lg text-gray-600">
                Quick links to help you find what you need
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/"
                className="flex items-center justify-between bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div>
                  <div className="text-2xl mb-2">🏠</div>
                  <h3 className="font-bold text-gray-900">Home</h3>
                  <p className="text-sm text-gray-600">All tools</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-between bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div>
                  <div className="text-2xl mb-2">ℹ️</div>
                  <h3 className="font-bold text-gray-900">About Us</h3>
                  <p className="text-sm text-gray-600">Our mission</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/my-ip"
                className="flex items-center justify-between bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div>
                  <div className="text-2xl mb-2">🌐</div>
                  <h3 className="font-bold text-gray-900">My IP</h3>
                  <p className="text-sm text-gray-600">Check now</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              <div className="text-center">
                <div className="text-6xl mb-6">⏱️</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quick Response Time
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We value your time and strive to respond to all inquiries within 24-48 hours during business days. For urgent technical issues, we prioritize responses to help you as quickly as possible.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ 24-48 Hour Response
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ Priority Support
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ Friendly Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      Q
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-11">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social & Community */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow us for updates, tips, and network security insights
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://twitter.com/iplyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-xl font-medium transition-colors"
              >
                <span className="text-xl mr-2">🐦</span>
                Twitter
              </a>
              <a
                href="https://github.com/iplyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-800 text-gray-700 hover:text-white rounded-xl font-medium transition-colors"
              >
                <span className="text-xl mr-2">💻</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/company/iplyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-blue-700 text-gray-700 hover:text-white rounded-xl font-medium transition-colors"
              >
                <span className="text-xl mr-2">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Try our free IP and network analysis tools now
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Tools</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
