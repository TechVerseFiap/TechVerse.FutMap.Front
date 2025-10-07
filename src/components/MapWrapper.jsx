import { useEffect, useRef, useState } from "react";
import BottomDrawer from "./BottomDrawer";
import { Layer, Map, Source } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { clusterCountLayer, clusterLayer, unclusteredPointLayer } from "../assets/layers";
import { useQuery } from "@tanstack/react-query";

const fetchGeoJsonData = async () => {
  const response = await fetch('https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson');
  if (!response.ok) {
    throw new Error('Error fetching GeoJSON data');
  }
  return response.json();
};

export default function MapWrapper({ activeFilters = [] }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const mapRef = useRef(null);
  const { data: geojsonData } = useQuery({
    queryKey: ["geojson"], 
    queryFn: fetchGeoJsonData
  })

  const handlePinClick = () => {
    setIsDrawerOpen(true);
  };

  const onClick = async (event) => {
    const feature = event.features[0];
    if (!feature) {
      return;
    }
    const clusterId = feature.properties.cluster_id;

    const geojsonSource = mapRef.current.getSource('points');

    const zoom = await geojsonSource.getClusterExpansionZoom(clusterId);

    mapRef.current.easeTo({
      center: feature.geometry.coordinates,
      zoom,
      duration: 500
    });
  };

  return (
    <>
      <div className="fixed inset-0 z-0 bg-(--bg-white-color)">
        <Map
          initialViewState={{
            latitude: -23.564052798969346,
            longitude: -46.65239044319049,
            zoom: 17.5
          }}
          mapStyle="map-light-style.json"
          interactiveLayerIds={[clusterLayer.id]}
          onClick={onClick}
          ref={mapRef}
        >
          <Source
            id="points"
            type="geojson"
            data={geojsonData}
            cluster={true}
            clusterMaxZoom={10}
            clusterRadius={30}
          >
            <Layer {...clusterLayer}/>
            <Layer {...clusterCountLayer}/>
            <Layer {...unclusteredPointLayer}/>
          </Source>
        </Map>
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
