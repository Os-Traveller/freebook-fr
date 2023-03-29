import React from "react";
import Modal from "../modal/modal";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { BsImage } from "react-icons/bs";

export default function CreatePost() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  return (
    <>
      <h1>This is create post</h1>
      <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
      <Modal modalState={openModal} setModalState={setOpenModal} title={"Create Post"}>
        <section className="min-w-[450px]">
          {/* --------- header starts --------- */}
          <div className="center_y gap-4">
            <ProfileIcon size="50px" />
            <div>
              <h2 className="font-semibold text-black_gray-700">User Name</h2>
              {/* ----- privacy option starts ----- */}
              <div className="bg-white_gray-400 rounded-md px-2 py-1 text-sm mt-1">
                <select className="bg-transparent outline-none" name="" id="">
                  <option value="">Friend</option>
                  <option value="">Public</option>
                  <option value="">Only Me</option>
                </select>
              </div>
              {/* ----- privacy option ends ----- */}
            </div>
          </div>
          {/* --------- header ends --------- */}
          {/* ---------- body start ---------- */}
          <form className="mt-5">
            <div className="border-b border-white_gray-400 pb-3 mb-3">
              <textarea
                className="w-full  placeholder:font-semibold 
            placeholder:text-white_gray-700 outline-none"
                placeholder="What's on your mind?"
                rows={5}
              />
              {/* image selector */}
              <p className="btn w-fit ml-auto center_y justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md cursor-pointer hover_animation">
                <BsImage />
                Add Image
              </p>
            </div>
            <button className="btn bg-blue-500 hover:bg-blue-600 hover_animation text-white rounded-md w-full">
              Post
            </button>
          </form>
          {/* ---------- body ends ---------- */}
        </section>
      </Modal>
    </>
  );
}
