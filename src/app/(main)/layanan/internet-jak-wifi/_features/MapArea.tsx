"use client";
import { JakWifi } from "@/services/api/jakwifi";
import { LatLngExpression, icon, Map } from "leaflet";
import { memo, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = icon({
  iconUrl: "/img/smart-city.svg",
  iconSize: [38, 38],
});

const MapArea = ({
  data = [],
  setMap,
}: {
  data: JakWifi[];
  setMap: (map: Map) => void;
}) => {
  const [m, setM] = useState<Map>();
  const [center] = useState<LatLngExpression>({
    lat: -6.225014,
    lng: 106.900447,
  });
  const markers = useMemo(() => {
    const result = data.map((item) => ({
      lat: parseFloat(item.Latitude),
      lng: parseFloat(item.Longitude),
    }));

    if (result.length > 1) {
      m?.setView(result[0]);
    }

    return result;
  }, [data, m]);

  return (
    <div className="aspect-square w-full">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", aspectRatio: 1 }}
        ref={(ref) => {
          if (ref) {
            setMap(ref);
            setM(ref);
          }
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} icon={customIcon} />
        ))}
      </MapContainer>
    </div>
  );
};

export default memo(MapArea);
