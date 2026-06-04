import { useEffect, useState } from "react";
import Navbar from "../home/Navbar";
import OrderDialog from "./components/OrderDialog";
import AppDialog from "../../customs/AppDialog";
import useOrderStore from "../../../store/order.store";
import LoadingScreen from "../../shared/LoadingPage";
import { useSceneStore } from "../../../store/scene.store";
const OrderPage = () => {
  const isPageLoaded = useOrderStore((s) => s.isPageLoaded);
  const { model, isOpen, isSmallOpen, isBigOpen, setState } =
    useOrderStore();
  const setIsPageLoaded = useOrderStore((s) => s.setIsPageLoaded);
  const setScene = useSceneStore((s) => s.setScene);
  useEffect(() => {
    setScene("orderPage");
    return () => {
      setIsPageLoaded(false);
    };
  }, []);

  const [order, setOrder] = useState(false);
  return (
    <section className="relative z-[1000] flex h-screen flex-col pt-[2.3rem]">
      {!isPageLoaded && <LoadingScreen />}
      <Navbar />
      <AppDialog
        show={order}
        onScroll={false}
        closeCallback={() => {
          setOrder(false);
        }}
      >
        <OrderDialog />
      </AppDialog>

      {isPageLoaded && (
        <>
          {/* titles */}
          <div className="top-[50px] z-[1500] flex w-full flex-1 select-none flex-col pt-10 text-center md:top-[90px]">
            <h1 className="text-l font-serif text-5xl text-purple-600 lg:text-7xl xl:text-8xl">
              {model == "big" ? "VIP Package" : "Everyday Package"}
            </h1>
            <p className="pointer-events-none pt-4 text-[9px] text-gray-400 lg:text-xs">
              {model == "big"
                ? "Step into the VIP zone and enjoy first-class service."
                : "Enjoy our timeless and classic package"}
            </p>
            <div>
              <p className="cursor-pointer p-2 text-xs text-blue-400">
                {model == "big" ? "100$" : "70$"}
              </p>
            </div>
          </div>
          {/* buttons */}
          <div
            className={`flex w-full flex-row justify-between px-7 pb-4 lg:px-10`}
          >
            <button
              onClick={() => {
                setState({
                  isBigOpen: false,
                  isSmallOpen: false,
                  prevModel: model === "big" ? "big" : "small",
                  model: model === "big" ? "small" : "big",
                  prevIsOpen:
                    model === "big" ? isBigOpen : isSmallOpen,
                });
              }}
              className="app-button-action flex justify-center text-nowrap text-xs md:text-[14px]"
            >
              {model == "big" ? "See Classic" : "see VIP"}
            </button>

            <button
              onClick={() => {
                setState({
                  isOpen: !isOpen,
                  isBigOpen: model === "big" ? !isBigOpen : isBigOpen,
                  isSmallOpen:
                    model === "small" ? !isSmallOpen : isSmallOpen,
                  start: false,
                });
              }}
              className="app-button-action flex justify-center text-nowrap text-xs md:text-[14px]"
            >
              {model === "big"
                ? isBigOpen
                  ? "close VIP Package"
                  : "open VIP Package"
                : isSmallOpen
                  ? "close Classic Package"
                  : "open Classic Package"}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOrder((o) => !o);
              }}
              className="app-button-action flex justify-center text-nowrap text-center text-xs md:text-[14px]"
            >
              {"Order Now"}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default OrderPage;
