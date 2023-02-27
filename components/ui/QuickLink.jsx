import React from "react";
import Link from "next/link";
import Image from "next/image";

const QuickLink = ({ title, content = [], hasIcon }) => {
  return (
    <div>
      <div className="flex flex-col items-center py-[72px] gap-y-[20px] ">
        <h2 className="text-[28px] leading-[33px] text-gray">{title}</h2>
        <div className="flex justify-between- gap-x-[149px] sm:flex-col sm:gap-y-[20px]">
          {content.map((el, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-x-[10px] group  "
              >
                {hasIcon ? (
                  <div className="bg-yellow px-[22px] py-[22px] rounded-full sm:px-[18px] sm:py-[18px] ">
                    <>{el.icon()}</>
                  </div>
                ) : (
                  <Image
                    className="rounded-full object-cover h-[80px] w-[80px]"
                    src={el.image}
                    alt=""
                  />
                )}

                <Link
                  className="text-[21px] leading-[25px] text-gray group-hover:bg-light"
                  href="#"
                >
                  {el.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
