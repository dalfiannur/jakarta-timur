import { PageWrapper } from "../_components/PageWrapper";
import { CounterCardSection } from "./_sections/CounterCardSection";
import { FacilityChartSection } from "./_sections/FacilityChartSection";
import { PlantingPlantsChartSection } from "./_sections/PlantingPlansChartSection";
import { PlantsChartSection } from "./_sections/PlantsChartSection";
import { TPUTableSection } from "./_sections/TPUTableSection";

export default function Page() {
  return (
    <PageWrapper
      title="Lingkungan Hidup"
      description="Sumber : Sudin Lingkungan Jakarta Timur"
    >
      <CounterCardSection />
      <PlantingPlantsChartSection />
      <FacilityChartSection />
      <PlantsChartSection />
      <TPUTableSection />
    </PageWrapper>
  );
}
