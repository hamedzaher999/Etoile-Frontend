import { useMutation } from "@tanstack/react-query";
import { api } from "../../axios";

export const logoutRequest = async (body) => {
  const response = await api.post("/auth/logout", body, {
    withCredentials: true,
  });
  return response.data;
};
export const useLogout = () => {
  return useMutation({
    mutationFn: logoutRequest,
  });
};
