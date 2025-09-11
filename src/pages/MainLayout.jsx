import { GraduationCap, Trophy, Clock } from "lucide-react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import ChipFilter from "../components/ChipFilter";

export default function MainLayout() {
    const items = [
        { id: "schools", label: "Escolas", icon: <GraduationCap className="w-5 h-5" /> },
        { id: "tournaments", label: "Torneios", icon: <Trophy className="w-5 h-5" /> },
        { id: "events", label: "Eventos", icon: <Clock className="w-5 h-5" /> },
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