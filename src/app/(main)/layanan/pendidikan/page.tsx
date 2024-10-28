import { Icon } from "@/app/icons";
import Link from "next/link";
import { Accordion } from "./Accordion";

const kjpRequirements = [
  "Peserta Didik berusia 6 hingga 21 tahun",
  "Terdaftar sebagai Peserta Didik di Sekolah Negeri/Swasta DKI Jakarta",
  "Memiliki NIK dan berdomisili di DKI Jakarta",
  "Memenuhi salah satu kriteria khusus penerima bantuan sosial berikut",
  "Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS)",
  "Anak Panti, penyandang disabilitas, atau anak dari penyandang disabilitas",
  "Anak dari Pengemudi Jaklingko yang mengemudikan Mikrotrans",
  "Anak dari penerima Kartu Pekerja Jakarta",
  "Anak Tidak Sekolah (ATS) yang sudah kembali bersekolah",
];

const schools = [
  {
    title: "Sekolah Dasar",
    description:
      "Temukan pilihan Sekolah Dasar terbaik di wilayah Anda untuk memastikan pendidikan awal yang berkualitas.",
    link: "#",
  },
  {
    title: "Sekolah Menengah Pertama",
    description:
      "Temukan pilihan Sekolah Menengah Pertama terbaik di wilayah Anda untuk memastikan pendidikan awal yang berkualitas.",
    link: "#",
  },
  {
    title: "Sekolah Menengah Atas",
    description:
      "Temukan pilihan Sekolah Menengah Atas terbaik di wilayah Anda untuk memastikan pendidikan awal yang berkualitas.",
    link: "#",
  },
  {
    title: "Sekolah Menengah Kejuruan",
    description:
      "Temukan pilihan Sekolah Menengah Kejuruan terbaik di wilayah Anda untuk memastikan pendidikan awal yang berkualitas.",
    link: "#",
  },
];

export default function Page() {
  return (
    <div className="mt-32">
      <div className="bg-[#F6F8F8] py-20">
        <div className="container mx-auto flex gap-12 bg-[#F6F8F8]">
          <div className="w-[700px] h-[676px]"></div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-4xl">Kartu Jakarta Pintar</h3>
              <p className="text-2xl">
                merupakan program strategis Pemprov DKI Jakarta untuk memberikan
                akses kepada warga DKI Jakarta usia sekolah 6-21 tahun dari
                keluarga tidak mampu, agar dapat menuntaskan pendidikan wajib
                belajar 12 tahun atau Program Peningkatan Keahlian yang Relevan.
              </p>
            </div>
            <div className="font-semibold text-2xl text-pink-500">
              Persyaratan peneriman KJP Plus, yaitu :
            </div>
            <ul className="grid grid-cols-2 gap-8">
              {kjpRequirements.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="text-pink-500">
                    <Icon name="CheckOne" size={24} />
                  </div>
                  <div className="text-lg">{item}</div>
                </li>
              ))}
              <li className="flex items-center">
                <Link
                  href={"/"}
                  className="text-pink-500 text-lg font-bold inline-flex gap-4 items-center"
                >
                  Selengkapnya di KJP Plus
                  <Icon name="ArrowRight" size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto flex flex-row-reverse gap-12">
          <div className="w-[700px] h-[676px]"></div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-4xl">
                Kartu Jakarta Mahasiswa Unggul (KJMU)
              </h3>
              <p className="text-2xl">
                merupakan program strategis Pemerintah Provinsi DKI Jakarta
                berupa pemberian bantuan peningkatan mutu pendidikan bagi
                mahasiswa dari keluarga tidak mampu yang memenuhi kriteria untuk
                menempuh Pendidikan Program Diploma/Sarjana (Jenjang D3, D4, dan
                S1) sampai selesai dan tepat waktu.
              </p>
              <p className="text-2xl">
                Program KJMU merupakan bukti konkret Pemerintah Provinsi DKI
                Jakarta dalam upaya meningkatkan akses dan kesempatan belajar di
                PTN/PTS bagi calon Mahasiswa yang tidak mampu secara ekonomi dan
                memiliki potensi akademik yang baik.
              </p>
              <p className="text-2xl">
                Program ini berkontribusi positif terhadap peningkatan kualitas
                Sumber Daya Manusia (SDM) DKI Jakarta melalui distribusi
                pendidikan tinggi yang berkualitas. Dalam jangka panjang, SDM
                yang berkualitas turut meningkatkan daya saing dan keterampilan
                mahasiswa dalam menghadapi persaingan global.
              </p>
              <p className="text-2xl">
                Hingga akhir tahun 2022, jumlah penerima KJMU Tahap II Tahun
                2022 mencapai 16.708 mahasiswa DKI Jakarta yang tersebar di
                beberapa PTN terdaftar di seluruh Indonesia.
              </p>
              <Link
                href={"/"}
                className="text-pink-500 text-lg font-bold inline-flex gap-4 items-center"
              >
                Selengkapnya di Info KJMU
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F8F8] py-20">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="font-bold text-4xl">
              Informasi Lengkap SD, SMP, SMA, dan SMK
            </h3>
            <p className="text-2xl text-gray-600">
              Dapatkan informasi terbaru dan terlengkap mengenai sekolah di
              Jakarta Timur
            </p>
          </div>

          <div className="flex flex-row-reverse gap-6">
            <div className="w-[750px] h-[500px]"></div>
            <div className="flex-1">
              {schools.map((item, index) => (
                <Accordion key={index} label={item.title}>
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl text-black/80">{item.description}</p>
                    <Link
                      href={item.link}
                      className="text-pink-500 text-lg font-bold inline-flex gap-4 items-center"
                    >
                      Telusuri Data Sekolah
                      <Icon name="ArrowRight" size={24} />
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
