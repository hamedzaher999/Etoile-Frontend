import z from "zod";
export const orderFormValidation = z.object({
  branch_id: z.uuid("Please select a branch"),

  contact: z
    .string()
    .trim()
    .regex(/^\+?[0-9]+$/, "Contact number must contain only numbers")
    .min(5, "Contact number is too short")
    .max(15, "Contact number is too long")
    .optional()
    .or(z.literal("")),

  location: z
    .string()
    .trim()
    .min(10, "Please enter a more detailed delivery location"),
});
