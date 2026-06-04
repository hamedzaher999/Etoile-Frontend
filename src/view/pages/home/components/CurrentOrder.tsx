import { useMemo, useState } from "react";

import {
  AlertCircleIcon,
  Orbit,
  Package2,
  RefreshCcw,
  MapPin,
  Phone,
  CalendarDays,
  CreditCard,
  User2,
  PackageOpenIcon,
  CheckCircle2,
  Clock3,
  XCircle,
  PackageX,
} from "lucide-react";
import toast from "react-hot-toast";
import AppDialog from "../../../customs/AppDialog";
import {
  useCancelOrder,
  useGetCurrentOrder,
} from "../../../../api/services/account_service/orders.api";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
import { useNavigate } from "react-router-dom";

const CurrentOrder = () => {
  const navigate = useNavigate();
  const { refetch, data, isLoading, isError, isSuccess } =
    useGetCurrentOrder();
  const order = data?.data?.data;
  const { mutateAsync: cancel, isPending: isCanceling } =
    useCancelOrder();
  const [open, setOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);

  const getOrder = async () => {
    try {
      if (isLoading) return;
      await refetch();
    } catch (error) {
      toast.dismissAll();
      toast.error(error?.response?.message || UNKNOWN_ERROR);
    }
  };

  const cancelOrder = async () => {
    if (!order?.id) return;
    try {
      const result = await cancel(order.id);
      console.log(result);

      toast.dismissAll();
      if (result?.data?.success) {
        toast.success("Your order has been canceled successfully.");
        setConfirmDialog(false);
      }
    } catch (error) {
      toast.dismissAll();
      toast.error(error?.response?.data.message || UNKNOWN_ERROR);
    }
  };

  const statusConfig = useMemo(
    () => ({
      pending: {
        icon: Clock3,

        label: "Pending",

        className: `
          border-yellow-300/20
          bg-yellow-400/10
          text-yellow-200
        `,
      },

      delivered: {
        icon: CheckCircle2,

        label: "Delivered",

        className: `
          border-cyan-300/20
          bg-cyan-400/10
          text-cyan-200
        `,
      },

      cancelled: {
        icon: XCircle,

        label: "Cancelled",

        className: `
          border-red-300/20
          bg-red-400/10
          text-red-200
        `,
      },
    }),
    [],
  );

  const currentStatus =
    statusConfig?.[order?.status] || statusConfig.pending;

  const StatusIcon = currentStatus.icon;
  return (
    <>
      <AppDialog zIndex={1700} show={confirmDialog}>
        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <p className="text-white/80">
              Are you sure you want to cancel this order ?
            </p>

            <p className="py-4 text-sm text-white/50">
              This action cannot be undone.
            </p>
            <p className="flex items-center justify-center">
              {isCanceling && (
                <Orbit
                  size={18}
                  color="red"
                  className="animate-spin"
                />
              )}
            </p>
          </div>

          <div className="flex flex-row gap-3 text-nowrap text-xs md:text-sm">
            <button
              disabled={isCanceling}
              onClick={() => {
                if (isCanceling) return;
                setConfirmDialog(false);
              }}
              className="app-button-action disabled:cursor-not-allowed"
            >
              <span>KEEP ORDER</span>
            </button>

            <button
              disabled={isCanceling}
              onClick={() => {
                if (isCanceling) return;
                cancelOrder();
              }}
              className="app-button-action error disabled:cursor-not-allowed"
            >
              <span>CANCEL ORDER</span>
            </button>
          </div>
        </div>
      </AppDialog>
      <AppDialog show={open} closeCallback={() => setOpen(false)}>
        <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[#05050c]/95 p-5 backdrop-blur-3xl">
          <div className="absolute left-1/2 top-[-180px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

          <div className="absolute bottom-[-120px] right-[-60px] h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[120px]" />

          {isLoading && (
            <div className="flex min-h-[320px] flex-col items-center justify-center">
              <Orbit
                size={38}
                className="animate-spin text-cyan-300"
              />
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Loading Order
              </p>
            </div>
          )}

          {isError && (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <AlertCircleIcon size={48} className="text-red-400" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Failed To Load Order
              </h2>

              <p className="mt-2 text-sm text-white/50">
                Something went wrong while loading your order.
              </p>

              <button
                onClick={getOrder}
                className="mt-5 flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-5 py-2 text-sm text-red-200 transition-all hover:bg-red-500/20"
              >
                <RefreshCcw size={15} />
                Retry
              </button>
            </div>
          )}

          {!isLoading && !isError && order && (
            <>
              <div className="text-nowrap rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                      Current Order
                    </p>
                    <h2 className="app-text-gradient mt-2 font-serif text-xl font-bold text-white md:text-2xl">
                      {order?.package_name} package
                    </h2>

                    <p className="mt-1 text-xs text-white/40">
                      # {order?.order_number.padStart(6, "0")}
                    </p>
                  </div>

                  <div
                    className={`${currentStatus.className} flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] uppercase`}
                  >
                    <StatusIcon size={13} />
                    {currentStatus.label}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/50">
                  <CalendarDays size={15} />
                  {new Date(order.created_at).toDateString()}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
                <div className="space-y-4">
                  <div className="flex flex-col items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-white/50">
                      <User2 color="cyan" size={16} />
                      <span className="overflow-hidden text-nowrap text-white">
                        {order?.receiver_name}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-white/50">
                      <Phone color="cyan" size={16} />
                      <span className="text-white">
                        {order?.receiver_phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} color="cyan" />
                  {order?.country_name} / {order?.city_name}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {order?.delivery_location}
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/10 bg-green-500/[0.04] px-4 py-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/50">
                    <CreditCard color="cyan" size={16} />
                    {order?.payment_method_name}
                  </div>
                  <span className="text-lg font-bold">
                    {order?.price}
                    <span className="text-green-400"> $ </span>
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={getOrder}
                  className="app-button-action flex w-full flex-row items-center justify-center gap-2 text-sm"
                >
                  <RefreshCcw size={15} />
                  Refresh
                </button>
                <button
                  onClick={() => setConfirmDialog(true)}
                  className="app-button-action error flex w-full flex-row items-center justify-center gap-2 text-sm"
                >
                  <PackageX color="red" size={15} />
                  cancel
                </button>
              </div>
            </>
          )}

          {isSuccess && !order && (
            <div className="flex flex-col items-center justify-between p-3 text-center">
              <>
                <PackageOpenIcon size={40} className="text-red-400" />

                <h2 className="my-4 text-xl font-bold">
                  no current order
                </h2>
              </>
              <button
                onClick={() => {
                  navigate("/order");
                }}
                className="app-button-action text-xs"
              >
                Order NOw
              </button>
            </div>
          )}
        </div>
      </AppDialog>

      <button
        onClick={() => {
          setOpen(true);
          getOrder();
        }}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-black/20 text-purple-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:text-cyan-300"
      >
        <Package2 size={18} className="relative z-10" />
      </button>
    </>
  );
};

export default CurrentOrder;
