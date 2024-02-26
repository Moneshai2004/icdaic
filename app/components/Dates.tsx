import React from "react";
import { Tracks } from "./Tracks";

const Date = () => {
  return (
    <>
      <div
      id='about-schedule'
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div
          className="flex flex-col justify-center items-center rounded-2xl max-w-max md:p-5 xl:p-10 lg:p-10"
          style={{ backgroundColor: "#9da4e1" }}
        >
          <div className="md:pt-4 lg:pt-4 xl:pt-4 md:pb-8 lg:pb-8 xl:pb-8 text-3xl md:text-3xl lg:text-6xl">
            Important Dates
          </div>
          <div className="text-sm xl:text-4xl space-y-4 md:text-xl lg:text-3xl p-4">
            <div className="bg-blue-900 p-14 rounded-2xl w-full h-full overflow-auto">
              <div className="text-white flex flex-col gap-10">
                <div className="flex justify-between">
                  <div>Abstract submission:</div>
                  <div>01/03/2024</div>
                </div>
                <div className="flex justify-between">
                  <div>Full paper submission:</div>
                  <div>13/03/2024</div>
                </div>
                <div className="flex justify-between">
                  <div>Intimation of acceptance:</div>
                  <div>20/03/2024</div>
                </div>
                <div className="flex justify-between">
                  <div>Camera ready paper for registration:</div>
                  <div>26/03/2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tracks />
    </>
  );
};

export default Date;
