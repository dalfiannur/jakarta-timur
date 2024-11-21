"use client";
import { FacilityList } from "./FacilityList";
import { Icon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";

export const CardItem = ({
  name,
  address,
  facilities,
  website,
}: {
  name: string;
  address: string;
  facilities: string;
  website: string;
}) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col lg:flex-row items-center lg:items-start gap-2">
      <div className="relative w-32 lg:w-28 h-20 lg:h-16">
        <Image
          src="/img/rskd-duren-sawit.png"
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex-1 flex flex-col lg:flex-row gap-2 lg:gap-6 border-b pb-6">
          <div className="grid gap-[2px]">
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-xl text-gray-600">{address}</p>
          </div>
          <p className="text-xs whitespace-nowrap bg-green-100 text-green-700 h-fit w-fit p-2 rounded-full flex gap-2">
            <Icon name="Phone" size={16} /> --
          </p>
        </div>
        <div className="mt-6">
          <FacilityList dataString={facilities} />
        </div>
        <Link
          href={website}
          className="mt-6 border border-pink-500 rounded-xl text-pink-500 px-4 py-3 text-semibold inline-block w-full text-center"
        >
          Akses Website Resmi
        </Link>
      </div>
    </div>
  );
};
