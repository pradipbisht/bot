import api from "../axios";

export const sendContactMessage = async (formData) => {
  try {
    const { data } = await api.post("/api/contact", formData);
    return data;
  } catch (err) {
    const serverMessage =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.response?.data?.detail;
    const message = serverMessage || err.message || "Failed to send message";
    const error = new Error(message);
    error.response = err.response;
    throw error;
  }
};
