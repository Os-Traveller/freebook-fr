import { FriendComponent } from "../friends/friendComponents";

export function RightSidebar() {
  return (
    <section className="w-full">
      {/* ----------- Friend Request ----------- */}
      <div className="bg-white dark_bg p-5 rounded-md w-full">
        <h3 className="text-xl font-semibold mb-6">Friend Requests</h3>
        <div className="flex flex-col gap-5">
          <FriendComponent friendRequest />
          <FriendComponent friendRequest />
          <FriendComponent friendRequest />
        </div>
      </div>

      {/* ----------- Suggested Request ----------- */}
      <div className="bg-white dark_bg p-5 rounded-md mt-5">
        <h3 className="text-xl font-semibold mb-6">Suggested Contact</h3>
        <div className="flex flex-col gap-5">
          <FriendComponent />
          <FriendComponent />
          <FriendComponent />
        </div>
      </div>
    </section>
  );
}
