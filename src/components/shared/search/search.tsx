import { BsSearch } from "react-icons/bs";

export function Search() {
  return (
    <div className="w-full center_y gap-3 rounded-full bg-white_gray-500 dark:bg-black_gray-400 py-2 px-5">
      <label className="dark:text-white text-gray-700" htmlFor="search">
        <BsSearch />
      </label>
      <input
        className="bg-transparent w-full outline-none dark:placeholder:text-white placeholder:text-gray-700"
        id="search"
        type="text"
        placeholder="Search Freebook..."
      />
    </div>
  );
}
