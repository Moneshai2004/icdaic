import React from "react";
import { Tracks2 } from "./Track2";

export const Tracks = () => {
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
          <div className="text-3xl font-bold">Tracks I</div>
          <div className="text-sm xl:text-4xl space-y-4 md:text-xl lg:text-3xl p-4">
            <div className="bg-blue-900 p-14 rounded-2xl w-full h-full overflow-auto">
              <div className="text-white flex flex-col gap-10">
                <div>Data analytics and data engineering</div>
                <div className="ml-4 md:ml-10 lg:ml-10 xl:ml-10 flex flex-col gap-5">
                  <div>Knowledge engineering</div>
                  <div>Data management</div>
                  <div>Business analytics</div>
                  <div>Big Data Analytics</div>
                  <div>Web data management and development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tracks2 />
    </>
  );
};
