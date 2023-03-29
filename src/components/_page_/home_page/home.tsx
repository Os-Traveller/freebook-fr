import CreatePost from "@/components/shared/create_post/createPost";
import { Feed } from "@/components/shared/feed/feed";

export function Home() {
  return (
    <div className="w-full max-w-[700px] mx-auto py-5 flex flex-col gap-5 ">
      <CreatePost />
      <Feed />
      <Feed />
    </div>
  );
}
