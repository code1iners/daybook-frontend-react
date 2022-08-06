const PATH_PREFIX = "/api/v1";

// Authenticate
export const AuthRoutes = {
  Login: `${PATH_PREFIX}/login`,
} as const;

// Diary.
export const DiaryRoutes = {
  Diaries: `${PATH_PREFIX}/diaries`,
  Retrieve: `${PATH_PREFIX}/diaries/retrieve`,
} as const;

// User
export const UserRoutes = {
  Me: `${PATH_PREFIX}/me`,
} as const;

// Others
export const OtherRoutes = {
  Root: `${PATH_PREFIX}/`,
  Settings: `${PATH_PREFIX}/settings`,
  All: "*",
} as const;
