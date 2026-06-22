/**
 * Modal Component
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div>
          {children}
        </div>

      </div>
    </div>
  );
}

export default Modal;