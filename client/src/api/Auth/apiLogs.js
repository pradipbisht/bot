import api from "../axios";

export const logError = (message, error) => {
  console.error(`${message}:`, error.response?.data || error.message);
};

export const registerApi = async (name, email, password) => {
  try {
    const { data } = await api.post("/api/auth/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    logError("Error during registration", error);
    throw error;
  }
};

export const loginApi = async (email, password) => {
  try {
    const { data } = await api.post("/api/auth/login", { email, password });
    return data;
  } catch (error) {
    logError("Error during login", error);
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const { data } = await api.post("/api/auth/logout");
    return data;
  } catch (error) {
    logError("Error during logout", error);
    throw error;
  }
};

export const checkAuthApi = async () => {
  try {
    const { data } = await api.get("/api/auth/me");
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      return { user: null };
    }
    logError("Error fetching profile", error);
    throw error;
  }
};

export const googleLoginApi = async (credential) => {
  try {
    const { data } = await api.post("/api/auth/google", { token: credential });
    return data;
  } catch (error) {
    logError("Google login failed", error);
    throw error;
  }
};
