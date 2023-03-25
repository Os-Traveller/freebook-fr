import { FaUserAlt } from "react-icons/fa";
import { IconContainer } from "../icon_container/iconContainer";

type profileIconProps = {
  size?: string;
};

export function ProfileIcon({ size = "40px" }: profileIconProps) {
  return (
    <>
      <IconContainer circle={true} icon={<FaUserAlt size={20} />} size={size} />
    </>
  );
}
