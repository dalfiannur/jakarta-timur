import { PageWrapper } from "../_components/PageWrapper";
import { BasicNeedsFulfillmentSection } from "./_sections/BasicNeedsFulfillmentSection";
import { CounterCardSection } from "./_sections/CounterCardSection";

export default function Page() {
  return (
    <PageWrapper
      title="Kesejahtaraan"
      description="Sumber : Sudin Kesejahteraan Jakarta Timur"
    >
      <CounterCardSection />
      <BasicNeedsFulfillmentSection />
    </PageWrapper>
  );
}
