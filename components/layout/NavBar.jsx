import React from "react";
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
const NavBar = () => {
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
    <div className="px-[80px] pt-[23px] border-b border-black sm:px-5 sm:py-[16px]">
      <div className="flex items-center gap-x-[475px] sm:gap-x-0 justify-between">
        <Image
          width={97}
          height={68}
          className="h-[68px] w-[97px] sm:hidden"
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
    </div>
  );
};

export default NavBar;
