"use client";
import { useEffect, useRef, useState } from "react";
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

export const MapArea = ({ options, markers = [] }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<leaflet.Map>();

  useEffect(() => {
    if (mapRef.current) {
      const m = leaflet.map(mapRef.current);
      m.setView([options.latitude, options.longitude], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(m);
      setMap(m);
    }
  }, [mapRef, options]);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        leaflet.marker([marker.latitude, marker.longitude]).addTo(map);
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
};
