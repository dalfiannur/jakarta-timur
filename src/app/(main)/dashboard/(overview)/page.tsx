import { Suspense } from "react";
import { CounterSection } from "../kependudukan/_sections/CounterSection";
import { SebaranKepadatanPendudukSection } from "./_sections/SebaranKepadatanPendudukSection";
import { ProfilPendudukSection } from "./_sections/ProfilPendudukSection";
import { TableSection } from "../kependudukan/_sections/TableSection";
import { PageWrapper } from "../_components/PageWrapper";

export const experimental_ppr = true;

export default function Page() {
  return (
    <PageWrapper
      title="Overview"
      description="Ringkasan Data Penting untuk Pemahaman Cepat tentang Jakarta Timur"
    >
      <CounterSection />

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
    </PageWrapper>
  );
}
