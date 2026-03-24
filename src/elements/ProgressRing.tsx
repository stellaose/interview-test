import { useEffect, useState, useRef } from "react";
import Forward from "../assets/svg/forward.svg";
import Image from "../assets/svg/image.svg";

const TARGET = 75;
const DURATION = 1600;

const SIZE = 149;
const CX = 74.5;
const CY = 74.5;
const RADIUS = 64.34;
const CLIP_R = 52.83;
const IMG_XY = 12.87;
const IMG_SZ = 123.26;
const STROKE = 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function ProgressRing() {
  const [progress, setProgress] = useState(0);
  const animRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * TARGET));
      if (t < 1) animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  const startAngle = -90;
  const sweepDeg = (progress / 100) * 360;
  const endAngle = startAngle + sweepDeg;

  const labelPt = polarToCartesian(CX, CY, RADIUS, startAngle);
  const tangentAngle = startAngle + 90;

  const startPt = polarToCartesian(CX, CY, RADIUS, startAngle);
  const endPt = polarToCartesian(CX, CY, RADIUS, endAngle);

  return (
    <div className="bg-white py-[21px] pl-[29px] pr-7 rounded-[20px] w-[243px] mx-auto">
      <div className="flex justify-between items-start">
        <section className="font-poppins">
          <p className="text-sm text-grey-100">Customer metric</p>
          <p className="text-[10px] text-grey-200">Overall Insight</p>
        </section>
        <img src={Forward} alt="" />
      </div>

      <div className="w-[149px] mx-auto mt-4">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <defs>
            <clipPath id="img-clip">
              <circle cx={CX} cy={CY} r={CLIP_R} />
            </clipPath>
            <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6F6F6" />
              <stop offset="100%" stopColor="#38696B" />
            </linearGradient>
            
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eed7d3" />
              <stop offset="25%" stopColor="#e9bdb6" />
              <stop offset="70%" stopColor="#f78875" />
              <stop offset="80%" stopColor="#FD6046" />
            </linearGradient>

            <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FD654B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FD654B" stopOpacity="1" />
            </radialGradient>
          </defs>

          <circle
            cx={CX}
            cy={CY}
            r={RADIUS - 9}
            fill="none"
            stroke="url(#green-grad)"
            strokeWidth={3}
          />

          {/* 1. Background track */}
          <circle
            cx={CX}
            cy={CY}
            r={RADIUS}
            fill="none"
            stroke="rgba(0,0,0,0.07)"
            strokeWidth={STROKE}
          />

          {/* 2. Gradient progress arc */}
          <circle
            cx={CX}
            cy={CY}
            r={RADIUS}
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth={STROKE}
            strokeLinecap="butt"
            strokeDasharray={CIRCUMFERENCE.toFixed(2)}
            strokeDashoffset={offset.toFixed(2)}
            transform={`rotate(-90 ${CX} ${CY})`}
          />
          {/* <div className="border rounded-full border-green"> */}
          <image
            href={Image}
            x={IMG_XY}
            y={IMG_XY}
            width={IMG_SZ}
            height={IMG_SZ}
            clipPath="url(#img-clip)"
            preserveAspectRatio="xMidYMid slice"
            className="border rounded-full border-green"
          />
          {/* </div> */}

          {/* 4. Start cap dot */}
          <circle
            cx={startPt.x}
            cy={startPt.y}
            r={4}
            fill="rgba(255,255,255,0.3)"
          />

          {/* 5. End dot */}
          {progress > 1 && (
            <circle
              cx={endPt.x}
              cy={endPt.y}
              r={6}
              fill="url(#dot-glow)"
              stroke="#fb923c"
              strokeWidth={1}
            />
          )}

          {progress > 8 && (
            <g
              transform={`translate(${labelPt.x},${labelPt.y}) rotate(${tangentAngle})`}
            >
              <rect
                x="-16"
                y="-8"
                width="32"
                height="16"
                rx="8"
                fill="#ffffff"
              />
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#616263"
                fontSize="7"
                fontWeight="400"
                fontFamily="Poppins, sans-serif"
                letterSpacing="-0.2"
              >
                {progress}%
              </text>
            </g>
          )}
        </svg>
      </div>
      
      <p className="text-center font-medium font-poppins text-grey-200 text-xxs mt-2">Promising Customer</p>
    </div>
  );
}
