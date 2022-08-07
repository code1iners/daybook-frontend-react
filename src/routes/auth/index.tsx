import { Route } from "react-router-dom";
import Login from "@/pages/auth/login";
import { AuthRoutes } from "@/shared/constants/routes";

export const loginRoute = <Route path={AuthRoutes.Login} element={<Login />} />;
