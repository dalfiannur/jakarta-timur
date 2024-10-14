"use client";
import { MenuTabs } from "./MenuTabs";
import { MenuList } from "./MenuList";
import { HoverPopover } from "./HoverPopover";
import Image from "next/image";
import { Icon } from "../icons";
import { PopoverGroup } from "@headlessui/react";

export const NavigationBar = () => {
  return (
    <PopoverGroup>
      <div className="z-20 absolute w-full top-8">
        <div className="container mx-auto bg-white drop-shadow-lg rounded-full px-8 py-4 flex gap-8 items-center">
          <div>
            <Image src="/img/logo.png" alt="Logo" width={175} height={62} />
          </div>
          <ul className="flex gap-8">
            <li className="text-pink-500 font-semibold text-sm/6 border-b-2 border-pink-500">
              <a href="#">Beranda</a>
            </li>
            <HoverPopover label="Pemerintah Kota">
              <MenuTabs
                defaultTab="about"
                tabs={[
                  {
                    key: "about",
                    label: "Tentang Jakarta Timur",
                    items: [
                      {
                        icon: <Icon name="GoalsFill" size={16} />,
                        title: "Visi Misi & Kegiatan Strategies",
                        link: "/visi-misi",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="MapMarkerAlt" size={16} />,
                        title: "Peta & Batas Wilayah",
                        description:
                          "Temukan data dan informasi  berbagai aspek demografis kota.",
                      },
                      {
                        icon: <Icon name="StatisticUpSolid" size={16} />,
                        title: "Demografi",
                        description:
                          "Panduan yang jelas untuk  memahami struktur geografis dan tata ruang kota.",
                      },
                      {
                        icon: <Icon name="Trophy" size={16} />,
                        title: "Prestasi",
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
                        icon: (
                          <Icon name="ClarityOrganizationSolid" size={16} />
                        ),
                        title: "Struktur Organisasi",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="User" size={16} />,
                        title: "Wali Kota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="Users" size={16} />,
                        title: "Sekretariat Kota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="Employees" size={16} />,
                        title: "Bagian Kota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="Employee" size={16} />,
                        title: "UKPD",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="District" size={16} />,
                        title: "Kecamatan",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: <Icon name="Office" size={16} />,
                        title: "Kelurahan",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                    ],
                  },
                  {
                    key: "kepegawaian",
                    label: "Kepegawaian",
                    items: [
                      {
                        icon: "Icon",
                        title: "Visi Misi & Kegiatan Strategies",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "Icon",
                        title: "Peta & Batas Wilayah",
                        description:
                          "Temukan data dan informasi  berbagai aspek demografis kota.",
                      },
                      {
                        icon: "Icon",
                        title: "Demografi",
                        description:
                          "Panduan yang jelas untuk  memahami struktur geografis dan tata ruang kota.",
                      },
                      {
                        icon: "Icon",
                        title: "Prestasi",
                        description:
                          "Lihat berbagai prestasi yang telah diraih oleh Kota Administrasi Jakarta Timur.",
                      },
                    ],
                  },
                ]}
              />
            </HoverPopover>
            <HoverPopover label="Layanan">
              <MenuList
                items={[
                  {
                    icon: <Icon name="School" size={16} />,
                    title: "Pendidikan",
                    description:
                      "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
                  },
                  {
                    icon: <Icon name="Hospital" size={16} />,
                    title: "Kesehatan",
                    description:
                      "Informasi pelayanan kesehatan di Jakarta Timur",
                  },
                  {
                    icon: <Icon name="BusSign" size={16} />,
                    title: "Transportasi",
                    description:
                      "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik.",
                  },
                  {
                    icon: <Icon name="SmartCity" size={16} />,
                    title: "Internet Jak Wifi",
                    description:
                      "Informasi Lengkap tentang Layanan Internet di Area Anda",
                  },
                  {
                    icon: <Icon name="ServiceLine" size={16} />,
                    title: "PTSP",
                    description:
                      "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
                  },
                  {
                    icon: <Icon name="Tax" size={16} />,
                    title: "Pajak",
                    description:
                      "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
                  },
                  {
                    icon: <Icon name="CustomerService" size={16} />,
                    title: "Kanal Aduan",
                    description:
                      "Sampaikan Aduan dan Keluhan Anda untuk Mendapatkan Respon Cepat dan Efektif",
                  },
                ]}
              />
            </HoverPopover>
          </ul>
          <div className="group flex-1 bg-gray-100 rounded-lg relative flex items-center border border-gray-100 text-gray-400 focus-within:border-pink-500/40">
            <div className="absolute left-4 group-focus-within:text-pink-500">
              <Icon name="Search" />
            </div>
            <input
              placeholder="Search"
              className="w-full py-4 bg-transparent focus:outline-none pl-14 pr-4"
            />
          </div>
          <ul className="flex gap-8">
            <HoverPopover label="Informasi">
              <MenuList
                items={[
                  {
                    icon: <Icon name="Vacation" size={16} />,
                    title: "Pariwisata",
                    description:
                      "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
                  },
                  {
                    icon: <Icon name="ArtTrack" size={16} />,
                    title: "Kebudayaan",
                    description:
                      "Akses Informasi institusi pelayanan kesehatan profesional yang terdapat di Jakarta Timur",
                  },
                  {
                    icon: <Icon name="Park" size={16} />,
                    title: "RPTRA",
                  },
                  {
                    icon: <Icon name="GreenEnergy" size={16} />,
                    title: "Urban Farming",
                  },
                  {
                    icon: <Icon name="ImproveRelevance" size={16} />,
                    title: "Inovasi",
                  },
                  {
                    icon: <Icon name="StatisticUp" size={16} />,
                    title: "Statistik",
                  },
                ]}
              />
            </HoverPopover>
            <li className="text-gray-500 hover:text-pink-500 font-semibold text-sm/6">
              <a href="#">PPID</a>
            </li>
            <li className="text-gray-500 hover:text-pink-500 font-semibold text-sm/6">
              <a href="#">Dashboard</a>
            </li>
            <HoverPopover label="Publikasi">
              <MenuList
                items={[
                  {
                    icon: <Icon name="News" size={16} />,
                    title: "Berita",
                    description:
                      "Baca Berita Terkini Kegiatan dan Program Pemerintah",
                  },
                  {
                    icon: <Icon name="GalleryWideBold" size={16} />,
                    title: "Galeri",
                    description:
                      "Foto-foto ini memberikan gambaran yang jelas dan informatif",
                  },
                  {
                    icon: <Icon name="FolderVideo" size={16} />,
                    title: "Video",
                    description:
                      "Temukan informasi penting melalui video-video kami",
                  },
                  {
                    icon: <Icon name="ArticleLine" size={16} />,
                    title: "Buletin",
                    description:
                      "Buletin ini berisi berita dan pembaruan penting ",
                  },
                ]}
              />
            </HoverPopover>
          </ul>
        </div>
      </div>
    </PopoverGroup>
  );
};
