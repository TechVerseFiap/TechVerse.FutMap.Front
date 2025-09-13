import SavedIcon from "./icons/SavedIcon";

export default function NewsCard({ title, desc, date, image }) {
  return (
    <div className="flex max-w-[70%] min-h-[10vh] whitespace-normal bg-white shadow-lg rounded-[20px] overflow-hidden">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt="Imagem"
        className="w-24 p-4 h-auto object-cover"
      />
      <div className="flex flex-col p-4 w-full">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">
          {title || "England Women's Team Wins Euro Championship"}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {desc || "Historic victory brings home the title after decades..."}
        </p>
        <p className="text-xs text-gray-500 mt-2">{date || "2 horas atrás"}</p>
      </div>
      <div className="flex justify-end items-end p-4">
        <SavedIcon className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}
