import { useEffect, useState, useRef } from "react";
import Chip from "./Chip";

export default function ChipFilter({ items = [], onChange }) {
  const [selected, setSelected] = useState([]);
  const [scrollNeeded, setScrollNeeded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const allIds = items.map((item) => item.id);
    setSelected(allIds);
    if (onChange) onChange(allIds);
  }, [items]);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setScrollNeeded(container.scrollWidth > container.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  const toggleSelect = (id) => {
    let newSelected;
    if (selected.includes(id)) {
      newSelected = selected.filter((itemId) => itemId !== id);
    } else {
      newSelected = [...selected, id];
    }
    setSelected(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div
      ref={containerRef}
      className={`flex gap-3 p-4 whitespace-nowrap scrollbar-hide ${
        scrollNeeded ? "overflow-x-auto" : "justify-center"
      }`}
    >
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          icon={item.icon}
          isActive={selected.includes(item.id)}
          onClick={() => toggleSelect(item.id)}
        />
      ))}
    </div>
  );
}
