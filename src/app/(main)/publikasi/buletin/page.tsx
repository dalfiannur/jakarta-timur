import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "./PhotoItem";

export default function Page() {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl">Buletin Info Jaktim</h2>
        <p className="text-xl text-gray-500">
          Informasi terkini dan pembaruan penting bagi warga Jakarta Timur
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-4 gap-12">
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
        </div>
        <div className="flex justify-center mt-12">
          <Pagination total={100} />
        </div>
      </div>
    </div>
  );
}
