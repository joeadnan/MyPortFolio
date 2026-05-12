import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Public Blog
export const getBlogs = (params?: object) => api.get("/blogs", { params });
export const getBlog = (slug: string) => api.get(`/blogs/${slug}`);
export const getFeaturedBlogs = () => api.get("/blogs/featured");

// Admin Blog
export const getAdminBlogs = (params?: object) =>
  api.get("/admin/blogs", { params });

export const getAdminBlog = (id: number | string) =>
  api.get(`/admin/blogs/${id}`);

export const createBlogApi = (data: FormData) =>
  api.post("/admin/blogs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateBlogApi = (id: number | string, data: FormData) =>
  api.post(`/admin/blogs/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteBlogApi = (id: number | string) =>
  api.delete(`/admin/blogs/${id}`);

export default api;
