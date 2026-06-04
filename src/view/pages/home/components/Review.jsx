import { Rocket, Sparkles, Star } from "lucide-react";

import astronaut from "../../../../assets/placeholder/astronaut.jpg";

const Review = ({
  name = "",
  review = "",
  img = "",
  is_vip = false,
  rate = 3,
}) => {
  return (
    <div className="group relative flex w-[300px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-black/25 p-5 shadow-[0_0_40px_rgba(120,0,255,0.10)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px] hover:scale-[102%]">
      <div className="absolute -top-32 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-purple-500/50 blur-[120px] transition-all duration-500 group-hover:bg-cyan-400/40" />

      <div className="absolute right-5 top-5 rounded-full p-1.5 backdrop-blur-sm">
        {is_vip ? (
          <Rocket
            size={20}
            color="gold"
            className="transition-all duration-300 group-hover:-rotate-12"
          />
        ) : (
          <Sparkles
            color="purple"
            size={20}
            className="transition-all duration-300 group-hover:rotate-12"
          />
        )}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative h-[62px] w-[62px] overflow-hidden rounded-full border border-purple-400/20 bg-black/20 p-[2px] shadow-[0_0_30px_rgba(120,0,255,0.15)]">
            <img
              onError={(e) => {
                e.target.src = astronaut;
              }}
              src={img}
              alt={name}
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          {/* info */}
          <div className="flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">
              Space Traveler
            </p>

            <h3 className="mt-1 text-lg font-black tracking-tight text-white">
              {name?.split(" ")?.[0]}
            </h3>
          </div>
        </div>

        <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

        <p className="min-h-[120px] text-sm leading-[2] text-white/65 transition-all duration-300 group-hover:text-white/80">
          “ {review} ”
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <Star
              key={i}
              fill={v <= rate ? "purple" : ""}
              strokeWidth={0}
              size={20}
              className="animate-pulse"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
