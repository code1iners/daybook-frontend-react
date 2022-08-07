// Authenticate
export const AuthRoutes = {
  Login: `/login`,
} as const;

// Diary.
export const DiaryRoutes = {
  Diaries: `/diaries`,
  Retrieve: `/diaries/retrieve`,
  New: `/diaries/new`,
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
