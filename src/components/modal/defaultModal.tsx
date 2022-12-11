import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 px-5">
      {children}
    </div>
  );
};

export default Modal;
