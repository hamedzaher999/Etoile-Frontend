import { useState, useEffect } from "react";
import { navLinks } from "../constant";
import { menu, close, storelogo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToggle((prev) => (prev ? false : prev));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` ${className} shadow-[#6a0b8177] shadow-md
       md:px-[20px] lg:px-[80px] px-3 w-full flex 
          justify-between z-[60] py-2  bg-[#000000aa]`}
    >
      <div className="flex   items-center justify-between w-full px-3">
        {/* Logo */}
        <Link to="/" className="">
          <div className="flex flex-row items-center gap-4">
            <img
              src={storelogo}
              alt="logo"
              className="rounded-full border-blue-600 border-[2px] sm:h-[45px] h-[40px]"
            />
            <h1 className="md:text-[30px] text-[25px] leading-[0px] font-serif">
              Étoile
            </h1>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex w-full  justify-end ">
          <ul className="flex  ">
            {navLinks.map((link) => (
              <li key={link.title} className="py-2 px-4 lg:text-sm text-[10px]">
                <a href={link.id} className="pl-5  hover:text-[#6a0b81]">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div
          tabIndex={0}
          onBlur={() => {
            setTimeout(() => {
              setToggle(false);
            }, 500);
          }}
          onClick={(e) => {
            setToggle(!toggle);
          }}
          className=" p-2 cursor-pointer "
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="sm:hidden block"
          />
        </div>

        {/* Mobile dropdown */}
        <div
          className={
            !toggle
              ? "hidden"
              : "fixed  right-10 top-10 z-[5] h-fit w-32 items-center rounded-[15px] border-[2px] bg-[#0000008b]"
          }
        >
          <ul className="items-center">
            {navLinks.map((link) => (
              <li key={link.title} className="py-2 px-1">
                <a
                  href={link.id}
                  className="px-5 text-[14px] hover:scale-110 hover:text-blue-500"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
