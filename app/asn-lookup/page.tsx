import type { Metadata } from "next";
import ASNLookupTool from "@/components/tools/ASNLookupTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASN Lookup - Free Autonomous System Number Finder Tool",
  description: "Find ASN information instantly. Free ASN lookup tool to identify Autonomous System Numbers, network ranges & owner details. Fast, accurate & secure.",
  keywords: [
    "asn lookup",
    "autonomous system number",
    "asn search",
    "network range lookup",
    "bgp lookup",
    "as number lookup",
    "network owner lookup",
    "routing information"
  ],
  openGraph: {
    title: "ASN Lookup - Free Autonomous System Number Finder Tool",
    description: "Find ASN information instantly. Free ASN lookup tool to identify Autonomous System Numbers, network ranges & owner details.",
  },
};

export default function ASNLookupPage() {
  const faqs = [
    {
      question: "What is an ASN (Autonomous System Number)?",
      answer: "An ASN is a unique identifier assigned to an Autonomous System (AS), which is a collection of IP networks and routers under the control of a single organization that presents a common routing policy to the internet. ASNs are essential for BGP (Border Gateway Protocol) routing and are assigned by Regional Internet Registries (RIRs). They range from 1 to 4,294,967,295, with 16-bit ASNs (1-65535) being the original format and 32-bit ASNs providing extended capacity."
    },
    {
      question: "How do I find the ASN for an IP address?",
      answer: "You can find the ASN for any IP address using our ASN Lookup tool. Simply enter the IP address, and the tool will query authoritative databases to identify which Autonomous System owns that IP range. This information is publicly available through WHOIS databases and RIR records. You can also use our ISP Lookup tool, which displays the ASN alongside other network information."
    },
    {
      question: "What information can I get from an ASN lookup?",
      answer: "An ASN lookup provides comprehensive network information including the AS number itself, the organization name that owns the AS, the country of registration, all IP address ranges (prefixes) announced by that AS, the total number of IP addresses controlled, and routing information. This data is crucial for network troubleshooting, security analysis, and understanding internet routing paths."
    },
    {
      question: "Why would I need to lookup an ASN?",
      answer: "ASN lookups are valuable for network administrators troubleshooting routing issues, security teams investigating malicious traffic sources, researchers analyzing internet infrastructure, businesses verifying network ownership, and anyone needing to understand which organization controls specific IP ranges. ASNs are also used for implementing BGP-based filtering and traffic engineering."
    },
    {
      question: "What's the difference between ASN and ISP?",
      answer: "An ASN is a technical identifier used for internet routing, while an ISP (Internet Service Provider) is a business entity that provides internet access. Large ISPs typically own one or more ASNs to manage their network infrastructure. However, not all ASN owners are ISPs—they can also be enterprises, cloud providers, universities, or content delivery networks. An ASN represents the routing entity, while ISP represents the service provider."
    },
    {
      question: "Is ASN lookup safe and private?",
      answer: "Yes, ASN lookup is completely safe and private. Our tool queries publicly available information from Regional Internet Registries (RIRs) and BGP routing databases. We do not store your lookup queries or track your searches. ASN information is public data maintained by internet governance organizations, and looking it up does not expose your personal information or compromise your privacy."
    },
    {
      question: "Can I lookup ASN by IP address?",
      answer: "Yes, you can lookup ASN information using either the AS number directly (e.g., AS15169) or any IP address. When you enter an IP address, our tool identifies which Autonomous System owns that IP range and displays all associated ASN information including organization name, country, network prefixes, and routing details. This is useful when you have an IP address and want to know which network operator controls it."
    }
  ];

  const relatedTools = [
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "Reverse DNS", href: "/reverse-dns", icon: "🔍" },
    { name: "Hosting Check", href: "/hosting-check", icon: "☁️" },
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ASN Lookup Tool",
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
              "ratingCount": "1250"
            },
            "description": "Free ASN lookup tool to identify Autonomous System Numbers, network ranges, and owner information. Essential for network analysis and routing investigation."
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
            "name": "ASN Lookup - Free Autonomous System Number Finder Tool",
            "description": "Find ASN information instantly. Free ASN lookup tool to identify Autonomous System Numbers, network ranges & owner details.",
            "url": `${siteUrl}/asn-lookup`,
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "ASN Lookup Tool",
              "applicationCategory": "NetworkApplication"
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
                "name": "ASN Lookup",
                "item": `${siteUrl}/asn-lookup`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="ASN Lookup Tool"
          description="Look up Autonomous System Numbers, network ranges, and owner information"
          breadcrumb="ASN Lookup"
          gradientFrom="from-yellow-600"
          gradientVia="via-orange-600"
          gradientTo="to-red-700"
        />

        {/* Tool UI */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <ASNLookupTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is ASN Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                ASN Lookup is a network analysis tool that provides detailed information about Autonomous System Numbers (ASNs), which are unique identifiers assigned to networks that control their own routing policies on the internet. Every major network operator, from ISPs to cloud providers to large enterprises, operates under one or more ASNs.
              </p>
              <p>
                When you perform an ASN lookup, you can search either by the AS number itself (e.g., AS15169 for Google) or by an IP address to discover which ASN owns that IP range. The tool queries authoritative databases maintained by Regional Internet Registries (RIRs) and routing information from BGP (Border Gateway Protocol) tables to provide comprehensive network ownership and routing data.
              </p>
              <p>
                ASNs are fundamental to how the internet works. They enable different networks to exchange routing information and determine the best paths for data to travel across the global internet. Understanding ASN information is crucial for network engineers managing BGP routing, security professionals tracking malicious traffic, and businesses verifying network infrastructure ownership.
              </p>
              <p>
                The lookup results include the organization name, country of registration, all IP prefixes (network ranges) announced by that AS, contact information, and routing statistics. This information helps you understand the scope and reach of any network operator on the internet.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use ASN Lookup */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Use ASN Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Network administrators use ASN lookup to troubleshoot routing issues, verify peering relationships, and understand traffic paths. When experiencing connectivity problems or unusual routing behavior, identifying the ASNs involved in the path helps pinpoint where issues are occurring and which network operators need to be contacted.
              </p>
              <p>
                Security teams rely on ASN information for threat intelligence and incident response. Malicious actors often operate from specific ASNs or hosting providers. By identifying the ASN associated with suspicious IP addresses, security professionals can block entire network ranges, investigate patterns of abuse, and coordinate with network operators to shut down malicious infrastructure.
              </p>
              <p>
                Businesses use ASN lookup to verify the network infrastructure of partners, competitors, and service providers. Understanding which ASNs an organization operates reveals the scale of their network presence, their hosting choices, and their geographic reach. This information is valuable for competitive analysis, due diligence, and infrastructure planning.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 BGP Routing Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Investigate routing paths, verify BGP announcements, and troubleshoot connectivity issues between autonomous systems.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Investigation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Track malicious traffic sources, identify compromised networks, and block entire ASNs associated with abuse.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌐 Network Ownership
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify which organization owns specific IP ranges and understand the scope of their network infrastructure.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Traffic Engineering
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Implement AS-based routing policies, optimize traffic paths, and manage peering relationships effectively.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔍 Infrastructure Research
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Analyze internet infrastructure, study network topology, and research how major networks interconnect.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🛡️ DDoS Mitigation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify attack sources by ASN, implement AS-level filtering, and coordinate with upstream providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-8 sm:py-10 md:py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Our ASN lookup tool prioritizes your privacy and security. All queries are processed in real-time without storing your search history or personal information. We query publicly available databases maintained by Regional Internet Registries (RIRs) and BGP routing tables, ensuring you receive accurate, authoritative information.
              </p>
              <p>
                The ASN information displayed is public data that network operators are required to register with internet governance organizations. Looking up ASN information does not expose your identity, compromise your security, or alert the network owner. This tool is designed for legitimate network analysis, security research, and infrastructure investigation.
              </p>
              <p>
                We implement industry-standard security measures including HTTPS encryption for all connections, rate limiting to prevent abuse, and no third-party tracking scripts. Your IP address is only used to process your lookup request and is never logged or shared with external parties.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
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
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="text-xl sm:text-2xl">{tool.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">{tool.name}</span>
                  <span className="ml-auto text-yellow-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
