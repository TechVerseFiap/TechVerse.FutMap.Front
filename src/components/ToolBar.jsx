import { ArrowLeftIconBlack } from "./icons/Icons";

export default function Toolbar({ title, onBack }) {
  return (
    <header className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <button
        onClick={onBack}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Voltar"
      >
        <ArrowLeftIconBlack className="h-10 w-5" />
      </button>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
    </header>
  );
}
