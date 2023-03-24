type iconContainerProps = {
  icon: any;
  size?: string;
};

export function IconContainer({ icon, size = "40px" }: iconContainerProps) {
  return (
    <div
      className="bg-gray-300 center_xy rounded-full dark:bg-black_gray-400"
      style={{ width: size, height: size }}
    >
      {icon}
    </div>
  );
}
