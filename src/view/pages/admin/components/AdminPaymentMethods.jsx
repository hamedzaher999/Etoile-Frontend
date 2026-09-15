import { Orbit } from "lucide-react";
import toast from "react-hot-toast";
import CustomInput from "../../../customs/CustomInput";
import {
  useCreatePaymentMethod,
  useDeletePaymentMethod,
  useGetAllPaymentMethodsAdmin,
  useUpdatePaymentMethod,
} from "../../../../api/services/admin/payment_methods";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
import { useState } from "react";

const emptyMethod = {
  name: "",
  is_online: false,
  is_active: true,
  img_url: "",
};

const AdminPaymentMethods = () => {
  const { data, isLoading } = useGetAllPaymentMethodsAdmin();
  const [form, setForm] = useState(emptyMethod);
  const [editingId, setEditingId] = useState(null);
  const { mutateAsync: createMethod, isPending: isCreating } =
    useCreatePaymentMethod();
  const { mutateAsync: updateMethod, isPending: isUpdating } =
    useUpdatePaymentMethod();
  const { mutateAsync: deleteMethod } = useDeletePaymentMethod();

  const resetForm = () => {
    setForm(emptyMethod);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    try {
      const body = { ...form, img_url: form.img_url || undefined };
      if (editingId) {
        await updateMethod({ id: editingId, body });
        toast.dismissAll();
        toast.success("payment method updated.");
      } else {
        await createMethod(body);
        toast.dismissAll();
        toast.success("payment method created.");
      }
      resetForm();
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  const methods = data?.data?.data || [];

  return (
    <div className="app-card p-5">
      <h3 className="mb-4 text-lg font-bold text-white">
        Payment Methods
      </h3>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CustomInput
          label="Name"
          value={form.name}
          onChangeFun={(v) => setForm((f) => ({ ...f, name: v }))}
        />
        <CustomInput
          label="Icon URL"
          value={form.img_url}
          onChangeFun={(v) => setForm((f) => ({ ...f, img_url: v }))}
        />
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={form.is_online}
            onChange={(e) =>
              setForm((f) => ({ ...f, is_online: e.target.checked }))
            }
          />
          online
        </label>
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) =>
              setForm((f) => ({ ...f, is_active: e.target.checked }))
            }
          />
          active
        </label>
      </div>

      <div className="mb-6 flex gap-3">
        <button
          disabled={isCreating || isUpdating}
          onClick={handleSubmit}
          className="app-button-action confirm"
        >
          {editingId ? "update method" : "create method"}
        </button>
        {editingId && (
          <button onClick={resetForm} className="app-button-action">
            cancel
          </button>
        )}
      </div>

      {isLoading ? (
        <Orbit className="animate-spin text-purple-300" />
      ) : (
        <div className="flex flex-col gap-2">
          {methods.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
            >
              <p className="font-semibold text-white">
                {m.name} {m.is_online ? "(online)" : "(offline)"}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(m.id);
                    setForm({
                      name: m.name,
                      is_online: m.is_online,
                      is_active: m.is_active,
                      img_url: m.img_url || "",
                    });
                  }}
                  className="app-button-action text-xs"
                >
                  edit
                </button>
                <button
                  onClick={async () => {
                    try {
                      await deleteMethod(m.id);
                      toast.dismissAll();
                      toast.success("payment method deleted.");
                    } catch (e) {
                      toast.dismissAll();
                      toast.error(
                        e?.response?.data?.message || UNKNOWN_ERROR,
                      );
                    }
                  }}
                  className="app-button-action error text-xs"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPaymentMethods;
