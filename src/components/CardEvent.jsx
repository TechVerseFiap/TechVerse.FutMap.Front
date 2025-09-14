import { ClockIcon, UsersIcon } from "./icons/Icons";
import StandardButton from "./StandardButton";

export default function CardEvent({
  image,
  title,
  subtitle,
  dateLabel,
  dateLabelColor,
  distanceLabel,
  distanceLabelColor,
  time,
  people,
  onJoin,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <span className={`absolute top-2 left-2  ${dateLabelColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
          {dateLabel}
        </span>
        <span className={`absolute top-2 right-2 ${distanceLabelColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
          {distanceLabel}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>

        <div className="flex items-center gap-4 text-sm text-gray-700 mt-1">
          <div className="flex items-center gap-1">
            <ClockIcon className="text-black" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="text-black" />
            <span>{people} pessoas</span>
          </div>
        </div>

        <div className="mt-3">
          <StandardButton
            onClick={onJoin}
            color="bg-(--red-color)"
            padding="py-3"
            style="w-full"
          >
            Entrar no Torneio
          </StandardButton>
        </div>
      </div>
    </div>
  );
}
