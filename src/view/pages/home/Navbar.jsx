import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Package2,
  Rocket,
  User2,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";
import { useUserStore } from "../../../store/user.store";
import { navLinks } from "../../../constant";
import { storeLogo } from "../../../assets";
import { useLogout } from "../../../api/services/auth_service/logout";
import CurrentOrder from "./components/CurrentOrder";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { name, is_vip, clear } = useUserStore();
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const { mutateAsync: logout, isPending: isLoggingOut } =
    useLogout();
  const handleLogout = async (allSessions = false) => {
    if (isLoggingOut) return;
    const response = await logout({
      allSessions,
    });
    if (response.success) {
      clear();
      setToggle(false);
    }
  };
  //
  return (
    <div className="pointer-events-auto">
      <nav className="fixed left-0 top-0 z-[1200] w-full border-b border-white/10 bg-black/25 backdrop-blur-2xl">
        {/* top glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-[120px]" />

        <div className="mx-auto flex h-[65px] max-w-[1600px] items-center justify-between px-5 lg:px-10">
          {/* ================= LOGO ======================= */}

          <Link
            to="/"
            className="group relative flex items-center gap-4"
          >
            <img
              src={storeLogo}
              alt="logo"
              className="inset-0 h-[40px] w-[40px] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            />

            <h1 className="app-text-gradient font-serif text-2xl font-black tracking-tight md:text-3xl">
              Étoile
            </h1>
          </Link>

          {/* ===================== large screen nav  ================= */}

          {!isRegisterPage && (
            <>
              <div className="hidden items-center gap-3 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.id}
                    className="group relative overflow-hidden rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:text-white"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span>{link.title}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* ======================== customer type badge ================= */}
                {name && (
                  <div
                    className={`relative flex h-[40px] select-none items-center justify-center gap-2 rounded-full border backdrop-blur-xl max-lg:aspect-square lg:px-4 lg:py-2 ${
                      is_vip
                        ? `border-yellow-300/20 bg-yellow-400/10 text-yellow-200`
                        : `border-purple-400/20 bg-black/20 text-purple-300`
                    } `}
                  >
                    {is_vip ? (
                      <Rocket color="gold" size={15} />
                    ) : (
                      <Sparkles color="purple" size={15} />
                    )}

                    <span className="hidden text-xs lg:flex">
                      {is_vip ? "VIP Explorer" : "Explorer"}
                    </span>
                  </div>
                )}

                {name && <CurrentOrder />}

                {name && (
                  <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-black/20 text-purple-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:text-cyan-300">
                    <User2 size={18} />
                  </button>
                )}

                {!name ? (
                  <Link
                    replace={false}
                    style={{
                      letterSpacing: 2.5,
                    }}
                    to="/register"
                    className="app-button hidden md:flex"
                  >
                    Register
                  </Link>
                ) : (
                  <button
                    style={{
                      letterSpacing: 2.5,
                    }}
                    onClick={() => handleLogout(true)}
                    className="app-button error hidden items-center gap-2 text-sm lg:flex"
                  >
                    <LogOut color="red" size={16} />
                    Logout
                  </button>
                )}

                {/* mobile toggle */}
                {!isRegisterPage && (
                  <button
                    onClick={() => setToggle((t) => !t)}
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 lg:hidden"
                  >
                    {toggle ? <X size={18} /> : <Menu size={18} />}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </nav>

      {/* ================= mobile menu =========================== */}

      {toggle && !isRegisterPage && (
        <>
          <div
            onClick={() => setToggle(false)}
            className="fixed inset-0 z-[1400] bg-black/60 backdrop-blur-sm md:hidden"
          />
          {/* menu */}
          <div className="fixed left-1/2 top-1/2 z-[1500] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] border border-white/10 bg-black/35 p-6 shadow-[0_0_60px_rgba(120,0,255,0.18)] backdrop-blur-2xl md:hidden">
            <div className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

            <div className="relative z-10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.id}
                    onClick={() => setToggle(false)}
                    className="app-button"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                {!name ? (
                  <Link
                    replace={false}
                    to="/register"
                    onClick={() => setToggle(false)}
                    className="app-button block"
                  >
                    Register
                  </Link>
                ) : (
                  <button
                    onClick={() => handleLogout(true)}
                    className="app-button error flex w-full flex-row items-center justify-center gap-5"
                  >
                    <LogOut color="red" size={18} />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
