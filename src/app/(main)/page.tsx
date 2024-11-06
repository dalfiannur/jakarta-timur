import { Calender } from "../components/Calender";
import { Icon } from "../icons";
import { Agenda } from "../components/Agenda";
import { CardLink } from "./CardLink";
import { Hero } from "./Hero";
import { SectionBox } from "../components/SectionBox";
import { Event } from "../components/Event";
import { NewsSlider } from "../components/NewsSlider/NewsSlider";
import { VideoSlider } from "../components/VideoSlider/VideoSlider";
import { NewsPhoto } from "../components/NewsPhoto/NewsPhoto";
import { BuletinSlider } from "../components/BuletinSlider/BuletinSlider";
import { SponsorSection } from "./SponsorSection";
import { PublicIntegrationServiceSection } from "./PublicIntegrationServiceSection";
import { getNews } from "../actions/get-news";
import { getNewsPhotos } from "../actions/get-news-photo";
import { getVideos } from "../actions/get-videos";
import Link from "next/link";

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

export default async function Page() {
  const news = getNews({});
  const newsPhotos = getNewsPhotos({});
  const videos = getVideos({ limit: "3" });

  return (
    <div className="min-h-screen">
      <Hero />
      <PublicIntegrationServiceSection />
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
      <SectionBox
        title="Berita Pemerintah Terkini"
        subtitle="Baca Berita Terkini Program dan Kegiatan Pemerintah"
        rightSection={
          <a
            href="#"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl"
          >
            Lihat Berita Lainnya <Icon name="ChevronRight" size={24} />
          </a>
        }
      >
        <NewsSlider getData={news} />
      </SectionBox>
      <SectionBox
        title="Video Informasi dan Edukasi"
        subtitle="Temukan informasi penting melalui video untuk tetap terinformasi dan teredukasi"
        rightSection={
          <Link
            href="/publikasi/video"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl"
          >
            Lihat Video Lainnya <Icon name="ChevronRight" size={24} />
          </Link>
        }
      >
        <VideoSlider getData={videos} />
      </SectionBox>

      <SectionBox
        title="Cerita Melalui Citra"
        subtitle="Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres, dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota"
        rightSection={
          <a
            href="#"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl"
          >
            Lihat Foto Lainnya <Icon name="ChevronRight" size={24} />
          </a>
        }
      >
        <NewsPhoto getData={newsPhotos} />
      </SectionBox>

      <SectionBox
        title="Buletin Info Jaktim"
        subtitle="Informasi terkini dan pembaruan penting bagi warga Jakarta Timur"
        rightSection={
          <a
            href="#"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl"
          >
            Lihat Foto Lainnya <Icon name="ChevronRight" size={24} />
          </a>
        }
      >
        <BuletinSlider />
      </SectionBox>

      <SponsorSection />
    </div>
  );
}
