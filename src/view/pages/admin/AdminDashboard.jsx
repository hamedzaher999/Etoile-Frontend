import { useEffect, useState } from "react";
import AdminBranches from "./components/AdminBranches";
import AdminFooter from "./components/AdminFooter";
import AdminOrders from "./components/AdminOrders";
import AdminPackages from "./components/AdminPackages";
import AdminPaymentMethods from "./components/AdminPaymentMethods";
import AdminSettings from "./components/AdminSettings";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../api/services/auth_service/logout";
import { useSceneStore } from "../../../store/scene.store";
import { useUserStore } from "../../../store/user.store";
import {
  ClipboardList,
  Building2,
  Package2,
  CreditCard,
  Settings2,
  Link2,
} from "lucide-react";
import { useMe } from "../../../api/services/auth_service/me";
import Orbit from "../../canvas/Orbit";

const TABS = {
  orders: AdminOrders,
  branches: AdminBranches,
  packages: AdminPackages,
  payment_methods: AdminPaymentMethods,
  settings: AdminSettings,
  footer: AdminFooter,
};
const TAB_ICONS = {
  orders: ClipboardList,
  branches: Building2,
  packages: Package2,
  payment_methods: CreditCard,
  settings: Settings2,
  footer: Link2,
};
const AdminDashboard = () => {
  const [tab, setTab] = useState("orders");
  const navigate = useNavigate();
  const name = useUserStore((s) => s.name);
  const type = useUserStore((s) => s.type);
  const clear = useUserStore((s) => s.clear);
  const setScene = useSceneStore((s) => s.setScene);
  const { mutateAsync: logout, isPending: isLoggingOut } =
    useLogout();
  const { isLoading: isMeLoading } = useMe();

  const ActiveTab = TABS[tab];

  useEffect(() => {
    setScene("adminPage");
  }, []);

  useEffect(() => {
    if (!isMeLoading && type !== "admin") {
      navigate("/", { replace: true });
    }
  }, [type, isMeLoading, navigate]);

  const handleLogout = async () => {
    try {
      await logout({});
    } catch (e) {
    } finally {
      clear();
      navigate("/", { replace: true });
    }
  };

  return (
    <section className="relative z-[1000] min-h-screen w-screen bg-space2 bg-cover bg-center p-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="app-text-gradient text-2xl font-black">
            Admin — {name}
          </h1>
          <button
            disabled={isLoggingOut}
            onClick={handleLogout}
            className="app-button error flex items-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoggingOut ? (
              <Orbit size={14} className="animate-spin" />
            ) : (
              "logout"
            )}
          </button>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.keys(TABS).map((t) => {
            const Icon = TAB_ICONS[t];
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                data-active={tab === t}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs capitalize text-white/60 transition-all duration-300 hover:border-purple-400/30 hover:text-white data-[active=true]:border-purple-400/40 data-[active=true]:bg-purple-500/20 data-[active=true]:text-white"
              >
                {Icon && <Icon size={14} />}
                {t.replace("_", " ")}
              </button>
            );
          })}
        </div>
        <ActiveTab />
      </div>
    </section>
  );
};

export default AdminDashboard;
