export default function StandardButton({ text, onClick, color = "bg-red-500", padding = "py-2 px-4", style, icon: Icon }) {

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${color} ${padding} ${style} text-white font-semibold rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none transition duration-200`}
    >
      {Icon && <span className="mr-2"><Icon /></span>}
      {text}
    </button>
  );
}
