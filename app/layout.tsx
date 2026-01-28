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
    "what is my ip"
  ],
  authors: [{ name: "IPlyzer" }],
  creator: "IPlyzer",
  publisher: "IPlyzer",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
    description: "Free IP address lookup, geolocation, VPN detection, DNS tools, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPlyzer - IP Tools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IPlyzer - Free IP Address Lookup & Network Tools",
    description: "Free IP address lookup, geolocation, VPN detection, DNS tools, and more.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IPlyzer",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`,
              "description": "Free IP address lookup and network analysis tools",
              "sameAs": [
                // Add social media links here
              ]
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IPlyzer",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/ip-lookup?ip={search_term_string}`
                },
                "query-input": "required name=search_term_string"
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
