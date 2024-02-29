import React, { ReactElement } from "react";
import { Parallax } from "react-scroll-parallax";

type Props = {
  title?: string;
  description?: string;
  icon?: ReactElement;
  bgIcon?: ReactElement;
  big?: boolean;
};

const Aboutcard = ({ title, description, icon, bgIcon }: Props) => {
  return (
    <div
      className={`col-span-2 flex flex-col hover:scale-[1.03] gap-5 bg-gradient-to-tr from-[#b2b6b6a9] via-[#c9cfcfd2] to-[#737b7b9a] px-2 py-6 relative group transition-all ease-in-out duration-500`}
    >
      <Parallax speed={-4}>
        <div className="flex items-center">
          <h1 className="text-[black] font-semibold raleWayFont text-[24px] flex gap-2 items-center tracking-[1px]">
            <span className="group-hover:rotate-[10deg] transition-all ease-in-out duration-500">
              {icon}
            </span>{" "}
            {title}
          </h1>
        </div>
        <p className="px-2 raleWayFont font-[600] text-[13px] leading-[22px] indieFont">
          {description}
        </p>
      </Parallax>
      <div className="absolute bottom-[5px] right-0 text-[160px] opacity-[0.1] group-hover:opacity-[0.3] transition-all ease-in-out duration-300">
        {bgIcon}
      </div>
      <div className="absolute top-[-4px] group-hover:top-[-8px] left-[-4px] group-hover:left-[-8px] w-[60px] h-[60px] border-[1px] border-[#686b6b] group-hover:border-[#bec6c5] group-hover:border-t-[5px] group-hover:border-l-[5px] border-b-0 border-r-0 transition-all ease-in-out duration-500" />
      <div className="absolute bottom-[-4px] group-hover:bottom-[-8px] right-[-4px] group-hover:right-[-8px] w-[60px] h-[60px] border-[1px] border-[#686b6b] group-hover:border-[#bec6c5] group-hover:border-b-[5px] group-hover:border-r-[5px] border-t-0 border-l-0 transition-all ease-in-out duration-500" />
    </div>
  );
};

export default Aboutcard;
