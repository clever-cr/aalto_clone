import React from "react";
import CampusCard from "../ui/CampusCard";
import ppl from "/public/images/pplo.jpeg";
import virtual from "/public/images/virtual.jpeg";
import Wrapper from "../layout/Wrapper";
const Campus = () => {
  return (
    <div>
      <Wrapper>
        <div className="py-[56px] space-y-[72px] sm:space-y-[96px]">
          <CampusCard
            image={ppl}
            title="Campus - lively and thriving"
            descr="Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together."
            links={[
              "Explore our vibrant innovation ecosystem",
              "Explore our campus",
              "Book a space",
            ]}
          />
          <CampusCard
            style="flex-row-reverse"
            image={virtual}
            title="Campus - lively and thriving"
            descr="Explore Aalto University’s campus from anywhere in the world! Our digital guides, an Aalto University student and an assistant professor, introduce you to our learning facilities, laboratories, workshops, service spots and outdoor spaces. The tour can be experienced on desktop, mobile or VR headset."
            links={["Visit Tour"]}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Campus;
