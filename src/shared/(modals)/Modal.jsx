import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const ReusableModal = ({
  isOpen,
  onClose,
  children,
  isLoading,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // function to close modal on press of escape key on keyboard
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-start ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-xl bg-white rounded-md p-6 shadow-lg  max-h-screen  overflow-y-auto"
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: "0%" }} // Slide into view
            exit={{ x: "-100%" }} // Slide back out to the left
            transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth sliding animation
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl text-black" />{" "}
              close
            </button>

            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="mt-4">{children}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
