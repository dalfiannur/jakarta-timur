import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import { Icon } from "@/app/icons";

const items = [
  {
    image: "/img/walikota.jpeg",
    title: "Walikota",
    name: "M. Anwar, S.Si, M.AP",
    about:
      "Wali Kota Jakarta Timur M. Anwar, SSi, MAP, lahir tanggal 28 Mei 1966. Mulai bekerja di Pemprov DKI Jakarta sejak tahun 1998. Sebelum menjabat Wali Kota Jakarta Timur, M. Anwar berturut-turut menjadi Wakil Bupati Kepulauan Seribu dan Wakil Wali Kota Jakarta Timur.",
  },
  {
    image: "/img/wakil-walikota.jpeg",
    title: "Wakil Walikota",
    name: "Iin Mutmainah, S.Sos., M.Si",
    about:
      "Wakil Walikota Jakarta Timur Iin Mutmainnah lahir tanggal 27 Maret 1971. Mulai bekerja di Pemprov DKI Jakarta sejak tahun 1991. Riwayat Jabatan Sebelum Menjadi Wakil Wali Kota Jakarta Timur :",
  },
];

export const WalikotaSection = () => {
  return (
    <div>
      <SectionTitle>Walikota</SectionTitle>
      <div className="mt-12 grid grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative h-[330px] w-[190px]">
              <Image
                src={item.image}
                alt="#"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 pr-6 pl-2 py-4 grid gap-2">
              <p className="text-xl text-pink-500 font-medium">{item.title}</p>
              <p className="text-2xl font-bold">{item.name}</p>
              <p className="text-xl text-gray-600 line-clamp-5">{item.about}</p>
              <Link
                href="#"
                className="font-semibold text-blue-500 inline-flex gap-2 items-center"
              >
                Lihat Profile <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
