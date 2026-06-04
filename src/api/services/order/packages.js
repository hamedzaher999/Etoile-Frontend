import { useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const getPackages = async () => {
  const result = await api.get("/order/packages");
  return result;
};

export const useGetPackages = () => {
  return useQuery({
    queryKey: ["getPackages"],
    queryFn: getPackages,
  });
};
