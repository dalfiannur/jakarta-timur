import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import { CardLink } from "../_components/CardLink";

const governmentInformation = [
  {
    icon: <Icon name="BriefcaseColored" className="h-12 w-12" />,
    title: "Karir",
    href: "/layanan/karir",
    description:
      "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
  },
  {
    icon: <Icon name="UserFolderColored" className="h-12 w-12" />,
    title: "Kependudukan",
    href: "/layanan/kependudukan",
    description: "Informasi dan Prosedur Pengurusan Dokumen Kependudukan Resmi",
  },
  {
    icon: <Icon name="HospitalColored" className="h-12 w-12" />,
    title: "Kesehatan",
    href: "/layanan/kesehatan",
    description: "Informasi pelayanan kesehatan di Jakarta Timur",
  },
  {
    icon: <Icon name="SchoolColored" className="h-12 w-12" />,
    title: "Pendidikan",
    href: "/layanan/pendidikan",
    description:
      "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
  },
  {
    icon: <Icon name="GrowthColored" className="h-12 w-12" />,
    title: "Kesejahteraan",
    href: "/layanan/kesejahteraan",
    description:
      "Program Kesejahteraan untuk Meningkatkan Kualitas Hidup Warga",
  },
  {
    icon: <Icon name="ParkColored" className="h-12 w-12" />,
    title: "Taman / RPTRA",
    href: "/layanan/rptra",
    description: "Nikmati Fasilitas Taman dan RPTRA di Kota Anda",
  },
  {
    icon: <Icon name="EcoFactoryColored" className="h-12 w-12" />,
    title: "Lingkungan dan Energi",
    href: "/layanan/lingkungan-energi",
    description:
      "Program Pemerintah untuk Lingkungan Bersih dan Energi Terbarukan",
  },
  {
    icon: <Icon name="GreenEnergyColored" className="h-12 w-12" />,
    title: "Urban Farming",
    href: "/layanan/urban-farming",
    description: "Informasi Tanaman di perkotaan serta manfaatnya",
  },
];

export const GovernmentInformation = () => {
  return (
    <SectionBox
      title="Transparansi Informasi Pemerintah"
      subtitle="Kami berkomitmen untuk menyediakan informasi publik yang mudah diakses dan dipahami."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {governmentInformation.map((item, index) => (
          <CardLink key={index} {...item} />
        ))}
      </div>
    </SectionBox>
  );
};
