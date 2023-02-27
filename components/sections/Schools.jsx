import React from "react";
import unto from "/public/images/unto.jpeg";
import Link from "next/link";
import Image from "next/image";
import InformationCard from "../ui/InformationCard";
import Wrapper from "../layout/Wrapper";
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
      <Wrapper>
        <div>
          <h2 className="text-[28px] leading-[33px] text-gray">
            Explore our six schools
          </h2>
          <p className=" text-lg leading-[26px] text-gray">
            Scientific research and artistic activities are carried out at six
            schools and their departments and units.
          </p>
          <InformationCard datas={data} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Schools;
