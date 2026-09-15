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
          style={{ zIndex }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeCallback?.();
          }}
          className={`${
            show ? "" : "pointer-events-none opacity-0"
          } fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-500`}
        >
          <div className="flex max-h-[85vh] max-w-full flex-col overflow-y-auto overflow-x-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
            {children}
          </div>
        </div>
        <div
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
