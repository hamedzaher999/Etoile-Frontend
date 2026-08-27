import { CheckSquare2, Orbit, Square } from "lucide-react";
import { useState } from "react";
import { useLogout } from "../../../../api/services/auth_service/logout";
import { useUserStore } from "../../../../store/user.store";
import toast from "react-hot-toast";
import { UNKNOWN_ERROR } from "../../../../constant/errors";

const LogoutConfirmation = ({ onSuccess = () => {} }) => {
  const [allSessions, setAllSessions] = useState(false);
  const CheckBox = allSessions ? CheckSquare2 : Square;
  const clear = useUserStore((s) => s.clear);

  const { mutateAsync: logout, isPending: isLoggingOut } =
    useLogout();
  const handleLogout = async () => {
    if (isLoggingOut) return;
    try {
      const response = await logout({
        allSessions: allSessions,
      });
      if (response.success) {
        clear();
        onSuccess?.();
        toast.dismissAll();
        toast.success("you have logged out successfully.");
      }
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };
  return (
    <div className="px-6 py-3">
      <p className="min-w-[280px]">
        Are you sur you want to logout this session ?
      </p>
      <div className="mt-3 flex flex-row items-center gap-3 text-gray-400">
        <CheckBox
          color={allSessions ? "red" : "#9ca3af"}
          size={20}
          className="cursor-pointer"
          onClick={() => setAllSessions((s) => !s)}
        />
        all session
      </div>
      <button
        disabled={isLoggingOut}
        onClick={handleLogout}
        className="app-button-action error mt-7 flex w-full items-center justify-center"
      >
        {isLoggingOut ? (
          <Orbit size={18} className="animate-spin" />
        ) : (
          "logout"
        )}
      </button>
    </div>
  );
};

export default LogoutConfirmation;
