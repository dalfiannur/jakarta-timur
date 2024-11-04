"use client";
import { MenuTabs } from "./MenuTabs";
import { MenuList } from "./MenuList";
import { HoverPopover } from "./HoverPopover";
import Image from "next/image";
import { Icon } from "../icons";
import { PopoverGroup } from "@headlessui/react";
import { NavigationBarSingleItem } from "./NavigationBarSingleItem";
import { navigationBarConfig } from "../configs/navigation-bar.config";

const links = navigationBarConfig.links;

export const NavigationBar = () => {
  return (
    <PopoverGroup>
      <div className="z-20 absolute w-full top-8">
        <div className="container mx-auto bg-white drop-shadow-lg rounded-full px-8 py-4 flex gap-8 items-center">
          <div>
            <Image src="/img/logo.png" alt="Logo" width={175} height={62} />
          </div>
          <ul className="flex gap-8">
            <NavigationBarSingleItem label="Beranda" href="/" index="/" />
            <HoverPopover label="Pemerintah Kota" index="/pemerintah-kota">
              <MenuTabs
                defaultTab="tentang-jakarta-timur"
                tabs={[
                  {
                    key: "tentang-jakarta-timur",
                    label: "Tentang Jakarta Timur",
                    items: [
                      {
                        icon: "GoalsFill",
                        title: "Visi Misi & Kegiatan Strategies",
                        link: "/tentang-jakarta-timur?s=visi-misi-kegiatan-strategis",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "MapMarkerAlt",
                        title: "Peta & Batas Wilayah",
                        link: "/tentang-jakarta-timur?s=peta",
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
                        link: "/satuan-unit-kerja?s=struktur-organisasi",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "User",
                        title: "Wali Kota",
                        link: "/satuan-unit-kerja?s=walikota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "Users",
                        title: "Sekretariat Kota",
                        link: "/satuan-unit-kerja?s=sekretariat-kota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "Employees",
                        title: "Bagian Kota",
                        link: "/satuan-unit-kerja?s=bagian-kota",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "Employee",
                        title: "UKPD",
                        link: "/satuan-unit-kerja?s=ukpd",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "District",
                        title: "Kecamatan",
                        link: "/satuan-unit-kerja?s=kecamatan",
                        description:
                          "Pelajari visi dan misi kami dalam membangun kota yang lebih baik, serta kegiatan strategis yang dilakukan.",
                      },
                      {
                        icon: "Office",
                        title: "Kelurahan",
                        link: "/satuan-unit-kerja?s=kelurahan",
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
                ]}
              />
            </HoverPopover>
            <HoverPopover label="Layanan" index="/layanan">
              <MenuList items={links.layanan} />
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
            <HoverPopover label="Informasi" index="/informasi">
              <MenuList items={links.informasi} />
            </HoverPopover>
            <NavigationBarSingleItem label="PPID" href="/ppid" index="/ppid" />
            <NavigationBarSingleItem
              label="Dashboard"
              href="#"
              index="/dashboard"
            />
            <HoverPopover label="Publikasi" index="/publikasi">
              <MenuList items={links.publikasi} />
            </HoverPopover>
          </ul>
        </div>
      </div>
    </PopoverGroup>
  );
};
