import AuthRequired from "@/features/auth/components/auth-required";
import NotFound from "@/pages/errors/not-found";
import Home from "@/pages/home";
import { OtherRoutes } from "@/shared/constants/routes";
import { Route } from "react-router-dom";

// Root
export const rootRoute = (
  <Route
    path={OtherRoutes.Root}
    element={
      <AuthRequired>
        <Home />
      </AuthRequired>
    }
  ></Route>
);

// All
export const allRoute = (
  <Route path={OtherRoutes.All} element={<NotFound />}></Route>
);
