import { useEffect, useState } from "react";
import {
  useGetCities,
  useGetCountries,
} from "../../../../api/services/order/location";
import CustomDropdown from "../../../customs/CustomDropdown";
import CustomInput from "../../../customs/CustomInput";
import useOrderStore from "../../../../store/order.store";
const OrderFormField = ({ setStep }) => {
  const { name, phone, location, setField, errors, validate } =
    useOrderStore();
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  //
  const { data: countries } = useGetCountries();
  const { data: cities, isLoading } = useGetCities(country?.id);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mb-4">
        <CustomInput
          redNote={errors?.["name"]}
          value={name}
          onChangeFun={(e) => {
            setField("name", e);
          }}
          label={"name"}
        />
        <CustomInput
          value={phone}
          redNote={errors?.["phone"]}
          onChangeFun={(e) => {
            setField("phone", e);
          }}
          label={"phone number"}
        />
        <CustomInput
          value={location}
          redNote={errors?.["location"]}
          onChangeFun={(e) => {
            setField("location", e);
          }}
          label={"location"}
        />
        <div className="flex flex-row gap-3">
          <CustomDropdown
            error={errors?.["country_id"]}
            value={country}
            setValue={(opt) => {
              setCountry(opt);

              setCity(null);

              setField("country_id", opt?.id);
              setField("city_id", null);
            }}
            className={"w-[150px]"}
            label={"country"}
            options={countries?.data?.data}
          />
          <CustomDropdown
            error={errors?.["city_id"]}
            value={city}
            options={cities?.data?.data ?? []}
            setValue={(opt) => {
              setCity(opt);
              setField("city_id", opt?.["id"]);
            }}
            className={"w-[150px]"}
            label={"city"}
            isLoading={isLoading}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button
          onClick={() => {
            if (!validate()) {
              return;
            }
            setStep?.(2);
          }}
          className="app-button-action items-center justify-center"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default OrderFormField;
