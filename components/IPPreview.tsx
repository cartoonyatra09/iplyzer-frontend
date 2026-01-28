"use client";

import { useEffect, useState } from "react";

interface IPData {
  ip: string;
  version: string;
  country: string;
  city: string;
  isp: string;
  browser: string;
  os: string;
  ipv4_address?: string;
  ipv6_address?: string;
}

export default function IPPreview() {
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
      
      console.log('🔍 Fetching IP data from:', apiUrl);
      
      // Fetch both my-ip and ipv6-check data
      const [myIpResponse, ipv6Response] = await Promise.all([
        fetch(`${apiUrl}/api/my-ip`),
        fetch(`${apiUrl}/api/ipv6-check`)
      ]);

      console.log('📡 My IP Response:', myIpResponse.status);
      console.log('📡 IPv6 Response:', ipv6Response.status);

      if (!myIpResponse.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const myIpData = await myIpResponse.json();
      const ipv6Data = ipv6Response.ok ? await ipv6Response.json() : null;
      
      console.log('✅ My IP Data:', myIpData);
      console.log('✅ IPv6 Data:', ipv6Data);
      
      // Merge data
      const mergedData = {
        ...myIpData,
        ipv4_address: ipv6Data?.ipv4_address || "",
        ipv6_address: ipv6Data?.ipv6_address || ""
      };
      
      console.log('🔗 Merged Data:', mergedData);
      
      setIpData(mergedData);
    } catch (err) {
      setError("Unable to fetch IP information");
      console.error("❌ Error fetching IP:", err);
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
      <div className="max-w-4xl mx-auto mt-3 sm:mt-4 px-3 sm:px-4">
        <div className="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-white/50">
          <div className="animate-pulse">
            <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg sm:rounded-xl w-3/4 mx-auto mb-3 sm:mb-4"></div>
            <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2 mx-auto mb-4 sm:mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-14 sm:h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg sm:rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-3 sm:mt-4 px-3 sm:px-4">
        <div className="bg-red-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-red-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl">⚠️</span>
            </div>
            <p className="text-sm sm:text-base text-red-600 font-medium mb-3 sm:mb-4">{error}</p>
            <button
              onClick={fetchIPData}
              className="bg-red-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg text-xs sm:text-sm"
            >
              🔄 Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!ipData) return null;

  return (
    <div className="max-w-4xl mx-auto mt-3 sm:mt-4 px-3 sm:px-4 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-white/50 hover:shadow-2xl transition-all duration-500">
        {/* Main IP Display */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs font-medium text-gray-500 mb-1.5 sm:mb-2 uppercase tracking-wider">Your IP Address</p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent break-all px-2">
              {ipData.ip}
            </h2>
            <button
              onClick={() => copyToClipboard(ipData.ip, 'main')}
              className="p-2 sm:p-2.5 bg-white/80 hover:bg-white rounded-lg transition-all hover:scale-110 active:scale-95 flex-shrink-0 shadow-sm"
              title="Copy IP address"
            >
              {copied === 'main' ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
            {ipData.version}
          </span>
          
          {/* Show both IPv4 and IPv6 if available */}
          {(ipData.ipv4_address || ipData.ipv6_address) && (
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 justify-center items-stretch text-xs sm:text-sm">
              {ipData.ipv4_address && ipData.ipv4_address.trim() !== "" && (
                <div className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-200 flex items-center justify-between gap-2 group hover:bg-blue-100 transition-colors">
                  <div className="flex-1">
                    <span className="text-gray-600 font-medium">IPv4:</span>{" "}
                    <span className="text-blue-700 font-semibold">{ipData.ipv4_address}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ipData.ipv4_address!, 'ipv4')}
                    className="p-1.5 hover:bg-blue-200 rounded transition-all active:scale-95 flex-shrink-0"
                    title="Copy IPv4"
                  >
                    {copied === 'ipv4' ? (
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              {ipData.ipv6_address && ipData.ipv6_address.trim() !== "" && (
                <div className="bg-indigo-50 px-3 py-2 rounded-lg border border-indigo-200 flex items-center justify-between gap-2 group hover:bg-indigo-100 transition-colors">
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-600 font-medium">IPv6:</span>{" "}
                    <span className="text-indigo-700 font-semibold break-all">{ipData.ipv6_address}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ipData.ipv6_address!, 'ipv6')}
                    className="p-1.5 hover:bg-indigo-200 rounded transition-all active:scale-95 flex-shrink-0"
                    title="Copy IPv6"
                  >
                    {copied === 'ipv6' ? (
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 border border-blue-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-lg sm:text-xl">📍</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 truncate">
                  {ipData.city}, {ipData.country}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 border border-purple-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-lg sm:text-xl">🏢</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">ISP</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 truncate">
                  {ipData.isp}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 border border-green-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-lg sm:text-xl">🌐</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Browser</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 truncate">
                  {ipData.browser}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 border border-orange-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-lg sm:text-xl">💻</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Operating System</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 truncate">
                  {ipData.os}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href="/my-ip"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-xs sm:text-sm"
          >
            <span>View Full Details</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
