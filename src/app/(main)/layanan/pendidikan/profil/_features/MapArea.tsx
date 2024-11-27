"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapArea() {
  return (
    <MapContainer
      className="aspect-square w-full lg:aspect-auto"
      center={[-6.225014, 106.900447]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}
