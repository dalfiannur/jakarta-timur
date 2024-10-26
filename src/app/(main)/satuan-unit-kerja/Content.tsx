"use client";

import {ReactNode} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useSearchParams} from "next/navigation";
import {OrganizationStructureSection} from "./OrganizationStructureSection";
import {WalikotaSection} from "./WalikotaSection";
import {SekretariatKotaSection} from "./SekretariatKotaSection";
import {BagianKotaSection} from "./BagianKotaSection";
import {UKPDSection} from "./UKPDSection";
import {KecamatanSection} from "./KecamatanSection";
import {KelurahanSection} from "./KelurahanSection";

const section: { [key: string]: ReactNode } = {
  "struktur-organisasi": <OrganizationStructureSection/>,
  walikota: <WalikotaSection/>,
  "sekretariat-kota": <SekretariatKotaSection/>,
  "bagian-kota": <BagianKotaSection/>,
  ukpd: <UKPDSection/>,
  kecamatan: <KecamatanSection/>,
  kelurahan: <KelurahanSection/>
};

export const Content = () => {
  const params = useSearchParams();
  const content = section[params.get("s") as string];

  return (
    <div className="flex-1">
      <AnimatePresence>
        {content && (
          <motion.div
            key={params.get("s") as string}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0, transition: {delay: 0.3}}}
            exit={{opacity: 0, y: -10}}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
