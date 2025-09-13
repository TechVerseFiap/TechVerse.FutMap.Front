export default function OptionCard({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 cursor-pointer  gap-2"
    >
       {icon}
      <p className="text-base font-semibold text-center">{text}</p>
    </div>
  );
}
