import React, { useState, createContext } from "react";
import { StarsCanvas } from "../canvas";
import About from "../About";

export const MyContext = createContext();
const View3D = () => {
  const [lookAtContext, setLookAtContext] = useState("Sun");
  const [isSolarSystemLoaded, setIsSolarSystemLoaded] = useState(false);
  return (
    <section>
      <StarsCanvas />
      <MyContext.Provider value={[lookAtContext, setLookAtContext]}>
        <About setIsSolarSystemLoaded={setIsSolarSystemLoaded} />
      </MyContext.Provider>
    </section>
  );
};

export default View3D;
