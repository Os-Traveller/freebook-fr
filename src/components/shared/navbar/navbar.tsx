import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";
import { BsBellFill } from "react-icons/bs";
import { IconContainer } from "../icon_container/iconContainer";

export function Navbar() {
  return (
    <nav className="py-3 px-5 shadow-md border-b border-gray-300 dark:border-gray-600 bg-white dark_bg">
      <section className="grid grid-cols-3 items-center">
        {/* logo */}
        <h1 className="logo text-2xl md:text-3xl text-blue-500 dark:text-white font-semibold">
          freebook
        </h1>
        {/* search */}
        <div>
          <Search />
        </div>
        {/* right side */}
        <div className="ml-auto center_y gap-3 dark:text-white">
          <IconContainer icon={<BsBellFill size={20} />} />
          <ProfileIcon />
        </div>
      </section>
    </nav>
  );
}
