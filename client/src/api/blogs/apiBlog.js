// import api from "../axios";

// // Blog API helper (enhanced normalization & diagnostics)
// const apiBlog = {
//   listBlogs: async (params = {}, opts = {}) => {
//     const { debug = false } = opts;
//     const endpoints = [
//       "/api/blog/list",
//       "/api/blogs/list",
//       "/api/blog/all",
//       "/api/blogs/all",
//     ];

//     const pickArray = (root) => {
//       if (!root || typeof root !== "object") return [];
//       const directKeys = [
//         "data",
//         "blogs",
//         "results",
//         "items",
//         "docs",
//         "rows",
//         "list",
//       ];
//       for (const k of directKeys) if (Array.isArray(root[k])) return root[k];
//       if (root.data && typeof root.data === "object") {
//         for (const k of directKeys)
//           if (Array.isArray(root.data[k])) return root.data[k];
//         if (Array.isArray(root.data)) return root.data;
//       }
//       return [];
//     };

//     const deepSearchFirstArray = (val, depth = 0, maxDepth = 3) => {
//       if (!val || depth > maxDepth) return [];
//       if (Array.isArray(val)) return val;
//       if (typeof val === "object") {
//         for (const k of Object.keys(val)) {
//           const found = deepSearchFirstArray(val[k], depth + 1, maxDepth);
//           if (found.length) return found;
//         }
//       }
//       return [];
//     };

//     let lastErr;
//     for (const ep of endpoints) {
//       try {
//         const start = performance.now?.() || Date.now();
//         const { data } = await api.get(ep, { params });
//         const ms = (performance.now?.() || Date.now()) - start;
//         let posts = Array.isArray(data) ? data : pickArray(data);
//         if (!posts.length)
//           posts = deepSearchFirstArray(data).filter(
//             (p) => p && typeof p === "object"
//           );
//         if (posts.length && typeof posts[0] !== "object") posts = [];
//         if (debug) {
//           console.debug(
//             "[apiBlog] endpoint=",
//             ep,
//             "ms=",
//             ms.toFixed(1),
//             "postCount=",
//             posts.length,
//             "rawKeys=",
//             Object.keys(data || {})
//           );
//         } else if (!posts.length) {
//           console.warn(
//             "[apiBlog] Empty after normalization from",
//             ep,
//             "sample=",
//             data && typeof data === "object" ? Object.keys(data) : typeof data
//           );
//         }
//         return { posts, endpoint: ep, raw: data, ms };
//       } catch (err) {
//         lastErr = err;
//         const status = err?.response?.status;
//         if (debug)
//           console.warn(
//             "[apiBlog] fail",
//             ep,
//             status,
//             err?.response?.data || err.message
//           );
//         if (![400, 404, 405].includes(status)) break;
//       }
//     }
//     console.error(
//       "[apiBlog] All endpoints failed",
//       lastErr?.response?.data || lastErr?.message
//     );
//     throw lastErr || new Error("Failed to load blogs");
//   },
//   getBlog: async (id) => {
//     try {
//       const { data } = await api.get(`/api/blog/single/${id}`);
//       return data;
//     } catch (err) {
//       if (err?.response?.status === 404) {
//         const { data: data2 } = await api.get(`/api/blogs/single/${id}`);
//         return data2;
//       }
//       throw err;
//     }
//   },
//   createBlog: async (payload) => {
//     const headers =
//       payload instanceof FormData
//         ? { "Content-Type": "multipart/form-data" }
//         : { "Content-Type": "application/json" };
//     const { data } = await api.post(`/api/blog/create`, payload, { headers });
//     return data;
//   },
//   updateBlog: async (id, payload) => {
//     const headers =
//       payload instanceof FormData
//         ? { "Content-Type": "multipart/form-data" }
//         : { "Content-Type": "application/json" };
//     const { data } = await api.put(`/api/blog/update/${id}`, payload, {
//       headers,
//     });
//     return data;
//   },
//   deleteBlog: async (id) => {
//     const { data } = await api.delete(`/api/blog/delete/${id}`);
//     return data;
//   },
// };

// export default apiBlog;

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
    // payload can be FormData (for file upload) or a JSON object
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
