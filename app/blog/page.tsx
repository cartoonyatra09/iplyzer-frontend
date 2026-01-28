import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - IP Address & Network Security Insights | IPlyzer",
  description: "Learn about IP addresses, network security, VPN detection, DNS, and internet privacy. Expert guides and tutorials on network analysis and cybersecurity.",
  keywords: [
    "ip address blog",
    "network security",
    "vpn guides",
    "dns tutorials",
    "cybersecurity",
    "internet privacy"
  ],
  openGraph: {
    title: "Blog - IP Address & Network Security Insights | IPlyzer",
    description: "Expert guides on IP addresses, network security, and internet privacy.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding IP Addresses: A Complete Guide",
      excerpt: "Learn everything about IP addresses, from IPv4 to IPv6, how they work, and why they matter for your online security and privacy.",
      category: "Basics",
      readTime: "8 min read",
      date: "January 25, 2026",
      slug: "understanding-ip-addresses",
      icon: "🌐"
    },
    {
      title: "How to Detect and Prevent DNS Leaks",
      excerpt: "DNS leaks can expose your browsing activity even when using a VPN. Discover how to detect and fix DNS leaks to protect your privacy.",
      category: "Security",
      readTime: "6 min read",
      date: "January 22, 2026",
      slug: "detect-prevent-dns-leaks",
      icon: "🔒"
    },
    {
      title: "VPN vs Proxy: Which One Should You Use?",
      excerpt: "Understand the key differences between VPNs and proxies, their pros and cons, and which solution is best for your privacy needs.",
      category: "Privacy",
      readTime: "7 min read",
      date: "January 20, 2026",
      slug: "vpn-vs-proxy",
      icon: "🛡️"
    },
    {
      title: "What is Geolocation and How Accurate Is It?",
      excerpt: "Explore how IP geolocation works, its accuracy levels, and why your IP location might show a different city than where you actually are.",
      category: "Technology",
      readTime: "5 min read",
      date: "January 18, 2026",
      slug: "ip-geolocation-accuracy",
      icon: "📍"
    },
    {
      title: "IPv6 Adoption: What You Need to Know",
      excerpt: "IPv4 addresses are exhausted. Learn about IPv6, why it matters, and how to check if your network supports the next generation of internet protocol.",
      category: "Technology",
      readTime: "9 min read",
      date: "January 15, 2026",
      slug: "ipv6-adoption-guide",
      icon: "🔄"
    },
    {
      title: "Email Header Analysis for Phishing Detection",
      excerpt: "Learn how to analyze email headers to identify phishing attempts, trace email origins, and protect yourself from email-based attacks.",
      category: "Security",
      readTime: "10 min read",
      date: "January 12, 2026",
      slug: "email-header-phishing-detection",
      icon: "📧"
    },
    {
      title: "Understanding ASN and BGP Routing",
      excerpt: "Dive into Autonomous System Numbers (ASN) and Border Gateway Protocol (BGP) to understand how internet routing works at a global scale.",
      category: "Advanced",
      readTime: "12 min read",
      date: "January 10, 2026",
      slug: "asn-bgp-routing-explained",
      icon: "🔢"
    },
    {
      title: "How to Improve Your Internet Speed",
      excerpt: "Practical tips and tricks to optimize your internet connection, troubleshoot slow speeds, and get the most out of your ISP plan.",
      category: "Tips",
      readTime: "8 min read",
      date: "January 8, 2026",
      slug: "improve-internet-speed",
      icon: "⚡"
    },
    {
      title: "Datacenter IPs vs Residential IPs: Key Differences",
      excerpt: "Understand the differences between datacenter and residential IP addresses, and why it matters for web scraping, security, and fraud detection.",
      category: "Technology",
      readTime: "6 min read",
      date: "January 5, 2026",
      slug: "datacenter-vs-residential-ips",
      icon: "☁️"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, color: "bg-blue-100 text-blue-700" },
    { name: "Security", count: 2, color: "bg-red-100 text-red-700" },
    { name: "Privacy", count: 1, color: "bg-purple-100 text-purple-700" },
    { name: "Technology", count: 3, color: "bg-green-100 text-green-700" },
    { name: "Basics", count: 1, color: "bg-yellow-100 text-yellow-700" },
    { name: "Advanced", count: 1, color: "bg-indigo-100 text-indigo-700" },
    { name: "Tips", count: 1, color: "bg-pink-100 text-pink-700" }
  ];

  const featuredPost = blogPosts[0];

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
                "name": "Blog",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog`
              }
            ]
          })
        }}
      />

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "IPlyzer Blog",
            "description": "Expert insights on IP addresses, network security, and internet privacy",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog`
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-semibold">📚 Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              IPlyzer <span className="text-yellow-300">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert insights on IP addresses, network security, VPN technology, and internet privacy
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                ⭐ Featured Post
              </span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                  <span className="text-gray-600 text-sm">• {featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.icon} {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Full Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 ${category.color} rounded-full font-medium text-sm hover:shadow-md transition-shadow`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{post.icon}</span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        post.category === 'Security' ? 'bg-red-100 text-red-700' :
                        post.category === 'Privacy' ? 'bg-purple-100 text-purple-700' :
                        post.category === 'Technology' ? 'bg-green-100 text-green-700' :
                        post.category === 'Advanced' ? 'bg-indigo-100 text-indigo-700' :
                        post.category === 'Tips' ? 'bg-pink-100 text-pink-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">📬</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest articles on IP addresses, network security, and internet privacy delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Privacy-focused.
            </p>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "IP Addresses", icon: "🌐" },
                { name: "VPN Security", icon: "🔒" },
                { name: "DNS Privacy", icon: "🛡️" },
                { name: "Geolocation", icon: "📍" },
                { name: "IPv6", icon: "🔄" },
                { name: "Email Security", icon: "📧" },
                { name: "Network Tools", icon: "🔧" },
                { name: "Cybersecurity", icon: "🛡️" }
              ].map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer border border-gray-200"
                >
                  <div className="text-4xl mb-2">{topic.icon}</div>
                  <p className="font-semibold text-gray-900">{topic.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Try Our Free Tools
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Put your knowledge into practice with our comprehensive IP and network analysis tools
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore All Tools</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
