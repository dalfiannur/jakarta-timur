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
  image,
  phone,
}: {
  name: string;
  address: string;
  facilities: string;
  website: string;
  image: string;
  phone: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border p-4 lg:flex-row lg:items-start lg:gap-4 lg:p-8">
      <div className="relative aspect-square h-20 w-32 lg:w-28">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div>
        <div className="flex flex-1 flex-col gap-2 border-b pb-6 lg:flex-row lg:gap-6">
          <div className="grid gap-[2px]">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-base text-gray-600">{address}</p>
          </div>
          <p className="flex h-fit w-fit gap-2 whitespace-nowrap rounded-full bg-green-100 p-2 text-xs text-green-700">
            <Icon name="Phone" className="h-4 w-4" /> {phone}
          </p>
        </div>
        <div className="mt-6">
          <FacilityList dataString={facilities} />
        </div>
        <Link
          href={website}
          className="text-semibold mt-6 inline-block w-full rounded-xl border border-pink-500 px-4 py-3 text-center text-pink-500"
        >
          Akses Website Resmi
        </Link>
      </div>
    </div>
  );
};
