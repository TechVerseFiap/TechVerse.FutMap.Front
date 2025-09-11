import { useState } from "react";
import Chip from "./Chip";

export default function ChipFilter({ items = [], onChange }) {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    let newSelected;
    if (selected.includes(id)) {
      newSelected = selected.filter((item) => item !== id);
    } else {
      newSelected = [...selected, id];
    }
    setSelected(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div className="flex justify-center gap-3 flex-wrap p-4">
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
