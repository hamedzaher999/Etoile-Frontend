import { state, english } from "../../store";
import { useContext, useState } from "react";
import { MyContext } from "../pages/View3D";
const PlanetsNav = (props) => {
  const [lookAtContext, SetLookAtContext] = useContext(MyContext);
  const { setIsModelOpen } = props;
  const [isNavOpen, SetIsNavOpen] = useState(false);
  return (
    <div>
      <div className="  hidden  pr-1 pt-5 absolute z-10  top-[50px] right-0 sm:flex flex-col list-none items-center justify-center  ">
        {Object.keys(english).map((e) => (
          <li key={e}>
            <button
              className={
                (lookAtContext === e
                  ? "border-blue-500 border-[2px]  text-blue-500"
                  : " border-[2px] text-white") +
                "  p-2 m-2 overflow-hidden w-[50px] h-[50px] hover:border-[2.5px] items-center rounded-full hover:text-white"
              }
              onClick={() => {
                state.lookAt = english;
                state.target = english[e].position;
                // orb=false
                state.name = e;
                SetLookAtContext(e);
                // console.log(lookAt)
                english[e].isOpen = true;
                english[lookAtContext].isOpen = false;
                setIsModelOpen(false);
              }}
            >
              {e.substring(0, 2)}
            </button>
          </li>
        ))}
      </div>

      <div className="absolute hover:cursor-pointer flex-col z-[50] right-0 top-[50px] font-bold sm:hidden  p-2 m-2    items-center flex justify-center   ">
        <div
          onClick={() => {
            SetIsNavOpen(!isNavOpen);
          }}
          className="font-bold sm:hidden bg-blue-500  w-[40px] h-[40px] hover:border-[2.5px] items-center flex justify-center rounded-full hover:text-white text-black"
        >
          p
        </div>

        {isNavOpen && (
          <div className="  flex flex-col list-none items-center justify-center  ">
            {Object.keys(english).map((e) => (
              <li key={e}>
                <button
                  className={
                    (lookAtContext === e
                      ? "border-blue-500 border-[2px]  text-blue-500"
                      : " border-[2px] text-white") +
                    "   mt-2 overflow-hidden w-[40px] h-[40px] hover:border-[2.5px] items-center rounded-full hover:text-white"
                  }
                  onClick={() => {
                    state.lookAt = english;
                    state.target = english[e].position;
                    // orb=false
                    state.name = e;
                    SetLookAtContext(e);
                    // console.log(lookAt)
                    english[e].isOpen = true;
                    english[lookAtContext].isOpen = false;
                    setIsModelOpen(false);
                    SetIsNavOpen(!isNavOpen);
                  }}
                >
                  {e.substring(0, 2)}
                </button>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default PlanetsNav;
