import React from "react";
import InformationCard from "../ui/InformationCard";
import blue from "/public/images/blue.png";

const Information = () => {
  const info = [
    {
      link: "Ukraine war",
      descr: "On this page, we will gather information on how Russia's in",
      image: blue,
    },
    {
      link: "Ukraine war",
      descr: "On this page, we will gather information on how Russia's in",
      image: blue,
    },
  ];
  return (
    <div className="px-[80px] space-y-[40px] pt-[72px] pb-[56px]- sm:px-5">
      <h2 className="text-[28px] leading-[33px] text-gray">
        Information on Ukraine and coronavirus
      </h2>
      <InformationCard datas={info} styleImage="w-[109px] h-[78px]" />
    </div>
  );
};

export default Information;
