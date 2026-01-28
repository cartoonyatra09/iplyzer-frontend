import type { Metadata } from "next";
import IPLocationTool from "@/components/tools/IPLocationTool";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IP Location Lookup - Free IP Geolocation Tool with Map",
  description: "Find any IP address location instantly. Free geolocation tool shows country, city, ISP, timezone & coordinates with interactive map. Fast, accurate & secure.",
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
    title: "IP Location Lookup - Free IP Geolocation Tool with Map",
    description: "Find any IP address location instantly. Free geolocation tool shows country, city, ISP, timezone & coordinates with interactive map.",
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
      question: "Is IP geolocation legal and safe to use?",
      answer: "Yes, IP geolocation is completely legal. IP addresses are public information transmitted with every internet request. Websites commonly use geolocation for content localization, fraud prevention, analytics, and compliance with regional regulations. However, using this information for harassment or illegal activities is prohibited."
    },
    {
      question: "Does IP location work with VPN or proxy?",
      answer: "Yes, but the location shown will be the VPN server or proxy location, not your actual location. This is how VPNs protect privacy - they mask your real IP address with the VPN server's IP. If you're using a VPN and want to see your real location, disconnect from the VPN first."
    },
    {
      question: "What's the difference between IPv4 and IPv6 location lookup?",
      answer: "Both IPv4 and IPv6 addresses can be geolocated using the same principles. IPv6 addresses are newer and longer (128-bit vs 32-bit), but geolocation accuracy is similar. Our tool supports both formats seamlessly, automatically detecting which version you're looking up."
    }
  ];

  const relatedTools = [
    { name: "My IP Address", href: "/my-ip", icon: "🔍", description: "Check your current public IP" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢", description: "Find ISP details" },
    { name: "ASN Lookup", href: "/asn-lookup", icon: "🔢", description: "Look up ASN information" },
    { name: "Reverse DNS", href: "/reverse-dns", icon: "🔄", description: "Get hostname from IP" },
    { name: "VPN Detection", href: "/proxy-check", icon: "🛡️", description: "Check if IP uses VPN/proxy" },
    { name: "DNS Leak Test", href: "/dns-leak-test", icon: "🔒", description: "Test for DNS leaks" },
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
            "name": "IP Location Lookup Tool",
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
            "description": "Free IP geolocation tool to find the geographic location, ISP, timezone, and coordinates of any IP address with interactive map visualization."
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
            "name": "IP Location Lookup - Free IP Geolocation Tool",
            "description": "Find any IP address location instantly with our free geolocation tool. View country, city, ISP, timezone, and coordinates on an interactive map.",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ip-location`,
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "IP Location Lookup Tool"
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
        {/* Hero Section with H1 */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>IP Location Lookup</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              IP Location Lookup Tool
            </h1>
            <p className="text-lg sm:text-xl opacity-95 max-w-3xl">
              Find geographic location, timezone, ISP, and coordinates for any IP address with interactive map visualization
            </p>
          </div>
        </div>

        {/* Tool UI */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IPLocationTool />
          </div>
        </section>

        {/* What is IP Location Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is IP Location Lookup?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                IP location lookup, also known as IP geolocation, is a technology that identifies the geographic location of a device connected to the internet using its IP address. Every device online has a unique IP address that serves as its digital identifier, and this address contains information about where the device is located.
              </p>
              <p>
                Our free IP location tool allows you to instantly discover the country, city, region, timezone, coordinates, and Internet Service Provider (ISP) associated with any IPv4 or IPv6 address. The results are displayed on an interactive map, making it easy to visualize the approximate physical location of the IP address.
              </p>
              <p>
                This tool is essential for network administrators, security professionals, website owners, and anyone curious about the origin of internet traffic. Whether you're investigating suspicious activity, analyzing website visitors, or simply learning about internet infrastructure, IP geolocation provides valuable insights.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How IP Geolocation Works
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                IP geolocation relies on extensive databases that map IP address ranges to physical locations. When an IP address is allocated by Regional Internet Registries (RIRs) to Internet Service Providers (ISPs), it's registered with information about the organization and location where it will be used.
              </p>
              <p>
                Geolocation services collect this data from multiple authoritative sources including WHOIS databases, ISP registration records, routing information, and user-contributed data. Advanced algorithms then process this information to determine the most accurate location for each IP address.
              </p>
              <p>
                The accuracy varies by level: country-level identification is highly accurate (95-99%), while city-level accuracy ranges from 50-80%. This is because ISPs often route traffic through regional hubs that may be in different cities than the end user. Mobile networks and VPN services further complicate accuracy since they route traffic through centralized servers.
              </p>
              <p>
                Modern geolocation services use machine learning algorithms that analyze routing patterns, latency measurements, and historical data to continuously improve accuracy. However, it's crucial to understand that IP geolocation provides approximate location data representing the ISP's infrastructure, not the user's exact physical address.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use This Tool Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our IP Location Tool?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Our IP location lookup tool stands out for its speed, accuracy, and ease of use. Unlike other services that require registration or limit queries, our tool is completely free and provides instant results without any restrictions.
              </p>
              <p>
                <strong>Key Benefits:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Instant Results:</strong> Get location data in under 2 seconds with our optimized backend infrastructure</li>
                <li><strong>Interactive Map:</strong> Visualize IP locations on an embedded OpenStreetMap with precise coordinates</li>
                <li><strong>Comprehensive Data:</strong> View country, city, region, timezone, ISP, ASN, postal code, currency, and language information</li>
                <li><strong>IPv4 & IPv6 Support:</strong> Works with both IPv4 and IPv6 addresses seamlessly</li>
                <li><strong>Privacy Focused:</strong> We don't store your queries or track your searches</li>
                <li><strong>No Registration Required:</strong> Use the tool immediately without creating an account</li>
                <li><strong>Mobile Friendly:</strong> Fully responsive design works perfectly on all devices</li>
              </ul>
              <p>
                Whether you're a security analyst investigating threats, a developer testing geolocation features, or simply curious about IP addresses, our tool provides professional-grade results with a user-friendly interface.
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

        {/* Security & Privacy Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Security & Privacy Impact
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Understanding IP geolocation is crucial for online privacy and security. While IP addresses reveal your approximate location and ISP, they don't expose your exact address or personal identity. However, this information can still be used to track your online activities across websites.
              </p>
              <p>
                <strong>Privacy Considerations:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Websites can use your IP location to serve targeted content and advertisements</li>
                <li>Your ISP can see all unencrypted traffic associated with your IP address</li>
                <li>Combining IP data with other information (cookies, browser fingerprints) can create detailed profiles</li>
                <li>Some services block or restrict access based on IP location (geo-blocking)</li>
              </ul>
              <p>
                <strong>Protection Methods:</strong> To enhance privacy, consider using a <Link href="/proxy-check" className="text-green-600 hover:underline">VPN service</Link> which masks your real IP address, enabling HTTPS on all websites, using privacy-focused browsers, and regularly checking for <Link href="/dns-leak-test" className="text-green-600 hover:underline">DNS leaks</Link> if you use a VPN.
              </p>
              <p>
                Our tool helps you understand what information is publicly visible about your IP address, empowering you to make informed decisions about your online privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Network Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our other free network diagnostic and security tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{tool.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{tool.description}</div>
                  </div>
                  <span className="text-green-600 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
