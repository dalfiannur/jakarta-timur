"use client"
import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import { CardLink, CardLinkProps } from "../_components/CardLink";

const ITEMS: CardLinkProps[] = [
  {
    icon: <Icon name="CustomerServiceColored" className="w-12 h-12" />,
    title: "Kanal Aduan",
    description: "Sampaikan Aduan dan Keluhan dan dapatkan Respon yang Efektif",
    href: "/layanan/kanal-aduan",
  },
  {
    icon: <Icon name="DocumentChecklistColored" className="w-12 h-12" />,
    title: "Perizinan",
    description:
      "Penjabaran informasi terkait pelayanan dan perizinan Provinsi DKI Jakarta",
    href: "/layanan/perizinan-terpadu",
  },
  {
    icon: <Icon name="BusSignColored" className="w-12 h-12" />,
    title: "Transportasi",
    description:
      "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik",
    href: "/layanan/transportasi",
  },
  {
    icon: <Icon name="SmartCityColored" className="w-12 h-12" />,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map((item, index) => (
          <CardLink key={index} {...item} />
        ))}
      </div>
    </SectionBox>
  );
};
