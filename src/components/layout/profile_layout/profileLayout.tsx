import { LeftSidebar } from "@/components/shared/left_sidebar/leftSidebar";
import { Navbar } from "@/components/shared/navbar/navbar";
import { ReactNode } from "react";

export function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <main className="page h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <section className="col-span-2">
        <Navbar />
      </section>
      <div>
        <LeftSidebar page="profile-page" />
      </div>
      <div>{children}</div>
    </main>
  );
}
