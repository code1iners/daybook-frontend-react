import { CoreOutput } from "@/api/core/types/core-output";

export interface JoinUserInput {
  userEmail: string;
  password: string;
  userName: string;
  birthday: string;
}

export interface JoinUserOutput extends CoreOutput {}
