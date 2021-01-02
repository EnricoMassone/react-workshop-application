import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  if (!modalRef.current) {
    modalRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("root");
    modalRoot.appendChild(modalRef.current);

    return () => {
      modalRoot.removeChild(modalRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, modalRef.current);
};

export default Modal;
