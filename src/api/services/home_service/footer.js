import { useQuery } from "@tanstack/react-query";
import { api } from "../../axios";
const getPaymentMethods = async () => {
  const result = await api.get("/order/payment_methods");
  return result;
};

export const useGetPaymentMethods = () => {
  return useQuery({
    queryKey: ["getPaymentMethods"],
    queryFn: getPaymentMethods,
  });
};

const getFooterStructure = async () => {
  const result = await api.get("/home/footer");
  return result;
};

export const useGetFooterStructure = () => {
  return useQuery({
    queryKey: ["getFooterStructure"],
    queryFn: getFooterStructure,
  });
};
