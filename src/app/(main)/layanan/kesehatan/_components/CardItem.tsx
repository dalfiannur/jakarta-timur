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
    <div className="border rounded-xl p-4 flex gap-2">
      <div className="p-1">
        <Image
          src="/img/rskd-duren-sawit.png"
          alt={name}
          width={118}
          height={70}
        />
      </div>
      <div>
        <div className="flex-1 flex gap-6 border-b pb-6">
          <div className="grid gap-[2px]">
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-xl text-gray-600">{address}</p>
          </div>
          <p className="text-xs whitespace-nowrap bg-green-100 text-green-700 h-fit w-fit p-2 rounded-full flex gap-2">
            <Icon name="Phone" size={16} />-
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
