/**
 * Toast Component
 * Props:
 * message
 * type
 */

function Toast({ message, type = "success" }) {
  return (
    <div
      className={`fixed top-6 right-6 px-5 py-3 rounded-lg text-white shadow-lg
      ${
        type === "success"
          ? "bg-green-600"
          : type === "error"
          ? "bg-red-600"
          : "bg-blue-600"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;