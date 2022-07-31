import { CreateUserInput, CreateUserOutput } from "@/api/auth/types/auth";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/**
 * User create service.
 */
export const createUser = async (input: CreateUserInput) => {
  return await fetch(`${SERVER_URL}/join`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(input),
  }).then((res) => res.json());
};

/**
 * On Success handler.
 * @param response
 */
export const onUserCreated = (response: CreateUserOutput) => {
  console.log(response);
};
