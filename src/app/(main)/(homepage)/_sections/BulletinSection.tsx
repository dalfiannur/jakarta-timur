import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { BulletinSlider } from "../_components/BulletinSlider";
import { trpc } from "@/utils/trpc";

export const BulletinSection = () => {
  const { data } = trpc.externalApi.buletin.useQuery({
    limit: 12,
  });

  return (
    <SectionBox
      title="Buletin Info Jaktim"
      subtitle="Informasi terkini dan pembaruan penting bagi warga Jakarta Timur"
      rightSection={
        <Link
          href="/publikasi/buletin"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-base lg:text-xl font-plus-jakarta-sans"
        >
          Lihat Foto Lainnya <Icon name="ChevronRight" className="w-6 h-6" />
        </Link>
      }
    >
      <BulletinSlider data={data?.data ?? []} />
    </SectionBox>
  );
};
