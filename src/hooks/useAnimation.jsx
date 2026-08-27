import * as THREE from "three";
import { usePackageStore } from "../store/order.store";
import { useEffect } from "react";

const useAnimation = (VIPanimation, CLASSICanimation) => {
  if (!VIPanimation && !CLASSICanimation) return;
  const isVipOpen = usePackageStore((s) => s.isVipOpen);
  const isClassicOpen = usePackageStore((s) => s.isClassicOpen);
  const model = usePackageStore((s) => s.model);
  const prevModel = usePackageStore((s) => s.prevModel);
  const start = usePackageStore((s) => s.start);

  useEffect(() => {
    for (let i = 0; i < VIPanimation.names.length; i++) {
      const action = VIPanimation.actions[VIPanimation.names[i]];
      if (isVipOpen && model === "VIP") {
        action.enabled = true;
        action.paused = false;
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.timeScale = 1;
        action.play();
        continue;
      }
      if (
        (!isVipOpen && model === "VIP" && start) ||
        (isVipOpen && model === "CLASSIC")
      ) {
        action.paused = false;
        action.enabled = true;

        action.timeScale = -1;

        if (action.time === 0) {
          action.time = action.getClip().duration;
        }

        action.play();
        continue;
      }
    }
    //
    for (let i = 0; i < CLASSICanimation.names.length; i++) {
      const action =
        CLASSICanimation.actions[CLASSICanimation.names[i]];
      if (isClassicOpen && model === "CLASSIC") {
        action.enabled = true;
        action.paused = false;
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.timeScale = 1;
        action.play();
        continue;
      }
      if (
        (!isClassicOpen && model === "CLASSIC" && start) ||
        (isClassicOpen && model === "VIP")
      ) {
        action.paused = false;
        action.enabled = true;
        action.timeScale = -1;
        if (action.time === 0) {
          action.time = action.getClip().duration;
        }

        action.play();
        continue;
      }
    }
    if (model === "VIP" && isClassicOpen) {
      usePackageStore.setState({ isClassicOpen: false });
    }
    if (model === "CLASSIC" && isVipOpen) {
      usePackageStore.setState({ isVipOpen: false });
    }
  }, [model, isVipOpen, isClassicOpen, prevModel]);
};

export default useAnimation;
