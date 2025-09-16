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
import { getUser, clearLocalStorage } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";

export default function ProfilePage() {
    const navigate = useNavigate()
    const user = getUser()

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
    function handleExit() { 
        clearLocalStorage() 
        navigate(Routes.Login)
    }

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
            {
                (
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