import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";
const getFooterStructureAdmin = async () => {
  const result = await api.get("/home/footer");
  return result;
};
export const useGetFooterStructureAdmin = () => {
  return useQuery({
    queryKey: ["adminFooterStructure"],
    queryFn: getFooterStructureAdmin,
  });
};

const createFooterTitle = async (body) => {
  const result = await api.post("/dashboard/footer/titles", body);
  return result;
};
export const useCreateFooterTitle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createFooterTitle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminFooterStructure"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getFooterStructure"],
      });
    },
  });
};

const createFooterItem = async (body) => {
  const result = await api.post("/dashboard/footer/items", body);
  return result;
};
export const useCreateFooterItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createFooterItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminFooterStructure"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getFooterStructure"],
      });
    },
  });
};

const deleteFooterItem = async (id) => {
  const result = await api.delete(`/dashboard/footer/items/${id}`);
  return result;
};
export const useDeleteFooterItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFooterItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminFooterStructure"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getFooterStructure"],
      });
    },
  });
};
