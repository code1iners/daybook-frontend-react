import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meAtom } from "@/stores/auth";
import { AuthRoutes, DiaryRoutes } from "@/shared/constants/routes";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useRecoilValue(meAtom);

  useEffect(() => {
    navigate({
      pathname: isLoggedIn ? DiaryRoutes.Diaries : AuthRoutes.Login,
    });
  }, [isLoggedIn]);

  return <></>;
}
