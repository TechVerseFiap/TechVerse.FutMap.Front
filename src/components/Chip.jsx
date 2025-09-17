export default function Chip({ label, iconActive, iconDesactive, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-1 rounded-full shadow-md transition shrink-0 max-w-[140px]
        ${isActive ? "bg-(--primary-color) text-white" : "bg-(--bg-white-color) text-black"}
      `}
    >
      { isActive ? iconActive : iconDesactive}
      <span className="text-sm font-medium truncate">{label}</span>
    </button>
  );
}
