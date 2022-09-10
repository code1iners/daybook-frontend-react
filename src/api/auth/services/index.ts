import { axiosClient } from "@/api/core/axios";
import {
  CheckUserEmailInput,
  CheckUserEmailOutput,
  DeleteUserInput,
  DeleteUserOutput,
  JoinUserInput,
  JoinUserOutput,
  LoginUserInput,
  LoginUserOutput,
} from "@/api/auth/types/auth";

const URL_PREFIX = "/auth";
/**
 * [POST /api/v1/auth/check] Check user's email service.
 */
export const checkUserEmail = async (input: CheckUserEmailInput) =>
  axiosClient
    .post<CheckUserEmailOutput>(`${URL_PREFIX}/check`, { ...input })
    .then(({ data }) => data);

/**
 * [POST /api/v1/auth/join] User join service.
 */
export const joinUser = async (input: JoinUserInput) =>
  axiosClient
    .post<JoinUserOutput>(`${URL_PREFIX}/join`, { ...input })
    .then(({ data }) => data);

/**
 * [POST /api/v1/auth/login] User login service.
 */
export const loginUser = async (input: LoginUserInput) =>
  axiosClient
    .post<LoginUserOutput>(`${URL_PREFIX}/login`, { ...input })
    .then(({ data }) => data);

/**
 * [DELETE /api/v1/auth/{email}] Delete user service.
 */
export const deleteUser = async ({ email }: DeleteUserInput) =>
  axiosClient
    .delete<DeleteUserOutput>(`${URL_PREFIX}/${email}`)
    .then(({ data }) => data);
