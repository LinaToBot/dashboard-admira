// hooks.
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// slices.
import {
  selectDemography,
  updateVistasPagina,
} from "../../../app/analyticsData/analyticsSlice";
// components.
import { LineChart } from "./LineChart/LineChart";

export const DashboardContainer: React.FC = () => {
  const analitics = useAppSelector(selectDemography);
  // const dispatch = useAppDispatch();

  return (
    <>
      <p>DashboardContainer</p>
      <LineChart />

      {analitics.edad.map((item, index) => (
        <p key={index}>{item.rango}</p>
      ))}
    </>
  );
};
