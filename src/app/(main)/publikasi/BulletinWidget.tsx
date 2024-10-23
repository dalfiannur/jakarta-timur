import Image from "next/image";

const items = [1, 2, 3];

export const BulletinWidget = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl">Buletin Info Jaktim</h3>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative aspect-square w-full">
              <Image
                src="/img/kantor-walikota-jaktim.png"
                alt="#"
                fill
                className="rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-sm">
              Buletin Info Jaktim Edisi ke-122
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
