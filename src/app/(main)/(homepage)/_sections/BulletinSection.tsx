import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { BulletinSlider } from "../_components/BulletinSlider";
import { trpc } from "@/utils/trpc";

export const BulletinSection = () => {
  const { data } = trpc.externalApi.buletin.useQuery(
    {
      limit: 12,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <SectionBox
      title="Buletin Info Jaktim"
      subtitle="Informasi terkini dan pembaruan penting bagi warga Jakarta Timur"
      rightSection={
        <Link
          href="/publikasi/buletin"
          className="inline-flex items-center gap-2 font-plus-jakarta-sans text-base font-semibold text-pink-500 lg:text-xl"
        >
          Lihat Foto Lainnya <Icon name="ChevronRight" className="h-6 w-6" />
        </Link>
      }
    >
      <BulletinSlider data={data?.data ?? []} />
    </SectionBox>
  );
};
