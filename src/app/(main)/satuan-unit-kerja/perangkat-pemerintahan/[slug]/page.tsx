import Image from "next/image";

const items = [
  "Memimpin, dan mengoordinasikan pelaksanaan tugas dan fungsi Kecamatan",
  "Pengoordinasian kegiatan pemberdayaan masyarakat.",
  "Pengoordinasian upaya penyelenggaraan ketenteraman dan ketertiban umum.",
  "Pengoordinasian penerapan dan penegakan Peraturan Daerah dan Peraturan Kepala Daerah.",
  "Pengoordinasian pemeliharaan prasarana dan sarana pelayanan umum.",
  "Pengoordinasian penyelenggaraan kegiatan pemerintahan di tingkat Kecamatan.",
  "Pembinaan dan pengawasan penyelenggaraan Pemerintahan Kelurahan.",
  "Pelaksanaan pembinaan dan koordinasi organisasi dan Lembaga kemasyarakatan di wilayah Kecamatan.",
  "Penetapan kebijakan operasional penyelenggaraan pemerintahan Kecamatan.",
  "Pengelolaan administrasi umum, kepegawaian, keuangan, barang/asset Kecamatan.",
  "Pelaksanaan tugas lain sesuai dengan ketentuan peraturan perundangundangan.",
];

export default function Page() {
  return (
    <div className="mt-32 container mx-auto py-12">
      <div className="relative w-full h-[560px] flex justify-center items-end">
        <Image
          src="/img/kantor-walikota-jaktim.png"
          alt="bg"
          fill
          className="object-cover rounded-xl"
        />
        <div>
          <div className="w-[440px] h-[470px] relative">
            <Image
              src="/img/walikota.jpeg"
              alt="walikota"
              fill
              className="object-cover rounded-t-3xl"
            />
          </div>
          <div className="p-4 bg-white text-center font-semibold text-2xl relative z-10">
            Mujiono, S.Pd., M.Hum
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-center font-bold text-2xl text-pink-500">
          Tugas dan Fungsi
        </h4>
        <div className="mt-6 grid grid-cols-2 gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="bg-gray-100 text-gray-600 w-10 h-10 rounded-xl flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex-1 text-2xl">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
