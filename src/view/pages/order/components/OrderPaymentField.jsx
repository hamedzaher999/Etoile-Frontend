import { useState } from "react";
import {
  Check,
  CreditCard,
  Orbit,
  Package2,
  AlertCircle,
} from "lucide-react";
import { useGetPaymentMethods } from "../../../../api/services/home_service/footer";
import { useGetPackages } from "../../../../api/services/order/packages";
import { useUserStore } from "../../../../store/user.store";
import toast from "react-hot-toast";
import useOrderStore from "../../../../store/order.store";

const OrderPaymentField = ({ setStep }) => {
  const { data: paymentMethods, isLoading: isLoadingPayment } =
    useGetPaymentMethods();
  const {
    data: packages,
    refetch: getPackage,
    isLoading: isLoadingPackage,
    isError,
    error,
  } = useGetPackages();
  const { setField } = useOrderStore();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const { is_vip } = useUserStore();
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4">
      {isLoadingPackage ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <Orbit className="animate-spin text-purple-400" />
          <p className="animate-pulse">uploading your service ....</p>
        </div>
      ) : isError ? (
        <div
          onClick={() => {
            getPackage();
          }}
          className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-5"
        >
          <AlertCircle className="text-purple-400" />
          <p className="animate-pulse">{error.message}</p>
        </div>
      ) : (
        <>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Package2 size={16} className="text-purple-300" />
              <p className="app-text-gradient text-sm font-semibold tracking-wide">
                Select Package
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {packages?.data?.data?.map((p) => {
                const isSelected = selectedPackage?.id === p.id;

                return (
                  <div
                    key={p.id}
                    data-selected={isSelected}
                    onClick={() => {
                      if (p?.is_vip_only && !is_vip) {
                        toast.dismissAll();
                        toast.error(
                          "sorry, this package for only vip users",
                        );
                        return;
                      }
                      setSelectedPackage(p);
                      setField("selectedPackage", p);
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/40 data-[selected=true]:border-purple-500 data-[selected=true]:bg-purple-500/15 data-[selected=true]:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />

                    {isSelected && (
                      <div className="absolute right-2 top-2">
                        <div className="rounded-full bg-purple-500 p-1">
                          <Check size={12} className="text-white" />
                        </div>
                      </div>
                    )}

                    <div className="relative z-10">
                      <h3 className="font-semibold text-white">
                        {p?.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs text-gray-300">
                        {p?.description}
                      </p>

                      <p className="purple-text-gradient mt-4 text-sm font-bold">
                        ${p?.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <CreditCard size={16} className="text-cyan-300" />
              <p className="blue-text-gradient text-sm font-semibold tracking-wide">
                Payment Method
              </p>
            </div>

            <div className="scrollable-content grid h-[180px] grid-cols-2 gap-3 overflow-hidden overflow-y-auto p-2">
              {paymentMethods?.data?.data?.map((m) => {
                const isSelected = selectedMethod?.id === m.id;
                return (
                  <div
                    key={m.id}
                    data-selected={isSelected}
                    onClick={() => {
                      setSelectedMethod(m);
                      setField("paymentMethod", m);
                    }}
                    className="relative h-12 cursor-pointer overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 data-[selected=true]:border-cyan-400 data-[selected=true]:bg-cyan-500/10 data-[selected=true]:shadow-[0_0_10px_rgba(0,255,255,0.25)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <p className="text-center text-xs font-medium text-white">
                        {m.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      <button
        disabled={!selectedPackage || !selectedMethod}
        onClick={() => setStep(3)}
        className="app-button-action mt-2 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue Mission
      </button>
    </div>
  );
};

export default OrderPaymentField;
