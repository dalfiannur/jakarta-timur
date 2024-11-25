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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
          {data?.data.map((item, index) => (
            <CardItem
              key={index}
              image={item.img_url}
              name={item.nama}
              address={item.alamat}
              facilities={item.fasilitas}
              website={item.website}
              phone={item.telpon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
