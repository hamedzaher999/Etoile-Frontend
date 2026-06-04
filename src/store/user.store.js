import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  name: null,
  username: null,
  email: null,
  avatar_url: null,
  is_vip: false,
  setInfo: (data) => {
    set({
      name: data?.name || null,
      username: data?.username || null,
      email: data?.email || null,
      is_vip: data?.is_vip || false,
      avatar_url: data?.avatar_url || null,
    });
  },
  clear: () => {
    set({
      name: null,
      username: null,
      email: null,
      avatar_url: null,
      is_vip: false,
    });
  },
}));
