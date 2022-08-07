import { Route } from "react-router-dom";
import DiaryList from "@/pages/diaries/diary-list";
import DiaryNew from "@/pages/diaries/diary-new";
import DiaryRetrieve from "@/pages/diaries/diary-retrieve";
import AuthRequired from "@/features/auth/components/auth-required";
import { DiaryRoutes } from "@/shared/constants/routes";

export const diaryListRoute = (
  <Route
    path={DiaryRoutes.Diaries}
    element={
      <AuthRequired>
        <DiaryList />
      </AuthRequired>
    }
  />
);

export const diaryRetrieveRoute = (
  <Route
    path={`${DiaryRoutes.Diaries}/:id`}
    element={
      <AuthRequired>
        <DiaryRetrieve />
      </AuthRequired>
    }
  />
);

export const diaryNewRoute = (
  <Route
    path={DiaryRoutes.New}
    element={
      <AuthRequired>
        <DiaryNew />
      </AuthRequired>
    }
  />
);
