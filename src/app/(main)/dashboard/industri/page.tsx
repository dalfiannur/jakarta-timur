import { Suspense } from "react";
import { PageWrapper } from "../_components/PageWrapper";
import { CounterSection } from "./_sections/CounterSection";
import { AgentChartSection } from "./_sections/AgentChartSection";
import { AgentTableSection } from "./_sections/AgentTableSection";
import { DepotAgentTableSection } from "./_sections/DepotAgentTableSection";
import { HotelTableSection } from "./_sections/HotelTableSection";
import { RestaurantTableSection } from "./_sections/RestaurantTableSection";
import { CompanyTableSection } from "./_sections/CompanyTableSection";
import { EmployeerTableSection } from "./_sections/EmployeerTableSection";

export const experimental_ppr = true;

export default function Page() {
  return (
    <PageWrapper
      title="Industri"
      description="Sumber : Sudin Industri Jakarta Timur"
    >
      <Suspense fallback={"Loading..."}>
        <CounterSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <AgentChartSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <AgentTableSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <DepotAgentTableSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <HotelTableSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <RestaurantTableSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <CompanyTableSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <EmployeerTableSection />
      </Suspense>
    </PageWrapper>
  );
}
