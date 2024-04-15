import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <div className="backdrop">
      <dialog className="modal-class" ref={dialogRef}>
        {isOpen && children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
