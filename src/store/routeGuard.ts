import { create } from "zustand";

interface RouteGuardState {
  canAccessFeedback: boolean;
  allowAccess: () => void;
  resetAccess: () => void;
}

export const useRouteGuard = create<RouteGuardState>((set) => ({
  canAccessFeedback: false,
  allowAccess: () => set({ canAccessFeedback: true }),
  resetAccess: () => set({ canAccessFeedback: false }),
}));
