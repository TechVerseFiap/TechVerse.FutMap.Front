import { useEffect, useState } from "react";
import Chip from "./Chip";

export default function ChipFilter({ items = [], onChange }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const allIds = items.map((item) => item.id);
    setSelected(allIds);
    if (onChange) onChange(allIds);
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
    <div className="flex gap-3 p-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
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
