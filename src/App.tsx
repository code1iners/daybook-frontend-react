import { Routes, Route } from "react-router-dom";
import AuthRequired from "@/features/auth/components/auth-required";
import { AuthRoutes, DiaryRoutes, OtherRoutes } from "@/constants/routes";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryDetail from "@/pages/diaries/diary-detail";
import NotFound from "@/pages/errors/not-found";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";

function App() {
  return (
    <Routes>
      {/* Root */}
      <Route
        path={OtherRoutes.Root}
        element={
          <AuthRequired>
            <Home />
          </AuthRequired>
        }
      ></Route>

      {/* Authenticate */}
      <Route path={AuthRoutes.Login} element={<Login />}></Route>

      {/* Diary */}
      <Route
        path={DiaryRoutes.Diaries}
        element={
          <AuthRequired>
            <DiaryList />
          </AuthRequired>
        }
      ></Route>
      <Route
        path={`${DiaryRoutes.Diaries}/:id`}
        element={
          <AuthRequired>
            <DiaryDetail />
          </AuthRequired>
        }
      ></Route>

      {/* All */}
      <Route path={OtherRoutes.All} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
