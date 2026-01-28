"use client";

import { useState } from "react";
import Link from "next/link";

interface HostingData {
  success: boolean;
  ip: string;
  is_hosting: boolean;
  is_datacenter: boolean;
  hosting_type: string | null;
  cloud: {
    is_cloud: boolean;
    provider: string | null;
    category: string | null;
  };
  organization: string;
  asn: string | null;
  hostname: string;
  company: {
    name: string;
    domain: string | null;
    type: string | null;
  };
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  source: string;
}

export default function HostingCheckTool() {
  const [ipInput, setIpInput] = useState("");
  const [hostingData, setHostingData] = useState<HostingData | null>(null);
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

  const handleCheck = async (e: React.FormEvent) => {
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
      setHostingData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/hosting-check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: ipInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to check hosting");
      }

      setHostingData(data);
    } catch (err: any) {
      setError(err.message || "Unable to check hosting status. Please try again.");
      console.error("Error checking hosting:", err);
    } finally {
      setLoading(false);
    }
  };

  const getConnectionIcon = () => {
    if (!hostingData) return "🌐";
    if (hostingData.cloud.is_cloud) return "☁️";
    if (hostingData.is_datacenter) return "🏢";
    return "🏠";
  };

  const getConnectionType = () => {
    if (!hostingData) return "Unknown";
    if (hostingData.cloud.is_cloud) return hostingData.cloud.provider;
    if (hostingData.is_datacenter) return hostingData.hosting_type || "Datacenter";
    return "Residential/Business";
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-cyan-200 mb-6 sm:mb-8">
        <form onSubmit={handleCheck} className="space-y-4">
          <div>
            <label
              htmlFor="ip-input"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Enter IP Address to Check
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="e.g., 8.8.8.8"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-cyan-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
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
                    <span>Checking...</span>
                  </span>
                ) : (
                  "Check Hosting"
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-red-700 flex items-start space-x-2">
                <span className="flex-shrink-0">⚠️</span>
                <span>{error}</span>
              </p>
            </div>
          )}
        </form>

        {/* Example IPs */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {["8.8.8.8", "13.107.42.14", "104.16.132.229"].map((exampleIP) => (
              <button
                key={exampleIP}
                onClick={() => setIpInput(exampleIP)}
                className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                {exampleIP}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {hostingData && hostingData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Status Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-cyan-200">
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 ${
                  hostingData.cloud.is_cloud
                    ? "bg-blue-100"
                    : hostingData.is_datacenter
                    ? "bg-purple-100"
                    : "bg-green-100"
                }`}
              >
                <span className="text-3xl sm:text-4xl">{getConnectionIcon()}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 px-4">
                {getConnectionType()}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 break-words">{hostingData.organization}</p>
              <span
                className={`inline-block mt-3 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                  hostingData.is_datacenter
                    ? "bg-purple-100 text-purple-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {hostingData.is_datacenter ? "Datacenter IP" : "Non-Datacenter IP"}
              </span>
            </div>

            {/* Detection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Cloud Provider */}
              <div
                className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${
                  hostingData.cloud.is_cloud
                    ? "bg-blue-50 border-blue-300"
                    : "bg-gray-50 border-gray-300"
                }`}
              >
                <div className="flex items-start space-x-3 mb-2">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">
                    {hostingData.cloud.is_cloud ? "☁️" : "🏢"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-gray-900">Cloud Provider</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">
                      {hostingData.cloud.is_cloud
                        ? hostingData.cloud.provider
                        : "Not a cloud provider"}
                    </p>
                  </div>
                </div>
                {hostingData.cloud.category && (
                  <p className="text-xs text-gray-500 mt-2">
                    Category: {hostingData.cloud.category}
                  </p>
                )}
              </div>

              {/* Hosting Type */}
              <div
                className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${
                  hostingData.is_datacenter
                    ? "bg-purple-50 border-purple-300"
                    : "bg-green-50 border-green-300"
                }`}
              >
                <div className="flex items-start space-x-3 mb-2">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">
                    {hostingData.is_datacenter ? "🏢" : "🏠"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-gray-900">Connection Type</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">
                      {hostingData.hosting_type || "Residential/Business"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {hostingData.is_datacenter
                    ? "This IP belongs to a datacenter or hosting facility"
                    : "This appears to be a standard connection"}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* IP Address */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 break-all">
                  {hostingData.ip}
                </p>
              </div>

              {/* Company */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Company</p>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 break-words">{hostingData.company.name}</p>
                {hostingData.company.domain && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 break-all">{hostingData.company.domain}</p>
                )}
              </div>

              {/* ASN */}
              {hostingData.asn && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">ASN</p>
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">{hostingData.asn}</p>
                  <Link
                    href={`/asn-lookup?asn=${hostingData.asn}`}
                    className="text-xs sm:text-sm text-green-700 hover:text-green-900 font-medium mt-2 inline-block"
                  >
                    View ASN Details →
                  </Link>
                </div>
              )}

              {/* Location */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-orange-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Location</p>
                <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-words">
                  {hostingData.location.city}, {hostingData.location.region}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{hostingData.location.country}</p>
              </div>

              {/* Hostname */}
              {hostingData.hostname && (
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-pink-200 sm:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Hostname</p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-all">
                    {hostingData.hostname}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Use Case Info */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border-2 border-cyan-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
              <span>💡</span>
              <span>Common Use Cases</span>
            </h4>
            <div className="text-xs sm:text-sm text-gray-700 space-y-2">
              {hostingData.is_datacenter ? (
                <>
                  <p className="flex items-start space-x-2">
                    <span className="text-cyan-600 mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <strong>Server Infrastructure:</strong> This IP is likely used for hosting websites, applications, or services.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-cyan-600 mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <strong>Fraud Detection:</strong> Datacenter IPs can indicate automated traffic or bot activity in some contexts.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-cyan-600 mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <strong>Traffic Analysis:</strong> Helps distinguish between residential users and server/bot traffic.
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <strong>Residential Connection:</strong> This appears to be a standard home or business internet connection.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <strong>Genuine User:</strong> More likely to represent a real person rather than automated traffic.
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Data Source */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              📊 <strong>Data Source:</strong> {hostingData.source} | 
              🔒 <strong>Privacy Note:</strong> Checks are not stored on our servers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
