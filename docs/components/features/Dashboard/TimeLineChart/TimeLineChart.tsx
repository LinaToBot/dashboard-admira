// libraries.
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// hooks.
import { useAppSelector } from "../../../../app/hooks";
// slices.
import {
  selectViews,
  selectSessions,
} from "../../../../app/analyticsData/analyticsSlice";

/**
 * TimeLineChart is a component that renders a line chart displaying
 * page views and sessions over time using the Recharts library.
 *
 * It fetches data from Redux selectors and maps it into a format suitable
 * for rendering two lines on the chart: one for page views and one for sessions.
 *
 * @returns {JSX.Element} The TimeLineChart component containing a responsive line chart.
 */
export const TimeLineChart: React.FC = () => {
  const pageViews = useAppSelector(selectViews);
  const sessions = useAppSelector(selectSessions);

  const data = pageViews.map((view, index) => ({
    name: view.fecha === sessions[index].fecha && view.fecha,
    views: view.vistas,
    sessions: sessions[index] ? sessions[index].sesiones : 0,
  }));

  return (
    <div style={{ width: "30%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sessions"
            stroke="#8884d8"
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#82ca9d"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
