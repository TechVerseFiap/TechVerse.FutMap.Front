import { useState } from "react";
import Pin from "./Pin";
import BottomDrawer from "./BottomDrawer";

export default function Map({ activeFilters = [] }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePinClick = () => {
    setIsDrawerOpen(true);
  };

  const pins = [
    { type: "schools", style: { top: "20%", left: "30%" } },
    { type: "schools", style: { top: "40%", left: "60%" } },
    { type: "schools", style: { top: "70%", left: "20%" } },
    { type: "tournaments", style: { top: "25%", left: "50%" } },
    { type: "tournaments", style: { top: "60%", left: "40%" } },
    { type: "events", style: { top: "50%", left: "70%" } },
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 bg-(--bg-white-color)">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.242728474241!2d-46.65496142499143!3d-23.564084278797967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1757998664702!5m2!1spt-BR!2sbr"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {pins
          .filter(pin => activeFilters.includes(pin.type)) 
          .map((pin, idx) => (
            <Pin
              key={idx}
              type={pin.type === "schools" ? "school" : pin.type === "tournaments" ? "tournament" : "event"}
              style={pin.style}
              onClick={handlePinClick}
            />
          ))}
      </div>

      <BottomDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        placeName="Academia Central"
        ratingValue={4.5}
        placeDesc="Academia completa com treinos personalizados."
        placeImgUrl="https://images.unsplash.com/photo-1710926851153-c5c4cd1e4596?q=80&w=1622&auto=format&fit=crop"
        quantityRating={120}
        opensAt="2025-09-16T06:00:00"
        closesAt="2025-09-16T22:00:00"
        phone="(11) 99999-9999"
        minAge={16}
        maxAge={60}
        isVerified={true}
      />
    </>
  );
}
