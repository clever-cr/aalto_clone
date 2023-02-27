import React from "react";
import unto from "/public/images/unto.jpeg";
import Link from "next/link";
import Image from "next/image";
const Schools = () => {
  const data = [
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
    {
      link: "School of Arts, Design and Architecture",
      descr: "School of Arts, Design and Architecture of the",
      image: unto,
    },
  ];
  return (
    <div className="px-[80px] space-y-[16px] sm:px-5">
      <h2 className="text-[28px] leading-[33px] text-gray">
        Explore our six schools
      </h2>
      <p className=" text-lg leading-[26px] text-gray">
        Scientific research and artistic activities are carried out at six
        schools and their departments and units.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[20px] ">
        {data.map((el, index) => {
          return (
            <div
              key={index}
              className="flex border justify-between items-end pl-[20px] "
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
              <Image src={el.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schools;
