import { useState } from "react";

import CustomDropdown from "../../../customs/CustomDropdown";
import CustomInput from "../../../customs/CustomInput";
import useOrderStore from "../../../../store/order.store";
import { useGetBranches } from "../../../../api/services/order/branches.api";
const OrderFormField = ({ setStep }) => {
  const { contact, location, setField, errors, validate } =
    useOrderStore();
  const [branch, setBranch] = useState(null);
  //
  const { data: branches, isLoading } = useGetBranches();

  return (
    <div className="flex min-h-full flex-col justify-between">
      <div className="mb-4">
        <CustomInput
          value={contact}
          redNote={errors?.["contact"]}
          onChangeFun={(e) => {
            setField("contact", e);
          }}
          label={"contact number"}
        />
        <CustomInput
          value={location}
          redNote={errors?.["location"]}
          onChangeFun={(e) => {
            setField("location", e);
          }}
          label={"location"}
        />
        <CustomDropdown
          error={errors?.["branch_id"]}
          value={branch}
          setValue={(opt) => {
            setBranch(opt);
            setField("branch_id", opt?.id);
          }}
          className={"w-full"}
          label={"branch"}
          options={branches?.data?.data}
          isLoading={isLoading}
        />
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
