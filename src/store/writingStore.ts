import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WritingState {
  responseText: string;
  setResponse: (t: string) => void;

  canAccessFeedback: boolean;
  allowFeedback: () => void;
  resetFeedback: () => void;
}

export const useWritingStore = create<WritingState>()(
  persist(
    (set) => ({
      responseText: "",
      setResponse: (t) => set({ responseText: t }),

      canAccessFeedback: false,
      allowFeedback: () => set({ canAccessFeedback: true }),
      resetFeedback: () => set({ canAccessFeedback: false }),
    }),
    {
      name: "writing-feedback-storage", // key name in localStorage
    }
  )
);
