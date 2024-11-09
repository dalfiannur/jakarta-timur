import jobSeekerByTitleChartData from "./data/jobseeker-by-title-chart.json";
import jobSeekerByEducationChartData from "./data/jobseeker-by-education-chart.json";
import citizenActivityByAgeChartData from "./data/citizen-activity-by-age-chart.json";
import citizenActivityByJobChartData from "./data/citizen-activity-by-job-chart.json";

const chartData = {
  jobSeekerByTitleChartData,
  jobSeekerByEducationChartData,
  citizenActivityByAgeChartData,
  citizenActivityByJobChartData,
};

export const getChartData = async (
  key: keyof typeof chartData,
): Promise<any> => {
  return chartData[key].data;
};
