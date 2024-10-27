import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";

const forms = [
  {
    title: "Permohonan Informasi Perorangan",
    description:
      "Ajukan permohonan informasi publik dengan mudah! Kami siap membantu Anda mendapatkan akses ke berbagai data dan dokumen resmi yang Anda butuhkan Tahun",
    requirements: ["KTP Perorangan"],
  },
  {
    title: "Permohonan Informasi Organisasi",
    description:
      "Dapatkan informasi yang diperlukan untuk organisasi Anda dengan mengajukan permohonan informasi organisasi",
    requirements: ["KTP Perorangan", "Akta Notaris Lembaga / Organisasi"],
  },
  {
    title: "Permohonan Keberatan Informasi Publik",
    description:
      "Informasi tata cara keberatan terkait permohonan informasi kepada PPID",
    requirements: ["KTP Perorangan", "Surat Keberatan  ( Jika Ada )"],
  },
];

export default function Page() {
  return (
    <div className="mt-32 container mx-auto py-6">
      <SectionBox
        title="Form Permohonan Informasi Publik dan Pengajuan Keberatan Informasi"
        subtitle="Ketahui berbagai informasi sesuai yang diperlukan baik untuk perorangan atau organisasi dengan mudah."
      >
        <div className="grid grid-cols-3 gap-6">
          {forms.map((item, index) => (
            <div
              key={index}
              className="border drop-shadow-sm rounded-xl py-10 px-6 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex justify-center items-center">
                  <Icon name="ScheduleColored" size={40} />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="font-bold text-lg">{item.title}</h5>
                  <p className="text-lg text-gray-500">{item.description}</p>
                  <div className="font-bold text-lg">
                    Dokumen yang dilengkapi:
                  </div>
                </div>
                <ul className="flex flex-col gap-4">
                  {item.requirements.map((req, index) => (
                    <li key={index} className="flex gap-4 items-center">
                      <div className="text-green-500">
                        <Icon name="CheckOne" size={24} />
                      </div>
                      <div className="text-lg font-bold">{req}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={"#"}
                className="border border-pink-500 text-pink-500 text-lg p-4 rounded-xl text-center font-semibold"
              >
                Ajukan Permohonan
              </Link>
            </div>
          ))}
        </div>
      </SectionBox>

      <SectionBox
        title="Daftar Informasi Publik"
        subtitle="Dokumen dan Data Resmi untuk Kepentingan Masyarakat"
      >
        <div className="grid grid-cols-5 gap-6">
          <div className="bg-white border drop-shadow-sm p-4 flex flex-col gap-6 rounded-2xl">
            <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4">
              <Icon name="Pdf" size={80} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-lg text-gray-500">2023</div>
              <div className="font-bold text-lg">KIB A Tahun 2023</div>
            </div>
            <div className="text-sm font-medium">Kelurahan Kebon Manggis</div>
            <div className="flex items-center gap-4">
              <Link
                href={"#"}
                className="border border-pink-500 rounded-xl flex-1 text-pink-500 font-bold text-sm flex justify-center items-center h-10"
              >
                Lihat Dokumen
              </Link>
              <Link
                href={"#"}
                className="bg-pink-500 w-10 h-10 rounded-xl flex justify-center items-center text-white"
              >
                <Icon name="Download" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>
    </div>
  );
}
