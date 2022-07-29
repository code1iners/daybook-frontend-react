import { Routes, Route } from "react-router-dom";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryDetail from "@/pages/diaries/diary-detail";
import NotFound from "@/pages/errors/not-found";
import { useRecoilValue } from "recoil";
import { meAtom } from "./stores/auth";
import Login from "./pages/auth/login";
import MainLayout from "./layouts/main-layout";

function App() {
  const { isLoggedIn } = useRecoilValue(meAtom);
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Login /> : <Login />}></Route>
      <Route path="login" element={isLoggedIn ? <Login /> : <Login />}></Route>
      <Route path="diaries" element={<DiaryList />}></Route>
      <Route path="diaries/:id" element={<DiaryDetail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
