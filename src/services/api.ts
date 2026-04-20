import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

// Auto-attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// ── Public ──────────────────────────────────────────────────────
export const getProfile      = ()           => api.get('/profile')
export const getAbout        = ()           => api.get('/about')
export const getSkills       = ()           => api.get('/skills')
export const getExperiences  = ()           => api.get('/experiences')
export const getPortfolio    = (params?: object) => api.get('/portfolio', { params })
export const getPortfolioItem = (slug: string)  => api.get(`/portfolio/${slug}`)
export const getBlogs        = (params?: object) => api.get('/blogs', { params })
export const getBlog         = (slug: string)    => api.get(`/blogs/${slug}`)
export const getTestimonials = ()           => api.get('/testimonials')
export const sendContact     = (data: object) => api.post('/contact', data)

// ── Auth ─────────────────────────────────────────────────────────
export const login  = (data: object) => api.post('/login', data)
export const logout = ()              => api.post('/admin/logout')

export default api
