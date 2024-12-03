import { Grid } from "@/app/components/Grid";
import { PageWrapper } from "../_components/PageWrapper";
import { CounterCardSection } from "./_sections/CounterCardSection";
import { DPSSection } from "./_sections/DPSSection";
import { RecapTableSection } from "./_sections/RecapTableSection";
import { TPSTableSection } from "./_sections/TPSTableSection";
import { ElectorTpsChartSection } from "./_sections/ElectorTpsChartSection";
import { ElectorGenderChartSection } from "./_sections/ElectorGenderChartSection";
import { DPTGenerationTableSection } from "./_sections/DPTGenerationTableSection";
import { ElectionGenerationChartSection } from "./_sections/ElectionGenerationChartSection";

export default function Page() {
  return (
    <PageWrapper
      title="Demokrasi"
      description="Sumber : Sudin Demokrasi Jakarta Timur"
    >
      <CounterCardSection />
      <DPSSection />
      <TPSTableSection />
      <RecapTableSection />
      <Grid cols={2} gap="xl">
        <ElectorTpsChartSection />
        <ElectorGenderChartSection />
      </Grid>
      <Grid cols={2} gap="xl">
        <DPTGenerationTableSection />
        <ElectionGenerationChartSection />
      </Grid>
    </PageWrapper>
  );
}
