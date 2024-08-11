// libraries.
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
// hooks.
import { useAppSelector } from "../../../../app/hooks";
import {
  selectDemographicAge,
  selectDemographicGender,
} from "../../../../app/analyticsData/analyticsSlice";

const CustomTooltip = ({ active, payload }: any) => {
  const ages = useAppSelector(selectDemographicAge);

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`edades ${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const DemographyPieChart: React.FC = () => {
  const ages = useAppSelector(selectDemographicAge);
  const genders = useAppSelector(selectDemographicGender);

  const data01 = ages.map((ageRanges, index) => ({
    name: ageRanges.rango,
    value: ageRanges.porcentaje,
  }));

  const data02 = genders.map((genderType, index) => ({
    name: genderType.tipo,
    value: genderType.porcentaje,
  }));

  return (
    <div style={{ width: "30%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={data01}
            cx={150}
            cy={180}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={data02}
            cx={150}
            cy={180}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
