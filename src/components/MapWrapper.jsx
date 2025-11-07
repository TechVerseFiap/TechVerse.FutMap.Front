import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomDrawer from "./BottomDrawer";
import { Layer, Map, Source } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { clusterCountLayer, clusterLayer, unclusteredPointLayer, MARKER_CONFIG } from "../assets/layers";
import { useQuery } from "@tanstack/react-query";
import ChipFilter from "../components/ChipFilter";
import {
  ClockIconWhite,
  TrophyIconWhite,
  GraduationCapIconWhite,
  GraduationCapIconBlack,
  ClockIcon,
  TrophyIconBlack,
} from "../components/icons/Icons";

const fetchLocalGeoJsonData = async () => {
  const response = await fetch('/locals.geojson');
  if (!response.ok) {
    throw new Error('Error fetching local GeoJSON data');
  }
  return response.json();
};

export default function MapWrapper() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [marker, setMarker] = useState(null);
  const items = useMemo(() => [
    { id: "school", label: "Escolas", iconActive: <GraduationCapIconWhite className="w-5 h-5" />, iconDesactive: <GraduationCapIconBlack className="w-5 h-5" /> },
    { id: "tournament", label: "Torneios", iconActive: <TrophyIconWhite className="w-5 h-5" />, iconDesactive: <TrophyIconBlack className="w-5 h-5" />  },
    { id: "event", label: "Eventos", iconActive: <ClockIconWhite className="w-5 h-5" />, iconDesactive: <ClockIcon className="w-5 h-5" />  },
  ], []);
  const [activeFilters, setActiveFilters] = useState(items.map(i => i.id));
  const activeFiltersRef = useRef(activeFilters);
  const mapRef = useRef(null);
  
  useEffect(() => {
    activeFiltersRef.current = activeFilters;
  }, [activeFilters]);

  const handleFilterChange = (selected) => {
    setActiveFilters(selected);
    console.log("Filtros ativos:", selected);
  };

  const { data: geojsonData } = useQuery({
    queryKey: ["local-geojson"], 
    queryFn: fetchLocalGeoJsonData
  });

  const onClick = (event) => {
    const feature = event.features?.[0];
    if (!feature) return;

    console.log('Clicked feature:', feature);
    const map = mapRef.current.getMap();

    // Handle cluster click
    if (feature.properties.cluster_id) {
      console.log('Cluster clicked, expanding...');
      const clusterId = feature.properties.cluster_id;
      const source = map.getSource('points');

      source.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          console.error('Error getting cluster zoom:', err);
          return;
        }

        console.log('Zooming to:', zoom);
        map.easeTo({
          center: feature.geometry.coordinates,
          zoom: zoom,
          duration: 500
        });
      });
    } 
    else {
      console.log('Individual point clicked:', feature.properties);
      setMarker(feature.properties);
      setIsDrawerOpen(true);
    }
  };

  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    const loadMarkerImages = async () => {
      console.log("🎯 Active filters changed:", activeFilters);

      for (const type of activeFilters) {
        const id = `marker-${type}`;
        if (map.hasImage(id)) continue;

        const svgPath = MARKER_CONFIG[type];
        if (!svgPath) continue;

        try {
          const bitmap = await fetch(svgPath)
            .then(res => res.blob())
            .then(blob => createImageBitmap(blob));

          if (!map.hasImage(id)) {
            map.addImage(id, bitmap);
            console.log(`✅ Added marker image: ${id}`);
          }
        } catch (e) {
          console.error(`❌ Failed to load marker image for ${type}:`, e);
        }
      }

      // Remove inactive
      Object.keys(MARKER_CONFIG).forEach(type => {
        const id = `marker-${type}`;
        if (!activeFilters.includes(type) && map.hasImage(id)) {
          map.removeImage(id);
          console.log(`🗑️ Removed inactive marker image: ${id}`);
        }
      });
    };

    loadMarkerImages();

  }, [activeFilters]);

  const onMapLoad = useCallback(() => {
    console.log("teste");
    const map = mapRef.current?.getMap();
    if (!map) return;

    console.log("🗺️ Map fully loaded, loading marker icons…");

    const handleStyleImageMissing = (e) => {
      const id = e.id;
      if (id.startsWith("marker-") && activeFilters.includes(id.replace("marker-", ""))) {
        const type = id.replace("marker-", "");
        const svgPath = MARKER_CONFIG[type];
        const img = new Image();

        img.onload = () => {
          if (!map.hasImage(id) && activeFiltersRef.current.includes(type)) {
            map.addImage(id, img);
            console.log(`Added missing image ${id}`);
          }
        };
        img.src = svgPath;
      }
    };

    map.on("styleimagemissing", handleStyleImageMissing);
    return () => {
      map.off("styleimagemissing", handleStyleImageMissing);
    };
  }, [activeFilters]);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-(--bg-white-color)">
        <div className="absolute top-20 left-0 right-0 z-50">
          <ChipFilter items={items} onChange={handleFilterChange} />
        </div>
        <Map
          initialViewState={{
            latitude: -23.564052798969346,
            longitude: -46.65239044319049,
            zoom: 17.5
          }}
          mapStyle="map-light-style.json"
          interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
          onClick={onClick}
          ref={mapRef}
          onLoad={onMapLoad}
        >
          <Source
            id="points"
            type="geojson"
            data={geojsonData}
            cluster={true}
            clusterMaxZoom={10}
            clusterRadius={30}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </Map>
      </div>

      <BottomDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        {...marker}
      />
    </>
  );
}