import { useRef } from "react";
import { useCreateReport } from "../../../../api/services/home_service/reviews";
import toast from "react-hot-toast";
import { RotateCwIcon } from "lucide-react";

const SendReportDialog = ({ closeCallback }) => {
  const textareaRef = useRef();
  const { mutateAsync: sendReport, isPending: isSendingMyReport } =
    useCreateReport();
  const handelSendReport = async () => {
    try {
      if (
        !textareaRef.current ||
        textareaRef.current.value.length === 0
      ) {
        toast.dismissAll();
        toast.error("invalid input");
        return;
      }
      const { data } = await sendReport({
        report: textareaRef.current.value,
      });
      toast.dismissAll();

      if (data.success) {
        toast.success(
          data.message ?? "your report was submitted successfully.",
        );
        textareaRef.current.value = "";
        closeCallback?.();
      } else if (!data.success) {
        toast.error(data.message ?? "some thing went wrong.");
      }
    } catch (e) {
      toast.dismissAll();
      toast.error(
        e.message ?? "some thing went wrong, please try again.",
      );
    }
  };

  return (
    <div className="flex max-h-72 w-80 flex-col gap-3 p-3">
      <textarea
        ref={textareaRef}
        name="report_text_area"
        className="min-h-28 rounded-md bg-[#ffffff14] p-2 pl-3 text-[12px] text-gray-200"
        id="REPORT_T_A"
      ></textarea>
      <p className="text-[10px]">
        It looks like something went out of orbit.
      </p>
      <button
        onClick={() => {
          handelSendReport();
        }}
        className="app-button error flex items-center justify-center"
      >
        {!isSendingMyReport ? (
          "report"
        ) : (
          <RotateCwIcon className="animate-spin" size={18} />
        )}
      </button>
    </div>
  );
};

export default SendReportDialog;
