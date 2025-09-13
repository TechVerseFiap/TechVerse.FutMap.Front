import { TrophyIconBlack } from "../components/icons/TrophyIcon";
import GraduationCapIcon from "../components/icons/GraduationCapIcon";
import ClockIcon from "../components/icons/ClockIcon";
import { UserIconBlue } from "../components/icons/ProfileIcon";
import { NotificationIconPurple } from "../components/icons/NotificationIcon";
import LocationIcon from "../components/icons/LocationIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import { ArrowRightIcon } from "../components/icons/ArrowIcon";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import ChipFilter from "../components/ChipFilter";
import CardEvent from "../components/CardEvent";
import ContainerOptions from "../components/ContainerOptions";

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
