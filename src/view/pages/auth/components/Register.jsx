import { useRegister } from "../../../../api/services/auth_service/register";
import { useRegisterStore } from "../../../../store/register.store";
import CustomInput from "../../../customs/CustomInput";
import { ArrowLeftCircle, Orbit } from "lucide-react";
import VerifyEmail from "./VerifyEmail";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
const Register = () => {
  const navigate = useNavigate();
  const {
    mutateAsync: register,
    data: registerData,
    isPending: isRegistering,
    reset: resetRegisterInfo,
  } = useRegister();
  const {
    name,
    username,
    email,
    password,
    confirmedPassword,
    setField,
    error,
    validateRegisterInput,
  } = useRegisterStore();
  const handleRegister = async () => {
    if (isRegistering) return;
    if (validateRegisterInput()) {
      try {
        const response = await register({
          name,
          email,
          username,
          password,
        });
        if (response.success) {
          toast.dismissAll();
          toast.success("your account has been created.");
        }
      } catch (e) {
        toast.dismissAll();
        toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
      }
    }
  };
  return (
    <div className="w-full px-2">
      {!registerData ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="w-full pb-3">
            <ArrowLeftCircle
              onClick={() => {
                navigate(-1);
              }}
              className="cursor-pointer hover:text-purple-600"
            />
          </div>
          <CustomInput
            redNote={error.name}
            value={name}
            label={"Name"}
            onChangeFun={(e) => {
              setField("name", e);
            }}
          />
          <CustomInput
            redNote={error.username}
            label={"Username"}
            value={username}
            onChangeFun={(e) => {
              setField("username", e);
            }}
          />
          <CustomInput
            redNote={error.email}
            value={email}
            inputMode="email"
            label={"Email"}
            onChangeFun={(e) => {
              setField("email", e);
            }}
          />
          <CustomInput
            redNote={error.password}
            value={password}
            label={"Password"}
            onChangeFun={(e) => {
              setField("password", e);
            }}
          />
          <CustomInput
            redNote={error.confirmedPassword}
            value={confirmedPassword}
            label={"confirm Password"}
            onChangeFun={(e) => {
              setField("confirmedPassword", e);
            }}
          />
          <button
            data-pending={isRegistering}
            onClick={handleRegister}
            className="app-button mt-2 flex w-full justify-center"
          >
            {!isRegistering ? (
              "register"
            ) : (
              <Orbit
                size={18}
                className="animate-spin duration-500"
              />
            )}
          </button>
        </div>
      ) : (
        <>
          <VerifyEmail resetRegisterInfo={resetRegisterInfo} />
        </>
      )}
    </div>
  );
};

export default Register;
