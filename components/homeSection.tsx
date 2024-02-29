"use client";

import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import heroBg from "@/assets/heroBg.png";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center w-full h-full min-h-screen relative"
      style={{
        backgroundImage:
          "linear-gradient(to top, #000, rgba(0, 0, 0, .5)), radial-gradient(circle at 50% 0, #436693, rgba(29, 74, 255, 0))",
      }}
    >
      <Image
        alt="heroBg"
        src={heroBg}
        width={300}
        height={300}
        className="absolute top-0 left-0 object-cover w-full h-full opacity-[0.16]"
      />
      <ParallaxProvider>
        <Parallax speed={-10}>
          <div className="bg-gradient-to-br from-[#33334c] via-[#bcbaba] to-[#605f5f] bg-clip-text flex items-center justify-center flex-col">
            <h1 className="raleWayFont text-transparent text-[50px] md:text-[90px] text-center flex items-start leading-[60px] md:leading-[80px] tracking-[6px] font-bold uppercase">
              Off-Market{" "}
              <i className="text-[30px] md:text-[70px] max-md:hidden">
                &nbsp;$
              </i>
              EXCHANGE
            </h1>
            <div className="flex justify-center mt-2">
              <i className="text-transparent text-center indieFont text-[20px]">
                Revolutionizing Crypto Peer-to-Peer Trading
              </i>
            </div>
            <div className="flex justify-center cursor-pointer ">
              <button
                type="button"
                className="raleWayFont shadow-lg shadow-[#5f5f5f] hover:shadow-2xl hover:shadow-[#dbdbdb] hover:translate-y-[-3px] transition-all ease-in-out duration-300  flex gap-2 items-center bg-gradient-to-r from-[#6e6d6d] via-[#686767] to-[#9a9999] px-4 py-1 text-black font-semibold uppercase text-[20px] rounded-lg mt-8"
              >
                Try now <FaLocationArrow />
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-8}>
          <div className="mouse translate-y-32 cursor-pointer" />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default HomeSection;
