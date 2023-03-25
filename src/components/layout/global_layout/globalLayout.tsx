import { LeftSidebar } from "@/components/shared/left_sidebar/leftSidebar";
import { Navbar } from "@/components/shared/navbar/navbar";
import React from "react";

export function GlobalLayout() {
  return (
    <section className="w-full grid grid-cols-[300px_1fr_400px] h-screen grid-rows-[auto_1fr]">
      {/* header */}
      <div className="col-span-3">
        <Navbar />
      </div>

      <LeftSidebar />
      <div className="rounded-full overflow-hidden"></div>
      {/* body */}
      {/* <LeftSidebar /> */}
    </section>
  );
}
