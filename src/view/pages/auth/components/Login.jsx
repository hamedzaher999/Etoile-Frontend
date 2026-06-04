import { useLogin } from "../../../../api/services/auth_service/login";
import { useRegisterStore } from "../../../../store/register.store";
import CustomInput from "../../../customs/CustomInput";
import { Orbit } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../../store/user.store";
import { UNKNOWN_ERROR } from "../../../../constant/errors";

const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: login, isPending: isLoggingIn } = useLogin();
  const { setInfo } = useUserStore();
  const { email, password, setField, error, validateLoginInput } =
    useRegisterStore();
  const handleLogin = async () => {
    try {
      if (validateLoginInput()) {
        const response = await login({
          email,
          password,
        });
        toast.dismissAll();
        if (response?.success) {
          toast.success("login successfully");
          setInfo(response?.data);
          navigate("/", { replace: true });
        } else {
          toast.error(response?.message || UNKNOWN_ERROR);
        }
      }
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };
  return (
    <div className="w-full px-4 py-2">
      <CustomInput
        redNote={error.email}
        value={email}
        label={"Email"}
        onChangeFun={(e) => {
          setField("email", e);
        }}
      />
      <CustomInput
        redNote={error.password}
        label={"Password"}
        value={password}
        onChangeFun={(e) => {
          setField("password", e);
        }}
      />
      <button
        data-pending={isLoggingIn}
        onClick={() => {
          handleLogin();
        }}
        className="app-button mt-3 flex w-full justify-center"
      >
        {!isLoggingIn ? (
          "login"
        ) : (
          <Orbit size={18} className="animate-spin duration-500" />
        )}
      </button>
    </div>
  );
};

export default Login;
