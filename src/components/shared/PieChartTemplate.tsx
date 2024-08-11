import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface PieChartTemplateProps {
  data: any[];
  chartWidth: number | undefined;
  chartHeight: number | undefined;
  cx: number;
  cy: number;
  innerRadius?: number;
  outerRadius: number;
  fillColor: string;
  tooltip?: React.ReactNode;
}

export const PieChartTemplate: React.FC<PieChartTemplateProps> = ({
  data,
  tooltip,
  chartWidth,
  chartHeight,
  cx,
  cy,
  innerRadius,
  outerRadius,
  fillColor,
}) => {
  return (
    <ResponsiveContainer>
      <PieChart width={chartWidth} height={chartHeight}>
        <Pie
          dataKey="value"
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill={fillColor}
          label
        />
        {tooltip}
      </PieChart>
    </ResponsiveContainer>
  );
};
