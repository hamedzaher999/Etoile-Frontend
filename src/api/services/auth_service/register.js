import { useMutation } from "@tanstack/react-query";
import { api } from "../../axios";

export const register = async (body) => {
  try {
    const res = await api.post("/auth/register", body);
    return res.data;
  } catch (err) {
    console.log("API ERROR:", err.response?.data || err.message);
    throw err;
  }
};

export const verityEmail = async (body) => {
  try {
    const res = await api.post("/auth/verify_email", body);
    return res.data;
  } catch (err) {
    console.log("API ERROR:", err.response?.data || err.message);
    throw err;
  }
};
export const resendOtp = async (body) => {
  try {
    const res = await api.post("/auth/resend_otp", body);
    return res.data;
  } catch (err) {
    console.log("API ERROR:", err.response?.data || err.message);
    throw err;
  }
};
export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};

export const useVerityEmail = () => {
  return useMutation({
    mutationFn: verityEmail,
  });
};
export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
  });
};
