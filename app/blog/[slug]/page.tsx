import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog posts data
const blogPosts: Record<string, any> = {
  "understanding-ip-addresses": {
    title: "Understanding IP Addresses: A Complete Guide",
    excerpt: "Learn everything about IP addresses, from IPv4 to IPv6, how they work, and why they matter for your online security and privacy.",
    category: "Basics",
    readTime: "8 min read",
    date: "January 25, 2026",
    icon: "🌐",
    content: `
      <p>An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to the internet. Think of it as your device's digital home address that allows other computers and servers to find and communicate with you online.</p>

      <h2>What is an IP Address?</h2>
      <p>Every device that connects to the internet needs an IP address to send and receive data. Just like your home address helps the postal service deliver mail to your door, an IP address helps internet routers deliver data packets to your device.</p>

      <h2>IPv4 vs IPv6</h2>
      <p>There are two versions of IP addresses currently in use:</p>
      <ul>
        <li><strong>IPv4:</strong> The traditional format using four numbers separated by dots (e.g., 192.168.1.1). IPv4 provides about 4.3 billion unique addresses.</li>
        <li><strong>IPv6:</strong> The newer format using hexadecimal notation with colons (e.g., 2001:0db8::1). IPv6 provides virtually unlimited addresses.</li>
      </ul>

      <h2>Public vs Private IP Addresses</h2>
      <p>Your device actually has two types of IP addresses:</p>
      <ul>
        <li><strong>Public IP:</strong> Assigned by your ISP and visible to the internet. This is what websites see when you visit them.</li>
        <li><strong>Private IP:</strong> Used within your local network (like 192.168.x.x). Your router uses NAT to translate between private and public IPs.</li>
      </ul>

      <h2>Why IP Addresses Matter</h2>
      <p>Understanding IP addresses is crucial for:</p>
      <ul>
        <li>Network troubleshooting and configuration</li>
        <li>Security and privacy protection</li>
        <li>Understanding how the internet works</li>
        <li>Setting up servers and services</li>
      </ul>

      <h2>Conclusion</h2>
      <p>IP addresses are fundamental to how the internet works. Whether you're a casual user or a network professional, understanding IP addresses helps you make informed decisions about your online security and privacy.</p>
    `
  },
  "detect-prevent-dns-leaks": {
    title: "How to Detect and Prevent DNS Leaks",
    excerpt: "DNS leaks can expose your browsing activity even when using a VPN. Discover how to detect and fix DNS leaks to protect your privacy.",
    category: "Security",
    readTime: "6 min read",
    date: "January 22, 2026",
    icon: "🔒",
    content: `
      <p>A DNS leak occurs when your DNS queries are sent to your ISP's DNS servers instead of your VPN's DNS servers, even though you're connected to a VPN. This exposes your browsing activity and defeats one of the main purposes of using a VPN.</p>

      <h2>What is a DNS Leak?</h2>
      <p>DNS (Domain Name System) is like the internet's phone book - it translates website names into IP addresses. When you use a VPN, all your traffic should go through the VPN tunnel, including DNS queries. However, due to various configuration issues, DNS queries might bypass the VPN and go directly to your ISP.</p>

      <h2>How to Detect DNS Leaks</h2>
      <p>Use our free DNS Leak Test tool to check if your VPN is leaking DNS requests. The test will show which DNS servers are handling your queries. If you see your ISP's DNS servers while connected to a VPN, you have a DNS leak.</p>

      <h2>Common Causes of DNS Leaks</h2>
      <ul>
        <li>VPN software not properly configured</li>
        <li>Operating system DNS settings overriding VPN settings</li>
        <li>Brief VPN disconnections causing fallback to default DNS</li>
        <li>IPv6 leaks when VPN only protects IPv4</li>
      </ul>

      <h2>How to Fix DNS Leaks</h2>
      <ol>
        <li>Enable DNS leak protection in your VPN client settings</li>
        <li>Configure your system to use your VPN provider's DNS servers</li>
        <li>Disable IPv6 if your VPN doesn't support it</li>
        <li>Use a VPN with built-in DNS leak protection</li>
        <li>Enable the VPN kill switch feature</li>
      </ol>

      <h2>Conclusion</h2>
      <p>DNS leaks are a serious privacy concern that can undermine your VPN's protection. Regular testing and proper configuration ensure your browsing activity remains private.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Post Not Found | IPlyzer Blog"
    };
  }

  return {
    title: `${post.title} | IPlyzer Blog`,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "ip address", "network security", "tutorial"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = [
    {
      title: "VPN vs Proxy: Which One Should You Use?",
      slug: "vpn-vs-proxy",
      icon: "🛡️"
    },
    {
      title: "What is Geolocation and How Accurate Is It?",
      slug: "ip-geolocation-accuracy",
      icon: "📍"
    },
    {
      title: "IPv6 Adoption: What You Need to Know",
      slug: "ipv6-adoption-guide",
      icon: "🔄"
    }
  ];

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "IPlyzer"
            }
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
                "name": "Blog",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog/${params.slug}`
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  post.category === 'Security' ? 'bg-red-100 text-red-700' :
                  post.category === 'Privacy' ? 'bg-purple-100 text-purple-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {post.category}
                </span>
                <span className="text-gray-600">{post.date}</span>
                <span className="text-gray-600">• {post.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {post.icon} {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all border border-gray-200 group"
                >
                  <div className="text-4xl mb-3">{relatedPost.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Try Our Free Tools
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Put your knowledge into practice with our IP and network analysis tools
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl"
            >
              <span>Explore Tools</span>
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
