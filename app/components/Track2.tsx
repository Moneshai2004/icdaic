import React from "react";
import { Tracks3 } from "./Tracks3";

export const Tracks2 = () => {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div
          className="flex flex-col justify-center items-center max-w-max rounded-2xl md:p-5 xl:p-10 lg:p-10"
          style={{ backgroundColor: "#9da4e1" }}
        >
          <div className="text-3xl font-bold">Tracks II</div>
          <div className="text-sm xl:text-4xl space-y-4 md:text-xl lg:text-xl p-4">
            <div className="bg-blue-900 p-14 rounded-2xl w-full h-full overflow-auto">
              <div className="text-white flex flex-col gap-10">
                <div className="text-3xl">
                  Deep learning in autonomous systems
                </div>
                <div className="ml-4 md:ml-10 lg:ml-10 xl:ml-10 flex flex-col gap-5">
                  <div>Intelligent process control</div>
                  <div>Autonomous Vehicles</div>
                  <div>Cyber physical system</div>
                  <div>Smart energy system</div>
                  <div>Half healing network</div>
                  <div>Automatic customer service</div>
                  <div>Autonomous underwater Vehicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tracks3 />
    </>
  );
};
