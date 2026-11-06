import axios from "axios";

const BASE = (import.meta.env.VITE_API_URL || "http://localhost:3000")
  .replace(/\/+$/, "") // end ka / hata do
  .replace(/\/api$/, ""); // agar /api laga hai to hata do

const api = axios.create({
  baseURL: `${BASE}/api`, // hamesha ek hi baar /api lagega
  withCredentials: true,
});

export default api;
