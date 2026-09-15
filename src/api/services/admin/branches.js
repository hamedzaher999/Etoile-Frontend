import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";

const getAllBranches = async () => {
  const result = await api.get("/dashboard/branches");
  return result;
};
export const useGetAllBranches = () => {
  return useQuery({
    queryKey: ["adminBranches"],
    queryFn: getAllBranches,
  });
};

const createBranch = async (body) => {
  const result = await api.post("/dashboard/branches", body);
  return result;
};
export const useCreateBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBranches"] });
    },
  });
};

const updateBranch = async ({ id, body }) => {
  const result = await api.patch(`/dashboard/branches/${id}`, body);
  return result;
};
export const useUpdateBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBranches"] });
    },
  });
};

const deleteBranch = async (id) => {
  const result = await api.delete(`/dashboard/branches/${id}`);
  return result;
};
export const useDeleteBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBranches"] });
    },
  });
};
