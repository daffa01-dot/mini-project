import { create } from "zustand";

interface User {
  id: string;
  namaLengkap: string;
  email: string;
  role: "DONATUR" | "SHELTER" | "SUPER_ADMIN";
}

interface AuthState {
  user: User | null;

  token: string | null;

  setUser: (user: User) => void;

  setToken: (token: string) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  token: null,

  setUser: (user) =>
    set({
      user,
    }),

  setToken: (token) =>
    set({
      token,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}));