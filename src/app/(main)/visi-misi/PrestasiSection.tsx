import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Icon } from "@/app/icons";
import { animations } from "./animations";
import { PrestasiItem } from "./PrestasiItem";

export const PrestasiSection = () => {
  return (
    <motion.div {...animations}>
      <SectionTitle>Prestasi</SectionTitle>
      <div className="mt-8">
        <div className="border rounded-xl overflow-hidden flex pl-4 items-center focus-within:border-pink-400">
          <Icon name="Search" size={24} />
          <input
            className="py-4 px-6 flex-1 focus:outline-none"
            placeholder="Cari Nama Dokumen"
          />
        </div>
        <div className="mt-8">x</div>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
        </div>
      </div>
    </motion.div>
  );
};
