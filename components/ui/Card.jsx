import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ datas, style, cardStyle }) => {
  return (
    <div>
      <div
        className={`grid  gap-x-[32px] sm:grid-cols-1  sm:gap-y-5 ${cardStyle}`}
      >
        {datas.map((data, index) => {
          return (
            <div key={index} className={`border- sm:w-fit group ${style}`}>
              <Image src={data.image} alt="" />
              <div className="space-y-[24px] px-[32px] py-[16px]">
                <div className="space-y-[20px] ">
                  <p className="text-[21px] leading-[25px] text-gray group-hover:bg-light group-hover:w-fit ">
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
