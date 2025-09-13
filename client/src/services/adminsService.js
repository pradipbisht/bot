import api from "../api/axios";

// Admin-related API helpers
const adminsService = {
  fetchUsers: async () => {
    const { data } = await api.get("/api/user/all");
    return data;
  },
  fetchStats: async () => {
    const { data } = await api.get("/api/admin/stats");
    return data;
  },
  // Add more admin helpers as needed
};

export default adminsService;
