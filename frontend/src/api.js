import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // apne backend ka port likho
  withCredentials: true, // ye cookie bhejta aur leta hai
});

export default api;
