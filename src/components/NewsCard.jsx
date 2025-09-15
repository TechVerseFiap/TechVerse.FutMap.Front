import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function NewsCard({ title, desc, date, image }) {
  const [flagged, setFlagged] = useState(false);

  const handleToggle = () => {
    setFlagged(prev => !prev);
  };

  return (
    <div className="my-2 flex min-h-[10vh] whitespace-normal bg-(--white-color) shadow-lg rounded-[20px] overflow-hidden">
      <img
        src={image}
        className="w-30 p-4 rounded-[30px] object-cover"
      />
      <div className="flex flex-col py-4 pr-4 w-full max-h-80%">
        <p className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
          {title}
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 pr-5">
          {desc}
        </p>
        <div className="flex align-baseline justify-between items-end">
          <p className="align-baseline text-xs text-gray-500 mt-2">{
            formatDistanceToNow(new Date(date), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
          <Checkbox checked={flagged} onCheckedChange={handleToggle} />
        </div>
      </div>
    </div>
  );
}