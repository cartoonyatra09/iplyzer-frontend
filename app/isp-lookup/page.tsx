import type { Metadata } from "next";
import ISPLookupTool from "@/components/tools/ISPLookupTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISP Lookup - Identify Internet Service Provider by IP Address",
  description: "Free ISP lookup tool to identify the Internet Service Provider, organization, ASN, and hosting information for any IP address. Essential for network analysis and security.",
  keywords: [
    "isp lookup",
    "internet service provider lookup",
    "find isp by ip",
    "ip to isp",
    "identify isp",
    "network provider lookup",
    "asn lookup",
    "hosting provider check"
  ],
  openGraph: {
    title: "ISP Lookup - Identify Internet Service Provider by IP Address",
    description: "Free ISP lookup tool to identify Internet Service Providers and network information.",
  },
};

export default function ISPLookupPage() {
  const faqs = [
    {
      question: "What is an ISP and why does it matter?",
      answer: "An ISP (Internet Service Provider) is a company that provides internet access to customers. Knowing the ISP behind an IP address is crucial for network troubleshooting, security analysis, fraud detection, and understanding traffic sources. ISPs manage large blocks of IP addresses and are responsible for routing internet traffic to and from their customers."
    },
    {
      question: "How accurate is ISP lookup?",
      answer: "ISP lookup is highly accurate (95-99%) because IP address blocks are officially registered to specific organizations and ISPs. The data comes from Regional Internet Registries (RIRs) and WHOIS databases, which are authoritative sources. However, some IP addresses may be resold or leased to other organizations, which can occasionally cause discrepancies."
    },
    {
      question: "What is an ASN and how is it related to ISP?",
      answer: "An ASN (Autonomous System Number) is a unique identifier assigned to networks that manage their own IP routing. Each ISP typically has one or more ASNs. The ASN helps identify the network operator and is essential for internet routing. You can use our ASN Lookup tool to get detailed information about any Autonomous System."
    },
    {
      question: "Can I identify cloud providers with ISP lookup?",
      answer: "Yes! Our ISP lookup tool can identify major cloud providers like AWS, Google Cloud, Microsoft Azure, DigitalOcean, and others. This is useful for detecting whether an IP belongs to a cloud hosting service, which is important for security analysis, bot detection, and understanding your traffic sources."
    },
    {
      question: "Why would I need to lookup an ISP?",
      answer: "ISP lookup is valuable for multiple scenarios: identifying the source of suspicious traffic, verifying business partners' network infrastructure, troubleshooting connectivity issues, detecting VPN/proxy usage, analyzing website traffic sources, preventing fraud, and conducting security audits. It's an essential tool for IT professionals and security analysts."
    }
  ];

  const relatedTools = [
    { name: "ASN Lookup", href: "/asn-lookup", icon: "🔢" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "Hosting Check", href: "/hosting-check", icon: "☁️" },
    { name: "Proxy/VPN Check", href: "/proxy-check", icon: "🔒" },
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
                "name": "ISP Lookup",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/isp-lookup`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="ISP Lookup Tool"
          description="Identify Internet Service Provider, organization, and ASN for any IP"
          breadcrumb="ISP Lookup"
          gradientFrom="from-purple-600"
          gradientVia="via-pink-600"
          gradientTo="to-rose-700"
        />

        {/* Tool UI */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ISPLookupTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is ISP Lookup?
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                ISP Lookup is a network analysis tool that identifies the Internet Service Provider (ISP) or organization responsible for a specific IP address. Every IP address on the internet is allocated to a registered organization, whether it's a commercial ISP, cloud provider, educational institution, or enterprise network.
              </p>
              <p>
                When you perform an ISP lookup, the tool queries authoritative databases maintained by Regional Internet Registries (RIRs) such as ARIN, RIPE NCC, APNIC, LACNIC, and AFRINIC. These organizations manage the allocation and registration of IP address blocks globally, ensuring that every IP address can be traced back to its registered owner.
              </p>
              <p>
                The lookup process reveals not just the ISP name, but also the Autonomous System Number (ASN), which is a unique identifier for networks that control their own routing policies. This information is invaluable for network administrators, security professionals, and anyone needing to understand the origin and ownership of internet traffic.
              </p>
              <p>
                Modern ISP lookup tools can also detect whether an IP address belongs to a hosting provider, cloud service (like AWS or Google Cloud), VPN service, or residential ISP. This distinction is crucial for fraud prevention, bot detection, and security analysis, as different types of networks have different risk profiles and usage patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use ISP Lookup */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Use ISP Lookup?
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Understanding which ISP or organization controls an IP address provides critical context for various business and technical decisions. For e-commerce businesses, identifying whether traffic comes from residential ISPs versus data centers can help detect fraudulent transactions and bot activity.
              </p>
              <p>
                Network administrators use ISP lookup to troubleshoot connectivity issues, verify peering relationships, and understand traffic patterns. When experiencing slow connections or routing problems, knowing the ISPs involved in the path helps identify where issues may be occurring and who to contact for resolution.
              </p>
              <p>
                Security teams rely on ISP lookup as part of their threat intelligence workflow. Identifying the ISP behind suspicious IP addresses helps assess risk levels, block malicious traffic sources, and investigate security incidents. Many attacks originate from compromised servers in specific hosting providers or countries, making ISP identification a key security control.
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
                  🔒 Security Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify the source of suspicious traffic, investigate security incidents, and block malicious IP ranges by ISP or ASN.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🛡️ Fraud Prevention
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Detect fraudulent transactions by identifying datacenter IPs, VPNs, and proxies that may indicate suspicious activity.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose connectivity issues, verify routing paths, and identify network bottlenecks by analyzing ISP information.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Traffic Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Understand your website visitors by analyzing which ISPs and networks they're coming from for better targeting.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ☁️ Cloud Provider Detection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify whether IPs belong to AWS, Google Cloud, Azure, or other cloud providers for infrastructure analysis.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🤖 Bot Detection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Distinguish between residential users and datacenter traffic to identify automated bots and scrapers.
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
                  <span className="text-xl sm:text-2xl flex-shrink-0">{tool.icon}</span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base flex-1 min-w-0">{tool.name}</span>
                  <span className="text-purple-600 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
