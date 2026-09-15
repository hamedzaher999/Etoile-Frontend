import { Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useUserStore } from "../../store/user.store";
import { useMe } from "../../api/services/auth_service/me";
import AppCanvas from "../canvas/AppCanvas";
import AdminGuard from "./admin/AdminGuard";

import { lazy } from "react";
import LoadingScreen from "../shared/LoadingPage";

const Home = lazy(() => import("./home/Home"));
const PlanetsPage = lazy(() => import("./planets/PlanetsPage"));
const Auth = lazy(() => import("./auth/Auth"));
const OrderPage = lazy(() => import("./order/OrderPage"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));

function App() {
  const { data } = useMe();
  const navigate = useNavigate();
  const setInfo = useUserStore((s) => s.setInfo);
  useEffect(() => {
    if (data?.data) {
      setInfo(data?.data);
      if (data?.data.type === "admin")
        navigate("/admin/dashboard", { replace: true });
    }
  }, [data]);
  return (
    <main className="relative h-[700px] min-w-[370px]">
      <div className="pointer-events-none absolute z-[-999] h-full w-full bg-black bg-space2 bg-cover bg-center bg-no-repeat" />
      <AppCanvas />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route
            path="/"
            element={
              <AdminGuard>
                <Home />
              </AdminGuard>
            }
          />
          <Route
            path="/collection"
            element={
              <AdminGuard>
                <PlanetsPage />
              </AdminGuard>
            }
          />
          <Route
            path="/register"
            element={
              <AdminGuard>
                <Auth />
              </AdminGuard>
            }
          />
          <Route
            path="/order"
            element={
              <AdminGuard>
                <OrderPage />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
