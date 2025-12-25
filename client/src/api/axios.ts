import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.PUBLIC_VITE_BACKEND_URL}/api`,
  withCredentials: true,
});

export default instance;
