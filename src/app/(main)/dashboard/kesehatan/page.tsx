import { Suspense } from "react";
import { PageWrapper } from "../_components/PageWrapper";
import { CounterSection } from "./_sections/CounterSection";
import { DisabledPopulationChartSection } from "./_sections/DisabledPopulationChartSection";
import { TotalHealthFacilitySection } from "./_sections/TotalHealthFacilitySection";

export const experimental_ppr = true;

export default function Page() {
  return (
    <PageWrapper
      title="Kesehatan"
      description="Sumber : Sudin Pendidikan Jakarta Timur"
    >
      <Suspense fallback={"Loading..."}>
        <CounterSection />
      </Suspense>

      <div className="grid grid-cols-2">
        <Suspense fallback={"Loading..."}>
          <DisabledPopulationChartSection />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <TotalHealthFacilitySection />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
