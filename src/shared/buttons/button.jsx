import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReusableModal } from "@/shared/(modals)/Modal";

export default function Button({
  text,
  className,
  icon,
  modalContent,
  iconClass,
  modalClass,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Button to open modal (only works if modalContent exists) */}
      <button
        onClick={() => {
          if (modalContent) {
            setModalOpen(true);
          } else if (onClick) {
            onClick(); // Calls the provided onClick function if modalContent is missing
          }
        }}
        className={`${className} w-[150px] flex flex-row gap-x-4 justify-center items-center h-[45px] text-black font-semibold font-body bg-background-danger transform ease-in-out duration-700`}
      >
        {text}{" "}
        <FontAwesomeIcon
          icon={icon}
          className={`"text-black text-xs  ${iconClass}`}
        />
      </button>

      {/* Modal only appears if modalContent is provided */}
      {modalContent && (
        <ReusableModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          className={modalClass}
        >
          {modalContent}
        </ReusableModal>
      )}
    </>
  );
}
