import React from "react";
import News from "../ui/News";
import Card from "../ui/Card";
import pxl from "/public/images/PXL_20220622_103655210_0.jpeg";
import Button from "../ui/Button";
import Wrapper from "../layout/Wrapper";
const SpotLight = () => {
  const info = [
    {
      image: pxl,
      link: "Shrinking from the heat",
      descr: "Reactive fabrics respond to changes in temperature",
      date: " 21.2.2023 | News",
    },
    {
      image: pxl,
      link: "Shrinking from the heat",
      descr: "Reactive fabrics respond to changes in temperature",
      date: " 21.2.2023 | News",
    },
    {
      image: pxl,
      link: "Shrinking from the heat",
      descr: "Reactive fabrics respond to changes in temperature",
      date: " 21.2.2023 | News",
    },
  ];
  return (
    <div className="px-[80px] space-y-[20px] sm:px-5 sm:pt-5">
      <Wrapper>
        {" "}
        <div>
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
        </div>
      </Wrapper>
    </div>
  );
};
export default SpotLight;
