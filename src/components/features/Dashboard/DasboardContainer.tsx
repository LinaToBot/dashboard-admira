// hooks.
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// slices.
import {
  selectDemography,
  updateVistasPagina,
} from "../../../app/analyticsData/analyticsSlice";
// components.
import { TimeLineChart } from "./TimeLineChart/TimeLineChart";

export const DashboardContainer: React.FC = () => {
  const analitics = useAppSelector(selectDemography);
  // const dispatch = useAppDispatch();

  return (
    <>
      <p>DashboardContainer</p>
      <TimeLineChart />

      {analitics.edad.map((item, index) => (
        <p key={`${item}-${index}`}>{item.rango}</p>
      ))}
    </>
  );
};
