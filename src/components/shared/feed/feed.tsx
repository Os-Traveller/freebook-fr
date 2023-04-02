import { ProfileIcon } from "../profile_icon/profileIcon";
import { BsThreeDots, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";
import { MdOutlineModeComment } from "react-icons/md";
import Image from "next/image";
import img from "../../../img/fight.jpg";
import { IconContainer } from "../icon_container/iconContainer";

export function Feed() {
  return (
    <>
      <section className="bg-white dark_bg px-5 rounded-md shadow-md">
        {/* header starts*/}
        <div className="flex gap-3 pt-5">
          <ProfileIcon size="45px" />
          <div>
            <h2 className="user_name">User Name</h2>
            <h2 className="text-sm text-gray-500 dark:text-white">20H</h2>
          </div>
          <BsThreeDots className="ml-auto" />
        </div>
        {/* header ends*/}

        {/* feed starts body */}
        <div className="mt-5 border-b pb-3 border-gray-400">
          {/* text content starts */}
          <p className="text-justify">{`Hot News Today, Bard is just killed the Chat Gpt. Are you guys not happy about it? You should be. I am super excited about this news today. Let's see when the Bard become next Ultron`}</p>
          {/* text content ends */}

          <Image className="mt-3 rounded-md" src={img} alt="optional" />

          {/* react comment and share starts */}
          <div className="mt-3 center_y justify-between text-sm md:text-base">
            <p className="center_y gap-2">
              <BsFillHeartFill className="text-red-500" />
              100
            </p>
            <p className="flex gap-5">
              <span>62 comments</span>
              <span>5 shares</span>
            </p>
          </div>
          {/* react comment and share ends */}
        </div>
        {/* feed body ends */}

        {/* footer starts*/}
        <div className="grid grid-cols-3 py-2">
          <IconContainer icon={<BsHeart size={20} />} type="rectangle" title="Love" />
          <IconContainer
            icon={<MdOutlineModeComment size={20} />}
            type="rectangle"
            title="Comment"
          />
          <IconContainer icon={<TbShare3 size={20} />} type="rectangle" title="Share" />
        </div>
        {/* footer ends*/}
      </section>
    </>
  );
}
