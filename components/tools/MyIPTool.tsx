"use client";

import { useEffect, useState } from "react";

interface IPData {
  ip: string;
  version: string;
  country: string;
  city: string;
  region?: string;
  isp: string;
  browser: string;
  os: string;
  timezone?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  ipv4_address?: string;
  ipv6_address?: string;
}

export default function MyIPTool() {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetchIPData();
  }, []);

  const fetchIPData = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      
      console.log('🔍 [MyIPTool] Fetching IP data from:', apiUrl);
      
      // Fetch both my-ip and ipv6-check data
      const [myIpResponse, ipv6Response] = await Promise.all([
        fetch(`${apiUrl}/api/my-ip`),
        fetch(`${apiUrl}/api/ipv6-check`)
      ]);

      console.log('📡 [MyIPTool] My IP Response:', myIpResponse.status);
      console.log('📡 [MyIPTool] IPv6 Response:', ipv6Response.status);

      if (!myIpResponse.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const myIpData = await myIpResponse.json();
      const ipv6Data = ipv6Response.ok ? await ipv6Response.json() : null;
      
      console.log('✅ [MyIPTool] My IP Data:', myIpData);
      console.log('✅ [MyIPTool] IPv6 Data:', ipv6Data);
      
      // Merge data
      const mergedData = {
        ...myIpData,
        ipv4_address: ipv6Data?.ipv4_address || "",
        ipv6_address: ipv6Data?.ipv6_address || ""
      };
      
      console.log('🔗 [MyIPTool] Merged Data:', mergedData);
      
      setIpData(mergedData);
    } catch (err) {
      setError("Unable to fetch IP information. Please try again.");
      console.error("❌ [MyIPTool] Error fetching IP:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-3 sm:px-0">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-blue-100">
          <div className="animate-pulse space-y-4 sm:space-y-6">
            <div className="h-10 sm:h-12 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 sm:h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-3 sm:px-0">
        <div className="bg-red-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-red-200">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚠️</div>
            <h3 className="text-lg sm:text-xl font-semibold text-red-900 mb-2 px-2">
              Error Loading IP Data
            </h3>
            <p className="text-sm sm:text-base text-red-600 mb-4 sm:mb-6 px-2">{error}</p>
            <button
              onClick={fetchIPData}
              className="bg-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm sm:text-base active:scale-95"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!ipData) return null;

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-0">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
        {/* Main IP Display */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wide">
            Your IP Address
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-3 sm:mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 break-all px-2 mb-3 sm:mb-0">
              {ipData.ip}
            </h2>
            <button
              onClick={() => copyToClipboard(ipData.ip, 'main')}
              className="p-2.5 sm:p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors active:scale-95 flex-shrink-0"
              title="Copy IP address"
            >
              {copied === 'main' ? (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            {ipData.version}
          </span>
          
          {/* Show both IPv4 and IPv6 if available */}
          {(ipData.ipv4_address || ipData.ipv6_address) && (
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              {ipData.ipv4_address && ipData.ipv4_address.trim() !== "" && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-3 rounded-xl border-2 border-blue-200 flex-1 sm:flex-initial group hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 font-semibold mb-1">IPv4 Address</p>
                      <p className="text-sm sm:text-base text-blue-700 font-bold break-all">{ipData.ipv4_address}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(ipData.ipv4_address!, 'ipv4')}
                      className="p-2 bg-blue-200 hover:bg-blue-300 rounded-lg transition-all active:scale-95 flex-shrink-0"
                      title="Copy IPv4"
                    >
                      {copied === 'ipv4' ? (
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {ipData.ipv6_address && ipData.ipv6_address.trim() !== "" && (
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 px-4 py-3 rounded-xl border-2 border-indigo-200 flex-1 sm:flex-initial group hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 font-semibold mb-1">IPv6 Address</p>
                      <p className="text-sm sm:text-base text-indigo-700 font-bold break-all">{ipData.ipv6_address}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(ipData.ipv6_address!, 'ipv6')}
                      className="p-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg transition-all active:scale-95 flex-shrink-0"
                      title="Copy IPv6"
                    >
                      {copied === 'ipv6' ? (
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white rounded-lg p-2 sm:p-3 flex-shrink-0">
                <span className="text-2xl sm:text-3xl">📍</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Location</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                  {ipData.city}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 truncate">
                  {ipData.region && ipData.region !== "Unknown" ? `${ipData.region}, ` : ""}
                  {ipData.country}
                </p>
                {ipData.timezone && (
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    🕐 {ipData.timezone}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white rounded-lg p-2 sm:p-3 flex-shrink-0">
                <span className="text-2xl sm:text-3xl">🏢</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  Internet Service Provider
                </p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                  {ipData.isp}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white rounded-lg p-2 sm:p-3 flex-shrink-0">
                <span className="text-2xl sm:text-3xl">🌐</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Browser</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                  {ipData.browser}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-orange-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-white rounded-lg p-2 sm:p-3 flex-shrink-0">
                <span className="text-2xl sm:text-3xl">💻</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Operating System</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                  {ipData.os}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="text-center">
          <button
            onClick={fetchIPData}
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base active:scale-95"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Privacy Note */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
            🔒 <strong>Privacy Note:</strong> Your IP information is fetched in
            real-time and is not stored on our servers.
          </p>
        </div>
      </div>
    </div>
  );
}
