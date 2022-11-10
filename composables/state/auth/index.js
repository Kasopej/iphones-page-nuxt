export const useAuth = () =>
  useState("auth", () => ({
    authenticated: false,
  }));

export const useToken = () => useState("userToken", () => null);
