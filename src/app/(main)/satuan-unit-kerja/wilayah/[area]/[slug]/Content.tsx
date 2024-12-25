"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { Accordion } from "./_components/Accordion";
import { PrestasiSection } from "./_sections/PrestasiSection";
import { FollowUsSection } from "./_sections/FollowUsSection";
// import { AccordionItem } from "./_components/AccordioItem";
import {
  useGetDistrictBySlugQuery,
  useGetSubDistrictBySlugQuery,
} from "@/services/api/area";
import { useParams } from "next/navigation";

export const Content = () => {
  const params = useParams();
  const area = params.area as string;
  const slug = params.slug as string;

  const useQuery =
    area === "kecamatan"
      ? useGetDistrictBySlugQuery
      : useGetSubDistrictBySlugQuery;

  const { data } = useQuery(slug);

  return data ? (
    <div className="container mx-auto mt-10 flex flex-col gap-24 px-4 py-14 pt-40 lg:mt-32 lg:py-12">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-52">
        <div className="grid flex-1 gap-20">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-lg font-extrabold uppercase lg:text-4xl">
              {data.nama}
            </h2>
            <div
              className="text-sm text-black/80 lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: data.deskripsi }}
            />

            <Link
              href="#"
              className="w-fit rounded-xl bg-pink-500 px-10 py-4 text-sm font-semibold text-white lg:px-20 lg:text-lg"
            >
              Baca Sejarah Selengkapnya
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xs font-medium lg:text-lg">
              <p>Jam Oprasional</p>
              <p>Senin sd Kamis 07.30 - 16.00 WIB</p>
              <p>Jumat 07.30 - 16.30 WIB</p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 lg:text-lg">
                <Icon name="Mail" className="aspect-square w-4 lg:w-6" />
                <div>kecamatan_pasarrebo@jakarta.go.id</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 lg:text-lg">
                <Icon name="Phone" className="aspect-square w-4 lg:w-6" />
                <div>( 021 ) 4800487</div>
              </div>
            </div>
            <div className="flex gap-6">
              <Icon name="FacebookColored" className="h-6 w-6" />
              <Icon name="XColored" className="h-6 w-6" />
              <Icon name="WhatsappColored" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="relative aspect-[70/79] w-full lg:w-[700px]">
          <Image
            src={data.image!}
            alt="Matraman"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[624px]">
          <iframe
            src={data.map}
            className={"aspect-[39/29] w-full rounded-xl lg:w-[624px]"}
          />

          {/* Alamat */}
          <div className="mt-4 text-sm lg:text-2xl"></div>
        </div>
        <div className="mt-6 flex flex-1 flex-col gap-4 lg:mt-0 lg:gap-10">
          <Accordion label="Batas Wilayah">
            {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <AccordionItem title="Utara">
                Jalan Tengah, Jalan Balai Rakyat, Jalan Condet, Jalan
                H.Nasih,Jalan Mandor Baning,Jalan H.Taiman Timur, Jalan Trikora
                II.
              </AccordionItem>
              <AccordionItem title="Selatan">
                Setu Tipar Desa Mekar Sari, Pilar Batas DKI dengan Provinsi Jawa
                Barat, PT. Panasonic Desa Tugu/Palsi Gunung,Setu Arman / Desa
                Rumbut, Kecamatan Cimanggis Kotamadya Depok Provinsi Jawa Barat
              </AccordionItem>
              <AccordionItem title="Barat">
                Kali Ciliwung, Kecamatan Pasar Minggu Jakarta Selatan.
              </AccordionItem>
              <AccordionItem title="Timur">
                Kali Cipinang,Jalan Raya Bogor Kecamatan Ciracas.
              </AccordionItem>
            </div> */}
          </Accordion>
          <Accordion label="Kondisi Wilayah">
            {/* <div className="text-xs lg:text-2xl" dangerouslySetInnerHTML={{__html: data.kondisi_wilayah}}></div> */}
          </Accordion>
          <Accordion label="Potensi Wilayah">
            <ul
              className="grid list-disc grid-cols-2 gap-10 gap-y-2 px-6 text-xs lg:gap-x-20 lg:gap-y-6 lg:text-xl"
              // dangerouslySetInnerHTML={{ __html: data.potensi }}
            ></ul>
          </Accordion>
        </div>
      </div>

      <PrestasiSection />
      <FollowUsSection />
    </div>
  ) : null;
};
