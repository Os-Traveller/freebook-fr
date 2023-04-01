import { useState, useContext } from "react";
import { SidebarLink } from "../sidebar_link/sidebarLink";
import { IoMdHome, IoMdBookmark } from "react-icons/io";
import { HiUser, HiUsers } from "react-icons/hi";
import { IconContainer } from "../icon_container/iconContainer";
import { BiLogOut } from "react-icons/bi";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { themeContext } from "@/context_api/theme_context/themeContext";
import { themeHandler } from "@/functions/theme/theme";

export function LeftSidebar() {
  const { themeMode, setThemeMode } = useContext(themeContext);

  return (
    <section className="dark_bg bg-white py-5 h-full rounded-md">
      {/* home and profile */}
      <div className="flex flex-col gap-4 border-black_gray-400">
        <SidebarLink href="/" title="Home" icon={<IoMdHome className="text-2xl" />} />
        <SidebarLink href="/profile" title="Profile" icon={<HiUser className="text-2xl" />} />
        <SidebarLink href="/friends" title="Friends" icon={<HiUsers className="text-2xl" />} />
        <SidebarLink href="/saved" title="Saved" icon={<IoMdBookmark className="text-2xl" />} />
        {/* dark mode and light mode handler */}
        <span onClick={() => themeHandler({ themeMode, setThemeMode })}>
          <IconContainer
            type="link"
            title={themeMode === "dark" ? "Light Mode" : "Dark Mode"}
            icon={
              themeMode === "dark" ? (
                <MdLightMode className="text-2xl" />
              ) : (
                <MdNightlightRound className="text-2xl" />
              )
            }
          />
        </span>
        <span onClick={() => console.log("clicked")}>
          <IconContainer type="link" title="Logout" icon={<BiLogOut className="text-2xl" />} />
        </span>
      </div>
    </section>
  );
}
