import { atom } from "recoil";

export const helloAtom = atom({
  key: "helloAtom",
  default: "world",
});
