import React from "react";

type LeadCardProps = {
  total: number;
  data: number[];
};

export const LeadCard: React.FC<LeadCardProps> = ({ total, data }) => {
  return (
    <div className=" rounded-2xl pt-5 pb-[25.88px] pl-[38px] pr-[25.62px] w-[323px] h-[195px] font-poppins border border-[#0C0C0D0D]">
      <div className="flex justify-between items-center">
        <h3 className="text-grey-100 font-medium text-sm">Total Leads</h3>
        <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px]">
          View
        </button>
      </div>

      <div className="flex items-end gap-x-2 mt-4 mb-1">
        <h1 className="text-[50px] font-medium text-grey-300 leading-[43px]">
          {total.toLocaleString()}
        </h1>
        <span className="text-grey-300 text-next">Leads</span>
      </div>

      <div className="flex items-end gap-1 h-[56.12px]">
        {data.map((value, index) => {
          const isPink = index % 2 === 1;

          return (
            <div
              key={index}
              className={`w-[15.26px] rounded-full ${
                isPink ? "bg-pink mr-1" : "bg-black-100"
              }`}
              style={{
                height: `${value}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
