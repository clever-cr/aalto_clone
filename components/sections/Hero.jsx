import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
const Hero = () => {
  return (
    <div className="sm:flex sm:flex-col-reverse">
      <div className="">
        <Image
          width={1519}
          height={506}
          className="h-[506px] sm:w-[483px] sm:h-[210px]"
          src="/images/trev.png "
          alt=""
        />
      </div>
      <div className="bg-black text-white  relative -mt-[302px] ml-[40px] sm:mt-0 sm:ml-0 px-[40px] py-[24px] w-[680px] h-[344px] space-y-[16px] sm:w-auto sm:h-auto">
        <h2 className="text-[36px] leading-[42px]">
          Aalto student – New Student Guide is here to replace Into
        </h2>
        <p className="text-[21px] leading-[25px]">
          The into.aalto.fi contents have been migrated to the Aalto.fi site
          with information and news for students.
        </p>
        <div className="space-y-[8px]">
          {["Student Guide", "Read the news"].map((el, index) => {
            return (
              <div key={index} className="flex items-center gap-x-[5px]">
                <BsArrowRight />
                <Link className="text-lg leading-[22px]" href="#">
                  {el}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <AiOutlineLeft className="border w-[32px] h-[32px] rounded-full p-[2px]" />

          <div className="flex  items-center sm:hidden">
            <GoPrimitiveDot className="w-10 h-10" />
            <RxDotFilled className="w-[30px] h-[30px]" />
            <RxDotFilled className="w-[30px] h-[30px]" />
            <RxDotFilled className="w-[30px] h-[30px]" />
          </div>

          <AiOutlineRight className="border w-[32px] h-[32px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
