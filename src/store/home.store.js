import { create } from "zustand";

export const useHomeStore = create((set, get) => ({
  isPageLoaded: false,

  setField: (field, value) => set({ [field]: value }),
}));
