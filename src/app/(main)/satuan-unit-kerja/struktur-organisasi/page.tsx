import Image from "next/image";
import { SectionTitle } from "../_components/SectionTitle";

export default function Page() {
  return (
    <div className="flex-1">
      <SectionTitle>Struktur Organisasi</SectionTitle>
      <div className="mt-8 lg:mt-16 flex-1 relative aspect-[1/1.2]">
        <Image
          src="/img/struktur-organisasi.png"
          alt="Struktur Organisasi"
          fill
        />
      </div>
    </div>
  );
}
