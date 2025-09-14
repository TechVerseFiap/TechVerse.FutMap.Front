import PrivacyIcon from "./icons/PrivacyIcon";
import HelpIcon from "./icons/HelpIcon";
import AboutIcon from "./icons/AboutIcon";
import SignOutIcon from "./icons/SignOutIcon";
import ArrowRightIcon from "./icons/ArrowRight";

export default function SettingsMenu({
  onPrivacy,
  onHelp,
  onAbout,
  onSignOut,
}) {
  const items = [
    {
      id: "privacy",
      label: "Privacidade & Segurança",
      icon: <PrivacyIcon className="w-5 h-5" />,
      onClick: onPrivacy,
    },
    {
      id: "help",
      label: "Ajuda & Suporte",
      icon: <HelpIcon className="w-5 h-5" />,
      onClick: onHelp,
    },
    {
      id: "about",
      label: "Sobre FutMap",
      icon: <AboutIcon className="w-5 h-5" />,
      onClick: onAbout,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm mx-auto">
      <div className="flex flex-col divid">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg transition"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        ))}

        <button
          onClick={onSignOut}
          className="flex items-center gap-3 py-3 text-red-500 font-medium hover:bg-red-50 rounded-lg transition mt-2"
        >
          <SignOutIcon className="w-5 h-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}
