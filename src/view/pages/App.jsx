import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useUserStore } from "../../store/user.store";
import Home from "./home/Home";
import PlanetsPage from "./planets/PlanetsPage";
import Auth from "./auth/Auth";
import OrderPage from "./order/OrderPage";
import { useMe } from "../../api/services/auth_service/me";
import AppCanvas from "../canvas/AppCanvas";
function App() {
  const { data, isError, isLoading } = useMe();
  const setInfo = useUserStore((s) => s.setInfo);
  useEffect(() => {
    console.log(data);
    if (data?.data) {
      setInfo(data?.data);
    }
  }, [data]);
  console.log(isLoading);
  return (
    <main className="relative h-[700px] min-w-[370px]">
      <div className="pointer-events-none absolute z-[-999] h-full w-full bg-black bg-space2 bg-cover bg-center bg-no-repeat" />
      <AppCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<PlanetsPage />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </main>
  );
}

export default App;
