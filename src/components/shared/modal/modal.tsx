import { ReactNode, Dispatch, SetStateAction, useState, useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { IconContainer } from "../icon_container/iconContainer";

type modalProps = {
  title?: string;
  children: ReactNode;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ title, children, modalState, setModalState }: modalProps) {
  const [_document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(document);
  });

  // handling outside click
  function closeModal(event: React.MouseEvent) {
    setModalState(false);
  }

  if (modalState && document) {
    return createPortal(
      <>
        {/* ------------ modal overlay starts ------------ */}
        <section
          className="modal absolute top-0 left-0 h-screen w-screen center_xy"
          onClick={closeModal}
        >
          <div
            className="max-w-[600px] min-w-[300px] bg-white rounded-md"
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            {/* ---------- modal header starts ---------- */}
            <div className="center_y gap-3 px-5 py-3 border-b border-white_gray-500">
              <p className="w-full text-xl font-bold text-center">{title}</p>
              <p className="w-fit" onClick={closeModal}>
                <IconContainer size="35px" icon={<MdClose size={20} />} />
              </p>
            </div>
            {/* ---------- modal header starts ---------- */}
            {/* ---------- modal body starts ---------- */}
            <div className="overflow-y-auto max-h-[500px] p-5">{children}</div>
            {/* ---------- modal body Ends ---------- */}
          </div>
        </section>
        {/* ------------ modal overlay ends ------------ */}
      </>,
      _document?.getElementById("root-modal") as HTMLElement
    );
  } else {
    return null;
  }
}
