import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../axios";
const getSettingByBranch = async ({ queryKey }) => {
  const [, branchId] = queryKey;
  const result = await api.get(`/dashboard/settings/${branchId}`);
  return result;
};
export const useGetSettingByBranch = (branchId) => {
  return useQuery({
    queryKey: ["adminSetting", branchId],
    queryFn: getSettingByBranch,
    enabled: !!branchId,
    retry: false,
  });
};

const createSetting = async (body) => {
  const result = await api.post("/dashboard/settings", body);
  return result;
};
export const useCreateSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSetting,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["adminSetting", variables.branch_id],
      });
    },
  });
};

const updateSetting = async ({ branchId, body }) => {
  const result = await api.patch(
    `/dashboard/settings/${branchId}`,
    body,
  );
  return result;
};
export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSetting,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["adminSetting", variables.branchId],
      });
    },
  });
};

const restartSetting = async (branchId) => {
  const result = await api.post(
    `/dashboard/settings/${branchId}/restart`,
  );
  return result;
};
export const useRestartSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: restartSetting,
    onSuccess: (_, branchId) => {
      queryClient.invalidateQueries({
        queryKey: ["adminSetting", branchId],
      });
    },
  });
};
