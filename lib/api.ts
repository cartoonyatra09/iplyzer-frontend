/**
 * API Utility for Backend Communication
 * Centralized API calls with error handling
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface FetchOptions extends RequestInit {
  timeout?: number;
}

/**
 * Fetch with timeout support
 */
async function fetchWithTimeout(url: string, options: FetchOptions = {}) {
  const { timeout = 10000, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * GET request
 */
export async function apiGet<T>(endpoint: string): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const response = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail?.message || error.message || "Request failed");
    }

    return await response.json();
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout. Please try again.");
    }
    throw error;
  }
}

/**
 * POST request
 */
export async function apiPost<T>(endpoint: string, data: any): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const response = await fetchWithTimeout(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail?.message || error.message || "Request failed");
    }

    return await response.json();
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout. Please try again.");
    }
    throw error;
  }
}

/**
 * Get API URL
 */
export function getApiUrl(): string {
  return API_URL;
}

/**
 * Build full API endpoint URL
 */
export function buildApiUrl(endpoint: string): string {
  return `${API_URL}${endpoint}`;
}
