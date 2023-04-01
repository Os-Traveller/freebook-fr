import { ProfileIcon } from "../profile_icon/profileIcon";

type friendComponentProps = {
  friendRequest?: boolean;
};

export function FriendComponent({ friendRequest = false }: friendComponentProps) {
  return (
    <div className="">
      <div className="center_y gap-3">
        <ProfileIcon />
        <div>
          <h3 className="user_name">User Name</h3>
          <p className="text-sm text-gray-500 dark:text-white">{2} Mutual Friends</p>
        </div>
      </div>
      {/* button */}

      {!friendRequest && (
        <div className="mt-3 flex gap-4 w-full">
          <button className="btn bg-blue-500 text-white w-full text-sm">Add Friend</button>
          <button className="btn border border-gray-400 w-full text-sm">Remove</button>
        </div>
      )}

      {friendRequest && (
        <div className="mt-3 flex gap-4 w-full">
          <button className="btn bg-blue-500 text-white w-full text-sm">Accept</button>
          <button className="btn border border-gray-400 w-full text-sm">Delete</button>
        </div>
      )}
    </div>
  );
}
