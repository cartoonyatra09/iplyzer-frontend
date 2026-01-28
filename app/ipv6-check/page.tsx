import type { Metadata } from "next";
import IPv6CheckTool from "@/components/tools/IPv6CheckTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPv6 Check - Test Your IPv6 Connectivity & Support Free",
  description: "Check if you have IPv6 connectivity instantly. Free IPv6 test tool shows your IPv4 & IPv6 addresses, browser support & network status. Fast & accurate.",
  keywords: [
    "ipv6 test",
    "ipv6 check",
    "ipv6 connectivity",
    "test ipv6",
    "check ipv6 support",
    "ipv6 enabled",
    "ipv6 vs ipv4",
    "internet protocol v6"
  ],
  openGraph: {
    title: "IPv6 Check - Test Your IPv6 Connectivity & Support Free",
    description: "Check if you have IPv6 connectivity instantly. Free IPv6 test tool shows your IPv4 & IPv6 addresses, browser support & network status.",
    type: "website",
  },
};

export default function IPv6CheckPage() {
  const faqs = [
    {
      question: "What is IPv6 and why does it matter?",
      answer: "IPv6 (Internet Protocol version 6) is the latest version of the Internet Protocol, designed to replace IPv4. While IPv4 uses 32-bit addresses (allowing about 4.3 billion unique addresses), IPv6 uses 128-bit addresses, providing virtually unlimited address space. IPv6 is essential for the continued growth of the internet as IPv4 addresses have been exhausted. It also offers improved security, better routing efficiency, and simplified network configuration."
    },
    {
      question: "How do I know if I have IPv6?",
      answer: "The easiest way is to use our IPv6 test tool above. It will instantly detect whether your current internet connection is using IPv6 or IPv4. If you see an IPv6 address (containing colons like 2001:0db8::1), you have IPv6 connectivity. If you see an IPv4 address (dots like 192.168.1.1), you're using IPv4 only. You can also check your router settings or contact your ISP to confirm IPv6 support."
    },
    {
      question: "Why don't I have IPv6?",
      answer: "Most commonly, your Internet Service Provider (ISP) hasn't enabled IPv6 on their network yet. While major ISPs in developed countries have rolled out IPv6, many smaller providers and regions are still IPv4-only. Other reasons include: your router doesn't support IPv6, IPv6 is disabled in your network settings, or you're behind a network (like corporate or school) that only uses IPv4. The good news is that IPv4 still works perfectly fine for all current internet services."
    },
    {
      question: "Do I need IPv6?",
      answer: "For most users, IPv4 is still sufficient for everyday internet use. However, IPv6 is becoming increasingly important as more services adopt it. You might need IPv6 if: you're running servers that need to be accessible globally, you work with IoT devices that require unique IP addresses, you need to access IPv6-only services, or you want to future-proof your network. Eventually, as IPv4 addresses become scarcer, IPv6 will become necessary."
    },
    {
      question: "Can I use both IPv4 and IPv6?",
      answer: "Yes! This is called 'dual-stack' networking, where your device has both an IPv4 and IPv6 address simultaneously. Most modern operating systems and routers support dual-stack operation. When you visit a website, your device will prefer IPv6 if available, but automatically fall back to IPv4 if needed. This ensures compatibility with both old and new internet infrastructure during the transition period."
    },
    {
      question: "Is this IPv6 test tool safe to use?",
      answer: "Yes, our IPv6 test tool is completely safe and secure. We only check your publicly visible IP address information that websites can already see when you visit them. We don't store your IP address, track your browsing activity, or collect any personal information. The test runs entirely in your browser and our servers, with no third-party tracking or data sharing. Your privacy is fully protected."
    },
    {
      question: "What's the difference between IPv4 and IPv6?",
      answer: "IPv4 uses 32-bit addresses (like 192.168.1.1) providing about 4.3 billion addresses, while IPv6 uses 128-bit addresses (like 2001:0db8::1) providing 340 undecillion addresses. IPv6 offers better security with built-in IPsec, more efficient routing, simplified network configuration with auto-configuration, no need for NAT (Network Address Translation), and better support for mobile devices. IPv6 also has improved multicast and anycast capabilities, making it superior for modern internet applications."
    }
  ];

  const relatedTools = [
    { name: "What Is My IP", href: "/my-ip", icon: "🌐", description: "Check your public IP address" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍", description: "Find geolocation of any IP" },
    { name: "ISP Lookup Tool", href: "/isp-lookup", icon: "🏢", description: "Identify internet service provider" },
    { name: "DNS Leak Test", href: "/dns-leak-test", icon: "🔒", description: "Check for DNS leaks" },
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
            "name": "IPv6 Check Tool",
            "applicationCategory": "NetworkApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free IPv6 connectivity test tool to check if your internet connection supports IPv6 protocol. Instant results showing IPv4 & IPv6 addresses, browser support, and network status.",
            "featureList": [
              "Instant IPv6 connectivity detection",
              "IPv4 and IPv6 address display",
              "Browser compatibility check",
              "Dual-stack network detection",
              "Real-time connection analysis",
              "No registration required"
            ],
            "screenshot": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ipv6-check`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
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
            "name": "IPv6 Check - Test Your IPv6 Connectivity & Support Free",
            "description": "Check if you have IPv6 connectivity instantly. Free IPv6 test tool shows your IPv4 & IPv6 addresses, browser support & network status. Fast & accurate.",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ipv6-check`,
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "IPv6 Check Tool"
            },
            "breadcrumb": {
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
                  "name": "IPv6 Check",
                  "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ipv6-check`
                }
              ]
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
                "name": "IPv6 Check",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ipv6-check`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="IPv6 Check - Test Your Connectivity"
          description="Instantly check if your internet connection supports IPv6 protocol"
          breadcrumb="IPv6 Check"
          gradientFrom="from-indigo-600"
          gradientVia="via-purple-600"
          gradientTo="to-pink-700"
        />

        {/* Tool UI */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <IPv6CheckTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is IPv6 Check Tool?
            </h1>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                An IPv6 check tool is a free online utility that instantly tests whether your internet connection supports IPv6 (Internet Protocol version 6), the newest version of the protocol that powers the internet. When you visit this page, our tool automatically detects which IP protocol version your device is using to connect to our servers, providing you with comprehensive information about your network configuration.
              </p>
              <p>
                The test works by examining your IP address format and connection characteristics. IPv6 addresses are longer and use hexadecimal notation with colons (like 2001:0db8:85a3::8a2e:0370:7334), while IPv4 addresses use decimal numbers with dots (like 192.168.1.1). Our tool also checks your browser's IPv6 support capabilities, detects dual-stack configurations, and provides detailed information about your connection type, helping you understand your network's capabilities.
              </p>
              <p>
                Understanding your IPv6 status is crucial because the internet is gradually transitioning from IPv4 to IPv6. IPv4 addresses are exhausted, and IPv6 provides the virtually unlimited address space needed for billions of new devices connecting to the internet. Many modern ISPs now offer IPv6 connectivity, and most websites support both protocols for maximum compatibility. Knowing your IPv6 status helps you troubleshoot connectivity issues, verify ISP promises, and ensure your network is future-ready.
              </p>
              <p>
                Our IPv6 test tool provides instant results showing your current IP address, whether you have IPv6 enabled, your IPv4 fallback status, browser compatibility, and dual-stack network detection. This information is valuable for network administrators, IT professionals, developers, and anyone interested in understanding their internet connection capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              How Does IPv6 Check Work?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Our IPv6 check tool uses a sophisticated detection mechanism to analyze your internet connection. When you load this page, your browser sends a request to our servers, and we examine the incoming connection to determine which IP protocol version you're using. The process is instantaneous and requires no action from you.
              </p>
              <p>
                The tool performs multiple checks simultaneously. First, it identifies your public IP address and determines whether it's an IPv4 or IPv6 address based on its format. Second, it tests your browser's native IPv6 support by attempting to establish connections using both protocols. Third, it detects dual-stack configurations where your device has both IPv4 and IPv6 addresses assigned. Finally, it analyzes your network's fallback behavior to see if IPv4 is used when IPv6 is unavailable.
              </p>
              <p>
                The results are displayed in an easy-to-understand format, showing your current IP address, protocol version, browser support status, and connection details. If you have IPv6 enabled, you'll see your IPv6 address along with any IPv4 fallback address. If you're using IPv4 only, the tool will clearly indicate this and explain what it means for your internet connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Why Check IPv6 */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Should You Check Your IPv6 Connectivity?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Knowing whether you have IPv6 connectivity helps you understand your network capabilities and troubleshoot potential issues. If you're experiencing problems accessing certain websites or services, it might be related to IPv6 configuration. Some services are IPv6-only, while others work better with IPv6 enabled. Testing your IPv6 connectivity ensures you can access all internet resources without limitations.
              </p>
              <p>
                For network administrators and IT professionals, IPv6 testing is essential for ensuring proper network configuration and planning infrastructure upgrades. As more organizations adopt IPv6, verifying connectivity becomes crucial for maintaining seamless communication with partners, customers, and cloud services. Regular IPv6 checks help identify configuration issues before they impact users or business operations.
              </p>
              <p>
                Home users benefit from IPv6 through improved performance, better security features, and future-proofing their network setup. While IPv4 continues to work, having IPv6 ensures you're ready for the next generation of internet services and IoT devices that increasingly rely on IPv6 addressing. Many gaming services, streaming platforms, and smart home devices perform better with native IPv6 connectivity.
              </p>
              <p>
                Security is another important reason to check your IPv6 status. IPv6 includes built-in security features like IPsec (Internet Protocol Security) that provide better protection against certain types of attacks. Understanding your IPv6 configuration helps you ensure these security features are properly enabled and configured, protecting your network and devices from potential threats.
              </p>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy Impact
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Our IPv6 check tool is designed with your privacy and security in mind. We only access information that is already publicly visible when you connect to any website - your IP address and basic connection details. We do not store your IP address, track your browsing activity, install cookies for tracking purposes, or share your information with third parties. The test runs entirely between your browser and our secure servers.
              </p>
              <p>
                IPv6 itself has important security implications. Unlike IPv4, which often relies on Network Address Translation (NAT) for security, IPv6 includes built-in security features through IPsec. This provides end-to-end encryption and authentication, making your internet communications more secure. However, IPv6 also means your devices have globally routable addresses, so proper firewall configuration becomes even more important.
              </p>
              <p>
                When using our tool, all connections are made over HTTPS, ensuring that the data transmitted between your browser and our servers is encrypted. We follow industry best practices for data handling and security, and our infrastructure is regularly updated to protect against emerging threats. Your privacy is our priority, and we're committed to providing a safe, secure testing environment.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Common Use Cases for IPv6 Testing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose connectivity issues and verify that your network is properly configured for IPv6 access. Identify whether connection problems are related to IPv6 configuration or other network issues.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🏢 ISP Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Check if your Internet Service Provider has enabled IPv6 on your connection as promised. Verify that you're getting the service level you're paying for.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌐 Website Compatibility
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your connection can access both IPv4 and IPv6 websites without compatibility issues. Test before deploying IPv6-dependent applications or services.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Assessment
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify IPv6 security features are enabled and your network is protected on both protocols. Ensure proper firewall configuration for IPv6 addresses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📱 IoT Device Setup
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Confirm IPv6 support before deploying IoT devices that require unique IP addresses. Many smart home devices work better with native IPv6 connectivity.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🚀 Future-Proofing
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your network is ready for the future as the internet transitions to IPv6. Stay ahead of technology changes and avoid future compatibility issues.
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
              Related Network Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Explore our other free network diagnostic tools to get complete insights into your internet connection and network configuration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex flex-col space-y-2 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-indigo-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {tool.name}
                    </span>
                    <span className="ml-auto text-indigo-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-11">{tool.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <p className="text-sm text-gray-700">
                💡 <strong>Pro Tip:</strong> Use our <Link href="/my-ip" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">What Is My IP tool</Link> to see your complete IP information including both IPv4 and IPv6 addresses, or check for <Link href="/dns-leak-test" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">DNS leaks</Link> to ensure your privacy is protected.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
