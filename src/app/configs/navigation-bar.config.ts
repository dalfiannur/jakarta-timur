import type { Tab } from "../components/MenuTabs";
import type { IconKeys } from "../icons";

export type Link = {
  icon: IconKeys;
  title: string;
  link: string;
  description?: string;
};

type NavigationBarConfig = {
  links: {
    [key: string]: (Link | Tab)[];
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
        link: "/informasi/pariwisata",
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
    tentangJakartaTimur: [
      {
        key: "tentang-jakarta-timur",
        label: "Tentang Jakarta Timur",
        items: [
          {
            icon: "GoalsFill",
            title: "Visi Misi & Kegiatan Strategies",
            link: "/visi-misi",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "MapMarkerAlt",
            title: "Peta & Batas Wilayah",
            link: "/peta-batas-wilayah",
            description:
              "Temukan data dan informasi  berbagai aspek demografis kota.",
          },
          {
            icon: "StatisticUpSolid",
            title: "Demografi",
            link: "/tentang-jakarta-timur?s=demografi",
            description:
              "Panduan yang jelas untuk  memahami struktur geografis dan tata ruang kota.",
          },
          {
            icon: "Trophy",
            title: "Prestasi",
            link: "/tentang-jakarta-timur?s=prestasi",
            description:
              "Lihat berbagai prestasi yang telah diraih oleh Kota Administrasi Jakarta Timur.",
          },
        ],
      },
      {
        key: "unit-kerja",
        label: "Satuan Unit Kerja",
        items: [
          {
            icon: "ClarityOrganizationSolid",
            title: "Struktur Organisasi",
            link: "/satuan-unit-kerja/struktur-organisasi",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "User",
            title: "Wali Kota",
            link: "/satuan-unit-kerja/walikota",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "Users",
            title: "Sekretariat Kota",
            link: "/satuan-unit-kerja/sekretariat-kota",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "Employees",
            title: "Bagian Kota",
            link: "/satuan-unit-kerja/bagian-kota",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "Employee",
            title: "UKPD",
            link: "/satuan-unit-kerja/ukpd",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "District",
            title: "Kecamatan",
            link: "/satuan-unit-kerja/wilayah/kecamatan",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
          {
            icon: "Office",
            title: "Kelurahan",
            link: "/satuan-unit-kerja/wilayah/kelurahan",
            description:
              "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
          },
        ],
      },
      {
        key: "kepegawaian",
        label: "Kepegawaian",
        items: [],
      },
    ],
  },
};
