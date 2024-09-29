import { Icon } from "../icons";
import { CardLink } from "./CardLink";
import { Hero } from "./Hero";
import { SectionBox } from "./SectionBox";

const publicServices = [
  {
    icon: <Icon name="CustomerServiceColored" size={48} />,
    title: "Kanal Aduan",
    description: "Sampaikan Aduan dan Keluhan dan dapatkan Respon yang Efektif",
  },
  {
    icon: <Icon name="DocumentChecklistColored" size={48} />,
    title: "Perizinan",
    description:
      "Penjabaran informasi terkait pelayanan dan perizinan Provinsi DKI Jakarta",
  },
  {
    icon: <Icon name="BusSignColored" size={48} />,
    title: "Transportasi",
    description:
      "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik",
  },
  {
    icon: <Icon name="SmartCityColored" size={48} />,
    title: "Internet Jak Wifi",
    description: "Informasi Lengkap tentang Layanan Internet di Area Anda",
  },
];

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <SectionBox
        title="Layanan Publik Terintegrasi"
        subtitle="Semua layanan pemerintah dalam satu tempat, untuk kenyamanan Anda."
      >
        <div className="grid grid-cols-4 gap-6">
          {publicServices.map((item) => (
            <CardLink {...item} />
          ))}
        </div>
      </SectionBox>
    </div>
  );
}
