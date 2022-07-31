import { CoreOutput } from "@/api/core/types/core-output";

export interface CreateUserInput {
  userEmail: string;
  password: string;
  userName: string;
  birthday: string;
}

export interface CreateUserOutput extends CoreOutput {}
