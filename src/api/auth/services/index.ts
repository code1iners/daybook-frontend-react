import { JoinUserInput, JoinUserOutput } from "@/api/auth/types/auth";
import { axiosClient } from "@/api/core/axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/**
 * User join service.
 */
export const joinUser = async (input: JoinUserInput) =>
  axiosClient
    .post<JoinUserOutput>(`${SERVER_URL}/join`, {
      ...input,
    })
    .then(({ data }) => data);
