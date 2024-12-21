"use client";
import { Icon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "@/utils/trpc";

export const Content = () => {
  const { data } = trpc.externalApi.getProvost.useQuery();
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
      {data?.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="relative aspect-[33/19] w-24 lg:w-48">
            <Image
              src={item.img_url}
              alt="#"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex-1 py-0 pl-2 pr-0 lg:py-4 lg:pr-6">
            <p className="text-xs font-medium text-pink-500 lg:text-xl">
              {item.jabatan}
            </p>
            <p className="mt-1 text-sm font-bold lg:mt-4 lg:text-2xl">
              {item.nama}
            </p>
            <div
              className="mt-1 line-clamp-4 text-xs text-gray-600 lg:mt-2 lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: item.biodata.split(/<[^>]*>/).join(""),
              }}
            />
            <Link
              href={`/satuan-unit-kerja/walikota/${item.id}`}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-blue-500 lg:text-base"
            >
              Lihat Profile{" "}
              <Icon name="ArrowRight" className="aspect-square w-4 lg:w-6" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
