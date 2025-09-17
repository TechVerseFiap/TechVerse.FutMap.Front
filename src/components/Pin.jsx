import {
  GraduationCapIconWhite,
  TrophyIconWhite,
  ClockIconWhite,
} from "./icons/Icons";

export default function Pin({ type, style, onClick }) {
  let bgColor = "";
  let Icon = null;

  switch (type) {
    case "school":
      bgColor = "bg-blue-500";
      Icon = GraduationCapIconWhite;
      break;
    case "tournament":
      bgColor = "bg-red-500";
      Icon = TrophyIconWhite;
      break;
    case "event":
      bgColor = "bg-yellow-500";
      Icon = ClockIconWhite;
      break;
    default:
      bgColor = "bg-gray-400";
      Icon = null;
  }

  return (
    <div
      onClick={onClick}
      className={`absolute z-50 flex items-center justify-center w-10 h-10 rounded-full shadow-lg ${bgColor}`}
      style={style}
    >
      {Icon && <Icon className="w-5 h-5 text-white" />}
    </div>
  );
}
