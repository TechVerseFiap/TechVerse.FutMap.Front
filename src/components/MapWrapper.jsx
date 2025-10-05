import { useState } from "react";
import Pin from "./Pin";
import BottomDrawer from "./BottomDrawer";
import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapWrapper({ activeFilters = [] }) {
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
        <Map
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
          }}
          mapStyle="map-light-style.json"
        />
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
