import React, { useState } from "react";

import Logo from "../assets/svg/logo.svg";
import DashboardIcon from "../assets/svg/dashboard-circle.svg";
import Store from "../assets/svg/store.svg";
import Attendance from "../assets/svg/attendance.svg";
import Task from "../assets/svg/task.svg";
import User from "../assets/svg/user.svg";
import ProgressRing from "./ProgressRing";

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="h-[100vh] w-[267px] bg-black-100 pt-[73px]">
        <div className="flex justify-center items-center gap-x-[5px]">
          <img src={Logo} alt="Logo" className="w-[27px] h-[27px]" />{" "}
          <p className="font-righteous text-2xl text-white">Logo</p>
        </div>

        <div className="mt-[59px] ml-3 flex flex-col gap-y-[9px]">
          <div className="w-[233px] py-[9px] bg-green-100 rounded-[20px] flex items-center gap-x-[17px] cursor-pointer transition duration-300 transform hover:scale-105 hover:!bg-green-200">
            <img src={DashboardIcon} alt="" className="ml-8" />
            <p className="font-poppins text-white font-medium">Overview</p>
          </div>

          <div
            className="w-[233px] py-[9px] hover:bg-green-100  rounded-[20px] flex items-center gap-x-[17px] cursor-pointer transition duration-300 transform hover:scale-105"
            onClick={() => setSidebar(!sidebar)}
          >
            <img src={Store} alt="" className="ml-8" />
            <p className="font-poppins text-white font-medium">CRM</p>
          </div>
          {sidebar && (
            <div className="border-t border-t-grey w-[231px] pt-[19px] ">
              <div className="ml-20 flex flex-col gap-y-[18px]">
                <div className="flex items-center gap-x-[17px]">
                  <img src={Task} alt="" />{" "}
                  <p className="text-xs font-poppins font-medium text-white">
                    Project
                  </p>
                </div>

                <div className="flex items-center gap-x-[17px]">
                  <img src={Attendance} alt="" />{" "}
                  <p className="text-xs font-poppins font-medium text-white">
                    Attendance
                  </p>
                </div>

                <div className="flex items-center gap-x-[17px]">
                  <img src={User} alt="" />{" "}
                  <p className="text-xs font-poppins font-medium text-white">
                    Users
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-[130px]">
          <ProgressRing/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
