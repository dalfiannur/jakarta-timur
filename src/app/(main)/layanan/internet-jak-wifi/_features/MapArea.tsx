"use client";
import { Icon, LatLngExpression, Map } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import * as store from "../store";
import { useAtomValue } from "jotai";
import "leaflet/dist/leaflet.css";

const center = [-6.225014, 106.900447] as LatLngExpression;

export default function MapArea() {
  const mapRef = useRef<Map>(null);
  const map = useAtomValue(store.map);

  useEffect(() => {
    const lat = map.latitude;
    const lng = map.longitude;
    if (lat && lng) {
      mapRef.current?.setView({
        lat,
        lng,
      });
    }
  }, [map]);

  return (
    <MapContainer
      className="aspect-square w-full lg:aspect-auto"
      ref={mapRef}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {map.latitude && map.longitude && (
        <Marker
          position={{ lat: map.latitude, lng: map.longitude }}
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
