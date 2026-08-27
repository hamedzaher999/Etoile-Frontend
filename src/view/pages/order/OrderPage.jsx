import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../home/Navbar";
import OrderDialog from "./components/OrderDialog";
import AppDialog from "../../customs/AppDialog";
import useOrderStore, {
  usePackageStore,
} from "../../../store/order.store";
import LoadingScreen from "../../shared/LoadingPage";
import { useSceneStore } from "../../../store/scene.store";
import gsap from "gsap";
const OrderPage = () => {
  const [order, setOrder] = useState(false);

  const isPageLoaded = useOrderStore((s) => s.isPageLoaded);
  const model = usePackageStore((s) => s.model);
  const isVipOpen = usePackageStore((s) => s.isVipOpen);
  const isClassicOpen = usePackageStore((s) => s.isClassicOpen);
  const setIsPageLoaded = useOrderStore((s) => s.setIsPageLoaded);
  const setScene = useSceneStore((s) => s.setScene);
  const toggleOpen = usePackageStore((s) => s.toggleOpen);
  const togglePackage = usePackageStore((s) => s.togglePackage);

  useEffect(() => {
    setScene("orderPage");
    gsap.killTweensOf("#actions button");
    gsap.set("#actions button", {
      y: 50,
      opacity: 0,
    });
    if (!isPageLoaded) return;
    gsap.to("#actions button", {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.2,
        from: "center",
      },
      duration: 0.6,
      delay: 0.2,
      ease: "circ",
    });

    return () => {
      setIsPageLoaded(false);
    };
  }, [isPageLoaded]);

  useLayoutEffect(() => {
    if (!isPageLoaded) return;
    const timeLine = gsap.timeline();
    gsap.killTweensOf("#title .letter");
    gsap.killTweensOf("#subtitle");

    timeLine
      .set("#title .letter", {
        x: (i, _, arr) => (i < arr.length / 2 ? -100 : 100),
        opacity: 0,
      })
      .set("#subtitle", {
        y: 20,
        opacity: 0,
      });

    timeLine
      .to(
        "#title .letter",
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.7,
        },
        "start",
      )
      .to(
        "#subtitle",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.7,
        },
        "start+=0.3",
      );
  }, [model, isPageLoaded]);
  return (
    <section className="relative z-[1000] flex h-screen flex-col overflow-hidden pt-[2.3rem]">
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

      {true && (
        <>
          {/* titles */}
          <div className="top-[50px] z-[1200] flex w-full flex-1 select-none flex-col pt-10 text-center md:top-[90px]">
            <h1
              id="title"
              className="overflow-visible py-3 font-serif text-5xl leading-none lg:text-7xl xl:text-8xl"
            >
              {(model == "VIP" ? "VIP" : "CLASSIC")
                .split("")
                .map((char, i) => (
                  <span
                    className="letter app-text-gradient inline-block p-1 font-serif"
                    key={char + i}
                  >
                    {char}
                  </span>
                ))}
            </h1>
            <p
              id="subtitle"
              className="pointer-events-none p-2 text-sm text-gray-500 lg:text-xs"
            >
              {model == "VIP"
                ? "Step into the VIP zone and enjoy first-class service."
                : "Enjoy our timeless and classic package"}
            </p>
          </div>
          {/* buttons */}
          <div
            id="actions"
            className={`flex w-full max-w-[600px] flex-row justify-between gap-3 self-center px-7 pb-4 lg:px-10`}
          >
            {" "}
            <button
              onClick={() => {
                toggleOpen();
              }}
              className="app-button-action flex flex-1 justify-center text-nowrap text-xs md:text-[14px]"
            >
              {(isVipOpen && model === "VIP") ||
              (isClassicOpen && model === "CLASSIC")
                ? "CLOSE"
                : "OPEN"}{" "}
              {model}
            </button>
            <button
              onClick={() => togglePackage()}
              className="app-button-action flex flex-1 justify-center text-nowrap text-xs md:text-[14px]"
            >
              {/* {model == "big" ? "See Classic" : "see VIP"} */}
              {model}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOrder((o) => !o);
              }}
              className="app-button-action flex flex-1 justify-center text-nowrap text-center text-xs md:text-[14px]"
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
