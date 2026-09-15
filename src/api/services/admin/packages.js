import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";

const getAllPackagesAdmin = async () => {
  const result = await api.get("/dashboard/packages");
  return result;
};
export const useGetAllPackagesAdmin = () => {
  return useQuery({
    queryKey: ["adminPackages"],
    queryFn: getAllPackagesAdmin,
  });
};

const createPackage = async (body) => {
  const result = await api.post("/dashboard/packages", body);
  return result;
};
export const useCreatePackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminPackages"] });
    },
  });
};

const updatePackage = async ({ id, body }) => {
  const result = await api.patch(`/dashboard/packages/${id}`, body);
  return result;
};
export const useUpdatePackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminPackages"] });
    },
  });
};
