import { useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const getBranches = async () => {
  const result = await api.get("/order/branches");
  return result;
};

export const useGetBranches = () => {
  return useQuery({
    queryKey: ["getBranches"],
    queryFn: getBranches,
  });
};
