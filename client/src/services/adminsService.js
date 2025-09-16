import api from "../api/axios";

// Admin-related API helpers
const adminsService = {
  fetchUsers: async () => {
    const { data } = await api.get("/api/user/get-all");
    return data;
  },
  fetchStats: async () => {
    const { data } = await api.get("/api/admin/stats");
    return data;
  },
  updateUser: async (id, payload) => {
    const { data } = await api.put(`/api/user/${id}`, payload);
    return data;
  },
  deleteUser: async (id) => {
    const { data } = await api.delete(`/api/user/${id}`);
    return data;
  },
  // Add more admin helpers as needed
};

export default adminsService;
