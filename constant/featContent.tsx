import { GiTrade } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";

export const featArr = [
    {
      id: 1,
      title: "Peer-to-Peer Trading",
      icon: <GiTrade className="text-white text-[30px]" />,
      description:
        "Enables direct trades between users, bypassing intermediaries like exchanges. Users set their own prices and negotiate directly.",
    },
    {
      id: 2,
      title: "Multi-Currency Support",
      icon: <MdCurrencyExchange className="text-white text-[30px]" />,
      description:
        "Supports various cryptocurrencies, including Ethereum (ETH), ERC20 tokens, and NFTs. Future-ready for upcoming digital currencies.",
    },
    {
      id: 3,
      title: "Enhanced Security",
      icon: <IoShieldCheckmarkOutline className="text-white text-[30px]" />,
      description:
        "Prioritizes security with robust measures—advanced encryption and authentication ensure the safety of assets and transactions.",
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      icon: <LiaUserFriendsSolid className="text-white text-[30px]" />,
      description:
        "Features an intuitive interface for both novice and experienced traders, making cryptocurrency trading accessible and straightforward.",
    },
  ];
  