import type { Metadata } from "next";
import IPLocationTool from "@/components/tools/IPLocationTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IP Location Lookup - Find Geographic Location of Any IP Address",
  description: "Free IP geolocation tool to find the country, city, coordinates, timezone, and ISP of any IP address. Includes interactive map visualization.",
  keywords: [
    "ip location",
    "ip geolocation",
    "ip address lookup",
    "find ip location",
    "ip to location",
    "ip address tracker",
    "ip map"
  ],
  openGraph: {
    title: "IP Location Lookup - Find Geographic Location of Any IP Address",
    description: "Free IP geolocation tool with interactive map visualization.",
  },
};

export default function IPLocationPage() {
  const faqs = [
    {
      question: "How accurate is IP geolocation?",
      answer: "IP geolocation accuracy varies by location and IP type. Country-level accuracy is typically 95-99%, while city-level accuracy ranges from 50-80%. The location shown represents where your ISP's servers are located, not your exact physical address. Mobile and VPN IPs are generally less accurate than residential broadband connections."
    },
    {
      question: "Can I track someone's exact address with their IP?",
      answer: "No, IP addresses cannot reveal someone's exact street address or precise location. IP geolocation only provides approximate location data at the city or regional level. Only ISPs and law enforcement with proper authorization can access detailed subscriber information associated with an IP address."
    },
    {
      question: "Why does the IP location show a different city?",
      answer: "IP geolocation databases map IP ranges to locations based on ISP registration data. Your ISP may route traffic through servers in nearby cities, or the database may not have precise information for your specific IP range. This is especially common with mobile networks and smaller ISPs."
    },
    {
      question: "What information can I get from an IP address?",
      answer: "From an IP address, you can typically determine the country, region, city (approximate), timezone, ISP name, organization, and ASN (Autonomous System Number). You can also see coordinates for map visualization, postal code (when available), and currency/language information for the region."
    },
    {
      question: "Is IP geolocation legal?",
      answer: "Yes, IP geolocation is completely legal. IP addresses are public information transmitted with every internet request. Websites commonly use geolocation for content localization, fraud prevention, analytics, and compliance with regional regulations. However, using this information for harassment or illegal activities is prohibited."
    }
  ];

  const relatedTools = [
    { name: "My IP Address", href: "/my-ip", icon: "🔍" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "ASN Lookup", href: "/asn-lookup", icon: "🔢" },
    { name: "Reverse DNS", href: "/reverse-dns", icon: "🔄" },
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
                "name": "IP Location Lookup",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ip-location`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="IP Location Lookup"
          description="Find geographic location, timezone, and ISP for any IP address"
          breadcrumb="IP Location Lookup"
          gradientFrom="from-green-600"
          gradientVia="via-emerald-600"
          gradientTo="to-teal-700"
        />

        {/* Tool UI */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IPLocationTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How IP Geolocation Works
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                IP geolocation is the process of determining the geographic location of a device connected to the internet using its IP address. This technology relies on extensive databases that map IP address ranges to physical locations based on registration data from Internet Service Providers (ISPs) and Regional Internet Registries (RIRs).
              </p>
              <p>
                When an IP address is assigned, it's registered with information about the organization and location where it will be used. Geolocation services collect this data from multiple sources including WHOIS databases, ISP records, and user-contributed information to build comprehensive mapping databases.
              </p>
              <p>
                The accuracy of IP geolocation varies significantly based on several factors. Country-level identification is highly accurate (95-99%), as IP blocks are allocated to specific countries. However, city-level accuracy is less reliable (50-80%) because ISPs often route traffic through regional hubs that may be in different cities than the end user.
              </p>
              <p>
                Modern geolocation services use multiple data sources and machine learning algorithms to improve accuracy. They consider factors like routing information, latency measurements, and historical data patterns. However, it's important to understand that IP geolocation provides approximate location data and should not be relied upon for precise positioning.
              </p>
            </div>
          </div>
        </section>

        {/* Accuracy Disclaimer */}
        <section className="py-12 bg-yellow-50 border-y border-yellow-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="text-4xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Accuracy Disclaimer
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  IP geolocation provides approximate location data and should not be considered precise. The location shown typically represents your ISP's server location or regional hub, which may be in a different city than your actual location.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Factors affecting accuracy include: mobile networks (cell tower locations), VPN usage (server locations), proxy servers, satellite internet, and database update frequency. For privacy reasons, IP addresses cannot and do not reveal your exact street address or precise coordinates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🌍 Content Localization
                </h3>
                <p className="text-gray-600">
                  Websites use IP geolocation to display content in the appropriate language, currency, and regional format based on visitor location.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🔒 Fraud Prevention
                </h3>
                <p className="text-gray-600">
                  E-commerce and financial services use geolocation to detect suspicious transactions from unexpected locations.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📊 Analytics & Insights
                </h3>
                <p className="text-gray-600">
                  Businesses analyze visitor geographic data to understand their audience and optimize marketing strategies.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🚫 Access Control
                </h3>
                <p className="text-gray-600">
                  Services use geolocation to enforce geographic restrictions, comply with regulations, or block access from specific regions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-gray-600">
                  IT professionals use IP location data to diagnose routing issues and verify network configurations.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🛡️ Security Monitoring
                </h3>
                <p className="text-gray-600">
                  Security teams track IP locations to identify unauthorized access attempts and potential threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-medium text-gray-900">{tool.name}</span>
                  <span className="ml-auto text-green-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
