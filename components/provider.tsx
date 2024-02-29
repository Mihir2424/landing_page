"use client";

import React, { ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
    children: ReactNode;
  }

const Provider : React.FC<Props> = ({ children }) => {

  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default Provider;
