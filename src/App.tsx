import { Routes, Route } from "react-router-dom";
import AuthProvider from "@/components/auth/auth-provider";
import {
  rootPath,
  authRoutes,
  diaryRoutes,
  otherRoutes,
} from "@/constants/routes";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryDetail from "@/pages/diaries/diary-detail";
import NotFound from "@/pages/errors/not-found";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";

function App() {
  return (
    <Routes>
      {/* Root */}
      <Route path={rootPath} element={<Home />}></Route>

      {/* Authenticate */}
      <Route path={authRoutes.login} element={<Login />}></Route>

      {/* Diary */}
      <Route
        path={diaryRoutes.diaries}
        element={
          <AuthProvider>
            <DiaryList />
          </AuthProvider>
        }
      ></Route>
      <Route
        path={`${diaryRoutes.diaries}/:id`}
        element={
          <AuthProvider>
            <DiaryDetail />
          </AuthProvider>
        }
      ></Route>

      {/* All */}
      <Route path={otherRoutes.all} element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
