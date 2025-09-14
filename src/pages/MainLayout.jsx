import { TrophyIconBlack, GraduationCapIcon, ClockIcon } from "../components/icons/Icons.jsx"
import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import ChipFilter from "../components/ChipFilter";
import CardEvent from "../components/CardEvent";
import BottomDrawer from "../components/BottomDrawer";

export default function MainLayout() {
    const items = [
        { id: "schools", label: "Escolas", icon: <GraduationCapIcon className="w-5 h-5" /> },
        { id: "tournaments", label: "Torneios", icon: <TrophyIconBlack className="w-5 h-5" /> },
        { id: "events", label: "Eventos", icon: <ClockIcon className="w-5 h-5" /> },  
    ];
    
    const handleFilterChange = (selected) => {
        console.log("Filtros ativos:", selected);
    };

    return (
        <>
            <Header />
            <ChipFilter items={items} onChange={handleFilterChange} />
            <CardEvent
                image="https://images.unsplash.com/photo-1525088068454-ff2c453e50e9?q=80&w=870&auto=format&fit=crop" 
                title="Torneio jovem Feminino"
                subtitle="Academia de esportes"
                dateLabel="Amanhã"
                dateLabelColor ="bg-(--red-color)"
                distanceLabel="2.3 km"
                distanceLabelColor="bg-(--gray-color)"
                time="10:00h"
                people={24}
                onJoin={() => alert("Entrou no torneio!")}
            />

            <BottomNavigationBar />
        </>
    );
}