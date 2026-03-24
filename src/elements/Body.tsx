import React from "react";
import BellIcon from "../assets/svg/bell.svg";
import SettingsIcon from "../assets/svg/settings.svg";
import Avatar from "../assets/svg/female-avatar.svg";
import {
  LeadCard,
  LeadPipelineCard,
  RetentionRate,
  RevenueCard,
  SalesCard,
  TopCustomers,
  WeeklyTasks,
} from "./cards";

const Body: React.FC = () => {
  const data = [30, 60, 70, 80, 50, 65, 45, 75, 60, 85, 50, 90];
  return (
    <>
      <div className="pl-[54px] pr-30">
        <div className=" flex justify-between items-center">
          <h1 className="text-32 font-poppins text-grey-200 font-bold">
            Dashboard
          </h1>
          <div className="flex gap-[22px]">
            <div className="flex gap-[9px]">
              <img src={BellIcon} alt="" className="w-6" />
              <img src={SettingsIcon} alt="" className="w-6" />
            </div>

            <div className="flex gap-x-3 items-center">
              <img src={Avatar} alt="" />
              <div className="font-poppins">
                <p className="text-grey-200 font-semibold">Full Name</p>
                <p className="text-xxs font-light">username@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[26px] flex flex-wrap gap-x-[15px] gap-y-[18px]">
          <LeadCard total={4100} data={data} />
          <LeadPipelineCard />
          <SalesCard />
          <div className="flex flex-col gap-y-[18px]">
            <div className="flex gap-x-[15px]">
              <RevenueCard />
              <RetentionRate />
            </div>
            <WeeklyTasks />
          </div>
          <TopCustomers />
        </div>
      </div>
    </>
  );
};

export default Body;
