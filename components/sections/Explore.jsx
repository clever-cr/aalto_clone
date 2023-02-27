import React from "react";
import rautio from "/public/images/rautio.jpeg";
import { IoCallOutline } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CommunityCard from "../ui/QuickLink";
import QuickLink from "../ui/QuickLink";
const Explore = () => {
  const links = [
    {
      icon: () => <FaPencilAlt className="w-12 h-10" />,
      text: "For personnel",
    },
    {
      icon: () => <FaPencilAlt className="w-12 h-10" />,
      text: "Alto Handbook",
    },
    {
      icon: () => <FaPencilAlt className="w-12 h-10" />,
      text: "Safety",
    },
  ];
  return (
    <div className="pt-[72px]">
      <div>
        <Image
          src={rautio}
          alt=""
          className="h-[400px] sm:w-[483px] object-cover"
        />
        <div className="px-[80px] relative -mt-[209px] sm:px-5">
          <div className="bg-yellow  py-[40px]">
            <h2 className="text-[75px] leading-[88px] pb-[81px] px-[40px] sm:text-[30px] sm:leading-[36px] font-bold">
              Explore Aalto University
            </h2>
            <div className="flex border-t justify-between px-[141px] sm:border-t-0  sm:flex-col sm:px-5 ">
              {["Study at Aalto", "Open positions", "Contact us"].map(
                (link, index) => {
                  return (
                    <div
                      key={index}
                      className={`border-r pr-[142px] py-[30px] sm:pr-0 sm:border-r-0 sm:border-t sm:py-[24px] sm:text-center ${
                        index == 2 ? "border-r-0" : ""
                      }`}
                    >
                      <Link
                        className="text-[28px] leading-[33px] text-gray underline "
                        href="#"
                      >
                        {link}
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <QuickLink title="Important quicklinks " content={links} hasIcon={true} />
    </div>
  );
};

export default Explore;
