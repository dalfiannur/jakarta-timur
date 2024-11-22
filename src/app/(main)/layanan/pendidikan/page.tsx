import { Icon } from "@/app/icons";
import Link from "next/link";
import { Accordion } from "./Accordion";
import { requirements, schools } from "./constants";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-20 lg:mt-32">
      <div className="bg-[#F6F8F8] py-4 lg:py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 bg-[#F6F8F8]">
          <div className="w-full lg:w-[700px] aspect-square lg:aspect-auto h-auto lg:h-[676px] relative">
            <Image
              src="/img/kjp.png"
              alt="Kartu Jakarta Pintar Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl lg:text-4xl font-plus-jakarta-sans">
                Kartu Jakarta Pintar
              </h3>
              <p className="text-base lg:text-2xl font-normal">
                merupakan program strategis Pemprov DKI Jakarta untuk memberikan
                akses kepada warga DKI Jakarta usia sekolah 6-21 tahun dari
                keluarga tidak mampu, agar dapat menuntaskan pendidikan wajib
                belajar 12 tahun atau Program Peningkatan Keahlian yang Relevan.
              </p>
            </div>
            <div className="font-semibold text-lg lg:text-2xl text-pink-500 font-plus-jakarta-sans">
              Persyaratan peneriman KJP Plus, yaitu :
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="text-pink-500">
                    <Icon name="CheckOne" className="w-4 lg:w-6 h-4 lg:h-6" />
                  </div>
                  <div className="text-lg">{item}</div>
                </li>
              ))}
              <li className="flex items-center">
                <Link
                  href={"/"}
                  className="text-pink-500 text-sm lg:text-lg font-bold inline-flex gap-4 items-center"
                >
                  Selengkapnya di KJP Plus
                  <Icon name="ArrowRight" className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 px-4 lg:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-4 lg:gap-12">
          <div className="w-full lg:w-[700px] h-auto lg:h-[676px] aspect-square lg:aspect-auto relative">
            <Image
              src="/img/kjmu.png"
              alt="Kartu Jakarta Mahasiswa Unggul Image"
              fill
              className="object-cover rounded-xl object-[15%_50%]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl lg:text-4xl font-plus-jakarta-sans">
                Kartu Jakarta Mahasiswa Unggul (KJMU)
              </h3>
              <p className="text-base lg:text-2xl font-normal">
                merupakan program strategis Pemerintah Provinsi DKI Jakarta
                berupa pemberian bantuan peningkatan mutu pendidikan bagi
                mahasiswa dari keluarga tidak mampu yang memenuhi kriteria untuk
                menempuh Pendidikan Program Diploma/Sarjana (Jenjang D3, D4, dan
                S1) sampai selesai dan tepat waktu.
              </p>
              <p className="text-base lg:text-2xl font-normal">
                Program KJMU merupakan bukti konkret Pemerintah Provinsi DKI
                Jakarta dalam upaya meningkatkan akses dan kesempatan belajar di
                PTN/PTS bagi calon Mahasiswa yang tidak mampu secara ekonomi dan
                memiliki potensi akademik yang baik.
              </p>
              <p className="text-base lg:text-2xl font-normal">
                Program ini berkontribusi positif terhadap peningkatan kualitas
                Sumber Daya Manusia (SDM) DKI Jakarta melalui distribusi
                pendidikan tinggi yang berkualitas. Dalam jangka panjang, SDM
                yang berkualitas turut meningkatkan daya saing dan keterampilan
                mahasiswa dalam menghadapi persaingan global.
              </p>
              <p className="text-base lg:text-2xl font-normal">
                Hingga akhir tahun 2022, jumlah penerima KJMU Tahap II Tahun
                2022 mencapai 16.708 mahasiswa DKI Jakarta yang tersebar di
                beberapa PTN terdaftar di seluruh Indonesia.
              </p>
              <Link
                href={"/"}
                className="text-pink-500 text-sm lg:text-lg font-bold inline-flex gap-4 items-center"
              >
                Selengkapnya di Info KJMU
                <Icon name="ArrowRight" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F8F8] py-4 px-4 lg:py-20">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center font-plus-jakarta-sans">
            <h3 className="font-bold text-xl lg:text-4xl">
              Informasi Lengkap SD, SMP, SMA, dan SMK
            </h3>
            <p className="text-base lg:text-2xl text-gray-600">
              Dapatkan informasi terbaru dan terlengkap mengenai sekolah di
              Jakarta Timur
            </p>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="w-full lg:w-[750px] h-auto lg:h-[500px] aspect-square lg:aspect-auto relative">
              <Image
                src="/img/school.jpeg"
                alt="Informasi Sekolah Image"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 px-4">
              {schools.map((item, index) => (
                <Accordion key={index} label={item.title}>
                  <div className="flex flex-col gap-4">
                    <p className="text-base lg:text-2xl text-black/80">{item.description}</p>
                    <Link
                      href={item.link}
                      className="text-pink-500 text-sm lg:text-lg font-bold inline-flex gap-4 items-center"
                    >
                      Telusuri Data Sekolah
                      <Icon name="ArrowRight" className="w-6 h-6" />
                    </Link>
                  </div>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
