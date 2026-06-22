/**
 * Input Component
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="font-semibold text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-lg p-3 outline-none focus:border-green-600"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;