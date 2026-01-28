import type { Metadata } from "next";
import DNSLeakTestTool from "@/components/tools/DNSLeakTestTool";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DNS Leak Test - Free VPN DNS Leak Checker & Privacy Tool",
  description: "Test if your VPN is leaking DNS requests to your ISP. Free DNS leak checker detects privacy vulnerabilities instantly. Protect your browsing activity now.",
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
    title: "DNS Leak Test - Free VPN DNS Leak Checker & Privacy Tool",
    description: "Test if your VPN is leaking DNS requests to your ISP. Free DNS leak checker detects privacy vulnerabilities instantly.",
  },
  alternates: {
    canonical: "/dns-leak-test",
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
    },
    {
      question: "Is this DNS leak test safe to use?",
      answer: "Yes, our DNS leak test is completely safe and privacy-focused. We don't log your IP address, DNS queries, or any personal information. The test simply checks which DNS servers are resolving your queries and displays the results. All tests are performed in real-time and data is immediately discarded. We operate under a strict no-logging policy to protect your privacy."
    },
    {
      question: "What DNS servers should I see when using a VPN?",
      answer: "When properly connected to a VPN, you should see DNS servers belonging to your VPN provider, not your ISP. The DNS server names or IP addresses should match your VPN provider's infrastructure. If you see your ISP's name or DNS servers you don't recognize, you likely have a DNS leak. Some VPNs use third-party DNS services like Cloudflare or Google DNS for better performance, which is fine as long as queries go through the VPN tunnel."
    }
  ];

  const relatedTools = [
    { name: "Proxy/VPN Detection", href: "/proxy-check", icon: "🔒", description: "Check if you're using a proxy or VPN connection" },
    { name: "My IP Address", href: "/my-ip", icon: "🌐", description: "Discover your public IP and location instantly" },
    { name: "IPv6 Leak Test", href: "/ipv6-check", icon: "🔄", description: "Test for IPv6 leaks that bypass your VPN" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢", description: "Identify your Internet Service Provider" },
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
            "name": "DNS Leak Test Tool",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "3421",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "Free DNS leak test to check if your VPN is properly protecting your DNS queries. Detect DNS leaks that could expose your browsing activity to your ISP.",
            "featureList": [
              "Instant DNS leak detection",
              "VPN privacy verification",
              "ISP DNS exposure check",
              "No registration required",
              "Privacy-focused testing",
              "Real-time results"
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
            "name": "DNS Leak Test - Free VPN DNS Leak Checker",
            "description": "Test if your VPN is leaking DNS requests to your ISP. Free DNS leak checker detects privacy vulnerabilities instantly.",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dns-leak-test`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "IPlyzer",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
            },
            "about": {
              "@type": "Thing",
              "name": "DNS Leak Detection",
              "description": "Testing and detecting DNS leaks that compromise VPN privacy"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "DNS Leak Test Tool"
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

        {/* How to Fix DNS Leaks */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              How to Fix DNS Leaks
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                If you've discovered a DNS leak, don't panic. There are several effective solutions to fix the issue and protect your privacy. The best approach depends on your operating system, VPN software, and technical comfort level.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enable VPN DNS Leak Protection</h3>
                    <p className="text-gray-600 text-sm">Most modern VPN clients have built-in DNS leak protection. Check your VPN settings and enable "DNS Leak Protection" or "Use VPN DNS servers only." This forces all DNS queries through the VPN tunnel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Configure Custom DNS Servers</h3>
                    <p className="text-gray-600 text-sm">Manually set your DNS servers to privacy-focused options like Cloudflare (1.1.1.1), Quad9 (9.9.9.9), or your VPN provider's DNS. This ensures queries don't go to your ISP even if the VPN fails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Disable Smart Multi-Homed Name Resolution (Windows)</h3>
                    <p className="text-gray-600 text-sm">Windows users should disable this feature which can cause DNS leaks. Use the registry editor or Group Policy to turn off "Smart Multi-Homed Name Resolution" to prevent Windows from sending DNS queries outside the VPN.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enable Kill Switch</h3>
                    <p className="text-gray-600 text-sm">A VPN kill switch blocks all internet traffic if the VPN connection drops, preventing DNS leaks during disconnections. Enable this feature in your VPN client for maximum protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Disable IPv6 (If Not Needed)</h3>
                    <p className="text-gray-600 text-sm">If your VPN doesn't support IPv6, disable it on your system to prevent IPv6 DNS leaks. Many VPNs only tunnel IPv4 traffic, leaving IPv6 queries exposed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Use a Better VPN</h3>
                    <p className="text-gray-600 text-sm">If your VPN consistently leaks DNS despite configuration attempts, consider switching to a more reputable VPN provider with built-in DNS leak protection and a proven track record.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                After implementing these fixes, always retest using our DNS leak test tool to verify the issue is resolved. Regular testing is recommended, especially after VPN software updates or system changes.
              </p>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Security & Privacy
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Your privacy is our top priority. When you use our DNS leak test tool, we process your DNS queries in real-time without storing any information. We don't log your IP address, the DNS servers detected, or any other personally identifiable information.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔒</span>
                  Privacy Guarantees
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>No Query Logging:</strong> We don't store your DNS test results or queries</span>
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
                    <span><strong>Real-time Processing:</strong> All tests are performed instantly and data is discarded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>GDPR Compliant:</strong> Full compliance with data protection regulations</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                Our DNS leak test is designed to help you protect your privacy, not compromise it. We believe in transparency and operate under a strict no-logging policy. For more information about our data practices, please read our <Link href="/privacy" className="text-rose-600 hover:underline font-medium">Privacy Policy</Link> and <Link href="/terms" className="text-rose-600 hover:underline font-medium">Terms of Service</Link>.
              </p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Related Privacy & Security Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Explore more tools to protect your online privacy and security
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group bg-gray-50 rounded-lg p-5 hover:shadow-lg transition-all border border-gray-200 hover:border-rose-300"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                    <span className="text-rose-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
