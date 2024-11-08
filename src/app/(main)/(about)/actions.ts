import { XChartGenderData } from "./XBarGenderChart";
import citizenGrowthData from "./data/citizen-growth.json";
import citizenBirthRegistrationData from "./data/citizen-birth-registration.json";
import citizenEducationData from "./data/citizen-education.json";
import jobseekerData from "./data/jobseeker.json";
import ikhtisarData from "./data/ikhtisar.json";

import jobSeekerByTitleChartData from "./data/jobseeker-by-title-chart.json";
import jobSeekerByEducationChartData from "./data/jobseeker-by-education-chart.json";
import citizenActivityByAgeChartData from "./data/citizen-activity-by-age-chart.json";
import citizenActivityByJobChartData from "./data/citizen-activity-by-job-chart.json";

export type CitizenGrowthData = (typeof citizenGrowthData.data)["0"];

export type CitizenBirthRegistrationData =
  (typeof citizenBirthRegistrationData.data)["0"];

export type CitizenEducationData = (typeof citizenEducationData.data)["0"];

export type JobSeekerData = (typeof jobseekerData.data)["0"];

export type IkhtisarData = (typeof ikhtisarData.data)["0"];

const tableData = {
  citizenGrowthData,
  citizenBirthRegistrationData,
  citizenEducationData,
  jobseekerData,
  ikhtisarData,
};

export const getTableData = async (key: keyof typeof tableData) => {
  return tableData[key].data;
};

const chartData = {
  jobSeekerByTitleChartData,
  jobSeekerByEducationChartData,
  citizenActivityByAgeChartData,
  citizenActivityByJobChartData,
};

export const getChartData = async (
  key: keyof typeof chartData,
): Promise<XChartGenderData> => {
  return chartData[key].data;
};
