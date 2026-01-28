"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toolCategories = [
    {
      category: "IP Analysis",
      icon: "🌐",
      tools: [
        { name: "My IP Address", href: "/my-ip", icon: "🌐" },
        { name: "IP Location Lookup", href: "/ip-location", icon: "📍" },
        { name: "ISP Lookup", href: "/isp-lookup", icon: "🏢" },
        { name: "ASN Lookup", href: "/asn-lookup", icon: "🔢" },
        { name: "IPv6 Check", href: "/ipv6-check", icon: "🔄" },
        { name: "Proxy/VPN Check", href: "/proxy-check", icon: "🔒" },
      ]
    },
    {
      category: "DNS Tools",
      icon: "🔍",
      tools: [
        { name: "Reverse DNS", href: "/reverse-dns", icon: "🔍" },
        { name: "Hostname to IP", href: "/hostname-to-ip", icon: "🌍" },
        { name: "DNS Leak Test", href: "/dns-leak-test", icon: "🛡️" },
      ]
    },
    {
      category: "Network Tools",
      icon: "⚡",
      tools: [
        { name: "Hosting Check", href: "/hosting-check", icon: "☁️" },
        { name: "Email Trace", href: "/email-trace", icon: "📧" },
        { name: "Speed Test", href: "/speed-test", icon: "⚡" },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-base sm:text-xl font-bold">IP</span>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                IPlyzer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold px-2 lg:px-4 py-2 rounded-lg hover:bg-blue-50 text-sm lg:text-base"
            >
              Home
            </Link>

            {/* Category Dropdowns */}
            {toolCategories.map((category) => (
              <div 
                key={category.category} 
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[category.category] = el;
                }}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === category.category ? null : category.category)}
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 font-semibold px-2 lg:px-4 py-2 rounded-lg hover:bg-blue-50 text-sm lg:text-base"
                >
                  <span className="text-base lg:text-lg">{category.icon}</span>
                  <span className="hidden lg:inline">{category.category}</span>
                  <svg
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${
                      openDropdown === category.category ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {openDropdown === category.category && (
                  <div className="absolute left-0 mt-2 w-56 lg:w-64 bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-gray-200 py-2 animate-fadeIn z-50">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block px-3 lg:px-4 py-2.5 lg:py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="flex items-center space-x-2 lg:space-x-3">
                          <span className="text-lg lg:text-xl">{tool.icon}</span>
                          <span className="text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600">
                            {tool.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 border-t border-gray-200 animate-fadeIn max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1.5 sm:space-y-2">
              <Link
                href="/"
                className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg sm:rounded-xl transition-all font-semibold text-sm sm:text-base active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Home
              </Link>

              {/* Mobile Tools */}
              <div className="px-3 sm:px-4 py-2">
                <p className="text-xs font-bold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wider">
                  Tools
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {toolCategories.map((category) => (
                    <div key={category.category}>
                      <div className="flex items-center space-x-2 mb-2 sm:mb-3 px-1 sm:px-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-base sm:text-lg">{category.icon}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-700">
                          {category.category}
                        </h4>
                      </div>
                      <div className="space-y-1 ml-1 sm:ml-2">
                        {category.tools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            className="block px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg sm:rounded-xl transition-all flex items-center space-x-2 sm:space-x-3 font-medium active:scale-95"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-base sm:text-lg flex-shrink-0">{tool.icon}</span>
                            <span className="flex-1">{tool.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
