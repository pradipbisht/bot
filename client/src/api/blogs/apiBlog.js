import api from "../axios";

const apiBlog = {
  listBlogs: async (params = {}) => {
    const res = await api.get("/api/blog/list", { params });
    return res.data;
  },

  getBlog: async (id) => {
    const res = await api.get(`/api/blog/single/${id}`);
    return res.data;
  },

  createBlog: async (payload) => {
    const headers =
      payload instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" };
    const res = await api.post(`/api/blog/create`, payload, { headers });
    return res.data;
  },

  updateBlog: async (id, payload) => {
    const headers =
      payload instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" };
    const res = await api.put(`/api/blog/update/${id}`, payload, { headers });
    return res.data;
  },

  deleteBlog: async (id) => {
    const res = await api.delete(`/api/blog/delete/${id}`);
    return res.data;
  },
};

export default apiBlog;
