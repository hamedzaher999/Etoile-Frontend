import {
  useResendOtp,
  useVerityEmail,
} from "../../../../api/services/auth_service/register";
import { ArrowLeftCircle, RotateCwIcon } from "lucide-react";
import CustomInput from "../../../customs/CustomInput";
import { useRegisterStore } from "../../../../store/register.store";
import { useNavigate } from "react-router-dom";
import ResendCode from "./ResendCode";
import toast from "react-hot-toast";

const VerifyEmail = ({ resetRegisterInfo }) => {
  const navigate = useNavigate();
  const {
    mutateAsync: verify,
    isError: isVerifyError,
    error: verifyError,
    data: verifyData,
    isPending: isVerifying,
    reset: resetVerify,
  } = useVerityEmail();
  const { otp, validateOtp, otpError, email, setField } =
    useRegisterStore();

  const handleVerify = async () => {
    if (validateOtp()) {
      const response = await verify({
        email: email,
        otp: otp,
      });
      if (response.success) {
        navigate("/", { replace: true });
      } else {
        toast.dismissAll();
        toast.error(
          response?.message ||
            "some thing went wrong, please try again.",
        );
      }
    }
    return;
  };

  return (
    <div className="w-full flex-col items-center justify-center">
      <div className="w-full pb-5">
        <ArrowLeftCircle
          onClick={resetRegisterInfo}
          className="cursor-pointer hover:text-purple-600"
        />
      </div>
      <CustomInput
        redNote={otpError || verifyData?.message}
        maxLength={6}
        value={otp}
        label={"Verification Code"}
        onChangeFun={(e) => {
          setField("otp", e);
        }}
      />
      <button
        data-pending={isVerifying}
        onClick={() => {
          handleVerify();
        }}
        className="app-button w-full"
      >
        {!isVerifying ? (
          "verify"
        ) : (
          <RotateCwIcon
            size={18}
            className="animate-spin duration-500"
          />
        )}
      </button>
      <p className="pt-8 text-[10px]">
        the code was send to this email{" "}
        <span className="text-purple-400"> {email}</span>
      </p>
      <div className="flex w-full flex-row justify-between">
        <p
          onClick={() => {
            resetRegisterInfo();
            resetVerify();
          }}
          className="cursor-pointer pt-5 text-[10px] text-blue-500"
        >
          change Email ?
        </p>
        <ResendCode />
      </div>
    </div>
  );
};

export default VerifyEmail;
