import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import OptionCardList from "../components/OptionCardList";
import { EventIconGreen } from "../components/icons/EventIcon";
import BookMark from "../components/icons/BookMark";
import ContainerOptions from "../components/ContainerOptions";
import { UserIconBlue } from "../components/icons/ProfileIcon";
import { NotificationIconPurple } from "../components/icons/NotificationIcon";
import LocationIcon from "../components/icons/LocationIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import ArrowRightIcon from "../components/icons/ArrowIcon";
import SecurityIcon from "../components/icons/SecurityIcon";
import HelpIcon from "../components/icons/HelpIcon";
import InformationIcon from "../components/icons/InformationIcon";
import ExitIcon from "../components/icons/ExitIcon";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://68c7351e442c663bd028fb2c.mockapi.io/futmap/api/users/3"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
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
    { icon: <EventIconGreen className="w-8 h-8" />, text: "Meus Eventos", onClick: handleClickMyEvent },
    { icon: <BookMark className="w-8 h-8" />, text: "Meus Favoritos", onClick: handleClickMyFavorites }
  ];

  const optionsContainerPreferences = [
    {
      leftIcon: <UserIconBlue className="w-5 h-5" />,
      color: "bg-blue-100",
      title: "Informações do Usuário",
      description: "Detalhes da conta",
      rightIcon: <ArrowRightIcon className="w-5 h-5" />,
      onClick: handleUserInfo,
    },
    {
      leftIcon: <NotificationIconPurple className="w-5 h-5" />,
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
      {user ? (
        <ProfileHeader
          image={user.image}
          name={user.name}
          position={user.position}
          age={user.age}
        />
      ) : (
        <p className="text-center text-gray-500">Carregando perfil...</p>
      )}

      <div className="p-4">
        <OptionCardList items={optionsCardItems} className="mb-4" />

        <ContainerOptions options={optionsContainerPreferences} className="mb-4" />

        <ContainerOptions options={optionsContainerAbout} isAboutContainer={true} className="mb-20" />
      </div>
    </div>
  );
}
