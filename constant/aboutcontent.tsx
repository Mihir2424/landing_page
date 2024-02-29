import { FaRegLightbulb } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { LiaThinkPeaks } from "react-icons/lia";
import { TbBrandMinecraft } from "react-icons/tb";

export const aboutArr = [
    {
      id: 1,
      title: "Decentralized trading",
      icon: <FaRegLightbulb className="text-[50px]" />,
      bgIcon: 
        <FaRegLightbulb className="text-[120px] opacity-[0.04] right-0 group-hover:opacity-[0.16] transition-all ease-in-out duration-300" />
      ,
      description:
        "Off-Market $MARKET is a revolutionary platform that facilitates direct trading between users, eliminating the need for intermediaries and enhancing transparency.",
    },
    {
      id: 2,
      title: "Secure trading",
      icon: <GrSecure className="text-[50px]" />,
      bgIcon: 
        <GrSecure className="text-[160px] opacity-[0.04] right-0 group-hover:opacity-[0.16] transition-all ease-in-out duration-300" />
      ,
      description:
        " Off-Market $MARKET prioritizes user experience and security by offering an intuitive interface and robust security measures to safeguard transactions.",
    },
    {
      id: 3,
      title: "Diverse Asset Coverage",
      icon: <LuArrowUpWideNarrow className="text-[50px]" />,
      bgIcon: 
        <LuArrowUpWideNarrow className="text-[160px] opacity-[0.04] right-0 group-hover:opacity-[0.16] transition-all ease-in-out duration-300" />
      ,
      description:
        "It caters to the evolving cryptocurrency landscape by supporting a broad spectrum of digital assets, including eth, ERC20, NFTs, and future emerging currencies.",
    },
    {
      id: 4,
      title: "Empowering Innovation",
      icon: <LiaThinkPeaks className="text-[50px]" />,
      bgIcon: 
        <LiaThinkPeaks className="text-[160px] opacity-[0.04] right-0 group-hover:opacity-[0.16] transition-all ease-in-out duration-300" />
      ,
      description:
        "It empowers users to take control of their financial future by providing direct access to a vast array of digital assets without the limitations or restrictions imposed by traditional exchanges.",
    },
    {
      id: 5,
      title: "Asset Ownership",
      icon: <TbBrandMinecraft className="text-[50px]" />,
      bgIcon: 
        <TbBrandMinecraft className="text-[160px] opacity-[0.04] right-0 group-hover:opacity-[0.16] transition-all ease-in-out duration-300" />
      ,
      description:
        "It fosters a fertile ground for innovation and growth within the cryptocurrency ecosystem by providing a platform where emerging digital currencies can thrive and gain traction among users.",
    },
  ];