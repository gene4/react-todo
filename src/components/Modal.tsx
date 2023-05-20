import React from "react";

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
}

function Modal({ children, isOpen }: Props) {
    return (
        <div className={`modal ${isOpen && "is-active"}`}>
            <div className="modal-background" />
            <div className="modal-content box">{children}</div>
        </div>
    );
}

export default Modal;
