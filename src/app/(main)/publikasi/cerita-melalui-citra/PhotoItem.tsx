import { Icon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";

export const PhotoItem = () => {
  return (
    <div>
      <Link href="/publikasi/cerita-melalui-citra/1">
        <div className="relative aspect-[6/5]">
          <Image
            src={"/img/kantor-walikota-jaktim.png"}
            alt="#"
            fill
            className="rounded-xl"
          />
        </div>
      </Link>
      <div className="mt-6 grid gap-4">
        <Link href="/publikasi/cerita-melalui-citra/1">
          <h2 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut
            quisquam expedita cum asperiores itaque maxime
          </h2>
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Calendar" size={16} />
            </div>
            <div>18 Juli 2024</div>
          </div>
          <div className="border-l" />
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="QuillWrite" size={16} />
            </div>
            <div>Pasar Jatinegara</div>
          </div>
        </div>
      </div>
    </div>
  );
};
