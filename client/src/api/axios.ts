import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.PUBLIC_VITE_BACKEND_URL}/api`,
  withCredentials: true,
});

// Interceptor de respuesta
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirigir al login
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default instance;

