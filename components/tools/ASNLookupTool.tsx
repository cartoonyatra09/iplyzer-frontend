"use client";

import { useState } from "react";
import Link from "next/link";

interface ASNData {
  success: boolean;
  asn: string;
  organization: string;
  country: string;
  registry: string;
  prefixes: string[];
  total_ips: number;
  description: string;
  source: string;
}

export default function ASNLookupTool() {
  const [input, setInput] = useState("");
  const [asnData, setAsnData] = useState<ASNData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateInput = (value: string): { valid: boolean; type: "asn" | "ip" | null } => {
    const trimmed = value.trim();
    
    // Check if it's an ASN (AS12345 or just 12345)
    const asnPattern = /^(AS)?(\d+)$/i;
    if (asnPattern.test(trimmed)) {
      return { valid: true, type: "asn" };
    }

    // Check if it's an IPv4 address
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Pattern.test(trimmed)) {
      const octets = trimmed.split(".");
      const validOctets = octets.every((octet) => parseInt(octet) <= 255);
      if (validOctets) {
        return { valid: true, type: "ip" };
      }
    }

    // Check if it's an IPv6 address (simplified)
    const ipv6Pattern = /^([0-9a-fA-F]{0,4}:){7}[0-9a-fA-F]{0,4}$/;
    if (ipv6Pattern.test(trimmed)) {
      return { valid: true, type: "ip" };
    }

    return { valid: false, type: null };
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter an ASN or IP address");
      return;
    }

    const validation = validateInput(input);
    if (!validation.valid) {
      setError("Invalid ASN or IP address format");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setAsnData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/asn-lookup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          [validation.type === "asn" ? "asn" : "ip"]: input.trim() 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to lookup ASN");
      }

      setAsnData(data);
    } catch (err: any) {
      setError(err.message || "Unable to lookup ASN. Please try again.");
      console.error("Error looking up ASN:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-yellow-200 mb-6 sm:mb-8">
        <form onSubmit={handleLookup} className="space-y-4">
          <div>
            <label
              htmlFor="asn-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter ASN or IP Address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="asn-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., AS15169, 15169, or 8.8.8.8"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
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
                  "Lookup ASN"
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

        {/* Example Inputs */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {["AS15169", "AS13335", "8.8.8.8", "1.1.1.1"].map((example) => (
              <button
                key={example}
                onClick={() => setInput(example)}
                className="text-xs sm:text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {asnData && asnData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main ASN Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-yellow-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">🔢</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">
                {asnData.asn}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-2 px-2 break-words">{asnData.organization}</p>
              {asnData.description && (
                <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto px-2">
                  {asnData.description}
                </p>
              )}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Organization */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Organization</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">{asnData.organization}</p>
              </div>

              {/* Country */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Country</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{asnData.country}</p>
              </div>

              {/* Registry */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Registry</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{asnData.registry}</p>
                <p className="text-xs text-gray-600 mt-1">Regional Internet Registry</p>
              </div>

              {/* Total IPs */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-orange-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total IP Addresses</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{formatNumber(asnData.total_ips)}</p>
                <p className="text-xs text-gray-600 mt-1">{asnData.prefixes.length} network prefixes</p>
              </div>
            </div>
          </div>

          {/* Network Prefixes */}
          {asnData.prefixes && asnData.prefixes.length > 0 && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-yellow-200">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2">
                <span>🌐</span>
                <span>Network Ranges ({asnData.prefixes.length})</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                IP address prefixes announced by this Autonomous System
              </p>
              <div className="max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {asnData.prefixes.map((prefix, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-2.5 sm:p-3 border border-gray-200 font-mono text-xs sm:text-sm break-all"
                    >
                      {prefix}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border-2 border-yellow-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
              🔗 Related Lookups
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href={`/isp-lookup`}
                className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">🏢</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">ISP Lookup</span>
                </div>
                <span className="text-yellow-600">→</span>
              </Link>
              <Link
                href={`/ip-location`}
                className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <span className="text-sm sm:text-base font-medium text-gray-900">IP Location</span>
                </div>
                <span className="text-yellow-600">→</span>
              </Link>
            </div>
          </div>

          {/* Data Source */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center break-words">
              📊 <strong>Data Source:</strong> {asnData.source} | 
              🔒 <strong>Privacy Note:</strong> ASN lookup queries are not stored on our servers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
