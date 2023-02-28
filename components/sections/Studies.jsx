import React from "react";
import students from "/public/images/students.jpeg";
import red from "/public/images/red.jpeg";
import junior from "/public/images/junior.png";
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
      image: red,
      link: "Aalto University Open University",
      descr:
        "Open University courses are open to everyone regardless of background or age. Open University offers individual courses in Business, Technology, Languages, and Art and Design. Students are ad",
    },
    {
      image: junior,
      link: "Aalto University Junior",
      descr:
        "Aalto University Junior is art, science, technology and entrepreneurship for children, young people and teachers - to support teaching, personal joy and a source of enthusiasm.ss",
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
