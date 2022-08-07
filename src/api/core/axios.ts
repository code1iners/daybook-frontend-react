import axios from "axios";

const SERVER_URL_V1 = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

// Initialize axios instance.
const axiosClient = axios.create({
  baseURL: SERVER_URL_V1,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Need authorization check.
    const { headers } = config;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosClient };
