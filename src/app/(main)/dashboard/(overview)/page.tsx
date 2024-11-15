import { Suspense } from "react";
import { CounterSection } from "./_sections/CounterSection";
import { SebaranKepadatanPendudukSection } from "./_sections/SebaranKepadatanPendudukSection";
import { ProfilPendudukSection } from "./_sections/ProfilPendudukSection";
import { TableSection } from "./_sections/TableSection";

export const experimental_ppr = true;

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-gray-950">
        <h2 className="text-2xl font-plus-jakarta-sans font-bold">Overview</h2>
        <p className="mt-4 text-lg font-roboto">
          Ringkasan Data Penting untuk Pemahaman Cepat tentang Jakarta Timur
        </p>
      </div>

      <Suspense fallback={"Loading..."}>
        <CounterSection />
      </Suspense>

      <div>
        <div className="flex gap-10">
          <Suspense fallback={"Loading..."}>
            <SebaranKepadatanPendudukSection />
          </Suspense>
          <Suspense fallback={"Loading..."}>
            <ProfilPendudukSection />
          </Suspense>
        </div>
        <div className="mt-10">
          <Suspense fallback={"Loading..."}>
            <TableSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
