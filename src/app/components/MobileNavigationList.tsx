"use client";
import { MouseEventHandler, ReactNode } from "react";
import { Computed, Show, useObservable } from "@legendapp/state/react";
import { motion } from "motion/react";
import { navigationBarConfig } from "../configs/navigation-bar.config";
import { Tab } from "./MenuTabs";
import { open$ } from "./MobileNavigationBar";
import { useRouter } from "next/navigation";

const links = navigationBarConfig.links;

export const MobileNavigationList = () => {
  return (
    <ul className="flex flex-col gap-3">
      <Item label="Beranda" href="/" />
      <DropdownItem label="Pemerintah Kota">
        {links.tentangJakartaTimur.map((link, index) => (
          <DropdownItem key={index} label={(link as Tab).label}>
            {(link as Tab).items.map((item, iItem) => (
              <Item key={iItem} label={item.title} href={item.link} />
            ))}
          </DropdownItem>
        ))}
      </DropdownItem>
    </ul>
  );
};

const Item = ({ label, href }: { label: string; href?: string }) => {
  const router = useRouter();
  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (href) {
            router.push(href);
            open$.set(false);
          }
        }}
      >
        {label}
      </a>
    </li>
  );
};

const DropdownItem = ({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) => {
  const expand$ = useObservable(false);

  const handler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    expand$.set((prev) => !prev);
  };

  return (
    <li>
      <a href="#" onClick={handler}>
        {label}
      </a>

      <Computed>
        {() => (
          <Show if={expand$.get()}>
            <motion.ul
              initial={{ opacity: 0, height: 0, y: -5 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -5 }}
              style={{
                paddingLeft: 16,
                borderLeftWidth: 1,
                borderLeftColor: "#EB30A2",
                display: "flex",
                flexDirection: "column",
                marginTop: 8,
                gap: 12,
              }}
            >
              {children}
            </motion.ul>
          </Show>
        )}
      </Computed>
    </li>
  );
};