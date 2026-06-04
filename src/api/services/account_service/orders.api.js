import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";

const getCurrentOrder = async () => {
  const result = await api.get("/account/CurrentOrder");
  return result;
};

export const useGetCurrentOrder = () => {
  return useQuery({
    queryKey: ["getCurrentOrder"],
    queryFn: getCurrentOrder,
    enabled: false,
  });
};

export const cancelOrder = async (order_id) => {
  const response = await api.delete(`/account/orders/${order_id}`);
  return response;
};

export const useCancelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCurrentOrder"],
      });
    },
  });
};
