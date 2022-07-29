import { Routes, Route } from "react-router-dom";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryDetail from "@/pages/diaries/diary-detail";
import NotFound from "@/pages/errors/not-found";
import Login from "@/pages/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="diaries" element={<DiaryList />}></Route>
      <Route path="diaries/:id" element={<DiaryDetail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
