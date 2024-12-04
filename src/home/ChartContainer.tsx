import { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartData = [
  { id: 1, day: "Sun", minutes: 10 },
  { id: 2, day: "Mon", minutes: 20 },
  { id: 3, day: "Tue", minutes: 30 },
  { id: 4, day: "Wed", minutes: 15 },
  { id: 5, day: "Thu", minutes: 40 },
  { id: 6, day: "Fri", minutes: 20 },
  { id: 7, day: "Sat", minutes: 16 },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ChartContainer = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Handle day selection
  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex flex-col h-[230px] px-2 w-[302px] rounded-xl border-[1px] border-bg-form mx-auto py-2 gap-4 font-productSans">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-sm text-black font-bold tracking-tight">Active time</h2>
        <select
          name="Last 7 days"
          id="day-select"
		  className="py-2 px-2 text-sm border border-none bg-bg-gray-deep bg-opacity-50 rounded-xl text-black outline-none"
          value={selectedDay || ""}
          onChange={(e) => handleDaySelect(e.target.value)}
        >
          <option value="">Select a day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <Legend />
          <Tooltip />
          <Bar
            dataKey="minutes"
            fill="#D1D5DB"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContainer;
