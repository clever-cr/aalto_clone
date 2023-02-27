import React from "react";
import Button from "../ui/button";
import Card from "../ui/Card";
import News from "../ui/News";
import solve from "/public/images/solve.png";

const Events = () => {
  const infos = [
    {
      image: solve,
      link: "Solve the SDGs 2023",
      descr:
        "A hackathon on two continents for one purpose: building a better tomorrow",
      date: "31.3.0 2.4.2023 | Events",
    },
    {
      image: solve,
      link: "Solve the SDGs 2023",
      descr:
        "A hackathon on two continents for one purpose: building a better tomorrow",
      date: "31.3.0 2.4.2023 | Events",
    },
    {
      image: solve,
      link: "Solve the SDGs 2023",
      descr:
        "A hackathon on two continents for one purpose: building a better tomorrow",
      date: "31.3.0 2.4.2023 | Events",
    },
  ];
  return (
    <div className="pt-[56px]">
      <div className="px-[80px] space-y-[20px] bg-light pt-[16px] sm:px-5">
        <div className="flex items-center justify-between">
          <News
            title="Join our many events "
            description="Find more current news and interesting events on the"
            sub=" News and events page."
          />
          <Button style="sm:hidden" text="see all events" />
        </div>

        <Card datas={infos} />
      </div>
    </div>
  );
};

export default Events;
