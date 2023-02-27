import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = ({ title, description, sub }) => {
  return (
    <div>
      <div className="flex items-center justify-between pt-[40px] sm:pt-0 sm:flex-col">
        <div className="space-y-[16px]">
          <h2 className="text-[28px] leading-[33px] text-gray">{title}</h2>
          <h2 className="text-[21px] leading-[25px] text-gray">
            {description}{" "}
            <Link href="#" className="underline t">
              {sub}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default News;
