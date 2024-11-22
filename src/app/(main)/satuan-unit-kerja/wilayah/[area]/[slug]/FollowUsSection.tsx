import { Icon } from "@/app/icons";
import Image from "next/image";

const items = [{}, {}, {}, {}];

export const FollowUsSection = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="font-semibold text-4xl">Ikuti Kami di Instagram</h3>
        <p className="mt-2 text-2xl text-gray-500">
          Jangan ketinggalan update terbaru dan aktivitas seru kami di Instagram
        </p>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className="relative w-full aspect-[2/3]">
            <Image
              src="/img/kantor-cakung.png"
              alt="#"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute top-4 right-4">
              <Icon name="InstagramColored" className="w-10 h-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
