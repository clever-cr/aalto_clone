import React from "react";
import QuickLink from "../ui/QuickLink";
import old from "/public/images/old.jpeg";
const Community = () => {
  const data = [
    {
      image: old,
      text: "Watch our videos",
    },
    {
      image: old,
      text: "Watch our videos",
    },
    {
      image: old,
      text: "Watch our videos",
    },
  ];
  return (
    <div className="pt-[72px]">
      <QuickLink title="Community voices" content={data} />
    </div>
  );
};

export default Community;
