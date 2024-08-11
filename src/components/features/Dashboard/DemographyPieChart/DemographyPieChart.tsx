// libraries.
import { Tooltip } from "recharts";
// hooks.
import { useAppSelector } from "../../../../app/hooks";
// slices.
import {
  selectDemographicAge,
  selectDemographicGender,
} from "../../../../app/analyticsData/analyticsSlice";
// components: template.
import { PieChartTemplate } from "../../../shared/PieChartTemplate";

/**
 * CustomTooltip is a custom tooltip component for the pie chart.
 * It displays the label and value of the first item in the payload if active.
 *
 * @param {Object} props - The properties of the component.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The data passed to the tooltip.
 * @returns {JSX.Element | null} The content of the tooltip or null if not active.
 */
const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`edades ${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

/**
 * DemographyPieChart is a component that renders two pie charts
 * based on demographic data of ages and genders.
 *
 * It uses `PieChartTemplate` to render both charts and a custom `CustomTooltip`
 * to display information for each section of the chart.
 *
 * @returns {JSX.Element} The DemographyPieChart component containing two pie charts.
 */
export const DemographyPieChart: React.FC = () => {
  const ages = useAppSelector(selectDemographicAge);
  const genders = useAppSelector(selectDemographicGender);

  const data01 = ages.map((ageRanges) => ({
    name: ageRanges.rango,
    value: ageRanges.porcentaje,
  }));

  const data02 = genders.map((genderType) => ({
    name: genderType.tipo,
    value: genderType.porcentaje,
  }));

  return (
    <div style={{ width: "30%", height: 300 }}>
      <PieChartTemplate
        chartWidth={300}
        chartHeight={300}
        data={data01}
        cx={150}
        cy={180}
        outerRadius={80}
        fillColor={"#8884d8"}
        tooltip={
          <Tooltip
            content={
              <CustomTooltip
                active={true}
                payload={[
                  { name: data01[0].name, value: data01[0].value, unit: "" },
                ]}
              />
            }
          />
        }
      />
      <PieChartTemplate
        chartWidth={300}
        chartHeight={300}
        data={data02}
        cx={150}
        cy={180}
        innerRadius={40}
        outerRadius={80}
        fillColor={"#82ca9d"}
        tooltip={<Tooltip />}
      />
    </div>
  );
};
