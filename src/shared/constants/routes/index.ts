// Authenticate
<<<<<<< Updated upstream:src/constants/routes/index.ts
export enum AuthRoutes {
  Login = "/login",
}

// Diary.
export enum DiaryRoutes {
  Diaries = "/diaries",
}

// Others
export enum OtherRoutes {
  Root = "/",
  Settings = "/settings",
  All = "*",
}

export enum UserRoutes {
  Me = "/me",
}
=======
export const AuthRoutes = {
  Login: `/login`,
} as const;

// Diary.
export const DiaryRoutes = {
  Diaries: `/diaries`,
  Retrieve: `/diaries/retrieve`,
} as const;

// User
export const UserRoutes = {
  Me: `/me`,
} as const;

// Others
export const OtherRoutes = {
  Root: `/`,
  Settings: `/settings`,
  All: "*",
} as const;
>>>>>>> Stashed changes:src/shared/constants/routes/index.ts
