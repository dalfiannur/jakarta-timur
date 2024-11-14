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
        <h3 className="text-4xl font-semibold">Prestasi</h3>
        <p className="mt-2 text-2xl text-gray-800">
          Ketahui prestasi yang diberikan kepada Kecamatan Matraman
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-white drop-shadow px-6 py-5 rounded-xl"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex justify-center items-center">
              <Icon name="MageTrophyColored" size={42} />
            </div>
            <div className="flex-1">
              <div className="text-gray-500 font-medium">Tahun {item.year}</div>
              <div className="mt-2 font-bold text-lg">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
