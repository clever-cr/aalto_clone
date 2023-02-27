import React from "react";
import QuickLink from "../ui/QuickLink";
import old from "/public/images/old.jpeg";
import Wrapper from "../layout/Wrapper";
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
      <Wrapper>
        <QuickLink title="Community voices" content={data} />
      </Wrapper>
    </div>
  );
};

export default Community;
