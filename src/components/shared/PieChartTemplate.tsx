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

/**
 * PieChartTemplate is a reusable component for rendering a pie chart
 * using the Recharts library. It allows for customizable dimensions,
 * positioning, and tooltip integration.
 *
 * @param {Object} props - The properties object.
 * @param {any[]} props.data - The data array for the Pie chart, where each object should contain a `value` key.
 * @param {number | undefined} props.chartWidth - The width of the chart. If undefined, the chart will be responsive.
 * @param {number | undefined} props.chartHeight - The height of the chart. If undefined, the chart will be responsive.
 * @param {number} props.cx - The x-coordinate of the center of the pie chart.
 * @param {number} props.cy - The y-coordinate of the center of the pie chart.
 * @param {number} [props.innerRadius] - The inner radius of the pie chart. Optional.
 * @param {number} props.outerRadius - The outer radius of the pie chart.
 * @param {string} props.fillColor - The fill color for the pie chart segments.
 * @param {React.ReactNode} [props.tooltip] - Optional tooltip component to display when hovering over segments.
 *
 * @returns {JSX.Element} The PieChartTemplate component containing a pie chart with optional tooltip integration.
 */
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
