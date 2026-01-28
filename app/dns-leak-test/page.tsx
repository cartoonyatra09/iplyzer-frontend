import type { Metadata } from "next";
import DNSLeakTestTool from "@/components/tools/DNSLeakTestTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DNS Leak Test - Check if Your VPN is Leaking DNS Requests",
  description: "Free DNS leak test to check if your VPN is properly protecting your DNS queries. Detect DNS leaks that could expose your browsing activity to your ISP.",
  keywords: [
    "dns leak test",
    "vpn leak test",
    "dns leak check",
    "vpn dns leak",
    "check dns leak",
    "dns privacy test",
    "vpn security test",
    "dns leak detection"
  ],
  openGraph: {
    title: "DNS Leak Test - Check if Your VPN is Leaking DNS Requests",
    description: "Free DNS leak test to protect your privacy.",
  },
};

export default function DNSLeakTestPage() {
  const faqs = [
    {
      question: "What is a DNS leak?",
      answer: "A DNS leak occurs when your DNS (Domain Name System) queries are sent to your Internet Service Provider's DNS servers instead of your VPN's DNS servers, even though you're connected to a VPN. This means your ISP can see which websites you're visiting, defeating one of the main purposes of using a VPN. DNS leaks happen due to misconfigured VPN settings, operating system DNS settings overriding VPN settings, or VPN software bugs. They're particularly concerning because they expose your browsing activity while you believe you're protected."
    },
    {
      question: "How does a DNS leak happen?",
      answer: "DNS leaks typically occur when your operating system bypasses the VPN tunnel for DNS queries. This can happen if your VPN doesn't properly configure DNS settings, if you have manually set DNS servers that override the VPN, if your VPN connection drops briefly and your system reverts to default DNS, or if your VPN software has bugs. Windows is particularly prone to DNS leaks due to how it handles multiple network interfaces. Some VPNs don't include DNS leak protection by default, requiring manual configuration."
    },
    {
      question: "Why should I care about DNS leaks?",
      answer: "DNS leaks are a serious privacy concern because they reveal your browsing history to your ISP even when using a VPN. Your ISP can see every website you visit, build a profile of your online activities, and potentially sell this data to advertisers or provide it to authorities. For users in countries with internet censorship, DNS leaks can expose attempts to access blocked content. For privacy-conscious users, DNS leaks undermine the entire purpose of using a VPN. Even if your actual traffic is encrypted, knowing which sites you visit reveals a lot about you."
    },
    {
      question: "How do I fix a DNS leak?",
      answer: "To fix DNS leaks: Enable DNS leak protection in your VPN client settings (most modern VPNs have this feature). Configure your system to use your VPN provider's DNS servers or privacy-focused DNS like Cloudflare (1.1.1.1) or Quad9 (9.9.9.9). On Windows, disable 'Smart Multi-Homed Name Resolution' which can cause leaks. Ensure your VPN has a kill switch enabled to prevent any traffic if the VPN disconnects. Test regularly using DNS leak test tools. Consider using VPN software that includes built-in DNS leak protection. Some users also manually configure firewall rules to block non-VPN DNS traffic."
    },
    {
      question: "Can I use this test without a VPN?",
      answer: "Yes, you can run this test without a VPN to see which DNS servers you're currently using. This helps you understand your baseline DNS configuration. Without a VPN, you'll typically see your ISP's DNS servers, which is normal and not a 'leak' - it's expected behavior. The test becomes meaningful when you're using a VPN: you should then see your VPN provider's DNS servers, not your ISP's. If you see your ISP's DNS servers while connected to a VPN, that indicates a DNS leak that needs to be fixed."
    }
  ];

  const relatedTools = [
    { name: "Proxy/VPN Check", href: "/proxy-check", icon: "🔒" },
    { name: "My IP Address", href: "/my-ip", icon: "🌐" },
    { name: "IPv6 Check", href: "/ipv6-check", icon: "🔄" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
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
                "name": "DNS Leak Test",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dns-leak-test`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="DNS Leak Test"
          description="Check if your VPN is leaking DNS requests to your ISP"
          breadcrumb="DNS Leak Test"
          gradientFrom="from-rose-600"
          gradientVia="via-red-600"
          gradientTo="to-orange-700"
        />

        {/* Tool UI */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DNSLeakTestTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is a DNS Leak?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                A DNS (Domain Name System) leak is a security vulnerability that occurs when your DNS queries are sent outside of your VPN tunnel, typically to your Internet Service Provider's DNS servers. Even though your internet traffic is encrypted and routed through a VPN, DNS leaks allow your ISP to see which websites you're visiting, undermining your privacy and the purpose of using a VPN.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                DNS is like the internet's phone book - it translates human-readable website names (like "google.com") into IP addresses that computers use. Every time you visit a website, your device makes a DNS query to look up the IP address. Normally, these queries should go through your VPN's DNS servers when you're connected to a VPN. However, due to various configuration issues, these queries might bypass the VPN and go directly to your ISP's DNS servers.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                DNS leaks are particularly insidious because they're invisible to users. Your VPN might show as connected, your IP address might be hidden, and your traffic might be encrypted - but your DNS queries are still revealing your browsing activity to your ISP. This is why DNS leak testing is crucial for anyone serious about online privacy, especially VPN users.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                The most common causes of DNS leaks include: misconfigured VPN software that doesn't properly route DNS queries, operating system settings that override VPN DNS configuration (especially common in Windows), brief VPN disconnections that cause your system to revert to default DNS servers, and IPv6 leaks where IPv6 DNS queries bypass the VPN even though IPv4 traffic is protected.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why DNS Leaks Matter
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                DNS leaks completely undermine your privacy efforts. While your VPN encrypts your traffic and hides your IP address, DNS leaks reveal your browsing history to your ISP. Your ISP can see every website you visit, when you visit it, and how often. This information is valuable for building detailed profiles of your online behavior, which can be sold to advertisers, provided to government agencies, or used for targeted advertising.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                For users in countries with internet censorship or surveillance, DNS leaks are particularly dangerous. Even though your actual traffic is encrypted, DNS queries reveal attempts to access blocked or monitored websites. This could lead to consequences ranging from blocked access to legal issues, depending on your location and what you're accessing.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Privacy-conscious users choose VPNs specifically to prevent ISPs from monitoring their online activities. DNS leaks defeat this purpose entirely. Your ISP might not see the content of your communications, but knowing which sites you visit reveals a tremendous amount about you - your interests, political views, health concerns, financial activities, and more. This metadata is often more valuable than the actual content.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                For businesses and remote workers, DNS leaks can expose corporate network activity and potentially reveal confidential information about business operations, partnerships, or strategies. Even if the actual data transmitted is encrypted, the pattern of which services and websites are accessed can provide competitive intelligence to adversaries.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔒 VPN Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify that your VPN is properly protecting your DNS queries and not leaking to your ISP.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🛡️ Privacy Protection
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your browsing activity remains private and isn't being monitored by your ISP.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  ⚙️ VPN Configuration
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Test VPN settings after configuration changes to ensure DNS leak protection is working.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🌍 Censorship Bypass
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify that your attempts to access blocked content aren't being exposed through DNS leaks.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  💼 Corporate Security
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure remote workers' VPN connections aren't leaking corporate network activity.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔍 Regular Monitoring
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Periodically test for DNS leaks as VPN software updates or system changes can introduce leaks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
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
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="text-xl sm:text-2xl">{tool.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">{tool.name}</span>
                  <span className="ml-auto text-rose-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
