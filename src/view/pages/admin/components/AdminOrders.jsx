import { useState } from "react";
import {
  useGetAdminOrders,
  useUpdateOrderStatus,
} from "../../../../api/services/admin/orders";
import toast from "react-hot-toast";
import { Orbit } from "lucide-react";
import StyledSelect from "../../../customs/StyledSelect";

const STATUS_OPTIONS = {
  pending: ["accepted", "canceled"],
  accepted: ["payed", "canceled"],
  payed: ["delivered"],
  delivered: [],
  canceled: [],
};

const AdminOrders = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const { data, isLoading } = useGetAdminOrders(
    statusFilter ? { status: statusFilter } : {},
  );
  const { mutateAsync: updateStatus, isPending } =
    useUpdateOrderStatus();

  const handleStatusChange = async (id, status) => {
    try {
      await updateStatus({ id, status });
      toast.dismissAll();
      toast.success("order status updated.");
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  const orders = data?.data?.data || [];

  return (
    <div className="app-card p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-white">Orders</h3>
        <StyledSelect
          className="min-w-[170px]"
          value={statusFilter}
          placeholder="all statuses"
          onChange={(v) => setStatusFilter(v)}
          options={Object.keys(STATUS_OPTIONS).map((s) => ({
            value: s,
            label: s,
          }))}
        />
      </div>

      {isLoading ? (
        <Orbit className="animate-spin text-purple-300" />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/80">
            <thead className="text-xs uppercase text-white/40">
              <tr>
                <th className="py-2 pr-4">Package</th>
                <th className="py-2 pr-4">Contact</th>
                <th className="py-2 pr-4">Branch</th>
                <th className="py-2 pr-4">Price</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Update</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-white/10">
                  <td className="py-2 pr-4">{o.package_name}</td>
                  <td className="py-2 pr-4">{o.contact || "-"}</td>
                  <td className="py-2 pr-4">{o.branch_name}</td>
                  <td className="py-2 pr-4">{o.price} $</td>
                  <td className="py-2 pr-4 capitalize">{o.status}</td>
                  <td className="py-2 pr-4">
                    {STATUS_OPTIONS[o.status]?.length > 0 && (
                      <StyledSelect
                        className="min-w-[140px] text-xs"
                        disabled={isPending}
                        value=""
                        placeholder="move to ..."
                        onChange={(v) => {
                          if (!v) return;
                          handleStatusChange(o.id, v);
                        }}
                        options={STATUS_OPTIONS[o.status].map(
                          (s) => ({ value: s, label: s }),
                        )}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
