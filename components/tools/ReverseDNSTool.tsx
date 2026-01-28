"use client";

import { useState } from "react";
import Link from "next/link";

interface ReverseDNSData {
  success: boolean;
  ip: string;
  hostname: string | null;
  aliases: string[];
  addresses: string[];
  found: boolean;
  message?: string;
}

export default function ReverseDNSTool() {
  const [ipInput, setIpInput] = useState("");
  const [dnsData, setDnsData] = useState<ReverseDNSData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateIP = (ip: string): boolean => {
    // IPv4 validation
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    // IPv6 validation (simplified)
    const ipv6Pattern = /^([0-9a-fA-F]{0,4}:){7}[0-9a-fA-F]{0,4}$/;

    if (ipv4Pattern.test(ip)) {
      const octets = ip.split(".");
      return octets.every((octet) => parseInt(octet) <= 255);
    }

    return ipv6Pattern.test(ip);
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ipInput.trim()) {
      setError("Please enter an IP address");
      return;
    }

    if (!validateIP(ipInput.trim())) {
      setError("Invalid IP address format");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setDnsData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/reverse-dns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: ipInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to lookup hostname");
      }

      setDnsData(data);
    } catch (err: any) {
      setError(err.message || "Unable to perform reverse DNS lookup. Please try again.");
      console.error("Error performing reverse DNS:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-pink-200 mb-6 sm:mb-8">
        <form onSubmit={handleLookup} className="space-y-4">
          <div>
            <label
              htmlFor="ip-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter IP Address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="e.g., 8.8.8.8 or 2001:4860:4860::8888"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
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
                    <span>Looking up...</span>
                  </span>
                ) : (
                  "Lookup Hostname"
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

        {/* Example IPs */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {["8.8.8.8", "1.1.1.1", "208.67.222.222"].map((exampleIP) => (
              <button
                key={exampleIP}
                onClick={() => setIpInput(exampleIP)}
                className="text-xs sm:text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                {exampleIP}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {dnsData && dnsData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Result Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-pink-200">
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 ${
                  dnsData.found ? "bg-green-100" : "bg-orange-100"
                }`}
              >
                <span className="text-3xl sm:text-4xl">{dnsData.found ? "✅" : "❓"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-2">
                {dnsData.found ? "Hostname Found" : "No Hostname Found"}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-2">
                {dnsData.found
                  ? "Reverse DNS lookup successful"
                  : dnsData.message || "This IP does not have a reverse DNS record"}
              </p>
            </div>

            {dnsData.found && dnsData.hostname && (
              <>
                {/* Hostname Display */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-pink-200 mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Hostname</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-all px-2">
                      {dnsData.hostname}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* IP Address */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-all">
                      {dnsData.ip}
                    </p>
                  </div>

                  {/* Addresses */}
                  {dnsData.addresses && dnsData.addresses.length > 0 && (
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Associated Addresses</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        {dnsData.addresses.length} address{dnsData.addresses.length !== 1 ? "es" : ""}
                      </p>
                    </div>
                  )}

                  {/* Aliases */}
                  {dnsData.aliases && dnsData.aliases.length > 0 && (
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-200 sm:col-span-2">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">Aliases</p>
                      <div className="flex flex-wrap gap-2">
                        {dnsData.aliases.map((alias, index) => (
                          <span
                            key={index}
                            className="bg-white px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium text-gray-900 border border-purple-200 break-all"
                          >
                            {alias}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    🔗 Related Lookups
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href={`/ip-location?ip=${dnsData.ip}`}
                      className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xl sm:text-2xl">📍</span>
                        <span className="text-sm sm:text-base font-medium text-gray-900">IP Location</span>
                      </div>
                      <span className="text-pink-600">→</span>
                    </Link>
                    <Link
                      href={`/isp-lookup?ip=${dnsData.ip}`}
                      className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xl sm:text-2xl">🏢</span>
                        <span className="text-sm sm:text-base font-medium text-gray-900">ISP Lookup</span>
                      </div>
                      <span className="text-pink-600">→</span>
                    </Link>
                  </div>
                </div>
              </>
            )}

            {!dnsData.found && (
              <div className="bg-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-orange-200">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span>ℹ️</span>
                  <span>Why No Hostname?</span>
                </h4>
                <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                  <p>
                    Not all IP addresses have reverse DNS records. This is common for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2 sm:ml-4">
                    <li>Residential internet connections</li>
                    <li>Dynamic IP addresses</li>
                    <li>IPs without configured PTR records</li>
                    <li>Newly allocated IP addresses</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center break-words">
              🔍 <strong>What is Reverse DNS?</strong> It converts an IP address back to its hostname using PTR records. | 
              🔒 <strong>Privacy Note:</strong> Lookups are not stored on our servers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
