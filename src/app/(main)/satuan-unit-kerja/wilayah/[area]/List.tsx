"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { DetailModal } from "./DetailModal";

type DataItem = {
  id: number;
  slug: string;
  nama: string;
  jabatan: string;
  pejabat: string;
};

type ListProps = {
  getData: Promise<{
    data: DataItem[];
  }>;
  params: {
    area: string;
  };
};

export const List = ({ getData, params }: ListProps) => {
  const { data } = use(getData);
  const [selected, setSelected] = useState<null | DataItem>(null);

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl flex items-center gap-6 px-6 py-5 text-left"
        >
          <button
            onClick={() => setSelected(item)}
            className="w-20 h-20 relative"
          >
            <Image
              src="/#"
              alt={item.nama}
              fill
              className="object-cover rounded-xl"
            />
          </button>
          <button
            onClick={() => setSelected(item)}
            className="flex-1 grid gap-2 text-left"
          >
            <h5 className="text-lg font-bold">{item.nama}</h5>
            <div className="grid gap-1">
              <p className="text-sm text-gray-500">{item.jabatan}</p>
              <p className="text-gray-500">{item.pejabat}</p>
            </div>
          </button>
          <Link
            href={`/satuan-unit-kerja/wilayah/${params.area}/${item.slug}`}
            className="text-pink-500 z-30"
          >
            <Icon name="OutlineShare" size={32} />
          </Link>
        </div>
      ))}

      {selected && (
        <DetailModal data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};
