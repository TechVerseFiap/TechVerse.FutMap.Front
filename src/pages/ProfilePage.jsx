import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import OptionCardList from "../components/OptionCardList";
import ContainerOptions from "../components/ContainerOptions";
import {
    EventIcon,
    BookmarkIcon,
    ProfileIcon,
    ArrowRightIcon,
    NotificationIcon,
    LocationIcon,
    SettingsIcon,
    SecurityIcon,
    HelpIcon,
    InformationIcon,
    ExitIcon
} from "../components/icons/Icons";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://68c7351e442c663bd028fb2c.mockapi.io/futmap/api/users/3"
                );
                const data = await response.json();
                setUser(data);
            } 
            catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchUser();
    }, []);

    // Handlers
    function handleClickMyEvent() { alert("Clicou Meus Eventos"); }
    function handleClickMyFavorites() { alert("Clicou Meus Favoritos"); }
    function handleUserInfo() { alert("Clicou Informações do usuário"); }
    function handleEvents() { alert("Clicou Inscrições em Eventos"); }
    function handleLocations() { alert("Clicou Locais Salvos"); }
    function handlePreferences() { alert("Clicou Preferencias"); }
    function handleSecurity() { alert("Clicou Privacidade e Segurança"); }
    function handleHelp() { alert("Clicou Ajuda"); }
    function handleInformation() { alert("Clicou Sobre FutMap"); }
    function handleExit() { alert("Clicou Sair"); }

    const optionsCardItems = [
        { icon: <EventIcon fill="#10B981" className="w-8 h-8" />, text: "Meus Eventos", onClick: handleClickMyEvent },
        { icon: <BookmarkIcon fill="#10B981" className="w-8 h-8" />, text: "Meus Favoritos", onClick: handleClickMyFavorites }
    ];

    const optionsContainerPreferences = [
        {
            leftIcon: <ProfileIcon fill="#3B82F6" className="w-5 h-5" />,
            color: "bg-blue-100",
            title: "Informações do Usuário",
            description: "Detalhes da conta",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleUserInfo,
        },
        {
            leftIcon: <NotificationIcon fill="#9333EA" className="w-5 h-5" />,
            color: "bg-purple-100",
            title: "Inscrições em Eventos",
            description: "Gerenciar notificações",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleEvents,
        },
        {
            leftIcon: <LocationIcon className="w-5 h-5" />,
            color: "bg-green-100",
            title: "Locais Salvos",
            description: "Preferências de locais",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleLocations,
        },
        {
            leftIcon: <SettingsIcon className="w-5 h-5" />,
            color: "bg-orange-100",
            title: "Preferências",
            description: "Configurações e filtros",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handlePreferences,
        },
    ];

    const optionsContainerAbout = [
        {
            leftIcon: <SecurityIcon className="w-5 h-5" />,
            title: "Informações do Usuário",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleSecurity,
        },
        {
            leftIcon: <HelpIcon className="w-5 h-5" />,
            title: "Ajuda & Suporte",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleHelp,
        },
        {
            leftIcon: <InformationIcon className="w-5 h-5" />,
            title: "Sobre FutMap",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleInformation,
        },
        {
            leftIcon: <ExitIcon className="w-5 h-5" />,
            title: "Sair",
            titleColor: "text-(--red-color)",
            rightIcon: <ArrowRightIcon className="w-5 h-5" />,
            onClick: handleExit,
        },
    ];

    return (
        <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-12">
            {isLoading 
                ? (
                    <div className="flex flex-col items-center justify-center p-6 bg-(--primary-color) animate-shimmer">
                        <div className="relative w-28 h-29">
                            <div className="w-28 h-28 rounded-full bg-white bg-opacity-20 animate-pulse"></div>
                            <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-white bg-opacity-20 animate-pulse"></div>
                        </div>
                        <div className="mt-3 h-6 w-36 bg-white bg-opacity-20 rounded animate-pulse"></div>
                        <div className="mt-1 h-4 w-30 bg-white bg-opacity-20 rounded animate-pulse"></div>
                    </div>
                )
                : (
                    <ProfileHeader
                        image={user.image}
                        name={user.name}
                        position={user.position}
                        age={user.age}
                    />
                )
            }

            <div className="p-4">
                <OptionCardList items={optionsCardItems} className="mb-4" />

                <ContainerOptions options={optionsContainerPreferences} className="mb-4" />

                <ContainerOptions options={optionsContainerAbout} isAboutContainer={true} className="mb-20" />
            </div>
        </div>
    );
}