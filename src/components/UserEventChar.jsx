import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getUser } from "../hooks/useAuth";
import { apiGet } from "../services/apiService";

export default function UserEventChart() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUserEvents() {
      try {
        const userEvents = await apiGet(`${urlApi}/userEvents?userId=${user.id}`);
        const events = await apiGet(`${urlApi}/events`);

        const joined = userEvents
          .map((ue) => events.find((e) => e.eventId === ue.eventId))
          .filter(Boolean);

        const counts = joined.reduce((acc, event) => {
          acc[event.type] = (acc[event.type] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.entries(counts).map(([type, value]) => ({
          name: type === "sieve" ? "Peneira" : "Torneio",
          value,
        }));

        setData(chartData);
      } catch (error) {
        console.error("Erro ao carregar gráfico:", error);
      }
    }

    if (user?.id) fetchUserEvents();
  }, [user?.id]);

  const COLORS = ["#10B981", "#3B82F6", "#F59E0B"];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">
        Participações em Eventos
      </h3>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel} 
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />

            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontWeight: 500 }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500 text-sm">
          Nenhum evento encontrado.
        </p>
      )}
    </div>
  );
}
