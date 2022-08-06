import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meAtom } from "@/stores/auth";
import { AuthRoutes } from "@/constants/routes";

interface AuthRequiredProps {
  children: JSX.Element;
}

export default function AuthRequired({ children }: AuthRequiredProps) {
  const location = useLocation();
  const { isLoggedIn } = useRecoilValue(meAtom);

  if (!isLoggedIn) {
    return (
      <Navigate
        to={AuthRoutes.Login}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}
