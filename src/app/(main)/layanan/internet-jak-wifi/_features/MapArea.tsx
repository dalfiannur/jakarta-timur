"use client";
import { Icon, LatLngExpression, Map } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import * as store from "../store";
import { useAtomValue } from "jotai";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const center = [-6.225014, 106.900447] as LatLngExpression;

export default function MapArea({ data }: { data: LatLngExpression[] }) {
  const mapRef = useRef<Map>(null);
  const map = useAtomValue(store.map);

  useEffect(() => {
    const mapContainer = L.DomUtil.get("map");
    if (mapContainer) {
      //@ts-ignore
      mapContainer._leaflet_id = null; // Reset instance
    }

    const map = L.map("map").setView(center, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map,
    );

    data.forEach((item) => {
      const marker = L.marker(item).addTo(map);
      marker.setIcon(L.icon({
        iconUrl: '/img/smart-city.svg',
        iconSize: [32,32]
      }))
    });
  }, [data]);

  return <div id="map" className="aspect-square w-full lg:aspect-auto" />;
}
