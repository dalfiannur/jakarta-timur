import { BirthDeathRegChartSection } from "./_sections/BirthDeathRegChartSection";
import { BirthDeathRegTableSection } from "./_sections/BirthDeathRegTableSection";
import { EmployedJobGenderChartSection } from "./_sections/EmployedJobGenderChartSection";
import { JobSeekersListingEducationChartSection } from "./_sections/JobSeekersListingEducationChartSection";
import { JobSeekersListingEducationTableSection } from "./_sections/JobSeekersListingEducationTableSection";
import { JobSeekersListingTitleChartSection } from "./_sections/JobSeekersListingTitleChartSection";
import { JobSeekersOverviewTableSection } from "./_sections/JobStatsOverviewTableSection";
import { OverviewSection } from "./_sections/OverviewSection";
import { PopulationActivityGenderChartSection } from "./_sections/PopulationActivityGenderChartSection";
import { PopulationEducationActivityTableSection } from "./_sections/PopulationEducationActivityTableSection";
import { PopulationGenderAgeChartSection } from "./_sections/PopulationGenderAgeChartSection";
import { PopulationGenderDistrictChartSection } from "./_sections/PopulationGenderDistrictChartSection";
import { PopulationGrowthChartSection } from "./_sections/PopulationGrowthChartSection";
import { PopulationGrowthTableSection } from "./_sections/PopulationGrowthTableSection";

export default function Page() {
  return (
    <>
      <OverviewSection />
      <PopulationGrowthChartSection />
      <PopulationGrowthTableSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PopulationGenderAgeChartSection />
        <PopulationGenderDistrictChartSection />
      </div>
      <BirthDeathRegChartSection />
      <BirthDeathRegTableSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PopulationActivityGenderChartSection />
        <EmployedJobGenderChartSection />
      </div>
      <PopulationEducationActivityTableSection />
      <JobSeekersListingEducationTableSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <JobSeekersListingTitleChartSection />
        <JobSeekersListingEducationChartSection />
      </div>
      <JobSeekersOverviewTableSection />
    </>
  );
}
