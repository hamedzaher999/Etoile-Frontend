import { useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const getPaymentMethods = async () => {
  const result = await api.get("/home/payment_methods");
  return result;
};

export const useGetPaymentMethods = () => {
  return useQuery({
    queryKey: ["getPaymentMethods"],
    queryFn: getPaymentMethods,
  });
};
