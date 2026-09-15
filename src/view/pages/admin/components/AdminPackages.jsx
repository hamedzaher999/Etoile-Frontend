import { useState } from "react";
import {
  useCreatePackage,
  useGetAllPackagesAdmin,
  useUpdatePackage,
} from "../../../../api/services/admin/packages";
import toast from "react-hot-toast";
import CustomInput from "../../../customs/CustomInput";
import { Orbit } from "lucide-react";

const emptyPackage = {
  name: "",
  slug: "",
  description: "",
  price: "",
  img_url: "",
  is_vip_only: false,
  is_active: true,
};

const AdminPackages = () => {
  const { data, isLoading } = useGetAllPackagesAdmin();
  const [form, setForm] = useState(emptyPackage);
  const [editingId, setEditingId] = useState(null);
  const { mutateAsync: createPackage, isPending: isCreating } =
    useCreatePackage();
  const { mutateAsync: updatePackage, isPending: isUpdating } =
    useUpdatePackage();

  const resetForm = () => {
    setForm(emptyPackage);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    try {
      const body = {
        ...form,
        price: Number(form.price),
        img_url: form.img_url || undefined,
      };
      if (editingId) {
        await updatePackage({ id: editingId, body });
        toast.dismissAll();
        toast.success("package updated.");
      } else {
        await createPackage(body);
        toast.dismissAll();
        toast.success("package created.");
      }
      resetForm();
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  const packages = data?.data?.data || [];

  return (
    <div className="app-card p-5">
      <h3 className="mb-4 text-lg font-bold text-white">Packages</h3>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CustomInput
          label="Name"
          value={form.name}
          onChangeFun={(v) => setForm((f) => ({ ...f, name: v }))}
        />
        <CustomInput
          label="Slug"
          value={form.slug}
          onChangeFun={(v) => setForm((f) => ({ ...f, slug: v }))}
        />
        <CustomInput
          label="Price"
          value={form.price}
          onChangeFun={(v) => setForm((f) => ({ ...f, price: v }))}
        />
        <CustomInput
          label="Image URL"
          value={form.img_url}
          onChangeFun={(v) => setForm((f) => ({ ...f, img_url: v }))}
        />
        <CustomInput
          label="Description"
          value={form.description}
          onChangeFun={(v) =>
            setForm((f) => ({ ...f, description: v }))
          }
        />
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={form.is_vip_only}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                is_vip_only: e.target.checked,
              }))
            }
          />
          vip only
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
          {editingId ? "update package" : "create package"}
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
          {packages.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
            >
              <div>
                <p className="font-semibold text-white">
                  {p.name} {!p.is_active && "(inactive)"}
                </p>
                <p className="text-xs text-white/50">${p.price}</p>
              </div>
              <button
                onClick={() => {
                  setEditingId(p.id);
                  setForm({
                    name: p.name,
                    slug: p.slug,
                    description: p.description || "",
                    price: p.price,
                    img_url: p.img_url || "",
                    is_vip_only: p.is_vip_only,
                    is_active: p.is_active,
                  });
                }}
                className="app-button-action text-xs"
              >
                edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPackages;
