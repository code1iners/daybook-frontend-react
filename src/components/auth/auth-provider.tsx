import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meAtom } from "@/stores/auth";

interface AuthProviderProps {
  children: JSX.Element;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const location = useLocation();
  const { isLoggedIn } = useRecoilValue(meAtom);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
