import { LucideOctagonAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterAlert = ({ closeCallback }) => {
  const navigate = useNavigate();
  return (
    <div className="flex max-h-72 w-80 flex-col gap-3 p-3">
      <div className="flex h-20 flex-col items-center gap-5 text-center">
        <p className="text-sm">sorry you should have an account</p>
        <LucideOctagonAlert />
      </div>

      <button
        onClick={() => {
          navigate("/register", { replace: false });
          closeCallback?.();
        }}
        className="app-button flex items-center justify-center"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterAlert;
