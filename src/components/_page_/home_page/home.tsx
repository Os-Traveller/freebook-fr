import { Feed } from "@/components/shared/feed/feed";

export function Home() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <Feed />
      <Feed />
    </div>
  );
}
