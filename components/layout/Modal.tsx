import { ReactNode } from 'react';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <button onClick={onClose} className="text-red-500">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
