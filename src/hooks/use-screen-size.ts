import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isSmallScreenAtom } from "@/stores/configs";

const SMALL_SCREEN_REF_WIDTH = 768;

export const useScreenSize = () => {
  const setIsSmallScreen = useSetRecoilState(isSmallScreenAtom);

  const updateIsSmallScreen = () =>
    setIsSmallScreen(window.innerWidth < SMALL_SCREEN_REF_WIDTH);

  useEffect(() => {
    window.addEventListener("resize", updateIsSmallScreen);
    return () => window.removeEventListener("resize", updateIsSmallScreen);
  }, [setIsSmallScreen]);
};
