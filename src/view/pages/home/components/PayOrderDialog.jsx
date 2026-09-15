import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { stripePromise } from "../../../../lib/stripe";
import { useEffect, useState } from "react";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
import { useCreatePaymentIntent } from "../../../../api/services/order/payment.api";
import { AlertCircle, Orbit } from "lucide-react";

const PaymentForm = ({ order, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState("");

  const handlePay = async () => {
    if (!stripe || !elements) return;
    setIsPaying(true);
    setPayError("");
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    setIsPaying(false);
    if (error) {
      setPayError(error.message || UNKNOWN_ERROR);
      return;
    }
    if (paymentIntent?.status === "succeeded") {
      onSuccess?.();
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <PaymentElement />
      {payError && <p className="text-xs text-red-400">{payError}</p>}
      <button
        disabled={!stripe || isPaying}
        onClick={handlePay}
        className="app-button-action confirm flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-55"
      >
        {isPaying ? (
          <Orbit size={18} className="animate-spin" />
        ) : (
          `Pay ${order?.price} $`
        )}
      </button>
    </div>
  );
};

const PayOrderDialog = ({ order, closeCallback, onPaid }) => {
  const { mutateAsync: createIntent, isPending } =
    useCreatePaymentIntent();
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!order?.id) return;
    const getIntent = async () => {
      try {
        const result = await createIntent(order.id);
        setClientSecret(result?.data?.data?.client_secret);
      } catch (e) {
        setError(e?.response?.data?.message || UNKNOWN_ERROR);
      }
    };
    getIntent();
  }, [order?.id]);

  return (
    <div className="relative w-[380px] overflow-hidden rounded-2xl border border-purple-500/20 bg-[#05050c]/95 backdrop-blur-3xl">
      <div className="p-5">
        <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-cyan-300">
          Secure Payment
        </p>
        <h2 className="app-text-gradient text-xl font-bold">
          Complete your payment
        </h2>
      </div>

      {isPending && !clientSecret && !error && (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 p-5">
          <Orbit size={30} className="animate-spin text-purple-300" />
          <p className="text-xs text-white/50">
            preparing your payment ...
          </p>
        </div>
      )}

      {error && (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 p-5 text-center">
          <AlertCircle className="text-red-400" />
          <p className="text-sm text-red-300">{error}</p>
          <button
            onClick={() => closeCallback?.()}
            className="app-button-action error"
          >
            close
          </button>
        </div>
      )}

      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm
            order={order}
            onSuccess={() => {
              onPaid?.();
              closeCallback?.();
            }}
          />
        </Elements>
      )}
    </div>
  );
};

export default PayOrderDialog;
