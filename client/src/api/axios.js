import axios from "axios";
import { logError } from "./logs/apiLogs";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // 🔑 include cookies
});

api.interceptors.request.use(
  (config) => {
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
      console.error("Unauthorized! Logging out...");
      logError("Unauthorized access detected", error);
      // Later you can integrate with AuthContext instead of hard redirect
      window.location.href = "/login";
    } else {
      logError("Response error", error);
    }
    return Promise.reject(error);
  }
);

export default api;
