import { useOrder } from "../../../../api/services/order/order";
import useOrderStore from "../../../../store/order.store";
import toast from "react-hot-toast";
import { CheckCircle2, Orbit } from "lucide-react";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
const OrderFinalStep = () => {
  const { selectedPackage, getOrderBody } = useOrderStore();
  const {
    mutateAsync: order,
    isPending: isOrdering,
    isError,
    isSuccess,
  } = useOrder();

  const handleOrder = async () => {
    try {
      const body = getOrderBody();
      if (!body) return;
      const result = await order(body);
      if (result.data.success) {
        toast.dismissAll();
        toast.success(
          "your order submitted successfully, we will notify you for status updates",
        );
      }
    } catch (error) {
      toast.dismissAll();
      toast.error(error?.response?.data?.message || UNKNOWN_ERROR);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-between">
      {selectedPackage && (
        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 backdrop-blur-md">
          <p className="mb-2 text-xs tracking-[0.3em] text-purple-300">
            PACKAGE DETAILS
          </p>

          <h2 className="text-lg font-bold text-white">
            {selectedPackage.name}
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            {selectedPackage.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Interstellar Collection
            </p>

            <p className="purple-text-gradient text-xl font-bold">
              ${selectedPackage.price}
            </p>
          </div>
        </div>
      )}
      {isSuccess && (
        <div className="app-card mx-auto mt-8 flex max-w-md flex-col items-center border-emerald-400/20 bg-emerald-500/[0.06] p-6 text-center shadow-[0_0_40px_rgba(52,211,153,0.12)]">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
            <CheckCircle2 size={22} />
          </div>
          <p className="mb-2 text-lg font-semibold text-white">
            Your order has been submitted successfully!
          </p>
          <p className="mb-4 text-sm text-white/60">
            We are currently reviewing your request. You will receive
            an email update shortly.
          </p>
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Status: Pending
          </div>
        </div>
      )}
      <div>
        {!isSuccess && (
          <p className="mt-4 rounded-lg border border-purple-500/20 bg-purple-500/5 p-3 text-xs leading-relaxed text-white/60 backdrop-blur-md">
            <span className="mb-1 block font-semibold text-white/90">
              Please Note:
            </span>
            Your order will be reviewed for approval. Once accepted,
            we will notify you via email or notification to complete
            your payment.
          </p>
        )}
        <button
          disabled={isSuccess || isOrdering}
          onClick={() => {
            handleOrder();
          }}
          className="app-button-action mt-2 flex w-full items-center justify-center disabled:cursor-not-allowed disabled:opacity-55"
        >
          {isOrdering ? (
            <Orbit size={18} className="animate-spin" />
          ) : (
            "Confirm order"
          )}
        </button>
      </div>
    </div>
  );
};

export default OrderFinalStep;
