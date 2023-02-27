import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const CampusCard = ({ image, title, descr, links = 0, style }) => {
  return (
    <div
      className={`flex items-center px-[80px] justify-between gap-x-[56px] sm:flex-col sm:px-5 ${style} `}
    >
      <Image src={image} alt="" className="w-[680px] h-[510px] object-cover" />
      <div className="space-y-[24px] sm:pt-[32px]">
        <div className="space-y-[16px] ">
          <h2 className="text-[28px] leading-[33px] text-gray">{title}</h2>
          <p className="text-lg leading-[26px] text-gray">{descr}</p>
        </div>
        <div className="space-y-[24px]">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className="flex items-center hover:bg-light gap-x-[5px]"
              >
                <BsArrowRight />
                <Link
                  className="text-lg leading-[22px] text-gray underline"
                  href="#"
                >
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CampusCard;
