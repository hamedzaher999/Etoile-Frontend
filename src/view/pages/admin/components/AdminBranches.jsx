import { useState } from "react";
import {
  useCreateBranch,
  useDeleteBranch,
  useGetAllBranches,
  useUpdateBranch,
} from "../../../../api/services/admin/branches";
import {
  useGetCities,
  useGetCountries,
} from "../../../../api/services/order/location";
import toast from "react-hot-toast";
import CustomInput from "../../../customs/CustomInput";
import { Building2, Globe2, MapPin, Orbit } from "lucide-react";
import StyledSelect from "../../../customs/StyledSelect";
import { UNKNOWN_ERROR } from "../../../../constant/errors";

const emptyBranch = {
  country_id: "",
  city_id: "",
  address: "",
  name: "",
  description: "",
  latitude: "",
  longitude: "",
  is_active: true,
};

const AdminBranches = () => {
  const { data, isLoading } = useGetAllBranches();
  const { data: countries } = useGetCountries();
  const [form, setForm] = useState(emptyBranch);
  const [editingId, setEditingId] = useState(null);
  const { data: cities } = useGetCities(form.country_id);

  const { mutateAsync: createBranch, isPending: isCreating } =
    useCreateBranch();
  const { mutateAsync: updateBranch, isPending: isUpdating } =
    useUpdateBranch();
  const { mutateAsync: deleteBranch } = useDeleteBranch();

  const resetForm = () => {
    setForm(emptyBranch);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    try {
      const body = {
        ...form,
        latitude: form.latitude ? Number(form.latitude) : undefined,
        longitude: form.longitude
          ? Number(form.longitude)
          : undefined,
      };
      if (editingId) {
        await updateBranch({ id: editingId, body });
        toast.dismissAll();
        toast.success("branch updated.");
      } else {
        await createBranch(body);
        toast.dismissAll();
        toast.success("branch created.");
      }
      resetForm();
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  const branches = data?.data?.data || [];

  return (
    <div className="app-card p-6">
      <div className="mb-6 flex items-center gap-2">
        <Building2 size={18} className="text-purple-300" />
        <h3 className="text-lg font-bold text-white">Branches</h3>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-cyan-300">
          {editingId ? "Edit Branch" : "New Branch"}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CustomInput
            label="Name"
            value={form.name}
            onChangeFun={(v) => setForm((f) => ({ ...f, name: v }))}
          />
          <CustomInput
            label="Address"
            value={form.address}
            onChangeFun={(v) =>
              setForm((f) => ({ ...f, address: v }))
            }
          />
          <StyledSelect
            label="Country"
            icon={Globe2}
            value={form.country_id}
            placeholder="select country"
            onChange={(v) =>
              setForm((f) => ({ ...f, country_id: v, city_id: "" }))
            }
            options={(countries?.data?.data || []).map((c) => ({
              value: c.id,
              label: c.name,
            }))}
          />
          <StyledSelect
            label="City"
            icon={MapPin}
            value={form.city_id}
            placeholder="select city"
            disabled={!form.country_id}
            onChange={(v) => setForm((f) => ({ ...f, city_id: v }))}
            options={(cities?.data?.data || []).map((c) => ({
              value: c.id,
              label: c.name,
            }))}
          />
          <CustomInput
            label="Latitude"
            value={form.latitude}
            onChangeFun={(v) =>
              setForm((f) => ({ ...f, latitude: v }))
            }
          />
          <CustomInput
            label="Longitude"
            value={form.longitude}
            onChangeFun={(v) =>
              setForm((f) => ({ ...f, longitude: v }))
            }
          />
          <div className="sm:col-span-2">
            <CustomInput
              label="Description"
              value={form.description}
              onChangeFun={(v) =>
                setForm((f) => ({ ...f, description: v }))
              }
            />
          </div>
          <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  is_active: e.target.checked,
                }))
              }
            />
            branch active
          </label>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            disabled={isCreating || isUpdating}
            onClick={handleSubmit}
            className="app-button-action confirm"
          >
            {editingId ? "update branch" : "create branch"}
          </button>
          {editingId && (
            <button onClick={resetForm} className="app-button-action">
              cancel
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-6">
          <Orbit className="animate-spin text-purple-300" />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {branches.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition-colors duration-200 hover:border-purple-400/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    b.is_active ? "bg-emerald-400" : "bg-white/20"
                  }`}
                />
                <div>
                  <p className="font-semibold text-white">{b.name}</p>
                  <p className="text-xs text-white/50">{b.address}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(b.id);
                    setForm({
                      country_id: b.country_id,
                      city_id: b.city_id,
                      address: b.address,
                      name: b.name,
                      description: b.description || "",
                      latitude: b.latitude ?? "",
                      longitude: b.longitude ?? "",
                      is_active: b.is_active,
                    });
                  }}
                  className="app-button-action text-xs"
                >
                  edit
                </button>
                <button
                  onClick={async () => {
                    try {
                      await deleteBranch(b.id);
                      toast.dismissAll();
                      toast.success("branch deleted.");
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

export default AdminBranches;
