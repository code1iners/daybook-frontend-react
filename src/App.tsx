import { Routes } from "react-router-dom";
import { useScreenSize } from "@/shared/hooks/use-screen-size";
import { allRoute, rootRoute } from "@/routes/others";
import { loginRoute } from "@/routes/auth";
import {
  diaryListRoute,
  diaryRetrieveRoute,
  diaryNewRoute,
} from "@/routes/diaries";

export default function App() {
  useScreenSize();

  return (
    <Routes>
      {/* Authenticate */}
      {loginRoute}

      {/* Diary */}
      {diaryListRoute}
      {diaryRetrieveRoute}
      {diaryNewRoute}

      {/* Others */}
      {allRoute}
      {rootRoute}
    </Routes>
  );
}
