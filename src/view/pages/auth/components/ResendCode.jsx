import { useEffect, useState } from "react";
import { useResendOtp } from "../../../../api/services/auth_service/register";
import { useRegisterStore } from "../../../../store/register.store";
const ResendCode = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [tryCount, setTryCount] = useState(1);
  useEffect(() => {
    if (remainingSeconds > 0) return;
    const total = 30 * 1000 * tryCount;
    setRemainingSeconds(total / 1000);
    const timer = setInterval(() => {
      setRemainingSeconds((s) => (s > 0 ? s - 1 : s));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [tryCount]);
  const { mutate: resend } = useResendOtp();
  const { email } = useRegisterStore();
  return (
    <div className="flex flex-row items-center justify-center gap-3 pt-5">
      <p
        data-clickable={remainingSeconds === 0}
        onClick={() => {
          if (remainingSeconds > 0) return;
          setTryCount((c) => c + 1);
          resend({ email });
        }}
        className="cursor-pointer text-[10px] text-gray-400 data-[clickable=false]:cursor-not-allowed data-[clickable=true]:text-blue-500"
      >
        resend the code ?
      </p>
      {remainingSeconds !== 0 && (
        <p className="text-[10px]">{remainingSeconds}</p>
      )}
    </div>
  );
};

export default ResendCode;
