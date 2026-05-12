import * as THREE from "three";

const handelSmallPackageAnimationFunc = function (params) {
  const { packageState, smallActions, setPackageState } = params;
  //small package animation
  for (let i = 0; i < smallActions.names.length; i++) {
    const action = smallActions.actions[smallActions.names[i]];
    if (packageState.start) {
      action.reset();
      // action.time = action.getClip().duration;
      action.paused = true;
      continue;
    }
    if (packageState.prevModel === "small" && packageState.prevIsOpen) {
      // action.reset().setLoop(THREE.LoopOnce).play();
      // action.clampWhenFinished = true;
      // action.timeScale = -1;
      // action.time = action.getClip().duration;
      action.reset();
      action.paused = true;
      continue;
    }
    if (packageState.model === "small") {
      action.paused = false;
      if (packageState.isSmallOpen) {
        action.reset().setLoop(THREE.LoopOnce).play();
        action.clampWhenFinished = true;
        action.timeScale = 1;
        continue;
      }
      if (!packageState.isSmallOpen) {
        action.reset().setLoop(THREE.LoopOnce).play();
        action.clampWhenFinished = true;
        action.timeScale = -1;
        action.time = action.getClip().duration;
        continue;
      }
    }
  }
  //big package animation
};

export default handelSmallPackageAnimationFunc;
