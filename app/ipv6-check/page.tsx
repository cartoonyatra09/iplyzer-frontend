import type { Metadata } from "next";
import IPv6CheckTool from "@/components/tools/IPv6CheckTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPv6 Connectivity Test - Check if You Have IPv6 Support",
  description: "Free IPv6 connectivity test to check if your internet connection and browser support IPv6. Instant results showing your IP version and network capabilities.",
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
    title: "IPv6 Connectivity Test - Check if You Have IPv6 Support",
    description: "Free IPv6 connectivity test to check your network support.",
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
    }
  ];

  const relatedTools = [
    { name: "My IP Address", href: "/my-ip", icon: "🌐" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "Reverse DNS", href: "/reverse-dns", icon: "🔍" },
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
          title="IPv6 Connectivity Test"
          description="Check if your internet connection supports IPv6 protocol"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is IPv6 Connectivity Test?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                An IPv6 connectivity test checks whether your internet connection uses IPv6 (Internet Protocol version 6), the newest version of the protocol that powers the internet. When you visit this page, our tool automatically detects which IP protocol version your device is using to connect to our servers.
              </p>
              <p>
                The test works by examining your IP address format. IPv6 addresses are longer and use hexadecimal notation with colons (like 2001:0db8:85a3::8a2e:0370:7334), while IPv4 addresses use decimal numbers with dots (like 192.168.1.1). The tool also checks your browser's IPv6 support capabilities and provides detailed information about your connection type.
              </p>
              <p>
                Understanding your IPv6 status is important because the internet is gradually transitioning from IPv4 to IPv6. IPv4 addresses are exhausted, and IPv6 provides the address space needed for billions of new devices connecting to the internet. Many modern ISPs now offer IPv6 connectivity, and most websites support both protocols for maximum compatibility.
              </p>
            </div>
          </div>
        </section>

        {/* Why Check IPv6 */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Check Your IPv6 Connectivity?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Knowing whether you have IPv6 connectivity helps you understand your network capabilities and troubleshoot potential issues. If you're experiencing problems accessing certain websites or services, it might be related to IPv6 configuration. Some services are IPv6-only, while others work better with IPv6 enabled.
              </p>
              <p>
                For network administrators and IT professionals, IPv6 testing is essential for ensuring proper network configuration and planning infrastructure upgrades. As more organizations adopt IPv6, verifying connectivity becomes crucial for maintaining seamless communication with partners, customers, and cloud services.
              </p>
              <p>
                Home users benefit from IPv6 through improved performance, better security features, and future-proofing their network setup. While IPv4 continues to work, having IPv6 ensures you're ready for the next generation of internet services and IoT devices that increasingly rely on IPv6 addressing.
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
                  🔧 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose connectivity issues and verify that your network is properly configured for IPv6 access.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🏢 ISP Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Check if your Internet Service Provider has enabled IPv6 on your connection as promised.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌐 Website Compatibility
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your connection can access both IPv4 and IPv6 websites without compatibility issues.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Assessment
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify IPv6 security features are enabled and your network is protected on both protocols.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📱 IoT Device Setup
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Confirm IPv6 support before deploying IoT devices that require unique IP addresses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🚀 Future-Proofing
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your network is ready for the future as the internet transitions to IPv6.
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
                  <span className="ml-auto text-indigo-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
