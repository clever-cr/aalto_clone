import React from "react";
import students from "/public/images/students.jpeg";
import Card from "../ui/Card";
const Studies = () => {
  const info = [
    {
      image: students,
      link: "Lifewide Learning",
      descr:
        "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
    },
    {
      image: students,
      link: "Lifewide Learning",
      descr:
        "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
    },
    {
      image: students,
      link: "Lifewide Learning",
      descr:
        "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
    },
  ];

  return (
    <div className="px-[80px] bg-light pt-[56px] pb-[80px] space-y-[20px] sm:px-5">
      <h2 className="text-[28px] leading-[33px] text-gray">
        Studies and courses open to all
      </h2>
      <Card datas={info} style="bg-white" cardStyle="grid-cols-3" />
    </div>
  );
};

export default Studies;
