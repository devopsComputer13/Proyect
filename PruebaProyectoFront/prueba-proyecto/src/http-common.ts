import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7005",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
