import { TrophyIconBlack } from "../components/icons/TrophyIcon";
import GraduationCapIcon from "../components/icons/GraduationCapIcon";
import ClockIcon from "../components/icons/ClockIcon";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import ChipFilter from "../components/ChipFilter";
import OptionCardList from "../components/OptionCardList";
import { EventIconGreen } from "../components/icons/EventIcon";
import BookmarkIconGreen  from "../components/icons/BookMark";

export default function MainLayout() {
  const items = [
    {
      id: "schools",
      label: "Escolas",
      icon: <GraduationCapIcon className="w-5 h-5" />,
    },
    {
      id: "tournaments",
      label: "Torneios",
      icon: <TrophyIconBlack className="w-5 h-5" />,
    },
    { id: "events", label: "Eventos", icon: <ClockIcon className="w-5 h-5" /> },
  ];




  const handleFilterChange = (selected) => {
    console.log("Filtros ativos:", selected);
  };


  return (
    <>
      <Header />
      <ChipFilter items={items} onChange={handleFilterChange} />
      <BottomNavigationBar />
    </>
  );
}
