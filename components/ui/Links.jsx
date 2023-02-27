import Link from "next/link";
import React from "react";

const Links = ({ links = [], title }) => {
  return (
    <div className="space-y-[8px]">
      <h2 className="text-[21px] leading-[25px] text-gray">{title}</h2>
      <div className="flex flex-col space-y-[9px]">
        {links.map((link, index) => {
          return (
            <Link
              className="text-base leading-[19px] text-gray underline hover:bg-light hover:w-fit"
              key={index}
              href="#"
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
