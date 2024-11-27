"use client";
import { useStore } from "@nanostores/react";
import { Icon, LatLngExpression, Map } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { store$ } from "../store";
import "leaflet/dist/leaflet.css";

export default function MapArea() {
  const mapRef = useRef<Map>(null);
  const store = useStore(store$);

  const center = [-6.225014, 106.900447] as LatLngExpression;

  store$.subscribe((value) => {
    if (value.map) {
      mapRef.current?.setView({
        lat: value.map.latitude,
        lng: value.map.longitude,
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
      {store.map && (
        <Marker
          position={{ lat: store.map.latitude, lng: store.map.longitude }}
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
