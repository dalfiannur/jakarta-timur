import { SectionBox } from "../components/SectionBox";
import { Icon } from "../icons";
import { CardLink, CardLinkProps } from "./CardLink";

const ITEMS: CardLinkProps[] = [
  {
    icon: <Icon name="CustomerServiceColored" size={48} />,
    title: "Kanal Aduan",
    description: "Sampaikan Aduan dan Keluhan dan dapatkan Respon yang Efektif",
    href: "/layanan/kanal-aduan",
  },
  {
    icon: <Icon name="DocumentChecklistColored" size={48} />,
    title: "Perizinan",
    description:
      "Penjabaran informasi terkait pelayanan dan perizinan Provinsi DKI Jakarta",
    href: "/layanan/perizinan",
  },
  {
    icon: <Icon name="BusSignColored" size={48} />,
    title: "Transportasi",
    description:
      "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik",
    href: "/layanan/transportasi",
  },
  {
    icon: <Icon name="SmartCityColored" size={48} />,
    title: "Internet Jak Wifi",
    description: "Informasi Lengkap tentang Layanan Internet di Area Anda",
    href: "/layanan/internet-jak-wifi",
  },
];

export const PublicIntegrationServiceSection = () => {
  return (
    <SectionBox
      title="Layanan Publik Terintegrasi"
      subtitle="Semua layanan pemerintah dalam satu tempat, untuk kenyamanan Anda."
    >
      <div className="grid grid-cols-4 gap-6">
        {ITEMS.map((item, index) => (
          <CardLink key={index} {...item} />
        ))}
      </div>
    </SectionBox>
  );
};
