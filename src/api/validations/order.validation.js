import z from "zod";

export const orderFormValidation = z.object({
  // package_id: z.uuid("Please select a valid package"),
  country_id: z.uuid("Please select a country"),
  city_id: z.uuid("Please select a city"),
  // payment_method_id: z.uuid("Please select a payment method"),

  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name is too long"),

  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers")
    .min(5, "Phone number is too short")
    .max(12, "Phone number is too long"),

  location: z
    .string()
    .trim()
    .min(10, "Please enter a more detailed delivery location"),
});
