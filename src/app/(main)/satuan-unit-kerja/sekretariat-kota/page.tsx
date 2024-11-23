"use client";
import { Avatar } from "@/app/components/Avatar";
import { SectionTitle } from "../_components/SectionTitle";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const { data } = trpc.externalApi.getGovSecretariatEmployers.useQuery();

  return (
    <div className="flex-1">
      <SectionTitle>Sekretariat Kota</SectionTitle>
      <div className="grid grid-cols-2 gap-10 mt-12 lg:grid-cols-4">
        {data?.data.map((item, index) => (
          <div
            key={index}
            className="flex items-center h-full px-6 py-4 bg-blue-50 rounded-xl"
          >
            <div className="grid gap-4">
              <Avatar src="/img/walikota.jpeg" size={50} alt={item.pejabat} />
              <div className="grid gap-1">
                <p className="text-sm font-semibold lg:text-lg">{item.nama}</p>
                <p className="text-sm font-medium text-gray-600 lg:text-lg">
                  {item.pejabat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
