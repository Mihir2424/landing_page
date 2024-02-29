"use client";

import React from "react";
import Aboutcard from "./aboutcard";
import { aboutArr } from "@/constant/aboutcontent";
import { ParallaxProvider } from "react-scroll-parallax";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center py-24 w-full h-full min-h-screen relative"
      id="about"
    >
      <div className="bg-gradient-to-br from-[#33334c] via-[#bcbaba] to-[#605f5f] bg-clip-text flex items-center justify-center flex-col">
        <h1 className="raleWayFont text-transparent text-center text-[35px] md:text-[48px] font-semibold uppercase tracking-[5px]">
          What are we?
        </h1>
        <i className="text-transparent indieFont text-center text-[17px] md:text-[20px]">
          Off-market $Exchange is a peer-to-peer trading platform.
        </i>
      </div>
      <div className="flex items-center justify-center">
        <ParallaxProvider>
          <div className="grid grid-cols-2 max-md:px-[30px] md:grid-cols-6 place-items-center max-w-7xl mt-28 gap-6">
            {aboutArr?.map((item) => (
              <Aboutcard
                key={item?.id}
                title={item.title}
                icon={item.icon}
                bgIcon={item.bgIcon}
                description={item.description}
              />
            ))}
          </div>
        </ParallaxProvider>
      </div>
    </div>
  );
};

export default AboutSection;
