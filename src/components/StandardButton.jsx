import React from 'react';

export default function StandardButton({ 
  children, 
  onClick, 
  textColor = "text-white",
  bgColor = "bg-red-500",
  padding = "py-2 px-4", 
  style, 
  icon 
}) {
  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      return icon;
    }

    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent />;
    }

    return null;
  };


  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${bgColor} ${padding} ${style} ${textColor} font-semibold rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none transition duration-200`}
    >
      {icon && (
        <span className="mr-2">
          {renderIcon()}
        </span>
      )}
      {children}
    </button>
  );
}
