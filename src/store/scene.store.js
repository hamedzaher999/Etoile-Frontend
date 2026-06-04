import { create } from "zustand";

export const useSceneStore = create((set) => ({
  activeScene: "homePage",

  setScene: (scene) => set({ activeScene: scene }),
}));
