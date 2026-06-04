import { create } from "zustand";
import {
  loginSchema,
  otpSchema,
  registerSchema,
} from "../api/validations/auth.validation";
import z from "zod";

const registerForm = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmedPassword: "",
  otp: "",
  otpError: null,
  error: {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  },
};

export const useRegisterStore = create((set, get) => ({
  ...registerForm,
  setField: (filed, value) => set({ [filed]: value }),
  reset: () =>
    set({
      ...registerForm,
    }),

  clearError: () => set({ error: {} }),
  validateLoginInput: () => {
    const state = get();
    const result = loginSchema.safeParse({
      username: state.username,
      email: state.email,
      password: state.password,
    });
    if (result.success) {
      set({ error: {} });
      return true;
    } else {
      const fieldErrors = z.flattenError(result.error).fieldErrors;
      set({
        error: {
          username: fieldErrors.username?.[0] || "",

          email: fieldErrors.email?.[0] || "",

          password: fieldErrors.password?.[0] || "",
        },
      });

      return false;
    }
  },

  validateRegisterInput: () => {
    const state = get();
    const result = registerSchema.safeParse({
      name: state.name,
      username: state.username,
      email: state.email,
      password: state.password,
      confirmedPassword: state.confirmedPassword,
    });

    if (result.success) {
      set({ error: {} });

      return true;
    }

    const fieldErrors = result.error.flatten().fieldErrors;

    set({
      error: {
        name: fieldErrors.name?.[0] || "",

        username: fieldErrors.username?.[0] || "",

        email: fieldErrors.email?.[0] || "",

        password: fieldErrors.password?.[0] || "",

        confirmedPassword: fieldErrors.confirmedPassword?.[0] || "",
      },
    });

    return false;
  },
  validateOtp: () => {
    const otp = get().otp;
    const result = otpSchema.safeParse({ otp });
    if (result.success) {
      set({ otpError: null });
      return true;
    } else {
      const otpError = z.flattenError(result.error).fieldErrors
        .otp?.[0];
      set({ otpError: otpError });
      return false;
    }
  },
}));
