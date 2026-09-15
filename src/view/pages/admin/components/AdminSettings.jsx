import { useEffect, useState } from "react";
import { useGetAllBranches } from "../../../../api/services/admin/branches";
import {
  useCreateSetting,
  useGetSettingByBranch,
  useRestartSetting,
  useUpdateSetting,
} from "../../../../api/services/admin/settings";
import toast from "react-hot-toast";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
import { Orbit } from "lucide-react";
import CustomInput from "../../../customs/CustomInput";
import StyledSelect from "../../../customs/StyledSelect";

const AdminSettings = () => {
  const { data: branches } = useGetAllBranches();
  const [branchId, setBranchId] = useState("");
  const { data: setting, isLoading } =
    useGetSettingByBranch(branchId);
  const [form, setForm] = useState({
    max_classic_orders: 0,
    max_vip_orders: 0,
    is_open: true,
  });
  const { mutateAsync: createSetting, isPending: isCreating } =
    useCreateSetting();
  const { mutateAsync: updateSetting, isPending: isUpdating } =
    useUpdateSetting();
  const { mutateAsync: restartSetting, isPending: isRestarting } =
    useRestartSetting();

  useEffect(() => {
    const s = setting?.data?.data;
    if (s) {
      setForm({
        max_classic_orders: s.max_classic_orders,
        max_vip_orders: s.max_vip_orders,
        is_open: s.is_open,
      });
    }
  }, [setting]);

  const exists = !!setting?.data?.data;

  const handleSave = async () => {
    try {
      const numericForm = {
        ...form,
        max_classic_orders: Number(form.max_classic_orders),
        max_vip_orders: Number(form.max_vip_orders),
      };
      if (exists) {
        await updateSetting({ branchId, body: numericForm });
      } else {
        await createSetting({
          branch_id: branchId,
          max_classic_orders: numericForm.max_classic_orders,
          max_vip_orders: numericForm.max_vip_orders,
        });
      }
      toast.dismissAll();
      toast.success("settings saved.");
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  return (
    <div className="app-card p-5">
      <h3 className="mb-4 text-lg font-bold text-white">
        Branch Settings
      </h3>

      <StyledSelect
        value={branchId}
        placeholder="select branch"
        onChange={(v) => setBranchId(v)}
        options={(branches?.data?.data || []).map((b) => ({
          value: b.id,
          label: b.name,
        }))}
      />

      {branchId &&
        (isLoading ? (
          <Orbit className="animate-spin text-purple-300" />
        ) : (
          <>
            {exists && (
              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Classic Orders
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {setting?.data?.data?.requested_classic_orders ??
                      0}
                    <span className="text-sm font-normal text-white/40">
                      {" "}
                      / {setting?.data?.data?.max_classic_orders ?? 0}
                    </span>
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    VIP Orders
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {setting?.data?.data?.requested_vip_orders ?? 0}
                    <span className="text-sm font-normal text-white/40">
                      {" "}
                      / {setting?.data?.data?.max_vip_orders ?? 0}
                    </span>
                  </p>
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <CustomInput
                label="Max Classic Orders"
                value={form.max_classic_orders}
                onChangeFun={(v) =>
                  setForm((f) => ({ ...f, max_classic_orders: v }))
                }
              />
              <CustomInput
                label="Max VIP Orders"
                value={form.max_vip_orders}
                onChangeFun={(v) =>
                  setForm((f) => ({ ...f, max_vip_orders: v }))
                }
              />
              {exists && (
                <label className="flex items-center gap-2 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={form.is_open}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        is_open: e.target.checked,
                      }))
                    }
                  />
                  branch open
                </label>
              )}

              <div className="col-span-2 flex gap-3">
                <button
                  disabled={isCreating || isUpdating}
                  onClick={handleSave}
                  className="app-button-action confirm"
                >
                  {exists ? "update settings" : "create settings"}
                </button>
                {exists && (
                  <button
                    disabled={isRestarting}
                    onClick={async () => {
                      try {
                        await restartSetting(branchId);
                        toast.dismissAll();
                        toast.success(
                          "counters restarted, branch reopened.",
                        );
                      } catch (e) {
                        toast.dismissAll();
                        toast.error(
                          e?.response?.data?.message || UNKNOWN_ERROR,
                        );
                      }
                    }}
                    className="app-button-action"
                  >
                    restart / reopen
                  </button>
                )}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default AdminSettings;
