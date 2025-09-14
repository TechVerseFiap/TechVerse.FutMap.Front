import OptionCard from "./OptionCard";

export default function OptionCardList({ items = [], className=""}) {
  return (
    <div className={ `grid grid-cols-2 gap-4 ${className}` }>
      {items.map((item, index) => (
        <OptionCard
          key={index}
          icon={item.icon}
          text={item.text}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
