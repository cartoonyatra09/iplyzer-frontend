import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iplyzer.com'
  
  // All tool pages
  const tools = [
    'my-ip',
    'ip-location',
    'asn-lookup',
    'isp-lookup',
    'proxy-check',
    'dns-leak-test',
    'ipv6-check',
    'reverse-dns',
    'hostname-to-ip',
    'email-trace',
    'hosting-check',
    'speed-test',
  ]

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogPosts = [
    'understanding-ip-addresses',
    'detect-prevent-dns-leaks',
    'vpn-vs-proxy',
    'ip-geolocation-accuracy',
    'ipv6-adoption-guide',
    'email-header-phishing-detection',
    'asn-bgp-routing-explained',
    'improve-internet-speed',
    'datacenter-vs-residential-ips',
  ]

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...toolPages,
    ...blogPages,
  ]
}
