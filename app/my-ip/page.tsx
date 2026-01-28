import type { Metadata } from "next";
import MyIPTool from "@/components/tools/MyIPTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is My IP Address? - Check Your IP Location & ISP",
  description: "Instantly find your public IP address, location, ISP, browser, and operating system. Free, fast, and accurate IP lookup tool with detailed network information.",
  keywords: [
    "what is my ip",
    "my ip address",
    "check ip",
    "find my ip",
    "ip location",
    "public ip",
    "ip address lookup"
  ],
  openGraph: {
    title: "What Is My IP Address? - Check Your IP Location & ISP",
    description: "Instantly find your public IP address, location, ISP, and more.",
  },
};

export default function MyIPPage() {
  const faqs = [
    {
      question: "What is my IP address used for?",
      answer: "Your IP address is used to identify your device on the internet and route data to and from your location. Websites use it to deliver content, track analytics, and provide location-based services. It's essential for all internet communication."
    },
    {
      question: "Is my IP address always the same?",
      answer: "Most home users have a dynamic IP address that changes periodically when assigned by your ISP. However, some users and businesses have static IP addresses that remain constant. You can check if yours changes by visiting this page at different times."
    },
    {
      question: "Can I hide my IP address?",
      answer: "Yes, you can hide your real IP address using a VPN (Virtual Private Network), proxy server, or Tor browser. These services route your traffic through their servers, masking your actual IP address. This is useful for privacy and accessing geo-restricted content."
    },
    {
      question: "What's the difference between public and private IP?",
      answer: "A public IP address is assigned by your ISP and is visible to the internet. A private IP address (like 192.168.x.x) is used within your local network and is not directly accessible from the internet. Your router uses NAT to translate between them."
    },
    {
      question: "Why does my IP show a different city?",
      answer: "IP geolocation is based on databases that map IP ranges to locations. Sometimes these databases are not perfectly accurate, especially for mobile networks or VPNs. The location shown is typically your ISP's server location, which may be in a nearby city rather than your exact location."
    }
  ];

  const relatedTools = [
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "IPv6 Check", href: "/ipv6-check", icon: "🔄" },
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
                "name": "My IP Address",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/my-ip`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="What Is My IP Address?"
          description="Discover your IP address, location, ISP, and network details"
          breadcrumb="My IP Address"
        />

        {/* Tool UI */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MyIPTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Is an IP Address?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to the internet. Think of it as your device's digital home address that allows other computers and servers to find and communicate with you online.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                There are two versions of IP addresses currently in use: IPv4 and IPv6. IPv4 addresses consist of four numbers separated by dots (e.g., 192.168.1.1), while IPv6 addresses use a longer hexadecimal format to accommodate the growing number of internet-connected devices.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Your IP address reveals several pieces of information, including your approximate geographic location, your Internet Service Provider (ISP), and your connection type. This information is used by websites to deliver localized content, prevent fraud, and provide better user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Check Your IP Address?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Diagnose connection issues, configure network settings, or set up remote access to your devices.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security & Privacy
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Verify your VPN is working, check for IP leaks, or monitor unauthorized access attempts.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌍 Geo-Location Services
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Understand how websites see your location and access region-specific content.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Website Analytics
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Test how your website tracks visitors and ensure analytics are working correctly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
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
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200 active:scale-95"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{tool.icon}</span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base flex-1">{tool.name}</span>
                  <span className="ml-auto text-blue-600 text-lg sm:text-xl flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
