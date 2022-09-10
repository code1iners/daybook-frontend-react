import { Routes } from "react-router-dom";
import { useScreenSize } from "@/shared/hooks/use-screen-size";
import { allRoute, rootRoute } from "@/routes/others";
import { joinRoute, loginRoute } from "@/routes/auth";
import {
  diaryListRoute,
  diaryRetrieveRoute,
  diaryNewRoute,
  diaryEditRoute,
} from "@/routes/diaries";

export default function App() {
  useScreenSize();

  return (
    <Routes>
      {/* Authenticate */}
      {joinRoute}
      {loginRoute}

      {/* Diary */}
      {diaryListRoute}
      {diaryRetrieveRoute}
      {diaryNewRoute}
      {diaryEditRoute}

      {/* Others */}
      {allRoute}
      {rootRoute}
    </Routes>
  );
}
