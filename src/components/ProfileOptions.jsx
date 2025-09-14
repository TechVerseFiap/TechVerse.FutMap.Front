export default function ProfileOptions({
  leftIcon,
  color = "bg-white", 
  title,
  titleColor = "text-gray-900",
  description,
  descriptionColor = "text-gray-400",
  rightIcon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between bg-white px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${color}`}>
        {leftIcon}
      </div>

      <div className="flex flex-col flex-1 ml-3">
        <h3 className={`text-base font-semibold ${titleColor}`}>{title}</h3>
        <p className={`text-sm ${descriptionColor}`}>{description}</p>
      </div>

      {rightIcon && (
        <div className="ml-2 text-gray-400">
          {rightIcon}   
        </div>
      )}
    </div>
  );
}
