import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { BulletinSlider } from "./BulletinSlider";

export default function Page() {
  return (
    <SectionBox
      title="Buletin Info Jaktim"
      subtitle="Informasi terkini dan pembaruan penting bagi warga Jakarta Timur"
      rightSection={
        <Link
          href="/publikasi/buletin"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl font-plus-jakarta-sans"
        >
          Lihat Foto Lainnya <Icon name="ChevronRight" size={24} />
        </Link>
      }
    >
      <BulletinSlider />
    </SectionBox>
  );
}
