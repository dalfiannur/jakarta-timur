"use client";
import {
  SchoolItemSkeleton,
  SchoolListItem,
} from "../_components/SchoolListItem";
import { School } from "@/types/school";
import { LatLngExpression } from "leaflet";
import { Pagination } from "@/app/components/Pagination";
import { Icon } from "@/app/icons";

export const SchoolList = ({
  isLoading,
  data = [],
  page = 1,
  pages = 0,
  setMap,
  setPage,
}: {
  isLoading?: boolean;
  data: School[];
  page?: number;
  pages?: number;
  setMap?: (view: LatLngExpression) => void;
  setPage?: (page: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        [1, 2, 3, 4].map((_, index) => <SchoolItemSkeleton key={index} />)
      ) : data.length > 0 ? (
        data.map((school, index) => (
          <SchoolListItem
            key={index}
            name={school.name}
            address={school.alamat}
            npsn={school.npsn}
            totalTeacher={school.guru}
            totalClass={school.kelas}
            totalLab={school.lab}
            totalLibrary={school.perpus}
            totalTendik={school.tendik}
            onClick={() => {
              if (school.latitude && school.longitude) {
                setMap?.([
                  parseFloat(school.longitude),
                  parseFloat(school.latitude),
                ]);
              }
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
