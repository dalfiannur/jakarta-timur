import { Icon } from "@/app/icons";
import { SectionTitle } from "../SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { getData } from "./actions";

export default async function Page() {
  const data = await getData();

  return (
    <div className="flex-1">
      <SectionTitle>Walikota</SectionTitle>
      <div className="mt-12 grid grid-cols-2 gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative h-[330px] w-[190px]">
              <Image
                src={item.img_url}
                alt="#"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 pr-6 pl-2 py-4">
              <p className="text-xl text-pink-500 font-medium">
                {item.jabatan}
              </p>
              <p className="mt-4 text-2xl font-bold">{item.nama}</p>
              <div
                className="mt-2 text-xl text-gray-600 line-clamp-4"
                dangerouslySetInnerHTML={{
                  __html: item.biodata.split(/<[^>]*>/).join(""),
                }}
              />
              <Link
                href="#"
                className="inlin-block mt-6 font-semibold text-blue-500 inline-flex gap-2 items-center"
              >
                Lihat Profile <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
