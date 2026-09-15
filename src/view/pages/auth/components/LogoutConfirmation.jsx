import { Orbit } from "lucide-react";
import { useLogout } from "../../../../api/services/auth_service/logout";
import { useUserStore } from "../../../../store/user.store";
import toast from "react-hot-toast";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
const LogoutConfirmation = ({ onSuccess = () => {} }) => {
  const clear = useUserStore((s) => s.clear);
  const { mutateAsync: logout, isPending: isLoggingOut } =
    useLogout();

  const handleLogout = async () => {
    if (isLoggingOut) return;
    try {
      const response = await logout({});
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
    <div className="min-w-[280px] px-6 py-5">
      <p className="text-sm text-white/80">
        Are you sure you want to logout?
      </p>

      <button
        disabled={isLoggingOut}
        onClick={handleLogout}
        className="app-button-action error mt-6 flex w-full items-center justify-center disabled:cursor-not-allowed disabled:opacity-55"
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
