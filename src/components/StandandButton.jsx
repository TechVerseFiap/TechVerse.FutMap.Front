import { useNavigate } from "react-router";

export default function StandardButton({ text, onClick, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick)
      onClick();
    if (route) 
      navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
    >
      {text}
    </button>
  );
}