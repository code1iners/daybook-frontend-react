import { atom } from "recoil";

export const meAtom = atom({
  key: "meAtom",
  default: {
    isLoggedIn: false,
    accessToken: undefined,
  },
});
