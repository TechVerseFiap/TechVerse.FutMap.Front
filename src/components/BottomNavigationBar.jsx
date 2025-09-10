import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, animate, transform } from "framer-motion";
import EventIcon from "./EventIcon";
import MapIcon from "./MapIcon";
import ProfileIcon from "./ProfileIcon";

const navItems = [
  { id: "events", label: "Eventos", icon: EventIcon },
  { id: "map", label: "Mapa", icon: MapIcon },
  { id: "profile", label: "Perfil", icon: ProfileIcon },
];

export default function BottomNavigationBar() {
  const [selected, setSelected] = useState("map");
  const [positions, setPositions] = useState({});
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const recalcCutoutCirclePosition = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions = {};
    
    for (const id of navItems.map((i) => i.id)) {
      const el = itemRefs.current[id];
      if (el) {
        const rect = el.getBoundingClientRect();
        newPositions[id] = rect.left - containerRect.left + rect.width / 2;
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
      {/* SVG Mask Layer */}
      <svg className="absolute inset-0 w-full h-64 pointer-events-none">
        <defs>
          <mask id="cutout-mask">
            {/* Full bar = white (visible) */}
            <rect width="100%" height="100%" fill="white" />
            {/* Circle = black (cut out) */}
            {positions[selected] && (
              <motion.circle
                layoutId="highlight-cutout"
                cy="0"
                fill="black"
                initial={false}
                animate={{
                  cx: positions[selected],
                  r: window.innerWidth < 640 ? 60 : 75,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </mask>
        </defs>
        {/* The bar with cutout applied */}
        <rect
          width="100%"
          height="100%"
          fill="white"
          mask="url(#cutout-mask)"
          rx="20"
        />
      </svg>

      {/* Navigation Content */}
      <nav
        ref={containerRef}
        className="relative flex justify-evenly items-end h-24"
      >
        {navItems.map((item) => {
          const isSelected = selected === item.id;
          return (
            <button
              key={item.id}
              ref={(element) => (itemRefs.current[item.id] = element)}
              onClick={() => setSelected(item.id)}
              className="relative flex flex-col items-center justify-center w-24 h-24"
            >
              {/* Green Floating Circle */}
              {isSelected && (
                <motion.div
                  layoutId="highlight-circle"
                  className="absolute bg-green-500 rounded-full shadow-lg"
                  animate={{
                    width: window.innerWidth < 640 ? 100 : 120,
                    height: window.innerWidth < 640 ? 100 : 120,
                    top: window.innerWidth < 640 ? -50 : -60,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: isSelected ? -50 : 0,
                  scale: isSelected ? 2 : 1.5,
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

              {/* Label */}
              <AnimatePresence>
                {!isSelected && (
                  <motion.span
                    key="label"
                    className="text-xs font-extrabold text-gray-700 mt-2"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
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
