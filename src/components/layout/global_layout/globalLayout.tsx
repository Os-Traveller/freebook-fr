import { LeftSidebar } from "@/components/shared/left_sidebar/leftSidebar";
import { Navbar } from "@/components/shared/navbar/navbar";
import { RightSidebar } from "@/components/shared/right_sidebar/rightSidebar";
import { ReactNode } from "react";

type globalLayoutProps = {
  children: ReactNode;
};

export function GlobalLayout({ children }: globalLayoutProps) {
  const sideBarClass = "h-full py-5 px-3 overflow-y-auto w-full";
  return (
    <section className="w-full grid grid-cols-[300px_1fr_300px] grid-rows-[auto_1fr] bg-white_gray-500 h-screen dark:bg-black-500 dark:text-white gap-x-5">
      {/* header */}
      <div className="col-span-3">
        <Navbar />
      </div>
      <div className={sideBarClass}>
        <LeftSidebar />
      </div>
      {/* body */}
      <div className="overflow-y-auto">{children}</div>
      {/* right sidebar */}
      <div className={sideBarClass}>
        <RightSidebar />
      </div>
    </section>
  );
}
