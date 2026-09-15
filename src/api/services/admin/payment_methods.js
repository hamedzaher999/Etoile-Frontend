import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";

const getAllPaymentMethodsAdmin = async () => {
  const result = await api.get("/dashboard/payment_methods");
  return result;
};
export const useGetAllPaymentMethodsAdmin = () => {
  return useQuery({
    queryKey: ["adminPaymentMethods"],
    queryFn: getAllPaymentMethodsAdmin,
  });
};

const createPaymentMethod = async (body) => {
  const result = await api.post("/dashboard/payment_methods", body);
  return result;
};
export const useCreatePaymentMethod = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPaymentMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminPaymentMethods"],
      });
    },
  });
};

const updatePaymentMethod = async ({ id, body }) => {
  const result = await api.patch(
    `/dashboard/payment_methods/${id}`,
    body,
  );
  return result;
};
export const useUpdatePaymentMethod = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePaymentMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminPaymentMethods"],
      });
    },
  });
};

const deletePaymentMethod = async (id) => {
  const result = await api.delete(`/dashboard/payment_methods/${id}`);
  return result;
};
export const useDeletePaymentMethod = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePaymentMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminPaymentMethods"],
      });
    },
  });
};
