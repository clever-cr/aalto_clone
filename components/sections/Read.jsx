import React from "react";
import Card from "../ui/Card";
import sensual from "/public/images/sensual.jpeg";
const Read = () => {
  const data = [
    {
      image: sensual,
      link: "Lifewide Learning",
      descr:
        "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
    },
    {
      image: sensual,
      link: "Lifewide Learning",
      descr:
        "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
    },
  ];
  return (
    <div className="pt-[72px] ">
      <div className="px-[80px] space-y-[16px] bg-light pt-[56px] pb-[80px] sm:px-5">
        <h2 className="text-[28px] leading-[33px] text-gray">
          Read about our research and donate
        </h2>
        <p className="text-lg leading-[26px] text-gray">
          At Aalto University, we create the conditions for innovation, economic
          growth, employment and wellbeing. A gift to the university is an
          investment in a better future.
        </p>
        <Card datas={data} cardStyle="grid-cols-2" style="bg-white " />
      </div>
    </div>
  );
};

export default Read;
