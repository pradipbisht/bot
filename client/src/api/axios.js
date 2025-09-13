import axios from "axios";
import { logError } from "./logs/apiLogs";

const api = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true, // 🔑 include cookies
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Rely on HTTP-only cookies for auth; do not attach tokens from localStorage
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    logError("Request error", error);
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
      logError("Unauthorized access detected", error);
      // Do NOT redirect here to avoid reload loops or multiple requests; let AuthContext handle logout
    } else {
      logError("Response error", error);
    }
    return Promise.reject(error);
  }
);

export default api;
