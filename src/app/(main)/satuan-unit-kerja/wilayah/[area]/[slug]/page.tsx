import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { Accordion } from "./_components/Accordion";
import { PrestasiSection } from "./_sections/PrestasiSection";
import { FollowUsSection } from "./_sections/FollowUsSection";
import { AccordionItem } from "./_components/AccordioItem";

export default function Page() {
  return (
    <div className="container flex flex-col gap-24 px-4 mx-auto mt-10 py-14 lg:py-12 lg:mt-32">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-52">
        <div className="grid flex-1 gap-20">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-lg font-extrabold uppercase lg:text-4xl">
              Sejarah Wilayah pasar rebo
            </h2>
            <p className="text-sm lg:text-2xl text-black/80">
              Tahun 1746, setelah membeli sebidang tanah yang disebut Tandjong
              dan mengambil alih tanah-tanah milik kapiten der Chinezen Ni Hoe
              Kong, Pieter van den Velde -- saat itu menjabat konsul luar biasa
              Dewan Hindia -- meminta izin membangun rumah pedesaan dan
              menyelenggarakan pasar seminggu sekali di Dregterland dan
              Tandjong, di sisi timur Sungai Ciliwung. Tahun 1760, Van den Velde
              memulai pembangunan rumah yang kini dikenal sebagai Groneveld
              Tandjoeng Oost1
            </p>
            <Link
              href="#"
              className="px-10 py-4 text-sm font-semibold text-white bg-pink-500 lg:px-20 lg:text-lg rounded-xl w-fit"
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
            <div className="flex flex-col gap-2 lg:gap-6 lg:flex-row">
              <div className="flex items-center gap-2 text-xs text-gray-500 lg:text-lg">
                <Icon name="Mail" className="w-4 lg:w-6 aspect-square" />
                <div>kecamatan_pasarrebo@jakarta.go.id</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 lg:text-lg">
                <Icon name="Phone" className="w-4 lg:w-6 aspect-square" />
                <div>( 021 ) 4800487</div>
              </div>
            </div>
            <div className="flex gap-6">
              <Icon name="FacebookColored" className="w-6 h-6" />
              <Icon name="XColored" className="w-6 h-6" />
              <Icon name="WhatsappColored" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[700px] aspect-[70/79] relative">
          <Image
            src="/img/kantor-matraman.png"
            alt="Matraman"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[624px]">
          <div className="w-full lg:w-[624px] aspect-[39/29] relative">
            <Image
              src="/img/map.png"
              alt={"map"}
              fill
              className={"object-cover rounded-xl"}
            />
          </div>
          <div className="mt-4 text-sm lg:text-2xl">
            Jl. Raya Jakarta-Bogor No.KM 72, RT.1/RW.4, Pekayon, Kec. Ps. Rebo,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13710
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 mt-6 lg:mt-0 lg:gap-10">
          <Accordion label="Batas Wilayah">
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2">
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
            </div>
          </Accordion>
          <Accordion label="Kondisi Wilayah">
            <p className="text-xs lg:text-2xl">
              Kecamatan Pasar Rebo memiliki 53 Rukun Warga dan 525 Rukun
              Tetangga dengan luas wilayah sebesar 1.297,34 Ha.
            </p>
          </Accordion>
          <Accordion label="Potensi Wilayah">
            <ul className="grid grid-cols-2 gap-10 px-6 text-xs list-disc lg:text-xl gap-y-2 lg:gap-y-6 lg:gap-x-20">
              <li>Taman Delonix</li>
              <li>Taman Kopi</li>
              <li>Jalan R. Fadillah</li>
              <li>Stadion Mini</li>
              <li>GOR Gongseng</li>
              <li>Taman Surilang</li>
              <li>RPTRA Kopi Gandaria</li>
              <li>Situ Pendongkelan</li>
              <li>RPTRA Kaca Piring</li>
              <li>RPTRA Trikora</li>
              <li>Jalan Condet Raya</li>
              <li>Mal Cijantung</li>
              <li>Jalan Haji Hasan</li>
              <li>Jalan Kalisari II</li>
              <li>Universitas Indraprasta PGRI (Unindra)</li>
              <li>Jalan Tengah</li>
              <li>Kompleks Kopassus</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <PrestasiSection />
      <FollowUsSection />
    </div>
  );
}
