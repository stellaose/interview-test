import React from "react";

type Stage = {
  label: string;
  value: number;
  color: string;
};

const stages: Stage[] = [
  {
    label: "Contacted",
    value: 30,
    color: "bg-[#001f1d]",
  },
  {
    label: "Qualify",
    value: 57,
    color: "bg-pink",
  },
];

export const LeadPipelineCard: React.FC = () => {
  return (
    <>
      <div className=" rounded-2xl pt-5 pb-[15px] pl-10 pr-[39px] w-[323px] h-[195px] font-poppins border border-[#0C0C0D0D] bg-white-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-grey-100 font-medium text-sm">Leads Pipeline</h3>
          <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px]">
            View
          </button>
        </div>

        <div className="relative mt-[30px]">
          {/*  Background progress bar */}
          <div className="w-[246px] h-4 bg-white-200 rounded-full overflow-hidden px-1 py-[3px] flex gap-3 mt-25">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`${stage.color} h-full rounded-2xl`}
                style={{ width: `${stage.value}%` }}
              />
            ))}
          </div>

          {/* Indicators */}
          {stages.map((stage, index) => {
            const leftOffset =
              stages
                .slice(0, index + 1)
                .reduce((acc, curr) => acc + curr.value, 0) -
              stage.value / 1.1;

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{ left: `${leftOffset}%`, top: "-80px" }}
              >
                {/* Percentage label */}
                <div
                  className={`px-1.5 py-px text-white text-[9px] rounded-[3px] ${stage.color}`}
                >
                  {stage.value}%
                </div>

                {/* Line + dot */}
                <div className="flex flex-col items-center mt-1 -ml-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                  <div className="w-px h-12 bg-gray-400" />
                </div>
              </div>
            );
          })}

          {/* Labels */}
          <div className="flex px-2 gap-x-4 text-gray-600 text-[10px]">
            {stages.map((stage, index) => (
              <span style={{ width: `${stage.value}%` }} key={index}>
                {stage.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
