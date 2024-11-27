import { BulletinList } from "../_features/BulletinList";

export default function Page() {
  return (
    <div className="px-4">
      <div className="grid gap-2 text-center">
        <h2 className="font-plus-jakarta-sans text-lg font-bold lg:text-3xl">
          Buletin Info Jaktim
        </h2>
        <p className="font-plus-jakarta-sans text-base text-gray-500 lg:text-xl">
          Informasi terkini dan pembaruan penting bagi warga Jakarta Timur
        </p>
      </div>

      <div className="mt-12">
        <BulletinList />
      </div>
    </div>
  );
}
