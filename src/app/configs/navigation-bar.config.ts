import { IconKeys } from "../icons";

type Link = {
  icon: IconKeys;
  title: string;
  link: string;
  description?: string;
};

type NavigationBarConfig = {
  links: {
    [key: string]: Link[];
  };
};

export const navigationBarConfig: NavigationBarConfig = {
  links: {
    publikasi: [
      {
        icon: "News",
        title: "Berita",
        link: "/publikasi/berita",
        description: "Baca Berita Terkini Kegiatan dan Program Pemerintah",
      },
      {
        icon: "GalleryWideBold",
        title: "Galeri",
        link: "/publikasi/galeri",
        description:
          "Foto-foto ini memberikan gambaran yang jelas dan informatif",
      },
      {
        icon: "FolderVideo",
        title: "Video",
        link: "/publikasi/video",
        description: "Temukan informasi penting melalui video-video kami",
      },
      {
        icon: "ArticleLine",
        title: "Buletin",
        link: "/publikasi/buletin",
        description: "Buletin ini berisi berita dan pembaruan penting ",
      },
    ],
    informasi: [
      {
        icon: "Vacation",
        title: "Pariwisata",
        link: "/informasi/parawisata",
        description:
          "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
      },
      {
        icon: "ArtTrack",
        title: "Kebudayaan",
        link: "/informasi/kebudayaan",
        description:
          "Akses Informasi institusi pelayanan kesehatan profesional yang terdapat di Jakarta Timur",
      },
      {
        icon: "Park",
        title: "RPTRA",
        link: "/informasi/rptra",
      },
      {
        icon: "GreenEnergy",
        link: "/informasi/urban-farming",
        title: "Urban Farming",
      },
      {
        icon: "ImproveRelevance",
        title: "Inovasi",
        link: "/informasi/inovasi",
      },
      {
        icon: "StatisticUp",
        title: "Statistik",
        link: "/informasi/statistik",
      },
    ],
    layanan: [
      {
        icon: "School",
        title: "Pendidikan",
        link: "/layanan/pendidikan",
        description:
          "Layanan dan Program PEndidikan untuk Masa Depan yang Lebih Cerah",
      },
      {
        icon: "Hospital",
        title: "Kesehatan",
        link: "/layanan/kesehatan",
        description: "Informasi pelayanan kesehatan di Jakarta Timur",
      },
      {
        icon: "BusSign",
        title: "Transportasi",
        link: "https://www.jaklingkoindonesia.co.id/id",
        description:
          "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik.",
      },
      {
        icon: "SmartCity",
        title: "Internet Jak Wifi",
        link: "/layanan/internet-jak-wifi",
        description: "Informasi Lengkap tentang Layanan Internet di Area Anda",
      },
      {
        icon: "ServiceLine",
        title: "PTSP",
        link: "https://ptsp.jakarta.go.id/",
        description:
          "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
      },
      {
        icon: "Tax",
        title: "Pajak",
        link: "https://pajakonline.jakarta.go.id/",
        description:
          "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
      },
      {
        icon: "CustomerService",
        title: "Kanal Aduan",
        link: "https://jaki.jakarta.go.id/id/",
        description:
          "Sampaikan Aduan dan Keluhan Anda untuk Mendapatkan Respon Cepat dan Efektif",
      },
    ],
  },
};
