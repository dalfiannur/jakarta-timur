import { Icon } from "@/app/icons";

const items = [
  {
    year: 2008,
    title:
      "Juara II Lomba marawis  dalam rangka festival Nasyid, Marawis Dan Qosidah",
  },
  {
    year: 2010,
    title: "Harapan II Lomba paduan suara ibu-ibu PKK",
  },
  {
    year: 2011,
    title:
      "PialaJuara I Pengelola BKB PAUD dalam rangka lomba 10 Program Pokok PKK",
  },
  {
    year: 2011,
    title:
      "Juara Umum Pembinaan Olahan Hasil Perikanan (Festival Kuliner Betawi)",
  },
  {
    year: 2011,
    title: "Peringkat I Lomba Kecamatan Sayang Ibu",
  },
  {
    year: 2011,
    title: "Juara I Gerakan Toilet Bersih Kategori Perkantoran",
  },
  {
    year: 2012,
    title: "Juara I Lomba Toilet Bersih",
  },
  {
    year: 2013,
    title: "Juara III Lomba Senam Kesegaran Jasmani",
  },
  {
    year: 2018,
    title: "Juara III Double Turnamen Tenis Meja",
  },
  {
    year: 2022,
    title:
      "Peringkat II Capaian Nilai Survey Kepuasan Layanan Masyarakat Triwulan IV Tertinggi",
  },
];

export const PrestasiSection = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl font-semibold lg:text-4xl">Prestasi</h3>
        <p className="mt-2 text-sm text-gray-800 lg:text-2xl">
          Ketahui prestasi yang diberikan kepada Kecamatan Matraman
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2 lg:gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white lg:gap-6 lg:px-6 lg:py-5 drop-shadow rounded-xl"
          >
            <div className="flex items-center justify-center bg-blue-100 w-14 lg:w-16 aspect-square rounded-xl">
              <Icon name="MageTrophyColored" className="w-8 lg:w-10 aspect-square" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-500 lg:text-base">Tahun {item.year}</div>
              <div className="mt-0 text-sm font-bold lg:mt-2 lg:text-lg">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
