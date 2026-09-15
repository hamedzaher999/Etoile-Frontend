import { useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

export const meRequest = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: meRequest,
    retry: false,
  });
};
