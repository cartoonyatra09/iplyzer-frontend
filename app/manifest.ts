import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IPlyzer - Free IP Address Lookup & Network Tools',
    short_name: 'IPlyzer',
    description: 'Free IP address lookup, geolocation, VPN detection, DNS tools, and more. Discover your IP, check proxy/VPN, trace emails, and analyze network information.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['utilities', 'productivity', 'developer tools'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
  }
}
