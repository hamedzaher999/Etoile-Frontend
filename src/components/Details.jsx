import { english } from "../store";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import { MyContext } from "./pages/View3D";
const Details = (props) => {
  const [lookAtContext, setLookAtContext] = useContext(MyContext);

  useEffect(() => {
    gsap.fromTo(
      "#title",
      {
        x: -150,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
      }
    );
  }, [lookAtContext]);

  return (
    <>
      <div
        id="title"
        className=" w-fit pt-[50px] pointer-events-none  absolute z-[1]  pl-5 xl:mt-6 mt-2 "
      >
        <p
          className={`font-black  pointer-events-none font-cormorant lg:text-[80px] sm:text-[60px]  text-[40px] lg:leading-[98px] mt-0 `}
          style={{ color: english[lookAtContext].color }}
        >
          {lookAtContext}
        </p>
        <p
          className="hover:text-[#f8f404] pointer-events-none
           font-cormorant pr-[60px] max-w-[650px] sm:text-[26px]  
                 sm:leading-[30px] text-[19px] leading-[24px] pl-[30px]"
        >
          {english[lookAtContext].description}
        </p>
        <div
          className=" w-fit lg:text-[80px] 
        pointer-events-none sm:text-[60px]

         text-[40px] "
        >
          <h1
            className={` font-bold font-cormorant  } `}
            style={{ color: english[lookAtContext].color }}
          >
            Ingredients
          </h1>
        </div>
        <ul className=" pl-5 w-fit  pointer-events-auto cursor-pointer ">
          {english[lookAtContext].ingredients.map((ingredients, index) => (
            <li
              key={index}
              className=" xl:text-[20px] hover:font-bold sm:text-[16px] text-[14px]  font-cormorant hover:text-[#062adb]  xl:m-2 m-1 border bg-[#ffffff00] w-fit rounded-[5px] p-[5px]"
            >
              {ingredients}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Details;
