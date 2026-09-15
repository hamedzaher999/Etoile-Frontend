import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAdminStore = create(
  persist(
    (set) => ({
      id: null,
      name: null,
      username: null,
      setAdmin: (data) => {
        set({
          id: data?.id || null,
          name: data?.name || null,
          username: data?.username || null,
        });
      },
      clear: () => {
        set({ id: null, name: null, username: null });
      },
    }),
    { name: "admin-storage" },
  ),
);
