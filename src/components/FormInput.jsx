export default function FormInput({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-gray-600 text-sm">{label}:</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>
  );
}