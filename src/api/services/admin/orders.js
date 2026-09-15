import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";

const getOrders = async ({ queryKey }) => {
  const [, filters] = queryKey;
  const result = await api.get("/dashboard/orders", {
    params: filters,
  });
  return result;
};
export const useGetAdminOrders = (filters = {}) => {
  return useQuery({
    queryKey: ["adminOrders", filters],
    queryFn: getOrders,
  });
};

const updateOrderStatus = async ({ id, status }) => {
  const result = await api.patch(`/dashboard/orders/${id}`, {
    status,
  });
  return result;
};
export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminOrders"] });
    },
  });
};
