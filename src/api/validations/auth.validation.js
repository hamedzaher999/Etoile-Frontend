import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string("invalid name")
      .min(3, "Name must be at least 3 characters"),

    username: z
      .string("invalid username")
      .min(3, "name must be at least 3 characters"),

    email: z.email(),

    password: z
      .string()
      .min(8, "Password length must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase")
      .regex(/[0-9]/, "Must contain number"),
    confirmedPassword: z
      .string()
      .min(8, "Password length must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase")
      .regex(/[0-9]/, "Must contain number"),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    path: ["confirmedPassword"],
    error: "passwords do not match",
  });

export const loginSchema = z
  .object({
    email: z
      .email("Invalid email format.")
      .optional()
      .or(z.literal("")),
    username: z
      .string()
      .min(3, "username is too short")
      .optional()
      .or(z.literal("")),
    password: z
      .string()
      .min(8, "password must be at least 8 characters."),
  })
  .refine((data) => data.email || data.username, {
    message: "Either email or username is required.",
    path: ["email"],
  });

export const verifyEmailSchema = z.object({
  account_id: z.uuid(),

  otp: z.string().length(6),
});

export const changePasswordSchema = z.object({
  email: z.email("Invalid email format."),
  otp: z.string().length(6),
  new_password: z
    .string()
    .min(8, "password must be at least 8 characters."),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "must be 6 digits."),
});
