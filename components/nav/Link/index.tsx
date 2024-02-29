import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

type Data = {
  title: string;
  href: string;
  index: number;
};
type Props = {
    data : Data;
    isActive: boolean;
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>
}

export default function Index({ data, isActive, setSelectedIndicator }: Props) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
