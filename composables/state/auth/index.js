export const useAuth = () =>
  useState("auth", () => ({
    authenticated: false,
  }));
