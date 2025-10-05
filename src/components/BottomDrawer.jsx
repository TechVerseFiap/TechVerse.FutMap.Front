import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";
import {
  TrophyIconEmpty,
  TrophyIconFull,
  DirectionIcon,
  VerifiedIcon,
  PhoneIcon,
  UsersIcon,
  ShareIcon,
  BookmarkIcon,
  ClockIcon
} from "./icons/Icons.jsx";
import StandardButton from "./StandardButton";
import Rating from "react-rating";

export default function BottomDrawer({
  open,
  onOpenChange,
  placeName,
  ratingValue,
  placeDesc,
  placeImgUrl,
  quantityRating,
  opensAt,
  closesAt,
  phone,
  minAge,
  maxAge,
  isVerified,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState(ratingValue);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getTimeText = () => {
    const now = new Date();
    const openTime = new Date(opensAt);
    const closeTime = new Date(closesAt);
    const isOpen = now >= openTime && now <= closeTime;

    const formatTime = (date) => {
      return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };

    return isOpen
      ? `Aberto agora • Fecha às ${formatTime(closeTime)}h`
      : `Fechado • Abre às ${formatTime(openTime)}h`;
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const deltaY = startY - currentY;

    if (deltaY > 50 && !isExpanded) {
      setIsExpanded(true);
    } else if (deltaY < -50 && isExpanded) {
      setIsExpanded(false);
    }

    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const deltaY = startY - currentY;

    if (deltaY > 50 && !isExpanded) {
      setIsExpanded(true);
    } else if (deltaY < -100 && isExpanded) {
      setIsExpanded(false);
    }

    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startY, currentY, isExpanded]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[85vh]" : "max-h-[280px]"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <div className="px-6 pb-4">
          <div className="pt-2 relative">
            <div
              className={`flex items-center gap-4 transition-all duration-700 ease-in-out ${
                isExpanded ? "flex-col items-start" : "flex-row items-center"
              }`}
            >
              <div
                className={`transition-all duration-700 ease-in-out 
                  ${
                    isExpanded ? "w-full h-32 mb-4" : "w-18 h-18 flex-shrink-0"
                  } rounded-lg overflow-hidden`}
              >
                {placeImgUrl ? (
                  <img
                    src={placeImgUrl}
                    alt={placeName || "Place image"}
                    className={`object-cover rounded-lg transition-all duration-700 ease-in-out ${
                      isExpanded ? "w-full h-32" : "w-18 h-18"
                    }`}
                  />
                ) : (
                  <div
                    className={`
                      bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg
                      flex items-center justify-center text-white text-xs font-bold text-center leading-tight
                      transition-all duration-700 ease-in-out
                      ${isExpanded ? "w-full h-32" : "w-18 h-18"}
                    `}
                  >
                    SS
                    <br />
                    CA
                  </div>
                )}
              </div>

              <div
                className={`flex flex-col justify-center transition-all duration-700 ease-in-out ${
                  isExpanded ? "w-full" : "flex-1 min-h-[72px]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-[16px] font-bold text-gray-900 truncate line-clamp-1">
                    {placeName}
                  </h2>
                  {isVerified && isExpanded && (
                    <div
                      className={`
                        w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center
                        transition-all duration-500 ease-in-out
                        ${
                          isExpanded
                            ? "opacity-100 scale-100 translate-x-0"
                            : "opacity-0 scale-0 -translate-x-2"
                        }
                      `}
                    >
                      <VerifiedIcon className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <p
                  className={`
                    text-[14px] text-gray-600 mb-2
                    transition-all duration-500 ease-in-out
                    ${isExpanded ? "line-clamp-1" : "line-clamp-2"}
                  `}
                  style={{
                    maxHeight: isExpanded ? "1.5em" : "3em",
                    overflow: "hidden",
                  }}
                >
                  {placeDesc}
                </p>

                <div className="flex items-center gap-6 mb-2 py-2">
                  <div className="flex items-center leading-none">
                    <Rating
                      key={rating}
                      initialRating={Math.floor(Number(rating))}
                      onChange={(value) => setRating(value)}
                      emptySymbol={
                        <TrophyIconEmpty className="w-5 h-5 mx-0.5" />
                      }
                      fullSymbol={
                        <TrophyIconFull className="w-5 h-5 mx-0.5" />
                      }
                      readonly={true}
                      fractions={1}
                    />
                  </div>
                  <span className="text-xl text-gray-500">
                    {Number(ratingValue).toFixed(1)}
                  </span>
                  {isExpanded ? (
                    <span
                      className={`text-xs text-gray-600 transition-all duration-300 ${
                        isExpanded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      ({quantityRating} avaliações)
                    </span>
                  ) : isVerified ? (
                    <div
                      className={`w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center transition-all duration-300 ${
                        !isExpanded
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    >
                      <VerifiedIcon className="w-3 h-3" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`
                transition-all duration-700 ease-in-out overflow-hidden
                ${
                  isExpanded
                    ? "max-h-[400px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                }
              `}
            >
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <ClockIcon className="w-5 h-5" fill="#4B5563" />
                  <span className="text-sm">{getTimeText()}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <PhoneIcon className="w-5 h-5" fill="#4B5563" />
                  <span className="text-sm">{phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <UsersIcon className="w-5 h-5" fill="#4B5563" />
                  <span className="text-sm">
                    Idades {minAge}-{maxAge} • Todos os níveis
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <StandardButton
              bgColor="bg-(--primary-color)"
              icon={<DirectionIcon/>}
              padding="p-4"
              style="w-full h-full text-xl"
            >
              Get Directions
            </StandardButton>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-4 gap-1 mb-2 mt-4">
              {[
                {
                  icon: <TrophyIconEmpty fill="#222222" className="w-5" />,
                  text: "Avaliar",
                  delay: "delay-100",
                },
                { icon: <PhoneIcon />, text: "Ligar", delay: "delay-200" },
                { icon: <ShareIcon />, text: "Share", delay: "delay-300" },
                { icon: <BookmarkIcon />, text: "Save", delay: "delay-500" },
              ].map((button, index) => (
                <div
                  key={index}
                  className={`
                    w-full transition-all duration-500 ease-in-out ${button.delay}
                    ${
                      isExpanded
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-4 scale-95"
                    }
                  `}
                >
                  <StandardButton
                    bgColor="bg-(--bg-white-color)"
                    textColor="text-(--black-color)"
                    padding="p-2"
                    icon={button.icon}
                    style="w-full h-full text-[12px]"
                  >
                    {button.text}
                  </StandardButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
