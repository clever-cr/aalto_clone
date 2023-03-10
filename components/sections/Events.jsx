import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import News from "../ui/News";
import solve from "/public/images/solve.png";
import future from "/public/images/future.jpeg";
import science from "/public/images/science.png";
import Wrapper from "../layout/Wrapper";

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
      image: future,
      link: "Energy Futures: Critical minerals, climate neutrality and transition pathways",
      descr:
        "An exhibition on energy transitions and the challenges and solutions driving our response to the global energy crisis across research and",
      date: "31.3.0 2.4.2023 | Events",
    },
    {
      image: science,
      link: "Sustainability Science Days 2023: PATHWAYS OF HOPE – Knowledge, Actions, Solutions",
      descr:
        "A hackathon on two continents for one purpose: building a better tomorrow",
      date: "31.3.0 2.4.2023 | Events",
    },
  ];
  return (
    <div className="pt-[56px] ">
      <Wrapper>
        {" "}
        <div className="px-[80px] space-y-[20px] bg-light pt-[16px] pb-[80px] sm:px-5">
          <div className="flex items-center justify-between">
            <News
              title="Join our many events "
              description="Find more current news and interesting events on the"
              sub=" News and events page."
            />
            <Button styleButton="sm:hidden" text="see all events" />
          </div>

          <Card datas={infos} style="bg-white" cardStyle="grid-cols-3" />
          <Button styleButton="hidden sm:block w-fit" text="see all events" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Events;
