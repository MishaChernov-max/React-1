import type { ReactNode } from "react";
import "./modal.css";
import { createPortal } from "react-dom";

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export function Modal({ title, children, isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h4 className="title">{title}</h4>
        <hr />
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
