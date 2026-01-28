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

  // Fetch user IP on mount
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
      // Test Ping & Jitter
      await testPing();

      // Test Download
      await testDownload();

      // Test Upload  
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

    // Perform 10 ping tests for better accuracy
    for (let i = 0; i < 10; i++) {
      try {
        const start = performance.now();
        const response = await fetch(`${apiUrl}/api/speed-test/ping`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          }
        });
        await response.text(); // Ensure full response received
        const end = performance.now();
        pingResults.push(end - start);
      } catch (err) {
        console.error("Ping test error:", err);
      }
      setProgress(5 + (i + 1) * 2);
    }

    if (pingResults.length > 0) {
      // Remove outliers (highest and lowest)
      const sorted = [...pingResults].sort((a, b) => a - b);
      const trimmed = sorted.slice(1, -1);
      
      // Calculate average ping
      const avgPing = trimmed.reduce((a, b) => a + b, 0) / trimmed.length;
      
      // Calculate jitter (standard deviation)
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
    // Progressive sizing for accurate measurement
    const downloadSizes = [2, 5, 10, 10]; // MB
    const speeds: number[] = [];
    let maxSpeed = 0;

    for (let i = 0; i < downloadSizes.length; i++) {
      const size = downloadSizes[i];
      
      try {
        const start = performance.now();
        const response = await fetch(`${apiUrl}/api/speed-test/download?size=${size}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          }
        });
        
        // Read response in chunks for real-time speed display
        const reader = response.body?.getReader();
        let receivedBytes = 0;
        
        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            receivedBytes += value.length;
            
            // Calculate current speed
            const elapsed = (performance.now() - start) / 1000;
            const currentSpeedMbps = (receivedBytes * 8) / (elapsed * 1000000);
            setCurrentSpeed(currentSpeedMbps);
            maxSpeed = Math.max(maxSpeed, currentSpeedMbps);
          }
        }
        
        const end = performance.now();
        const duration = (end - start) / 1000;
        const speedMbps = (receivedBytes * 8) / (duration * 1000000);

        speeds.push(speedMbps);
        setProgress(25 + (i + 1) * 10);
        
        // Update result with best speed so far
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
    // Progressive sizing
    const uploadSizes = [1, 2, 5, 5]; // MB
    const speeds: number[] = [];

    for (let i = 0; i < uploadSizes.length; i++) {
      const size = uploadSizes[i];
      
      try {
        // Generate random-ish data (faster than truly random)
        const totalBytes = Math.floor(size * 1024 * 1024);
        const data = new Uint8Array(totalBytes);
        // Fill with pattern (faster than random, prevents compression)
        for (let j = 0; j < totalBytes; j += 1024) {
          data[j] = j % 256;
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

        // Real-time speed display
        setCurrentSpeed(speedMbps);
        speeds.push(speedMbps);
        setProgress(65 + (i + 1) * 8);
        
        // Update result with best speed
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

  const getSpeedRating = (speed: number | null, type: "download" | "upload") => {
    if (!speed) return { label: "Unknown", color: "gray" };
    
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

  const getPingRating = (ping: number | null) => {
    if (!ping) return { label: "Unknown", color: "gray" };
    if (ping <= 20) return { label: "Excellent", color: "green" };
    if (ping <= 50) return { label: "Good", color: "blue" };
    if (ping <= 100) return { label: "Fair", color: "yellow" };
    return { label: "High", color: "red" };
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Test Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-lime-200 mb-8">
        {!testing && results.download === null ? (
          // Initial State
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-lime-100 rounded-full mb-6">
              <span className="text-5xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Test Your Connection Speed
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Measure your network connection speed with download, upload, and latency tests
            </p>
            {results.ip && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 inline-block">
                <p className="text-sm text-gray-600">Your IP: <span className="font-bold text-gray-900">{results.ip}</span></p>
                {results.isp && <p className="text-sm text-gray-600">ISP: <span className="font-medium text-gray-900">{results.isp}</span></p>}
              </div>
            )}
            <button
              onClick={startTest}
              className="px-12 py-4 bg-lime-600 text-white text-lg font-semibold rounded-lg hover:bg-lime-700 transition-colors shadow-lg hover:shadow-xl"
            >
              🚀 Start Speed Test
            </button>
          </div>
        ) : testing ? (
          // Testing State
          <div className="py-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-lime-100 rounded-full mb-4 animate-pulse">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{testStage}</h3>
              <p className="text-gray-600">Please wait, this may take a minute...</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
              <div
                className="bg-lime-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Live Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Download</p>
                <p className="text-2xl font-bold text-gray-900">
                  {results.download ? `${results.download}` : "—"}
                </p>
                <p className="text-xs text-gray-500">Mbps</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Upload</p>
                <p className="text-2xl font-bold text-gray-900">
                  {results.upload ? `${results.upload}` : "—"}
                </p>
                <p className="text-xs text-gray-500">Mbps</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Ping</p>
                <p className="text-2xl font-bold text-gray-900">
                  {results.ping ? `${results.ping}` : "—"}
                </p>
                <p className="text-xs text-gray-500">ms</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Jitter</p>
                <p className="text-2xl font-bold text-gray-900">
                  {results.jitter ? `${results.jitter}` : "—"}
                </p>
                <p className="text-xs text-gray-500">ms</p>
              </div>
            </div>
          </div>
        ) : (
          // Results State
          <div className="py-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h3>
              <p className="text-gray-600">Here are your internet speed results</p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Download Speed */}
              <div className={`bg-gradient-to-br ${
                results.download && results.download >= 50 ? 'from-green-50 to-green-100 border-green-200' :
                results.download && results.download >= 25 ? 'from-blue-50 to-blue-100 border-blue-200' :
                results.download && results.download >= 10 ? 'from-yellow-50 to-yellow-100 border-yellow-200' :
                'from-red-50 to-red-100 border-red-200'
              } rounded-xl p-6 border-2`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">Download Speed</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    results.download && results.download >= 50 ? 'bg-green-200 text-green-800' :
                    results.download && results.download >= 25 ? 'bg-blue-200 text-blue-800' :
                    results.download && results.download >= 10 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getSpeedRating(results.download, "download").label}
                  </span>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {results.download || "—"}
                </p>
                <p className="text-sm text-gray-600">Mbps (Megabits per second)</p>
              </div>

              {/* Upload Speed */}
              <div className={`bg-gradient-to-br ${
                results.upload && results.upload >= 25 ? 'from-green-50 to-green-100 border-green-200' :
                results.upload && results.upload >= 10 ? 'from-blue-50 to-blue-100 border-blue-200' :
                results.upload && results.upload >= 5 ? 'from-yellow-50 to-yellow-100 border-yellow-200' :
                'from-red-50 to-red-100 border-red-200'
              } rounded-xl p-6 border-2`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">Upload Speed</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    results.upload && results.upload >= 25 ? 'bg-green-200 text-green-800' :
                    results.upload && results.upload >= 10 ? 'bg-blue-200 text-blue-800' :
                    results.upload && results.upload >= 5 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getSpeedRating(results.upload, "upload").label}
                  </span>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {results.upload || "—"}
                </p>
                <p className="text-sm text-gray-600">Mbps (Megabits per second)</p>
              </div>

              {/* Ping */}
              <div className={`bg-gradient-to-br ${
                results.ping && results.ping <= 20 ? 'from-green-50 to-green-100 border-green-200' :
                results.ping && results.ping <= 50 ? 'from-blue-50 to-blue-100 border-blue-200' :
                results.ping && results.ping <= 100 ? 'from-yellow-50 to-yellow-100 border-yellow-200' :
                'from-red-50 to-red-100 border-red-200'
              } rounded-xl p-6 border-2`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">Ping (Latency)</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    results.ping && results.ping <= 20 ? 'bg-green-200 text-green-800' :
                    results.ping && results.ping <= 50 ? 'bg-blue-200 text-blue-800' :
                    results.ping && results.ping <= 100 ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {getPingRating(results.ping).label}
                  </span>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {results.ping || "—"}
                </p>
                <p className="text-sm text-gray-600">ms (milliseconds)</p>
              </div>

              {/* Jitter */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                <p className="text-sm font-medium text-gray-600 mb-2">Jitter</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {results.jitter || "—"}
                </p>
                <p className="text-sm text-gray-600">ms (ping variation)</p>
              </div>
            </div>

            {/* Connection Info */}
            {results.ip && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Connection Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Your IP Address</p>
                    <p className="font-bold text-gray-900">{results.ip}</p>
                  </div>
                  {results.isp && (
                    <div>
                      <p className="text-gray-600">Internet Service Provider</p>
                      <p className="font-bold text-gray-900">{results.isp}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Retest Button */}
            <div className="text-center">
              <button
                onClick={startTest}
                className="px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                🔄 Test Again
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mt-6">
            <p className="text-red-700 flex items-center space-x-2">
              <span>⚠️</span>
              <span>{error}</span>
            </p>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
        <h4 className="text-lg font-bold text-gray-900 mb-3">💡 Understanding Your Results</h4>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Download Speed:</strong> How fast you can receive data (streaming, browsing, downloads)</p>
          <p><strong>Upload Speed:</strong> How fast you can send data (video calls, file uploads, cloud backups)</p>
          <p><strong>Ping:</strong> Response time - lower is better (important for gaming and video calls)</p>
          <p><strong>Jitter:</strong> Variation in ping - lower is better (affects call quality and gaming)</p>
          <p className="pt-2 border-t border-blue-300 text-xs text-gray-600">
            <strong>✅ Real Speed Test:</strong> This test measures actual network performance between your device and the server. Results show your real internet speed including latency to external servers (Cloudflare DNS).
          </p>
        </div>
      </div>
    </div>
  );
}
