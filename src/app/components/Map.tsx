"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

type Options = {
  aspectRatio: number;

  longitude: number;
  latitude: number;
};

type Marker = {
  longitude: number;
  latitude: number;
};

type MapProps = {
  options: Options;
  markers?: Marker[];
};

export default function MapArea({ options, markers = [] }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const currentMap = useRef<leaflet.Map>(null);
  const [map, setMap] = useState<leaflet.Map>();

  useEffect(() => {
    if (mapRef.current) {
      let m = leaflet.map(mapRef.current);
      m.setView([options.latitude, options.longitude], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(m);
      setMap(m);

      return () => {
        // m.remove();
      };
    }
  }, [mapRef, options]);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        if (marker.latitude && marker.longitude) {
          const mark = leaflet.marker({
            lat: marker.latitude,
            lng: marker.longitude,
          });
          mark.addTo(map);
        }
      });
    }
  }, [map, markers]);

  return (
    <div
      ref={mapRef}
      className="w-full"
      style={{
        aspectRatio: options.aspectRatio,
      }}
    />
  );
}
