type iconContainerProps = {
  icon: any;
  size?: string;
  circle?: boolean;
  title?: string;
  activeRoute?: boolean;
};

export function IconContainer({
  icon,
  size = "40px",
  circle = false,
  title,
  activeRoute = false,
}: iconContainerProps) {
  return (
    <>
      {/* circle icon */}
      {circle && (
        <div
          className="bg-gray-300 center_xy rounded-full dark:bg-black_gray-400 cursor-pointer"
          style={{ width: size, height: size }}
        >
          {icon}
        </div>
      )}
      {/* normal icon container */}
      {!circle && (
        <p
          className={`flex items-center gap-3 hover:bg-gray-700 transition-all duration-300 py-2 rounded-br-md rounded-tr-md border-l-4 px-5 cursor-pointer ${
            activeRoute ? "border-blue-500" : "border-transparent"
          }`}
        >
          <span className={`${activeRoute ? "text-blue-500" : ""}`}>{icon}</span>
          <span>{title}</span>
        </p>
      )}
    </>
  );
}
