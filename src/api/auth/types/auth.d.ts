import { CoreOutput } from "@/api/core/types/core-output";

export interface CheckUserEmailInput {
  email: string;
}
export interface CheckUserEmailOutput extends CoreOutput {
  data: boolean;
}

export interface JoinUserInput {
  email: string;
  password: string;
  name: string;
  birthday: string;
}

export interface JoinUserOutput extends CoreOutput {}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface LoginUserOutput extends CoreOutput {
  data: string;
}

export interface DeleteUserInput {
  email: string;
}

export interface DeleteUserOutput extends CoreOutput {}
