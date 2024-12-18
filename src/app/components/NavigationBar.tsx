"use client";
import { MenuTabs, Tab } from "./MenuTabs";
import { MenuList } from "./MenuList";
import { HoverPopover } from "./HoverPopover";
import Image from "next/image";
import { Icon } from "../icons";
import { PopoverGroup } from "@headlessui/react";
import { NavigationBarSingleItem } from "./NavigationBarSingleItem";
import { Link, navigationBarConfig } from "../configs/navigation-bar.config";

const links = navigationBarConfig.links;

export const NavigationBar = () => {
  return (
    <PopoverGroup>
      <div className="z-20 fixed w-full top-8 hidden lg:block">
        <div className="container mx-auto bg-white drop-shadow-lg rounded-full px-8 py-4 flex gap-8 items-center">
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
