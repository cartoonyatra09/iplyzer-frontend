"use client";

import { useState } from "react";
import Link from "next/link";

interface ProxyData {
  success: boolean;
  ip: string;
  proxy: {
    detected: boolean;
    status: string;
  };
  vpn: {
    detected: boolean;
    status: string;
    confidence: string;
  };
  hosting: {
    detected: boolean;
    type: string | null;
  };
  risk_level: string;
  country: string;
  isocode: string;
  provider: string;
  asn: string;
  source: string;
}

export default function ProxyCheckTool() {
  const [ipInput, setIpInput] = useState("");
  const [proxyData, setProxyData] = useState<ProxyData | null>(null);
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
      setProxyData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/proxy-check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: ipInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to check proxy");
      }

      setProxyData(data);
    } catch (err: any) {
      setError(err.message || "Unable to check proxy status. Please try again.");
      console.error("Error checking proxy:", err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "green";
      case "moderate":
        return "yellow";
      case "elevated":
        return "orange";
      default:
        return "gray";
    }
  };

  const getRiskLevelText = (level: string) => {
    switch (level) {
      case "low":
        return "Standard Connection";
      case "moderate":
        return "Datacenter IP";
      case "elevated":
        return "Privacy Service Detected";
      default:
        return "Unknown";
    }
  };

  const getRiskLevelIcon = (level: string) => {
    switch (level) {
      case "low":
        return "✅";
      case "moderate":
        return "🏢";
      case "elevated":
        return "🔒";
      default:
        return "❓";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-red-200 mb-6 sm:mb-8">
        <form onSubmit={handleCheck} className="space-y-4">
          <div>
            <label
              htmlFor="ip-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter IP Address to Check
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="e.g., 8.8.8.8 or 2001:4860:4860::8888"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
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
                    <span>Checking...</span>
                  </span>
                ) : (
                  "Check IP"
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
      {proxyData && proxyData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Status Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-red-200">
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 ${
                  proxyData.risk_level === "low"
                    ? "bg-green-100"
                    : proxyData.risk_level === "moderate"
                    ? "bg-yellow-100"
                    : "bg-orange-100"
                }`}
              >
                <span className="text-3xl sm:text-4xl">{getRiskLevelIcon(proxyData.risk_level)}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-2">
                {getRiskLevelText(proxyData.risk_level)}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-2 break-all">
                Analysis complete for {proxyData.ip}
              </p>
            </div>

            {/* Detection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {/* Proxy Detection */}
              <div
                className={`rounded-xl p-6 border-2 ${
                  proxyData.proxy.detected
                    ? "bg-orange-50 border-orange-300"
                    : "bg-green-50 border-green-300"
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">
                    {proxyData.proxy.detected ? "🔄" : "✅"}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Proxy Server</p>
                    <p className="text-sm text-gray-600">
                      {proxyData.proxy.detected ? "Detected" : "Not Detected"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {proxyData.proxy.detected
                    ? "This IP appears to be using a proxy service"
                    : "Direct connection detected"}
                </p>
              </div>

              {/* VPN Detection */}
              <div
                className={`rounded-xl p-6 border-2 ${
                  proxyData.vpn.detected
                    ? "bg-blue-50 border-blue-300"
                    : "bg-green-50 border-green-300"
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">
                    {proxyData.vpn.detected ? "🔒" : "✅"}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">VPN Service</p>
                    <p className="text-sm text-gray-600 capitalize">
                      {proxyData.vpn.detected ? "Detected" : "Not Detected"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {proxyData.vpn.detected
                    ? "Privacy service may be in use"
                    : "No VPN service detected"}
                </p>
              </div>

              {/* Hosting Detection */}
              <div
                className={`rounded-xl p-6 border-2 ${
                  proxyData.hosting.detected
                    ? "bg-purple-50 border-purple-300"
                    : "bg-green-50 border-green-300"
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">
                    {proxyData.hosting.detected ? "🏢" : "🏠"}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Hosting/Datacenter</p>
                    <p className="text-sm text-gray-600">
                      {proxyData.hosting.detected ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {proxyData.hosting.detected
                    ? "IP belongs to a datacenter or hosting provider"
                    : "Residential or business connection"}
                </p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Location</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">
                  {proxyData.country} ({proxyData.isocode})
                </p>
              </div>

              {/* Provider */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Service Provider</p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">{proxyData.provider}</p>
              </div>

              {/* ASN */}
              {proxyData.asn && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-green-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">ASN</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{proxyData.asn}</p>
                  <Link
                    href={`/asn-lookup?asn=${proxyData.asn}`}
                    className="text-xs sm:text-sm text-green-700 hover:text-green-900 font-medium mt-2 inline-block"
                  >
                    View ASN Details →
                  </Link>
                </div>
              )}

              {/* Connection Type */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-orange-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Connection Type</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  {proxyData.hosting.type || "Standard"}
                </p>
              </div>
            </div>
          </div>

          {/* Information Box - Friendly Language */}
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-blue-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
              <span>ℹ️</span>
              <span>What This Means</span>
            </h4>
            <div className="text-xs sm:text-sm text-gray-700 space-y-2">
              {proxyData.risk_level === "low" && (
                <p>
                  This appears to be a standard internet connection. No proxy, VPN, or datacenter characteristics were detected.
                </p>
              )}
              {proxyData.risk_level === "moderate" && (
                <p>
                  This IP belongs to a datacenter or hosting provider. This is common for servers, cloud services, and business infrastructure.
                </p>
              )}
              {proxyData.risk_level === "elevated" && (
                <p>
                  This connection may be using a privacy service like a VPN or proxy. Many people use these services for legitimate privacy and security purposes.
                </p>
              )}
              <p className="text-xs text-gray-500 mt-3">
                📊 Data Source: {proxyData.source} | 🔒 Privacy Note: Checks are not stored on our servers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
