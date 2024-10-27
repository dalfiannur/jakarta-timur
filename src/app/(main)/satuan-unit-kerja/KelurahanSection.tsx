"use client";
import { Icon } from "@/app/icons";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import { SelectKecamatan } from "./SelectKecamatan";
import Link from "next/link";
import { DetailModal, DetailModalRef } from "./DetailModal";
import { useRef } from "react";

const items = [
  {
    image: "/img/kantor-matraman.png",
    areaName: "Kebon Manggis",
    personName: "Ibnu Fajar",
    slug: "kebon-maggis",
  },
  {
    image: "/img/kantor-pulogadung.png",
    areaName: "Pal Meriam",
    personName: "Setiyawan",
    slug: "pal-meriam",
  },
  {
    image: "/img/kantor-jatinegara.png",
    areaName: "Pisangan Baru",
    personName: "Wahyu Dwi Kesdianto",
    slug: "pisangan-baru",
  },
  {
    image: "/img/kantor-kramat-jati.png",
    areaName: "Kayu Manis",
    personName: "Heru Setiawan, S. STP.",
    slug: "kayu-manis",
  },
  {
    image: "/img/kantor-pasar-rebo.png",
    areaName: "Utan Kayu Selatan",
    personName: "Rusli Abidin, S. E., M.Si",
    slug: "utan-kayu-selatan",
  },
  {
    image: "/img/kantor-cakung.png",
    areaName: "Utan Kayu Utara",
    personName: "Rahma Edwina, S.IP",
    slug: "utan-kayu-utara",
  },
];

export const KelurahanSection = () => {
  const modalRef = useRef<DetailModalRef>(null);

  return (
    <>
      <div className="grid gap-8">
        <SectionTitle>Kelurahan</SectionTitle>
        <div className="flex border rounded-xl focus-within:border-pink-500/40 overflow-hidden">
          <div className="p-4 text-gray-500">
            <Icon name="Search" size={24} />
          </div>
          <input className="py-4 flex-1 focus:outline-none" />
        </div>
        <SelectKecamatan />
        <div className="grid grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl flex items-center gap-6 px-6 py-5"
            >
              <button
                className="w-20 h-20 relative"
                onClick={() => modalRef.current?.open(item)}
              >
                <Image
                  src={item.image}
                  alt={item.areaName}
                  fill
                  className="object-cover rounded-xl"
                />
              </button>
              <button
                className="flex-1 grid gap-2 text-left"
                onClick={() => modalRef.current?.open(item)}
              >
                <h5 className="text-lg font-bold">{item.areaName}</h5>
                <div className="grid gap-1">
                  <p className="text-sm text-gray-500">Nama Lurah</p>
                  <p className="text-gray-500">{item.personName}</p>
                </div>
              </button>
              <Link
                href={`/satuan-unit-kerja/kelurahan?id=${item.slug}`}
                className="text-pink-500"
              >
                <Icon name="OutlineShare" size={32} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <DetailModal ref={modalRef} />
    </>
  );
};
