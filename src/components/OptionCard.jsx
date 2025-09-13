export default function OptionCard({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 cursor-pointer  transition w-32 h-24"
    >
       {icon}
      <p className="text-sm font-medium text-gray-800 text-center">{text}</p>
    </div>
  );
}
