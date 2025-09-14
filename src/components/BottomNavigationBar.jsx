// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { EventIcon } from "./icons/EventIcon";
import MapIcon from "./icons/MapIcon";
import { UserIcon } from "./icons/ProfileIcon";
import { useIsMobile } from "../hooks/useIsMobile";
import CustomCutoutShape from "./CustomCutoutShape";

const navItemType = {
  Events: "Eventos",
  Map: "Mapa",
  Profile: "Perfil",
};

const navItems = [
  { type: navItemType.Events, icon: EventIcon },
  { type: navItemType.Map, icon: MapIcon },
  { type: navItemType.Profile, icon: UserIcon },
];

export default function BottomNavigationBar() {
  const [selected, setSelected] = useState(navItemType.Map);
  const [positions, setPositions] = useState({});
  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const isMobile = useIsMobile();

  const recalcCutoutCirclePosition = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions = {};
    
    for (const type of navItems.map(item => item.type)) {
      const el = itemRefs.current[type];
      if (el) {
        const rect = el.getBoundingClientRect();
        newPositions[type] = rect.left - containerRect.left + rect.width / 2;
      }
    }
    setPositions(newPositions);
  }

  useEffect(() => {
    window.addEventListener("resize", recalcCutoutCirclePosition);
    return () => window.removeEventListener("resize", recalcCutoutCirclePosition);
  }, []);

  useLayoutEffect(() => {
    recalcCutoutCirclePosition();
  }, [selected]);

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <svg className="absolute inset-0 w-full h-48 pointer-events-none">
        <defs>
          <mask id="cutout-mask">
            <rect width="100%" height="100%" fill="white" />
            {positions[selected] && (
              <motion.g
                layoutId="highlight-cutout"
                initial={false}
                animate={{
                  transform: `
                    translate(${positions[selected] - 56}px, -39px)
                    scale(${isMobile ? 1.25 : 1.5})
                  `,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <CustomCutoutShape fill="black" />
              </motion.g>
            )}
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#F0F0F0"
          mask="url(#cutout-mask)"
          rx="20"
        />
      </svg>

      {positions[selected] && (
        <motion.div
          layoutId="highlight-circle"
          className="absolute bg-(--primary-color) rounded-full shadow-lg pointer-events-none"
          initial={false}
          animate={{
            width: isMobile ? 100 : 120,
            height: isMobile ? 100 : 120,
            left: positions[selected] - (isMobile ? 50 : 60),
            top: isMobile ? -50 : -60,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        />
      )}

      <nav
        ref={containerRef}
        className="relative flex justify-evenly items-end h-20"
      >
        {navItems.map((item) => {
          const isSelected = selected === item.type;
          return (
            <button
              key={item.type}
              ref={(element) => (itemRefs.current[item.type] = element)}
              onClick={() => setSelected(item.type)}
              className="relative flex flex-col items-center justify-center w-20 h-20 pt-2"
            >
              <motion.div
                className="relative z-10"
                animate={{
                  y: isSelected ? -48 : 0,
                  scale: isSelected ? 3 : 2,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <item.icon
                  className={`transition-all w-4 h-4 sm:w-6 sm:h-6 ${
                    isSelected
                      ? "filter brightness-0 invert"
                      : "filter grayscale"
                  }`}
                />
              </motion.div>

              <AnimatePresence>
                {!isSelected && (
                  <motion.span
                    key="label"
                    className="text-xs font-extrabold text-gray-700 mt-2 pt-1"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.type}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
