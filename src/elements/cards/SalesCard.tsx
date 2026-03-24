import React from "react";
import Union from "../../assets/svg/Union.svg";

export const SalesCard: React.FC = () => {
  return (
    <>
      <div className=" rounded-2xl pt-[23px] pb-[22px] pl-[18px] pr-[17px] w-[323px] h-[195px] font-poppins border border-[#0C0C0D0D] bg-white-100">
        <div className="text-grey-100 font-medium text-sm">Total Sales</div>
        <div className="mt-[26px]">
          <h1 className="text-[50px] leading-[43px] mb-1  font-medium text-grey-300">
            2,100K
            <span className="text-next">$</span>
          </h1>
        </div>

        <div className="bg-black-100 h-[47px] rounded-4xl pt-3.5 pb-[14.5px] pl-4.5 pr-[20.34px] flex justify-between items-center text-white">
          <p className="text-[10px]">View Chart</p> <img src={Union} alt="" />
        </div>
      </div>
    </>
  );
};
