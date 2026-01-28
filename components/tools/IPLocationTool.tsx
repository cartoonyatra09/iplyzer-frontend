"use client";

import { useState } from "react";

interface LocationData {
  ip: string;
  version: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
  continent: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  postal: string;
  isp: string;
  asn: string;
  currency: string;
  languages: string;
}

export default function IPLocationTool() {
  const [ipInput, setIpInput] = useState("");
  const [locationData, setLocationData] = useState<LocationData | null>(null);
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
      setLocationData(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/ip-lookup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: ipInput.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to lookup IP address");
      }

      const data = await response.json();
      setLocationData(data.data);
    } catch (err: any) {
      setError(err.message || "Unable to lookup IP address. Please try again.");
      console.error("Error looking up IP:", err);
    } finally {
      setLoading(false);
    }
  };

  const getMapUrl = (lat: number, lon: number) => {
    // Using OpenStreetMap embed
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.5},${lat - 0.5},${lon + 0.5},${lat + 0.5}&layer=mapnik&marker=${lat},${lon}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-green-200 mb-6 sm:mb-8">
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
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
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
                  "Lookup"
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
            {["8.8.8.8", "1.1.1.1", "208.67.222.222"].map((exampleIP) => (
              <button
                key={exampleIP}
                onClick={() => setIpInput(exampleIP)}
                className="text-xs sm:text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                {exampleIP}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {locationData && (
        <div className="space-y-4 sm:space-y-6">
          {/* Map Preview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 sm:px-6 py-3 sm:py-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                <span>📍</span>
                <span>Location Map</span>
              </h3>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <iframe
                src={getMapUrl(locationData.latitude, locationData.longitude)}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                title="IP Location Map"
              ></iframe>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 break-words">
                <strong>Coordinates:</strong> {locationData.latitude.toFixed(4)}, {locationData.longitude.toFixed(4)}
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-green-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
              <span>🌍</span>
              <span>Location Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* IP Address */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-5 border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">IP Address</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-all">{locationData.ip}</p>
                <span className="inline-block mt-2 bg-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {locationData.version}
                </span>
              </div>

              {/* Country */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-5 border border-green-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Country</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">
                  {locationData.country_code && (
                    <span className="mr-2 text-xl sm:text-2xl">
                      {String.fromCodePoint(
                        ...locationData.country_code
                          .toUpperCase()
                          .split("")
                          .map((char) => 127397 + char.charCodeAt(0))
                      )}
                    </span>
                  )}
                  {locationData.country}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{locationData.continent}</p>
              </div>

              {/* City & Region */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 sm:p-5 border border-purple-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">City & Region</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{locationData.city}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 break-words">{locationData.region}</p>
                {locationData.postal && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Postal: {locationData.postal}</p>
                )}
              </div>

              {/* Timezone */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 sm:p-5 border border-orange-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Timezone</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{locationData.timezone}</p>
                {locationData.utc_offset && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">UTC {locationData.utc_offset}</p>
                )}
              </div>

              {/* ISP */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 sm:p-5 border border-pink-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Internet Service Provider</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 break-words">{locationData.isp}</p>
              </div>

              {/* ASN */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 sm:p-5 border border-indigo-200">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">ASN</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 break-words">{locationData.asn}</p>
              </div>

              {/* Currency */}
              {locationData.currency && (
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 sm:p-5 border border-yellow-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Currency</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{locationData.currency}</p>
                </div>
              )}

              {/* Languages */}
              {locationData.languages && (
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 sm:p-5 border border-teal-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Languages</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 break-words">{locationData.languages}</p>
                </div>
              )}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
              🔒 <strong>Privacy Note:</strong> IP location data is approximate and represents the ISP's server location. Your queries are not stored on our servers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
