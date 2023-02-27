import React from "react";
import uni from "/public/images/uni.jpeg";
import Image from "next/image";
const AltoCampuses = () => {
  const campuses = [
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      image: uni,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
  ];

  return (
    <div>
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
    </div>
  );
};

export default AltoCampuses;
