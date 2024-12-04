import { Bell, Menu, Search } from "lucide-react";
import logo from "./assets/logo.svg";
import profile from "./assets/Profile.png";
import { IoCaretDownOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });


  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 75) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  return (
	<div  className={` min-w-full w-full border-b-2 bg-white border-[#F4F4F6]${
    active
      ? " bg-white border-[#F4F4F6] fixed top-0 left-0  w-full h-[80px] z-[80]  shadow-xl transition duration-500"
      : "w-full  h-[80px] z-[80] "
  }`}>

    <div className="flex flex-row max-w-[1440px] px-12 py-5 justify-between align-middle items-center h-20 mx-auto">
      <div>
        <img src={logo} alt="logo" />
      </div>
      {!isMobile && (
        <>
          <div className="relative  sm:w-full">
            {!isFocused && (
              <Search
                className="absolute inset-y-0 left-2 top-4 text-gray-400"
                size={21}
              />
            )}
            <input
              type="text"
              placeholder="Search"
              className="bg-bg-form placeholder:pl-6  text-gray-700 h-12 max-w-[460px]  w-[460px] border-[1px] p-3 rounded-xl outline-none border-solid border-[#DAE1F11A] border-opacity-10"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-row justify-center align-middle items-center gap-4">
            <Bell />
            <div className="flex flex-row items-center gap-2 h-10">
              <img src={profile} alt="" />
              <IoCaretDownOutline size={20} />
            </div>
          </div>
        </>
      )}
	  {isMobile && (
		<div>
			<Menu />
		</div>
	  )}
    </div>
	</div>
  );
};

export default Navbar;
