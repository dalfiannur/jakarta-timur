import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <h2 className="font-bold text-4xl">
            Buletin Info Jaktim Edisi ke-125
          </h2>

          <div className="mt-12 flex justify-center">
            <div className="relative aspect-[10/8] w-[900px]">
              <Image
                src="/img/kantor-walikota-jaktim.png"
                alt="#"
                fill
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
