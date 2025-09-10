import { useState } from "react";
import logo from "/Logo-Horizontal-Dark.png";
import NotificationIcon from "./icons/NotificationIcon";
import SearchIcon from "./icons/SearchIcon";
import { X } from "lucide-react";

export default function Header({ isSearchBarActive = true }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <header className="flex bg-white justify-between items-center rounded-b-[20px] p-5">
      <img src={logo} alt="Logo do futmap" className="w-24" />

      <div className="flex items-center gap-3 flex-1 justify-end">
        {isSearchBarActive && (
          <>
            {isExpanded 
            ? (
              <div
                className={`
                  relative flex-1 max-w-[80%] transform origin-right transition-all duration-300 ease-in-out
                  ${isExpanded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                `}
              >
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full bg-gray-200 rounded-full pl-9 pr-9 py-1.5 text-sm outline-none"
                  autoFocus
                />
                <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    setSearchText("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ) 
            : (
              <div className="flex items-center gap-3">
                <button onClick={() => setIsExpanded(true)}>
                  <SearchIcon className="w-5 h-5" />
                </button>
                <span className="bg-gray-300 w-0.5 h-[30px]" />
              </div>
            )}
          </>
        )}
        <NotificationIcon className="w-5 h-5" />
      </div>
    </header>
  );
}
