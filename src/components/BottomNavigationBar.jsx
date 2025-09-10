import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
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
    const newPositions = {};
    for (const id of navItems.map((i) => i.id)) {
      const el = itemRefs.current[id];
      if (el) {
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
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
                r="75"
                cy="0"
                fill="black"
                initial={false}
                animate={{ cx: positions[selected] }}
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
      <nav ref={containerRef} className="relative flex justify-around items-end h-24">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isSelected = selected === id;
          return (
            <button
              key={id}
              ref={(element) => (itemRefs.current[id] = element)}
              onClick={() => setSelected(id)}
              className="relative flex flex-col items-center justify-center w-24 h-24"
            >
              {/* Green Floating Circle */}
              {isSelected && (
                <motion.div
                  layoutId="highlight-circle"
                  className="absolute -top-15 w-30 h-30 bg-green-500 rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
                <Icon
                  className={`w-6 h-6 ${
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
                    {label}
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
