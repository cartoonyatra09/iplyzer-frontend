"use client";

import { useState } from "react";
import Link from "next/link";

interface IPDetail {
  order: number;
  ip: string;
  location: {
    ip: string;
    country: string;
    city: string;
    region: string;
    isp: string;
    latitude?: number;
    longitude?: number;
  };
}

interface EmailTraceData {
  success: boolean;
  total_ips: number;
  ips: IPDetail[];
  metadata: {
    from: string | null;
    to: string | null;
    subject: string | null;
    date: string | null;
  };
  privacy_note: string;
  path_explanation: string;
}

export default function EmailTraceTool() {
  const [headerInput, setHeaderInput] = useState("");
  const [traceData, setTraceData] = useState<EmailTraceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrace = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!headerInput.trim()) {
      setError("Please paste the email header");
      return;
    }

    if (headerInput.trim().length < 50) {
      setError("Email header seems too short. Please paste the complete header.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setTraceData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/email-trace`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ header: headerInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail?.message || data.message || "Failed to trace email");
      }

      setTraceData(data);
    } catch (err: any) {
      setError(err.message || "Unable to trace email. Please try again.");
      console.error("Error tracing email:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setHeaderInput("");
    setTraceData(null);
    setError(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Privacy Notice - Prominent */}
      <div className="bg-green-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-green-200 mb-6 sm:mb-8">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <span className="text-2xl sm:text-3xl flex-shrink-0">🔒</span>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Your Privacy is Protected
            </h3>
            <div className="text-xs sm:text-sm text-gray-700 space-y-1">
              <p>✓ <strong>No Storage:</strong> Email headers are processed temporarily and never stored</p>
              <p>✓ <strong>No Logging:</strong> We don't keep any logs of your email data</p>
              <p>✓ <strong>Client-Side First:</strong> Processing happens securely without retention</p>
              <p>✓ <strong>GDPR Compliant:</strong> Full compliance with privacy regulations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-teal-200 mb-6 sm:mb-8">
        <form onSubmit={handleTrace} className="space-y-4">
          <div>
            <label
              htmlFor="header-input"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Paste Email Header
            </label>
            <textarea
              id="header-input"
              value={headerInput}
              onChange={(e) => setHeaderInput(e.target.value)}
              placeholder="Paste the complete email header here (including all 'Received:' lines)..."
              rows={12}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all font-mono"
            />
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: In Gmail, click the three dots → "Show original". In Outlook, right-click → "View message source"
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-red-700 flex items-start space-x-2">
                <span className="flex-shrink-0">⚠️</span>
                <span>{error}</span>
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 sm:px-8 py-2.5 sm:py-3 bg-teal-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
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
                  <span>Analyzing...</span>
                </span>
              ) : (
                "🔍 Trace Email"
              )}
            </button>
            {headerInput && (
              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Results */}
      {traceData && traceData.success && (
        <div className="space-y-4 sm:space-y-6">
          {/* Email Metadata */}
          {(traceData.metadata.from || traceData.metadata.subject) && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-teal-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span>📧</span>
                <span>Email Information</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {traceData.metadata.from && (
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">From</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-all">
                      {traceData.metadata.from}
                    </p>
                  </div>
                )}
                {traceData.metadata.to && (
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">To</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-all">
                      {traceData.metadata.to}
                    </p>
                  </div>
                )}
                {traceData.metadata.subject && (
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 sm:col-span-2">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Subject</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">
                      {traceData.metadata.subject}
                    </p>
                  </div>
                )}
                {traceData.metadata.date && (
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 sm:col-span-2">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Date</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      {traceData.metadata.date}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Email Path */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-teal-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
              <span>🗺️</span>
              <span>Email Path ({traceData.total_ips} hops)</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{traceData.path_explanation}</p>

            <div className="space-y-3 sm:space-y-4">
              {traceData.ips.map((ipDetail, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-teal-200"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                        {ipDetail.order}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                          <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 font-mono break-all">
                            {ipDetail.ip}
                          </p>
                          <Link
                            href={`/ip-location?ip=${ipDetail.ip}`}
                            className="text-xs sm:text-sm text-teal-700 hover:text-teal-900 font-medium mt-1 inline-block"
                          >
                            View Full Details →
                          </Link>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Location</p>
                          <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-words">
                            {ipDetail.location.city}, {ipDetail.location.country}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            {ipDetail.location.region}
                          </p>
                        </div>
                        <div className="sm:col-span-2">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">ISP / Organization</p>
                          <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 break-words">
                            {ipDetail.location.isp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Reminder */}
          <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-green-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              🔒 <strong>Privacy Note:</strong> {traceData.privacy_note}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
