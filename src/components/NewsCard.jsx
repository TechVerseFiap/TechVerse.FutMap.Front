import SavedIcon from "./icons/SavedIcon";

export default function NewsCard({ title, desc, date, image }) {
  return (
    <div className="flex min-h-[10vh] whitespace-normal bg-white shadow-lg rounded-[20px] overflow-hidden">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt="Imagem"
        className="w-24 p-4 h-auto object-cover"
      />
      <div className="flex flex-col p-4 w- max-h-80%">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">
            {title}
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {desc}
        </p>
        <p className="text-xs text-gray-500 mt-2">{date}</p>
      </div>
      <div className="flex justify-end items-end p-4">
        <SavedIcon className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}