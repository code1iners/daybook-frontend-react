import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meAtom } from "@/stores/auth";
import { authRoutes, diaryRoutes } from "@/constants/routes";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useRecoilValue(meAtom);

  useEffect(
    () =>
      navigate({
        pathname: isLoggedIn ? diaryRoutes.diaries : authRoutes.login,
      }),
    [isLoggedIn]
  );

  return <></>;
}
