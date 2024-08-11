// hooks.
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// slices.
// import {
//   selectDemography,
//   updateVistasPagina,
// } from "../../../app/analyticsData/analyticsSlice";
// components.
import { TimeLineChart } from "./TimeLineChart/TimeLineChart";
import { DemographyPieChart } from "./DemographyPieChart/DemographyPieChart";

export const DashboardContainer: React.FC = () => {
  // const analitics = useAppSelector(selectDemography);
  // const dispatch = useAppDispatch();

  return (
    <>
      <TimeLineChart />
      <DemographyPieChart />
    </>
  );
};
