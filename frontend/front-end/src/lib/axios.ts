import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const getTokenFromCookies = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const match = document.cookie.match(/(?:^|;\s*)token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
};

api.interceptors.request.use((config) => {
  const token = getTokenFromCookies();

  if (token) {
    const headers = axios.AxiosHeaders.from(config.headers || {});
    headers.set("Authorization", `Bearer ${token}`);
    config.headers = headers;
  }

  return config;
});

export default api;