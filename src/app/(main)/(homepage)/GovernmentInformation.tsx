import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import { CardLink } from "./CardLink";

const governmentInformation = [
  {
    icon: <Icon name="BriefcaseColored" size={48} />,
    title: "Karir",
    description:
      "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
  },
  {
    icon: <Icon name="UserFolderColored" size={48} />,
    title: "Kependudukan",
    description: "Informasi dan Prosedur Pengurusan Dokumen Kependudukan Resmi",
  },
  {
    icon: <Icon name="HospitalColored" size={48} />,
    title: "Kesehatan",
    description: "Informasi pelayanan kesehatan di Jakarta Timur",
  },
  {
    icon: <Icon name="SchoolColored" size={48} />,
    title: "Pendidikan",
    description:
      "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
  },
  {
    icon: <Icon name="GrowthColored" size={48} />,
    title: "Kesejahteraan",
    description:
      "Program Kesejahteraan untuk Meningkatkan Kualitas Hidup Warga",
  },
  {
    icon: <Icon name="ParkColored" size={48} />,
    title: "Taman / RPTRA",
    description: "Nikmati Fasilitas Taman dan RPTRA di Kota Anda",
  },
  {
    icon: <Icon name="EcoFactoryColored" size={48} />,
    title: "Lingkungan dan Energi",
    description:
      "Program Pemerintah untuk Lingkungan Bersih dan Energi Terbarukan",
  },
  {
    icon: <Icon name="GreenEnergyColored" size={48} />,
    title: "Urban Farming",
    description: "Informasi Tanaman di perkotaan serta manfaatnya",
  },
];

export const GovernmentInformation = () => {
  return (
    <SectionBox
      title="Transparansi Informasi Pemerintah"
      subtitle="Kami berkomitmen untuk menyediakan informasi publik yang mudah diakses dan dipahami."
    >
      <div className="grid grid-cols-4 gap-6">
        {governmentInformation.map((item, index) => (
          <CardLink key={index} {...item} />
        ))}
      </div>
    </SectionBox>
  );
};
