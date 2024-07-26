import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },

      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog className="w-50 p-8" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
