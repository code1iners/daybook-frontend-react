import { MeType } from "@/features/auth/types/me";
import { atom } from "recoil";

export const meAtom = atom<MeType>({
  key: "meAtom",
  default: {
    isLoggedIn: false,
    accessToken: undefined,
  },
});
