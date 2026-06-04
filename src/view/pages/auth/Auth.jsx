import { useEffect, useState } from "react";
import dotedPlanet from "../../../assets/dotedEarth.png";
import { useRegisterStore } from "../../../store/register.store";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "../home/Navbar";
import { useSceneStore } from "../../../store/scene.store";
const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const { clearError } = useRegisterStore();
  const setScene = useSceneStore((s) => s.setScene);
  useEffect(() => {
    setScene("authPage");
  }, []);
  return (
    <section className="flex min-h-screen w-screen min-w-[350px] flex-col items-center justify-center gap-5 bg-space2 bg-cover bg-center">
      <Navbar />
      {/* floating card */}
      <div className="app-card relative z-[1000] mt-[70px] flex min-h-fit w-[70%] flex-col justify-between overflow-hidden p-5 md:w-[60%] lg:flex-row lg:px-7">
        {/* shines */}
        <div className="pointer-events-none absolute -end-5 -top-[70px] z-0 aspect-square w-32 rounded-full bg-purple-500/50 blur-[75px]" />
        <div className="pointer-events-none absolute -bottom-[130px] left-1/2 z-0 aspect-square w-32 -translate-x-1/2 rounded-full bg-cyan-500/50 blur-[85px]" />
        {/*  */}
        <div className="flex flex-col items-center justify-center lg:w-[50%]">
          {isRegister ? <Register /> : <Login />}
          <p
            onClick={() => {
              setIsRegister((r) => !r);
              clearError();
            }}
            className="cursor-pointer pt-5 text-[10px] text-blue-500"
          >
            {isRegister
              ? "already have an account?"
              : "create account"}
          </p>
        </div>
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <img
            src={dotedPlanet}
            alt="planet"
            className="aspect-square w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;
