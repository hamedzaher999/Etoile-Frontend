import { useRef, useState } from "react";
import { useCreateReview } from "../../../../api/services/home_service/reviews";
import toast from "react-hot-toast";
import { RotateCwIcon } from "lucide-react";
import { Star } from "lucide-react";
const SendReviewDialog = ({ closeCallback }) => {
  const textareaRef = useRef();
  const [rate, setRate] = useState(3);
  const { mutateAsync: sendReview, isPending: isSendingMyReview } =
    useCreateReview();
  const handelSendReview = async () => {
    try {
      if (
        !textareaRef.current ||
        textareaRef.current.value.length === 0
      ) {
        toast.dismissAll();
        toast.error("invalid input");
        return;
      }
      const { data } = await sendReview({
        review: textareaRef.current.value,
        rating: rate,
      });
      toast.dismissAll();
      if (data.success) {
        toast.success(
          data.message ?? "your review was submitted successfully.",
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
      <>
        <textarea
          placeholder="share your experience ..."
          ref={textareaRef}
          name="report_text_area"
          className="min-h-28 rounded-md bg-[#ffffff14] p-2 pl-3 text-[12px] text-gray-200"
          id="REVIEW_T_A"
        ></textarea>
        <div className="flex flex-row justify-center gap-3">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star
              fill={rate >= i + 1 ? "gold" : ""}
              color="yellow"
              strokeWidth={0}
              size={20}
              onClick={() => {
                setRate(i + 1);
              }}
              className="cursor-pointer transition-all duration-200 ease-out"
            />
          ))}
        </div>
        <p className="text-[10px]">thank you for your time</p>
      </>
      <button
        onClick={() => {
          handelSendReview();
        }}
        className="app-button flex items-center justify-center"
      >
        {!isSendingMyReview ? (
          "Review"
        ) : (
          <RotateCwIcon className="animate-spin" size={18} />
        )}
      </button>
    </div>
  );
};

export default SendReviewDialog;
