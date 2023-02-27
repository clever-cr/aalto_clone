import Image from "next/image";
import Link from "next/link";
import React from "react";

const InformationCard = ({ datas, styleImage }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[20px] ">
        {datas.map((el, index) => {
          return (
            <div
              key={index}
              className="flex border justify-between  items-end pl-[20px] "
            >
              <div className="space-y-[5px]">
                <Link
                  className="text-[21px] leading-[25px] text-gray hover:bg-light"
                  href="#"
                >
                  {el.link}
                </Link>
                <p className="sm:hidden text-base leading-[25px] text-gray pb-[20px]">
                  {el.descr}
                </p>
              </div>
              <Image className={`${styleImage}`} src={el.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InformationCard;
