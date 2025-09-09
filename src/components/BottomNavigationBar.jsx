import React, { useState } from "react";
import { motion } from "framer-motion";

import eventIcon from "/Event-Icon.svg";
import mapIcon from "/Map-Icon.svg";
import userIcon from "/User-Icon.svg";

const navTypes = {
    Event: "Events",
    Map: "Map",
    Profile: "Profile"
};

const navItems = [
    { id: navTypes.Event, label: "Eventos", icon: <CalendarIcon /> },
    { id: navTypes.Map, label: "Mapa", icon: <MapIcon /> },
    { id: navTypes.Profile, label: "Perfil", icon: <UserIcon /> },
];


// Simple SVG icons from your design
function CalendarIcon({ className }) {
    return (
        <img className={className} src={eventIcon} alt="" />
    );
}

function MapIcon({ className }) {
    return (
        <img className={className} src={mapIcon} alt="" />
    );
}

function UserIcon({ className }) {
    return (
        <img className={className} src={userIcon} alt="" />
    );
}

export default function BottomNavigationBar() {
    const [selected, setSelected] = useState(navTypes.Map);

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3">
            {
                navItems.map(({ id, label, icon }) => {
                    const isSelected = selected === id;
                    return (
                        <motion.button
                            key={id}
                            onClick={() => setSelected(id)}
                            aria-current={isSelected ? "page" : undefined}
                            className={`relative flex flex-col items-center justify-center cursor-pointer outline-none bg-transparent w-3xs`}
                            initial={false}
                            animate={{}}
                            transition={{ type: "tween", stiffness: 500, damping: 30 }}
                        >
                            {isSelected && (
                                <motion.div
                                    layoutId="highlight"
                                    className="absolute inset-0 bg-green-600 rounded-full shadow-lg"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            {/* Icon */}
                            {React.cloneElement(icon, {
                                className: `relative z-10 w-6 h-6 transition-colors duration-300 ${isSelected ? "filter brightness-0 invert" : "filter grayscale"}`,
                            })}
                            {/* Label */}
                            {!isSelected && (
                                <motion.span
                                    className="relative z-10 mt-1 text-xs text-gray-700 select-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {label}
                                </motion.span>
                            )}
                        </motion.button>
                    );
                })
            }
        </nav>
    );
}