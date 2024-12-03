import { EmptyData } from "../_components/EmptyData";
import { PageWrapper } from "../_components/PageWrapper";
import { BasicNeedsFulfillmentSection } from "./_sections/BasicNeedsFulfillmentSection";
import { CounterCardSection } from "./_sections/CounterCardSection";

const IS_EMPTY = true;

export default function Page() {
  return (
    <PageWrapper
      title="Kesejahteraan"
      description="Sumber : Sudin Kesejahteraan Jakarta Timur"
    >
      {IS_EMPTY ? (
        <EmptyData />
      ) : (
        <>
          <CounterCardSection />
          <BasicNeedsFulfillmentSection />
        </>
      )}
    </PageWrapper>
  );
}
