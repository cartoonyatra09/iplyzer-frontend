import type { Metadata } from "next";
import ReverseDNSTool from "@/components/tools/ReverseDNSTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reverse DNS Lookup - Convert IP Address to Hostname",
  description: "Free reverse DNS lookup tool to convert IP addresses to hostnames using PTR records. Find the domain name associated with any IP address instantly.",
  keywords: [
    "reverse dns lookup",
    "ip to hostname",
    "ptr record lookup",
    "reverse dns",
    "hostname lookup",
    "dns reverse",
    "ip to domain",
    "reverse ip lookup"
  ],
  openGraph: {
    title: "Reverse DNS Lookup - Convert IP Address to Hostname",
    description: "Free reverse DNS lookup tool to convert IP addresses to hostnames.",
  },
};

export default function ReverseDNSPage() {
  const faqs = [
    {
      question: "What is reverse DNS lookup?",
      answer: "Reverse DNS lookup is the process of converting an IP address back to its associated hostname or domain name. Unlike regular DNS (which converts domain names to IP addresses), reverse DNS does the opposite—it takes an IP address and finds the domain name registered to it. This is accomplished through PTR (Pointer) records in the DNS system, which map IP addresses to hostnames."
    },
    {
      question: "How does reverse DNS work?",
      answer: "Reverse DNS works through PTR records stored in special DNS zones. When you perform a reverse lookup, the DNS system queries these PTR records to find the hostname associated with an IP address. For IPv4, this uses the in-addr.arpa domain, and for IPv6, it uses ip6.arpa. The IP address owner must configure these PTR records for reverse DNS to work—they're not automatically created."
    },
    {
      question: "Why would I need reverse DNS lookup?",
      answer: "Reverse DNS is useful for several purposes: verifying email servers (many mail servers require valid reverse DNS to prevent spam), troubleshooting network issues, identifying the owner or purpose of an IP address, security investigations, server configuration verification, and understanding network infrastructure. It's particularly important for email delivery, as many spam filters check reverse DNS records."
    },
    {
      question: "Why doesn't my IP have a reverse DNS record?",
      answer: "Not all IP addresses have reverse DNS records. This is common for residential internet connections, dynamic IP addresses, newly allocated IPs, or when the IP owner hasn't configured PTR records. Setting up reverse DNS requires control over the IP address block and proper DNS configuration. Many ISPs don't configure reverse DNS for residential customers, and it's not required for most internet activities (except email servers)."
    },
    {
      question: "What's the difference between DNS and reverse DNS?",
      answer: "Regular DNS (forward DNS) converts human-readable domain names into IP addresses—like translating 'google.com' to '142.250.185.46'. Reverse DNS does the opposite: it converts IP addresses back into domain names. Forward DNS uses A records (for IPv4) and AAAA records (for IPv6), while reverse DNS uses PTR records. Both are part of the DNS system but serve different purposes and use different record types."
    }
  ];

  const relatedTools = [
    { name: "Hostname to IP", href: "/hostname-to-ip", icon: "🌍" },
    { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "My IP Address", href: "/my-ip", icon: "🌐" },
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
                "name": "Reverse DNS",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/reverse-dns`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="Reverse DNS Lookup"
          description="Convert IP addresses to hostnames using PTR records"
          breadcrumb="Reverse DNS"
          gradientFrom="from-pink-600"
          gradientVia="via-purple-600"
          gradientTo="to-indigo-700"
        />

        {/* Tool UI */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <ReverseDNSTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is Reverse DNS Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Reverse DNS lookup is a DNS query that converts an IP address into its associated hostname or domain name. While regular DNS (forward DNS) translates human-readable domain names like "google.com" into IP addresses that computers use, reverse DNS does the opposite—it takes an IP address and returns the domain name registered to it.
              </p>
              <p>
                This process relies on PTR (Pointer) records in the DNS system. PTR records are special DNS entries that map IP addresses to hostnames. For IPv4 addresses, these records are stored in the in-addr.arpa domain, and for IPv6 addresses, they're stored in the ip6.arpa domain. When you perform a reverse DNS lookup, the DNS system queries these special zones to find the hostname associated with the IP address.
              </p>
              <p>
                Reverse DNS is particularly important for email servers. Many email systems check reverse DNS records as part of their spam prevention measures. If an email server's IP address doesn't have a valid reverse DNS record that matches its hostname, the email may be rejected or marked as spam. This makes reverse DNS configuration essential for anyone running a mail server.
              </p>
              <p>
                Not all IP addresses have reverse DNS records. Setting up reverse DNS requires control over the IP address block and proper DNS configuration. Many residential ISPs don't configure reverse DNS for customer connections, and it's not required for most internet activities. However, for servers, especially email servers, having proper reverse DNS is considered a best practice.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use Reverse DNS */}
        <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Use Reverse DNS Lookup?
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p>
                Email administrators rely heavily on reverse DNS for troubleshooting delivery issues. When emails are being rejected or marked as spam, checking the reverse DNS of the sending server is often the first diagnostic step. Proper reverse DNS configuration is a fundamental requirement for reliable email delivery, and many major email providers won't accept mail from servers without valid reverse DNS records.
              </p>
              <p>
                Network administrators and security professionals use reverse DNS to identify and investigate IP addresses. When analyzing server logs, firewall logs, or security incidents, reverse DNS helps quickly identify the source of traffic. Seeing a hostname like "crawler.google.com" is much more informative than just seeing an IP address, making log analysis and troubleshooting significantly easier.
              </p>
              <p>
                System administrators use reverse DNS to verify server configurations and ensure their infrastructure is properly set up. Before launching a new server, especially an email server, checking that reverse DNS is correctly configured prevents future delivery problems. It's also useful for verifying that DNS changes have propagated correctly across the internet.
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
                  📧 Email Server Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify that email servers have proper reverse DNS configured to ensure reliable email delivery.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔍 Network Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Identify the source of network traffic and diagnose connectivity issues by resolving IP addresses.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 Security Investigation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Investigate suspicious IP addresses in logs to identify potential security threats or attackers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📊 Log Analysis
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Make server logs more readable by converting IP addresses to meaningful hostnames.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ⚙️ Server Configuration
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify that new servers have correct reverse DNS setup before going into production.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌐 Infrastructure Mapping
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Understand network infrastructure by identifying servers and services through their hostnames.
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
                  <span className="ml-auto text-pink-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
