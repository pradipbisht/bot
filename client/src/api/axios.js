import axios from "axios";
import * as AuthApi from "./auth/apiLogs";

const baseURL =
  import.meta.env.VITE_API_URL?.trim() ||
  (typeof window !== "undefined" && window.__API_URL__) ||
  "http://localhost:5001";

const api = axios.create({
  baseURL,
  withCredentials: true, // 🔑 include cookies
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Rely on HTTP-only cookies for auth; do not attach tokens from localStorage
    if (import.meta.env.MODE !== "production") {
      console.log("Request sent:", config);
    }
    return config;
  },
  (error) => {
    AuthApi.logError("Request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Emit a global event so a single handler (AuthContext) can react exactly once
      try {
        window.dispatchEvent(
          new CustomEvent("auth:unauthorized", { detail: error })
        );
      } catch (e) {
        // In non-browser environments, ignore
      }
      AuthApi.logError("Unauthorized access detected", error);
      // Do NOT redirect here to avoid reload loops or multiple requests; let AuthContext handle logout
    } else {
      AuthApi.logError("Response error", error);
    }
    return Promise.reject(error);
  }
);

export default api;
