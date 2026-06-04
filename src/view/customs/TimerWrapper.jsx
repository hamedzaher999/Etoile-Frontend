import { delay } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
export const Timer = createContext(null);

const TimerWrapper = ({ children }) => {
  const [isEndTimer, setIsEndTimer] = useState(true);
  const [timer, setTimer] = useState();
  const [running, setRunning] = useState(false);
  const startTimer = (ms) => {
    setTimer(ms);
    setIsEndTimer(false);
    setRunning(true);
  };
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setIsEndTimer(true);
          setRunning(false);
          return 0;
        }
        return t - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);
  const value = {
    timer,
    running,
    isEndTimer,
    startTimer,
    setTimer,
  };
  return <Timer.Provider value={value}>{children}</Timer.Provider>;
};

export default TimerWrapper;
