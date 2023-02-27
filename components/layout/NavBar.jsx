import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillLock,
  AiOutlineHeart,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Wrapper from "./Wrapper";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const whenIsScrolled = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", whenIsScrolled);
  });
  const data = [
    {
      icon: <AiFillLock className="sm:hidden" />,
      link: "For personnel",
    },
    {
      icon: <AiOutlineHeart className="sm:hidden" />,
      link: "Support us",
    },
    {
      icon: <GrLanguage className="sm:hidden" />,
      link: "EN",
      down: <AiOutlineDown className="sm:hidden" />,
    },
    {
      icon: <CiSearch />,
      link: "search",
    },
    {
      icon: <AiOutlineMenu className="sm:hidden" />,
      link: "menu",
    },
  ];
  return (
    <div
      className={`px-[80px] duration-500 border-b border-black bg-white sm:px-5 sm:py-[16px] fixed z-10 w-full ${
        isScrolled ? "py-[4px] " : " pt-[23px]"
      }`}
    >
      <Wrapper>
        <div className="flex items-center gap-x-[475px] sm:gap-x-0 justify-between">
          <Image
            width={97}
            height={68}
            className={`sm:hidden ${
              isScrolled ? "w-[40px] h-[28px] " : "h-[68px] w-[97px] "
            }`}
            src="/images/logo.png"
            alt=""
          />
          <Image
            width={37}
            height={26}
            className="h-[26px] w-[37px] hidden sm:block"
            src="/images/smallLogo.png"
            alt=""
          />
          <div className="gap-x-[44px] flex items-center">
            <div className="flex gap-x-[44px]">
              {data.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-x-[8px] hover:bg-[#E3E3E3]`}
                  >
                    <>{el.icon} </>
                    <Link
                      href="#"
                      className={`${index == 4 ? "sm:block" : "sm:hidden"}`}
                    >
                      {" "}
                      {el.link}{" "}
                    </Link>
                    <>{el.down}</>
                  </div>
                );
              })}
            </div>
            <button className="px-[31px] py-2.5 bg-black text-white rounded-full sm:hidden hover:bg-yellow hover:text-black">
              log in
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBar;
