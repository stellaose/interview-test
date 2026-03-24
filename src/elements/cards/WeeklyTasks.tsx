import React from "react";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import Happy from "../../assets/svg/happy.svg";
import MaleAvatar from "../../assets/svg/male-avatar.svg";
import FemaleAvatar from "../../assets/svg/female-avatar.svg";
import Cancel from "../../assets/svg/cancel.svg";
import Video from "../../assets/svg/video.svg";

export const WeeklyTasks: React.FC = () => {
  return (
    <>
      <div>
        <div className="bg-black-100 rounded-20 pl-[38px] pr-[37px] pt-[27px] pb-[15px] font-poppins flex justify-between">
          <div style={{ display: "flex", gap: 32 }}>
            {/* Tasks */}
            <div className="w-[275px]">
              <p className="text-sm font-medium text-white">Weekly Tasks</p>

              <div className="flex gap-x-[31px] mt-10.5">
                <div className="flex flex-col text-white">
                  <p className="text-[50px] leading-[43px] font-medium">70%</p>
                  <p className="text-xxs ">Task Completed</p>
                </div>
                <div className="flex flex-col text-white">
                  <p className="text-[50px] leading-[43px] font-medium">31%</p>
                  <p className="text-xxs ">Better than previous month</p>
                </div>
              </div>
              <div className="flex items-center mr-[17px] gap-x-1 py-0.75 px-2.5 rounded-30 bg-white-200 mt-3.5">
                <img src={Happy} alt="" />
                <span className="text-xxs">
                  Your work balance this week. Awesome!
                </span>
              </div>
            </div>

            {/* Meetings */}
            <div className="w-[258px] ">
              <div className="flex justify-between items-center text-white mb-2">
                <p className="text-xxs">Scheduled Meetings</p>
                <button className="bg-grey-300 text-white text-[9px] px-1.5 py-[1px] rounded-[3px] flex ">
                  Daily <img src={ArrowDown} alt="" />
                </button>
              </div>

              <div className="bg-green pt-[15px] pr-1.5 pl-[9px] pb-8 rounded-20 flex flex-col gap-y-2.5">
                {[0, 1].map((i, index) => (
                  <div
                    key={i}
                    className="bg-white-100 py-[7px] px-[14.5px] rounded-20 flex justify-between items-center"
                  >
                    <div className="flex gap-x-3 items-center">
                       <img src={index === 0 ? MaleAvatar : FemaleAvatar} alt="" />
                    <div className="flex flex-col">
                      <p
                        className="text-next font-semibold leading-4 text-black-100"
                      >
                        Lane Wade
                      </p>
                      <p className="text-xxs text-black-100">
                        E-commerce
                      </p>
                    </div>
                    </div>
                   
                    <div className="flex items-center gap-x-2.5">
                      <img src={Cancel} alt="" />
                      <img src={Video} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
