type iconContainerProps = {
  icon: any;
  size?: string;
  type?: "link" | "circle" | "rectangle";
  title?: string;
  activeRoute?: boolean;
};

export function IconContainer({
  icon,
  size = "40px",
  title,
  activeRoute = false,
  type = "circle",
}: iconContainerProps) {
  return (
    <>
      {/* for circle icon */}
      {type === "circle" && (
        <div
          className="bg-gray-300 center_xy rounded-full dark:bg-black_gray-400 cursor-pointer"
          style={{ width: size, height: size }}
        >
          {icon}
        </div>
      )}

      {/* link icon container */}
      {type === "link" && (
        <p
          className={`flex items-center gap-3 hover:bg-gray-700 hover:text-white dark:hover:bg-black-400 transition-all duration-300 py-2 rounded-br-md rounded-tr-md border-l-4 border-r-4 border-r-transparent px-2 md:px-5 cursor-pointer ${
            activeRoute ? "border-blue-500" : "border-transparent"
          }`}
        >
          <span className={`${activeRoute ? "text-blue-500" : ""}`}>{icon}</span>
          <span className="hidden md:block">{title}</span>
        </p>
      )}
      {/* rectangular icon container */}
      {type === "rectangle" && (
        <p className="cursor-pointer center_y gap-3 justify-center rounded-md hover:bg-white_gray-500 py-2 duration-300 transition-all dark:hover:bg-black-500 text-xs md:text-base">
          {icon} <span>{title}</span>
        </p>
      )}
    </>
  );
}
