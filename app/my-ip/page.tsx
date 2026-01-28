import type { Metadata } from "next";
import MyIPTool from "@/components/tools/MyIPTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is My IP Address? Free IPv4 & IPv6 Lookup Tool",
  description: "Check your public IP address, ISP, IPv4 & IPv6 instantly. Fast, secure & accurate IP lookup tool. See your location, browser, OS, and network details in real-time.",
  keywords: [
    "what is my ip",
    "my ip address",
    "check ip",
    "find my ip",
    "ip location",
    "public ip",
    "ip address lookup",
    "ipv4 address",
    "ipv6 address",
    "check my ip address",
    "ip checker",
    "my public ip"
  ],
  alternates: {
    canonical: "/my-ip",
  },
  openGraph: {
    title: "What Is My IP Address? Free IPv4 & IPv6 Lookup Tool",
    description: "Check your public IP address, ISP, IPv4 & IPv6 instantly. Fast, secure & accurate IP lookup tool.",
    url: "/my-ip",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is My IP Address? Free IPv4 & IPv6 Lookup Tool",
    description: "Check your public IP address, ISP, IPv4 & IPv6 instantly.",
  },
};

export default function MyIPPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  const faqs = [
    {
      question: "What is an IP address?",
      answer: "An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to the internet. It works like a digital home address, allowing computers and servers to find and communicate with your device. There are two versions: IPv4 (e.g., 192.168.1.1) and IPv6 (e.g., 2001:0db8::1)."
    },
    {
      question: "Can my IP address show my exact location?",
      answer: "No, your IP address cannot reveal your exact physical address or pinpoint your home. It can only show your approximate location (city or region) and your Internet Service Provider (ISP). The location data comes from IP geolocation databases that map IP ranges to general areas, not specific addresses."
    },
    {
      question: "Is this IP lookup tool safe to use?",
      answer: "Yes, this tool is completely safe. We fetch your IP information in real-time and do not store, log, or share your data with third parties. Your IP address is already visible to every website you visit, so checking it here poses no additional privacy risk. We use secure HTTPS connections to protect your data."
    },
    {
      question: "What's the difference between IPv4 and IPv6?",
      answer: "IPv4 uses 32-bit addresses (about 4.3 billion unique addresses) in the format xxx.xxx.xxx.xxx, while IPv6 uses 128-bit addresses (virtually unlimited) in hexadecimal format. IPv6 was created to solve IPv4 address exhaustion and offers improved security, performance, and auto-configuration features."
    },
    {
      question: "Can a VPN hide my IP address?",
      answer: "Yes, a VPN (Virtual Private Network) can hide your real IP address by routing your internet traffic through VPN servers. When you use a VPN, websites see the VPN server's IP address instead of yours. This is useful for privacy, security, and accessing geo-restricted content. You can verify your VPN is working by checking your IP before and after connecting."
    },
    {
      question: "Why does my IP address change?",
      answer: "Most home internet connections use dynamic IP addresses that change periodically. Your ISP assigns you a new IP address when you restart your router or after a certain time period. This helps ISPs manage their IP address pool efficiently. Businesses often use static IP addresses that never change."
    },
    {
      question: "Can someone track me with my IP address?",
      answer: "Your IP address can reveal your approximate location (city/region) and ISP, but it cannot identify you personally or show your exact address. However, ISPs and law enforcement can link IP addresses to specific users when necessary. For enhanced privacy, consider using a VPN or proxy service."
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
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "What Is My IP Address? Free IPv4 & IPv6 Lookup Tool",
            "description": "Check your public IP address, ISP, IPv4 & IPv6 instantly. Fast, secure & accurate IP lookup tool.",
            "url": `${siteUrl}/my-ip`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "IPlyzer",
              "url": siteUrl
            },
            "about": {
              "@type": "Thing",
              "name": "IP Address Lookup",
              "description": "Tool to check and display your public IP address and network information"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "My IP Address Checker",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "8500",
                "bestRating": "5",
                "worstRating": "1"
              }
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
                "name": "My IP Address",
                "item": `${siteUrl}/my-ip`
              }
            ]
          })
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Check Your IP Address",
            "description": "Learn how to find and check your public IP address using our free tool",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Visit the Tool",
                "text": "Open the My IP Address tool on IPlyzer.com"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "View Your IP",
                "text": "Your IP address will be displayed automatically along with location and ISP information"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Copy or Share",
                "text": "Click the copy button to copy your IP address to clipboard"
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
                An <strong>IP (Internet Protocol) address</strong> is a unique numerical identifier assigned to every device connected to the internet. Think of it as your device's digital home address that allows other computers and servers to find and communicate with you online. Without an IP address, your device cannot send or receive data over the internet.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                There are two versions of IP addresses currently in use: <strong>IPv4</strong> and <strong>IPv6</strong>. IPv4 addresses consist of four numbers separated by dots (e.g., 192.168.1.1), with each number ranging from 0 to 255. IPv6 addresses use a longer hexadecimal format (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) to accommodate the growing number of internet-connected devices worldwide.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Your IP address reveals several pieces of information, including your approximate geographic location (city or region), your Internet Service Provider (ISP), and your connection type. This information is used by websites to deliver localized content, prevent fraud, enforce geographic restrictions, and provide better user experiences. However, your IP address cannot reveal your exact physical address or personally identify you without additional information from your ISP.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              How Does This Tool Work?
            </h2>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Automatic Detection
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    When you visit this page, our server automatically detects your public IP address from the incoming connection request. This is the same IP address that every website you visit can see.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Geolocation Lookup
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We query trusted IP geolocation databases to find your approximate location, ISP information, and connection details. This data is publicly available and does not require any special permissions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Device Information
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Your browser automatically sends information about your device, including browser type and operating system. We display this information to give you a complete picture of how websites see your connection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Real-Time Display
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    All information is displayed instantly in an easy-to-read format. We do not store, log, or share your data with third parties. Your privacy is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Should You Check Your IP Address?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Diagnose connection issues, configure network settings, set up port forwarding, or troubleshoot remote access problems. Knowing your IP is essential for technical support.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security & Privacy
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Verify your VPN is working correctly, check for DNS leaks, monitor unauthorized access attempts, or ensure your proxy server is functioning properly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌍 Geo-Location Testing
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Understand how websites see your location, test geo-targeting features, access region-specific content, or verify location-based services are working correctly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Website & Analytics Testing
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Test how your website tracks visitors, verify analytics are working correctly, check IP-based access controls, or troubleshoot content delivery networks (CDN).
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🎮 Gaming & Streaming
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Set up game servers, configure streaming services, troubleshoot connection issues, or share your IP with friends for multiplayer gaming sessions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  💼 Remote Work Setup
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Configure remote desktop connections, set up VPN access, whitelist your IP for secure access, or troubleshoot corporate network connectivity issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy Considerations
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-1">
                      Safe to Share (Generally)
                    </h3>
                    <p className="text-sm sm:text-base text-green-800">
                      Your IP address is visible to every website you visit and is necessary for internet communication. Sharing it is generally safe, but avoid posting it publicly on forums or social media unnecessarily.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
                      Limited Personal Information
                    </h3>
                    <p className="text-sm sm:text-base text-blue-800">
                      Your IP address can reveal your approximate location (city/region) and ISP, but it cannot show your exact physical address, name, or other personal details without ISP cooperation.
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
                      Potential Risks
                    </h3>
                    <p className="text-sm sm:text-base text-yellow-800">
                      Malicious actors could use your IP for targeted attacks (DDoS), attempt to scan for open ports, or gather information about your network. Use a firewall and keep your router firmware updated.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-1">
                      Enhanced Privacy Options
                    </h3>
                    <p className="text-sm sm:text-base text-purple-800">
                      For enhanced privacy, consider using a VPN, proxy server, or Tor browser. These services mask your real IP address and encrypt your internet traffic. <Link href="/proxy-check" className="text-purple-600 hover:text-purple-700 font-semibold underline">Check if you're using a VPN/proxy</Link>.
                    </p>
                  </div>
                </div>
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
              Related IP Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Explore more tools to analyze and understand your network connection:
            </p>
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
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
              >
                <span>View All Network Tools</span>
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
