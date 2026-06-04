import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../axios";

const getCountries = async () => {
  const result = await api.get("/order/countries");
  return result;
};

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["getCountries"],
    queryFn: getCountries,
  });
};

const getCountryCities = async ({ queryKey }) => {
  const [, countryId] = queryKey;
  console.log(countryId);
  const result = await api.get(
    `/order/countries/${countryId}/cities`,
  );
  return result;
};

export const useGetCities = (countryId) => {
  return useQuery({
    queryKey: ["getCountryCities", countryId],
    queryFn: getCountryCities,
    enabled: !!countryId,
  });
};
