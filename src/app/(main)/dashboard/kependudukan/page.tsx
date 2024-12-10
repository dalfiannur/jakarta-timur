import { Suspense } from "react";
import { PageWrapper } from "../_components/PageWrapper";
import { CounterSection } from "./_sections/CounterSection";
import { RatioCounterChartSection } from "./_sections/RatioCounterChartSection";
import { DisabilityCitizenChartSection } from "./_sections/DisabilityCitizenChartSection";
import { CitizenDepthMapSection } from "./_sections/CitizenDepthMapSection";
import { TableSection } from "./_sections/TableSection";

export const experimental_ppr = true;

export default function Page() {
  return (
    <PageWrapper
      title="Kependudukan"
      description="Sumber : Dinas Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta"
    >
      <CounterSection />
      <RatioCounterChartSection />

      <div className="flex gap-16">
        <Suspense fallback={"Loading..."}>
          <DisabilityCitizenChartSection />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <CitizenDepthMapSection />
        </Suspense>
      </div>

      <Suspense fallback={"Loading..."}>
        <TableSection />
      </Suspense>
    </PageWrapper>
  );
}
