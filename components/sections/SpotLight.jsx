import React from "react";
import News from "../ui/News";
import Card from "../ui/Card";
import pxl from "/public/images/PXL_20220622_103655210_0.jpeg";
import Button from "../ui/Button";
import Wrapper from "../layout/Wrapper";
import pipot from "/public/images/pipot4_1.jpeg";
import slush from "/public/images/slush.jpeg";
const SpotLight = () => {
  const info = [
    {
      image: pxl,
      link: "Shrinking from the heat",
      descr: "Reactive fabrics respond to changes in temperature",
      date: " 21.2.2023 | News",
    },
    {
      image: pipot,
      link: "Knit an Aalto hat for yourself or a friend!",
      descr:
        "Follow Marja Niemi and Outi Elina Kansanen’s knitting pattern to make a lovely gift for someone special",
      date: " 21.2.2023 | News",
    },
    {
      image: slush,
      link: "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking",
      descr: "UBI Global World Benchmark Study ranks top",
      date: " 21.2.2023 | News",
    },
  ];
  return (
    <div className="px-[80px] sm:px-5 sm:pt-5">
      <Wrapper>
        <div className=" space-y-[20px]">
          <div className="flex items-center justify-between ">
            <News
              title="Spotlight "
              description="Find more current news and interesting
      events on the"
              sub=" News and events page."
            />
            <Button
              text="See all Aalto University news "
              styleButton="sm:hidden"
            />
          </div>

          <Card datas={info} style="border" cardStyle="grid-cols-3" />
          <Button
            text="See all Aalto University news "
            styleButton=" hidden sm:block w-fit"
          />
        </div>
      </Wrapper>
    </div>
  );
};
export default SpotLight;
