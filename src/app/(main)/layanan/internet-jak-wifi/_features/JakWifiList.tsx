"use client";
import {
  JakWifiListItem,
  JakWifiListItemSkeleton,
} from "../_components/JakWifiListItem";
import { Pagination } from "@/app/components/Pagination";
import { JakWifi } from "@/types/jakwifi";
import { LatLngExpression } from "leaflet";
import { Icon } from "@/app/icons";

export const JakWifiList = ({
  isLoading,
  data = [],
  page = 1,
  pages = 0,
  setMap,
  setPage,
}: {
  isLoading?: boolean;
  data: JakWifi[];
  page?: number;
  pages?: number;
  setMap?: (view: LatLngExpression) => void;
  setPage?: (page: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        [1, 2, 3, 4].map((_, index) => <JakWifiListItemSkeleton key={index} />)
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <JakWifiListItem
            key={index}
            district={item.kecamatan}
            subDistrict={item.kelurahan}
            rw={item.RW}
            address={item.Alamat}
            onClick={() => {
              setMap?.([parseFloat(item.Longitude), parseFloat(item.Latitude)]);
            }}
          />
        ))
      ) : (
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-4">
          <Icon name="Empty" />
          <div className="text-xl">Tidak Ada Data</div>
        </div>
      )}

      <div className="mt-4 flex justify-center">
        {pages > 1 && (
          <Pagination total={pages} page={page} onPageChange={setPage} />
        )}
      </div>
    </div>
  );
};
