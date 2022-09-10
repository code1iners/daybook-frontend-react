import { OtherRoutes } from "@/shared/constants/routes";
import { meAtom } from "@/stores/auth";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

interface AuthNotRequiredProps {
  children: JSX.Element;
}

export default function AuthNotRequired({ children }: AuthNotRequiredProps) {
  const location = useLocation();
  const { isLoggedIn } = useRecoilValue(meAtom);

  if (isLoggedIn) {
    return (
      <Navigate
        to={OtherRoutes.Root}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}
