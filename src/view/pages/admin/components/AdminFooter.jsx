import { useState } from "react";
import {
  useCreateFooterItem,
  useCreateFooterTitle,
  useDeleteFooterItem,
  useGetFooterStructureAdmin,
} from "../../../../api/services/admin/footer";
import toast from "react-hot-toast";
import { UNKNOWN_ERROR } from "../../../../constant/errors";
import CustomInput from "../../../customs/CustomInput";
import { Orbit } from "lucide-react";
import StyledSelect from "../../../customs/StyledSelect";

const AdminFooter = () => {
  const { data, isLoading } = useGetFooterStructureAdmin();
  const [titleKey, setTitleKey] = useState("");
  const { mutateAsync: createTitle, isPending: isCreatingTitle } =
    useCreateFooterTitle();

  const [itemForm, setItemForm] = useState({
    footer_title_id: "",
    name: "",
    reference: "",
  });
  const { mutateAsync: createItem, isPending: isCreatingItem } =
    useCreateFooterItem();
  const { mutateAsync: deleteItem } = useDeleteFooterItem();

  const groups = data?.data?.data || [];

  const handleCreateTitle = async () => {
    try {
      await createTitle({ key: titleKey });
      toast.dismissAll();
      toast.success("footer group created.");
      setTitleKey("");
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  const handleCreateItem = async () => {
    try {
      await createItem(itemForm);
      toast.dismissAll();
      toast.success("footer link added.");
      setItemForm((f) => ({
        footer_title_id: f.footer_title_id,
        name: "",
        reference: "",
      }));
    } catch (e) {
      toast.dismissAll();
      toast.error(e?.response?.data?.message || UNKNOWN_ERROR);
    }
  };

  return (
    <div className="app-card p-5">
      <h3 className="mb-4 text-lg font-bold text-white">
        Footer Groups
      </h3>

      <div className="mb-6 flex flex-wrap items-end gap-3">
        <div className="min-w-[220px] flex-1">
          <CustomInput
            label="New group name (e.g. Quick Links)"
            value={titleKey}
            onChangeFun={setTitleKey}
          />
        </div>
        <button
          disabled={isCreatingTitle || !titleKey}
          onClick={handleCreateTitle}
          className="app-button-action confirm h-9"
        >
          add group
        </button>
      </div>

      {/* <div className="mb-6 grid grid-cols-3 gap-3">
       */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StyledSelect
          label="Group"
          value={itemForm.footer_title_id}
          placeholder="select group"
          onChange={(v) =>
            setItemForm((f) => ({ ...f, footer_title_id: v }))
          }
          options={groups.map((g) => ({ value: g.id, label: g.key }))}
        />
        <CustomInput
          label="Link label"
          value={itemForm.name}
          onChangeFun={(v) => setItemForm((f) => ({ ...f, name: v }))}
        />
        <CustomInput
          label="Link URL"
          value={itemForm.reference}
          onChangeFun={(v) =>
            setItemForm((f) => ({ ...f, reference: v }))
          }
        />
      </div>
      <button
        disabled={
          isCreatingItem ||
          !itemForm.footer_title_id ||
          !itemForm.name ||
          !itemForm.reference
        }
        onClick={handleCreateItem}
        className="app-button-action confirm mb-6"
      >
        add link
      </button>

      {isLoading ? (
        <Orbit className="animate-spin text-purple-300" />
      ) : (
        <div className="flex flex-col gap-4">
          {groups.map((g) => (
            <div key={g.id}>
              <p className="mb-2 text-sm font-semibold text-cyan-300">
                {g.key}
              </p>
              <div className="flex flex-col gap-1">
                {g.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70"
                  >
                    <span>
                      {item.name} → {item.reference}
                    </span>
                    <button
                      onClick={async () => {
                        try {
                          await deleteItem(item.id);
                          toast.dismissAll();
                          toast.success("link removed.");
                        } catch (e) {
                          toast.dismissAll();
                          toast.error(
                            e?.response?.data?.message ||
                              UNKNOWN_ERROR,
                          );
                        }
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminFooter;
