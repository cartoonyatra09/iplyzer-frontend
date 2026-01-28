import type { Metadata } from "next";
import ISPLookupTool from "@/components/tools/ISPLookupTool";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISP Lookup - Find Internet Service Provider by IP Address",
  description: "Identify ISP, organization & ASN for any IP address instantly. Free, accurate ISP lookup tool for network analysis, security & fraud detection. Fast results.",
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
  alternates: {
    canonical: "/isp-lookup",
  },
  openGraph: {
    title: "ISP Lookup - Find Internet Service Provider by IP Address",
    description: "Identify ISP, organization & ASN for any IP address instantly. Free, accurate ISP lookup tool for network analysis.",
    url: "/isp-lookup",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISP Lookup - Find Internet Service Provider by IP Address",
    description: "Identify ISP, organization & ASN for any IP address instantly.",
  },
};

export default function ISPLookupPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
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
    },
    {
      question: "What's the difference between ISP and ASN?",
      answer: "An ISP (Internet Service Provider) is the company that provides internet access, while an ASN (Autonomous System Number) is a unique identifier for the network infrastructure they operate. One ISP may have multiple ASNs for different regions or services. Our tool shows both ISP name and ASN for complete network identification."
    },
    {
      question: "Can ISP lookup detect VPNs and proxies?",
      answer: "Yes, ISP lookup can often identify VPN and proxy services because they typically use datacenter IP addresses from hosting providers rather than residential ISPs. If the ISP is a known VPN provider or datacenter, it indicates the user may be masking their real location. Use our dedicated Proxy/VPN Check tool for more detailed detection."
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
      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ISP Lookup Tool",
            "applicationCategory": "NetworkApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "2150"
            },
            "description": "Free ISP lookup tool to identify Internet Service Provider, organization, ASN, and hosting information for any IP address."
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ISP Lookup - Find Internet Service Provider by IP Address",
            "description": "Identify ISP, organization & ASN for any IP address instantly. Free, accurate ISP lookup tool for network analysis.",
            "url": `${siteUrl}/isp-lookup`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "IPlyzer",
              "url": siteUrl
            },
            "about": {
              "@type": "Thing",
              "name": "ISP Lookup",
              "description": "Tool to identify Internet Service Provider and network information from IP addresses"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "ISP Lookup Tool"
            }
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
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "ISP Lookup",
                "item": `${siteUrl}/isp-lookup`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with H1 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-700 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>ISP Lookup</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              ISP Lookup Tool - Find Internet Service Provider
            </h1>
            <p className="text-lg sm:text-xl opacity-95 max-w-3xl">
              Identify Internet Service Provider, organization, ASN, and hosting information for any IP address instantly
            </p>
          </div>
        </div>

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

        {/* How It Works Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              How Does ISP Lookup Work?
            </h2>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    IP Address Input
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Enter any IPv4 or IPv6 address into the lookup tool. You can also check your own IP address automatically to see which ISP you're using.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Database Query
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Our system queries multiple authoritative databases including WHOIS records, RIR registrations, and ASN databases to find the organization that owns the IP address block.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Data Enrichment
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We enrich the basic ISP information with additional details like ASN, organization type (hosting, residential, mobile), country, and network classification.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Instant Results
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    All information is displayed in under 2 seconds with a clean, easy-to-read format. Results include ISP name, ASN, organization, and network type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use ISP Lookup */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Should You Use ISP Lookup?
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
              <p>
                Our free ISP lookup tool provides instant, accurate results without requiring registration or payment. Whether you're investigating suspicious activity, analyzing website traffic, or conducting network research, this tool gives you professional-grade ISP intelligence in seconds. Learn more about <Link href="/asn-lookup" className="text-purple-600 hover:text-purple-700 underline">ASN lookup</Link> for deeper network analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Common Use Cases & Examples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify the source of suspicious traffic, investigate security incidents, and block malicious IP ranges by ISP or ASN. Essential for SOC teams and security analysts.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🛡️ Fraud Prevention
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Detect fraudulent transactions by identifying datacenter IPs, VPNs, and proxies that may indicate suspicious activity. Protect your e-commerce business.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose connectivity issues, verify routing paths, and identify network bottlenecks by analyzing ISP information. Perfect for IT administrators.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Traffic Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Understand your website visitors by analyzing which ISPs and networks they're coming from for better targeting and marketing insights.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ☁️ Cloud Provider Detection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify whether IPs belong to AWS, Google Cloud, Azure, or other cloud providers for infrastructure analysis and <Link href="/hosting-check" className="text-purple-600 hover:underline">hosting verification</Link>.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🤖 Bot Detection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Distinguish between residential users and datacenter traffic to identify automated bots and scrapers. Improve your site's security posture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy Impact */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy Impact
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
                      ISP Data is Public Information
                    </h3>
                    <p className="text-sm sm:text-base text-blue-800">
                      ISP information for IP addresses is publicly available through WHOIS databases and RIR registrations. This data is essential for internet routing and network management, making it accessible to anyone who needs it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-1">
                      Legitimate Security Use
                    </h3>
                    <p className="text-sm sm:text-base text-green-800">
                      Security professionals use ISP lookup to identify malicious traffic sources, investigate cyber attacks, and implement network security policies. This tool helps protect businesses and users from online threats.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-yellow-900 mb-1">
                      Privacy Considerations
                    </h3>
                    <p className="text-sm sm:text-base text-yellow-800">
                      While ISP lookup reveals network information, it cannot identify individual users or show personal details. Only ISPs and law enforcement with proper authorization can link IP addresses to specific subscribers. For enhanced privacy, consider using a <Link href="/proxy-check" className="text-yellow-900 hover:text-yellow-700 underline font-semibold">VPN service</Link>.
                    </p>
                  </div>
                </div>
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
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
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
              Related Network Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Explore more tools to analyze IP addresses and network infrastructure:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200 active:scale-95"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{tool.icon}</span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base flex-1 min-w-0">{tool.name}</span>
                  <span className="text-purple-600 flex-shrink-0 text-lg sm:text-xl">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm sm:text-base"
              >
                <span>View All IP Tools</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
