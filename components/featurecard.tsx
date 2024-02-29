"use client";

import React, { ReactElement } from "react";

type Props = {
  icon?: ReactElement;
  title?: string;
  description?: string;
};

const Featurecard = ({ icon, title, description }: Props) => {
  return (
    <div
      className="col-span-2 p-2 flex gap-8 bg-gradient-to-br from-[#0a0a0a] via-[#192c44] to-[#2b3e567a] rounded-lg"
      id="featBox"
    >
      <div className="flex flex-col gap-2 py-3 items-center justify-center">
        {icon}
        <div className="w-[2px] h-[120px] bg-gradient-to-b from-[#949494] via-[#445c797a] to-[#949494]" />
      </div>
      <div className="h-full flex justify-center flex-col gap-2">
        <h1 className="raleWayFont text-[24px] text-white font-semibold">
          {title}
        </h1>
        <p className="text-white text-[14px] raleWayFont">{description}</p>
      </div>
    </div>
  );
};

export default Featurecard;
