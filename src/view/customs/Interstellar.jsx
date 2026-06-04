import { Sparkles } from "lucide-react";

const Interstellar = ({ justify = "justify-start" }) => {
  return (
    <div
      id="interstellar"
      className={`${justify} mb-3 flex items-center gap-2`}
    >
      <Sparkles size={14} className="text-purple-300" />

      <p className="text-[11px] uppercase tracking-[0.45em] text-purple-300">
        Interstellar Chocolate
      </p>
    </div>
  );
};

export default Interstellar;
