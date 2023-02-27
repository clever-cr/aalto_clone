import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ datas, style }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-[32px] sm:grid-cols-1  sm:gap-y-5">
        {datas.map((data, index) => {
          return (
            <div key={index} className={`border- sm:w-fit ${style}`}>
              <Image src={data.image} alt="" />
              <div className="space-y-[24px] px-[32px] py-[16px]">
                <div className="space-y-[20px] ">
                  <p className="text-[21px] leading-[25px] text-gray  ">
                    {data.link}
                  </p>
                  <p className="text-base leading-[25px] text-gray">
                    {data.descr}
                  </p>
                </div>

                <p className="text-sm leading-[25px] text-gray">{data.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
