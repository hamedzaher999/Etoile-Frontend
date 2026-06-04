import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import OrderFormField from "./OrderFomField";
import OrderPaymentField from "./OrderPaymentField";
import OrderFinalStep from "./OrderFinalStep";
const OrderDialog = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="">
      <ArrowLeftCircle
        onClick={() => {
          setStep((s) => (s > 1 ? s - 1 : s));
        }}
        className={` ${step === 1 ? "opacity-0" : ""} mx-2 mt-2 cursor-pointer transition-opacity duration-200`}
      />

      <div className="overflow-y-auo scrollable-content relative flex min-h-[500px] w-[400px] items-center justify-center overflow-x-hidden transition-transform duration-150">
        <div
          style={{ transform: `translateX(${(step - 1) * -120}%)` }}
          data-step={step}
          className="absolute h-full p-5 transition-transform duration-500"
        >
          <OrderFormField setStep={setStep} />
        </div>
        <div
          style={{ transform: `translateX(${(step - 2) * -120}%)` }}
          data-step={step}
          className="absolute h-full w-full p-5 transition-transform duration-500"
        >
          <OrderPaymentField setStep={setStep} />
        </div>
        <div
          style={{ transform: `translateX(${(step - 3) * -120}%)` }}
          data-step={step}
          className={`absolute h-full p-5 transition-transform duration-500`}
        >
          <OrderFinalStep setStep={setStep} />
        </div>
      </div>
    </div>
  );
};

export default OrderDialog;
