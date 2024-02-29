"use client";

import React from "react";
import Featurecard from "./featurecard";
import { featArr } from "@/constant/featContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Features = (props: Props) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#featuresDiv",
      {
        y: 100,
        opacity: 0.4,
        background: "#1f3856",
      },
      {
        scrollTrigger: {
          trigger: "#features",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        background: "#0A1420",
        duration: 1.3,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#featBox",
      {
        y: 100,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#features",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#featureText",
      {
        y: 100,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#features",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        stagger: 0.03,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
      }
    );
  });
  return (
    <div
      className="flex flex-col w-full h-full min-h-screen relative pt-24 px-6 md:px-12"
      id="features"
    >
      <div className="bg-[#0A1420] h-full rounded-lg p-4 pb-8" id="featuresDiv">
        <div className="px-[5px] md:px-8" id="featureText">
          <h1 className="text-white raleWayFont text-[30px] md:text-[40px] leading-[40px] md:leading-[50px] font-bold ">
            Features
          </h1>
          <h1 className="text-white raleWayFont text-[30px] md:text-[40px] leading-[40px] md:leading-[50px] font-bold ">
            and functionality
          </h1>
          <p className="text-white raleWayFont text-[14px] md:text-[16px] w-[95%] md:w-[50%] mt-2">
            Off-Market $MARKET enables peer-to-peer trades, supports multiple
            cryptocurrencies, prioritizes security, and offers a user-friendly
            interface.
          </p>
        </div>
        <div
          className="mt-12 grid grid-cols-2 max-md:px-[0px] md:grid-cols-4 gap-8 px-8"
          id="featCon"
        >
          {featArr?.map((item) => (
            <Featurecard
              key={item?.id}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
