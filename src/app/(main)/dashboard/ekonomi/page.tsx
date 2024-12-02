import { PageWrapper } from "../_components/PageWrapper";
import { ChartSection } from "./_sections/ChartSection";
import { CounterSection } from "./_sections/CounterSection";
import { TouristDestinationTableSection } from "./_sections/TouristDestinationTableSection";
import { TouristVisitTableSection } from "./_sections/TouristVisitTableSection";

export default function Page() {
  return (
    <PageWrapper
      title="Ekonomi"
      description="Sumber : Sudin Ekonomi Jakarta Timur"
    >
      <CounterSection />
      <ChartSection />
      <TouristDestinationTableSection />
      <TouristVisitTableSection />
    </PageWrapper>
  );
}
