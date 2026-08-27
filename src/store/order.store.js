import { create } from "zustand";
import { orderFormValidation } from "../api/validations/order.validation";
import z from "zod";
import toast from "react-hot-toast";

const useOrderStore = create((set, get) => ({
  // UI
  isPageLoaded: false,
  // form field
  name: "",
  phone: "",
  location: "",
  country_id: "",
  city_id: "",
  selectedPackage: {},
  paymentMethod: {},
  errors: {},

  getOrderBody: () => {
    if (
      get().validate() &&
      get().selectedPackage &&
      get().paymentMethod
    ) {
      return {
        payment_method_id: get().paymentMethod?.id,
        package_id: get().selectedPackage?.id,
        country_id: get().country_id,
        city_id: get().city_id,
        delivery_location: get().location,
        receiver_phone: get().phone,
        receiver_name: get().name,
      };
    } else {
      toast.dismissAll();
      toast.error(
        "some thing wrong with your info, please try to fill this form again.",
      );
      return null;
    }
  },

  setField: (field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
      errors: { ...state.errors, [field]: undefined },
    }));
  },

  setIsPageLoaded: (value) => {
    set({ isPageLoaded: value });
  },

  clearErrors: () => {
    set({ errors: {} });
  },

  resetForm: () => {
    set({
      name: "",
      phone: "",
      location: "",
      country_id: "",
      city_id: "",
      selectedPackage: {},
      paymentMethod: {},
      errors: {},
    });
  },

  validate: () => {
    const { name, phone, location, country_id, city_id } = get();
    const currentData = {
      name,
      phone,
      location,
      country_id,
      city_id,
    };

    const result = orderFormValidation.safeParse(currentData);

    if (result.success) {
      set({ errors: {} });
      return true;
    }

    const flattened = z.flattenError(result.error);
    const fieldErrors = flattened.fieldErrors;

    const formattedErrors = {};
    Object.keys(fieldErrors).forEach((key) => {
      if (fieldErrors[key]?.[0]) {
        formattedErrors[key] = fieldErrors[key][0];
      }
    });

    set({ errors: formattedErrors });
    return false;
  },
}));

export const usePackageStore = create((set, get) => ({
  start: false,
  model: "VIP",
  isVipOpen: false,
  isClassicOpen: false,
  prevModel: "VIP",
  toggleOpen: () => {
    const filed =
      get().model === "VIP" ? "isVipOpen" : "isClassicOpen";
    set({ [filed]: !get()[filed], start: true });
  },
  togglePackage: () => {
    set({
      prevModel: get().model,
      model: get().model === "VIP" ? "CLASSIC" : "VIP",
      start: false,
    });
  },
}));

export default useOrderStore;
