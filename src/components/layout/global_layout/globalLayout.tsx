import { LeftSidebar } from "@/components/shared/left_sidebar/leftSidebar";
import { Navbar } from "@/components/shared/navbar/navbar";
import { RightSidebar } from "@/components/shared/right_sidebar/rightSidebar";
import { ReactNode } from "react";

type globalLayoutProps = {
  children: ReactNode;
};

export function GlobalLayout({ children }: globalLayoutProps) {
  const sideBarClass = "h-full  p-0 md:py-5 md:px-3 overflow-y-auto w-full";
  return (
    <section className="page w-full grid grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr_300px] grid-rows-[auto_1fr] h-screen gap-x-0 md:gap-x-5">
      {/* header */}
      <div className="col-span-3">
        <Navbar />
      </div>
      <div className={sideBarClass}>
        <LeftSidebar page="home-page" />
      </div>
      {/* body */}
      <div className="overflow-y-auto px-2">{children}</div>
      {/* right sidebar */}
      <div className={`${sideBarClass} hidden lg:block`}>
        <RightSidebar />
      </div>
    </section>
  );
}
