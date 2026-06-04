import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const getReviews = async () => {
  const result = await api.get("/home/review");
  return result;
};

const createReview = async (body) => {
  const result = await api.post("/home/review", body);
  return result;
};
const createReport = async (body) => {
  const result = await api.post("/home/report", body);
  return result;
};
export const useGetReviews = () => {
  return useQuery({
    queryKey: ["getReview"],
    queryFn: getReviews,
    retry: 5,
  });
};

export const useCreateReview = () => {
  return useMutation({
    mutationFn: createReview,
  });
};

export const useCreateReport = () => {
  return useMutation({
    mutationFn: createReport,
  });
};
