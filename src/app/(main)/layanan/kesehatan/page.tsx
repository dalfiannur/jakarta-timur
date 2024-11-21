"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { trpc } from "@/utils/trpc";
import { CardItem } from "./_components/CardItem";

export default function Page() {
  const { data } = trpc.externalApi.getHealthCares.useQuery();

  return (
    <div>
      <PageTitle
        title="Layanan Kesehatan"
        subtitle="Informasi Institusi Layanan Kesehatan di Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
        topSpacer
      />
      <div className="py-12 container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          {data?.data.map((item, index) => (
            <CardItem
              key={index}
              name={item.nama}
              address={item.alamat}
              facilities={item.fasilitas}
              website={item.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
