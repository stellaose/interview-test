import React from "react";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import More from '../../assets/svg/more-horizontal.svg';
import Lane1 from '../../assets/svg/animoji.svg';
import Lane from '../../assets/svg/animojii.svg';


interface Customer {
  name: string;
  subtitle: string;
  avatar: string;
  color: string;
  pct: number; // 0-100
}

const customers: Customer[] = [
  {
    name: "Lane Wade",
    subtitle: "E-commerce",
    avatar: Lane1,
    color: "#111827",
    pct: 85,
  },
  {
    name: "Lane Wade",
    subtitle: "E-commerce",
    avatar: Lane,
    color: "#146AFA",
    pct: 75,
  },
  {
    name: "Lane Wade",
    subtitle: "E-commerce",
    avatar: Lane1,
    color: "#FD46E8",
    pct: 55,
  },
];

const LEGEND = [
  { label: "Customer 1", color: "#111827" },
  { label: "Customer 2", color: "#146AFA" },
  { label: "Customer 3", color: "#FD46E8" },
];

// SVG donut arc helpers
const cx = 110,
  cy = 110;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const arcPath = (
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
) => {
  const s = toRad(startDeg - 90);
  const e = toRad(endDeg - 90);
  const x1 = cx + r * Math.cos(s);
  const y1 = cy + r * Math.sin(s);
  const x2 = cx + r * Math.cos(e);
  const y2 = cy + r * Math.sin(e);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
};

const rings = [
  { r: 90, strokeWidth: 16, customerIndex: 0 },
  { r: 68, strokeWidth: 16, customerIndex: 1 },
  { r: 46, strokeWidth: 16, customerIndex: 2 },
];

export const TopCustomers: React.FC = () => {

  return (
    <div className="inline-flex flex-col w-[323px] font-poppins rounded-2xl pt-5 pb-[15px] pl-10 pr-[39px] border border-[#0C0C0D0D]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-grey-100 font-medium text-sm">Top Customers</h2>

        <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px] flex ">
          Weekly <img src={ArrowDown} alt="" />
        </button>
      </div>

      <div className="flex justify-center mb-3">
        <svg width="220" height="220" viewBox="0 0 220 220">
          <defs>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FD46E8" />
              <stop offset="100%" stopColor="#FD46E8" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#146AFA" />
              <stop offset="100%" stopColor="#146AFA" />
            </linearGradient>
          </defs>

          {rings.map(({ r, strokeWidth, customerIndex }) => {
            const c = customers[customerIndex];
            const gap = 10;
            const trackEnd = 360 - gap;
            const fillEnd = (c.pct / 100) * trackEnd;

            const trackColor = "#F5F5F5";

            const fillColor =
              customerIndex === 0
                ? "#111827"
                : customerIndex === 1
                  ? "url(#blueGrad)"
                  : "url(#pinkGrad)";

            return (
              <g key={customerIndex}>
                {/* Track */}
                <path
                  d={arcPath(cx, cy, r, 0, trackEnd)}
                  fill="none"
                  stroke={trackColor}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
                {/* Fill */}
                <path
                  d={arcPath(cx, cy, r, 0, fillEnd)}
                  fill="none"
                  stroke={fillColor}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* Center text */}
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fontSize="28"
            fontWeight="700"
            fill="#111827"
            fontFamily="'DM Sans', sans-serif"
          >
            99%
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-5 -mx-6">
        {LEGEND.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: l.color }}
            />
            <span className="text-xxs text-[#000000]">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Customer rows */}
      <div className="flex flex-col gap-2">
        {customers.slice(0, 2).map((c, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-3 py-2.5 rounded-20 -mx-4 ${i === 1 ? "bg-grey-400" : ""}`}
          >
            <div className="flex items-center gap-3">
              <img src={c.avatar} alt=""/>
              <div>
                <p className="text-next font-semibold text-grey-100 leading-tight">
                  {c.name}
                </p>
                <p className="text-xxs text-grey-100 font-light">{c.subtitle}</p>
              </div>
            </div>
            <img src={More} alt=""/>
          </div>
        ))}
      </div>
    </div>
  );
};
