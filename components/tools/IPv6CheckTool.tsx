"use client";

import { useState, useEffect } from "react";

interface IPv6Data {
  success: boolean;
  has_ipv6: boolean;
  ip: string;
  ipv4_address: string;
  ipv6_address: string;
  ip_version: string;
  browser_support: boolean;
  browser: string;
  status: string;
  message: string;
  details: {
    ipv6_enabled: boolean;
    ipv4_fallback: boolean;
    dual_stack: boolean;
  };
}

export default function IPv6CheckTool() {
  const [ipv6Data, setIpv6Data] = useState<IPv6Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkIPv6 = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/ipv6-check`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to check IPv6");
      }

      setIpv6Data(data);
    } catch (err: any) {
      setError(err.message || "Unable to check IPv6. Please try again.");
      console.error("Error checking IPv6:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkIPv6();
  }, []);

  const getStatusColor = () => {
    if (!ipv6Data) return "gray";
    if (ipv6Data.has_ipv6) return "green";
    return "orange";
  };

  const getStatusIcon = () => {
    if (!ipv6Data) return "🔄";
    if (ipv6Data.has_ipv6) return "✅";
    return "⚠️";
  };

  const getStatusText = () => {
    if (!ipv6Data) return "Checking...";
    if (ipv6Data.has_ipv6) return "IPv6 Enabled";
    return "IPv4 Only";
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Status Card */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-indigo-200 mb-6 sm:mb-8">
        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 rounded-full mb-3 sm:mb-4 animate-pulse">
              <span className="text-3xl sm:text-4xl">🔄</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 px-2">
              Checking IPv6 Connectivity...
            </h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Please wait while we test your connection</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">❌</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 px-2">
              Error Checking IPv6
            </h3>
            <p className="text-sm sm:text-base text-red-600 mb-4 px-2">{error}</p>
            <button
              onClick={checkIPv6}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : ipv6Data ? (
          <>
            {/* Status Display */}
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 sm:mb-4 ${
                  ipv6Data.has_ipv6
                    ? "bg-green-100"
                    : "bg-orange-100"
                }`}
              >
                <span className="text-4xl sm:text-5xl">{getStatusIcon()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-2">
                {getStatusText()}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {ipv6Data.message}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* IPv6 Address */}
              {ipv6Data.ipv6_address && (
                <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Your IPv6 Address</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-all">
                    {ipv6Data.ipv6_address}
                  </p>
                  <p className="text-xs sm:text-sm text-green-600 mt-2 font-semibold">
                    ✓ IPv6 Enabled
                  </p>
                </div>
              )}

              {/* IPv4 Address */}
              {ipv6Data.ipv4_address && (
                <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Your IPv4 Address</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-all">
                    {ipv6Data.ipv4_address}
                  </p>
                  <p className="text-xs sm:text-sm text-orange-600 mt-2 font-semibold">
                    IPv4 Fallback
                  </p>
                </div>
              )}

              {/* Browser Support */}
              <div
                className={`rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 ${
                  ipv6Data.browser_support
                    ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                    : "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
                }`}
              >
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Browser Support</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  {ipv6Data.browser_support ? "Supported" : "Limited"}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 break-words">
                  Browser: <span className="font-semibold">{ipv6Data.browser}</span>
                </p>
              </div>
            </div>

            {/* Connection Details */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                Connection Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">
                    {ipv6Data.details.ipv6_enabled ? "✅" : "❌"}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">IPv6 Enabled</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      {ipv6Data.details.ipv6_enabled ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">
                    {ipv6Data.details.ipv4_fallback ? "🔄" : "✅"}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">IPv4 Fallback</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      {ipv6Data.details.ipv4_fallback ? "Active" : "Not Needed"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">
                    {ipv6Data.details.dual_stack ? "✅" : "⚠️"}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Dual Stack</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      {ipv6Data.details.dual_stack ? "Enabled" : "Not Detected"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recheck Button */}
            <div className="mt-5 sm:mt-6 text-center">
              <button
                onClick={checkIPv6}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                🔄 Recheck Connection
              </button>
            </div>
          </>
        ) : null}
      </div>

      {/* What This Means */}
      {ipv6Data && (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-indigo-200">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            What This Means
          </h4>
          {ipv6Data.has_ipv6 ? (
            <div className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <p className="flex items-start space-x-2">
                <span className="text-green-600 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                <span>
                  <strong>You have IPv6 connectivity!</strong> Your ISP and network support the modern internet protocol.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-green-600 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                <span>
                  You can access IPv6-only websites and services without any issues.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-green-600 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                <span>
                  Your connection is future-proof as the internet transitions to IPv6.
                </span>
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <p className="flex items-start space-x-2">
                <span className="text-orange-600 mt-0.5 sm:mt-1 flex-shrink-0">⚠</span>
                <span>
                  <strong>You're using IPv4 only.</strong> Your ISP hasn't enabled IPv6 yet, which is common.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-orange-600 mt-0.5 sm:mt-1 flex-shrink-0">⚠</span>
                <span>
                  Most websites still support IPv4, so you won't experience any issues browsing.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0">ℹ</span>
                <span>
                  Contact your ISP if you need IPv6 for specific services or applications.
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
