"use client";

import { useState } from "react";
import Link from "next/link";

interface HostnameData {
  success: boolean;
  hostname: string;
  ipv4: string | null;
  ipv6: string[] | null;
  all_ips: string[];
  found: boolean;
  message?: string;
}

export default function HostnameToIPTool() {
  const [hostnameInput, setHostnameInput] = useState("");
  const [hostnameData, setHostnameData] = useState<HostnameData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateHostname = (hostname: string): boolean => {
    // Remove protocol if present
    let cleaned = hostname.replace(/^https?:\/\//, '').replace(/\/$/, '');
    
    // Basic domain validation
    const domainPattern = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return domainPattern.test(cleaned);
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hostnameInput.trim()) {
      setError("Please enter a hostname or domain");
      return;
    }

    if (!validateHostname(hostnameInput.trim())) {
      setError("Invalid hostname or domain format");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setHostnameData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/hostname-to-ip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostname: hostnameInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to resolve hostname");
      }

      setHostnameData(data);
    } catch (err: any) {
      setError(err.message || "Unable to resolve hostname. Please try again.");
      console.error("Error resolving hostname:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-orange-200 mb-6 sm:mb-8">
        <form onSubmit={handleLookup} className="space-y-4">
          <div>
            <label
              htmlFor="hostname-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Hostname or Domain
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="hostname-input"
                type="text"
                value={hostnameInput}
                onChange={(e) => setHostnameInput(e.target.value)}
                placeholder="e.g., google.com or www.example.com"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Resolving...</span>
                  </span>
                ) : (
                  "Resolve IP"
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <p className="text-red-700 flex items-center space-x-2">
                <span>⚠️</span>
                <span>{error}</span>
              </p>
            </div>
          )}
        </form>

        {/* Example Hostnames */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {["google.com", "github.com", "cloudflare.com"].map((example) => (
              <button
                key={example}
                onClick={() => setHostnameInput(example)}
                className="text-xs sm:text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {hostnameData && hostnameData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Result Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-orange-200">
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 ${
                  hostnameData.found ? "bg-green-100" : "bg-orange-100"
                }`}
              >
                <span className="text-3xl sm:text-4xl">{hostnameData.found ? "✅" : "❓"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-2">
                {hostnameData.found ? "IP Addresses Found" : "Unable to Resolve"}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-2 break-words">
                {hostnameData.found
                  ? `${hostnameData.all_ips.length} IP address${hostnameData.all_ips.length !== 1 ? 'es' : ''} found for ${hostnameData.hostname}`
                  : hostnameData.message || "This hostname could not be resolved"}
              </p>
            </div>

            {hostnameData.found && (
              <>
                {/* IPv4 Address */}
                {hostnameData.ipv4 && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200 mb-4 sm:mb-6">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center justify-center space-x-2">
                        <span>🌐</span>
                        <span>IPv4 Address</span>
                      </p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-all px-2">
                        {hostnameData.ipv4}
                      </p>
                      <Link
                        href={`/ip-location?ip=${hostnameData.ipv4}`}
                        className="inline-block mt-2 sm:mt-3 text-xs sm:text-sm text-blue-700 hover:text-blue-900 font-medium"
                      >
                        View IP Details →
                      </Link>
                    </div>
                  </div>
                )}

                {/* IPv6 Addresses */}
                {hostnameData.ipv6 && hostnameData.ipv6.length > 0 && (
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-purple-200 mb-4 sm:mb-6">
                    <div className="text-center mb-3 sm:mb-4">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center justify-center space-x-2">
                        <span>🔄</span>
                        <span>IPv6 Addresses ({hostnameData.ipv6.length})</span>
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {hostnameData.ipv6.map((ip, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 sm:p-4 border border-purple-200"
                        >
                          <p className="text-sm sm:text-base md:text-lg font-mono font-bold text-gray-900 break-all text-center">
                            {ip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All IPs Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Hostname */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Hostname</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-all">
                      {hostnameData.hostname}
                    </p>
                  </div>

                  {/* Total IPs */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-orange-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total IP Addresses</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      {hostnameData.all_ips.length}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {hostnameData.ipv4 ? '1 IPv4' : '0 IPv4'}
                      {hostnameData.ipv6 ? `, ${hostnameData.ipv6.length} IPv6` : ', 0 IPv6'}
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    🔗 Analyze These IPs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {hostnameData.ipv4 && (
                      <>
                        <Link
                          href={`/ip-location?ip=${hostnameData.ipv4}`}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="text-xl sm:text-2xl">📍</span>
                            <span className="text-sm sm:text-base font-medium text-gray-900">Location</span>
                          </div>
                          <span className="text-orange-600">→</span>
                        </Link>
                        <Link
                          href={`/isp-lookup?ip=${hostnameData.ipv4}`}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="text-xl sm:text-2xl">🏢</span>
                            <span className="text-sm sm:text-base font-medium text-gray-900">ISP</span>
                          </div>
                          <span className="text-orange-600">→</span>
                        </Link>
                        <Link
                          href={`/reverse-dns?ip=${hostnameData.ipv4}`}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="text-xl sm:text-2xl">🔍</span>
                            <span className="text-sm sm:text-base font-medium text-gray-900">Reverse DNS</span>
                          </div>
                          <span className="text-orange-600">→</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            {!hostnameData.found && (
              <div className="bg-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-orange-200">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span>ℹ️</span>
                  <span>Why Can't This Be Resolved?</span>
                </h4>
                <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                  <p>
                    The hostname could not be resolved to an IP address. Common reasons:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2 sm:ml-4">
                    <li>The domain doesn't exist or has expired</li>
                    <li>DNS records are not properly configured</li>
                    <li>Typo in the hostname</li>
                    <li>The domain is not yet propagated</li>
                    <li>DNS server issues</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center break-words">
              🌐 <strong>DNS Resolution:</strong> Converts domain names to IP addresses using A (IPv4) and AAAA (IPv6) records. | 
              🔒 <strong>Privacy Note:</strong> Lookups are not stored on our servers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
