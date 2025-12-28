import { create } from "zustand";
import type { isAuthenticated, User } from "../types/General.type";

export const useIsAuthenticated = create<isAuthenticated>((set) => ({
  isAuthenticated: false,
  user: {
    id: 0,
    user: "",
    password: "",
    email: "",
    role: "",
    image: "",
  },
  isAdmin: false,
  dispositivoAutorizado: false,

  setUser: (estado: User) => {
    set({ user: estado });
  },
  setIsAuthenticated: (estado: boolean) => {
    set({ isAuthenticated: estado });
  },
  setIsAdmin: (estado: boolean) => {
    set({ isAdmin: estado });
  },
    setDispositivoAutorizado: (estado: boolean) => {
    set({ dispositivoAutorizado: estado });
  },
}));
