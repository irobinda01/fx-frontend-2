import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-[1rem] md:px-[5.5rem] py-[1rem] relative">
      <img src={logo} className="w-[7rem] md:w-[10rem] lg:w-[12rem]" />

      {/* Menu button for mobile */}
      <div className={isOpen ? "hidden" : "lg:hidden"}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex flex-col gap-1 border-2 border-[#7F5CD5] p-2"
        >
          <div className="w-5 h-[0.1rem] bg-[#7F5CD5]"></div>
          <div className="w-5 h-[0.1rem] bg-[#7F5CD5]"></div>
          <div className="w-5 h-[0.1rem] bg-[#7F5CD5]"></div>
        </button>
      </div>
      <div className={isOpen ? "lg:hidden absolute right-40 z-20" : "hidden"}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex flex-col gap-1"
        >
          <div className="w-10 h-[0.8rem] bg-[#6D42AC] transform skew-y-20 translate-y-[1.2rem] scale-[0.5]"></div>
          <div className="w-10 h-1 bg-[#6D42AC] transform translate-y-2 scale-[0]"></div>
          <div
            className="w-10 h-[0.8rem] bg-[#6D42AC] transform -skew-y-20 translate-y-[-0.35rem] 
          scale-[0.5]"
          ></div>
        </button>
      </div>

      {/* Links for desktop */}
      <div className="hidden lg:flex justify-center">
        <ul className="list-none flex gap-[40px] pl-[8rem] pr-[1rem]">
          <li className="nav-items">
            <a
              href="#"
              className="no-underline text-[#333] py-0 px-[0.5rem] rounded-[4px] font-bold text-[13px]
            hover:text-[#6D42AC] transition-all duration-[0.3s]"
            >
              ABOUT
            </a>
          </li>
          <li className="group block]:">
            <a
              href="#"
              className="no-underline text-[#333] py-0 px-[0.5rem] rounded-[4px] font-bold text-[13px]
            hover:text-[#6D42AC] transition-all duration-[0.3s] flex justify-center"
            >
              MIRROR TRADE
            </a>
            <div
              className="absolute inline-flex top-[-300px] lg:left-[33.5rem] z-30 lg:group-hover:top-[69px] 
            bg-white lg:group-hover:right-20 w-[13.8%] pt-[3rem] transition-all duration-[1s]"
            >
              <ul className="flex flex-col list-none p-0 m-0">
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500">
                    OPTIONS COPY TRADING
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500">
                    STOCKS
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    FOREX
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500">
                    INDICES
                  </h1>
                </li>
              </ul>
            </div>
          </li>
          <li className="block group">
            <a
              href="#"
              className="no-underline text-[#333] py-0 px-[0.5rem] rounded-[4px] font-bold text-base 
            lg:text-[13px] hover:text-[#6D42AC] transition-all duration-[0.3s] flex justify-start"
            >
              INVESTMENT PRODUCT
            </a>
            <div
              className="absolute top-[-400px] lg:left-[43.1rem] z-30 lg:group-hover:top-[69px] bg-white
            lg:group-hover:right-20 w-[13.8%] pt-[3rem] transition-all duration-[1s]"
            >
              <ul className="flex flex-col list-none p-0 m-0">
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    OPTION TRADING
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    REAL ESTATE
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    STOCKS
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    INFRASTRUCTURE
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    FOREX TRADING
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    CRYPTO ASSET
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    FIXED INCOME
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    AGRICULTURE
                  </h1>
                </li>
              </ul>
            </div>
          </li>
          <li className="block group">
            <a
              href="#"
              className="no-underline text-[#333] py-0 px-[0.5rem] rounded-[4px] font-bold text-[13px]
            hover:text-[#6D42AC] transition-all duration-[0.3s] flex justify-center"
            >
              PLANING SERVICES
            </a>
            <div className="absolute top-[-300px] lg:left-[55.5rem] z-30 lg:group-hover:top-[69px] bg-white
            lg:group-hover:right-20 w-[13.8%] pt-[3rem] transition-all duration-[1s]"
            >
              <ul className="flex flex-col list-none p-0 m-0">
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    PLANNIG SERVICES
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    ASSETS MANAGEMENT
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    ALTERNATIVE INVESTING
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    RETIREMENT PLANNING
                  </h1>
                </li>
                <li
                  className="border-b-[1px] border-gray-200 font-semibold text-gray-500 text-[0.8rem] px-[1rem]
                py-[0.5rem] cursor-pointer hover:text-[#6D42AC]"
                >
                  <h1 className="hover:scale-x-110 hover:translate-x-2 transition-all duration-500 ">
                    PRIVATE WEALTH
                  </h1>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-items">
            <a
              href="#"
              className="no-underline text-[#333] py-0 px-[0.5rem] rounded-[4px] font-bold text-[13px]
            hover:text-[#6D42AC] transition-all duration-[0.3s] flex justify-center"
            >
              INSIGHT
            </a>
          </li>
        </ul>
        <button className="nav-btn">GET STARTED</button>
      </div>

      {/* Links for mobile */}
      {isOpen && (
        <div className="lg:hidden absolute right-0 top-5 z-10 bg-[gray] opacity-[3] px-5 pt-16 pb-5">
          <div className="space-y-2 flex flex-col gap-5">
            <a
              href="#"
              className="no-underline text-white font-bold hover:text-[#6D42AC]
            transition-all duration-[0.3s]"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block no-underline text-white font-bold hover:text-[#6D42AC]
            transition-all duration-[0.3s]"
            >
              MIRROR TRADE
            </a>
            <a
              href="#"
              className="block no-underline text-white font-bold hover:text-[#6D42AC]
            transition-all duration-[0.3s]"
            >
              INVESTMENT PRODUCT
            </a>
            <a
              href="#"
              className="block no-underline text-white font-bold hover:text-[#6D42AC]
            transition-all duration-[0.3s]"
            >
              PLANING SERVICES
            </a>
            <a
              href="#"
              className="block no-underline text-white font-bold hover:text-[#6D42AC]
            transition-all duration-[0.3s]"
            >
              INSIGHT
            </a>
            <button className="bg-gradient-to-tr from-[#6D42AC] to-[#8667E6] border-none
            rounded-[5px] text-[#fff] font-semibold py-4">GET STARTED</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
