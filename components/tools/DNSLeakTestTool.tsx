"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DNSServer {
  ip: string;
  country?: string;
  isp?: string;
  hostname?: string;
}

interface DNSLeakData {
  success: boolean;
  client_ip: string;
  client_country: string;
  client_isp: string;
  dns_servers: string[];
  dns_details: DNSServer[];
  leak_detected: boolean;
  risk_level: string;
  message: string;
  note: string;
}

export default function DNSLeakTestTool() {
  const [testing, setTesting] = useState(false);
  const [leakData, setLeakData] = useState<DNSLeakData | null>(null);
  const [dnsServers, setDnsServers] = useState<DNSServer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clientInfo, setClientInfo] = useState<{ ip: string; isp: string } | null>(null);

  useEffect(() => {
    // Auto-run test on mount
    runTest();
  }, []);

  const runTest = async () => {
    setTesting(true);
    setError(null);
    setLeakData(null);
    setDnsServers([]);

    try {
      // Get client IP first
      await fetchClientInfo();

      // Perform DNS leak test
      await performDNSLeakTest();
    } catch (err: any) {
      setError(err.message || "DNS leak test failed. Please try again.");
      console.error("DNS leak test error:", err);
    } finally {
      setTesting(false);
    }
  };

  const fetchClientInfo = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/my-ip`);
      const data = await response.json();
      setClientInfo({
        ip: data.ip,
        isp: data.isp,
      });
    } catch (err) {
      console.error("Error fetching client info:", err);
    }
  };

  const performDNSLeakTest = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/dns-leak-test`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to perform DNS leak test");
      }

      setLeakData(data);

      // Use DNS details from backend response
      if (data.dns_details && data.dns_details.length > 0) {
        setDnsServers(data.dns_details);
      }

      // Set client info from response
      if (data.client_ip) {
        setClientInfo({
          ip: data.client_ip,
          isp: data.client_isp || "Unknown",
        });
      }
    } catch (err: any) {
      throw new Error(err.message || "DNS leak test failed");
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "green";
      case "medium":
        return "yellow";
      case "high":
        return "red";
      default:
        return "gray";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low":
        return "✅";
      case "medium":
        return "⚠️";
      case "high":
        return "❌";
      default:
        return "❓";
    }
  };

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case "low":
        return "No Leak Detected";
      case "medium":
        return "Potential Leak";
      case "high":
        return "DNS Leak Detected";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-blue-200 mb-6 sm:mb-8">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <span className="text-2xl sm:text-3xl flex-shrink-0">ℹ️</span>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
              What is a DNS Leak?
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              A DNS leak occurs when your DNS queries are sent to your ISP's DNS servers instead of your VPN's DNS servers, 
              potentially exposing your browsing activity even when using a VPN. This test checks if your DNS requests are 
              being routed correctly.
            </p>
          </div>
        </div>
      </div>

      {/* Main Test Card */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-rose-200 mb-6 sm:mb-8">
        {testing ? (
          // Testing State
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full mb-4 animate-pulse">
              <span className="text-3xl sm:text-4xl">🔍</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 px-4">
              Testing for DNS Leaks...
            </h3>
            <p className="text-sm sm:text-base text-gray-600">Analyzing your DNS configuration</p>
          </div>
        ) : leakData ? (
          // Results State
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 ${
                  leakData.risk_level === "low"
                    ? "bg-green-100"
                    : leakData.risk_level === "medium"
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <span className="text-3xl sm:text-4xl">{getRiskIcon(leakData.risk_level)}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 px-4">
                {getRiskLabel(leakData.risk_level)}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4">{leakData.message}</p>
            </div>

            {/* Client Information */}
            {leakData && (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Your Connection
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Your IP Address</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-all">{leakData.client_ip}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Your Country</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{leakData.client_country}</p>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Your ISP</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-words">{leakData.client_isp}</p>
                  </div>
                </div>
              </div>
            )}

            {/* DNS Servers */}
            {dnsServers.length > 0 ? (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-purple-200 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  DNS Servers Detected ({dnsServers.length})
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {dnsServers.map((server, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 sm:p-4 border border-purple-200"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                          <p className="text-sm sm:text-base font-bold text-gray-900 font-mono break-all">
                            {server.ip}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Country</p>
                          <p className="text-sm sm:text-base font-bold text-gray-900">
                            {server.country}
                          </p>
                        </div>
                        <div className="sm:col-span-2 lg:col-span-1">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">ISP/Provider</p>
                          <p className="text-sm sm:text-base font-medium text-gray-900 break-words">
                            {server.isp}
                          </p>
                        </div>
                      </div>
                      {server.hostname && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Hostname</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-900 break-all">
                            {server.hostname}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : leakData.dns_servers[0] === "Unknown" ? (
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
                <p className="text-center text-sm sm:text-base text-gray-600">
                  Unable to detect DNS servers. This is common when using certain VPN configurations.
                </p>
              </div>
            ) : null}

            {/* Analysis */}
            <div
              className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${
                leakData.risk_level === "low"
                  ? "bg-green-50 border-green-200"
                  : leakData.risk_level === "medium"
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                What This Means
              </h4>
              <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                {leakData.risk_level === "low" && (
                  <>
                    <p className="flex items-start space-x-2">
                      <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                      <span>
                        Your DNS queries appear to be properly protected. No obvious leaks detected.
                      </span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                      <span>
                        If you're using a VPN, your DNS traffic is likely being routed through it correctly.
                      </span>
                    </p>
                  </>
                )}
                {leakData.risk_level === "medium" && (
                  <>
                    <p className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-0.5 flex-shrink-0">⚠</span>
                      <span>
                        DNS servers were detected. If you're using a VPN, verify these servers belong to your VPN provider.
                      </span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-0.5 flex-shrink-0">⚠</span>
                      <span>
                        Compare the DNS server locations with your VPN server location. They should match.
                      </span>
                    </p>
                  </>
                )}
                {leakData.risk_level === "high" && (
                  <>
                    <p className="flex items-start space-x-2">
                      <span className="text-red-600 mt-0.5 flex-shrink-0">✗</span>
                      <span>
                        <strong>DNS leak detected!</strong> Your DNS queries may be visible to your ISP.
                      </span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-red-600 mt-0.5 flex-shrink-0">✗</span>
                      <span>
                        If using a VPN, check your VPN settings and enable DNS leak protection.
                      </span>
                    </p>
                  </>
                )}
                <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-300">
                  {leakData.note}
                </p>
              </div>
            </div>

            {/* Retest Button */}
            <div className="mt-4 sm:mt-6 text-center">
              <button
                onClick={runTest}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-rose-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-rose-700 transition-colors"
              >
                🔄 Test Again
              </button>
            </div>
          </div>
        ) : null}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <p className="text-xs sm:text-sm text-red-700 flex items-start space-x-2">
              <span className="flex-shrink-0">⚠️</span>
              <span>{error}</span>
            </p>
            <button
              onClick={runTest}
              className="mt-4 w-full sm:w-auto px-6 py-2 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* How to Fix */}
      {leakData && leakData.risk_level !== "low" && (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-rose-200 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <span>🔧</span>
            <span>How to Fix DNS Leaks</span>
          </h3>
          <div className="space-y-3 sm:space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-rose-600 font-bold flex-shrink-0">1.</span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Enable DNS Leak Protection in Your VPN</p>
                <p className="text-xs sm:text-sm mt-1">Most VPN clients have a "DNS leak protection" option in settings. Enable it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-rose-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Use VPN's DNS Servers</p>
                <p className="text-xs sm:text-sm mt-1">Configure your system to use your VPN provider's DNS servers instead of your ISP's.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-rose-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Use Third-Party DNS</p>
                <p className="text-xs sm:text-sm mt-1">Consider using privacy-focused DNS like Cloudflare (1.1.1.1) or Quad9 (9.9.9.9).</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-rose-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Check VPN Connection</p>
                <p className="text-xs sm:text-sm mt-1">Ensure your VPN is fully connected before browsing. Reconnect if necessary.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200">
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
          <span>💡</span>
          <span>Understanding DNS Leaks</span>
        </h4>
        <div className="text-xs sm:text-sm text-gray-700 space-y-2">
          <p>
            <strong>What is DNS?</strong> Domain Name System translates website names (like google.com) into IP addresses.
          </p>
          <p>
            <strong>Why it matters:</strong> Your DNS queries reveal which websites you visit. If leaked to your ISP, 
            your browsing activity can be monitored even when using a VPN.
          </p>
          <p>
            <strong>VPN users:</strong> A properly configured VPN should route all DNS queries through its own servers, 
            not your ISP's servers.
          </p>
        </div>
      </div>
    </div>
  );
}
