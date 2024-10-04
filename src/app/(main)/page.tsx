import { Calender } from "../components/Calender";
import { Icon } from "../icons";
import { Agenda } from "../components/Agenda";
import { CardLink } from "./CardLink";
import { Hero } from "./Hero";
import { SectionBox } from "./SectionBox";
import { Event } from "../components/Event";

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

const listAgenda = [
  {
    type: 0,
    date: new Date(2024, 8, 15),
  },
  {
    type: 1,
    date: new Date(2024, 8, 15),
  },
  {
    type: 0,
    date: new Date(2024, 8, 16),
  },
  {
    type: 0,
    date: new Date(2024, 8, 17),
  },
  {
    type: 3,
    date: new Date(2024, 8, 18),
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
          {publicServices.map((item, index) => (
            <CardLink key={index} {...item} />
          ))}
        </div>
      </SectionBox>
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
      <SectionBox
        align="center"
        title="Tetap Terinformasi Dengan Kegiatan Pemerintah"
        subtitle="Ketahui Informasi dan Pengumuman Pemerintah Jakarta Timur Terkini"
      >
        <div className="container mx-auto">
          <div className="flex gap-8 bg-white drop-shadow p-6 rounded-xl">
            <Calender
              listAgenda={listAgenda}
              // onItemClick={() => {
              //   console.log("");
              // }}
            />

            <div className="flex-1 grid gap-1">
              <h4 className="font-semibold text-2xl">Agenda Pimpinan</h4>
              <Agenda />
            </div>
            <Event
              items={[
                {
                  image: "/img/event-1.png",
                },
                {
                  image: "/img/event-2.png",
                },
                {
                  image: "/img/event-3.png",
                },
              ]}
            />
          </div>
        </div>
      </SectionBox>
    </div>
  );
}
