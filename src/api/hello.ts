import { axiosClient } from "@/api/core/axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const hello = async () =>
  axiosClient.get(`${SERVER_URL}/hello`).then(({ data }) => data);
