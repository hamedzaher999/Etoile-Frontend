import { useState } from "react";
import { Orbit, Rocket, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
const PlanetsNav = () => {
  const [isOpen, setIsOpen] = useState(0);
  const navigate = useNavigate();
  const menuItems = {
    home: {
      icon: Rocket,
      onclick: () => navigate(-1),
    },
    order: {
      icon: ShoppingBag,
      onclick: () => navigate("/order"),
    },
  };
  return (
    <div
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(0);
        }
      }}
      className="pointer-events-auto absolute end-8 top-5 z-[1000] flex list-none flex-col items-center justify-center gap-4 pt-5 md:end-12"
    >
      <button
        onClick={() => {
          setIsOpen((i) => (i === 0 ? 1 : 0));
        }}
        aria-selected={isOpen === 1}
        className="cursor-pointer transition-transform duration-300 hover:scale-105 aria-selected:rotate-90 aria-selected:text-purple-500"
      >
        <Orbit
          strokeWidth={1.5}
          size={22}
          className="animate-pulse"
        />
      </button>
      {Object.entries(menuItems).map(([key, value], i) => {
        const Icon = value.icon;
        return (
          <button
            onClick={value.onclick}
            key={key}
            data-hidden={isOpen === 0}
            style={{
              transform: `translateY(${(i + 1) * (isOpen * 110)}%)`,
            }}
            className="absolute flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-purple-600/30 active:scale-95 data-[hidden=true]:pointer-events-none data-[hidden=true]:opacity-0"
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
};
export default PlanetsNav;
