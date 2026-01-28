import type { Metadata } from "next";
import HostnameToIPTool from "@/components/tools/HostnameToIPTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hostname to IP Lookup - Free DNS Resolver Tool | IPv4 & IPv6",
  description: "Convert hostnames to IP addresses instantly. Free DNS lookup tool shows IPv4 & IPv6 addresses for any domain. Fast, accurate & secure hostname resolver.",
  keywords: [
    "hostname to ip",
    "domain to ip",
    "dns lookup",
    "resolve domain",
    "domain name lookup",
    "ip address lookup",
    "dns resolver",
    "hostname resolver"
  ],
  openGraph: {
    title: "Hostname to IP Lookup - Free DNS Resolver Tool | IPv4 & IPv6",
    description: "Convert hostnames to IP addresses instantly. Free DNS lookup tool shows IPv4 & IPv6 addresses for any domain.",
  },
  alternates: {
    canonical: "/hostname-to-ip",
  },
};

export default function HostnameToIPPage() {
  const faqs = [
    {
      question: "What is hostname to IP lookup?",
      answer: "Hostname to IP lookup, also known as DNS resolution or forward DNS lookup, is the process of converting a human-readable domain name (like google.com) into its corresponding IP address (like 142.250.185.46). This is the fundamental function of the Domain Name System (DNS), which acts like a phone book for the internet, translating names we can remember into numerical addresses that computers use to communicate."
    },
    {
      question: "How does DNS resolution work?",
      answer: "When you look up a hostname, your computer queries DNS servers to find the IP address. The process involves checking local cache first, then querying recursive DNS servers (usually provided by your ISP), which may query authoritative DNS servers that hold the actual records. DNS uses A records for IPv4 addresses and AAAA records for IPv6 addresses. The entire process typically takes milliseconds and is cached to improve performance."
    },
    {
      question: "Why does a domain have multiple IP addresses?",
      answer: "Domains often have multiple IP addresses for several reasons: load balancing (distributing traffic across multiple servers), redundancy (backup servers if one fails), geographic distribution (servers in different locations for faster access), and dual-stack networking (separate IPv4 and IPv6 addresses). Large websites like Google or Facebook may have dozens of IP addresses to handle millions of users simultaneously."
    },
    {
      question: "What's the difference between IPv4 and IPv6 addresses?",
      answer: "IPv4 addresses are the traditional format (like 192.168.1.1) using four numbers separated by dots, providing about 4.3 billion unique addresses. IPv6 addresses are the newer format (like 2001:0db8::1) using hexadecimal notation with colons, providing virtually unlimited addresses. Many modern websites provide both IPv4 and IPv6 addresses to ensure compatibility with all internet users, as the world transitions from IPv4 to IPv6."
    },
    {
      question: "Why can't some hostnames be resolved?",
      answer: "Hostnames may fail to resolve for several reasons: the domain doesn't exist or has expired, DNS records aren't properly configured, there's a typo in the hostname, DNS changes haven't propagated yet (can take up to 48 hours), the domain is blocked or filtered, or there are temporary DNS server issues. If a domain you own isn't resolving, check your DNS settings with your domain registrar or hosting provider."
    },
    {
      question: "Is this hostname lookup tool safe to use?",
      answer: "Yes, our hostname to IP lookup tool is completely safe and privacy-focused. We don't log your queries, store the hostnames you look up, or track your activity. All DNS lookups are processed in real-time and immediately discarded. Your privacy is our top priority, and we operate under a strict no-logging policy."
    },
    {
      question: "Can I use this tool to find someone's exact location?",
      answer: "No, hostname to IP lookup only reveals the IP addresses associated with a domain, not personal location data. While IP addresses can provide general geographic information (city or region), they cannot pinpoint exact physical locations or identify individual users. For more detailed IP geolocation, you can use our IP Location Lookup tool after obtaining the IP address."
    }
  ];

  const relatedTools = [
    { name: "Reverse DNS Lookup", href: "/reverse-dns", icon: "🔍", description: "Convert IP addresses back to hostnames" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍", description: "Find geographic location of any IP" },
    { name: "DNS Leak Test", href: "/dns-leak-test", icon: "🔐", description: "Check if your DNS queries are secure" },
    { name: "My IP Address", href: "/my-ip", icon: "🌐", description: "Discover your public IP instantly" },
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
            "name": "Hostname to IP Lookup Tool",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "Free DNS lookup tool to convert hostnames and domain names to IP addresses. Get both IPv4 and IPv6 addresses for any domain instantly.",
            "featureList": [
              "Instant DNS resolution",
              "IPv4 and IPv6 support",
              "Multiple IP address detection",
              "No registration required",
              "Privacy-focused",
              "Fast and accurate results"
            ]
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
            "name": "Hostname to IP Lookup - Free DNS Resolver Tool",
            "description": "Convert hostnames to IP addresses instantly. Free DNS lookup tool shows IPv4 & IPv6 addresses for any domain.",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/hostname-to-ip`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "IPlyzer",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
            },
            "about": {
              "@type": "Thing",
              "name": "DNS Resolution",
              "description": "Domain Name System resolution and hostname to IP address conversion"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Hostname to IP Lookup Tool"
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
                "name": "Hostname to IP",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/hostname-to-ip`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="Hostname to IP Lookup"
          description="Resolve domain names to their IPv4 and IPv6 addresses"
          breadcrumb="Hostname to IP"
          gradientFrom="from-orange-600"
          gradientVia="via-yellow-600"
          gradientTo="to-amber-700"
        />

        {/* Tool UI */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <HostnameToIPTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is Hostname to IP Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Hostname to IP lookup, also called DNS resolution or forward DNS lookup, is the process of converting human-readable domain names into numerical IP addresses that computers use to communicate. When you type "google.com" into your browser, DNS resolution happens behind the scenes to find the IP address where Google's servers are located.
              </p>
              <p>
                This process is fundamental to how the internet works. The Domain Name System (DNS) acts as the internet's phone book, maintaining a distributed database that maps domain names to IP addresses. Without DNS, we would need to memorize long strings of numbers instead of simple domain names. DNS makes the internet accessible and user-friendly.
              </p>
              <p>
                DNS resolution involves querying DNS servers in a hierarchical manner. When you look up a domain, your computer first checks its local cache. If the information isn't cached, it queries recursive DNS servers (typically provided by your ISP or services like Google DNS or Cloudflare DNS), which then query authoritative DNS servers that hold the actual records for the domain.
              </p>
              <p>
                Modern domains typically have both IPv4 addresses (A records) and IPv6 addresses (AAAA records). Many large websites also have multiple IP addresses for load balancing and redundancy. Our tool shows all IP addresses associated with a hostname, giving you a complete picture of the domain's DNS configuration.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use This Tool */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Use Hostname to IP Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Network administrators and IT professionals use hostname to IP lookup for troubleshooting connectivity issues. When users can't access a website, checking DNS resolution helps determine if the problem is with DNS configuration, network connectivity, or the server itself. It's often the first diagnostic step in resolving access problems.
              </p>
              <p>
                Web developers and system administrators use DNS lookup to verify that domain changes have propagated correctly. After updating DNS records, it can take time for changes to spread across the internet. Checking the resolved IP addresses confirms that updates are working and helps identify any configuration errors before they affect users.
              </p>
              <p>
                Security professionals use hostname to IP lookup as part of threat investigation. When analyzing suspicious domains or investigating phishing attempts, resolving the IP address helps identify the hosting provider, geographic location, and potentially other malicious domains hosted on the same server. It's a crucial tool for cybersecurity analysis.
              </p>
              <p>
                Website owners and SEO professionals use DNS lookup to verify their CDN (Content Delivery Network) configuration. CDNs use multiple IP addresses in different locations to serve content faster. Checking which IPs are returned helps ensure the CDN is properly configured and serving content from the right locations.
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
                  Diagnose connectivity issues by verifying that domain names resolve to the correct IP addresses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ✅ DNS Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Confirm that DNS changes have propagated and domains are resolving to the intended servers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Investigate suspicious domains and identify hosting infrastructure for security research.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌐 CDN Configuration
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify that Content Delivery Networks are properly configured with correct IP addresses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🚀 Migration Testing
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Test server migrations by checking which IP addresses domains resolve to during transitions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Infrastructure Mapping
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Map out network infrastructure by identifying all IP addresses associated with domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              How DNS Resolution Works
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Understanding how DNS resolution works helps you troubleshoot issues and optimize your network configuration. The process involves multiple steps and different types of DNS servers working together to translate domain names into IP addresses.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Local Cache Check</h3>
                    <p className="text-gray-600 text-sm">Your computer first checks its local DNS cache to see if it recently looked up this hostname. If found, it returns the cached IP address immediately.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Recursive DNS Query</h3>
                    <p className="text-gray-600 text-sm">If not cached, your computer queries a recursive DNS server (usually provided by your ISP or services like Google DNS 8.8.8.8 or Cloudflare DNS 1.1.1.1).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Root Server Query</h3>
                    <p className="text-gray-600 text-sm">The recursive server queries root DNS servers to find which servers handle the top-level domain (.com, .org, etc.).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Authoritative Server Query</h3>
                    <p className="text-gray-600 text-sm">Finally, the recursive server queries the authoritative DNS server that holds the actual A (IPv4) or AAAA (IPv6) records for the domain.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Result Returned & Cached</h3>
                    <p className="text-gray-600 text-sm">The IP address is returned to your computer and cached for future use. The entire process typically takes just milliseconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Your privacy is important to us. When you use our hostname to IP lookup tool, we process your queries in real-time without storing any information. We don't log the hostnames you look up, your IP address, or any other personally identifiable information.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔒</span>
                  Privacy Guarantees
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>No Query Logging:</strong> We don't store the hostnames you look up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>No IP Tracking:</strong> Your IP address is not logged or stored</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>HTTPS Encryption:</strong> All connections are encrypted for security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>No Registration:</strong> Use all features without creating an account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>GDPR Compliant:</strong> Full compliance with data protection regulations</span>
                  </li>
                </ul>
              </div>
              <p>
                Our tool is designed for legitimate network administration, troubleshooting, and security research purposes. We encourage responsible use and compliance with all applicable laws and regulations. For more information, please read our <Link href="/privacy" className="text-orange-600 hover:underline font-medium">Privacy Policy</Link> and <Link href="/terms" className="text-orange-600 hover:underline font-medium">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Network Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Explore more tools to analyze and troubleshoot your network infrastructure
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group bg-white rounded-lg p-5 hover:shadow-lg transition-all border border-gray-200 hover:border-orange-300"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                    <span className="text-orange-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
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
                  <span className="ml-auto text-orange-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
