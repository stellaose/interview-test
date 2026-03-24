import React, { useState } from "react";
import ArrowDown from '../../assets/svg/arrow-down.svg';

type Period = "Weekly";

interface DayData {
  day: string;
  value: number;
}

const weeklyData: DayData[] = [
  { day: "Mon", value: 180 },
  { day: "Tue", value: 220 },
  { day: "Wed", value: 140 },
  { day: "Thu", value: 340 },
  { day: "Fri", value: 260 },
  { day: "Sat", value: 200 },
  { day: "Sun", value: 100 },
];

const dataMap: Record<Period, DayData[]> = {
  Weekly: weeklyData,
};

export const RevenueCard: React.FC = () => {
  const [period] = useState<Period>("Weekly");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(4);

  const data = dataMap[period];
  const maxValue = Math.max(...data.map((d) => d.value));

  const CHART_HEIGHT = 120;

  const formatValue = (val: number) => {
    if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
    return `$${val}`;
  };

  const toBarPx = (val: number) =>
    Math.round((val / maxValue) * CHART_HEIGHT);

  const yTicks = [100, 200, 300].map((t) => ({
    label: `${t}$`,
    bottomPx: toBarPx(t),
  }));

  const activeIndex =
    hoveredIndex ?? data.findIndex((d) => d.value === maxValue);

  return (
    <div className="w-[323px] rounded-2xl border border-[#0C0C0D0D] font-poppins bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-grey-100 font-medium text-sm">Revenue</h2>

          <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px] flex ">
            Weekly <img src={ArrowDown} alt=""/>
          </button>
      </div>

      {/* Chart */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 bottom-6 flex flex-col justify-between h-[100px] text-[10px] text-grey-200">
          {yTicks.reverse().map((tick) => (
            <span key={tick.label}>{tick.label}</span>
          ))}
        </div>

        {/* Bars + labels */}
        <div
          className="ml-8 flex items-end justify-between"
          style={{ height: `${CHART_HEIGHT + 20}px` }}
        >
          {data.map((item, i) => {
            const barPx = toBarPx(item.value);
            const isActive = i === activeIndex;

            return (
              <div
                key={item.day}
                className="flex flex-col items-center justify-end cursor-pointer"
                style={{ width: "30px" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip */}
                <div
                  className={`mb-1 transition-all duration-200 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  <span className="text-[10px] text-grey-200 px-2 py-1 rounded-[20px] bg-purple-200 whitespace-nowrap">
                    {formatValue(item.value)}
                  </span>
                </div>

                {/* Bar */}
                <div
                  className="w-full rounded-[10px] transition-all duration-300"
                  style={{
                    height: `${barPx}px`,
                    background: isActive ? "#021717" : "#e5e7eb",
                    minHeight: "8px",
                  }}
                />

                {/* Label */}
                <span className="mt-1 text-[10px] text-grey-100 font-medium">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};