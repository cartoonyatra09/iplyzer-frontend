import type { Metadata } from "next";
import ProxyCheckTool from "@/components/tools/ProxyCheckTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proxy & VPN Detection - Check IP Address Connection Type",
  description: "Free tool to detect if an IP address is using a proxy, VPN, or datacenter connection. Helpful for understanding network types and connection characteristics.",
  keywords: [
    "proxy check",
    "vpn detection",
    "proxy detector",
    "check proxy",
    "vpn checker",
    "datacenter ip",
    "hosting detection",
    "connection type"
  ],
  openGraph: {
    title: "Proxy & VPN Detection - Check IP Address Connection Type",
    description: "Free tool to detect proxy, VPN, and datacenter connections.",
  },
};

export default function ProxyCheckPage() {
  const faqs = [
    {
      question: "What is a proxy and how does it work?",
      answer: "A proxy server acts as an intermediary between your device and the internet. When you use a proxy, your internet requests go through the proxy server first, which then forwards them to the destination. This can provide benefits like improved privacy, access to geo-restricted content, or enhanced security. Proxies are commonly used by businesses for network management and by individuals for privacy purposes."
    },
    {
      question: "Why would someone use a VPN or proxy?",
      answer: "People use VPNs and proxies for many legitimate reasons: protecting privacy online, securing connections on public WiFi, accessing content from different regions, bypassing workplace or school restrictions, protecting against tracking, or testing websites from different locations. Businesses use them for secure remote access and protecting sensitive data. They're valuable tools for online privacy and security."
    },
    {
      question: "How accurate is proxy and VPN detection?",
      answer: "Detection accuracy varies depending on the service and method used. Our tool checks against databases of known proxy, VPN, and datacenter IP addresses, which are generally 85-95% accurate. However, some privacy services may not be detected, and some legitimate connections might be flagged if they share characteristics with proxies. Results should be used as indicators rather than definitive proof."
    },
    {
      question: "What does 'datacenter IP' mean?",
      answer: "A datacenter IP is an address assigned to servers in data centers rather than residential or business internet connections. These IPs are used by cloud services (like AWS, Google Cloud), web hosting companies, and VPN providers. Seeing a datacenter IP doesn't necessarily indicate anything suspicious—it's normal for servers, APIs, and many legitimate services. It simply means the connection originates from a hosting facility rather than a home or office."
    },
    {
      question: "Is using a proxy or VPN legal?",
      answer: "Yes, using proxies and VPNs is legal in most countries. They're legitimate privacy and security tools used by millions of people and businesses worldwide. However, some services or websites may have terms of service that restrict their use, and a few countries have regulations around VPN usage. The tools themselves are legal—it's how they're used that matters. Always respect the terms of service of websites you visit."
    }
  ];

  const relatedTools = [
    { name: "My IP Address", href: "/my-ip", icon: "🌐" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "Hosting Check", href: "/hosting-check", icon: "☁️" },
    { name: "IP Location", href: "/ip-location", icon: "📍" },
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
                "name": "Proxy Check",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/proxy-check`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="Proxy & VPN Detection"
          description="Check if an IP address is using a proxy, VPN, or datacenter connection"
          breadcrumb="Proxy Check"
          gradientFrom="from-red-600"
          gradientVia="via-pink-600"
          gradientTo="to-rose-700"
        />

        {/* Tool UI */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <ProxyCheckTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is Proxy & VPN Detection?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Proxy and VPN detection helps identify the type of internet connection an IP address is using. This tool analyzes IP addresses to determine whether they're coming from standard residential or business connections, or if they're routed through proxy servers, VPN services, or datacenter infrastructure.
              </p>
              <p>
                The detection process works by comparing IP addresses against databases of known proxy servers, VPN providers, and datacenter IP ranges. These databases are maintained by combining information from internet service providers, hosting companies, and network analysis. The tool also examines connection characteristics and routing patterns that are typical of different connection types.
              </p>
              <p>
                Understanding connection types is useful for various purposes: website owners may want to understand their traffic sources, businesses might need to verify user locations, and network administrators often need to identify different types of connections for security or compliance purposes. This information helps provide context about how users are connecting to online services.
              </p>
              <p>
                It's important to note that using proxies and VPNs is completely legitimate and common. Millions of people use these services daily for privacy, security, and accessing content. This tool simply identifies the connection type—it doesn't make judgments about the legitimacy or purpose of the connection.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use This Tool */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Check for Proxies and VPNs?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Website owners and developers use proxy detection to better understand their traffic patterns and user base. Knowing whether visitors are using privacy services helps with analytics accuracy, content delivery optimization, and understanding geographic distribution of users. This information can improve user experience by helping tailor content and services appropriately.
              </p>
              <p>
                Businesses may need to verify connection types for compliance, security policies, or service delivery purposes. For example, streaming services need to understand connection origins for licensing agreements, while financial institutions may have regulatory requirements around user verification. Understanding connection types helps organizations meet their operational and compliance needs.
              </p>
              <p>
                Network administrators and IT professionals use these tools for troubleshooting, security monitoring, and network management. Identifying different connection types helps diagnose issues, optimize network performance, and maintain security policies. It's a valuable tool for understanding and managing network infrastructure effectively.
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
                  📊 Traffic Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Understand your website visitors better by identifying connection types and improving analytics accuracy.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Management
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Help IT teams identify and manage different types of connections in their network infrastructure.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌍 Content Delivery
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Optimize content delivery and user experience based on connection type and characteristics.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📈 Business Intelligence
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Gain insights into user behavior patterns and geographic distribution for better decision making.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Monitoring
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Monitor network connections and identify unusual patterns as part of security practices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ✅ Compliance Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Help meet regulatory and compliance requirements that involve user verification or location.
                </p>
              </div>
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
                  <span className="ml-auto text-red-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
