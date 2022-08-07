import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/api/core/axios";

export const hello = async () =>
  axiosClient.get(`/hello`).then(({ data }) => data);

export const useHello = () => useQuery(["helloApi"], () => hello());
