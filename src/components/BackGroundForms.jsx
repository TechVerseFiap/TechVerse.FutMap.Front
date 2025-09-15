import FutLogoIcon from "./icons/FutLogoIcon";

export default function BackgroundLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE] relative">
      {/* Topo verde atrás */}
      <div className="absolute top-0 left-0 w-full h-56 bg-[#10B981] rounded-b-3xl z-0" />

      {/* Logo */}
      <div className="relative flex justify-center pt-8 z-10">
        <div className="w-32 h-32 rounded-full bg-white flex justify-center items-center shadow-lg">
          <FutLogoIcon className="w-24 h-24" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex justify-center items-start mt-6 z-10">
        {children}
      </div>
    </div>
  );
}
