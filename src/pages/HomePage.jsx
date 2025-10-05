import Map from "../components/Map";
import ChipFilter from "../components/ChipFilter";
import { useState, useMemo } from "react";
import {
  ClockIconWhite,
  TrophyIconWhite,
  GraduationCapIconWhite,
  GraduationCapIconBlack,
  ClockIcon,
  TrophyIconBlack,
} from "../components/icons/Icons";

export default function HomePage() {
  const items = useMemo(() => [
    { id: "schools", label: "Escolas", iconActive: <GraduationCapIconWhite className="w-5 h-5" />, iconDesactive: <GraduationCapIconBlack className="w-5 h-5" /> },
    { id: "tournaments", label: "Torneios", iconActive: <TrophyIconWhite className="w-5 h-5" />, iconDesactive: <TrophyIconBlack className="w-5 h-5" />  },
    { id: "events", label: "Eventos", iconActive: <ClockIconWhite className="w-5 h-5" />, iconDesactive: <ClockIcon className="w-5 h-5" />  },
  ], []);

  const [activeFilters, setActiveFilters] = useState(items.map(i => i.id));

  const handleFilterChange = (selected) => {
    setActiveFilters(selected);
    console.log("Filtros ativos:", selected);
  };

  return (
    <div className="relative w-full h-full">
      <Map activeFilters={activeFilters}/>

      <div className="absolute top-20 left-0 right-0 z-50">
        <ChipFilter items={items} onChange={handleFilterChange} />
      </div>
    </div>
  );
}
