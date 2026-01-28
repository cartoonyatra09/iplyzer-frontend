import type { Metadata } from "next";
import EmailTraceTool from "@/components/tools/EmailTraceTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Header Analyzer - Trace Email Sender Location & IP",
  description: "Free email header analyzer to trace sender location and IP addresses. Analyze email headers securely with no storage. GDPR compliant and privacy-focused.",
  keywords: [
    "email trace",
    "email header analyzer",
    "trace email sender",
    "email ip lookup",
    "email header parser",
    "find email sender location",
    "email tracking",
    "email forensics"
  ],
  openGraph: {
    title: "Email Header Analyzer - Trace Email Sender Location & IP",
    description: "Free email header analyzer with strong privacy protection.",
  },
};

export default function EmailTracePage() {
  const faqs = [
    {
      question: "What is email header analysis?",
      answer: "Email header analysis is the process of examining the technical information embedded in every email message. Email headers contain routing information showing the path an email took from sender to recipient, including IP addresses of mail servers, timestamps, and authentication details. This metadata is invisible in normal email viewing but provides valuable information about the email's origin and journey through the internet."
    },
    {
      question: "How can I find my email header?",
      answer: "In Gmail, open the email, click the three dots menu, and select 'Show original'. In Outlook, right-click the email and choose 'View message source' or 'View message details'. In Apple Mail, select the email and go to View → Message → All Headers. In Yahoo Mail, click the three dots and select 'View raw message'. The header contains all the 'Received:' lines showing the email's path."
    },
    {
      question: "Is it safe to paste my email header here?",
      answer: "Yes, it's completely safe. We take privacy seriously: your email headers are processed temporarily and never stored on our servers, we don't maintain any logs of the data you submit, the analysis happens in real-time without retention, and we're fully GDPR compliant. The tool only extracts IP addresses and location information—no email content is stored or logged. You can verify this by checking our open-source code."
    },
    {
      question: "What information can I get from email headers?",
      answer: "Email headers reveal the sender's mail server IP address and location, the path the email took through various mail servers, timestamps showing when the email passed through each server, the ISP or hosting provider used by the sender, authentication results (SPF, DKIM, DMARC), and the email client or service used to send the message. This information is useful for verifying email authenticity, investigating spam or phishing, and troubleshooting delivery issues."
    },
    {
      question: "Why would I need to trace an email?",
      answer: "Email tracing is useful for several purposes: verifying if an email is legitimate or a phishing attempt, investigating spam or threatening emails, troubleshooting email delivery problems, confirming the actual sender of an email (not just the 'From' address which can be spoofed), gathering evidence for reporting abuse or fraud, and understanding why emails are being marked as spam. It's a valuable tool for both personal security and professional email administration."
    }
  ];

  const relatedTools = [
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "Reverse DNS", href: "/reverse-dns", icon: "🔍" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "Proxy Check", href: "/proxy-check", icon: "🔒" },
  ];

  return (
    <>
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
                "name": "Email Trace",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/email-trace`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="Email Header Analyzer"
          description="Trace email sender location and IP by analyzing email headers"
          breadcrumb="Email Trace"
          gradientFrom="from-teal-600"
          gradientVia="via-cyan-600"
          gradientTo="to-blue-700"
        />

        {/* Tool UI */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EmailTraceTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is Email Header Analysis?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Email header analysis is the process of examining the technical metadata embedded in every email message. While you normally see only the subject, sender, and message body, every email contains hidden headers that record its journey through the internet. These headers are like a postal stamp trail, showing every mail server the email passed through from sender to recipient.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Email headers contain crucial information including IP addresses of mail servers, timestamps showing when the email passed through each server, authentication results (SPF, DKIM, DMARC), the email client or service used, and routing information. This data is essential for verifying email authenticity, investigating spam or phishing attempts, and troubleshooting delivery issues.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                The most important part of email headers are the "Received:" lines. Each mail server that handles an email adds a "Received:" line at the top, creating a chronological record of the email's path. By reading these lines from bottom to top, you can trace the email back to its origin, including the sender's mail server IP address and location.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our email header analyzer extracts IP addresses from these headers and provides geographic location information for each server in the email's path. This helps you understand where an email really came from, which is especially useful since the "From" address can be easily spoofed. The actual IP addresses in the headers are much harder to fake and provide reliable information about the email's true origin.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use This Tool */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Analyze Email Headers?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Email header analysis is your first line of defense against phishing and email fraud. Scammers can easily fake the "From" address to make an email appear legitimate, but they can't fake the IP addresses in the email headers. By tracing the actual origin of an email, you can verify whether it really came from your bank, a colleague, or a trusted service—or if it's a scam attempt from another country.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                IT professionals and email administrators use header analysis to troubleshoot delivery problems. When emails aren't arriving, are delayed, or are being marked as spam, examining the headers reveals exactly where in the delivery chain the problem occurred. You can see which mail servers handled the email, how long it spent at each server, and whether authentication checks passed or failed.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Security teams rely on email header analysis for incident investigation and threat intelligence. When investigating suspicious emails, security analysts examine headers to identify the infrastructure used by attackers, track campaigns across multiple emails, and gather evidence for reporting abuse to ISPs or law enforcement. The IP addresses and routing information in headers provide valuable clues about the attacker's methods and location.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Privacy-conscious users analyze headers to understand how their emails are being routed and which companies handle their messages. This transparency helps you make informed decisions about email services and understand the path your sensitive communications take through the internet.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🎣 Phishing Detection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify if emails claiming to be from banks or services are legitimate by checking their true origin.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔍 Spam Investigation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify the source of spam emails and report abuse to the appropriate ISP or authorities.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Delivery Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose why emails are delayed, bouncing, or being marked as spam by examining the delivery path.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ⚖️ Legal Evidence
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Gather evidence from threatening or harassing emails for legal proceedings or law enforcement.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🛡️ Security Audits
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify email authentication (SPF, DKIM, DMARC) and ensure proper security configurations.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📧 Email Forensics
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Investigate email-based incidents and track the infrastructure used in email campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="text-xl sm:text-2xl">{tool.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">{tool.name}</span>
                  <span className="ml-auto text-teal-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
