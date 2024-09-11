// src/App.js
import useModal from './CustomHook/useModal';
import Modal from './CustomHook/Modal';

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
