import { Navigate } from "react-router-dom";
import { useUserStore } from "../../../store/user.store";

const AdminGuard = ({ children }) => {
  const type = useUserStore((u) => u.type);
  if (type === "admin")
    return <Navigate to="/admin/dashboard" replace />;
  return children;
};

export default AdminGuard;

// admin@example.com
// Password123!
