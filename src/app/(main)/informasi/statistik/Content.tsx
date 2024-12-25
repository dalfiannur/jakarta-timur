"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./CardItem";
import { Icon } from "@/app/icons";
import { Pagination } from "@/app/components/Pagination";
import { useGetStatisticsQuery } from "@/services/api/statistic";
import { useState } from "react";

export const Content = () => {
  const [page, setPage] = useState(1);
  const { isSuccess, data } = useGetStatisticsQuery({
    page,
    limit: 10,
  });

  const total = data?.total ?? 0;
  const pages = Math.ceil(total / 10);

  return (
    <div>
      <PageTitle
        title="INFORMASI STATISTIK"
        image="/img/kantor-walikota-jaktim.png"
        subtitle="Ketahui inovasi yang telah dilakukan pemerintah Jakarta Timur"
        rounded={false}
        topSpacer
      />
      <div className="container mx-auto py-10">
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold">
            Statistik Kota dan Kecamatan Jakarta Timur
          </h1>
          <p className="text-xl tracking-wide text-gray-600">
            Dapatkan informasi terperinci mengenai berbagai data penting yang
            dirangkum oleh Badan Pusat Statistik untuk Jakarta Timur dan
            kecamatan di wilayahnya
          </p>
        </div>
        <div className="flex items-center gap-2 p-4">
          <i className="text-blue-500">
            <Icon name="Info" className="h-4 w-4" />
          </i>
          <a href="" className="text-sm font-bold text-blue-500">
            Sumber: https://jaktimkota.bps.go.id/
          </a>
        </div>
        {isSuccess && (
          <div className="mt-6">
            <div className="grid grid-cols-5 gap-x-4 gap-y-12">
              {data.data.map((item, index) => (
                <CardItem
                  title={item.name}
                  key={index}
                  image={item.img_url}
                  href={item.link}
                />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Pagination
                total={pages}
                color="blue"
                page={page}
                onPageChange={setPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
