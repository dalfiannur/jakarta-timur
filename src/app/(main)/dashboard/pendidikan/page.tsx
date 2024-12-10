import { Suspense } from "react";
import { PageWrapper } from "../_components/PageWrapper";
import { CounterSection } from "./_sections/CounterSection";
import { RatioSchoolChartSection } from "./_sections/RatioSchoolChartSection";
import { RatioTeacherStudentChartSection } from "./_sections/RatioTeacherStudentChartSection";
import { RatioSchoolGradeChartSection } from "./_sections/RatioSchoolGradeChartSection";

export default function Page() {
  return (
    <PageWrapper
      title="Pendidikan"
      description="Sumber : Sudin Pendidikan Jakarta Timur"
    >
      <CounterSection />
      <RatioSchoolChartSection />

      <Suspense fallback={"Loading..."}>
        <RatioTeacherStudentChartSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <RatioSchoolGradeChartSection />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <RatioSchoolGradeChartSection key="nasional" national />
      </Suspense>
    </PageWrapper>
  );
}
