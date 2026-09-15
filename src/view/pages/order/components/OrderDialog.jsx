import { useState } from "react";
import { ArrowLeftCircle, X } from "lucide-react";
import OrderFormField from "./OrderFomField";
import OrderPaymentField from "./OrderPaymentField";
import OrderFinalStep from "./OrderFinalStep";
const OrderDialog = ({ closeCallback }) => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-[92vw] max-w-[420px] flex-col">
      <div className="flex shrink-0 items-center justify-between px-4 pt-4">
        <ArrowLeftCircle
          onClick={() => {
            setStep((s) => (s > 1 ? s - 1 : s));
          }}
          className={`${step === 1 ? "opacity-0" : ""} cursor-pointer text-white/60 transition-opacity duration-200 hover:text-white`}
        />
        <button
          onClick={() => closeCallback?.()}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative h-[520px] max-h-[65vh] w-full overflow-x-hidden">
        <div
          style={{ transform: `translateX(${(step - 1) * -120}%)` }}
          data-step={step}
          className="scrollable-content absolute inset-0 overflow-y-auto p-5 pb-8 transition-transform duration-500"
        >
          <OrderFormField setStep={setStep} />
        </div>
        <div
          style={{ transform: `translateX(${(step - 2) * -120}%)` }}
          data-step={step}
          className="scrollable-content absolute inset-0 overflow-y-auto p-5 pb-8 transition-transform duration-500"
        >
          <OrderPaymentField setStep={setStep} />
        </div>
        <div
          style={{ transform: `translateX(${(step - 3) * -120}%)` }}
          data-step={step}
          className="scrollable-content absolute inset-0 overflow-y-auto p-5 pb-8 transition-transform duration-500"
        >
          <OrderFinalStep setStep={setStep} />
        </div>
      </div>
    </div>
  );
};

export default OrderDialog;
