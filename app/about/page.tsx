import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About IPlyzer - Free IP Address Lookup & Network Tools",
  description: "Learn about IPlyzer, your trusted source for free IP address lookup, geolocation, VPN detection, and network analysis tools. Privacy-focused and always free.",
  keywords: [
    "about iplyzer",
    "ip tools",
    "network tools",
    "ip lookup service",
    "free ip tools"
  ],
  openGraph: {
    title: "About IPlyzer - Free IP Address Lookup & Network Tools",
    description: "Learn about IPlyzer and our mission to provide free, accurate IP tools.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: "🎯",
      title: "Accurate Data",
      description: "Real-time data from multiple trusted sources including MaxMind, IP2Location, and Regional Internet Registries for maximum accuracy."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "We don't store your queries, track your activity, or sell your data. Your privacy is our top priority."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized infrastructure and CDN delivery ensure instant results every time you use our tools."
    },
    {
      icon: "💯",
      title: "Always Free",
      description: "All our tools are completely free with no hidden costs, registration requirements, or usage limits."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Comprehensive IP database covering all countries and regions worldwide with regular updates."
    },
    {
      icon: "🛠️",
      title: "Developer Friendly",
      description: "Clean, modern interface built with the latest web technologies for the best user experience."
    }
  ];

  const tools = [
    { name: "IP Address Lookup", count: "Millions of queries daily" },
    { name: "Geolocation Services", count: "200+ countries covered" },
    { name: "VPN/Proxy Detection", count: "99% accuracy rate" },
    { name: "DNS Tools", count: "Real-time resolution" },
    { name: "Network Analysis", count: "Comprehensive data" },
    { name: "Email Tracing", count: "Privacy-focused" }
  ];

  return (
    <>
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
                "name": "About",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/about`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 sm:py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-semibold">About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">IPlyzer</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted source for free, accurate, and privacy-focused IP address lookup and network analysis tools
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                At IPlyzer, we believe that powerful network tools should be accessible to everyone. Our mission is to provide free, accurate, and easy-to-use IP address lookup and network analysis tools while respecting your privacy.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Founded with the vision of democratizing network information, IPlyzer has grown to serve millions of users worldwide. Whether you're a network administrator troubleshooting connectivity issues, a security professional investigating threats, or simply curious about your own IP address, we provide the tools you need.
              </p>
              <p>
                We understand that privacy matters. Unlike many other services, we don't track your queries, store your data, or require registration. Every tool on our platform is designed with privacy in mind, ensuring that your information remains yours alone.
              </p>
              <p>
                Our commitment to accuracy means we continuously update our databases and use multiple trusted sources to provide the most reliable information possible. We invest in infrastructure and technology to ensure our tools are fast, reliable, and always available when you need them.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose IPlyzer?
              </h2>
              <p className="text-lg text-gray-600">
                Built with modern technology and user experience in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Overview */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Tools & Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive suite of network analysis tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.count}</p>
                  </div>
                  <div className="text-3xl">✓</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-lg text-gray-600">
                Leveraging the latest web technologies for optimal performance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-2">⚛️</div>
                  <p className="font-semibold text-gray-900">Next.js</p>
                  <p className="text-sm text-gray-600">React Framework</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="font-semibold text-gray-900">Tailwind CSS</p>
                  <p className="text-sm text-gray-600">Modern Styling</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🐍</div>
                  <p className="font-semibold text-gray-900">Python</p>
                  <p className="text-sm text-gray-600">Backend API</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="font-semibold text-gray-900">FastAPI</p>
                  <p className="text-sm text-gray-600">High Performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Commitment */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              <div className="text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Privacy Matters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We take your privacy seriously. IPlyzer operates on a strict no-logging policy. We don't store your IP addresses, queries, or any personal information. All lookups are processed in real-time and immediately discarded.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ No Data Storage
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ No Tracking
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ No Registration
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    ✓ GDPR Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive suite of IP and network analysis tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Explore Tools</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/my-ip"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Check My IP
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
