import { JoinUserInput, JoinUserOutput } from "@/api/auth/types/auth";
import { axiosClient } from "@/api/core/axios";

/**
 * [POST /api/v1/join] User join service.
 */
export const joinUser = async (input: JoinUserInput) =>
  axiosClient
    .post<JoinUserOutput>(`/join`, {
      ...input,
    })
    .then(({ data }) => data);
