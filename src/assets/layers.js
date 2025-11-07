export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};

export const MARKER_CONFIG = {
  school: "/School-Marker.png",
  tournament: "/Tournment-Marker.png",
  event: "/Event-Marker.png",
};

export const unclusteredPointLayer = {
  id: "unclustered-point",
  type: "symbol",
  source: "points",
  filter: ["!", ["has", "point_count"]],
  layout: {
    "icon-image": [
      "match",
      ["get", "type"],
      ...Object.keys(MARKER_CONFIG).flatMap((key) => [key, `marker-${key}`]),
      "school", // default
    ],
    "icon-size": 0.6,
    "icon-allow-overlap": true,
    "icon-anchor": "bottom",
  },
};