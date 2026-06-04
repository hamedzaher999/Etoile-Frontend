import { useOrder } from "../../../../api/services/order/order";
import useOrderStore from "../../../../store/order.store";
import toast from "react-hot-toast";
import { Orbit } from "lucide-react";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
const OrderFinalStep = () => {
  const { selectedPackage, getOrderBody } = useOrderStore();
  const {
    mutateAsync: order,
    isPending: isOrdering,
    isError,
    isSuccess,
  } = useOrder();
  console.log(isOrdering);
  console.log(isError);

  const handleOrder = async () => {
    try {
      const body = getOrderBody();
      console.log(body);
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
    <div className="flex h-full flex-col justify-between">
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
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 8"
              />
            </svg>
          </div>
          <p className="mb-2 text-lg font-semibold text-emerald-800">
            Your order has been submitted successfully!
          </p>
          <p className="mb-4 text-sm text-emerald-600">
            We are currently reviewing your request. You will receive
            an email update shortly.
          </p>
          <div className="inline-flex items-center rounded-full bg-emerald-200 px-3 py-1 text-xs font-medium text-emerald-800">
            Status: Pending
          </div>
        </div>
      )}
      <div>
        {!isSuccess && (
          <p className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-3 text-xs leading-relaxed text-gray-500">
            <span className="mb-1 block font-semibold text-gray-800">
              Please Note:
            </span>
            Your order will be reviewed for approval. Once accepted,
            we will notify you via email or notification to complete
            your payment.
          </p>
        )}
        <button
          // disabled={isSuccess}
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
