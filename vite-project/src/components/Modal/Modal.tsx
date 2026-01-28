import { useEffect } from "react";
import "./Modal.css";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: Props) {
  if (!isOpen) return;
  useEffect(() => {
    const handleClose = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);
  return (
    <>
      <div className="modal">
        <div className="modal-overlay" onClick={onClose}></div>
        <div className="modal-content">
          <h4>{title}</h4>
          <hr />
          {children}
        </div>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
}
