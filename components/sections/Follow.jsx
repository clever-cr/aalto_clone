import React from "react";
import Link from "next/link";
const Follow = () => {
  return (
    <div className="">
      <div className="bg-white pt-[56px]">
        <div className="bg-yellow text-center py-[107px] space-y-[32px] sm:py-[96px]">
          <h2 className="text-[75px] font-bold leading-[88px] sm:text-[30px] sm:leading-[36px]">
            Follow Us{" "}
          </h2>
          <div className="space-x-[19px] flex sm:flex-col justify-center">
            {["facebook,", "twitter,", "instagram ", "& LinkeIn"].map(
              (link, index) => {
                return (
                  <Link
                    className="text-[36px] leading-[42px] text-gray underline hover:bg-light w-fit-"
                    key={index}
                    href="#"
                  >
                    {link}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
