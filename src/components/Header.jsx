// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "/Logo-Horizontal-Dark.png";
import NotificationIcon from "./icons/NotificationIcon";
import SearchIcon from "./icons/SearchIcon";
import { X } from "lucide-react";

export default function Header({ isSearchBarActive = true }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClose = () => {
    setIsExpanded(false);
    setSearchText("");
  };

  return (
    <header className="flex bg-(--white-color) justify-between items-center rounded-b-[20px] p-4">
      <img src={logo} alt="Logo do futmap" className="w-20" />

      <div className="flex items-center gap-3 flex-1 justify-end">
        {isSearchBarActive && (
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 overflow-hidden"
                initial={false}
                animate={{
                  width: isExpanded ? "240px" : "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <motion.div
                  className="relative w-[240px]"
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{
                    opacity: {
                      duration: isExpanded ? 0.2 : 0.1,
                      delay: isExpanded ? 0.1 : 0,
                    },
                  }}
                >
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full bg-gray-200 rounded-full pl-9 pr-9 py-1.5 text-sm outline-none"
                    autoFocus={isExpanded}
                  />
                  <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <motion.button
                    onClick={handleClose}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      scale: isExpanded ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.15 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.button
                onClick={() => setIsExpanded(true)}
                className="relative z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
                whileHover={!isExpanded ? { scale: 1.1 } : {}}
                whileTap={!isExpanded ? { scale: 0.9 } : {}}
              >
                <SearchIcon className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            <motion.div
              className="bg-gray-300 w-0.5 h-[30px]"
              animate={{
                opacity: isExpanded ? 0 : 1,
                scaleY: isExpanded ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <NotificationIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </header>
  );
}
