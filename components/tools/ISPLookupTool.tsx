"use client";

import { useState } from "react";
import Link from "next/link";

interface ISPData {
  success: boolean;
  ip: string;
  isp: string;
  organization: string;
  asn: string | null;
  country: string;
  region: string;
  city: string;
  postal: string;
  timezone: string;
  hostname: string;
  is_hosting: boolean;
  is_datacenter: boolean;
  cloud: {
    is_cloud: boolean;
    provider: string | null;
  };
  source: string;
}

export default function ISPLookupTool() {
  const [ipInput, setIpInput] = useState("");
  const [ispData, setIspData] = useState<ISPData | null>(null);
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
      setIspData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/isp-lookup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: ipInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to lookup ISP");
      }

      setIspData(data);
    } catch (err: any) {
      setError(err.message || "Unable to lookup ISP. Please try again.");
      console.error("Error looking up ISP:", err);
    } finally {
      setLoading(false);
    }
  };

  const getNetworkTypeIcon = () => {
    if (!ispData) return "🌐";
    if (ispData.cloud.is_cloud) return "☁️";
    if (ispData.is_datacenter) return "🏢";
    return "🏠";
  };

  const getNetworkTypeLabel = () => {
    if (!ispData) return "Unknown";
    if (ispData.cloud.is_cloud) return `Cloud - ${ispData.cloud.provider}`;
    if (ispData.is_datacenter) return "Datacenter / Hosting";
    return "Residential ISP";
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-purple-200 mb-6 sm:mb-8">
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
                placeholder="e.g., 8.8.8.8"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
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
                  "Lookup ISP"
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-red-700 flex items-start sm:items-center space-x-2 text-sm sm:text-base">
                <span className="flex-shrink-0">⚠️</span>
                <span className="break-words">{error}</span>
              </p>
            </div>
          )}
        </form>

        {/* Example IPs */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {["8.8.8.8", "1.1.1.1", "13.107.42.14"].map((exampleIP) => (
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
      {ispData && ispData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main ISP Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-purple-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">{getNetworkTypeIcon()}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 px-2 break-words">
                {ispData.isp}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-2 break-words">{ispData.organization}</p>
              <span className="inline-block mt-3 bg-purple-100 text-purple-800 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                {getNetworkTypeLabel()}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* IP Address */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-all">{ispData.ip}</p>
              </div>

              {/* ASN */}
              {ispData.asn && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">ASN (Autonomous System Number)</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-all">{ispData.asn}</p>
                  <Link
                    href={`/asn-lookup?asn=${ispData.asn}`}
                    className="text-xs sm:text-sm text-green-700 hover:text-green-900 font-medium mt-2 inline-block"
                  >
                    View ASN Details →
                  </Link>
                </div>
              )}

              {/* Location */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Location</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 break-words">
                  {ispData.city}, {ispData.region}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{ispData.country}</p>
              </div>

              {/* Timezone */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-orange-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Timezone</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">{ispData.timezone}</p>
              </div>

              {/* Hostname */}
              {ispData.hostname && (
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-pink-200 sm:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Hostname</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 break-all">{ispData.hostname}</p>
                </div>
              )}
            </div>
          </div>

          {/* Network Type Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${ispData.is_datacenter ? 'bg-yellow-50 border-yellow-300' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-start sm:items-center space-x-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{ispData.is_datacenter ? '✅' : '❌'}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Datacenter</p>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    {ispData.is_datacenter ? 'Yes - Hosting Provider' : 'No - Not a datacenter'}
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${ispData.cloud.is_cloud ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-start sm:items-center space-x-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{ispData.cloud.is_cloud ? '☁️' : '🏢'}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Cloud Provider</p>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    {ispData.cloud.is_cloud ? ispData.cloud.provider : 'Not a cloud provider'}
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 sm:col-span-2 lg:col-span-1 ${!ispData.is_datacenter ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-start sm:items-center space-x-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{!ispData.is_datacenter ? '🏠' : '🏢'}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Residential</p>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    {!ispData.is_datacenter ? 'Yes - Residential ISP' : 'No - Business/Hosting'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Source */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center break-words">
              <span className="block sm:inline">📊 <strong>Data Source:</strong> {ispData.source}</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline mt-2 sm:mt-0">🔒 <strong>Privacy Note:</strong> ISP lookup queries are not stored on our servers.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
