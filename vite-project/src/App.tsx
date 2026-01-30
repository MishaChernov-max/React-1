import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} title="Modal header" onClose={closeModal}>
        <div>Привет</div>
      </Modal>
      <button onClick={() => setIsOpen(true)}>Открыть</button>
    </>
  );
}

export default App;
