import { useState } from "react";
import { Orbit, Rocket, ShoppingBag } from "lucide-react";
const PlanetsNav = () => {
  const [isOpen, SetIsOpen] = useState(0);
  return (
    <div className="pointer-events-auto absolute end-8 top-5 z-[1000] flex list-none flex-col items-center justify-center gap-4 pt-5 md:end-12">
      <button
        onClick={() => {
          SetIsOpen((i) => (i === 0 ? 1 : 0));
        }}
        onBlur={() => {
          setTimeout(() => {
            SetIsOpen(0);
          }, 200);
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
      {Object.entries({
        home: {
          title: "",
          icon: Rocket,
          hrf: "",
        },
        order: {
          title: "",
          icon: ShoppingBag,
          hrf: "",
        },
      }).map(([key, value], i) => {
        const Icon = value.icon;
        return (
          <div
            onClick={() => {}}
            key={key}
            data-hidden={isOpen === 0}
            style={{
              transform: `translateY(${(i + 1) * (isOpen * 110)}%)`,
            }}
            className="absolute flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-purple-600/30 data-[hidden=true]:pointer-events-none data-[hidden=true]:opacity-0"
          >
            <Icon size={18} />
          </div>
        );
      })}
    </div>
  );
};
export default PlanetsNav;
