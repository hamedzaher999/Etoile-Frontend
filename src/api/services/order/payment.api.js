import { useMutation } from "@tanstack/react-query";
import { api } from "../../axios";

const createPaymentIntent = async (order_id) => {
  const response = await api.post(`/order/${order_id}/pay`);
  return response;
};

export const useCreatePaymentIntent = () => {
  return useMutation({
    mutationFn: createPaymentIntent,
  });
};
