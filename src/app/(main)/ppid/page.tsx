import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { PublicInformationSlider } from "./_features/PublicInformationSlider";

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
    <div className="container mx-auto mt-12 py-6 lg:mt-32">
      <SectionBox
        title="Form Permohonan Informasi Publik dan Pengajuan Keberatan Informasi"
        subtitle="Ketahui berbagai informasi sesuai yang diperlukan baik untuk perorangan atau organisasi dengan mudah."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {forms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 rounded-3xl border p-4 drop-shadow-sm lg:rounded-xl lg:px-6 lg:py-10"
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon name="ScheduleColored" className="h-10 w-10" />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-lg font-bold">{item.title}</h5>
                  <p className="text-base text-gray-500 lg:text-lg">
                    {item.description}
                  </p>
                  <div className="text-base font-bold text-gray-600 lg:text-lg">
                    Dokumen yang dilengkapi:
                  </div>
                </div>
                <ul className="flex flex-col gap-4">
                  {item.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Icon
                        name="CheckOne"
                        className="aspect-square h-5 text-green-500 lg:h-6"
                      />
                      <div className="text-base font-bold text-gray-600 lg:text-lg">
                        {req}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={"#"}
                className="rounded-xl border border-pink-500 p-3 text-center text-sm font-semibold text-pink-500 lg:p-4 lg:text-lg"
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
        <PublicInformationSlider />
      </SectionBox>
    </div>
  );
}
