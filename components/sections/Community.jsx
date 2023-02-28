import React from "react";
import QuickLink from "../ui/QuickLink";
import old from "/public/images/old.jpeg";
import girls from "/public/images/girls.jpeg";
import boys from "/public/images/boys.jpeg";
import Wrapper from "../layout/Wrapper";
const Community = () => {
  const data = [
    {
      image: old,
      text: "Watch our videos",
    },
    {
      image: girls,
      text: "Watch our videos",
    },
    {
      image: boys,
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
