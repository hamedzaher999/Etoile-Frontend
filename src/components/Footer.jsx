import React from "react";
import { footer } from "../constant";
import dotearth from "../assets/dotearth.png";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="  font-serif w-full pb-4 mb-1 bg-black relative flex-col flex  border "
    >
      <div className="relative overflow-hidden">
        <div className="absolute right-0 max-w-[350px] pr-10 pt-10 items-center z-[1] pointer-events-none">
          <img src={dotearth} alt="earth" />
        </div>
        <div className="w-full  flex-row p-5  flex-wrap flex sm:p-3 ">
          <div className=" min-w-[300px] py-2 px-7">
            <h2 className="font-bold font-sans capitalize text-[#6a0b81] text-xl">
              contact Info
            </h2>
            <ul>
              <li>
                {Object.keys(footer.contactInfo).map((element, i) => (
                  <div
                    key={element}
                    className="  flex flex-row m-1 content-center "
                  >
                    <h3 className=" font-sans text-center pr-2 text-sm content-center ml-2">
                      {element + " :"}
                    </h3>
                    <h3 className="font-sans hover:text-blue-600 hover:font-bold hover:cursor-pointer text-xs content-center">
                      {footer.contactInfo[element]}
                    </h3>
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div className=" min-w-[300px] py-2 px-7">
            <h2 className="font-bold font-sans capitalize text-[#6a0b81] text-xl ">
              social Media
            </h2>
            <ul>
              <li>
                {Object.keys(footer.socialMedia).map((element, i) => (
                  <div
                    key={element}
                    className=" flex flex-row m-1 content-center "
                  >
                    <div className="h-7 w-7 ">
                      <img src={footer.socialMedia[element].icon} alt="" />
                    </div>
                    <h3 className="font-sans text-center hover:text-blue-600 hover:font-bold hover:cursor-pointer text-sm content-center ml-2">
                      {element}
                    </h3>
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div className=" min-w-[300px] py-2 px-7">
            <h2 className="font-bold  font-sans text-xl capitalize text-[#6a0b81]">
              Quick Links
            </h2>
            <ul>
              <li>
                {footer.quickLinks.map((element) => (
                  <div
                    key={element.name}
                    className=" flex flex-row m-1 content-center "
                  >
                    <h3 className="text-sm font-sans hover:font-bold hover:text-blue-600 hover:cursor-pointer text-center content-center ml-2">
                      {element.name}
                    </h3>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="border p-2 m-3 flex-row justify-center flex">
          {footer.paymentMethods.map((element) => (
            <div
              key={element.name}
              className="p-1 justify-center flex flex-col items-center"
            >
              <div className="h-[30px] w-[30px] bg-white items-center object-center ">
                <img src={element.iconUrl} alt="" className="" />
              </div>
              <p className="text-xs mt-1">{element.name}</p>
            </div>
          ))}
        </div>
        <p className="p-3 justify-center text-xs text-center">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
