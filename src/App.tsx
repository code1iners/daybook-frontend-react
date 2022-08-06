import { Routes, Route } from "react-router-dom";
import AuthRequired from "@/features/auth/components/auth-required";
import { AuthRoutes, DiaryRoutes, OtherRoutes } from "@/constants/routes";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryRetrieve from "@/pages/diaries/diary-retrieve";
import NotFound from "@/pages/errors/not-found";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { useScreenSize } from "@/hooks/use-screen-size";

function App() {
  useScreenSize();

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
        path={`${DiaryRoutes.Retrieve}`}
        element={
          <AuthRequired>
            <DiaryRetrieve />
          </AuthRequired>
        }
      ></Route>

      {/* All */}
      <Route path={OtherRoutes.All} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
