import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export const OrganizationStructure = () => {
  return (
    <div>
      <SectionTitle>Struktur Organisasi</SectionTitle>
      <div className="mt-12 relative aspect-[1/1.2]">
        <Image
          src="/img/struktur-organisasi.png"
          alt="Struktur Organisasi"
          fill
        />
      </div>
    </div>
  );
};
