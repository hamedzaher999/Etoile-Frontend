import { useMutation } from "@tanstack/react-query";
import { api } from "../../axios";

export const login = async (body) => {
  const response = await api.post("/auth/login", body);
  return response.data;
};

export const useLogin = () => {
  return useMutation({ mutationFn: login });
};
