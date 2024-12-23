"use client";
import { MenuTabs, Tab } from "./MenuTabs";
import { MenuList } from "./MenuList";
import { HoverPopover } from "./HoverPopover";
import Image from "next/image";
import { PopoverGroup } from "@headlessui/react";
import { NavigationBarSingleItem } from "./NavigationBarSingleItem";
import { Link, navigationBarConfig } from "../configs/navigation-bar.config";
import { GlobalSearch } from "./GlobalSearch";

const links = navigationBarConfig.links;

export const NavigationBar = () => {
  return (
    <PopoverGroup>
      <div className="fixed top-8 z-[8888] hidden w-full lg:block">
        <div className="container mx-auto flex items-center gap-8 rounded-full bg-white px-8 py-4 drop-shadow-lg">
          <div>
            <Image src="/img/logo.png" alt="Logo" width={175} height={62} />
          </div>
          <ul className="flex gap-8">
            <NavigationBarSingleItem label="Beranda" href="/" index="/" />
            <HoverPopover label="Pemerintah Kota" index="/pemerintah-kota">
              <MenuTabs
                defaultTab="tentang-jakarta-timur"
                tabs={links.tentangJakartaTimur as Tab[]}
              />
            </HoverPopover>
            <HoverPopover label="Layanan" index="/layanan">
              <MenuList items={links.layanan as Link[]} />
            </HoverPopover>
          </ul>
          <GlobalSearch />
          <ul className="flex gap-8">
            <HoverPopover label="Informasi" index="/informasi">
              <MenuList items={links.informasi as Link[]} />
            </HoverPopover>
            <NavigationBarSingleItem label="PPID" href="/ppid" index="/ppid" />
            <NavigationBarSingleItem
              label="Dashboard"
              href="/dashboard"
              index="/dashboard"
            />
            <HoverPopover label="Publikasi" index="/publikasi">
              <MenuList items={links.publikasi as Link[]} />
            </HoverPopover>
          </ul>
        </div>
      </div>
    </PopoverGroup>
  );
};
