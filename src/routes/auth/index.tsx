import { Route } from "react-router-dom";
import Join from "@/pages/auth/join";
import Enter from "@/pages/auth/enter";
import { AuthRoutes } from "@/shared/constants/routes";
import AuthNotRequired from "@/features/auth/components/auth-not-required";

export const joinRoute = (
  <Route
    path={AuthRoutes.Join}
    element={
      <AuthNotRequired>
        <Join />
      </AuthNotRequired>
    }
  />
);
export const loginRoute = (
  <Route
    path={AuthRoutes.Login}
    element={
      <AuthNotRequired>
        <Enter />
      </AuthNotRequired>
    }
  />
);
