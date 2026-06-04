import { useEffect } from "react";
import { createPortal } from "react-dom";
const AppDialog = ({
  children,
  closeCallback,
  show = false,
  onScroll = true,
  zIndex = 1500,
}) => {
  useEffect(() => {
    const scroll = () => {
      closeCallback?.();
    };
    if (onScroll) window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [closeCallback]);
  const portal = document.getElementById("portal");
  return portal ? (
    createPortal(
      <div>
        <div
          style={{
            zIndex,
          }}
          className={`${show ? "" : "pointer-events-none opacity-0"} fixed left-1/2 top-1/2 flex max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border-[2px] border-gray-500 backdrop-blur-xl transition-all duration-500`}
        >
          {children}
        </div>
        <div
          onClick={() => {
            closeCallback?.();
          }}
          style={{
            zIndex: zIndex - 1,
          }}
          className={` ${show ? "" : "hidden"} fixed inset-0 backdrop-blur-sm`}
        />
      </div>,
      portal,
    )
  ) : (
    <></>
  );
};

export default AppDialog;
