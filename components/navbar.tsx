"use client";

import React from "react";
import styles from "./style.module.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [isActive, setIsActive] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isActive) setIsActive(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <>
      <div className=" fixed inset-x-0 top-0 z-[10] h-fit w-full px-[30px] py-2 flex justify-between items-center">
        <div>
          <h1 className="text-white font-semibold tracking-[4px] text-[24px] raleWayFont">
            LOGO
          </h1>
        </div>
        <div>
          <div className={styles.header}>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navbar;
