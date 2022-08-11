import { Route } from "react-router-dom";
import Login from "@/pages/auth/login";
import { AuthRoutes } from "@/shared/constants/routes";
import Join from "@/pages/auth/join";

export const loginRoute = <Route path={AuthRoutes.Login} element={<Login />} />;
export const joinRoute = <Route path={AuthRoutes.Join} element={<Join />} />;
