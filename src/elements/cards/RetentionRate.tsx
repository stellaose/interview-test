import React from "react";
import ArrowDown from "../../assets/svg/arrow-down.svg";


export const RetentionRate: React.FC = () => {

  const value = 58;

  // SVG arc helpers
  const cx = 110,
    cy = 110,
    r = 80;
  const startAngle = -180; // left
  const endAngle = 0; // right (half circle)
  
  
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const arcPath = (start: number, end: number, radius: number) => {
    const s = toRad(start);
    const e = toRad(end);
    const x1 = cx + radius * Math.cos(s);
    const y1 = cy + radius * Math.sin(s);
    const x2 = cx + radius * Math.cos(e);
    const y2 = cy + radius * Math.sin(e);
    const large = end - start > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
  };

  const valueDeg = -180 + (value / 100) * 180;
const slantRad = toRad(valueDeg);
  const slantX = cx + r * Math.cos(slantRad);
  const slantY = cy + r * Math.sin(slantRad);
  const bladeAngle = valueDeg + 90;
  const bladeW = 4;
  const bladeH = 50;
  
  return (
    <div className="relative inline-flex flex-col w-[323px]  rounded-2xl px-8 pt-[27px] pb-4 bg-white-100 font-poppins border border-[#0C0C0D0D]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-grey-100 font-medium text-sm">Retention Rate</h2>

        <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px] flex ">
          Weekly <img src={ArrowDown} alt="" />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <svg width="220" height="120" viewBox="0 0 220 120">
          {/* Gauge background */}
          <path
            d={arcPath(startAngle, endAngle, r)}
            fill="none"
            stroke="#E9ECF1"
            strokeWidth="40"
            strokeLinecap="butt"
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#021717" />
              <stop offset="100%" stopColor="#DFF4F5" />
            </linearGradient>
            
          </defs>
          <path
            d={arcPath(startAngle, valueDeg, r)}
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="40"
            strokeLinecap="butt"
          />
<rect
            x={slantX - bladeW / 2}
            y={slantY - bladeH / 2}
            width={bladeW}
            height={bladeH}
            fill="#111827"
            transform={`rotate(${bladeAngle}, ${slantX}, ${slantY})`}
          />
          {/* Value label */}
          <text
            x={cx}
            y={cy - 20}
            textAnchor="middle"
            fontSize="32"
            fontWeight="700"
            fill="#1a202c"
            dominantBaseline="middle"
            
          >
            {value}
          </text>
        </svg>
      </div>
    </div>
  );
};
