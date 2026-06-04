import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const order = async (body) => {
  const response = await api.post("/order", body);
  return response;
};

export const useOrder = () => {
  return useMutation({
    mutationFn: order,
  });
};

//------------------------------------------

const myOrder = async () => {
  const response = await api.get("/order");
  return response;
};

export const getMyOrder = () => {
  return useQuery({
    queryKey: ["getMyOrder"],
    queryFn: myOrder,
  });
};

//------------------------------------------
