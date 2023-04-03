import { IoMdHome, IoMdBookmark } from "react-icons/io";
import { HiUser, HiUsers } from "react-icons/hi";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

export const leftSideBarData = {
  link: [
    { title: "Home", type: "link", url: "/", icon: <IoMdHome className="text-2xl" /> },
    { title: "Profile", type: "link", url: "/profile", icon: <HiUser className="text-2xl" /> },
    { title: "Friends", type: "link", url: "/friends", icon: <HiUsers className="text-2xl" /> },
    { title: "Saved", type: "link", url: "/saved", icon: <IoMdBookmark className="text-2xl" /> },
  ],
  theme: {
    title: ["Dark Mode", "Light Mode"],
    icon: [<MdNightlightRound className="text-2xl" />, <MdLightMode className="text-2xl" />],
  },
  function: [{ title: "Logout", icon: <BiLogOut className="text-2xl" /> }],
};
