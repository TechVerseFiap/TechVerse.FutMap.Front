export default function Chip({ label, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center gap-2 px-4 py-1 rounded-full shadow-md transition
        ${isActive ? "bg-green-500 text-white" : "bg-gray-100 text-black"}
      `}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
