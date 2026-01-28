import type { Metadata } from "next";
import Link from "next/link";
import IPPreview from "@/components/IPPreview";

export const metadata: Metadata = {
  title: "What Is My IP Address? - Free IP Lookup & Network Tools",
  description: "Instantly discover your IP address, location, ISP, and more. Free IP lookup tools including VPN detection, DNS lookup, email trace, and speed test. Fast, accurate, and privacy-focused.",
  openGraph: {
    title: "What Is My IP Address? - Free IP Lookup & Network Tools",
    description: "Instantly discover your IP address, location, ISP, and more. Free IP lookup tools.",
  },
};

export default function HomePage() {
  const toolCategories = [
    {
      category: "IP Analysis",
      icon: "🌐",
      description: "Comprehensive IP address analysis and lookup tools",
      tools: [
        {
          name: "My IP Address",
          description: "Instantly see your public IP address, location, and ISP information",
          href: "/my-ip",
          icon: "🌐",
          color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
        },
        {
          name: "IP Location Lookup",
          description: "Find the geographic location of any IP address worldwide",
          href: "/ip-location",
          icon: "📍",
          color: "bg-green-50 hover:bg-green-100 border-green-200"
        },
        {
          name: "ISP Lookup",
          description: "Identify the Internet Service Provider for any IP address",
          href: "/isp-lookup",
          icon: "🏢",
          color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
        },
        {
          name: "ASN Lookup",
          description: "Look up Autonomous System Numbers and network information",
          href: "/asn-lookup",
          icon: "🔢",
          color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200"
        },
        {
          name: "IPv6 Check",
          description: "Check if you have IPv6 connectivity and see your IPv6 address",
          href: "/ipv6-check",
          icon: "🔄",
          color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200"
        },
        {
          name: "Proxy/VPN Check",
          description: "Detect if an IP is using a proxy, VPN, or Tor connection",
          href: "/proxy-check",
          icon: "🔒",
          color: "bg-red-50 hover:bg-red-100 border-red-200"
        },
      ]
    },
    {
      category: "DNS Tools",
      icon: "🔍",
      description: "Domain Name System lookup and diagnostic tools",
      tools: [
        {
          name: "Reverse DNS",
          description: "Convert IP addresses to hostnames using reverse DNS lookup",
          href: "/reverse-dns",
          icon: "🔍",
          color: "bg-pink-50 hover:bg-pink-100 border-pink-200"
        },
        {
          name: "Hostname to IP",
          description: "Resolve domain names to their IP addresses",
          href: "/hostname-to-ip",
          icon: "🌍",
          color: "bg-orange-50 hover:bg-orange-100 border-orange-200"
        },
        {
          name: "DNS Leak Test",
          description: "Check if your VPN is leaking DNS requests",
          href: "/dns-leak-test",
          icon: "🛡️",
          color: "bg-rose-50 hover:bg-rose-100 border-rose-200"
        },
      ]
    },
    {
      category: "Network Tools",
      icon: "⚡",
      description: "Network diagnostics and performance testing tools",
      tools: [
        {
          name: "Hosting Check",
          description: "Identify if an IP belongs to a datacenter or cloud provider",
          href: "/hosting-check",
          icon: "☁️",
          color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200"
        },
        {
          name: "Email Trace",
          description: "Trace email sender location by analyzing email headers",
          href: "/email-trace",
          icon: "📧",
          color: "bg-teal-50 hover:bg-teal-100 border-teal-200"
        },
        {
          name: "Speed Test",
          description: "Test your internet connection speed, ping, and latency",
          href: "/speed-test",
          icon: "⚡",
          color: "bg-lime-50 hover:bg-lime-100 border-lime-200"
        },
      ]
    }
  ];

  const features = [
    {
      title: "100% Accurate",
      description: "Real-time data from multiple trusted sources for maximum accuracy",
      icon: "✓"
    },
    {
      title: "Privacy First",
      description: "No data storage, no tracking. Your privacy is our priority",
      icon: "🔒"
    },
    {
      title: "Always Free",
      description: "All tools are completely free with no hidden costs or limits",
      icon: "💯"
    },
    {
      title: "Lightning Fast",
      description: "Optimized infrastructure for instant results every time",
      icon: "⚡"
    }
  ];

  const faqs = [
    {
      question: "What is an IP address?",
      answer: "An IP (Internet Protocol) address is a unique numerical label assigned to every device connected to the internet. It serves two main purposes: identifying the host or network interface and providing the location of the device in the network. IP addresses come in two versions: IPv4 (e.g., 192.168.1.1) and IPv6 (e.g., 2001:0db8::1)."
    },
    {
      question: "How do I find my IP address?",
      answer: "The easiest way to find your IP address is to visit our 'My IP Address' tool at the top of this page. It will instantly display your public IP address along with your location, ISP, and other network information. You can also check your local IP address in your device's network settings."
    },
    {
      question: "What's the difference between IPv4 and IPv6?",
      answer: "IPv4 uses 32-bit addresses (about 4.3 billion unique addresses) in the format xxx.xxx.xxx.xxx, while IPv6 uses 128-bit addresses (virtually unlimited addresses) in hexadecimal format. IPv6 was created to solve the IPv4 address exhaustion problem and offers improved security and performance features."
    },
    {
      question: "Can someone track me with my IP address?",
      answer: "Your IP address can reveal your approximate geographic location (city/region) and your Internet Service Provider, but it cannot pinpoint your exact physical address or identify you personally. However, ISPs and law enforcement can link IP addresses to specific users when necessary."
    },
    {
      question: "Why does my IP address change?",
      answer: "Most home internet connections use dynamic IP addresses, which means your ISP assigns you a different IP address periodically or when you restart your router. This is normal and helps ISPs manage their IP address pool efficiently. Businesses often use static IP addresses that don't change."
    },
    {
      question: "Is it safe to share my IP address?",
      answer: "Generally, yes. Your IP address is visible to every website you visit and is necessary for internet communication. However, avoid sharing it unnecessarily on public forums or with untrusted parties, as it could be used for targeted attacks or to gather information about your location and ISP."
    }
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-3 sm:mb-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1.5 sm:mb-2 leading-tight px-2">
              What Is My <span className="text-yellow-300">IP Address</span>?
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-2xl mx-auto px-4">
              Instantly discover your IP address, location, ISP, and network information
            </p>
          </div>

          {/* Instant IP Preview */}
          <IPPreview />
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">⚡ Powerful Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">
              Free IP & Network Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive suite of tools to analyze, lookup, and troubleshoot IP addresses and network connections
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {toolCategories.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">{category.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {category.tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 hover:border-blue-400 overflow-hidden active:scale-95"
                    >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl sm:text-3xl">{tool.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                              {tool.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Arrow Icon */}
                        <div className="mt-3 sm:mt-4 flex items-center text-blue-600 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Try it now</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm">
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">✨ Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">
              Why Choose IPlyzer?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Trusted by millions for accurate IP information and network analysis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 active:scale-95">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl sm:text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">❓ FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Everything you need to know about IP addresses
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg active:scale-[0.99]">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5">
                    Q
                  </span>
                  <span className="flex-1">{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed ml-9 sm:ml-11">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4">
            Ready to Explore Your Network?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Start using our free tools to analyze your IP address and network connection in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <Link
              href="/my-ip"
              className="group inline-flex items-center justify-center bg-white text-blue-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <span>Check My IP Now</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#tools"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 active:scale-95 text-sm sm:text-base"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
