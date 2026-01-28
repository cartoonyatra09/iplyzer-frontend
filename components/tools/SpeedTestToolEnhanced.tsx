"use client";

import { useState, useEffect } from "react";
import SpeedGauge from "../SpeedGauge";

interface SpeedTestResults {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  ip: string | null;
  isp: string | null;
  location: string | null;
}

export default function SpeedTestTool() {
  const [testing, setTesting] = useState(false);
  const [testStage, setTestStage] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [results, setResults] = useState<SpeedTestResults>({
    download: 0,
    upload: 0,
    ping: 0,
    jitter: 0,
    ip: null,
    isp: null,
    location: null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserIP();
  }, []);

  const fetchUserIP = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/my-ip`);
      const data = await response.json();
      setResults((prev) => ({
        ...prev,
        ip: data.ip,
        isp: data.isp || data.org,
        location: data.city && data.country ? `${data.city}, ${data.country}` : null,
      }));
    } catch (err) {
      console.error("Error fetching IP:", err);
    }
  };

  const startTest = async () => {
    setTesting(true);
    setError(null);
    setProgress(0);
    setCurrentSpeed(0);
    setResults({
      download: 0,
      upload: 0,
      ping: 0,
      jitter: 0,
      ip: results.ip,
      isp: results.isp,
      location: results.location,
    });

    try {
      await testPing();
      await testDownload();
      await testUpload();
      setTestStage("✅ Test Complete!");
      setProgress(100);
    } catch (err: any) {
      setError(err.message || "Speed test failed. Please try again.");
      console.error("Speed test error:", err);
    } finally {
      setTesting(false);
      setCurrentSpeed(0);
    }
  };

  const testPing = async () => {
    setTestStage("🔍 Testing Latency & Jitter...");
    setProgress(5);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const pingResults: number[] = [];

    for (let i = 0; i < 10; i++) {
      try {
        const start = performance.now();
        const response = await fetch(`${apiUrl}/api/speed-test/ping`, {
          method: "GET",
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" }
        });
        await response.text();
        const end = performance.now();
        pingResults.push(end - start);
      } catch (err) {
        console.error("Ping test error:", err);
      }
      setProgress(5 + (i + 1) * 2);
    }

    if (pingResults.length > 0) {
      const sorted = [...pingResults].sort((a, b) => a - b);
      const trimmed = sorted.slice(1, -1);
      const avgPing = trimmed.reduce((a, b) => a + b, 0) / trimmed.length;
      const variance = trimmed.reduce((sum, val) => sum + Math.pow(val - avgPing, 2), 0) / trimmed.length;
      const jitter = Math.sqrt(variance);

      setResults((prev) => ({
        ...prev,
        ping: Math.round(avgPing),
        jitter: Math.round(jitter),
      }));
    }

    setProgress(25);
  };

  const testDownload = async () => {
    setTestStage("⬇️ Testing Download Speed...");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const downloadSizes = [2, 5, 10, 10];
    const speeds: number[] = [];

    for (let i = 0; i < downloadSizes.length; i++) {
      const size = downloadSizes[i];
      
      try {
        const start = performance.now();
        const response = await fetch(`${apiUrl}/api/speed-test/download?size=${size}`, {
          method: "GET",
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" }
        });
        
        const reader = response.body?.getReader();
        let receivedBytes = 0;
        
        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            receivedBytes += value.length;
            
            const elapsed = (performance.now() - start) / 1000;
            const currentSpeedMbps = (receivedBytes * 8) / (elapsed * 1000000);
            setCurrentSpeed(currentSpeedMbps);
          }
        }
        
        const end = performance.now();
        const duration = (end - start) / 1000;
        const speedMbps = (receivedBytes * 8) / (duration * 1000000);

        speeds.push(speedMbps);
        setProgress(25 + (i + 1) * 10);
        
        setResults((prev) => ({
          ...prev,
          download: Math.round(Math.max(...speeds) * 10) / 10,
        }));
      } catch (err) {
        console.error("Download test error:", err);
      }
    }

    setProgress(65);
  };

  const testUpload = async () => {
    setTestStage("⬆️ Testing Upload Speed...");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const uploadSizes = [1, 2, 5, 5];
    const speeds: number[] = [];

    for (let i = 0; i < uploadSizes.length; i++) {
      const size = uploadSizes[i];
      
      try {
        const totalBytes = Math.floor(size * 1024 * 1024);
        const data = new Uint8Array(totalBytes);
        // Generate incompressible data pattern for accurate upload testing
        for (let j = 0; j < totalBytes; j++) {
          // Pseudo-random pattern that's hard to compress
          data[j] = (j * 7 + (j >> 3) * 13 + (j >> 6) * 31) % 256;
        }

        const start = performance.now();
        const response = await fetch(`${apiUrl}/api/speed-test/upload`, {
          method: "POST",
          body: data,
          cache: "no-store",
          headers: {
            "Content-Type": "application/octet-stream",
            "Cache-Control": "no-cache",
          },
        });
        await response.text();
        const end = performance.now();

        const duration = (end - start) / 1000;
        const speedMbps = (data.length * 8) / (duration * 1000000);

        setCurrentSpeed(speedMbps);
        speeds.push(speedMbps);
        setProgress(65 + (i + 1) * 8);
        
        setResults((prev) => ({
          ...prev,
          upload: Math.round(Math.max(...speeds) * 10) / 10,
        }));
      } catch (err) {
        console.error("Upload test error:", err);
      }
    }

    setProgress(97);
  };

  const getSpeedRating = (speed: number, type: "download" | "upload") => {
    if (type === "download") {
      if (speed >= 100) return { label: "Excellent", color: "green" };
      if (speed >= 50) return { label: "Good", color: "blue" };
      if (speed >= 25) return { label: "Fair", color: "yellow" };
      return { label: "Slow", color: "red" };
    } else {
      if (speed >= 50) return { label: "Excellent", color: "green" };
      if (speed >= 25) return { label: "Good", color: "blue" };
      if (speed >= 10) return { label: "Fair", color: "yellow" };
      return { label: "Slow", color: "red" };
    }
  };

  const getPingRating = (ping: number) => {
    if (ping <= 20) return { label: "Excellent", color: "green" };
    if (ping <= 50) return { label: "Good", color: "blue" };
    if (ping <= 100) return { label: "Fair", color: "yellow" };
    return { label: "High", color: "red" };
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-lime-200 mb-6 sm:mb-8">
        {!testing && results.download === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-lime-100 to-green-100 rounded-full mb-4 sm:mb-6 shadow-lg">
              <span className="text-4xl sm:text-5xl lg:text-6xl">⚡</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Test Your Internet Speed
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Measure your real network performance with accurate download, upload, and latency tests
            </p>
            {results.ip && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 inline-block border border-gray-200 mx-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-left">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Your IP Address</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-all">{results.ip}</p>
                  </div>
                  {results.isp && (
                    <div className="sm:border-l border-gray-300 sm:pl-6">
                      <p className="text-xs text-gray-500 mb-1">ISP</p>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words">{results.isp}</p>
                    </div>
                  )}
                  {results.location && (
                    <div className="sm:border-l border-gray-300 sm:pl-6">
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{results.location}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={startTest}
              className="w-full sm:w-auto px-10 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-lime-600 to-green-600 text-white text-base sm:text-lg lg:text-xl font-bold rounded-lg sm:rounded-xl hover:from-lime-700 hover:to-green-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              🚀 Start Speed Test
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Test takes approximately 30-45 seconds</p>
          </div>
        ) : testing ? (
          <div className="py-6 sm:py-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 px-4">{testStage}</h3>
              <p className="text-sm sm:text-base text-gray-600">Please wait while we measure your connection...</p>
            </div>

            {currentSpeed > 0 && (
              <div className="flex justify-center mb-6 sm:mb-8 px-4">
                <SpeedGauge 
                  speed={currentSpeed} 
                  maxSpeed={200}
                  label="Current Speed"
                />
              </div>
            )}

            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-6 sm:mb-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-lime-500 to-green-500 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center border border-blue-200">
                <p className="text-xs font-medium text-blue-600 mb-1 sm:mb-2">DOWNLOAD</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {results.download > 0 ? results.download.toFixed(1) : "—"}
                </p>
                <p className="text-xs text-gray-600 mt-1">Mbps</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center border border-purple-200">
                <p className="text-xs font-medium text-purple-600 mb-1 sm:mb-2">UPLOAD</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {results.upload > 0 ? results.upload.toFixed(1) : "—"}
                </p>
                <p className="text-xs text-gray-600 mt-1">Mbps</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center border border-green-200">
                <p className="text-xs font-medium text-green-600 mb-1 sm:mb-2">PING</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {results.ping > 0 ? results.ping : "—"}
                </p>
                <p className="text-xs text-gray-600 mt-1">ms</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center border border-amber-200">
                <p className="text-xs font-medium text-amber-600 mb-1 sm:mb-2">JITTER</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {results.jitter > 0 ? results.jitter : "—"}
                </p>
                <p className="text-xs text-gray-600 mt-1">ms</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-6 sm:py-8">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-4 shadow-lg">
                <span className="text-4xl sm:text-5xl">✅</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 px-4">Test Complete!</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">Here are your internet speed results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="flex justify-center">
                <SpeedGauge 
                  speed={results.download} 
                  maxSpeed={200}
                  label="Download Speed"
                />
              </div>
              <div className="flex justify-center">
                <SpeedGauge 
                  speed={results.upload} 
                  maxSpeed={100}
                  label="Upload Speed"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className={`bg-gradient-to-br ${
                results.download >= 100 ? 'from-green-50 to-green-100 border-green-300' :
                results.download >= 50 ? 'from-blue-50 to-blue-100 border-blue-300' :
                results.download >= 25 ? 'from-yellow-50 to-yellow-100 border-yellow-300' :
                'from-red-50 to-red-100 border-red-300'
              } rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 shadow-md`}>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-bold text-gray-700">⬇️ Download Speed</p>
                  <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${
                    results.download >= 100 ? 'bg-green-200 text-green-800' :
                    results.download >= 50 ? 'bg-blue-200 text-blue-800' :
                    results.download >= 25 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getSpeedRating(results.download, "download").label}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {results.download.toFixed(1)}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Mbps (Megabits per second)</p>
              </div>

              <div className={`bg-gradient-to-br ${
                results.upload >= 50 ? 'from-green-50 to-green-100 border-green-300' :
                results.upload >= 25 ? 'from-blue-50 to-blue-100 border-blue-300' :
                results.upload >= 10 ? 'from-yellow-50 to-yellow-100 border-yellow-300' :
                'from-red-50 to-red-100 border-red-300'
              } rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 shadow-md`}>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-bold text-gray-700">⬆️ Upload Speed</p>
                  <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${
                    results.upload >= 50 ? 'bg-green-200 text-green-800' :
                    results.upload >= 25 ? 'bg-blue-200 text-blue-800' :
                    results.upload >= 10 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getSpeedRating(results.upload, "upload").label}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {results.upload.toFixed(1)}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Mbps (Megabits per second)</p>
              </div>

              <div className={`bg-gradient-to-br ${
                results.ping <= 20 ? 'from-green-50 to-green-100 border-green-300' :
                results.ping <= 50 ? 'from-blue-50 to-blue-100 border-blue-300' :
                results.ping <= 100 ? 'from-yellow-50 to-yellow-100 border-yellow-300' :
                'from-red-50 to-red-100 border-red-300'
              } rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 shadow-md`}>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-bold text-gray-700">📡 Ping (Latency)</p>
                  <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${
                    results.ping <= 20 ? 'bg-green-200 text-green-800' :
                    results.ping <= 50 ? 'bg-blue-200 text-blue-800' :
                    results.ping <= 100 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getPingRating(results.ping).label}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {results.ping}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">ms (milliseconds)</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-purple-300 shadow-md">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-bold text-gray-700">📊 Jitter</p>
                  <span className="text-xs font-bold px-2 sm:px-3 py-1 rounded-full bg-purple-200 text-purple-800">
                    {results.jitter <= 5 ? "Excellent" : results.jitter <= 15 ? "Good" : "High"}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {results.jitter}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">ms (ping variation)</p>
              </div>
            </div>

            {results.ip && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-gray-200 mb-6 sm:mb-8 shadow-sm">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="mr-2">🌐</span> Connection Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">IP Address</p>
                    <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg break-all">{results.ip}</p>
                  </div>
                  {results.isp && (
                    <div>
                      <p className="text-gray-600 mb-1">Service Provider</p>
                      <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg break-words">{results.isp}</p>
                    </div>
                  )}
                  {results.location && (
                    <div className="sm:col-span-2 lg:col-span-1">
                      <p className="text-gray-600 mb-1">Location</p>
                      <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">{results.location}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={startTest}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-lime-600 to-green-600 text-white text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:from-lime-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                🔄 Test Again
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-300 rounded-lg sm:rounded-xl p-4 sm:p-5 mt-4 sm:mt-6 shadow-sm">
            <p className="text-xs sm:text-sm text-red-700 flex items-start space-x-2 font-medium">
              <span className="text-lg sm:text-xl flex-shrink-0">⚠️</span>
              <span>{error}</span>
            </p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-blue-200 shadow-lg">
        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
          <span className="mr-2">💡</span> Understanding Your Results
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700">
          <div className="bg-white bg-opacity-60 rounded-lg p-3 sm:p-4">
            <p className="font-bold text-gray-900 mb-1">⬇️ Download Speed</p>
            <p>How fast you receive data - affects streaming, browsing, and downloads</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded-lg p-3 sm:p-4">
            <p className="font-bold text-gray-900 mb-1">⬆️ Upload Speed</p>
            <p>How fast you send data - important for video calls, uploads, and cloud backups</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded-lg p-3 sm:p-4">
            <p className="font-bold text-gray-900 mb-1">📡 Ping (Latency)</p>
            <p>Response time - lower is better for gaming and real-time applications</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded-lg p-3 sm:p-4">
            <p className="font-bold text-gray-900 mb-1">📊 Jitter</p>
            <p>Ping consistency - lower is better for stable video calls and gaming</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-300">
          <p className="text-xs text-gray-600 flex items-start">
            <span className="mr-2 text-green-600 font-bold flex-shrink-0">✅</span>
            <span><strong>Real Speed Test:</strong> This test measures actual network performance by downloading and uploading real data to our servers. Results reflect your true internet speed including all network overhead and latency.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
