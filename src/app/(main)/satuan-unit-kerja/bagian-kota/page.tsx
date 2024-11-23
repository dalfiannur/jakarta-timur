"use client";
import { Icon } from "@/app/icons";
import { SectionTitle } from "../_components/SectionTitle";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const { data } = trpc.externalApi.getGovCityEmployers.useQuery();

  return (
    <div className="flex-1">
      <SectionTitle>Bagian Kota</SectionTitle>
      <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-3 lg:gap-6">
        {data?.data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F9FC] rounded py-4 px-4 lg:px-6 flex flex-col gap-4"
          >
            <h5 className="text-sm font-semibold lg:text-xl">{item.pejabat}</h5>
            <div className="flex items-center gap-4">
              <Icon name="UserRoundedBoldDuotone" className="w-6 h-6" />
              <h6 className="flex-1 text-xs lg:text-gray-500">{item.nama}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
