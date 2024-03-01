import { create } from "zustand";
import Cookies from "js-cookie";
export const useUserStore = create((set) => ({
  userEmail: Cookies.get("user"),
  updateUser: (val: string) => {
    console.log(val);

    set({ userEmail: val });
  },
}));
