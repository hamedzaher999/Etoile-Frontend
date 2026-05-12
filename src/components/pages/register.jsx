import { useState } from "react";
import Navbar from "../Navbar";
import CustomInput from "../customs/CustomInput";
import CustomDropdown from "../customs/Customdropdown";
import { useReducer } from "react";
import { validateEmail } from "../../functoins/Validations";
import { formReducer, formInitialState } from "../../RegisterReducer";
import { europeanCountries } from "../../store/types";
import { handelEmptyFields } from "../../functoins/handelEmptyFields";
const Register = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [state, dispatch] = useReducer(formReducer, formInitialState);
  return (
    <>
      <section className=" bg-space2 flex   flex-col bg-cover bg-center w-screen h-screen items-center ">
        <Navbar />
        <div className=" xl:px-20 flex lg:flex-row  flex-col items-center lg:items-start justify-around w-full md:pt-16 pt-3 ">
          <div className=" lg:px-7 lg:flex-row flex flex-col  py-5 w-[70%] relative border border-gray-500  md:w-[60%]  bg-[#3b0a4783] rounded-2xl my-3 ">
            <div className="lg:w-[50%]">
              <CustomInput
                redNote={state.error.firstName}
                label={"first Name"}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "firstName",
                    value: e,
                  });
                }}
              />
              <CustomInput
                redNote={state.error.lastName}
                label={"last Name"}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "lastName",
                    value: e,
                  });
                }}
              />
              <CustomInput
                redNote={state.error.email}
                value={state.value.email}
                label={"Email"}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "email",
                    value: e,
                  });
                  console.log(state);
                }}
                onBlurFun={() => {
                  dispatch({
                    type: "ERROR",
                    field: "email",
                    error: validateEmail(state.value.email),
                  });
                }}
              />

              <CustomInput
                redNote={state.error.phoneNumber}
                label={"Phone number"}
                note={"Please provide either your email or phone number."}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "phoneNumber",
                    value: e,
                  });
                }}
              />
              <CustomInput
                redNote={state.error.password}
                label={"Password"}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "password",
                    value: e,
                  });
                  if (e === state.value.confirmPassword) {
                    dispatch({
                      type: "DELETE",
                      field: "password",
                    });
                    dispatch({
                      type: "DELETE",
                      field: "confirmPassword",
                    });
                  } else {
                    dispatch({
                      type: "ERROR",
                      field: "password",
                      error: "Passwords don't match",
                    });
                  }
                }}
              />
              <CustomInput
                redNote={state.error.confirmPassword}
                label={"confirm Password"}
                onChangeFun={(e) => {
                  dispatch({
                    type: "UPDATE",
                    field: "confirmPassword",
                    value: e,
                  });
                  if (e === state.value.password) {
                    dispatch({
                      type: "DELETE",
                      field: "confirmPassword",
                    });
                    dispatch({
                      type: "DELETE",
                      field: "password",
                    });
                  } else {
                    dispatch({
                      type: "ERROR",
                      field: "confirmPassword",
                      error: "Passwords don't match",
                    });
                  }
                }}
              />
            </div>
            <div className="lg:w-[50%]">
              <p className="font-serif mb-3 text-[20px]  mx-5 lg:pt-0 pt-5">
                Shipping Address
              </p>
              <div className="flex flex-row">
                <CustomDropdown
                  label={"Country"}
                  options={Object.keys(europeanCountries)}
                  setValueFun={(opt) => {
                    dispatch({
                      type: "UPDATE",
                      field: "country",
                      value: opt,
                    });
                  }}
                />{" "}
                <CustomDropdown
                  label={"City"}
                  options={
                    europeanCountries[state.value.country] != null
                      ? europeanCountries[state.value.country]
                      : []
                  }
                  setValueFun={(opt) => {
                    dispatch({
                      type: "UPDATE",
                      city: "city",
                      value: opt,
                    });
                  }}
                />
              </div>
              <CustomInput
                label={"Street Address"}
                note={"Your chocolates will be sent to this address"}
              />

              <CustomDropdown
                className={"w-[50%]"}
                label={"Payment method"}
                options={["paypal", "Mastercard"]}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
          </div>
          {paymentMethod ? (
            <div className="w-[70%] md:w-[30%]  h-[500px] border border-gray-500 bg-[#3b0a4783] rounded-2xl my-3 "></div>
          ) : (
            <div></div>
          )}
        </div>
        <button
          onClick={() => {
            handelEmptyFields(state, dispatch);
            console.log(state);
          }}
          className="absolute top-[70px] p-5  items-center flex h-5 bg-red-500 z-50"
        >
          submit
        </button>
      </section>
    </>
  );
};

export default Register;
