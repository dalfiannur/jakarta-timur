"use client";

import { Icon } from "@/app/icons";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import {
  DetailModal,
  DetailModalRef,
} from "@/app/(main)/satuan-unit-kerja/DetailModal";
import { useRef } from "react";
import Link from "next/link";

const items = [
  {
    image: "/img/kantor-matraman.png",
    areaName: "Matraman",
    personName: "Bambang Pangestu A., S.E., M.M",
    slug: "matraman",
  },
  {
    image: "/img/kantor-pulogadung.png",
    areaName: "Pulogadung",
    personName: "H. Muchtar, SE, M.Si",
    slug: "pulogadung",
  },
  {
    image: "/img/kantor-jatinegara.png",
    areaName: "Jatinegara",
    personName: "H. Muchtar, SE, M.Si",
    slug: "jatinegara",
  },
  {
    image: "/img/kantor-kramat-jati.png",
    areaName: "Kramat Jati",
    personName: "Kamal, S.STP., M.A.P.",
    slug: "kramat-jati",
  },
  {
    image: "/img/kantor-pasar-rebo.png",
    areaName: "Pasar Rebo",
    personName: "Mujiono, S.Pd., M.Hum",
    slug: "pasar-rebo",
  },
  {
    image: "/img/kantor-cakung.png",
    areaName: "Cakung",
    personName: "Fajar Eko Satriyo, S.STP, M.A",
    slug: "cakung",
  },
  {
    image: "/img/kantor-duren-sawit.png",
    areaName: "Duran Sawit",
    personName: "Kelik Sutanto, AP, MA",
    slug: "duren-sawit",
  },
  {
    image: "/img/kantor-makasar.png",
    areaName: "Makasar",
    personName: "Kamal Alatas, S.STP., M.A.P.",
    slug: "makasar",
  },
  {
    image: "/img/kantor-ciracas.png",
    areaName: "Ciracas",
    personName: "Yus Wil Rasid, S.Sos, M.Si",
    slug: "ciracas",
  },
  {
    image: "/img/kantor-cipayung.png",
    areaName: "Cipayung",
    personName: "Drs. Panangaran Ritonga",
    slug: "cipayung",
  },
];
export const KecamatanSection = () => {
  const modalRef = useRef<DetailModalRef>(null);

  return (
    <>
      <div className="grid gap-8">
        <SectionTitle>Kecamatan</SectionTitle>
        <div className="flex border rounded-xl focus-within:border-pink-500/40 overflow-hidden">
          <div className="p-4 text-gray-500">
            <Icon name="Search" size={24} />
          </div>
          <input className="py-4 flex-1 focus:outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl flex items-center gap-6 px-6 py-5 text-left"
            >
              <button
                onClick={() => modalRef.current?.open(item)}
                className="w-20 h-20 relative"
              >
                <Image
                  src={item.image}
                  alt={item.areaName}
                  fill
                  className="object-cover rounded-xl"
                />
              </button>
              <button
                onClick={() => modalRef.current?.open(item)}
                className="flex-1 grid gap-2 text-left"
              >
                <h5 className="text-lg font-bold">{item.areaName}</h5>
                <div className="grid gap-1">
                  <p className="text-sm text-gray-500">Camat</p>
                  <p className="text-gray-500">{item.personName}</p>
                </div>
              </button>
              <Link
                href={`/satuan-unit-kerja/kecamatan?id=${item.slug}`}
                className="text-pink-500 z-30"
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
