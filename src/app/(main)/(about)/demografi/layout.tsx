import { ReactNode } from "react";
import { SectionTitle } from "../SectionTitle";

type LayoutProps = {
  overview: ReactNode;
  populationGrowthChart: ReactNode;
  populationGrowthTable: ReactNode;
  populationGenderAgeChart: ReactNode;
  populationGenderDistrictChart: ReactNode;
  populationActivityGenderChart: ReactNode;
  populationEducationActivityTable: ReactNode;
  birthDeathRegChart: ReactNode;
  birthDeathRegTable: ReactNode;
  employedJobGenderChart: ReactNode;
  jobSeekersListingTitleChart: ReactNode;
  jobSeekersListingEducationChart: ReactNode;
  jobSeekersListingEducationTable: ReactNode;
  jobStatsOverviewTable: ReactNode;
};

export default function Layout({
  overview,
  populationGrowthChart,
  populationGrowthTable,
  populationGenderAgeChart,
  populationGenderDistrictChart,
  populationActivityGenderChart,
  populationEducationActivityTable,
  birthDeathRegChart,
  birthDeathRegTable,
  employedJobGenderChart,
  jobSeekersListingTitleChart,
  jobSeekersListingEducationChart,
  jobSeekersListingEducationTable,
  jobStatsOverviewTable,
}: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle>Demografi</SectionTitle>
      {overview}
      {populationGrowthChart}
      {populationGrowthTable}

      <div className="grid grid-cols-2 gap-6">
        {populationGenderAgeChart}
        {populationGenderDistrictChart}
      </div>

      {birthDeathRegChart}
      {birthDeathRegTable}

      <div className="grid grid-cols-2 gap-6">
        {populationActivityGenderChart}
        {employedJobGenderChart}
      </div>

      {populationEducationActivityTable}
      {jobSeekersListingEducationTable}

      <div className="grid grid-cols-2 gap-6">
        {jobSeekersListingTitleChart}
        {jobSeekersListingEducationChart}
      </div>

      {jobStatsOverviewTable}
    </div>
  );
}
