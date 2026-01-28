import type { Metadata } from "next";
import SpeedTestTool from "@/components/tools/SpeedTestToolEnhanced";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speed Test - Check Internet Download & Upload Speed",
  description: "Free internet speed test. Measure download, upload, ping & jitter instantly. Accurate results powered by Cloudflare. Test your connection now.",
  keywords: [
    "speed test",
    "internet speed test",
    "bandwidth test",
    "download speed",
    "upload speed",
    "ping test",
    "connection speed",
    "network speed test"
  ],
  openGraph: {
    title: "Speed Test - Check Internet Download & Upload Speed",
    description: "Free internet speed test. Measure download, upload, ping & jitter instantly. Accurate results powered by Cloudflare. Test your connection now.",
  },
};

export default function SpeedTestPage() {
  const faqs = [
    {
      question: "What is an internet speed test?",
      answer: "An internet speed test measures the performance of your internet connection by testing how fast data can be downloaded to and uploaded from your device. It measures download speed (how fast you receive data), upload speed (how fast you send data), ping or latency (response time), and jitter (variation in ping). These metrics help you understand if you're getting the internet speeds you're paying for and diagnose connection issues."
    },
    {
      question: "What is a good internet speed?",
      answer: "A 'good' internet speed depends on your usage. For basic browsing and email, 5-10 Mbps download is sufficient. For HD video streaming, you need 25+ Mbps. For 4K streaming or multiple users, 50-100 Mbps is recommended. For gaming, upload speed and low ping (under 50ms) are more important than download speed. For video conferencing, you need at least 3-5 Mbps upload. For heavy usage like large file transfers or multiple 4K streams, 200+ Mbps is ideal."
    },
    {
      question: "Why is my internet speed slower than advertised?",
      answer: "Several factors affect your actual speed: WiFi distance and interference (wired connections are faster), network congestion during peak hours, router age and capabilities, background applications using bandwidth, ISP throttling or network issues, and the fact that advertised speeds are typically 'up to' maximums, not guarantees. Also, ISPs advertise speeds in Mbps (megabits) while downloads show MB/s (megabytes) - 1 MB/s equals 8 Mbps. Testing at different times and from different devices helps identify the issue."
    },
    {
      question: "What's the difference between download and upload speed?",
      answer: "Download speed measures how fast data comes to your device from the internet - this affects streaming, browsing, and downloading files. Upload speed measures how fast data goes from your device to the internet - this affects video calls, uploading files, cloud backups, and online gaming. Most internet plans have asymmetric speeds with faster download than upload because most users download more than they upload. However, with increased video conferencing and cloud usage, upload speed is becoming more important."
    },
    {
      question: "What is ping and why does it matter?",
      answer: "Ping (or latency) is the time it takes for data to travel from your device to a server and back, measured in milliseconds (ms). Lower ping is better. For general browsing, ping under 100ms is fine. For video calls, under 50ms is good. For online gaming, under 20ms is ideal. High ping causes lag in games and delays in video calls. Jitter (variation in ping) is also important - consistent ping is better than fluctuating ping, even if the average is low. High jitter causes choppy video and audio."
    },
    {
      question: "How accurate are internet speed tests?",
      answer: "Speed test accuracy depends on several factors. Our test uses Cloudflare's global network for reliable results, but accuracy can be affected by: other devices using your network during the test, background applications consuming bandwidth, WiFi interference (wired connections give more accurate results), server location and distance, and time of day (network congestion). For best accuracy, close other applications, test multiple times at different hours, use a wired connection if possible, and test from different devices to compare results."
    },
    {
      question: "Should I use WiFi or ethernet for speed testing?",
      answer: "For the most accurate speed test, use an ethernet (wired) connection directly to your router or modem. WiFi speeds are affected by distance from the router, walls and obstacles, interference from other devices, the WiFi standard your device supports (WiFi 5, WiFi 6), and the number of connected devices. Wired connections eliminate these variables and show your true internet speed. If you must use WiFi, test close to the router for best results. Comparing wired vs WiFi speeds helps identify if your router needs upgrading."
    }
  ];

  const relatedTools = [
    { name: "My IP Address", href: "/my-ip", icon: "🌐" },
    { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
    { name: "IPv6 Check", href: "/ipv6-check", icon: "🔄" },
    { name: "Proxy Check", href: "/proxy-check", icon: "🔒" },
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
            "name": "Internet Speed Test Tool",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free internet speed test tool to measure download speed, upload speed, ping, and jitter. Powered by Cloudflare's global network for accurate results.",
            "featureList": [
              "Download speed measurement",
              "Upload speed measurement",
              "Ping/latency testing",
              "Jitter measurement",
              "Powered by Cloudflare",
              "Instant results",
              "No registration required"
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
            "name": "Speed Test - Check Internet Download & Upload Speed",
            "description": "Free internet speed test. Measure download, upload, ping & jitter instantly. Accurate results powered by Cloudflare. Test your connection now.",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/speed-test`,
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Internet Speed Test Tool"
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
                "name": "Speed Test",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/speed-test`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection
          title="Internet Speed Test"
          description="Test your internet speed using Cloudflare's global network"
          breadcrumb="Speed Test"
          gradientFrom="from-lime-600"
          gradientVia="via-green-600"
          gradientTo="to-emerald-700"
        />

        {/* Tool UI */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpeedTestTool />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is an Internet Speed Test?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                An internet speed test is a diagnostic tool that measures the performance of your internet connection by testing how quickly data can be transferred between your device and a test server. The test provides four key metrics: download speed (how fast you receive data), upload speed (how fast you send data), ping or latency (response time), and jitter (consistency of your connection).
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Download speed is measured by downloading test files from a server and calculating how many megabits per second (Mbps) were transferred. This metric is crucial for activities like streaming videos, browsing websites, and downloading files. Most internet plans prioritize download speed because users typically download more data than they upload.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Upload speed is measured by sending data to a server and calculating the transfer rate. While often slower than download speed, upload speed is increasingly important for video conferencing, uploading files to cloud storage, live streaming, and online gaming. Many modern work-from-home scenarios require good upload speeds for video calls and file sharing.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Ping (latency) measures the round-trip time for data to travel from your device to a server and back, expressed in milliseconds (ms). Lower ping is better, especially for real-time applications like gaming, video calls, and VoIP. Jitter measures the variation in ping over time - consistent ping is important for smooth video and audio quality.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              How Does This Speed Test Work?
            </h3>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Our speed test is powered by Cloudflare's global network, which operates in over 300 cities worldwide. When you start the test, your device connects to the nearest Cloudflare server to minimize latency and provide accurate results. The test begins by measuring ping - sending small packets of data and measuring how long they take to return.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Next, the download test transfers data from the Cloudflare server to your device, gradually increasing the data size to saturate your connection and measure maximum throughput. The upload test works in reverse, sending data from your device to the server. Throughout the test, jitter is calculated by measuring variations in ping times. The entire process typically takes 20-30 seconds and provides comprehensive insights into your connection quality.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Understanding Your Results
            </h3>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Download speeds of 25+ Mbps are suitable for HD streaming, 50+ Mbps for multiple users or 4K streaming, and 100+ Mbps for heavy usage. Upload speeds of 3-5 Mbps work for video calls, 10+ Mbps for content creators, and 25+ Mbps for professional streaming. Ping under 50ms is good for most uses, under 20ms is excellent for gaming. Jitter should be under 30ms for stable connections. If your results are consistently below what you're paying for, contact your <Link href="/isp-lookup" className="text-lime-600 hover:text-lime-700 underline">ISP</Link> for support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Test Speed */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Test Your Internet Speed?
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Regular speed testing helps you verify that you're getting the internet speeds you're paying for. ISPs advertise "up to" speeds, but actual performance can vary based on network congestion, infrastructure, and other factors. If your speeds are consistently lower than advertised, you have grounds to contact your ISP for support or consider switching providers.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Speed tests help diagnose connection problems. If you're experiencing buffering during video streams, lag in online games, or slow file downloads, a speed test can identify whether the issue is with your internet connection or something else. Testing at different times of day can reveal if congestion during peak hours is affecting your service.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                When working from home, speed tests ensure your connection can handle video conferencing, VPN connections, and file transfers. Many employers have minimum speed requirements for remote work. Testing your connection helps you determine if you need to upgrade your plan or improve your home network setup.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Before making major decisions like cutting cable TV for streaming services, upgrading to 4K streaming, or setting up a home office, speed tests help you understand if your current connection can handle the increased demands. They also help you choose the right internet plan when moving to a new location or switching providers.
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
                  ✅ Verify ISP Performance
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Check if you're getting the speeds you're paying for and hold your ISP accountable.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🔧 Troubleshoot Issues
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Diagnose slow connections, buffering, and lag to identify the root cause of problems.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🏠 Optimize Home Network
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Test different locations and setups to find the best WiFi placement and configuration.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  💼 Remote Work Readiness
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ensure your connection meets requirements for video conferencing and VPN usage.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  🎮 Gaming Performance
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Check ping and jitter to ensure smooth online gaming without lag or disconnections.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  📺 Streaming Quality
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Verify your connection can handle HD or 4K streaming without buffering.
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
                  <span className="ml-auto text-lime-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
