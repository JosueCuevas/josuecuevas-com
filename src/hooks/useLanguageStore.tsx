import { create } from "zustand";

type LangState = "es" | "en";

type initialState = {
  lang: "es" | "en";
  handleLang: (l: LangState) => void;
};

export const useLanguageStore = create<initialState>((set) => ({
  lang: "es",
  handleLang: (newLang) => set({ lang: newLang }),
}));
