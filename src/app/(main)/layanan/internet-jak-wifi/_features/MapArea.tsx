"use client";
import { Icon, LatLngExpression, Map } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { map } from "../store";
import "leaflet/dist/leaflet.css";
import { useSignalEffect } from "@preact/signals-react";

export default function MapArea() {
  const mapRef = useRef<Map>(null);

  const center = [-6.225014, 106.900447] as LatLngExpression;

  useSignalEffect(() => {
    const lat = map.value.latitude;
    const lng = map.value.longitude;
    if (lat && lng) {
      mapRef.current?.setView({
        lat,
        lng,
      });
    }
  });

  return (
    <MapContainer
      className="aspect-square w-full lg:aspect-auto"
      ref={mapRef}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {map.value.latitude && map.value.longitude && (
        <Marker
          position={{ lat: map.value.latitude, lng: map.value.longitude }}
          icon={
            new Icon({
              iconUrl: "/img/smart-city.svg",
              iconSize: [32, 32],
            })
          }
        />
      )}
    </MapContainer>
  );
}
