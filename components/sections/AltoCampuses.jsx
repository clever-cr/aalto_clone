import React from "react";
import uni from "/public/images/uni.jpeg";
import roads from "/public/images/roads.jpeg";
import stairs from "/public/images/stairs.jpeg";
import yellow from "/public/images/yellow.jpeg";
import develop from "/public/images/develop.jpeg";
import student from "/public/images/student.jpeg";
import model from "/public/images/model.jpeg";
import Image from "next/image";
import forum from "/public/images/forum.jpeg";
import Wrapper from "../layout/Wrapper";
const AltoCampuses = () => {
  const campuses = [
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: roads,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: stairs,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: yellow,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: develop,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: model,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: student,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: forum,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
  ];

  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-4 px-[80px] gap-x-[16px] gap-y-[20px] sm:grid-cols-2 sm:px-5 pt-[16px]">
          {campuses.map((campus, index) => {
            return (
              <div key={index} className="space-y-[2px]">
                <Image src={campus.image} alt="" />
                <p className="text-[14px] leading-[18px] text-[#4a4a4a]">
                  {campus.text}
                </p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default AltoCampuses;
