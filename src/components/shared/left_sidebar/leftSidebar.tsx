import { useContext } from "react";
import { SidebarLink } from "../sidebar_link/sidebarLink";
import { IoMdHome, IoMdBookmark } from "react-icons/io";
import { HiUser, HiUsers } from "react-icons/hi";
import { IconContainer } from "../icon_container/iconContainer";
import { BiLogOut } from "react-icons/bi";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { themeContext } from "@/context_api/theme_context/themeContext";
import { themeHandler } from "@/functions/theme/theme";
import { leftSideBarData } from "../../../data/leftSidebarData";

type leftSidebarProps = {
  page: "home-page" | "profile-page";
};
export function LeftSidebar({ page }: leftSidebarProps) {
  const { themeMode, setThemeMode } = useContext(themeContext);

  return (
    <>
      {/* ----------------------- For Home Page ----------------------- */}
      {page === "home-page" && (
        <section className="dark_bg w-fit md:w-full bg-white py-5 h-full md:rounded-md overflow-y-auto">
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
      )}

      {/* ----------------------- For Profile Page ----------------------- */}
      {page === "profile-page" && (
        <section className="dark_bg w-fit md:w-full bg-white py-5 h-full overflow-y-auto">
          <div className="flex flex-col gap-4">
            {/* ----------------- for links ----------------- */}
            <>
              {leftSideBarData.link.map((data) => (
                <SidebarLink href={data.url} icon={data.icon} type="profile-page-link" />
              ))}

              {/* ----------------- for theme ----------------- */}
              <>{<IconContainer icon={leftSideBarData.theme.icon[0]} type="profile-page" />}</>

              {/* ----------------- for functional things ----------------- */}
            </>
            {leftSideBarData.function.map((data) => (
              <IconContainer icon={data.icon} type="profile-page" />
            ))}
            <></>
          </div>
        </section>
      )}
    </>
  );
}
