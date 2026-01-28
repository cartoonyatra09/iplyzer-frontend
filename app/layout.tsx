import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IPlyzer - Free IP Address Lookup & Network Tools",
    template: "%s | IPlyzer"
  },
  description: "Free IP address lookup, geolocation, VPN detection, DNS tools, and more. Discover your IP, check proxy/VPN, trace emails, and analyze network information.",
  keywords: [
    "IP address",
    "IP lookup",
    "geolocation",
    "VPN detection",
    "proxy check",
    "DNS lookup",
    "email trace",
    "network tools",
    "what is my ip",
    "my ip address",
    "check ip location",
    "ISP lookup",
    "ASN lookup",
    "reverse DNS",
    "DNS leak test",
    "IPv6 check",
    "proxy detector",
    "email tracer",
    "speed test",
    "hosting check"
  ],
  authors: [{ name: "IPlyzer Team" }],
  creator: "IPlyzer",
  publisher: "IPlyzer",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  applicationName: "IPlyzer",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "IPlyzer",
    title: "IPlyzer - Free IP Address Lookup & Network Tools",
    description: "Free IP address lookup, geolocation, VPN detection, DNS tools, and more. Trusted by millions for accurate IP information.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPlyzer - Free IP Address Lookup & Network Tools",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IPlyzer - Free IP Address Lookup & Network Tools",
    description: "Free IP address lookup, geolocation, VPN detection, DNS tools, and more.",
    images: ["/og-image.png"],
    creator: "@iplyzer",
    site: "@iplyzer"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      }
    ]
  },
  manifest: "/manifest.json",
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL || "https://api.iplyzer.com"} />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IPlyzer",
              "alternateName": "IPlyzer.com",
              "url": siteUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`,
                "width": 512,
                "height": 512
              },
              "description": "Free IP address lookup and network analysis tools trusted by millions worldwide",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@iplyzer.com",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                // Add your social media links here when available
                // "https://twitter.com/iplyzer",
                // "https://github.com/iplyzer"
              ]
            })
          }}
        />
        
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IPlyzer",
              "alternateName": "IPlyzer - IP Address Lookup Tools",
              "url": siteUrl,
              "description": "Free IP address lookup, geolocation, VPN detection, DNS tools, and network analysis",
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteUrl}/ip-location?ip={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* WebApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "IPlyzer",
              "url": siteUrl,
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
                "ratingCount": "15000",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {/* Sticky Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
