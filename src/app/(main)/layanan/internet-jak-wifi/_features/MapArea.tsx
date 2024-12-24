"use client";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const center = [-6.225014, 106.900447] as LatLngExpression;

export default function MapArea({ data = [] }: { data: LatLngExpression[] }) {
  const [map, setMap] = useState<L.Map>();

  useEffect(() => {
    if (window) {
      const mapContainer = L.DomUtil.get("map");
      if (mapContainer) {
        //@ts-expect-error not found
        mapContainer._leaflet_id = null; // Reset instance
      }

      const map = L.map("map").setView(center, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      setMap(map);
    }
  }, []);

  useEffect(() => {
    if (map) {
      data.forEach((item) => {
        const marker = L.marker(item).addTo(map);
        marker.setIcon(
          L.icon({
            iconUrl: "/img/smart-city.svg",
            iconSize: [32, 32],
          }),
        );
      });
    }
  }, [map, data]);

  return <div id="map" className="aspect-square w-full lg:aspect-auto" />;
}
