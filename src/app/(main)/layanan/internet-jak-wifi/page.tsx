"use client";
import { FilterSection } from "./_sections/FilterSection";
import { JakWifiList } from "./_features/JakWifiList";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, Map } from "leaflet";

export default function Page() {
  const mapRef = useRef<Map>(null);
  const [selected, setSelected] = useState<JakWifi | null>(null);

  return (
    <div className="mt-20 lg:mt-32">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="mt-10">
            <FilterSection />
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapContainer
                className="aspect-square w-full lg:aspect-auto"
                ref={mapRef}
                center={[
                  selected ? parseFloat(selected.Latitude) : -6.225014,
                  selected ? parseFloat(selected.Longitude) : 106.900447,
                ]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {selected && (
                  <Marker
                    position={[
                      parseFloat(selected.Latitude),
                      parseFloat(selected.Longitude),
                    ]}
                    icon={
                      new Icon({
                        iconUrl: "/img/smart-city.svg",
                        iconSize: [32, 32],
                      })
                    }
                  />
                )}
              </MapContainer>
              <JakWifiList
                onItemClicked={(val) => {
                  setSelected(val);
                  if (val) {
                    mapRef.current?.setView({
                      lat: parseFloat(val.Latitude),
                      lng: parseFloat(val.Longitude),
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
