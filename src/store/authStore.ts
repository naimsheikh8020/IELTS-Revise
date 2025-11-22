import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || "false"),

  login: () => {
    localStorage.setItem("isLoggedIn", "true");
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("isLoggedIn");
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
