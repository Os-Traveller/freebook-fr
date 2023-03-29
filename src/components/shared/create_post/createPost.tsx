import { useState } from "react";
import Modal from "../modal/modal";
import { ProfileIcon } from "../profile_icon/profileIcon";
import CreatePostModalContent from "./createPostModalContent";

export default function CreatePost() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div className="bg-white p-5 rounded-md dark:bg-black_gray-500">
        <div className="center_y gap-3">
          <ProfileIcon />
          <p
            className="w-full px-5 py-2 bg-white_gray-500 rounded-full text-gray-600 cursor-pointer 
            dark:bg-black_gray-400 dark:text-white"
            onClick={() => setOpenModal(true)}
          >
            What's on your mind?
          </p>
        </div>
      </div>
      <Modal title="Create Post" modalState={openModal} setModalState={setOpenModal}>
        <CreatePostModalContent />
      </Modal>
    </>
  );
}
