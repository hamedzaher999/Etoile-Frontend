import { create } from "zustand";
import { planets } from "../constant/planets";

export const usePlanetsStore = create((set, get) => ({
  currentPlanet: "Sun",
  planet: planets["Sun"],
  isDetailsOpen: false,
  isOpen: false,
  isPageLoaded: false,
  isPlanetLoaded: false,
  setCurrentPlanet: (planet) =>
    set({
      currentPlanet: planet,
      planet: planets[planet],
      isOpen: false,
      isPlanetLoaded: false,
    }),

  setIsOpen: () => set({ isOpen: !get().isOpen }),

  setIsDetailsOpen: () =>
    set({ isDetailsOpen: !get().isDetailsOpen }),

  setField: (field, value) => {
    set({ [field]: value });
  },
}));
